# Instruções para integrar a Landing Page Ambiental & Agrário

Esta landing page (`page.tsx`) foi criada para atender ao nicho de **Direito Ambiental e Agrário**, com foco em produtores rurais que receberam multas, autos de infração ou embargos. Além do conteúdo informativo, a página inclui um **formulário de captação** integrado à API interna de contato (`/api/contact`), além de diversos CTAs para WhatsApp.

## 1. Inclusão no menu (Header)

Abra o arquivo `src/components/Header.tsx` e procure pelo array `areas` (ou estrutura similar) que monta os itens do dropdown **Áreas de Atuação**. Adicione o seguinte objeto ao final do array:

```tsx
{ 
  title: "Ambiental & Agrário (Produtor Rural)",
  id: "ambiental-agrario",
  href: "/ambiental-agrario",
},
```

Certifique‑se de que, no map dos links do menu, o código utilize `area.href` quando fornecido (em vez de construir a URL a partir do `id`). Caso já tenha sido ajustado em versões anteriores, basta adicionar o objeto acima.

## 2. Inclusão na página `/areas`

Para que a nova área apareça no “lobby” de áreas de atuação (`src/app/(institutional)/areas/page.tsx`), adicione um objeto na lista de áreas com as seguintes propriedades (lembrando de importar `Tractor` do `lucide-react` no topo do arquivo):

```tsx
{
  id: "ambiental-agrario",
  icon: Tractor,
  title: "Direito Ambiental & Agrário (Produtor Rural)",
  description:
    "Defesa em autos de infração, multas e embargos, com atuação estratégica para produtores rurais e agronegócio.",
  services: [
    "Defesa em auto de infração ambiental",
    "Anulação/redução de multa ambiental",
    "Suspensão/reversão de embargo",
    "Execução fiscal ambiental",
    "Regularização fundiária (caso a caso)",
    "Consultoria preventiva em fiscalizações",
  ],
  href: "/ambiental-agrario",
},
```

## 3. Opção de CTA na Home

Se desejar mencionar rapidamente esta nova página na página inicial (home), crie um card ou bloco informativo com link para `/ambiental-agrario`, destacando algo como “Multa ambiental ou embargo? Saiba como defender sua propriedade”.

## 4. Teste de envio de formulários

O formulário da landing page envia dados para `POST /api/contact` no seu projeto. Para que funcione em produção, verifique se:

1. O endpoint `/api/contact/route.ts` está configurado para receber `name`, `phone`, `email`, `subject` e `message` no corpo JSON.
2. O campo `email` é obrigatório – caso não queira solicitar e‑mail do usuário, preenchemos com um marcador (`"---"`). Caso sua API exija outro formato, ajuste conforme necessário.
3. O webhook do Discord ou serviço de notificação utilizado na API esteja configurado e ativo.

## 5. Ajuste opcional de SEO e cabeçalhos

Para melhorar o SEO desta página, considere adicionar um `<Suspense>` com `Head` (Next.js) definindo `title` e `meta description` adequados, por exemplo:

```tsx
import { Suspense } from "react"
import Head from "next/head"

// dentro do componente padrão
<Suspense>
  <Head>
    <title>Defesa Ambiental & Agrária para Produtores Rurais | HR Advocacia</title>
    <meta name="description" content="Recebeu auto de infração, multa ou embargo ambiental? Saiba como o escritório HR Advocacia pode ajudar produtores rurais na defesa e regularização." />
  </Head>
</Suspense>
```

---

**Pronto!** Ao seguir estas instruções e adicionar a nova página ao menu e à listagem de áreas, você terá uma landing page completa e integrada ao seu site. Sinta‑se à vontade para ajustar estilos, textos ou componentes conforme a identidade visual do escritório.