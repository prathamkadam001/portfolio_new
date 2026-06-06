import { indexNowKey } from "@/lib/llm-seo"

export const dynamic = "force-static"
export const revalidate = 31536000

export function GET() {
  return new Response(indexNowKey, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=31536000, s-maxage=31536000",
    },
  })
}
