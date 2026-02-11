import { NextRequest, NextResponse } from "next/server"

/**
 * Rota API responsável por receber mensagens do formulário de contato e
 * encaminhá-las para um webhook configurado no servidor. A URL do webhook
 * deve ser definida na variável de ambiente DISCORD_WEBHOOK_URL. Caso a
 * variável não esteja configurada ou ocorra algum erro no envio, a rota
 * retorna um status de erro apropriado.
 */
export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || ""
    let content = ""
    let files: File[] = []

    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData()
      content = String(fd.get("content") || "")
      files = fd.getAll("files").filter(Boolean) as File[]
    } else {
      const body = await req.json()
      content = String(body?.content || "")
    }
    const webhook = process.env.DISCORD_WEBHOOK_URL

    if (!webhook) {
      return NextResponse.json(
        { ok: false, error: "Webhook não configurado" },
        { status: 500 }
      )
    }

    // Se houver anexos, precisamos enviar como multipart para o webhook.
    // O Discord aceita envio de arquivos via webhook usando FormData.
    let discordRes: Response
    if (files.length > 0) {
      const out = new FormData()
      out.append("payload_json", JSON.stringify({ content }))
      files.forEach((file, i) => {
        // Observação: o Discord espera chaves no formato files[0], files[1]...
        out.append(`files[${i}]`, file, file.name)
      })

      discordRes = await fetch(webhook, {
        method: "POST",
        body: out,
      })
    } else {
      discordRes = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      })
    }

    if (!discordRes.ok) {
      return NextResponse.json(
        { ok: false, error: "Falha ao enviar mensagem para o Discord" },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Erro no servidor" },
      { status: 500 }
    )
  }
}