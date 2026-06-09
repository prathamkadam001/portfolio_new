import {
  getMarkdownDocumentBySlug,
  markdownDocuments,
} from "@/lib/llm-seo"

type MarkdownRouteContext = {
  params: Promise<{
    slug: string[]
  }>
}

export const dynamic = "force-static"
export const revalidate = 86400

export function generateStaticParams() {
  return markdownDocuments.map((document) => ({
    slug: document.slug.split("/"),
  }))
}

export async function GET(_request: Request, { params }: MarkdownRouteContext) {
  const { slug } = await params
  const document = getMarkdownDocumentBySlug(slug)

  if (!document) {
    return new Response("Markdown document not found.", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
  }

  return new Response(document.content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "X-Robots-Tag": "noindex, follow",
      Link: `<${document.canonicalUrl}>; rel="canonical"`,
    },
  })
}
