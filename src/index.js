export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname
    const headers = { 'content-type': 'text/html;charset=UTF-8', 'cache-control': 'no-cache' }

    const pages = {
      '/': landingPage,
      '/pricing': pricingPage,
      '/features': featuresPage,
      '/docs': docsPage,
      '/contact': contactPage,
    }

    const page = pages[path] || notFoundPage
    return new Response(page(), { headers })
  }
}

const nav = `
<nav>
<div class="nav-inner">
<a href="/" class="logo">solix</a>
<div class="nav-center">
<a href="/features">Features</a>
<a href="/pricing">Pricing</a>
<a href="/docs">Docs</a>
</div>
<div class="nav-right">
<a href="/contact" class="btn-outline">Contact</a>
<a href="/pricing" class="btn">Get Started</a>
</div>
</div>
</nav>`

const footer = `
<footer>
<div class="f-grid">
<div class="f-col"><h4>solix</h4><p>AI-powered content creation platform. Generate better content faster.</p></div>
<div class="f-col"><h4>Product</h4><a href="/features">Features</a><a href="/pricing">Pricing</a><a href="/docs">Docs</a></div>
<div class="f-col"><h4>Company</h4><a href="/contact">Contact</a><a href="/docs">Blog</a><a href="/docs">About</a></div>
<div class="f-col"><h4>Legal</h4><a href="/docs">Privacy</a><a href="/docs">Terms</a></div>
</div>
<p class="f-copy">© 2026 Solix. All rights reserved.</p>
</footer>`

const css = `
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:Inter,system-ui,-apple-system,sans-serif;background:#f8fafd;color:#0b1a2e;overflow-x:hidden;line-height:1.6}
::selection{background:#2563eb;color:#fff}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(248,250,253,.9);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid rgba(0,0,0,.06)}
.nav-inner{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;max-width:1280px;margin:0 auto}
.logo{font-size:1.4rem;font-weight:800;letter-spacing:-.04em;background:linear-gradient(135deg,#1e40af,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-decoration:none}
.nav-center{display:flex;gap:2.5rem;align-items:center}
.nav-center a{color:#4a5a72;text-decoration:none;font-size:.9rem;font-weight:500;transition:color .2s}
.nav-center a:hover{color:#2563eb}
.nav-right{display:flex;gap:.75rem;align-items:center}
.btn{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:.6rem 1.5rem;border-radius:10px;text-decoration:none;font-size:.9rem;font-weight:600;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s;display:inline-block}
.btn:hover{transform:translateY(-1px);box-shadow:0 8px 25px rgba(37,99,235,.3)}
.btn-outline{background:0 0;color:#0b1a2e;border:1.5px solid #d0d8e6;padding:.55rem 1.45rem;border-radius:10px;text-decoration:none;font-size:.9rem;font-weight:600;cursor:pointer;transition:all .2s;display:inline-block}
.btn-outline:hover{border-color:#93a5c1;background:rgba(0,0,0,.02)}
.container{max-width:1280px;margin:0 auto;padding:0 2rem}
section{padding:6rem 2rem}
.section-title{text-align:center;font-size:2.2rem;font-weight:700;letter-spacing:-.03em;margin-bottom:1rem}
.section-sub{text-align:center;color:#4a5a72;font-size:1.05rem;margin-bottom:3rem;max-width:600px;margin-left:auto;margin-right:auto}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.card{background:#fff;border:1px solid #eef2f8;border-radius:16px;padding:2rem;transition:transform .25s,box-shadow .25s}
.card:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,.06)}
.card-icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;background:linear-gradient(135deg,rgba(37,99,235,.1),rgba(124,58,237,.1));border-radius:12px;margin-bottom:1.25rem}
.card h3{font-size:1.1rem;font-weight:600;margin-bottom:.5rem}
.card p{color:#4a5a72;font-size:.9rem;line-height:1.65}
.hero{text-align:center;padding:10rem 2rem 4rem}
.hero h1{font-size:3.8rem;font-weight:800;letter-spacing:-.04em;line-height:1.12;margin-bottom:1rem}
.hero h1 span{background:linear-gradient(135deg,#2563eb,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{font-size:1.15rem;color:#4a5a72;margin-bottom:2rem;max-width:560px;margin-left:auto;margin-right:auto}
.hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.hero-btns .btn,.hero-btns .btn-outline{padding:.85rem 2rem;font-size:1rem}
footer{background:#fff;border-top:1px solid #eef2f8;padding:4rem 2rem 2rem}
.f-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;max-width:1280px;margin:0 auto}
.f-col h4{font-size:.9rem;font-weight:600;margin-bottom:1rem;color:#0b1a2e}
.f-col p{color:#7a8ba7;font-size:.85rem;line-height:1.6}
.f-col a{display:block;color:#7a8ba7;text-decoration:none;font-size:.85rem;padding:.25rem 0;transition:color .2s}
.f-col a:hover{color:#2563eb}
.f-copy{text-align:center;color:#7a8ba7;font-size:.8rem;padding-top:2rem;margin-top:2rem;border-top:1px solid #eef2f8;max-width:1280px;margin-left:auto;margin-right:auto}
.page-header{background:linear-gradient(135deg,#f0f4ff,#f5f0ff);padding:8rem 2rem 3rem;text-align:center}
.page-header h1{font-size:2.8rem;font-weight:800;letter-spacing:-.03em;margin-bottom:.5rem}
.page-header p{color:#4a5a72;font-size:1.1rem}
.badge{display:inline-block;background:rgba(37,99,235,.1);color:#2563eb;padding:.3rem .9rem;border-radius:100px;font-size:.8rem;font-weight:600;margin-bottom:1rem}
@media(max-width:768px){
  .hero h1{font-size:2.4rem}.grid-3{grid-template-columns:1fr}
  .nav-center{display:none}.hero{padding:7rem 1.5rem 3rem}
  .f-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:1024px)and(min-width:769px){.grid-3{grid-template-columns:repeat(2,1fr)}}
`

function shell(title, content) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${title} - Solix</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>${css}</style></head>
<body>
${nav}
${content}
${footer}
</body>
</html>`
}

function landingPage() {
  return shell('AI Content Studio', `
<section class="hero">
<div class="badge">AI-Powered Content Creation</div>
<h1>Create Content with <span>AI</span>,<br><span>10x</span> Faster</h1>
<p>Generate blog posts, social media content, and marketing copy powered by AI. Pay as you go. No subscription required.</p>
<div class="hero-btns">
<a href="/pricing" class="btn">Start Free</a>
<a href="/features" class="btn-outline">Learn More</a>
</div>
</section>
<section style="padding-top:0">
<div class="container" style="text-align:center">
<div style="display:flex;justify-content:center;gap:4rem;flex-wrap:wrap;padding:2rem 0">
<div><div style="font-size:2rem;font-weight:800">50K+</div><div style="color:#7a8ba7;font-size:.85rem">Active Users</div></div>
<div><div style="font-size:2rem;font-weight:800">1M+</div><div style="color:#7a8ba7;font-size:.85rem">Content Generated</div></div>
<div><div style="font-size:2rem;font-weight:800">120+</div><div style="color:#7a8ba7;font-size:.85rem">Countries</div></div>
</div>
</div>
</section>
<section>
<h2 class="section-title">Everything you need to create</h2>
<p class="section-sub">Powerful tools to help you create better content faster.</p>
<div class="container"><div class="grid-3">
<div class="card"><div class="card-icon">✍️</div><h3>Blog Posts</h3><p>Generate SEO-optimized blog posts in seconds. Choose tone, length, and format.</p></div>
<div class="card"><div class="card-icon">📱</div><h3>Social Media</h3><p>Create engaging posts for Twitter, LinkedIn, and Instagram with AI.</p></div>
<div class="card"><div class="card-icon">📧</div><h3>Marketing Copy</h3><p>Write compelling emails, landing pages, and ad copy that converts.</p></div>
<div class="card"><div class="card-icon">🎨</div><h3>Templates</h3><p>Start with proven templates designed for your industry and audience.</p></div>
<div class="card"><div class="card-icon">⚡</div><h3>Bulk Generate</h3><p>Generate dozens of pieces of content at once with batch processing.</p></div>
<div class="card"><div class="card-icon">🔗</div><h3>API Access</h3><p>Integrate AI content generation into your own apps and workflows.</p></div>
</div></div>
</section>
<section style="background:linear-gradient(135deg,#1e3a6f,#312e81);color:#fff;text-align:center">
<div class="container">
<h2 style="font-size:2.2rem;font-weight:700;margin-bottom:1rem">Ready to get started?</h2>
<p style="opacity:.8;font-size:1.05rem;margin-bottom:2rem">Sign up for free. No credit card required.</p>
<a href="/pricing" style="background:#fff;color:#1e3a6f;font-weight:700" class="btn">Start Free</a>
</div>
</section>`)
}

function pricingPage() {
  return shell('Pricing', `
<div class="page-header">
<h1>Pricing</h1>
<p>Choose the plan that fits your needs</p>
</div>
<section>
<div class="container"><div class="grid-3" style="max-width:1000px;margin:0 auto">
<div class="card" style="text-align:center">
<div style="color:#7a8ba7;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem">Starter</div>
<div style="font-size:2.8rem;font-weight:800;margin-bottom:.25rem">$9<span style="font-size:1rem;font-weight:400;color:#7a8ba7">/mo</span></div>
<div style="color:#7a8ba7;font-size:.85rem;margin-bottom:1.5rem">For individuals</div>
<ul style="list-style:none;text-align:left;margin-bottom:2rem">
<li style="padding:.35rem 0;font-size:.9rem">✓ 50 generations/mo</li>
<li style="padding:.35rem 0;font-size:.9rem">✓ Basic templates</li>
<li style="padding:.35rem 0;font-size:.9rem">✓ Email support</li>
</ul>
<a href="/pricing" class="btn-outline" style="display:block;text-align:center">Get Started</a>
</div>
<div class="card" style="text-align:center;border-color:#2563eb;box-shadow:0 4px 24px rgba(37,99,235,.1);position:relative">
<div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:.25rem 1rem;border-radius:100px;font-size:.75rem;font-weight:600">Most Popular</div>
<div style="color:#7a8ba7;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem">Pro</div>
<div style="font-size:2.8rem;font-weight:800;margin-bottom:.25rem">$29<span style="font-size:1rem;font-weight:400;color:#7a8ba7">/mo</span></div>
<div style="color:#7a8ba7;font-size:.85rem;margin-bottom:1.5rem">For professionals</div>
<ul style="list-style:none;text-align:left;margin-bottom:2rem">
<li style="padding:.35rem 0;font-size:.9rem">✓ 500 generations/mo</li>
<li style="padding:.35rem 0;font-size:.9rem">✓ All templates</li>
<li style="padding:.35rem 0;font-size:.9rem">✓ Priority support</li>
<li style="padding:.35rem 0;font-size:.9rem">✓ API access</li>
<li style="padding:.35rem 0;font-size:.9rem">✓ Bulk generation</li>
</ul>
<a href="/pricing" class="btn" style="display:block;text-align:center">Get Started</a>
</div>
<div class="card" style="text-align:center">
<div style="color:#7a8ba7;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem">Enterprise</div>
<div style="font-size:2.8rem;font-weight:800;margin-bottom:.25rem">Custom</div>
<div style="color:#7a8ba7;font-size:.85rem;margin-bottom:1.5rem">For large teams</div>
<ul style="list-style:none;text-align:left;margin-bottom:2rem">
<li style="padding:.35rem 0;font-size:.9rem">✓ Unlimited generations</li>
<li style="padding:.35rem 0;font-size:.9rem">✓ Custom templates</li>
<li style="padding:.35rem 0;font-size:.9rem">✓ Dedicated support</li>
<li style="padding:.35rem 0;font-size:.9rem">✓ SSO & SAML</li>
<li style="padding:.35rem 0;font-size:.9rem">✓ SLA guarantee</li>
</ul>
<a href="/pricing" class="btn-outline" style="display:block;text-align:center">Contact Sales</a>
</div>
</div></div>
</section>`)
}

function featuresPage() {
  return shell('Features', `
<div class="page-header">
<h1>Features</h1>
<p>Everything you need to create amazing content</p>
</div>
<section>
<div class="container"><div class="grid-3">
<div class="card"><div class="card-icon">✍️</div><h3>Blog Writing</h3><p>Generate complete blog posts with AI. Choose tone, length, and optimize for SEO automatically.</p></div>
<div class="card"><div class="card-icon">📱</div><h3>Social Media</h3><p>Create platform-optimized content for Twitter, LinkedIn, Instagram, and more.</p></div>
<div class="card"><div class="card-icon">📧</div><h3>Email Marketing</h3><p>Write newsletters, cold emails, and follow-ups that get opens and clicks.</p></div>
<div class="card"><div class="card-icon">🔍</div><h3>SEO Optimization</h3><p>Built-in SEO analysis ensures your content ranks higher in search results.</p></div>
<div class="card"><div class="card-icon">🌍</div><h3>Multi-language</h3><p>Generate content in 50+ languages while maintaining natural tone and flow.</p></div>
<div class="card"><div class="card-icon">📊</div><h3>Analytics</h3><p>Track content performance, engagement metrics, and ROI across all channels.</p></div>
<div class="card"><div class="card-icon">🤖</div><h3>AI Chat</h3><p>Interactive AI assistant helps you refine ideas and improve your writing.</p></div>
<div class="card"><div class="card-icon">📋</div><h3>Templates</h3><p>200+ professional templates for every content type and industry.</p></div>
<div class="card"><div class="card-icon">🔗</div><h3>API Access</h3><p>RESTful API for integrating content generation into your existing workflow.</p></div>
</div></div>
</section>
<section style="background:linear-gradient(135deg,#f0f4ff,#f5f0ff)">
<div class="container" style="text-align:center">
<h2 class="section-title">Compare Plans</h2>
<p class="section-sub">Find the right plan for your needs</p>
<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;margin:0 auto;max-width:900px;background:#fff;border-radius:16px;overflow:hidden">
<tr style="background:#f8fafd"><th style="padding:1rem;text-align:left;border-bottom:1px solid #eef2f8">Feature</th><th style="padding:1rem;text-align:center;border-bottom:1px solid #eef2f8">Starter</th><th style="padding:1rem;text-align:center;border-bottom:1px solid #eef2f8;background:linear-gradient(135deg,rgba(37,99,235,.05),rgba(124,58,237,.05))">Pro</th><th style="padding:1rem;text-align:center;border-bottom:1px solid #eef2f8">Enterprise</th></tr>
<tr><td style="padding:.8rem 1rem;border-bottom:1px solid #f5f7fa">Generations/mo</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa">50</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa;background:rgba(37,99,235,.03)">500</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa">Unlimited</td></tr>
<tr><td style="padding:.8rem 1rem;border-bottom:1px solid #f5f7fa">Templates</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa">Basic</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa;background:rgba(37,99,235,.03)">All 200+</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa">Custom</td></tr>
<tr><td style="padding:.8rem 1rem;border-bottom:1px solid #f5f7fa">API Access</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa">—</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa;background:rgba(37,99,235,.03)">✓</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa">✓</td></tr>
<tr><td style="padding:.8rem 1rem;border-bottom:1px solid #f5f7fa">Support</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa">Email</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa;background:rgba(37,99,235,.03)">Priority</td><td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa">Dedicated</td></tr>
<tr><td style="padding:.8rem 1rem">Price</td><td style="padding:.8rem 1rem;text-align:center">$9/mo</td><td style="padding:.8rem 1rem;text-align:center;background:rgba(37,99,235,.03)">$29/mo</td><td style="padding:.8rem 1rem;text-align:center">Custom</td></tr>
</table>
</div>
</div>
</section>`)
}

function docsPage() {
  return shell('Documentation', `
<div class="page-header">
<h1>Documentation</h1>
<p>Everything you need to get started with Solix</p>
</div>
<section>
<div class="container" style="max-width:900px;margin:0 auto">
<div class="grid-3" style="margin-bottom:3rem">
<a href="/docs" style="text-decoration:none;color:inherit"><div class="card"><h3>Quick Start</h3><p>Get up and running in 5 minutes with our quick start guide.</p></div></a>
<a href="/docs" style="text-decoration:none;color:inherit"><div class="card"><h3>API Reference</h3><p>Complete API documentation with examples and code samples.</p></div></a>
<a href="/docs" style="text-decoration:none;color:inherit"><div class="card"><h3>Tutorials</h3><p>Step-by-step tutorials for common use cases and workflows.</p></div></a>
</div>
<div style="background:#fff;border:1px solid #eef2f8;border-radius:16px;padding:2rem">
<h2 style="font-size:1.5rem;margin-bottom:1rem">Quick Start Guide</h2>
<div style="color:#4a5a72;font-size:.95rem;line-height:1.8">
<p>1. <strong>Create an account</strong> — Sign up for free at solix.dpdns.org/pricing</p>
<p>2. <strong>Choose a template</strong> — Browse our template library or start from scratch</p>
<p>3. <strong>Generate content</strong> — Describe what you need and let AI do the work</p>
<p>4. <strong>Edit and refine</strong> — Fine-tune the output with our editor tools</p>
<p>5. <strong>Publish</strong> — Export directly to your blog, social media, or CMS</p>
</div>
</div>
<div style="margin-top:2rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem">
<div style="background:#fff;border:1px solid #eef2f8;border-radius:12px;padding:1.5rem">
<h3 style="font-size:1rem;margin-bottom:.5rem">SDKs & Libraries</h3>
<p style="color:#4a5a72;font-size:.85rem">Node.js, Python, Go, and Rust SDKs available.</p>
</div>
<div style="background:#fff;border:1px solid #eef2f8;border-radius:12px;padding:1.5rem">
<h3 style="font-size:1rem;margin-bottom:.5rem">Integrations</h3>
<p style="color:#4a5a72;font-size:.85rem">WordPress, Shopify, Webflow, and more.</p>
</div>
</div>
</div>
</section>`)
}

function contactPage() {
  return shell('Contact', `
<div class="page-header">
<h1>Contact Us</h1>
<p>Get in touch with our team</p>
</div>
<section>
<div class="container" style="max-width:700px;margin:0 auto">
<div style="background:#fff;border:1px solid #eef2f8;border-radius:16px;padding:2.5rem">
<form id="contactForm" onsubmit="event.preventDefault();alert('Thank you! We will get back to you soon.')">
<div style="margin-bottom:1.5rem">
<label style="display:block;font-size:.9rem;font-weight:600;margin-bottom:.4rem">Name</label>
<input type="text" required style="width:100%;padding:.75rem 1rem;border:1.5px solid #d0d8e6;border-radius:10px;font-size:.9rem;font-family:inherit;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='#2563eb'" onblur="this.style.borderColor='#d0d8e6'">
</div>
<div style="margin-bottom:1.5rem">
<label style="display:block;font-size:.9rem;font-weight:600;margin-bottom:.4rem">Email</label>
<input type="email" required style="width:100%;padding:.75rem 1rem;border:1.5px solid #d0d8e6;border-radius:10px;font-size:.9rem;font-family:inherit;outline:none;transition:border-color .2s" onfocus="this.style.borderColor='#2563eb'" onblur="this.style.borderColor='#d0d8e6'">
</div>
<div style="margin-bottom:1.5rem">
<label style="display:block;font-size:.9rem;font-weight:600;margin-bottom:.4rem">Subject</label>
<select style="width:100%;padding:.75rem 1rem;border:1.5px solid #d0d8e6;border-radius:10px;font-size:.9rem;font-family:inherit;outline:none;background:#fff">
<option>General Inquiry</option>
<option>Sales</option>
<option>Technical Support</option>
<option>Partnership</option>
</select>
</div>
<div style="margin-bottom:1.5rem">
<label style="display:block;font-size:.9rem;font-weight:600;margin-bottom:.4rem">Message</label>
<textarea rows="5" required style="width:100%;padding:.75rem 1rem;border:1.5px solid #d0d8e6;border-radius:10px;font-size:.9rem;font-family:inherit;outline:none;resize:vertical;transition:border-color .2s" onfocus="this.style.borderColor='#2563eb'" onblur="this.style.borderColor='#d0d8e6'"></textarea>
</div>
<button type="submit" class="btn" style="width:100%;padding:.85rem;font-size:1rem">Send Message</button>
</form>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2rem;text-align:center">
<div style="background:#fff;border:1px solid #eef2f8;border-radius:12px;padding:1.5rem">
<div style="font-size:1.5rem;margin-bottom:.5rem">📧</div>
<div style="font-size:.85rem;color:#4a5a72">hello@solix.dpdns.org</div>
</div>
<div style="background:#fff;border:1px solid #eef2f8;border-radius:12px;padding:1.5rem">
<div style="font-size:1.5rem;margin-bottom:.5rem">💬</div>
<div style="font-size:.85rem;color:#4a5a72">Live Chat</div>
</div>
<div style="background:#fff;border:1px solid #eef2f8;border-radius:12px;padding:1.5rem">
<div style="font-size:1.5rem;margin-bottom:.5rem">🐦</div>
<div style="font-size:.85rem;color:#4a5a72">@solix</div>
</div>
</div>
</div>
</section>`)
}

function notFoundPage() {
  return shell('404', `
<div style="text-align:center;padding:8rem 2rem">
<h1 style="font-size:6rem;font-weight:800;background:linear-gradient(135deg,#2563eb,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent">404</h1>
<p style="color:#4a5a72;font-size:1.2rem;margin:1rem 0 2rem">Page not found</p>
<a href="/" class="btn">Go Home</a>
</div>`)
}
