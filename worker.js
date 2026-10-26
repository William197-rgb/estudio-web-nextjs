// Serves the static export from ./out. The only job of this script is to answer Google Search
// Console's verification file at its exact .html URL, which the assets layer would otherwise
// redirect to the extension-less path.
const VERIFICATION = "/googleb62c1c71d9f5c1c6.html";

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname === VERIFICATION) {
      return new Response("google-site-verification: googleb62c1c71d9f5c1c6.html", {
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
    return env.ASSETS.fetch(request);
  },
};
