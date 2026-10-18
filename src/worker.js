// One address for the site, so Google never sees two copies of a page:
// https://www.oneaura.app. The bare domain and plain http answer with a
// permanent redirect to it, keeping the path and query. Done here rather than
// with Cloudflare rules: turning on "Always Use HTTPS" would apply to the whole
// oneaura.app zone, which also carries the admin panel and the academies.
// Everything else is the static site, as before.
const HOST = 'www.oneaura.app'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (url.hostname === 'oneaura.app' || (url.hostname === HOST && url.protocol === 'http:')) {
      url.hostname = HOST
      url.protocol = 'https:'
      return Response.redirect(url.toString(), 301)
    }
    const response = await env.ASSETS.fetch(request)
    return isVideo(response) ? withRanges(request, response) : response
  },
}

const isVideo = response => response.status === 200 && (response.headers.get('content-type') ?? '').startsWith('video/')

// Static assets always answer with the whole file, ignoring Range. Safari and
// iOS won't play a video served that way, so for videos the requested piece
// is cut out here: 206 with Content-Range, or 416 for a range past the end.
export async function withRanges(request, response) {
  const headers = new Headers(response.headers)
  headers.set('accept-ranges', 'bytes')
  const range = /^bytes=(\d*)-(\d*)$/.exec(request.headers.get('range') ?? '')
  if (!range || (!range[1] && !range[2])) return new Response(response.body, { status: 200, headers })

  const body = await response.arrayBuffer()
  const size = body.byteLength
  // "bytes=-500" is the last 500 bytes; "bytes=500-" runs to the end.
  const start = range[1] ? Number(range[1]) : Math.max(0, size - Number(range[2]))
  const end = range[1] && range[2] ? Math.min(Number(range[2]), size - 1) : size - 1
  if (start >= size || start > end) {
    headers.set('content-range', `bytes */${size}`)
    return new Response(null, { status: 416, headers })
  }
  headers.set('content-range', `bytes ${start}-${end}/${size}`)
  headers.set('content-length', String(end - start + 1))
  return new Response(body.slice(start, end + 1), { status: 206, headers })
}
