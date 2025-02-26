import{_ as i,c as l,a as r,b as e,d as o,e as a,w as s,r as p,o as d}from"./app-BtLuAYYn.js";const u={};function c(m,t){const n=p("RouteLink");return d(),l("div",null,[t[21]||(t[21]=r('<h1 id="my-first-bot-tutorial" tabindex="-1"><a class="header-anchor" href="#my-first-bot-tutorial"><span>My First Bot tutorial</span></a></h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>This tutorial provides an introduction to creating your first bot for Robocode Tank Royale.</p><p>You might also have a look at the provided <a href="../articles/installation#sample-bots" title="Sample bots">sample bots</a> for Robocode for inspiration. You might also use the sample bots to provide a starting template containing all the necessary files to create a bot for a specific programming language and platform.</p>',4)),e("p",null,[t[1]||(t[1]=o("Note that this tutorial is aimed towards the official ")),a(n,{to:"/api/apis.html"},{default:s(()=>t[0]||(t[0]=[o("APIs")])),_:1}),t[2]||(t[2]=o(" available for Robocode Tank Royale provided on this site."))]),t[22]||(t[22]=e("h2",{id:"initial-setup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#initial-setup"},[e("span",null,"Initial setup")])],-1)),t[23]||(t[23]=e("p",null,[o("The first part of this tutorial is about the initial setup which is common for all bots that must be "),e("em",null,"booted"),o(" by the game regardless of which programming language is used when developing the bot.")],-1)),e("p",null,[t[4]||(t[4]=o("I recommend that you read about the ")),a(n,{to:"/articles/booter.html"},{default:s(()=>t[3]||(t[3]=[o("booter")])),_:1}),t[5]||(t[5]=o(" first before continuing on this tutorial as the following assumes you are somewhat familiar with the file name conventions, and the concept of ")),t[6]||(t[6]=e("em",null,"bot directories",-1)),t[7]||(t[7]=o(", and ")),t[8]||(t[8]=e("em",null,"root directories",-1)),t[9]||(t[9]=o("."))]),t[24]||(t[24]=r('<h2 id="prepare-a-root-directory" tabindex="-1"><a class="header-anchor" href="#prepare-a-root-directory"><span>Prepare a root directory</span></a></h2><p>Robocode needs to locate your bot, which must be stored into its own <em>bot directory</em> under a <em>root directory</em>. The purpose of the root directory is to contain one to many bot directories.</p><p>So the first step is to prepare a root directory which we name <em>bots</em>. Under Windows, you might create this folder under <code>C:\\bots</code> or <code>%userprofile%\\bots</code>, and for macOS or Linux you might create a folder under <code>~/bots</code>.</p><p>If you use the UI for Robocode, you will need to add this root directory in the Bot Root Configuration so Robocode will be able to locate your bot(s).</p><h2 id="prepare-a-bot-directory" tabindex="-1"><a class="header-anchor" href="#prepare-a-bot-directory"><span>Prepare a bot directory</span></a></h2>',5)),e("p",null,[t[11]||(t[11]=o("Next, you should create a bot directory inside the ")),t[12]||(t[12]=e("em",null,"bots",-1)),t[13]||(t[13]=o(" directory for your first bot, which we name ")),t[14]||(t[14]=e("em",null,"MyFirstBot",-1)),t[15]||(t[15]=o(", so it will be located under ")),t[16]||(t[16]=e("code",null,"../bots/MyFirstBot",-1)),t[17]||(t[17]=o(". All your bot files must be put into this folder and share the same file name as the bot directory (more info in the ")),a(n,{to:"/articles/booter.html"},{default:s(()=>t[10]||(t[10]=[o("booter")])),_:1}),t[18]||(t[18]=o(" article)."))]),t[25]||(t[25]=r(`<h2 id="create-a-json-file-for-bot-info" tabindex="-1"><a class="header-anchor" href="#create-a-json-file-for-bot-info"><span>Create a JSON file for bot info</span></a></h2><p>A <a href="https://fileinfo.com/extension/json" target="_blank" rel="noopener noreferrer">JSON</a> file is used for providing the game with information about your bot. You must create a MyFirstBot.json file and put this into your bot directory, i.e. into <code>../bots/MyFirstBot/MyFirstBot.json</code>.</p><p>This is the content of the JSON file, which you can copy and paste into the file:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre class="language-json"><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My First Bot&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0&quot;</span><span class="token punctuation">,</span></span>
<span class="line highlighted">  <span class="token property">&quot;authors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;«enter your name»&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My first bot&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;homepage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;«insert link to a home page for your bot»&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;countryCodes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;«enter your country code, e.g. us»&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;platform&quot;</span><span class="token operator">:</span> <span class="token string">&quot;«enter programming platform, e.g. Java or .Net»&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">&quot;programmingLang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;«enter programming language, e.g. Java or C#»&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The fields <code>name</code>, <code>version</code> and <code>authors</code> are required, and the rest of the fields are optional.</p><p>Note that the <code>authors</code> field should contain your full name, nickname, or handle, which identifies you. The <code>platform</code> and <code>programmingLang</code> depends on your choice of programming language and platform. For example, the platform could be Java 17, and the programming Language Kotlin 1.8.20 or Java 17. Or the platform could be .Net 6.0, and the programming language C# 10.0 or F# 6.0.</p><p>This concludes the common part of the tutorial, and the following depends on the platform of your choice.</p><h2 id="select-platform" tabindex="-1"><a class="header-anchor" href="#select-platform"><span>Select platform</span></a></h2><p>The rest of the tutorial is split up based on the available APIs for different platforms:</p>`,9)),e("ul",null,[e("li",null,[a(n,{to:"/tutorial/dotnet/my-first-bot-for-dotnet.html"},{default:s(()=>t[19]||(t[19]=[o(".Net")])),_:1})]),e("li",null,[a(n,{to:"/tutorial/jvm/my-first-bot-for-jvm.html"},{default:s(()=>t[20]||(t[20]=[o("Java / JVM")])),_:1})])])])}const h=i(u,[["render",c],["__file","my-first-bot.html.vue"]]),b=JSON.parse('{"path":"/tutorial/my-first-bot.html","title":"My First Bot tutorial","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Initial setup","slug":"initial-setup","link":"#initial-setup","children":[]},{"level":2,"title":"Prepare a root directory","slug":"prepare-a-root-directory","link":"#prepare-a-root-directory","children":[]},{"level":2,"title":"Prepare a bot directory","slug":"prepare-a-bot-directory","link":"#prepare-a-bot-directory","children":[]},{"level":2,"title":"Create a JSON file for bot info","slug":"create-a-json-file-for-bot-info","link":"#create-a-json-file-for-bot-info","children":[]},{"level":2,"title":"Select platform","slug":"select-platform","link":"#select-platform","children":[]}],"git":{"updatedTime":1720907942000},"filePathRelative":"tutorial/my-first-bot.md"}');export{h as comp,b as data};
