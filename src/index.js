export default {
  async fetch(request) {
    return new Response('<!DOCTYPE html>' +
    '<html lang="zh-CN">' +
    '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">' +
    '<title>Solix</title>' +
    '<style>*{margin:0;padding:0;box-sizing:border-box}' +
    'body{font-family:system-ui,-apple-system,sans-serif;background:#0a0a0a;color:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh}' +
    'main{text-align:center;padding:2rem}' +
    'h1{font-size:4rem;font-weight:200;letter-spacing:-0.02em;margin-bottom:1rem}' +
    'p{color:#888}</style></head>' +
    '<body><main><h1>solix</h1><p>something is coming</p></main></body></html>', {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    })
  },
}
