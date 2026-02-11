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
    const { content } = await req.json()
    const webhook = process.env.DISCORD_WEBHOOK_URL

    if (!webhook) {
      return NextResponse.json(
        { ok: false, error: "Webhook não configurado" },
        { status: 500 }
      )
    }

    const discordRes = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    })

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