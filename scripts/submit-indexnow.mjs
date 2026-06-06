const siteUrl = process.env.SITE_URL || "https://prathamkadam.netlify.app"
const indexNowKey = "f2b7c8d19a4e4f6b8c0d2e5f7a9b1c3d"
const host = new URL(siteUrl).host
const keyLocation = `${siteUrl}/${indexNowKey}.txt`
const sitemapUrl = `${siteUrl}/sitemap.xml`

async function main() {
  const sitemapResponse = await fetch(sitemapUrl)

  if (!sitemapResponse.ok) {
    throw new Error(
      `Could not fetch sitemap: ${sitemapResponse.status} ${sitemapResponse.statusText}`
    )
  }

  const sitemapXml = await sitemapResponse.text()
  const urlList = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (match) => match[1]
  )

  if (urlList.length === 0) {
    throw new Error("No URLs found in sitemap.xml")
  }

  const response = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      host,
      key: indexNowKey,
      keyLocation,
      urlList,
    }),
  })

  const body = await response.text()

  console.log(`IndexNow submitted ${urlList.length} URLs`)
  console.log(`Status: ${response.status} ${response.statusText}`)

  if (body) {
    console.log(body)
  }

  if (!response.ok && response.status !== 202) {
    throw new Error("IndexNow submission failed")
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
