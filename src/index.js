const L = {
  zh: { navF1:'工具',navF2:'定价',navF3:'Markdown',navContact:'联系',navStart:'开始使用',
    heroTitle:'<span>AI</span> 内容创作工具集',heroDesc:'免费使用的在线工具：Markdown 编辑器、文本分析、密码生成、JSON 格式化等。',
    heroCTA:'开始使用',heroLearn:'浏览工具',
    tool1:'Markdown 编辑器',tool1d:'实时预览的 Markdown 编辑器，支持导出 HTML。',
    tool2:'文本分析器',tool2d:'统计字数、字符数、句数和阅读时间。',
    tool3:'密码生成器',tool3d:'生成高强度密码，多种配置选项。',
    tool4:'JSON 格式化',tool4d:'格式化、压缩和验证 JSON 数据。',
    tool5:'Base64 工具',tool5d:'Base64 编码 / 解码。',
    tool6:'大小写转换',tool6d:'转换文本为大写、小写、驼峰等。',
    ctaTitle:'准备好了？',ctaDesc:'免费使用，无需注册。',ctaBtn:'开始使用',
    write:'写点什么...',preview:'预览',html:'HTML',copy:'复制',copied:'已复制！',
    clear:'清空',words:'字',chars:'字符',sentences:'句',reading:'阅读时间',
    min:'分钟',generate:'生成密码',length:'长度',nums:'数字',symbols:'符号',
    format:'格式化',compress:'压缩',encode:'编码',decode:'解码',
    input:'输入',output:'输出',upper:'大写',lower:'小写',title:'标题',
    camel:'驼峰',snake:'蛇形',kebab:'短横',
    navTools:'工具',navMd:'Markdown',navPwd:'密码',navJson:'JSON',
    ft1:'免费工具集',ft1d:'所有工具免费使用，无需注册。',
    ft2:'本地处理',ft2d:'数据仅在浏览器中处理，不会上传到服务器。',
    ft3:'持续更新',ft3d:'不断添加新的实用工具。',
    footer1:'免费在线内容创作工具集。数据仅在本地处理。',
    copyright:'© 2026 Solix. 基于开源项目构建',
  },
  en: { navF1:'Tools',navF2:'Pricing',navF3:'Markdown',navContact:'Contact',navStart:'Get Started',
    heroTitle:'<span>AI</span> Content Tools',heroDesc:'Free online tools: Markdown editor, text analyzer, password generator, JSON formatter, and more.',
    heroCTA:'Get Started',heroLearn:'Browse Tools',
    tool1:'Markdown Editor',tool1d:'Real-time Markdown preview with HTML export.',
    tool2:'Text Analyzer',tool2d:'Count words, characters, sentences, and reading time.',
    tool3:'Password Generator',tool3d:'Generate strong passwords with configurable options.',
    tool4:'JSON Formatter',tool4d:'Format, minify, and validate JSON data.',
    tool5:'Base64 Tools',tool5d:'Base64 encode and decode.',
    tool6:'Case Converter',tool6d:'Convert text to upper, lower, camel, snake cases.',
    ctaTitle:'Ready?',ctaDesc:'Free to use. No sign-up required.',ctaBtn:'Get Started',
    write:'Write something...',preview:'Preview',html:'HTML',copy:'Copy',copied:'Copied!',
    clear:'Clear',words:'Words',chars:'Characters',sentences:'Sentences',reading:'Reading time',
    min:'min',generate:'Generate Password',length:'Length',nums:'Numbers',symbols:'Symbols',
    format:'Format',compress:'Minify',encode:'Encode',decode:'Decode',
    input:'Input',output:'Output',upper:'UPPER',lower:'lower',title:'Title',
    camel:'camelCase',snake:'snake_case',kebab:'kebab-case',
    navTools:'Tools',navMd:'Markdown',navPwd:'Password',navJson:'JSON',
    ft1:'Free Tools',ft1d:'All tools are free, no sign-up required.',
    ft2:'Local Only',ft2d:'Data is processed in your browser only.',
    ft3:'Growing',ft3d:'New tools added regularly.',
    footer1:'Free online content creation toolkit. All processing is done locally.',
    copyright:'© 2026 Solix. Built with open-source projects',
  }
}

export default {
  async fetch(request) {
    const url = new URL(request.url)
    const path = url.pathname
    const h = { 'content-type': 'text/html;charset=UTF-8', 'cache-control': 'no-cache' }
    const pages = {
      '/': homePage, '/pricing': pricingPage, '/tools': toolsPage,
      '/markdown': mdPage, '/password': pwdPage, '/json-tools': jsonPage,
    }
    const page = pages[path] || notFound
    return new Response(page(), { h })
  }
}

const CSS = `*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Inter,system-ui,sans-serif;background:#f8fafd;color:#0b1a2e;line-height:1.6}
::selection{background:#2563eb;color:#fff}
nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(248,250,253,.9);backdrop-filter:blur(12px);border-bottom:1px solid rgba(0,0,0,.06)}
.nav-inner{display:flex;justify-content:space-between;align-items:center;padding:1rem 2rem;max-width:1280px;margin:0 auto}
.logo{font-size:1.4rem;font-weight:800;letter-spacing:-.04em;background:linear-gradient(135deg,#1e40af,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-decoration:none}
.nav-center{display:flex;gap:1.5rem;align-items:center}
.nav-center a{color:#4a5a72;text-decoration:none;font-size:.85rem;font-weight:500;padding:.3rem .6rem;border-radius:6px;transition:all .2s}
.nav-center a:hover{color:#2563eb;background:rgba(37,99,235,.06)}
.nav-center a.active{color:#2563eb;background:rgba(37,99,235,.1);font-weight:600}
.nav-right{display:flex;gap:.5rem;align-items:center}
select.lang-btn{background:0 0;border:1px solid #d0d8e6;border-radius:8px;padding:.3rem .4rem;font-size:.8rem;cursor:pointer;color:#4a5a72;font-weight:500;font-family:inherit;outline:none}
.btn{background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;padding:.55rem 1.3rem;border-radius:10px;text-decoration:none;font-size:.85rem;font-weight:600;display:inline-block;transition:transform .2s,box-shadow .2s;cursor:pointer;border:none;font-family:inherit}
.btn:hover{transform:translateY(-1px);box-shadow:0 8px 25px rgba(37,99,235,.3)}
.btn-s{background:#eef2f8;color:#0b1a2e;padding:.4rem .9rem;border-radius:8px;border:none;font-size:.8rem;font-weight:500;cursor:pointer;font-family:inherit;transition:all .2s}
.btn-s:hover{background:#e2e8f0}
.hero{text-align:center;padding:9rem 2rem 4rem;background:radial-gradient(ellipse at 30% 20%,rgba(37,99,235,.06) 0%,transparent 60%)}
.hero h1{font-size:3.2rem;font-weight:800;letter-spacing:-.03em;line-height:1.15;margin-bottom:1rem}
.hero h1 span{background:linear-gradient(135deg,#2563eb,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{font-size:1.1rem;color:#4a5a72;max-width:560px;margin:0 auto 2rem}
.hero-btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
section{padding:5rem 2rem}
.sec-title{text-align:center;font-size:2rem;font-weight:700;letter-spacing:-.02em;margin-bottom:1rem}
.sec-sub{text-align:center;color:#4a5a72;margin-bottom:3rem}
.container{max-width:1200px;margin:0 auto}
.grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}
.card{background:#fff;border:1px solid #eef2f8;border-radius:14px;padding:1.8rem;transition:all .25s;text-decoration:none;color:inherit;display:block}
.card:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,.06)}
.card-icon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;background:linear-gradient(135deg,rgba(37,99,235,.1),rgba(124,58,237,.1));border-radius:10px;margin-bottom:1rem}
.card h3{font-size:1.05rem;font-weight:600;margin-bottom:.3rem}
.card p{color:#4a5a72;font-size:.85rem;line-height:1.5}
.page-hdr{padding:7rem 2rem 2.5rem;text-align:center;background:linear-gradient(135deg,#f0f4ff,#f5f0ff)}
.page-hdr h1{font-size:2.5rem;font-weight:800;letter-spacing:-.02em;margin-bottom:.4rem}
.page-hdr p{color:#4a5a72;font-size:1rem}
.tool-ui{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;min-height:400px;margin-top:1rem}
.tool-ui .panel{background:#fff;border:1px solid #eef2f8;border-radius:12px;display:flex;flex-direction:column}
.tool-ui .panel-hdr{display:flex;justify-content:space-between;align-items:center;padding:.75rem 1rem;border-bottom:1px solid #eef2f8;font-size:.8rem;font-weight:600;color:#7a8ba7}
.tool-ui textarea{width:100%;flex:1;border:none;padding:1rem;font-size:.9rem;font-family:monospace;resize:none;outline:none;line-height:1.6}
.tool-ui .preview{flex:1;padding:1rem;overflow-y:auto;font-size:.9rem;line-height:1.7}
footer{background:#fff;border-top:1px solid #eef2f8;padding:3rem 2rem 1.5rem;text-align:center}
footer p{color:#7a8ba7;font-size:.8rem}
@media(max-width:768px){
  .hero h1{font-size:2rem}.grid-3,.tool-ui{grid-template-columns:1fr}
  .nav-center a{font-size:.8rem;padding:.2rem .4rem}
  .nav-inner{padding:.8rem 1rem;flex-wrap:wrap;gap:.5rem}
}
@media(max-width:1024px)and(min-width:769px){.grid-3{grid-template-columns:repeat(2,1fr)}}
`

function shell(title, content, activeNav) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${title} - Solix</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>${CSS}</style></head>
<body>
<nav><div class="nav-inner">
<a href="/" class="logo">solix</a>
<div class="nav-center">
<a href="/tools" data-t="navTools" class="${activeNav==='tools'?'active':''}">Tools</a>
<a href="/markdown" data-t="navMd" class="${activeNav==='md'?'active':''}">Markdown</a>
<a href="/password" data-t="navPwd" class="${activeNav==='pwd'?'active':''}">Password</a>
<a href="/json-tools" data-t="navJson" class="${activeNav==='json'?'active':''}">JSON</a>
<a href="/pricing" data-t="navF2" class="${activeNav==='pricing'?'active':''}">Pricing</a>
</div>
<div class="nav-right">
<select class="lang-btn" id="langSel"><option value="zh">中文</option><option value="en">English</option></select>
</div>
</div></nav>
${content}
<footer><p data-t="footer1">Free online content creation toolkit.</p><p style="margin-top:.5rem;font-size:.75rem;color:#93a5c1" data-t="copyright">© 2026 Solix</p></footer>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"><\/script>
<script>
const D=${JSON.stringify(L)};
(function(){var l=localStorage.getItem('sl')||(navigator.language.startsWith('zh')?'zh':'en');
document.getElementById('langSel').value=l;
applyLang(l);
document.getElementById('langSel').onchange=function(){localStorage.setItem('sl',this.value);applyLang(this.value)};
function applyLang(l){document.documentElement.lang=l;document.querySelectorAll('[data-t]').forEach(function(e){var k=e.getAttribute('data-t');if(D[l]&&D[l][k])e.innerHTML=D[l][k]})}})();
<\/script>
${content.includes('textarea')?`<script>function t(id){var e=document.getElementById(id);return e?e.value:''}
function copy(id){var e=document.getElementById(id);if(!e)return;var t;if(e.tagName==='TEXTAREA'||e.tagName==='INPUT'){e.select();navigator.clipboard.writeText(e.value)}else{t=e.textContent;navigator.clipboard.writeText(t)}
var b=event.target;var ot=b.textContent;b.textContent=D[document.documentElement.lang].copied;setTimeout(function(){b.textContent=ot},1500)}`:''}
<\/script>
</body>
</html>`
}

function homePage() {
  return shell('Tools', `
<section class="hero">
<h1 data-t="heroTitle"><span>AI</span> Content Tools</h1>
<p data-t="heroDesc">Free online tools: Markdown editor, text analyzer, password generator, JSON formatter, and more.</p>
<div class="hero-btns"><a href="/tools" class="btn" data-t="heroCTA">Get Started</a></div>
</section>
<section>
<h2 class="sec-title" data-t="navTools">Tools</h2>
<p class="sec-sub">Free, fast, works offline-capable</p>
<div class="container"><div class="grid-3">
<a href="/markdown" class="card"><div class="card-icon">📝</div><h3 data-t="tool1">Markdown Editor</h3><p data-t="tool1d">Real-time Markdown preview with HTML export.</p></a>
<a href="/markdown" class="card"><div class="card-icon">📊</div><h3 data-t="tool2">Text Analyzer</h3><p data-t="tool2d">Count words, characters, sentences, and reading time.</p></a>
<a href="/password" class="card"><div class="card-icon">🔐</div><h3 data-t="tool3">Password Generator</h3><p data-t="tool3d">Generate strong passwords with configurable options.</p></a>
<a href="/json-tools" class="card"><div class="card-icon">📋</div><h3 data-t="tool4">JSON Formatter</h3><p data-t="tool4d">Format, minify, and validate JSON data.</p></a>
<a href="/markdown" class="card"><div class="card-icon">🔢</div><h3 data-t="tool5">Base64 Tools</h3><p data-t="tool5d">Base64 encode and decode.</p></a>
<a href="/markdown" class="card"><div class="card-icon">🔤</div><h3 data-t="tool6">Case Converter</h3><p data-t="tool6d">Convert text to upper, lower, camel, snake cases.</p></a>
</div></div>
</section>
<section style="background:linear-gradient(135deg,#f0f4ff,#f5f0ff)">
<div class="container"><div class="grid-3" style="max-width:800px;margin:0 auto;text-align:center">
<div><div style="font-size:2.5rem;margin-bottom:.5rem">🆓</div><h3 style="margin-bottom:.3rem" data-t="ft1">Free Tools</h3><p style="color:#4a5a72;font-size:.85rem" data-t="ft1d">All tools free, no sign-up.</p></div>
<div><div style="font-size:2.5rem;margin-bottom:.5rem">🔒</div><h3 style="margin-bottom:.3rem" data-t="ft2">Local Only</h3><p style="color:#4a5a72;font-size:.85rem" data-t="ft2d">Processed in your browser.</p></div>
<div><div style="font-size:2.5rem;margin-bottom:.5rem">📈</div><h3 style="margin-bottom:.3rem" data-t="ft3">Growing</h3><p style="color:#4a5a72;font-size:.85rem" data-t="ft3d">New tools added regularly.</p></div>
</div></div>
</section>
<section style="background:linear-gradient(135deg,#1e3a6f,#312e81);color:#fff;text-align:center">
<div class="container"><h2 style="font-size:2rem;font-weight:700;margin-bottom:.8rem" data-t="ctaTitle">Ready?</h2>
<p style="opacity:.8;margin-bottom:2rem" data-t="ctaDesc">Free to use. No sign-up required.</p>
<a href="/tools" class="btn" style="background:#fff;color:#1e3a6f;font-weight:700" data-t="ctaBtn">Get Started</a></div>
</section>`)
}

function toolsPage() {
  return homePage().replace('class="hero"','class="page-hdr"').replace('heroTitle','').replace('heroDesc','')
}

function mdPage() {
  return shell('Markdown Editor', `
<div class="page-hdr"><h1 data-t="tool1">Markdown Editor</h1><p data-t="tool1d">Real-time preview with HTML export.</p></div>
<section style="padding-top:2rem">
<div class="container">
<div class="tool-ui" id="mdApp">
<div class="panel">
<div class="panel-hdr"><span data-t="write">Write...</span><button class="btn-s" onclick="document.getElementById('mdIn').value='';update()" data-t="clear">Clear</button></div>
<textarea id="mdIn" oninput="update()" placeholder="# Hello World&#10;&#10;Type **Markdown** here..."></textarea>
</div>
<div class="panel">
<div class="panel-hdr">
<span><span data-t="preview">Preview</span> / <span data-t="html">HTML</span></span>
<div><button class="btn-s" onclick="copy('mdOut')" data-t="copy">Copy</button></div>
</div>
<div id="mdOut" class="preview"></div>
</div>
</div>
</div>
</section>
<script defer>
function update(){var e=document.getElementById('mdIn'),o=document.getElementById('mdOut');if(!e||!o||typeof marked==='undefined')return;var v=e.value;o.innerHTML=v?marked.parse(v):'<p style="color:#93a5c1">Preview will appear here...</p>'}
setTimeout(update,500);
<\/script>`)
}

function pwdPage() {
  return shell('Password Generator', `
<div class="page-hdr"><h1 data-t="tool3">Password Generator</h1><p data-t="tool3d">Generate strong passwords instantly.</p></div>
<section style="padding-top:2rem">
<div class="container" style="max-width:600px">
<div style="background:#fff;border:1px solid #eef2f8;border-radius:14px;padding:2rem">
<div style="display:flex;gap:.75rem;margin-bottom:1.5rem">
<input id="pwdOut" type="text" readonly style="flex:1;padding:.75rem 1rem;border:1.5px solid #d0d8e6;border-radius:10px;font-size:1.1rem;font-family:monospace;outline:none;background:#f8fafd" value="aB3#kL9$xQ">
<button class="btn-s" onclick="copy('pwdOut')" data-t="copy">Copy</button>
<button class="btn" onclick="gen()" data-t="generate" style="padding:.55rem 1rem;font-size:.85rem">Generate</button>
</div>
<div style="margin-bottom:1.2rem"><label style="font-size:.85rem;font-weight:500" data-t="length">Length</label>
<input id="pwdLen" type="range" min="4" max="64" value="16" oninput="document.getElementById('pwdLenVal').textContent=this.value" style="width:100%;margin-top:.3rem">
<div style="display:flex;justify-content:space-between;font-size:.8rem;color:#7a8ba7"><span>4</span><span id="pwdLenVal">16</span><span>64</span></div>
</div>
<div style="display:flex;gap:1.5rem">
<label style="display:flex;align-items:center;gap:.4rem;font-size:.85rem;cursor:pointer"><input type="checkbox" id="pwdNums" checked><span data-t="nums">Numbers</span></label>
<label style="display:flex;align-items:center;gap:.4rem;font-size:.85rem;cursor:pointer"><input type="checkbox" id="pwdSyms" checked><span data-t="symbols">Symbols</span></label>
</div>
</div>
</div>
</section>
<script defer>
function gen(){var len=+(document.getElementById('pwdLen').value||16),n=document.getElementById('pwdNums').checked,s=document.getElementById('pwdSyms').checked;
var l='abcdefghijklmnopqrstuvwxyz',u='ABCDEFGHIJKLMNOPQRSTUVWXYZ',d='0123456789',y='!@#$%^&*()_+-=[]{}|;:,.<>?';
var c=l+u+(n?d:'')+(s?y:'');if(!c)return;
var r='';for(var i=0;i<len;i++)r+=c[Math.floor(Math.random()*c.length)];
document.getElementById('pwdOut').value=r}
gen();
<\/script>`)
}

function jsonPage() {
  return shell('JSON Tools', `
<div class="page-hdr"><h1 data-t="tool4">JSON Formatter</h1><p data-t="tool4d">Format, minify, and validate JSON.</p></div>
<section style="padding-top:2rem">
<div class="container">
<div class="tool-ui">
<div class="panel">
<div class="panel-hdr"><span data-t="input">Input</span>
<div><button class="btn-s" onclick="fmt()" data-t="format">Format</button><button class="btn-s" onclick="cmp()" style="margin-left:.4rem" data-t="compress">Minify</button></div>
</div>
<textarea id="jsonIn" placeholder='{"key": "value", "arr": [1, 2, 3]}'></textarea>
</div>
<div class="panel">
<div class="panel-hdr"><span data-t="output">Output</span><button class="btn-s" onclick="copy('jsonOut')" data-t="copy">Copy</button></div>
<textarea id="jsonOut" readonly style="background:#f8fafd"></textarea>
</div>
</div>
</div>
</section>
<script defer>
function proc(fn){var e=document.getElementById('jsonIn'),o=document.getElementById('jsonOut');if(!e||!o)return;
try{var j=JSON.parse(e.value||'{}');o.value=fn(j)}catch(x){o.value='Error: '+x.message}}
function fmt(){proc(function(j){return JSON.stringify(j,null,2)})}
function cmp(){proc(function(j){return JSON.stringify(j)})}
<\/script>`)
}

function pricingPage() {
  return shell('Pricing', `
<div class="page-hdr"><h1 data-t="navF2">Pricing</h1><p>Free for everyone. No hidden fees.</p></div>
<section><div class="container" style="max-width:600px;margin:0 auto">
<div class="card" style="text-align:center;padding:3rem;border:2px solid #2563eb">
<div style="font-size:3rem;font-weight:800;color:#2563eb">$0</div>
<div style="font-size:1.1rem;color:#4a5a72;margin:.5rem 0 1.5rem">Free forever</div>
<ul style="list-style:none;text-align:left;max-width:300px;margin:0 auto 2rem">
<li style="padding:.4rem 0">✓ All current tools</li>
<li style="padding:.4rem 0">✓ New tools as released</li>
<li style="padding:.4rem 0">✓ No registration required</li>
<li style="padding:.4rem 0">✓ No data leaves your browser</li>
</ul>
</div>
</div></section>`)
}

function notFound() {
  return shell('404', `<div style="text-align:center;padding:8rem 2rem"><h1 style="font-size:6rem;font-weight:800;background:linear-gradient(135deg,#2563eb,#7c3aed);-webkit-text-fill-color:transparent;-webkit-background-clip:text">404</h1><p style="color:#4a5a72;margin:1rem 0 2rem">Page not found</p><a href="/" class="btn">Go Home</a></div>`)
}
