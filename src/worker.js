// One address for the site, so Google never sees two copies of a page:
// https://www.oneaura.app. The bare domain and plain http answer with a
// permanent redirect to it, keeping the path and query. Done here rather than
// with Cloudflare rules: turning on "Always Use HTTPS" would apply to the whole
// oneaura.app zone, which also carries the admin panel and the academies.
// Everything else is the static site, as before.
const HOST = 'www.oneaura.app'

export default {
  fetch(request, env) {
    const url = new URL(request.url)
    if (url.hostname === 'oneaura.app' || (url.hostname === HOST && url.protocol === 'http:')) {
      url.hostname = HOST
      url.protocol = 'https:'
      return Response.redirect(url.toString(), 301)
    }
    return env.ASSETS.fetch(request)
  },
}
