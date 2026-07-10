export default {
  async fetch(request) {
    const url = new URL(request.url)

    const headers = { 'content-type': 'text/html;charset=UTF-8', 'cache-control': 'no-cache, no-store, must-revalidate' }

    if (url.pathname === '/pricing') {
      return new Response(pricingPage(), { headers })
    }

    return new Response(landingPage(), { headers })
  }
}

function landingPage() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Solix - AI Content Studio</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:system-ui,-apple-system,sans-serif;background:#fafafa;color:#111;line-height:1.6}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.5rem 2rem;max-width:1200px;margin:0 auto}
.logo{font-size:1.5rem;font-weight:700;letter-spacing:-0.03em}
.nav-links{display:flex;gap:2rem;align-items:center}
.nav-links a{color:#666;text-decoration:none;font-size:0.95rem}
.nav-links a:hover{color:#111}
.btn{background:#111;color:#fff;padding:0.6rem 1.4rem;border-radius:8px;text-decoration:none;font-size:0.9rem;border:none;cursor:pointer}
.btn-outline{background:transparent;border:1px solid #ddd;color:#111}
.hero{text-align:center;padding:5rem 2rem 4rem;max-width:800px;margin:0 auto}
.hero h1{font-size:3.5rem;font-weight:700;letter-spacing:-0.03em;line-height:1.15;margin-bottom:1.5rem}
.hero h1 span{background:linear-gradient(135deg,#2563eb,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{font-size:1.2rem;color:#666;margin-bottom:2.5rem;max-width:600px;margin-left:auto;margin-right:auto}
.hero-btns{display:flex;gap:1rem;justify-content:center}
.hero-btns .btn{padding:0.8rem 2rem;font-size:1rem}
.features{max-width:1200px;margin:0 auto;padding:4rem 2rem}
.features h2{text-align:center;font-size:2rem;margin-bottom:3rem}
.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem}
.feature-card{background:#fff;border:1px solid #eee;border-radius:12px;padding:2rem}
.feature-card .icon{font-size:2rem;margin-bottom:1rem}
.feature-card h3{font-size:1.2rem;margin-bottom:0.5rem}
.feature-card p{color:#666;font-size:0.95rem}
.pricing{max-width:1200px;margin:0 auto;padding:4rem 2rem}
.pricing h2{text-align:center;font-size:2rem;margin-bottom:3rem}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem;max-width:900px;margin:0 auto}
.price-card{background:#fff;border:1px solid #eee;border-radius:12px;padding:2rem;text-align:center}
.price-card.featured{border-color:#2563eb;box-shadow:0 4px 20px rgba(37,99,235,0.1)}
.price-card .name{color:#666;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem}
.price-card .price{font-size:2.5rem;font-weight:700;margin-bottom:0.5rem}
.price-card .price span{font-size:1rem;color:#666}
.price-card .desc{color:#666;font-size:0.9rem;margin-bottom:1.5rem}
.price-card ul{list-style:none;text-align:left;margin-bottom:1.5rem}
.price-card ul li{padding:0.4rem 0;color:#444;font-size:0.9rem}
.price-card ul li:before{content:"✓ ";color:#2563eb}
.price-card .btn{width:100%;display:block;text-align:center}
footer{text-align:center;padding:3rem 2rem;color:#888;font-size:0.9rem;border-top:1px solid #eee;max-width:1200px;margin:2rem auto 0}
</style>
</head>
<body>
<nav>
<div class="logo">solix</div>
<div class="nav-links">
<a href="/pricing">Pricing</a>
<a href="/pricing" class="btn btn-outline">Sign In</a>
<a href="/pricing" class="btn">Get Started</a>
</div>
</nav>
<section class="hero">
<h1>Create Content with <span>AI</span>,<br>10x Faster</h1>
<p>Generate blog posts, social media content, and marketing copy powered by AI. Pay as you go. No subscription required.</p>
<div class="hero-btns">
<a href="/pricing" class="btn">Start Free →</a>
<a href="/pricing" class="btn btn-outline">View Pricing</a>
</div>
</section>
<section class="features">
<h2>Everything you need to create</h2>
<div class="feature-grid">
<div class="feature-card"><div class="icon">📝</div><h3>Blog Posts</h3><p>Generate SEO-optimized blog posts in seconds. Choose tone, length, and format.</p></div>
<div class="feature-card"><div class="icon">📱</div><h3>Social Media</h3><p>Create engaging posts for Twitter, LinkedIn, and Instagram with AI.</p></div>
<div class="feature-card"><div class="icon">📧</div><h3>Marketing Copy</h3><p>Write compelling emails, landing pages, and ad copy that converts.</p></div>
<div class="feature-card"><div class="icon">🎨</div><h3>Templates</h3><p>Start with proven templates designed for your industry and audience.</p></div>
<div class="feature-card"><div class="icon">⚡</div><h3>Bulk Generate</h3><p>Generate dozens of pieces of content at once with batch processing.</p></div>
<div class="feature-card"><div class="icon">🔗</div><h3>API Access</h3><p>Integrate our AI content generation into your own apps and workflows.</p></div>
</div>
</section>
<section class="pricing" id="pricing">
<h2>Simple, transparent pricing</h2>
<div class="pricing-grid">
<div class="price-card">
<div class="name">Starter</div>
<div class="price">$9<span>/mo</span></div>
<div class="desc">For individuals getting started</div>
<ul>
<li>50 generations per month</li>
<li>Basic templates</li>
<li>Email support</li>
</ul>
<a href="/pricing" class="btn btn-outline">Get Started</a>
</div>
<div class="price-card featured">
<div class="name">Pro</div>
<div class="price">$29<span>/mo</span></div>
<div class="desc">For professionals and teams</div>
<ul>
<li>500 generations per month</li>
<li>All templates</li>
<li>Priority support</li>
<li>API access</li>
<li>Bulk generation</li>
</ul>
<a href="/pricing" class="btn">Get Started</a>
</div>
<div class="price-card">
<div class="name">Enterprise</div>
<div class="price">Custom</div>
<div class="desc">For large scale deployments</div>
<ul>
<li>Unlimited generations</li>
<li>Custom templates</li>
<li>Dedicated support</li>
<li>SSO & SAML</li>
<li>SLA guarantee</li>
</ul>
<a href="/pricing" class="btn btn-outline">Contact Sales</a>
</div>
</div>
</section>
<footer>
<p>© 2026 Solix. All rights reserved.</p>
</footer>
</body>
</html>`
}

function pricingPage() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Pricing - Solix</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:system-ui,-apple-system,sans-serif;background:#fafafa;color:#111;line-height:1.6}
nav{display:flex;justify-content:space-between;align-items:center;padding:1.5rem 2rem;max-width:1200px;margin:0 auto}
.logo{font-size:1.5rem;font-weight:700;letter-spacing:-0.03em}
.nav-links{display:flex;gap:2rem;align-items:center}
.nav-links a{color:#666;text-decoration:none;font-size:0.95rem}
.btn{background:#111;color:#fff;padding:0.6rem 1.4rem;border-radius:8px;text-decoration:none;font-size:0.9rem}
.btn-outline{background:transparent;border:1px solid #ddd;color:#111;padding:0.6rem 1.4rem;border-radius:8px;text-decoration:none;font-size:0.9rem}
.pricing{max-width:900px;margin:0 auto;padding:4rem 2rem}
.pricing h1{text-align:center;font-size:2.5rem;margin-bottom:0.5rem}
.pricing p{text-align:center;color:#666;margin-bottom:3rem}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2rem}
.price-card{background:#fff;border:1px solid #eee;border-radius:12px;padding:2rem;text-align:center}
.price-card.featured{border-color:#2563eb;box-shadow:0 4px 20px rgba(37,99,235,0.1)}
.price-card .name{color:#666;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem}
.price-card .price{font-size:2.5rem;font-weight:700;margin-bottom:0.5rem}
.price-card .price span{font-size:1rem;color:#666}
.price-card .desc{color:#666;font-size:0.9rem;margin-bottom:1.5rem}
.price-card ul{list-style:none;text-align:left;margin-bottom:1.5rem}
.price-card ul li{padding:0.4rem 0;color:#444;font-size:0.9rem}
.price-card ul li:before{content:"✓ ";color:#2563eb}
.price-card .btn,.price-card .btn-outline{width:100%;display:block;text-align:center;padding:0.7rem 0}
</style>
</head>
<body>
<nav>
<div class="logo">solix</div>
<div class="nav-links">
<a href="/">Home</a>
</div>
</nav>
<section class="pricing">
<h1>Pricing</h1>
<p>Choose the plan that fits your needs</p>
<div class="pricing-grid">
<div class="price-card">
<div class="name">Starter</div>
<div class="price">$9<span>/mo</span></div>
<div class="desc">For individuals getting started</div>
<ul>
<li>50 generations per month</li>
<li>Basic templates</li>
<li>Email support</li>
</ul>
<a href="/" class="btn-outline">Get Started</a>
</div>
<div class="price-card featured">
<div class="name">Pro</div>
<div class="price">$29<span>/mo</span></div>
<div class="desc">For professionals and teams</div>
<ul>
<li>500 generations per month</li>
<li>All templates</li>
<li>Priority support</li>
<li>API access</li>
<li>Bulk generation</li>
</ul>
<a href="/" class="btn">Get Started</a>
</div>
<div class="price-card">
<div class="name">Enterprise</div>
<div class="price">Custom</div>
<div class="desc">For large scale deployments</div>
<ul>
<li>Unlimited generations</li>
<li>Custom templates</li>
<li>Dedicated support</li>
<li>SSO & SAML</li>
<li>SLA guarantee</li>
</ul>
<a href="/" class="btn-outline">Contact Sales</a>
</div>
</div>
</section>
</body>
</html>`
}
