export default {
  async fetch(request) {
    const url = new URL(request.url)
    const headers = { 'content-type': 'text/html;charset=UTF-8', 'cache-control': 'no-cache, no-store, must-revalidate' }
    if (url.pathname === '/pricing') return new Response(pricingPage(), { headers })
    return new Response(landingPage(), { headers })
  }
}

const L = {
  zh: {
    navF1: '功能', navF2: '定价', navSignin: '登录', navStart: '开始使用',
    heroBadge: 'AI 驱动内容创作',
    heroTitle: '用 <span>AI</span> 创作内容，<br>效率提升 <span>10 倍</span>',
    heroDesc: 'AI 驱动生成博客文章、社交媒体内容和营销文案。按量付费，无需订阅。',
    heroCTA: '免费开始', heroPricing: '了解更多',
    statsUsers: '活跃用户', statsContent: '生成内容', statsCountries: '覆盖国家',
    featuresTitle: '创作所需的一切', featuresSub: '强大的工具帮助你更快创作更好的内容。',
    f1Title: '博客文章', f1Desc: '在几秒内生成 SEO 优化的博客文章。选择语气、长度和格式。',
    f2Title: '社交媒体', f2Desc: '为 Twitter、LinkedIn 和 Instagram 创建 AI 驱动的帖子。',
    f3Title: '营销文案', f3Desc: '撰写转化率高的邮件、落地页和广告文案。',
    f4Title: '模板库', f4Desc: '使用经过验证的模板快速为你的行业定制内容。',
    f5Title: '批量生成', f5Desc: '一次批量生成数十条内容，大幅提高效率。',
    f6Title: 'API 接入', f6Desc: '将 AI 内容生成集成到你自己的应用和工作流中。',
    pricingTitle: '简单透明的定价', pricingSub: '无隐藏费用，按需付费。', popular: '最受欢迎',
    p1Name: '入门版', p1Price: '$9/月', p1Desc: '适合个人用户',
    p1F1: '每月 50 次生成', p1F2: '基础模板', p1F3: '邮件支持', p1Btn: '开始使用',
    p2Name: '专业版', p2Price: '$29/月', p2Desc: '适合专业人士和团队',
    p2F1: '每月 500 次生成', p2F2: '全部模板', p2F3: '优先支持',
    p2F4: 'API 接入', p2F5: '批量生成', p2Btn: '开始使用',
    p3Name: '企业版', p3Price: '定制', p3Desc: '适合大规模部署',
    p3F1: '无限生成', p3F2: '定制模板', p3F3: '专属支持',
    p3F4: 'SSO & SAML', p3F5: 'SLA 保障', p3Btn: '联系销售',
    ctaTitle: '准备好开始了吗？', ctaDesc: '立即注册，免费试用。无需信用卡。', ctaBtn: '免费开始',
    footer: '© 2026 Solix 保留所有权利'
  },
  en: {
    navF1: 'Features', navF2: 'Pricing', navSignin: 'Sign In', navStart: 'Get Started',
    heroBadge: 'AI-Powered Content Creation',
    heroTitle: 'Create Content with <span>AI</span>,<br><span>10x</span> Faster',
    heroDesc: 'Generate blog posts, social media content, and marketing copy powered by AI.',
    heroCTA: 'Start Free', heroPricing: 'Learn More',
    statsUsers: 'Active Users', statsContent: 'Content Generated', statsCountries: 'Countries',
    featuresTitle: 'Everything you need to create', featuresSub: 'Powerful tools to help you create better content faster.',
    f1Title: 'Blog Posts', f1Desc: 'Generate SEO-optimized blog posts in seconds. Choose tone, length, and format.',
    f2Title: 'Social Media', f2Desc: 'Create engaging posts for Twitter, LinkedIn, and Instagram with AI.',
    f3Title: 'Marketing Copy', f3Desc: 'Write compelling emails, landing pages, and ad copy that converts.',
    f4Title: 'Templates', f4Desc: 'Start with proven templates designed for your industry and audience.',
    f5Title: 'Bulk Generate', f5Desc: 'Generate dozens of pieces of content at once with batch processing.',
    f6Title: 'API Access', f6Desc: 'Integrate our AI content generation into your own apps and workflows.',
    pricingTitle: 'Simple, transparent pricing', pricingSub: 'No hidden fees. Pay only for what you use.', popular: 'Most Popular',
    p1Name: 'Starter', p1Price: '$9/mo', p1Desc: 'For individuals getting started',
    p1F1: '50 generations/mo', p1F2: 'Basic templates', p1F3: 'Email support', p1Btn: 'Get Started',
    p2Name: 'Pro', p2Price: '$29/mo', p2Desc: 'For professionals and teams',
    p2F1: '500 generations/mo', p2F2: 'All templates', p2F3: 'Priority support',
    p2F4: 'API access', p2F5: 'Bulk generation', p2Btn: 'Get Started',
    p3Name: 'Enterprise', p3Price: 'Custom', p3Desc: 'For large scale deployments',
    p3F1: 'Unlimited generations', p3F2: 'Custom templates', p3F3: 'Dedicated support',
    p3F4: 'SSO & SAML', p3F5: 'SLA guarantee', p3Btn: 'Contact Sales',
    ctaTitle: 'Ready to get started?', ctaDesc: 'Sign up for free. No credit card required.', ctaBtn: 'Start Free',
    footer: '© 2026 Solix. All rights reserved.'
  }
}

function landingPage() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Solix - AI Content Studio</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:Inter,system-ui,-apple-system,sans-serif;background:#f8fafd;color:#0b1a2e;overflow-x:hidden;line-height:1.6}
::selection{background:#2563eb;color:#fff}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(248,250,253,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid rgba(0,0,0,.06)}
.nav-inner{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;max-width:1280px;margin:0 auto}
.logo{font-size:1.4rem;font-weight:800;letter-spacing:-.04em;background:linear-gradient(135deg,#1e40af,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-center{display:flex;gap:2.5rem;align-items:center}
.nav-center a{color:#4a5a72;text-decoration:none;font-size:.9rem;font-weight:500;transition:color .2s}
.nav-center a:hover{color:#2563eb}
.nav-right{display:flex;gap:.75rem;align-items:center}
.lang-btn{background:0 0;border:1px solid #d0d8e6;border-radius:8px;padding:.35rem .65rem;font-size:.8rem;cursor:pointer;color:#4a5a72;transition:all .2s;font-weight:500}
.lang-btn:hover{border-color:#93a5c1;color:#0b1a2e}
.btn{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:.6rem 1.5rem;border-radius:10px;text-decoration:none;font-size:.9rem;font-weight:600;border:none;cursor:pointer;transition:transform .2s,box-shadow .2s;display:inline-block}
.btn:hover{transform:translateY(-1px);box-shadow:0 8px 25px rgba(37,99,235,.3)}
.btn-outline{background:0 0;color:#0b1a2e;border:1.5px solid #d0d8e6;padding:.55rem 1.45rem;border-radius:10px;text-decoration:none;font-size:.9rem;font-weight:600;cursor:pointer;transition:all .2s;display:inline-block}
.btn-outline:hover{border-color:#93a5c1;background:rgba(0,0,0,.02)}
.hero{position:relative;padding:10rem 2rem 6rem;text-align:center;overflow:hidden}
.hero-bg{position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(ellipse at 30% 20%,rgba(37,99,235,.08) 0%,transparent 60%),radial-gradient(ellipse at 70% 80%,rgba(124,58,237,.06) 0%,transparent 60%);pointer-events:none}
.hero-content{position:relative;max-width:800px;margin:0 auto}
.hero-badge{display:inline-block;background:rgba(37,99,235,.1);color:#2563eb;padding:.35rem 1rem;border-radius:100px;font-size:.8rem;font-weight:600;margin-bottom:1.5rem}
.hero h1{font-size:3.8rem;font-weight:800;letter-spacing:-.04em;line-height:1.12;margin-bottom:1.5rem;color:#0b1a2e}
.hero h1 span{background:linear-gradient(135deg,#2563eb,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{font-size:1.15rem;color:#4a5a72;margin-bottom:2.5rem;max-width:560px;margin-left:auto;margin-right:auto;line-height:1.7}
.hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.hero-btns .btn,.hero-btns .btn-outline{padding:.85rem 2rem;font-size:1rem}
.stats{display:flex;justify-content:center;gap:4rem;padding:3rem 2rem 0;max-width:800px;margin:0 auto}
.stat{text-align:center}
.stat-num{font-size:2rem;font-weight:800;color:#0b1a2e;letter-spacing:-.03em}
.stat-label{font-size:.85rem;color:#7a8ba7;margin-top:.25rem}
.features{max-width:1200px;margin:0 auto;padding:6rem 2rem}
.features-header{text-align:center;max-width:600px;margin:0 auto 4rem}
.features-header h2{font-size:2.2rem;font-weight:700;letter-spacing:-.03em;margin-bottom:1rem}
.features-header p{color:#4a5a72;font-size:1.05rem}
.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.feature-card{background:#fff;border:1px solid #eef2f8;border-radius:16px;padding:2rem;transition:transform .25s,box-shadow .25s}
.feature-card:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,.06)}
.feature-icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;background:linear-gradient(135deg,rgba(37,99,235,.1),rgba(124,58,237,.1));border-radius:12px;margin-bottom:1.25rem}
.feature-card h3{font-size:1.1rem;font-weight:600;margin-bottom:.5rem}
.feature-card p{color:#4a5a72;font-size:.9rem;line-height:1.65}
.pricing{max-width:1200px;margin:0 auto;padding:6rem 2rem}
.pricing-header{text-align:center;max-width:600px;margin:0 auto 4rem}
.pricing-header h2{font-size:2.2rem;font-weight:700;letter-spacing:-.03em;margin-bottom:1rem}
.pricing-header p{color:#4a5a72;font-size:1.05rem}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;max-width:1000px;margin:0 auto}
.price-card{background:#fff;border:1px solid #eef2f8;border-radius:16px;padding:2.5rem 2rem;text-align:center;position:relative;transition:transform .25s,box-shadow .25s}
.price-card:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,.06)}
.price-card.featured{border-color:#2563eb;box-shadow:0 4px 24px rgba(37,99,235,.1)}
.price-card.featured .badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:.25rem 1rem;border-radius:100px;font-size:.75rem;font-weight:600}
.price-name{color:#7a8ba7;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem}
.price-value{font-size:2.8rem;font-weight:800;margin-bottom:.25rem;letter-spacing:-.03rem}
.price-value span{font-size:1rem;font-weight:400;color:#7a8ba7}
.price-desc{color:#7a8ba7;font-size:.85rem;margin-bottom:1.5rem}
.price-features{list-style:none;text-align:left;margin-bottom:2rem;display:flex;flex-direction:column;gap:.6rem}
.price-features li{color:#3a4a62;font-size:.9rem;display:flex;align-items:center;gap:.5rem}
.price-features li:before{content:"✓";width:18px;height:18px;background:#e8f0fe;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:11px;color:#2563eb;flex-shrink:0}
.price-card .btn,.price-card .btn-outline{width:100%;display:block;text-align:center;padding:.8rem 0;font-size:.9rem}
.cta{max-width:1200px;margin:0 auto;padding:2rem;text-align:center}
.cta-box{background:linear-gradient(135deg,#1e3a6f,#312e81);border-radius:20px;padding:4rem 2rem;color:#fff}
.cta-box h2{font-size:2.2rem;font-weight:700;margin-bottom:1rem}
.cta-box p{opacity:.8;font-size:1.05rem;margin-bottom:2rem}
.cta-box .btn{background:#fff;color:#1e3a6f;font-weight:700}
.cta-box .btn:hover{box-shadow:0 8px 25px rgba(255,255,255,.25)}
footer{text-align:center;padding:3rem 2rem;color:#7a8ba7;font-size:.85rem;max-width:1200px;margin:0 auto}
@media(max-width:768px){
  .hero h1{font-size:2.4rem}.feature-grid,.pricing-grid{grid-template-columns:1fr}
  .stats{flex-direction:column;gap:1.5rem}.nav-center{display:none}.hero{padding:7rem 1.5rem 4rem}
}
@media(max-width:1024px)and(min-width:769px){
  .feature-grid,.pricing-grid{grid-template-columns:repeat(2,1fr)}
}
</style>
</head>
<body>

<nav>
<div class="nav-inner">
<div class="logo">solix</div>
<div class="nav-center">
<a href="#features" data-i18n="navF1">Features</a>
<a href="#pricing" data-i18n="navF2">Pricing</a>
</div>
<div class="nav-right">
<select class="lang-btn" id="langSelect">
<option value="zh">中文</option>
<option value="en">English</option>
</select>
<a href="/pricing" class="btn-outline" data-i18n="navSignin">Sign In</a>
<a href="/pricing" class="btn" data-i18n="navStart">Get Started</a>
</div>
</div>
</nav>

<section class="hero">
<div class="hero-bg"></div>
<div class="hero-content">
<div class="hero-badge" data-i18n="heroBadge">AI-Powered Content Creation</div>
<h1 data-i18n="heroTitle">Create Content with <span>AI</span>,<br><span>10x</span> Faster</h1>
<p data-i18n="heroDesc">Generate blog posts, social media content, and marketing copy powered by AI.</p>
<div class="hero-btns">
<a href="/pricing" class="btn" data-i18n="heroCTA">Start Free</a>
<a href="#features" class="btn-outline" data-i18n="heroPricing">Learn More</a>
</div>
<div class="stats">
<div class="stat"><div class="stat-num">50K+</div><div class="stat-label" data-i18n="statsUsers">Active Users</div></div>
<div class="stat"><div class="stat-num">1M+</div><div class="stat-label" data-i18n="statsContent">Content Generated</div></div>
<div class="stat"><div class="stat-num">120+</div><div class="stat-label" data-i18n="statsCountries">Countries</div></div>
</div>
</div>
</section>

<section class="features" id="features">
<div class="features-header">
<h2 data-i18n="featuresTitle">Everything you need to create</h2>
<p data-i18n="featuresSub">Powerful tools to help you create better content faster.</p>
</div>
<div class="feature-grid">
<div class="feature-card"><div class="feature-icon">✍️</div><h3 data-i18n="f1Title">Blog Posts</h3><p data-i18n="f1Desc">Generate SEO-optimized blog posts in seconds.</p></div>
<div class="feature-card"><div class="feature-icon">📱</div><h3 data-i18n="f2Title">Social Media</h3><p data-i18n="f2Desc">Create engaging posts for Twitter, LinkedIn, and Instagram with AI.</p></div>
<div class="feature-card"><div class="feature-icon">📧</div><h3 data-i18n="f3Title">Marketing Copy</h3><p data-i18n="f3Desc">Write compelling emails, landing pages, and ad copy that converts.</p></div>
<div class="feature-card"><div class="feature-icon">🎨</div><h3 data-i18n="f4Title">Templates</h3><p data-i18n="f4Desc">Start with proven templates designed for your industry.</p></div>
<div class="feature-card"><div class="feature-icon">⚡</div><h3 data-i18n="f5Title">Bulk Generate</h3><p data-i18n="f5Desc">Generate dozens of pieces of content at once with batch processing.</p></div>
<div class="feature-card"><div class="feature-icon">🔗</div><h3 data-i18n="f6Title">API Access</h3><p data-i18n="f6Desc">Integrate AI content generation into your own apps and workflows.</p></div>
</div>
</section>

<section class="pricing" id="pricing">
<div class="pricing-header">
<h2 data-i18n="pricingTitle">Simple, transparent pricing</h2>
<p data-i18n="pricingSub">No hidden fees. Pay only for what you use.</p>
</div>
<div class="pricing-grid">
<div class="price-card">
<div class="price-name" data-i18n="p1Name">Starter</div>
<div class="price-value" data-i18n="p1Price">$9<span>/mo</span></div>
<div class="price-desc" data-i18n="p1Desc">For individuals getting started</div>
<ul class="price-features">
<li data-i18n="p1F1">50 generations/mo</li>
<li data-i18n="p1F2">Basic templates</li>
<li data-i18n="p1F3">Email support</li>
</ul>
<a href="/pricing" class="btn-outline" data-i18n="p1Btn">Get Started</a>
</div>
<div class="price-card featured">
<div class="badge" data-i18n="popular">Most Popular</div>
<div class="price-name" data-i18n="p2Name">Pro</div>
<div class="price-value" data-i18n="p2Price">$29<span>/mo</span></div>
<div class="price-desc" data-i18n="p2Desc">For professionals and teams</div>
<ul class="price-features">
<li data-i18n="p2F1">500 generations/mo</li>
<li data-i18n="p2F2">All templates</li>
<li data-i18n="p2F3">Priority support</li>
<li data-i18n="p2F4">API access</li>
<li data-i18n="p2F5">Bulk generation</li>
</ul>
<a href="/pricing" class="btn" data-i18n="p2Btn">Get Started</a>
</div>
<div class="price-card">
<div class="price-name" data-i18n="p3Name">Enterprise</div>
<div class="price-value" data-i18n="p3Price">Custom</div>
<div class="price-desc" data-i18n="p3Desc">For large scale deployments</div>
<ul class="price-features">
<li data-i18n="p3F1">Unlimited generations</li>
<li data-i18n="p3F2">Custom templates</li>
<li data-i18n="p3F3">Dedicated support</li>
<li data-i18n="p3F4">SSO & SAML</li>
<li data-i18n="p3F5">SLA guarantee</li>
</ul>
<a href="/pricing" class="btn-outline" data-i18n="p3Btn">Contact Sales</a>
</div>
</div>
</section>

<section class="cta">
<div class="cta-box">
<h2 data-i18n="ctaTitle">Ready to get started?</h2>
<p data-i18n="ctaDesc">Sign up for free. No credit card required.</p>
<a href="/pricing" class="btn" data-i18n="ctaBtn">Start Free</a>
</div>
</section>

<footer><p data-i18n="footer">© 2026 Solix. All rights reserved.</p></footer>

<script>
const D = ${JSON.stringify(L)};
function setLang(l) {
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(e => {
    const k = e.getAttribute('data-i18n');
    if (D[l] && D[l][k]) e.innerHTML = D[l][k];
  });
}
document.getElementById('langSelect').addEventListener('change', function() { setLang(this.value); });
(function() {
  const l = navigator.language.startsWith('zh') ? 'zh' : 'en';
  document.getElementById('langSelect').value = l;
  setLang(l);
})();
</script>
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
body{font-family:Inter,system-ui,-apple-system,sans-serif;background:#f8fafd;color:#0b1a2e;line-height:1.6}
nav{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;max-width:1280px;margin:0 auto;background:rgba(248,250,253,.85);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid rgba(0,0,0,.06)}
.logo{font-size:1.4rem;font-weight:800;letter-spacing:-.04em;background:linear-gradient(135deg,#1e40af,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-links{display:flex;gap:2rem;align-items:center}
.nav-links a{color:#4a5a72;text-decoration:none;font-size:.9rem;font-weight:500;transition:color .2s}
.nav-links a:hover{color:#2563eb}
.pricing{max-width:1000px;margin:0 auto;padding:4rem 2rem}
.pricing h1{text-align:center;font-size:2.5rem;font-weight:700;letter-spacing:-.03em;margin-bottom:.5rem}
.pricing p{text-align:center;color:#4a5a72;margin-bottom:3rem;font-size:1.05rem}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.price-card{background:#fff;border:1px solid #eef2f8;border-radius:16px;padding:2.5rem 2rem;text-align:center;position:relative}
.price-card.featured{border-color:#2563eb;box-shadow:0 4px 24px rgba(37,99,235,.1)}
.price-card.featured .badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:.25rem 1rem;border-radius:100px;font-size:.75rem;font-weight:600}
.price-name{color:#7a8ba7;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem}
.price-value{font-size:2.8rem;font-weight:800;margin-bottom:.25rem;letter-spacing:-.03rem}
.price-value span{font-size:1rem;font-weight:400;color:#7a8ba7}
.price-desc{color:#7a8ba7;font-size:.85rem;margin-bottom:1.5rem}
.price-features{list-style:none;text-align:left;margin-bottom:2rem}
.price-features li{color:#3a4a62;font-size:.9rem;padding:.4rem 0}
.price-features li:before{content:"✓";color:#2563eb;margin-right:.5rem}
.btn{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:.8rem 0;border-radius:10px;text-decoration:none;font-size:.9rem;font-weight:600;display:block;text-align:center;transition:transform .2s,box-shadow .2s}
.btn:hover{transform:translateY(-1px);box-shadow:0 8px 25px rgba(37,99,235,.3)}
.btn-outline{background:0 0;color:#0b1a2e;border:1.5px solid #d0d8e6;padding:.75rem 0;border-radius:10px;text-decoration:none;font-size:.9rem;font-weight:600;display:block;text-align:center;transition:all .2s}
.btn-outline:hover{border-color:#93a5c1;background:rgba(0,0,0,.02)}
@media(max-width:768px){.pricing-grid{grid-template-columns:1fr}}
</style>
</head>
<body>
<nav>
<a href="/" class="logo">solix</a>
<div class="nav-links"><a href="/">Home</a></div>
</nav>
<section class="pricing">
<h1>Pricing</h1>
<p>Choose the plan that fits your needs</p>
<div class="pricing-grid">
<div class="price-card">
<div class="price-name">Starter</div>
<div class="price-value">$9<span>/mo</span></div>
<div class="price-desc">For individuals getting started</div>
<ul class="price-features">
<li>50 generations/mo</li><li>Basic templates</li><li>Email support</li>
</ul>
<a href="/" class="btn-outline">Get Started</a>
</div>
<div class="price-card featured">
<div class="badge">Most Popular</div>
<div class="price-name">Pro</div>
<div class="price-value">$29<span>/mo</span></div>
<div class="price-desc">For professionals and teams</div>
<ul class="price-features">
<li>500 generations/mo</li><li>All templates</li><li>Priority support</li><li>API access</li><li>Bulk generation</li>
</ul>
<a href="/" class="btn">Get Started</a>
</div>
<div class="price-card">
<div class="price-name">Enterprise</div>
<div class="price-value">Custom</div>
<div class="price-desc">For large scale deployments</div>
<ul class="price-features">
<li>Unlimited generations</li><li>Custom templates</li><li>Dedicated support</li><li>SSO & SAML</li><li>SLA guarantee</li>
</ul>
<a href="/" class="btn-outline">Contact Sales</a>
</div>
</div>
</section>
</body>
</html>`
}
