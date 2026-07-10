const TEXTS = {
  zh: {
    navF1: '功能', navF2: '定价', navF3: '文档', navContact: '联系', navStart: '开始使用',
    heroBadge: 'AI 驱动内容创作',
    heroTitle: '用 <span>AI</span> 创作内容，<br>效率提升 <span>10 倍</span>',
    heroDesc: 'AI 驱动生成博客文章、社交媒体内容和营销文案。按量付费，无需订阅。',
    heroCTA: '免费开始', heroLearn: '了解更多',
    stats1: '活跃用户', stats2: '生成内容', stats3: '覆盖国家',
    fTitle: '创作所需的一切', fSub: '强大的工具帮助你更快创作更好的内容。',
    f1: '博客文章', f1d: '在几秒内生成 SEO 优化的博客文章。',
    f2: '社交媒体', f2d: '为各大平台创建 AI 驱动的帖子。',
    f3: '营销文案', f3d: '撰写转化率高的邮件、落地页和广告文案。',
    f4: '模板库', f4d: '使用经过验证的模板快速定制内容。',
    f5: '批量生成', f5d: '一次批量生成数十条内容。',
    f6: 'API 接入', f6d: '集成到你自己应用和工作流中。',
    f7: 'AI 对话', f7d: '交互式 AI 助手帮你完善创意。',
    f8: '多语言', f8d: '支持 50+ 种语言的内容生成。',
    f9: 'SEO 优化', f9d: '内置 SEO 分析确保内容排名更高。',
    ctaTitle: '准备好开始了吗？', ctaDesc: '立即注册，免费试用。无需信用卡。', ctaBtn: '免费开始',
    pricingTitle: '简单透明的定价', pricingSub: '无隐藏费用，按需付费。',
    p1: '入门版', p1p: '$9/月', p1d: '适合个人用户',
    p1f1: '每月 50 次生成', p1f2: '基础模板', p1f3: '邮件支持',
    p1b: '开始使用', popular: '最受欢迎',
    p2: '专业版', p2p: '$29/月', p2d: '适合专业人士和团队',
    p2f1: '每月 500 次生成', p2f2: '全部模板', p2f3: '优先支持',
    p2f4: 'API 接入', p2f5: '批量生成', p2b: '开始使用',
    p3: '企业版', p3p: '定制', p3d: '适合大规模部署',
    p3f1: '无限生成', p3f2: '定制模板', p3f3: '专属支持',
    p3f4: 'SSO & SAML', p3f5: 'SLA 保障', p3b: '联系销售',
    docsTitle: '文档中心', docsSub: '快速上手 Solix',
    doc1: '快速入门', doc1d: '5 分钟上手，快速开始使用。',
    doc2: 'API 参考', doc2d: '完整的 API 文档和代码示例。',
    doc3: '教程', doc3d: '常见用例的逐步教程。',
    contactTitle: '联系我们', contactSub: '我们很乐意听到你的反馈',
    cName: '姓名', cEmail: '邮箱', cSubject: '主题', cMsg: '消息',
    cSubmit: '发送消息', cThanks: '感谢你的消息！我们会尽快回复。',
    cGeneral: '一般咨询', cSales: '销售', cSupport: '技术支持', cPartner: '合作',
    footer1: 'AI 驱动的内容创作平台。更快地生成更好的内容。',
    footer2: '产品', footer3: '公司', footer4: '法律',
    fContact: '联系', fBlog: '博客', fAbout: '关于', fPrivacy: '隐私', fTerms: '条款',
    copyright: '© 2026 Solix 保留所有权利',
  },
  en: {
    navF1: 'Features', navF2: 'Pricing', navF3: 'Docs', navContact: 'Contact', navStart: 'Get Started',
    heroBadge: 'AI-Powered Content Creation',
    heroTitle: 'Create Content with <span>AI</span>,<br><span>10x</span> Faster',
    heroDesc: 'Generate blog posts, social media content, and marketing copy powered by AI.',
    heroCTA: 'Start Free', heroLearn: 'Learn More',
    stats1: 'Active Users', stats2: 'Content Generated', stats3: 'Countries',
    fTitle: 'Everything you need', fSub: 'Powerful tools to create better content faster.',
    f1: 'Blog Posts', f1d: 'Generate SEO-optimized blog posts in seconds.',
    f2: 'Social Media', f2d: 'Create engaging posts for Twitter, LinkedIn, Instagram.',
    f3: 'Marketing Copy', f3d: 'Write compelling emails, landing pages, ad copy.',
    f4: 'Templates', f4d: 'Start with proven templates for your industry.',
    f5: 'Bulk Generate', f5d: 'Generate dozens of pieces at once.',
    f6: 'API Access', f6d: 'Integrate into your own apps and workflows.',
    f7: 'AI Chat', f7d: 'Interactive AI assistant to refine your ideas.',
    f8: 'Multi-language', f8d: 'Generate content in 50+ languages.',
    f9: 'SEO Optimization', f9d: 'Built-in SEO analysis for higher rankings.',
    ctaTitle: 'Ready to get started?', ctaDesc: 'Sign up for free. No credit card required.', ctaBtn: 'Start Free',
    pricingTitle: 'Simple, transparent pricing', pricingSub: 'No hidden fees. Pay only for what you use.',
    p1: 'Starter', p1p: '$9/mo', p1d: 'For individuals',
    p1f1: '50 generations/mo', p1f2: 'Basic templates', p1f3: 'Email support',
    p1b: 'Get Started', popular: 'Most Popular',
    p2: 'Pro', p2p: '$29/mo', p2d: 'For professionals',
    p2f1: '500 generations/mo', p2f2: 'All templates', p2f3: 'Priority support',
    p2f4: 'API access', p2f5: 'Bulk generation', p2b: 'Get Started',
    p3: 'Enterprise', p3p: 'Custom', p3d: 'For large teams',
    p3f1: 'Unlimited generations', p3f2: 'Custom templates', p3f3: 'Dedicated support',
    p3f4: 'SSO & SAML', p3f5: 'SLA guarantee', p3b: 'Contact Sales',
    docsTitle: 'Documentation', docsSub: 'Everything you need to get started',
    doc1: 'Quick Start', doc1d: 'Get up and running in 5 minutes.',
    doc2: 'API Reference', doc2d: 'Complete API documentation with examples.',
    doc3: 'Tutorials', doc3d: 'Step-by-step tutorials for common use cases.',
    contactTitle: 'Contact Us', contactSub: "We'd love to hear from you",
    cName: 'Name', cEmail: 'Email', cSubject: 'Subject', cMsg: 'Message',
    cSubmit: 'Send Message', cThanks: 'Thank you! We will get back to you soon.',
    cGeneral: 'General Inquiry', cSales: 'Sales', cSupport: 'Technical Support', cPartner: 'Partnership',
    footer1: 'AI-powered content creation platform. Generate better content faster.',
    footer2: 'Product', footer3: 'Company', footer4: 'Legal',
    fContact: 'Contact', fBlog: 'Blog', fAbout: 'About', fPrivacy: 'Privacy', fTerms: 'Terms',
    copyright: '© 2026 Solix. All rights reserved.',
  }
}

const I18N_ATTR = 'data-t'

export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname
    const method = request.method
    const headers = { 'content-type': 'text/html;charset=UTF-8', 'cache-control': 'no-cache' }

    if (method === 'POST' && path === '/api/contact') {
      try {
        const data = await request.json()
        return new Response(JSON.stringify({ ok: true, message: 'Message received' }), {
          headers: { 'content-type': 'application/json' }
        })
      } catch (e) {
        return new Response(JSON.stringify({ ok: false }), { status: 400, headers: { 'content-type': 'application/json' } })
      }
    }

    const pages = {
      '/': landingPage, '/pricing': pricingPage, '/features': featuresPage,
      '/docs': docsPage, '/contact': contactPage,
    }
    const page = pages[path] || notFoundPage
    return new Response(page(), { headers })
  }
}

function shell(title, content) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${title} - Solix</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
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
.nav-right{display:flex;gap:.6rem;align-items:center}
select.lang-btn{background:0 0;border:1px solid #d0d8e6;border-radius:8px;padding:.3rem .5rem;font-size:.8rem;cursor:pointer;color:#4a5a72;font-weight:500;font-family:inherit;outline:none}
select.lang-btn:hover{border-color:#93a5c1}
.btn{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:.6rem 1.5rem;border-radius:10px;text-decoration:none;font-size:.9rem;font-weight:600;display:inline-block;transition:transform .2s,box-shadow .2s}
.btn:hover{transform:translateY(-1px);box-shadow:0 8px 25px rgba(37,99,235,.3)}
.btn-outline{background:0 0;color:#0b1a2e;border:1.5px solid #d0d8e6;padding:.55rem 1.45rem;border-radius:10px;text-decoration:none;font-size:.9rem;font-weight:600;display:inline-block;transition:all .2s}
.btn-outline:hover{border-color:#93a5c1;background:rgba(0,0,0,.02)}
.hero{text-align:center;padding:10rem 2rem 4rem}
.hero h1{font-size:3.8rem;font-weight:800;letter-spacing:-.04em;line-height:1.12;margin-bottom:1rem}
.hero h1 span{background:linear-gradient(135deg,#2563eb,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{font-size:1.15rem;color:#4a5a72;margin-bottom:2rem;max-width:560px;margin:0 auto}
.hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
.hero-btns .btn,.hero-btns .btn-outline{padding:.85rem 2rem;font-size:1rem}
.badge{display:inline-block;background:rgba(37,99,235,.1);color:#2563eb;padding:.3rem .9rem;border-radius:100px;font-size:.8rem;font-weight:600;margin-bottom:1rem}
.stats{display:flex;justify-content:center;gap:4rem;flex-wrap:wrap;padding:2rem}
.stat{text-align:center}
.stat-num{font-size:2rem;font-weight:800}
.stat-lbl{color:#7a8ba7;font-size:.85rem}
section{padding:6rem 2rem}
.sec-title{text-align:center;font-size:2.2rem;font-weight:700;letter-spacing:-.03em;margin-bottom:1rem}
.sec-sub{text-align:center;color:#4a5a72;font-size:1.05rem;margin-bottom:3rem;max-width:600px;margin:0 auto 3rem}
.container{max-width:1200px;margin:0 auto}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.card{background:#fff;border:1px solid #eef2f8;border-radius:16px;padding:2rem;transition:transform .25s,box-shadow .25s;cursor:default}
.card:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,.06)}
.card-icon{width:48px;height:48px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;background:linear-gradient(135deg,rgba(37,99,235,.1),rgba(124,58,237,.1));border-radius:12px;margin-bottom:1rem}
.card h3{font-size:1.1rem;font-weight:600;margin-bottom:.5rem}
.card p{color:#4a5a72;font-size:.9rem;line-height:1.65}
.page-hdr{background:linear-gradient(135deg,#f0f4ff,#f5f0ff);padding:8rem 2rem 3rem;text-align:center}
.page-hdr h1{font-size:2.8rem;font-weight:800;letter-spacing:-.03em;margin-bottom:.5rem}
.page-hdr p{color:#4a5a72;font-size:1.1rem}
footer{background:#fff;border-top:1px solid #eef2f8;padding:4rem 2rem 2rem}
.f-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;max-width:1200px;margin:0 auto}
.f-col h4{font-size:.9rem;font-weight:600;margin-bottom:1rem}
.f-col p{color:#7a8ba7;font-size:.85rem;line-height:1.6}
.f-col a{display:block;color:#7a8ba7;text-decoration:none;font-size:.85rem;padding:.25rem 0;transition:color .2s}
.f-col a:hover{color:#2563eb}
.f-copy{text-align:center;color:#7a8ba7;font-size:.8rem;padding-top:2rem;margin-top:2rem;border-top:1px solid #eef2f8;max-width:1200px;margin:0 auto}
.not-found{text-align:center;padding:8rem 2rem}
.not-found h1{font-size:6rem;font-weight:800;background:linear-gradient(135deg,#2563eb,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.not-found p{color:#4a5a72;font-size:1.2rem;margin:1rem 0 2rem}
.accordion{border:1px solid #eef2f8;border-radius:12px;overflow:hidden}
.accordion-item{border-bottom:1px solid #eef2f8}
.accordion-item:last-child{border-bottom:0}
.accordion-btn{width:100%;padding:1rem 1.5rem;background:#fff;border:none;font-size:.95rem;font-weight:600;text-align:left;cursor:pointer;display:flex;justify-content:space-between;align-items:center;font-family:inherit;color:#0b1a2e}
.accordion-btn:hover{background:#fafbfc}
.accordion-btn .arrow{transition:transform .2s;font-size:.85rem;color:#7a8ba7}
.accordion-btn.active .arrow{transform:rotate(180deg)}
.accordion-panel{padding:0 1.5rem;max-height:0;overflow:hidden;transition:max-height .3s,padding .3s}
.accordion-panel.open{max-height:200px;padding:0 1.5rem 1rem}
.accordion-panel p{color:#4a5a72;font-size:.9rem;line-height:1.7}
.form-group{margin-bottom:1.5rem}
.form-group label{display:block;font-size:.9rem;font-weight:600;margin-bottom:.4rem}
.form-group input,.form-group select,.form-group textarea{width:100%;padding:.75rem 1rem;border:1.5px solid #d0d8e6;border-radius:10px;font-size:.9rem;font-family:inherit;outline:none;transition:border-color .2s;background:#fff}
.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:#2563eb}
.form-group textarea{resize:vertical;min-height:120px}
@media(max-width:768px){
  .hero h1{font-size:2.4rem}.grid-3{grid-template-columns:1fr}
  .nav-center{display:none}.hero{padding:7rem 1.5rem 3rem}
  .f-grid{grid-template-columns:repeat(2,1fr)}
}
@media(max-width:1024px)and(min-width:769px){.grid-3{grid-template-columns:repeat(2,1fr)}}
</style></head>
<body>
<nav><div class="nav-inner">
<a href="/" class="logo">solix</a>
<div class="nav-center">
<a href="/features" data-t="navF1">Features</a>
<a href="/pricing" data-t="navF2">Pricing</a>
<a href="/docs" data-t="navF3">Docs</a>
</div>
<div class="nav-right">
<select class="lang-btn" id="langSel"><option value="zh">中文</option><option value="en">English</option></select>
<a href="/contact" class="btn-outline" data-t="navContact">Contact</a>
<a href="/pricing" class="btn" data-t="navStart">Get Started</a>
</div>
</div></nav>
${content}
<footer>
<div class="f-grid">
<div class="f-col"><h4>solix</h4><p data-t="footer1">AI-powered content creation platform. Generate better content faster.</p></div>
<div class="f-col"><h4 data-t="footer2">Product</h4><a href="/features" data-t="navF1">Features</a><a href="/pricing" data-t="navF2">Pricing</a><a href="/docs" data-t="navF3">Docs</a></div>
<div class="f-col"><h4 data-t="footer3">Company</h4><a href="/contact" data-t="fContact">Contact</a><a href="/docs" data-t="fBlog">Blog</a><a href="/docs" data-t="fAbout">About</a></div>
<div class="f-col"><h4 data-t="footer4">Legal</h4><a href="/docs" data-t="fPrivacy">Privacy</a><a href="/docs" data-t="fTerms">Terms</a></div>
</div>
<p class="f-copy" data-t="copyright">© 2026 Solix. All rights reserved.</p>
</footer>
<script>
const D = ${JSON.stringify(TEXTS)};
const lang = localStorage.getItem('solix_lang') || (navigator.language.startsWith('zh')?'zh':'en');
document.getElementById('langSel').value = lang;
document.getElementById('langSel').onchange = function() {
  localStorage.setItem('solix_lang', this.value);
  applyLang(this.value);
};
function applyLang(l) {
  document.documentElement.lang = l;
  document.querySelectorAll('[data-t]').forEach(function(e) {
    var k = e.getAttribute('data-t');
    if (D[l] && D[l][k]) e.innerHTML = D[l][k];
  });
}
applyLang(lang);
</script>
</body>
</html>`
}

function landingPage() {
  return shell('AI Content Studio', `
<section class="hero">
<div class="badge" data-t="heroBadge">AI-Powered Content Creation</div>
<h1 data-t="heroTitle">Create Content with <span>AI</span>,<br><span>10x</span> Faster</h1>
<p data-t="heroDesc">Generate blog posts, social media content, and marketing copy powered by AI.</p>
<div class="hero-btns">
<a href="/pricing" class="btn" data-t="heroCTA">Start Free</a>
<a href="/features" class="btn-outline" data-t="heroLearn">Learn More</a>
</div>
<div class="stats">
<div><div class="stat-num">50K+</div><div class="stat-lbl" data-t="stats1">Active Users</div></div>
<div><div class="stat-num">1M+</div><div class="stat-lbl" data-t="stats2">Content Generated</div></div>
<div><div class="stat-num">120+</div><div class="stat-lbl" data-t="stats3">Countries</div></div>
</div>
</section>
<section>
<h2 class="sec-title" data-t="fTitle">Everything you need</h2>
<p class="sec-sub" data-t="fSub">Powerful tools to create better content faster.</p>
<div class="container"><div class="grid-3">
${['✍️','📱','📧','🎨','⚡','🔗','🤖','🌍','🔍'].map((icon,i) =>
`<div class="card" onclick="alert('Demo coming soon!')"><div class="card-icon">${icon}</div><h3 data-t="f${i+1}">Feature</h3><p data-t="f${i+1}d">Description</p></div>`
).join('')}
</div></div>
</section>
<section style="background:linear-gradient(135deg,#1e3a6f,#312e81);color:#fff;text-align:center">
<div class="container">
<h2 style="font-size:2.2rem;font-weight:700;margin-bottom:1rem" data-t="ctaTitle">Ready to get started?</h2>
<p style="opacity:.8;font-size:1.05rem;margin-bottom:2rem" data-t="ctaDesc">Sign up for free. No credit card required.</p>
<a href="/pricing" class="btn" style="background:#fff;color:#1e3a6f;font-weight:700" data-t="ctaBtn">Start Free</a>
</div>
</section>`)
}

function pricingPage() {
  return shell('Pricing', `
<div class="page-hdr"><h1 data-t="pricingTitle">Simple, transparent pricing</h1><p data-t="pricingSub">No hidden fees. Pay only for what you use.</p></div>
<section>
<div class="container"><div class="grid-3" style="max-width:1000px;margin:0 auto">
<div class="card" style="text-align:center">
<div style="color:#7a8ba7;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem" data-t="p1">Starter</div>
<div style="font-size:2.8rem;font-weight:800;margin-bottom:.25rem"><span data-t="p1p">$9</span><span style="font-size:1rem;font-weight:400;color:#7a8ba7">/mo</span></div>
<div style="color:#7a8ba7;font-size:.85rem;margin-bottom:1.5rem" data-t="p1d">For individuals</div>
<ul style="list-style:none;text-align:left;margin-bottom:2rem">
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p1f1">50 generations/mo</span></li>
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p1f2">Basic templates</span></li>
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p1f3">Email support</span></li>
</ul>
<a href="/pricing" class="btn-outline" style="display:block;text-align:center;cursor:pointer" data-t="p1b" onclick="alert('Coming soon!')">Get Started</a>
</div>
<div class="card" style="text-align:center;border-color:#2563eb;box-shadow:0 4px 24px rgba(37,99,235,.1);position:relative">
<div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:.25rem 1rem;border-radius:100px;font-size:.75rem;font-weight:600" data-t="popular">Most Popular</div>
<div style="color:#7a8ba7;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem" data-t="p2">Pro</div>
<div style="font-size:2.8rem;font-weight:800;margin-bottom:.25rem"><span data-t="p2p">$29</span><span style="font-size:1rem;font-weight:400;color:#7a8ba7">/mo</span></div>
<div style="color:#7a8ba7;font-size:.85rem;margin-bottom:1.5rem" data-t="p2d">For professionals</div>
<ul style="list-style:none;text-align:left;margin-bottom:2rem">
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p2f1">500 generations/mo</span></li>
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p2f2">All templates</span></li>
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p2f3">Priority support</span></li>
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p2f4">API access</span></li>
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p2f5">Bulk generation</span></li>
</ul>
<a href="/pricing" class="btn" style="display:block;text-align:center;cursor:pointer" data-t="p2b" onclick="alert('Coming soon!')">Get Started</a>
</div>
<div class="card" style="text-align:center">
<div style="color:#7a8ba7;font-size:.8rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.5rem" data-t="p3">Enterprise</div>
<div style="font-size:2.8rem;font-weight:800;margin-bottom:.25rem"><span data-t="p3p">Custom</span></div>
<div style="color:#7a8ba7;font-size:.85rem;margin-bottom:1.5rem" data-t="p3d">For large teams</div>
<ul style="list-style:none;text-align:left;margin-bottom:2rem">
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p3f1">Unlimited generations</span></li>
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p3f2">Custom templates</span></li>
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p3f3">Dedicated support</span></li>
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p3f4">SSO & SAML</span></li>
<li style="padding:.35rem 0;font-size:.9rem"><span data-t="p3f5">SLA guarantee</span></li>
</ul>
<a href="/pricing" class="btn-outline" style="display:block;text-align:center;cursor:pointer" data-t="p3b" onclick="alert('Coming soon!')">Contact Sales</a>
</div>
</div></div>
</section>`)
}

function featuresPage() {
  return shell('Features', `
<div class="page-hdr"><h1 data-t="fTitle">Everything you need</h1><p data-t="fSub">Powerful tools to create better content faster.</p></div>
<section>
<div class="container"><div class="grid-3">
${['✍️','📱','📧','🎨','⚡','🔗','🤖','🌍','🔍'].map((icon,i) =>
`<div class="card" onclick="alert('Demo coming soon!')"><div class="card-icon">${icon}</div><h3 data-t="f${i+1}">Feature</h3><p data-t="f${i+1}d">Description</p></div>`
).join('')}
</div></div>
</section>
<section style="background:linear-gradient(135deg,#f0f4ff,#f5f0ff)">
<div class="container" style="text-align:center">
<h2 class="sec-title" data-t="pricingTitle">Simple, transparent pricing</h2>
<p class="sec-sub" data-t="pricingSub">No hidden fees. Pay only for what you use.</p>
<div style="overflow-x:auto">
<table style="width:100%;border-collapse:collapse;margin:0 auto;max-width:900px;background:#fff;border-radius:16px;overflow:hidden">
<tr style="background:#f8fafd"><th style="padding:1rem;text-align:left;border-bottom:1px solid #eef2f8;font-weight:600">Feature</th>
<th style="padding:1rem;text-align:center;border-bottom:1px solid #eef2f8;font-weight:600" data-t="p1">Starter</th>
<th style="padding:1rem;text-align:center;border-bottom:1px solid #eef2f8;font-weight:600;background:linear-gradient(135deg,rgba(37,99,235,.05),rgba(124,58,237,.05))" data-t="p2">Pro</th>
<th style="padding:1rem;text-align:center;border-bottom:1px solid #eef2f8;font-weight:600" data-t="p3">Enterprise</th></tr>
<tr><td style="padding:.8rem 1rem;border-bottom:1px solid #f5f7fa"><span data-t="p1f1">Generations</span></td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa"><span data-t="p1f1">50/mo</span></td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa;background:rgba(37,99,235,.03)"><span data-t="p2f1">500/mo</span></td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa"><span data-t="p3f1">Unlimited</span></td></tr>
<tr><td style="padding:.8rem 1rem;border-bottom:1px solid #f5f7fa"><span data-t="p1f2">Templates</span></td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa" data-t="p1f2">Basic</td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa;background:rgba(37,99,235,.03)"><span data-t="p2f2">All</span></td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa" data-t="p3f2">Custom</td></tr>
<tr><td style="padding:.8rem 1rem;border-bottom:1px solid #f5f7fa"><span data-t="p2f4">API</span></td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa">—</td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa;background:rgba(37,99,235,.03)">✓</td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa">✓</td></tr>
<tr><td style="padding:.8rem 1rem;border-bottom:1px solid #f5f7fa">Support</td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa"><span data-t="p1f3">Email</span></td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa;background:rgba(37,99,235,.03)"><span data-t="p2f3">Priority</span></td>
<td style="padding:.8rem 1rem;text-align:center;border-bottom:1px solid #f5f7fa"><span data-t="p3f3">Dedicated</span></td></tr>
<tr><td style="padding:.8rem 1rem">Price</td>
<td style="padding:.8rem 1rem;text-align:center"><span data-t="p1p">$9</span></td>
<td style="padding:.8rem 1rem;text-align:center;background:rgba(37,99,235,.03)"><span data-t="p2p">$29</span></td>
<td style="padding:.8rem 1rem;text-align:center"><span data-t="p3p">Custom</span></td></tr>
</table>
</div>
</div>
</section>`)
}

function docsPage() {
  return shell('Documentation', `
<div class="page-hdr"><h1 data-t="docsTitle">Documentation</h1><p data-t="docsSub">Everything you need to get started</p></div>
<section>
<div class="container" style="max-width:900px">
<div class="grid-3" style="margin-bottom:3rem">
<a href="/docs" style="text-decoration:none;color:inherit"><div class="card"><h3 data-t="doc1">Quick Start</h3><p data-t="doc1d">Get up and running in 5 minutes.</p></div></a>
<a href="/docs" style="text-decoration:none;color:inherit"><div class="card"><h3 data-t="doc2">API Reference</h3><p data-t="doc2d">Complete API documentation with examples.</p></div></a>
<a href="/docs" style="text-decoration:none;color:inherit"><div class="card"><h3 data-t="doc3">Tutorials</h3><p data-t="doc3d">Step-by-step tutorials for common use cases.</p></div></a>
</div>
<h2 style="font-size:1.5rem;margin-bottom:1.5rem" data-t="doc1">Quick Start Guide</h2>
<div class="accordion">
${['Step 1: Create an account','Step 2: Choose a template','Step 3: Generate content','Step 4: Edit and refine','Step 5: Publish'].map((s,i) =>
`<div class="accordion-item">
<button class="accordion-btn" onclick="var p=this.nextElementSibling;var o=p.classList.contains('open');document.querySelectorAll('.accordion-panel').forEach(function(x){x.classList.remove('open');x.style.maxHeight=0});if(!o){p.classList.add('open');p.style.maxHeight=p.scrollHeight+'px'}this.classList.toggle('active')">${s}<span class="arrow">▼</span></button>
<div class="accordion-panel"><p>${['Sign up for free at solix.dpdns.org/pricing','Browse our template library or start from scratch','Describe what you need and let AI do the work','Fine-tune the output with our editor tools','Export directly to your blog, social media, or CMS'][i]}</p></div>
</div>`
).join('')}
</div>
</div>
</section>`)
}

function contactPage() {
  return shell('Contact', `
<div class="page-hdr"><h1 data-t="contactTitle">Contact Us</h1><p data-t="contactSub">We'd love to hear from you</p></div>
<section>
<div class="container" style="max-width:700px">
<div style="background:#fff;border:1px solid #eef2f8;border-radius:16px;padding:2.5rem">
<form id="cf" onsubmit="return false">
<div class="form-group"><label data-t="cName">Name</label><input type="text" id="cfn" required></div>
<div class="form-group"><label data-t="cEmail">Email</label><input type="email" id="cfe" required></div>
<div class="form-group"><label data-t="cSubject">Subject</label>
<select id="cfs"><option data-t="cGeneral">General Inquiry</option><option data-t="cSales">Sales</option><option data-t="cSupport">Technical Support</option><option data-t="cPartner">Partnership</option></select></div>
<div class="form-group"><label data-t="cMsg">Message</label><textarea id="cfm" required></textarea></div>
<button type="submit" class="btn" style="width:100%;padding:.85rem;font-size:1rem;cursor:pointer" onclick="sendContact()" data-t="cSubmit">Send Message</button>
</form>
<div id="cfMsg" style="display:none;padding:1rem;background:#e8f5e9;border-radius:10px;margin-top:1rem;text-align:center;font-weight:600"></div>
</div>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:2rem;text-align:center">
<div class="card"><div style="font-size:1.5rem;margin-bottom:.5rem">📧</div><div style="font-size:.85rem;color:#4a5a72">hello@solix.dpdns.org</div></div>
<div class="card"><div style="font-size:1.5rem;margin-bottom:.5rem">💬</div><div style="font-size:.85rem;color:#4a5a72" data-t="cSupport">Live Chat</div></div>
<div class="card"><div style="font-size:1.5rem;margin-bottom:.5rem">🐦</div><div style="font-size:.85rem;color:#4a5a72">@solix</div></div>
</div>
</div>
</section>
<script>
function sendContact() {
  var n=document.getElementById('cfn').value,e=document.getElementById('cfe').value,m=document.getElementById('cfm').value;
  if(!n||!e||!m) return alert('Please fill in all fields');
  var btn=event.target;btn.disabled=1;btn.textContent='Sending...';
  fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:n,email:e,subject:document.getElementById('cfs').value,message:m})})
  .then(function(){document.getElementById('cf').style.display='none';var msg=document.getElementById('cfMsg');msg.style.display='block';msg.textContent=D[document.documentElement.lang||'en'].cThanks;})
  .catch(function(){btn.disabled=0;btn.textContent='Error. Try again.';});
}
</script>`)
}

function notFoundPage() {
  return shell('404', `<div class="not-found"><h1>404</h1><p>Page not found</p><a href="/" class="btn" data-t="heroCTA">Go Home</a></div>`)
}
