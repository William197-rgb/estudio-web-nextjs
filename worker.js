// Serves the static export from ./out. It answers Google Search Console's verification file at its
// exact .html URL (the assets layer would otherwise redirect it to the extension-less path) and adds
// the security headers to every response.
const VERIFICATION = "/googleb62c1c71d9f5c1c6.html";

// Next's static export inlines its bootstrap scripts and the JSON-LD, and React writes style
// attributes, so script and style need 'unsafe-inline'. Everything else is same-origin only.
const SECURITY_HEADERS = {
  "Content-Security-Policy": [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "media-src 'self' blob: data:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "worker-src 'self' blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ].join("; "),
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
};

function withSecurityHeaders(response) {
  const secured = new Response(response.body, response);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) secured.headers.set(name, value);
  return secured;
}

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname === VERIFICATION) {
      return withSecurityHeaders(
        new Response("google-site-verification: googleb62c1c71d9f5c1c6.html", {
          headers: { "content-type": "text/html; charset=utf-8" },
        }),
      );
    }
    return withSecurityHeaders(await env.ASSETS.fetch(request));
  },
};
