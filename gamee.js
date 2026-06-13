(function(){
if(window.__LIMITLESS_QZ__)return;window.__LIMITLESS_QZ__=1;

var css=`@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500;600;700;800;900&display=swap");
#pqx,#pqo{direction:rtl;font-family:"Readex Pro",Arial,sans-serif;color:#fff;text-align:center}
#pqx *,#pqo *{box-sizing:border-box;font-family:"Readex Pro",Arial,sans-serif}
.pqwrap{position:relative;overflow:hidden;border-radius:30px;border:1px solid rgba(229,231,235,.18);padding:26px 14px;background:radial-gradient(circle at 85% 0%,rgba(255,255,255,.13),transparent 30%),radial-gradient(circle at 5% 90%,rgba(221,227,234,.11),transparent 32%),linear-gradient(135deg,#000,#101010 52%,#050505);box-shadow:0 26px 80px rgba(0,0,0,.55)}
#pqx .pqwrap{max-width:960px;margin:22px auto}
#pqo{position:fixed;inset:0;z-index:2147483600;background:rgba(0,0,0,.78);display:flex;align-items:center;justify-content:center;padding:14px}
#pqo .pqwrap{width:100%;max-width:940px;max-height:92vh;overflow:auto}
.pqwrap:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:38px 38px;opacity:.20;pointer-events:none}
.pqin{position:relative;max-width:880px;margin:auto;border-radius:26px;border:1px solid rgba(255,255,255,.14);background:rgba(10,10,10,.86);padding:26px 14px;box-shadow:0 24px 70px rgba(0,0,0,.52),0 0 24px rgba(229,231,235,.07)}
.x{position:absolute;left:13px;top:13px;width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);color:#fff;font-size:24px;cursor:pointer;z-index:5}
.lg{max-width:138px;max-height:62px;object-fit:contain;margin:0 auto 14px;display:block}
.ttl{margin:0 0 12px;font-size:clamp(23px,4vw,41px);line-height:1.4;font-weight:900}
.ttl span,.hi{display:inline-block;padding:1px 8px;border-radius:999px;color:#000;background:linear-gradient(135deg,#e5e7eb,#fff);font-weight:900}
.ds{max-width:760px;margin:0 auto 12px;color:#d6d6d6;font-size:14px;line-height:1.95}
.ds b{color:#fff;font-weight:900}
.sc{display:inline-flex;margin:8px auto 18px;padding:8px 14px;border-radius:999px;color:#cfcfcf;background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.12);font-size:12px;font-weight:800}
.bar{width:100%;max-width:600px;height:8px;margin:0 auto 20px;overflow:hidden;border-radius:999px;background:rgba(255,255,255,.1)}
.bar i{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,#9ca3af,#fff);transition:.3s}
.timer{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-width:150px;margin:0 auto 12px;padding:12px 18px;border-radius:20px;font-size:27px;font-weight:900;color:#fff;background:rgba(34,197,94,.18);border:1px solid rgba(34,197,94,.48);box-shadow:0 0 28px rgba(34,197,94,.14)}
.timer.red{background:rgba(239,68,68,.92);border-color:rgba(239,68,68,.85);animation:tp .7s infinite}
.meta{display:flex;justify-content:center;align-items:center;gap:10px;flex-wrap:wrap;margin:0 0 12px}
.pill{display:inline-flex;align-items:center;justify-content:center;min-height:32px;padding:7px 15px;border-radius:999px;color:#e5e7eb;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);font-size:12px;font-weight:800}
.q{max-width:790px;margin:12px auto 16px;color:#fff;font-size:clamp(19px,3vw,29px);line-height:1.65;font-weight:900}
.ops{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;max-width:830px;margin:auto}
.op{min-height:94px;display:flex;align-items:center;gap:12px;width:100%;padding:16px;cursor:pointer;text-align:right;color:#fff;border-radius:22px;border:1px solid rgba(255,255,255,.14);background:linear-gradient(135deg,rgba(255,255,255,.1),rgba(255,255,255,.035));transition:.18s}
.op:hover{transform:translateY(-3px);border-color:rgba(255,255,255,.36);background:rgba(255,255,255,.115)}
.lt{width:38px;height:38px;min-width:38px;display:flex;align-items:center;justify-content:center;border-radius:14px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.16);font-weight:900}
.op strong{font-size:14px;line-height:1.75}
.op.ok{border-color:rgba(34,197,94,.85);background:rgba(34,197,94,.22);animation:ok .35s}
.op.no{border-color:rgba(239,68,68,.9);background:rgba(239,68,68,.22);animation:no .25s}
.op.off{pointer-events:none}
.cpn{max-width:540px;margin:20px auto 0;padding:18px 16px;border-radius:24px;color:#fff;background:#020202;border:2px dashed rgba(255,255,255,.72);outline:1px dashed rgba(255,255,255,.30);outline-offset:-9px;box-shadow:inset 0 0 34px rgba(255,255,255,.07),0 14px 42px rgba(0,0,0,.42);font-weight:900;position:relative}
.cpn:before,.cpn:after{content:"••••••••••";position:absolute;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.48);font-size:12px;letter-spacing:6px}
.cpn:before{top:5px}.cpn:after{bottom:5px}
.cpn small{display:block;margin-bottom:9px;color:#d1d5db;font-size:11px;letter-spacing:.8px}
.seg{display:inline-flex;align-items:center;justify-content:center;min-width:82px;min-height:38px;margin:4px;padding:7px 13px;border-radius:14px;color:#fff;background:#070707;border:1px dashed rgba(255,255,255,.34);font-size:20px;letter-spacing:1px}
.seg.on{background:#000;color:#fff;border-color:rgba(255,255,255,.9);box-shadow:0 0 18px rgba(255,255,255,.12);animation:pop .25s ease both}
.act{display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;margin-top:20px}
.btn{min-height:48px;padding:0 22px;border-radius:999px;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.09);color:#fff;cursor:pointer;font-size:13px;font-weight:900;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;transition:.18s}
.btn.p{position:relative;overflow:hidden;color:#000;background:linear-gradient(135deg,#e5e7eb,#fff);border-color:rgba(255,255,255,.8)}
.btn:hover{transform:translateY(-2px)}
.ic{width:76px;height:76px;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;border-radius:24px;color:#000;background:linear-gradient(135deg,#e5e7eb,#fff);font-size:34px;font-weight:900}
.ic.e{color:#fecaca;background:rgba(239,68,68,.15);border:1px solid rgba(239,68,68,.35)}
.code{display:inline-block;margin:12px auto;padding:18px 34px;border-radius:24px;color:#fff;background:#020202;border:2px dashed rgba(255,255,255,.78);outline:1px dashed rgba(255,255,255,.32);outline-offset:-9px;box-shadow:inset 0 0 36px rgba(255,255,255,.08),0 18px 45px rgba(0,0,0,.38);font-size:clamp(26px,5vw,42px);font-weight:900;letter-spacing:2px;position:relative}
.code:before,.code:after{content:"••••••••";position:absolute;left:50%;transform:translateX(-50%);color:rgba(255,255,255,.42);font-size:11px;letter-spacing:6px}
.code:before{top:5px}.code:after{bottom:5px}
.cd{display:inline-flex;margin:8px auto 16px;padding:8px 14px;border-radius:999px;color:#fff;background:rgba(239,68,68,.16);border:1px solid rgba(239,68,68,.35);font-weight:900}
.pg{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:20px auto 0;max-width:900px}
.pc{background:#fff;color:#000;border-radius:22px;padding:10px;text-align:right;box-shadow:0 18px 45px rgba(0,0,0,.35);min-height:auto;display:flex;flex-direction:column;justify-content:space-between;overflow:hidden;text-decoration:none;max-width:300px;width:100%;margin:0 auto}
.pimg{width:100%;aspect-ratio:4/5;height:auto;border-radius:18px;background:#f4f4f5;overflow:hidden;display:flex;align-items:center;justify-content:center;margin-bottom:13px}
.pimg img{width:100%;height:100%;object-fit:contain;object-position:center;display:block;padding:0}
.ph{width:78px;height:78px;border-radius:18px;background:linear-gradient(135deg,#e5e7eb,#f9fafb);display:flex;align-items:center;justify-content:center;color:#777;font-size:11px;text-align:center;line-height:1.5}
.kick{display:inline-flex;width:fit-content;padding:5px 10px;border-radius:999px;background:#e5e7eb;color:#1a1a1a;font-size:11px;font-weight:800;margin-bottom:9px}
.pc h4{margin:0 0 8px;font-size:14px;color:#000;line-height:1.45;font-weight:900;direction:ltr;text-align:left;min-height:auto}
.price{display:flex;align-items:center;justify-content:flex-start;direction:ltr;margin:0 0 12px;min-height:27px;white-space:nowrap}
.cur{color:#111;font-size:18px;font-weight:900}
.load{color:#777;font-size:12px;font-weight:700}
.pc p{margin:0 0 14px;color:#555;font-size:12px;line-height:1.7;text-align:right}
.buy{display:inline-flex;align-items:center;justify-content:center;width:100%;min-height:43px;padding:0 16px;border-radius:999px;border:1px solid rgba(0,0,0,.85);background:#000;color:#fff;text-decoration:none;font-weight:900;font-size:12px}
.wa{background:linear-gradient(135deg,#22c55e,#86efac)!important;color:#001b09!important;border-color:rgba(134,239,172,.8)!important}
@keyframes tp{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
@keyframes ok{50%{transform:scale(1.025)}}
@keyframes no{25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
@keyframes pop{from{opacity:.4;transform:scale(.9)}to{opacity:1;transform:scale(1)}}
@media(max-width:900px){.pg{grid-template-columns:repeat(2,1fr)}}
@media(max-width:700px){#pqo{padding:8px}.pqwrap{border-radius:22px;padding:14px 8px}.pqin{padding:22px 10px;border-radius:22px}.ops,.pg{grid-template-columns:1fr}.pg{max-width:360px}.op{min-height:auto}.act{flex-direction:column}.btn{width:100%}.timer{width:100%;font-size:30px;margin-bottom:10px;position:sticky;top:0;z-index:3}.seg{min-width:72px;font-size:17px}.pc{max-width:340px;width:100%;margin:0 auto}.pimg{aspect-ratio:4/5;height:auto}}
`;

var style=document.createElement("style");style.id="LimitlessQuizGameStyle";style.textContent=css;document.head.appendChild(style);

var LOGO="https://files.easy-orders.net/1779651323776486437.png",WA="https://wa.me/201024348002",DELAY=50000,LIMIT=45,time=LIMIT,timer=null,lock=false,step=0,rev=0,code="",qs=[],parts=[],auto=0,productCache={};

var C={
"100EGP":{msg:"مبروك حصلت على قسيمة بقيمة 100 ج صالحة على المنتجات الآتية فقط",p:["creatine-citrulline-carb-offer","Evolve-Whey-Protein","CreaForce-Creapure-Creatine-Citrulline","ON-GOLD-STANDARED-WHEY","Totalwar-Preworkout","Pureganic-Preworkout","citrulline-malate-anabolic-creatine-pump","Nutriversum-Massgainer","Nutriversum-Amino-350-Tablet","Xtreme-Whey-Blend","Novogen-MassGainer","Badass-Concentrate","Zou-Whey-Concentrate2"]},
"50EGP":{msg:"مبروك حصلت على قسيمة بقيمة 50 ج صالحة على المنتجات الآتية فقط",p:["CreaPower","citrulline-malate-anabolic-creatine-pump","Gold-Isolate","PureGanic-Creatine","CreaForce-Creapure-Creatine-Citrulline","Anabolic-Crazy-Pump-Preworkout","RuleOne-Creatine","Pureganic-Preworkout","Anabolic-Creatine-200Serv","Novogen-MassGainer","Dy-Creatine","whey-concentrate-anabolic-creatine"]},
"RandomSale":{msg:"كسبت نسبة خصم عشوائية ممكن تبقى نسبة خصم عالية جدا أو نسبة قليلة أنت وحظك على أى منتج قيمته أعلى من 500 ج",p:[]}
};

function R(f){document.readyState!="loading"?f():document.addEventListener("DOMContentLoaded",f)}
function G(i){return document.getElementById(i)}
function Sh(a){return a.sort(function(){return Math.random()-.5})}
function logo(){return'<img class="lg" src="'+LOGO+'" alt="Limitless">'}
function shell(h,close){return'<div class="pqwrap">'+(close?'<button class="x" id="pqclose">×</button>':"")+'<div class="pqin">'+logo()+h+'</div></div>'}
function openBox(h){var old=G("pqo");if(old)old.remove();var d=document.createElement("div");d.id="pqo";d.innerHTML=shell(h,1);document.body.appendChild(d);G("pqclose").onclick=function(){clearInterval(timer);d.remove()}}
function getQuestionSource(){return window.QUIZ_QUESTIONS||window.LIMITLESS_QUIZ_QUESTIONS||[]}
function normalizeQuestion(item){if(!item)return null;var q=item.q||item.question||item.text||item.title||"",opts=item.o||item.options||item.answers||[],a=typeof item.a==="number"?item.a:typeof item.answer==="number"?item.answer:typeof item.correct==="number"?item.correct:0;if(!q||!opts||opts.length<2)return null;return{q:String(q),o:opts.slice(0,4).map(function(x){return String(x)}),a:a}}
function prep(){var source=getQuestionSource().map(normalizeQuestion).filter(Boolean);if(source.length<3)return false;var ks=Object.keys(C);code=ks[Math.floor(Math.random()*ks.length)];parts=code=="RandomSale"?["Random","Sale","🎁"]:code=="100EGP"?["100","EG","P"]:["50","EG","P"];qs=Sh(source.slice()).slice(0,3);step=0;rev=0;return true}
function cpn(){var h='<div class="cpn"><small>YOUR REWARD COUPON</small>';for(var i=0;i<3;i++)h+='<span class="seg '+(i<rev?"on":"")+'">'+(i<rev?parts[i]:"-----")+'</span>';return h+'</div>'}
function introText(){return'<h2 class="ttl">اختبر معرفتك بعلم التغذية في تحدي من <span>3 أسئلة</span> جاوب عليهم صح، واستلم هديتك</h2><p class="ds">مش بنقدملك <b>هدية وبس</b>؛ بنقدملك <b>معلومة</b> تساعدك تفهم جسمك، تحدد احتياجك، وتختار المكمل المناسب بثقة.</p><p class="ds">هدفنا <b>ليس البيع فقط</b>؛ رسالتنا <b>نشر الوعي والمعلومة</b> مما سيؤدي بالضرورة إلى <b>صحة أفضل</b>.</p>'}
function inlineCard(){var r=G("pqx");if(!r)return;r.innerHTML=shell(introText()+'<div class="sc">جاوب على 3 أسئلة صحيحة واحصل على قسيمة عشوائية</div><div class="bar"><i style="width:0%"></i></div><div class="cpn"><small>YOUR REWARD COUPON</small><span class="seg">-----</span><span class="seg">-----</span><span class="seg">-----</span></div><div class="act"><button class="btn p" id="inlineStart">ابدأ التحدي</button></div>',0);G("inlineStart").onclick=function(){auto=1;intro()}}
function noQuestions(){openBox('<div class="ic e">!</div><h2 class="ttl">الأسئلة لم تتحمل بعد</h2><p class="ds">تأكد أن ملف questions.js متضاف قبل ملف quiz-game.js وفيه window.QUIZ_QUESTIONS.</p><div class="act"><button class="btn p" id="tryq">حاول مرة أخرى</button></div>');G("tryq").onclick=intro}
function intro(){if(!prep()){noQuestions();return}openBox(introText()+'<div class="sc">إجمالي الوقت 45 ثانية فقط للإجابة على 3 أسئلة</div><div class="bar"><i style="width:0%"></i></div>'+cpn()+'<div class="act"><button class="btn p" id="begin">ابدأ التحدي</button></div>');G("begin").onclick=start}
function start(){time=LIMIT;step=0;rev=0;clearInterval(timer);ask();timer=setInterval(function(){time--;paintTime();if(time<=0)wrong("الوقت خلص! يمكنك إعادة التحدي مرة أخرى وربح قسيمة شراء مجانية.")},1000)}
function paintTime(){var e=G("tm");if(e){e.innerHTML="⏱ "+time+"s";if(time<=10)e.classList.add("red")}}
function ask(){lock=false;var q=qs[step],arr=q.o.map(function(x,i){return{text:x,ok:i==q.a}});arr=Sh(arr);q.cur=arr;var L=["A","B","C","D"],h="";for(var i=0;i<arr.length;i++)h+='<button class="op" data-i="'+i+'"><span class="lt">'+L[i]+'</span><strong>'+arr[i].text+'</strong></button>';openBox('<div class="meta"><div class="pill">السؤال '+(step+1)+' من 3</div></div><div class="timer" id="tm">⏱ '+time+'s</div><div class="bar"><i style="width:'+((step/3)*100+15)+'%"></i></div><h3 class="q">'+q.q+'</h3><div class="ops">'+h+'</div>'+cpn());paintTime();document.querySelectorAll("#pqo .op").forEach(function(b){b.onclick=function(){ans(+this.getAttribute("data-i"),this)}})}
function ans(i,b){if(lock)return;lock=true;document.querySelectorAll("#pqo .op").forEach(function(x){x.classList.add("off")});if(qs[step].cur[i].ok){b.classList.add("ok");rev++;setTimeout(function(){step++;step>=3?win():ask()},500)}else{b.classList.add("no");setTimeout(function(){wrong("للأسف إجابتك خاطئة يمكنك إعادة التحدي مرة أخرى وربح قسيمة شراء مجانية ولا تتردد نهائيًا في استشارة د/مازن في أي سؤال تتعثر في إجابته أو طلب النصيحة في اختيار المكمل المناسب.")},550)}}
function wrong(msg){clearInterval(timer);openBox('<div class="ic e">×</div><h2 class="ttl">للأسف إجابتك خاطئة</h2><p class="ds">'+msg+'</p><div class="act"><button class="btn p" id="retry">إعادة التحدي</button><a class="btn wa" href="'+WA+'" target="_blank">التواصل مع د/مازن</a></div>');G("retry").onclick=intro}
function win(){clearInterval(timer);var o=C[code];openBox('<div class="ic">✓</div><h2 class="ttl">تم فتح <span>قسيمة الخصم</span></h2><p class="ds">'+o.msg+'</p><div class="code">'+code+'</div><div class="cd">هذه القسيمة صالحة لمدة 24 ساعة: <span id="cdt">24:00:00</span></div><div class="act"><button class="btn p" id="copyc">نسخ القسيمة</button><button class="btn" id="shopc">ابدأ التسوق الآن</button></div><div class="pg" id="plist"></div>');G("copyc").onclick=function(){navigator.clipboard&&navigator.clipboard.writeText(code);this.innerHTML="تم النسخ"};G("shopc").onclick=function(){location.href=o.p[0]?productUrl(o.p[0]):"/collections/all"};count(86400);cards(code)}
function count(sec){clearInterval(window.pqcd);window.pqcd=setInterval(function(){sec--;var h=String(Math.floor(sec/3600)).padStart(2,"0"),m=String(Math.floor(sec%3600/60)).padStart(2,"0"),s=String(sec%60).padStart(2,"0"),e=G("cdt");if(e)e.innerHTML=h+":"+m+":"+s;if(sec<=0)clearInterval(window.pqcd)},1000)}
function productUrl(slug){return"/products/"+String(slug||"").trim()}
function pretty(s){return String(s||"").replace(/-/g," ")}
function cards(c){var o=C[c],box=G("plist");if(!box)return;if(!o.p.length){box.innerHTML='<a class="pc" href="/collections/all"><div><div class="pimg"><div class="ph">Random Sale</div></div><span class="kick">قسيمة عشوائية</span><h4>خصم عشوائي على أي منتج قيمته أعلى من 500 ج</h4><div class="price"><span class="cur">افتح المتجر واختار المنتج المناسب</span></div><p>القسيمة صالحة حسب شروط العرض.</p></div><span class="buy">افتح المتجر</span></a>';return}box.innerHTML=o.p.map(function(s){return'<div class="pc" data-p-slug="'+esc(s)+'"><div><div class="pimg" data-img><div class="ph">جاري تحميل الصورة</div></div><span class="kick">منتج متاح عليه الخصم</span><h4 data-title>'+esc(pretty(s))+'</h4><div class="price" data-price><span class="load">جاري تحميل السعر...</span></div><p>هذا المنتج ضمن المنتجات المتاح استخدام القسيمة عليها.</p></div><a class="buy" href="'+productUrl(s)+'">افتح المنتج</a></div>'}).join("");o.p.forEach(function(s){loadProductData({slug:s,title:pretty(s)}).then(function(data){updateCard(s,data)})})}
async function loadProductData(product){var slug=String(product.slug||"").trim();if(productCache[slug])return productCache[slug];var fallback={title:product.title||slug,image:"",price:""};try{var response=await fetch(productUrl(slug),{method:"GET",credentials:"same-origin"});if(!response.ok){productCache[slug]=fallback;return fallback}var html=await response.text();var doc=new DOMParser().parseFromString(html,"text/html");var data=extractProductData(doc,fallback);productCache[slug]=data;return data}catch(e){productCache[slug]=fallback;return fallback}}
function extractProductData(doc,fallbackData){var title=getMetaContent(doc,'meta[property="og:title"]')||getMetaContent(doc,'meta[name="twitter:title"]')||getText(doc,"h1")||fallbackData.title;var image=getMetaContent(doc,'meta[property="og:image"]')||getMetaContent(doc,'meta[name="twitter:image"]')||getImageFromPage(doc);var price=getFinalPriceFromPage(doc);return{title:cleanTitle(title),image:image||"",price:price||""}}
function getFinalPriceFromPage(doc){var metaPrice=getMetaContent(doc,'meta[property="product:price:amount"]')||getMetaContent(doc,'meta[property="og:price:amount"]')||getMetaContent(doc,'meta[itemprop="price"]');if(metaPrice)return formatPrice(metaPrice);var jsonPrice=getPriceFromJsonLd(doc);if(jsonPrice)return formatPrice(jsonPrice);var preferred=["[class*='sale'][class*='price']","[class*='current'][class*='price']","[class*='final'][class*='price']","[class*='discount'][class*='price']","[data-price]",".sale-price",".current-price",".product-price"];for(var i=0;i<preferred.length;i++){var elements=doc.querySelectorAll(preferred[i]);for(var j=0;j<elements.length;j++){var value=extractFirstPrice(elements[j].textContent);if(value)return formatPrice(value)}}var bodyText=doc.body?doc.body.innerText:"";var allPrices=bodyText.match(/(?:EGP|ج\.م|جنيه|LE|L\.E|E£)?\s*[0-9][0-9,.\s]{1,12}\s*(?:EGP|ج\.م|جنيه|LE|L\.E|E£)?/gi)||[];for(var k=0;k<allPrices.length;k++){var cleaned=cleanPriceCandidate(allPrices[k]);if(cleaned&&!/%/.test(cleaned)&&!/save/i.test(cleaned))return formatPrice(cleaned)}return""}
function getPriceFromJsonLd(doc){var scripts=doc.querySelectorAll('script[type="application/ld+json"]');for(var i=0;i<scripts.length;i++){try{var data=JSON.parse(scripts[i].textContent);var found=findJsonLdPrice(data);if(found)return found}catch(e){}}return""}
function findJsonLdPrice(data){if(!data)return"";if(Array.isArray(data)){for(var i=0;i<data.length;i++){var found=findJsonLdPrice(data[i]);if(found)return found}}if(typeof data==="object"){if(data.offers){var offerPrice=findJsonLdPrice(data.offers);if(offerPrice)return offerPrice}if(data.price)return data.price;if(data.lowPrice)return data.lowPrice;if(data.highPrice)return data.highPrice}return""}
function extractFirstPrice(text){var normalized=normalizeSpace(text);if(!normalized)return"";var withoutSave=normalized.replace(/save\s*-?\s*[0-9]+%/gi,"").replace(/-[0-9]+%/g,"").replace(/خصم|وفر|توفير/gi,"");var matches=withoutSave.match(/(?:EGP|ج\.م|جنيه|LE|L\.E|E£)?\s*[0-9][0-9,.\s]{1,12}\s*(?:EGP|ج\.م|جنيه|LE|L\.E|E£)?/gi);if(!matches||!matches.length)return"";return cleanPriceCandidate(matches[0])}
function cleanPriceCandidate(value){var text=normalizeSpace(value);text=text.replace(/save/gi,"").replace(/-[0-9]+%/g,"").replace(/[^\d.,\sA-Za-z£جنيهج.م]/g,"");text=normalizeSpace(text);var numberMatch=text.match(/[0-9][0-9,.\s]*/);if(!numberMatch)return"";var number=normalizeSpace(numberMatch[0]).replace(/\s/g,"");return number||""}
function formatPrice(value){var number=cleanPriceCandidate(value);if(!number)return"";return number+" EGP"}
function updateCard(slug,data){var card=document.querySelector('[data-p-slug="'+cssEsc(slug)+'"]');if(!card)return;var imageBox=card.querySelector("[data-img]"),title=card.querySelector("[data-title]"),price=card.querySelector("[data-price]");if(title&&data.title)title.textContent=data.title;if(imageBox){if(data.image){imageBox.innerHTML='<img src="'+esc(data.image)+'" alt="'+esc(data.title||"")+'" loading="lazy">'}else{imageBox.innerHTML='<div class="ph">لا توجد صورة</div>'}}if(price){if(data.price){price.innerHTML='<span class="cur">السعر: '+esc(data.price)+'</span>'}else{price.innerHTML='<span class="load">السعر يظهر داخل صفحة المنتج</span>'}}}
function getMetaContent(doc,selector){var el=doc.querySelector(selector);return el?el.getAttribute("content")||"":""}
function getText(doc,selector){var el=doc.querySelector(selector);return el?el.textContent.trim():""}
function getImageFromPage(doc){var selectors=[".product img",".product-page img",".product__media img",".product-gallery img",".swiper-slide img","img[src*='digitaloceanspaces']","img"];for(var i=0;i<selectors.length;i++){var img=doc.querySelector(selectors[i]);if(img){var src=img.getAttribute("src")||img.getAttribute("data-src")||img.getAttribute("data-lazy-src")||"";if(src)return abs(src)}}return""}
function abs(url){if(!url)return"";if(url.indexOf("//")===0)return location.protocol+url;if(url.indexOf("http://")===0||url.indexOf("https://")===0)return url;if(url.indexOf("/")===0)return location.origin+url;return location.origin+"/"+url}
function cleanTitle(title){return normalizeSpace(String(title||"").replace(/\s*\|\s*.*$/g,""))}
function normalizeSpace(value){return String(value||"").replace(/\s+/g," ").trim()}
function cssEsc(value){if(window.CSS&&typeof window.CSS.escape==="function")return window.CSS.escape(String(value));return String(value).replace(/"/g,'\\"')}
function esc(value){return String(value||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}
function mount(){if(!/\\/products\\//.test(location.pathname))return;var root=G("pqx")||document.createElement("div");root.id="pqx";var tries=0;var place=function(){tries++;var t=document.querySelector('[class*="product-description"],[id*="product-description"],[class*="description"],[id*="description"]');if(t&&t.parentNode){if(!root.parentNode)t.parentNode.insertBefore(root,t);inlineCard();return true}if(tries>20){if(!root.parentNode)(document.querySelector("main")||document.body).appendChild(root);inlineCard();return true}return false};if(!place()){var iv=setInterval(function(){if(place())clearInterval(iv)},250)}setTimeout(function(){if(!auto&&!G("pqo")){auto=1;intro()}},DELAY)}
R(mount);
})();
