import { buildAiSummary } from "@/lib/llm-seo"

export const dynamic = "force-static"
export const revalidate = 86400

export function GET() {
  return Response.json(buildAiSummary(), {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
