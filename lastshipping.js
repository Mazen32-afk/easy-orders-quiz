(()=>{
"use strict";

const C={
  style:"LimitlessSupplementFinderStyle",
  btn:"LimitlessFinderFloatingBtn",
  overlay:"LimitlessFinderOverlay",
  box:"LimitlessSupplementFinder",
  wa:"https://wa.me/201024348002",
  autoOpen:15000
};

const P={
  mass_3000:[
    ["Badass-Mass","Badass Mass"],
    ["Nutriversum-Massgainer","Nutriversum Massgainer"]
  ],
  mass_1000:[
    ["creatine-citrulline-carb-offer","Creatine Citrulline Carb Offer"],
    ["Griffin-Mass-Gainer-6Kg","Griffin Mass Gainer 6Kg"],
    ["anabolic-carb-creatine-offer","Anabolic Carb Creatine Offer"],
    ["Xtreme-Mass-Gainer","Xtreme Mass Gainer"],
    ["unlimited-mass-gainer-anabolic-creatine","Unlimited Mass Gainer + Anabolic Creatine"]
  ],
  mass_under_1000:[
    ["Unlimited-Mass","Unlimited Mass"],
    ["Carb","Carb"],
    ["Griffin-Mass-Gainer-3Kg","Griffin Mass Gainer 3Kg"]
  ],
  muscle_creatine:[
    ["Anabolic-Creatine-200Serv","Anabolic Creatine 200 Serv"],
    ["Dy-Creatine","DY Creatine"],
    ["CreaForce-Creatine-Creapure","CreaForce Creatine Creapure"],
    ["CreaPower","CreaPower"],
    ["BADASS-Creatine","BADASS Creatine"]
  ],
  muscle_creatine_citrulline:[
    ["citrulline-malate-anabolic-creatine-pump","Citrulline Malate + Anabolic Creatine Pump"],
    ["CreaForce-Creapure-Creatine-Citrulline","CreaForce Creapure Creatine Citrulline"],
    ["creapower-creapure-citrulline-malate","CreaPower Creapure Citrulline Malate"],
    ["creatine-citrulline-carb-offer","Creatine Citrulline Carb Offer"],
    ["anabolic-carb-creatine-offer","Anabolic Carb Creatine Offer"]
  ],
  muscle_whey_creatine:[
    ["whey-concentrate-anabolic-creatine","Whey Concentrate + Anabolic Creatine"],
    ["evolve-whey-protein-creatine-offers","Evolve Whey Protein + Creatine Offers"],
    ["Gold-Whey-Isolate-Creatine-Offer","Gold Whey Isolate + Creatine Offer"]
  ],
  fat_strong:[
    ["Black-Spider-Fat-Burner","Black Spider Fat Burner"],
    ["Lipo6","Lipo 6"],
    ["Retatrutide","Retatrutide","يأخذ بعد استشارة طبيب"]
  ],
  fat_light:[
    ["Gold-Whey-Isolate-Creatine-Offer","Gold Whey Isolate + Creatine Offer"],
    ["Xtreme-Whey-Blend","Xtreme Whey Blend"],
    ["evolve-whey-protein-creatine-offers","Evolve Whey Protein + Creatine Offers"],
    ["Gold-Isolate","Gold Isolate"]
  ],
  pump_energy:[
    ["Anabolic-Crazy-Pump-Preworkout","Anabolic Crazy Pump Preworkout"],
    ["Pureganic-Preworkout","Pureganic Preworkout"],
    ["Strongmuscles-Citrulline","Strongmuscles Citrulline"],
    ["Citrulline-Malate","Citrulline Malate"]
  ]
};

const S={
  goal:{
    p:45,
    step:"السؤال 1 من 2",
    t:"ما هو هدفك؟",
    sub:"اختار الهدف الأقرب ليك، وبعدها هنرشحلك المنتجات المناسبة حسب احتياجك.",
    o:[
      ["وزني خاسس ومحتاج جسمي يزيد","اختيارات للضخامة وزيادة الوزن","massBudget",0],
      ["وزني مظبوط ومحتاج أزود الكتلة العضلية فقط","اختيارات لبناء عضل بدون زيادة وزن كبيرة","muscleBudget",0],
      ["وزني زايد ومحتاج أخس","اختيارات للتخسيس ودعم التمرين","fatLoss",0],
      ["محتاج أزود قوة التحمل والطاقة وضخ الدم للعضلات","اختيارات للطاقة والـ Pump قبل التمرين","pump_energy",1]
    ]
  },
  massBudget:{
    p:72,
    step:"السؤال 2 من 2",
    t:"المبلغ اللي محدده للضخامة وزيادة الوزن",
    sub:"حدد الميزانية المناسبة ليك علشان نرشحلك أفضل اختيارات للضخامة.",
    o:[
      ["في حدود 3000 ج","اختيارات أعلى للضخامة وزيادة الوزن","mass_3000",1],
      ["في حدود 1000 ج","اختيارات متوسطة وعملية","mass_1000",1],
      ["تحت 1000 ج","اختيارات اقتصادية للضخامة","mass_under_1000",1]
    ]
  },
  muscleBudget:{
    p:72,
    step:"السؤال 2 من 2",
    t:"اختار الاختيار الأنسب لك",
    sub:"حدد مستوى الميزانية والمكملات اللي محتاجها لبناء كتلة عضلية.",
    o:[
      ["ميزانيتي قليلة محتاج كرياتين فقط","اختيارات كرياتين أساسية ومباشرة","muscle_creatine",1],
      ["ميزانيتي متوسطة محتاج كرياتين + سترولين","اختيارات للأداء والضخ العضلي","muscle_creatine_citrulline",1],
      ["ميزانيتي عالية محتاج كرياتين + واي بروتين","اختيارات لبناء العضلات ودعم البروتين اليومي","muscle_whey_creatine",1]
    ]
  },
  fatLoss:{
    p:72,
    step:"السؤال 2 من 2",
    t:"اختر المناسب لك",
    sub:"حدد حالتك الأقرب علشان تظهرلك الترشيحات المناسبة للتخسيس.",
    o:[
      ["وزني زايد جدا ومحتاج حارق دهون بشكل مباشر","اختيارات مخصصة للتخسيس القوي مع ضرورة الالتزام بالنظام الغذائي","fat_strong",1],
      ["وزني زايد بنسبة بسيطة","واي بروتين أيزوليت + كرياتين + تمرين","fat_light",1]
    ]
  }
};

const R={
  mass_3000:["أفضل ترشيحات للضخامة ضمن ميزانية 3000 ج","الاختيارات دي مناسبة لو هدفك زيادة الوزن والضخامة بميزانية أعلى."],
  mass_1000:["أفضل ترشيحات للضخامة ضمن ميزانية 1000 ج","الاختيارات دي مناسبة لو محتاج حلول عملية للضخامة بسعر متوسط."],
  mass_under_1000:["أفضل ترشيحات للضخامة تحت 1000 ج","الاختيارات دي مناسبة لو محتاج بداية اقتصادية لزيادة الوزن."],
  muscle_creatine:["أفضل ترشيحات كرياتين فقط","الاختيارات دي مناسبة لو ميزانيتك قليلة وهدفك دعم القوة والأداء وبناء الكتلة العضلية."],
  muscle_creatine_citrulline:["أفضل ترشيحات كرياتين + سترولين","الاختيارات دي مناسبة لو عايز تجمع بين القوة والضخ العضلي والأداء الأفضل في التمرين."],
  muscle_whey_creatine:["أفضل ترشيحات كرياتين + واي بروتين","الاختيارات دي مناسبة لو ميزانيتك أعلى وعايز تدعم بناء العضلات بالبروتين والكرياتين."],
  fat_strong:["أفضل ترشيحات للتخسيس القوي","الاختيارات دي موجهة للتخسيس الأقوى، ويفضل استشارة مختص خصوصًا مع أي حالة صحية أو أدوية."],
  fat_light:["أفضل ترشيحات للتخسيس البسيط مع التمرين","الاختيارات دي مناسبة لو وزنك زايد بنسبة بسيطة وعايز بروتين أنضف مع دعم الأداء في التمرين."],
  pump_energy:["أفضل ترشيحات للطاقة والتحمل وضخ الدم","الاختيارات دي مناسبة قبل التمرين لدعم الطاقة والتحمل والإحساس بالـ Pump."]
};

let page="goal",hist=[],oldOverflow="",closed=false,opened=false,cache={};

const $=id=>document.getElementById(id);

function e(v){
  return String(v||"")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}

function reEsc(v){
  return String(v||"").replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
}

function greenWords(v){
  const words=[
    "وزني خاسس",
    "جسمي يزيد",
    "الضخامة",
    "زيادة الوزن",
    "وزني مظبوط",
    "الكتلة العضلية",
    "كتلة عضلية",
    "وزني زايد جدا",
    "وزني زايد",
    "أخس",
    "التخسيس القوي",
    "التخسيس",
    "قوة التحمل",
    "الطاقة",
    "ضخ الدم",
    "العضلات",
    "Pump",
    "3000 ج",
    "1000 ج",
    "تحت 1000 ج",
    "ميزانيتي قليلة",
    "ميزانيتي متوسطة",
    "ميزانيتي عالية",
    "كرياتين + واي بروتين",
    "كرياتين + سترولين",
    "كرياتين فقط",
    "كرياتين",
    "سترولين",
    "واي بروتين",
    "حارق دهون",
    "حارق",
    "أيزوليت",
    "البروتين",
    "القوة",
    "الأداء",
    "التمرين",
    "قبل التمرين",
    "هدفك",
    "ميزانيتك"
  ];

  let safe=e(v);
  words.sort((a,b)=>b.length-a.length);

  const pattern=words.map(w=>reEsc(e(w))).join("|");
  if(!pattern)return safe;

  return safe.replace(new RegExp("("+pattern+")","g"),'<span class="gkw">$1</span>');
}

function url(s){
  return "/products/"+String(s||"").trim();
}

function injectStyle(){
  if($(C.style))$(C.style).remove();

  const css=`@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500;600;700;800&display=swap');

#${C.btn}{
position:fixed!important;
right:12px!important;
top:50%!important;
z-index:2147483000!important;
width:76px!important;
height:78px!important;
border-radius:20px 0 0 20px!important;
border:1px solid rgba(37,211,102,.62)!important;
border-right:0!important;
background:linear-gradient(135deg,#000,#111 56%,#052b14)!important;
color:#fff!important;
font-family:'Readex Pro',Arial,sans-serif!important;
font-size:10.5px!important;
font-weight:800!important;
cursor:pointer!important;
box-shadow:0 12px 30px rgba(0,0,0,.38)!important;
display:flex!important;
flex-direction:column!important;
align-items:center!important;
justify-content:center!important;
gap:2px!important;
direction:rtl!important;
line-height:1.18!important;
text-align:center!important;
transform:translateY(-50%)!important;
animation:lsfShake 4.5s ease-in-out infinite!important;
}

#${C.btn}:before{
content:''!important;
width:7px!important;
height:7px!important;
border-radius:50%!important;
background:#25d366!important;
display:block!important;
margin-bottom:2px!important;
}

#${C.btn}:hover{
animation-play-state:paused!important;
transform:translateY(calc(-50% - 2px))!important;
}

#${C.overlay}{
position:fixed!important;
inset:0!important;
z-index:2147483001!important;
background:rgba(0,0,0,.78)!important;
display:none!important;
align-items:center!important;
justify-content:center!important;
padding:18px!important;
box-sizing:border-box!important;
}

#${C.overlay}.active{
display:flex!important;
}

#${C.box}{
width:100%!important;
max-width:1080px!important;
max-height:92vh!important;
overflow-y:auto!important;
padding:28px 14px!important;
color:#fff!important;
font-family:'Readex Pro',Arial,sans-serif!important;
direction:rtl!important;
text-align:center!important;
position:relative!important;
border-radius:30px!important;
box-shadow:0 28px 95px rgba(0,0,0,.72)!important;
background:linear-gradient(135deg,#000,#101010 48%,#050505)!important;
}

#${C.box} *{
box-sizing:border-box!important;
font-family:'Readex Pro',Arial,sans-serif!important;
}

.lsf-close{
position:absolute!important;
top:14px!important;
left:14px!important;
width:40px!important;
height:40px!important;
border-radius:50%!important;
border:1px solid rgba(255,255,255,.18)!important;
background:rgba(255,255,255,.08)!important;
color:#fff!important;
font-size:25px!important;
cursor:pointer!important;
}

.lsf-box{
max-width:1010px!important;
margin:0 auto!important;
border:1px solid rgba(37,211,102,.22)!important;
border-radius:26px!important;
padding:32px 20px 26px!important;
background:rgba(12,12,12,.78)!important;
box-shadow:0 22px 70px rgba(0,0,0,.48)!important;
}

.lsf-title{
font-size:clamp(25px,4vw,44px)!important;
font-weight:800!important;
margin:0 0 8px!important;
line-height:1.25!important;
color:#fff!important;
}

.lsf-title span{
display:inline-block!important;
padding:2px 10px!important;
border-radius:999px!important;
background:#25d366!important;
color:#000!important;
}

.lsf-sub{
margin:0 auto 22px!important;
max-width:690px!important;
color:#d6d6d6!important;
font-size:14px!important;
line-height:1.9!important;
}

.lsf-coupon{
width:100%!important;
max-width:760px!important;
margin:0 auto 22px!important;
padding:1px!important;
border-radius:19px!important;
background:linear-gradient(135deg,rgba(37,211,102,.95),rgba(183,245,200,.48),rgba(37,211,102,.9))!important;
box-shadow:0 15px 35px rgba(0,0,0,.35)!important;
}

.lsf-coupon>div{
min-height:54px!important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
gap:10px!important;
flex-wrap:wrap!important;
padding:11px 14px!important;
border-radius:18px!important;
background:linear-gradient(135deg,#020202,#101010 54%,#052b14)!important;
}

.lsf-coupon small{
padding:5px 11px!important;
border-radius:999px!important;
border:1px solid rgba(37,211,102,.55)!important;
background:rgba(37,211,102,.12)!important;
color:#b7f5c8!important;
font-size:11px!important;
font-weight:900!important;
}

.lsf-coupon span{
color:#fff!important;
font-size:13px!important;
font-weight:900!important;
}

.lsf-coupon b{
direction:ltr!important;
padding:6px 14px!important;
border-radius:999px!important;
background:#25d366!important;
color:#000!important;
font-size:14px!important;
}

.lsf-progress{
width:100%!important;
max-width:590px!important;
height:8px!important;
border-radius:999px!important;
background:rgba(255,255,255,.11)!important;
margin:0 auto 24px!important;
overflow:hidden!important;
}

.lsf-fill{
height:100%!important;
width:45%;
background:linear-gradient(90deg,#b7f5c8,#25d366)!important;
border-radius:999px!important;
transition:.35s ease!important;
}

.lsf-step{
display:inline-block!important;
color:#25d366!important;
font-size:12px!important;
font-weight:700!important;
margin-bottom:12px!important;
}

.lsf-q h3,.lsf-r h3{
font-size:clamp(22px,3vw,32px)!important;
margin:0 0 12px!important;
color:#fff!important;
line-height:1.45!important;
font-weight:800!important;
}

.lsf-q p,.lsf-r p{
max-width:720px!important;
margin:0 auto 20px!important;
color:#ddd!important;
line-height:1.85!important;
font-size:14px!important;
}

.gkw{
color:#25D366!important;
font-weight:900!important;
text-shadow:0 0 12px rgba(37,211,102,.35)!important;
}

.lsf-options{
display:grid!important;
grid-template-columns:repeat(2,minmax(0,1fr))!important;
gap:14px!important;
max-width:840px!important;
margin:0 auto!important;
}

.lsf-option{
min-height:108px!important;
border:1px solid rgba(255,255,255,.13)!important;
background:linear-gradient(135deg,rgba(255,255,255,.105),rgba(37,211,102,.075))!important;
color:#fff!important;
border-radius:22px!important;
padding:18px 22px 18px 16px!important;
cursor:pointer!important;
text-align:right!important;
display:block!important;
width:100%!important;
position:relative!important;
overflow:hidden!important;
}

.lsf-option:before{
content:''!important;
position:absolute!important;
right:0!important;
top:18px!important;
width:4px!important;
height:calc(100% - 36px)!important;
background:#25d366!important;
border-radius:999px 0 0 999px!important;
}

.lsf-option:hover{
transform:translateY(-3px)!important;
border-color:rgba(37,211,102,.62)!important;
}

.lsf-option strong{
display:block!important;
font-size:16px!important;
margin-bottom:8px!important;
color:#fff!important;
line-height:1.65!important;
font-weight:900!important;
}

.lsf-option small{
display:block!important;
color:#d6d6d6!important;
line-height:1.7!important;
font-size:12px!important;
}

.lsf-actions{
display:flex!important;
align-items:center!important;
justify-content:center!important;
gap:10px!important;
flex-wrap:wrap!important;
margin-top:24px!important;
}

.lsf-back,.lsf-consult,.lsf-restart{
display:inline-flex!important;
align-items:center!important;
justify-content:center!important;
min-height:46px!important;
padding:0 22px!important;
border-radius:999px!important;
font-size:13px!important;
font-weight:800!important;
cursor:pointer!important;
text-decoration:none!important;
}

.lsf-back{
border:1px solid rgba(255,255,255,.18)!important;
background:rgba(255,255,255,.08)!important;
color:#fff!important;
}

.lsf-back:disabled{
opacity:.45!important;
cursor:not-allowed!important;
}

.lsf-consult{
border:1px solid rgba(37,211,102,.82)!important;
background:#25d366!important;
color:#000!important;
}

.lsf-restart{
border:1px solid rgba(255,255,255,.22)!important;
background:rgba(255,255,255,.1)!important;
color:#fff!important;
}

.lsf-grid{
display:grid!important;
grid-template-columns:repeat(3,minmax(0,1fr))!important;
gap:16px!important;
max-width:960px!important;
margin:24px auto 0!important;
}

.lsf-card{
background:#fff!important;
color:#000!important;
border-radius:22px!important;
padding:12px!important;
text-align:right!important;
box-shadow:0 18px 45px rgba(0,0,0,.35)!important;
min-height:420px!important;
display:flex!important;
flex-direction:column!important;
justify-content:space-between!important;
}

.lsf-imgbox{
height:270px!important;
border-radius:18px!important;
background:#f4f4f5!important;
overflow:hidden!important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
margin-bottom:13px!important;
}

.lsf-img{
width:100%!important;
height:100%!important;
object-fit:contain!important;
padding:4px!important;
}

.lsf-ph{
width:78px!important;
height:78px!important;
border-radius:18px!important;
background:#eee!important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
color:#777!important;
font-size:11px!important;
text-align:center!important;
line-height:1.5!important;
}

.lsf-kicker{
display:inline-flex!important;
width:fit-content!important;
padding:5px 10px!important;
border-radius:999px!important;
background:#b7f5c8!important;
color:#1a1a1a!important;
font-size:11px!important;
font-weight:700!important;
margin-bottom:9px!important;
}

.lsf-card h4{
margin:0 0 8px!important;
font-size:15px!important;
color:#000!important;
line-height:1.5!important;
font-weight:800!important;
direction:ltr!important;
text-align:left!important;
min-height:46px!important;
}

.lsf-price{
direction:ltr!important;
text-align:left!important;
margin:0 0 12px!important;
min-height:27px!important;
color:#128c3f!important;
font-size:18px!important;
font-weight:900!important;
}

.lsf-loading{
color:#777!important;
font-size:12px!important;
font-weight:600!important;
}

.lsf-card p{
margin:0 0 14px!important;
color:#555!important;
font-size:12px!important;
line-height:1.7!important;
}

.lsf-buy{
display:inline-flex!important;
align-items:center!important;
justify-content:center!important;
width:100%!important;
min-height:43px!important;
border-radius:999px!important;
border:1px solid rgba(37,211,102,.72)!important;
background:#000!important;
color:#b7f5c8!important;
text-decoration:none!important;
font-weight:800!important;
font-size:12px!important;
}

.lsf-note{
background:#000!important;
color:#b7f5c8!important;
border-radius:14px!important;
padding:10px!important;
font-size:12px!important;
line-height:1.7!important;
margin-top:10px!important;
}

@keyframes lsfShake{
0%,82%,100%{transform:translateY(-50%) translateX(0)}
85%{transform:translateY(-50%) translateX(-4px)}
88%{transform:translateY(-50%) translateX(4px)}
91%{transform:translateY(-50%) translateX(-3px)}
94%{transform:translateY(-50%) translateX(3px)}
97%{transform:translateY(-50%) translateX(-1px)}
}

@media(max-width:900px){
.lsf-grid{grid-template-columns:repeat(2,minmax(0,1fr))!important}
}

@media(max-width:760px){
#${C.btn}{right:8px!important;width:70px!important;height:74px!important;font-size:10px!important}
.lsf-box{padding:25px 12px 20px!important}
.lsf-options,.lsf-grid{grid-template-columns:1fr!important}
.lsf-actions{flex-direction:column!important}
.lsf-back,.lsf-consult,.lsf-restart{width:100%!important}
.lsf-imgbox{height:280px!important}
}`;

  const style=document.createElement("style");
  style.id=C.style;
  style.textContent=css;
  document.head.appendChild(style);
}

function boot(){
  [C.overlay,C.btn,C.style].forEach(id=>{
    const x=$(id);
    if(x)x.remove();
  });

  injectStyle();

  const b=document.createElement("button");
  b.id=C.btn;
  b.type="button";
  b.innerHTML="<span>اعرف</span><span>مكملك</span><span>المناسب</span>";
  b.onclick=ev=>{
    ev.preventDefault();
    open();
  };
  document.body.appendChild(b);

  const o=document.createElement("div");
  o.id=C.overlay;
  o.innerHTML=`<section id="${C.box}">
    <button type="button" class="lsf-close">×</button>
    <div class="lsf-box">
      <h2 class="lsf-title">اكتشف المكمل <span>الأنسب لهدفك</span></h2>
      <p class="lsf-sub">جاوب على سؤالين سريعين، وهيظهرلك ترشيح مناسب حسب هدفك وميزانيتك.</p>
      <div class="lsf-coupon">
        <div>
          <small>عرض لأول طلب فقط</small>
          <span>كوبون خصم لأول طلب للاستفادة بخصم أعلى</span>
          <b>Limitless50</b>
        </div>
      </div>
      <div class="lsf-progress">
        <div class="lsf-fill" id="lsfFill"></div>
      </div>
      <div id="lsfContent"></div>
    </div>
  </section>`;

  document.body.appendChild(o);

  o.addEventListener("click",ev=>{
    if(ev.target===o||ev.target.closest(".lsf-close"))close();
  });

  $("lsfContent").addEventListener("click",click);

  document.addEventListener("keydown",ev=>{
    if(ev.key==="Escape")close();
  });

  render("goal");

  if(C.autoOpen){
    setTimeout(()=>{
      if(!closed&&!opened)open();
    },C.autoOpen);
  }
}

function open(){
  const o=$(C.overlay);
  if(!o)return;
  opened=true;
  oldOverflow=document.body.style.overflow||"";
  o.classList.add("active");
  document.body.style.overflow="hidden";
}

function close(){
  const o=$(C.overlay);
  if(!o)return;
  closed=true;
  o.classList.remove("active");
  document.body.style.overflow=oldOverflow;
}

function click(ev){
  const op=ev.target.closest(".lsf-option");
  const back=ev.target.closest("[data-back]");
  const restart=ev.target.closest("[data-restart]");

  if(op){
    const next=op.dataset.next;
    const res=op.dataset.result;

    if(next){
      hist.push(page);
      page=next;
      render(next);
    }else if(res){
      hist.push(page);
      page="result:"+res;
      result(res);
    }
  }else if(back){
    if(!hist.length)return;
    const p=hist.pop();
    page=p;
    p.indexOf("result:")===0?result(p.replace("result:","")):render(p);
  }else if(restart){
    hist=[];
    page="goal";
    render("goal");
  }
}

function fill(n){
  const f=$("lsfFill");
  if(f)f.style.width=n+"%";
}

function render(name){
  const s=S[name];
  const c=$("lsfContent");
  if(!s||!c)return;

  fill(s.p);

  c.innerHTML=`<div class="lsf-q">
    <span class="lsf-step">${e(s.step)}</span>
    <h3>${greenWords(s.t)}</h3>
    <p>${greenWords(s.sub)}</p>
    <div class="lsf-options">
      ${s.o.map(x=>`<button type="button" class="lsf-option" ${x[3]?`data-result="${e(x[2])}"`:`data-next="${e(x[2])}"`}>
        <strong>${greenWords(x[0])}</strong>
        <small>${greenWords(x[1])}</small>
      </button>`).join("")}
    </div>
    <div class="lsf-actions">
      <button type="button" class="lsf-back" data-back ${hist.length?"":"disabled"}>رجوع</button>
      <a class="lsf-consult" href="${C.wa}" target="_blank" rel="noopener">استشارة مع د/مازن</a>
    </div>
  </div>`;
}

function result(k){
  const r=R[k];
  const c=$("lsfContent");
  const items=P[k]||[];

  if(!r||!c)return;

  fill(100);

  c.innerHTML=`<div class="lsf-r">
    <span class="lsf-step">النتيجة</span>
    <h3>${greenWords(r[0])}</h3>
    <p>${greenWords(r[1])}</p>
    <div class="lsf-grid">${items.map(card).join("")}</div>
    <div class="lsf-actions">
      <button type="button" class="lsf-back" data-back>رجوع</button>
      <button type="button" class="lsf-restart" data-restart>ابدأ من جديد</button>
      <a class="lsf-consult" href="${C.wa}" target="_blank" rel="noopener">استشارة مع د/مازن</a>
    </div>
  </div>`;

  items.forEach(x=>load(x));
}

function card(x){
  return `<div class="lsf-card" data-slug="${e(x[0])}">
    <div>
      <div class="lsf-imgbox" data-img>
        <div class="lsf-ph">جاري تحميل الصورة</div>
      </div>
      <span class="lsf-kicker">منتج مرشح</span>
      <h4 data-title>${e(x[1])}</h4>
      <div class="lsf-price" data-price>
        <span class="lsf-loading">جاري تحميل السعر...</span>
      </div>
      <p>مناسب بناءً على إجاباتك داخل الـ Supplement Finder.</p>
      ${x[2]?`<div class="lsf-note">${e(x[2])}</div>`:""}
    </div>
    <a class="lsf-buy" href="${url(x[0])}">افتح المنتج</a>
  </div>`;
}

async function load(x){
  const slug=x[0];
  const fb={title:x[1],image:"",price:""};
  let d=cache[slug];

  if(!d){
    try{
      const r=await fetch(url(slug),{credentials:"same-origin"});
      if(r.ok){
        const doc=new DOMParser().parseFromString(await r.text(),"text/html");
        d=parse(doc,fb);
      }else{
        d=fb;
      }
    }catch(_){
      d=fb;
    }

    cache[slug]=d;
  }

  const safeSlug=window.CSS&&CSS.escape?CSS.escape(slug):slug.replace(/"/g,'\\"');
  const card=document.querySelector(`[data-slug="${safeSlug}"]`);
  if(!card)return;

  const im=card.querySelector("[data-img]");
  const t=card.querySelector("[data-title]");
  const p=card.querySelector("[data-price]");

  if(t&&d.title)t.textContent=d.title;

  if(im){
    im.innerHTML=d.image?`<img class="lsf-img" src="${e(d.image)}" alt="${e(d.title||"")}" loading="lazy">`:`<div class="lsf-ph">لا توجد صورة</div>`;
  }

  if(p){
    p.innerHTML=d.price?`<span>${e(d.price)}</span>`:`<span class="lsf-loading">السعر يظهر داخل صفحة المنتج</span>`;
  }
}

function m(doc,s){
  const x=doc.querySelector(s);
  return x?x.getAttribute("content")||"":"";
}

function parse(doc,fb){
  const title=(
    m(doc,'meta[property="og:title"]')||
    m(doc,'meta[name="twitter:title"]')||
    (doc.querySelector("h1")||{}).textContent||
    fb.title
  ).replace(/\s*\|\s*.*$/,"").trim();

  return {
    title:title,
    image:m(doc,'meta[property="og:image"]')||m(doc,'meta[name="twitter:image"]')||img(doc),
    price:price(doc)
  };
}

function img(doc){
  const im=doc.querySelector('.product img,.product-page img,.product__media img,.product-gallery img,.swiper-slide img,img[src*="digitaloceanspaces"],img');

  if(!im)return "";

  const s=im.getAttribute("src")||im.getAttribute("data-src")||im.getAttribute("data-lazy-src")||"";

  if(!s)return "";
  if(s.indexOf("//")===0)return location.protocol+s;
  if(/^https?:\/\//.test(s))return s;
  if(s[0]==="/")return location.origin+s;

  return location.origin+"/"+s;
}

function price(doc){
  const candidates=[];

  function push(v){
    const n=cleanPrice(v);
    if(n)candidates.push(n);
  }

  push(m(doc,'meta[property="product:price:amount"]'));
  push(m(doc,'meta[property="og:price:amount"]'));
  push(m(doc,'meta[itemprop="price"]'));

  const selectors=[
    ".ab-pd-price",
    "[class*='ab-pd-price']",
    "[class*='pd-price']",
    ".sale-price",
    ".current-price",
    ".product-price",
    "[class*='sale'][class*='price']",
    "[class*='current'][class*='price']",
    "[class*='final'][class*='price']",
    "[class*='product'][class*='price']",
    "[data-price]",
    "[class*='price']"
  ];

  for(let s=0;s<selectors.length;s++){
    const els=doc.querySelectorAll(selectors[s]);

    for(let i=0;i<els.length;i++){
      const attr=els[i].getAttribute("data-price")||els[i].getAttribute("content")||"";
      const txt=(els[i].innerText||els[i].textContent||"").trim();

      if(attr)push(attr);

      if(/EGP|جنيه|ج\.م|LE|L\.E|E£|ج/i.test(txt)){
        const nums=txt.match(/[0-9][0-9,.\s]*/g)||[];
        nums.forEach(push);
      }
    }

    if(candidates.length)break;
  }

  const scripts=doc.querySelectorAll('script[type="application/ld+json"],script#__NEXT_DATA__');

  for(let i=0;i<scripts.length;i++){
    try{
      const data=JSON.parse(scripts[i].textContent);
      findJsonPrices(data,candidates);
    }catch(_){}
  }

  const valid=candidates
    .map(function(n){
      return String(n).replace(/,/g,"");
    })
    .filter(function(n){
      const x=Number(n);
      return /[1-9]/.test(n) && isFinite(x) && x>=10 && x<=200000;
    });

  if(!valid.length)return "";

  return valid[0]+" EGP";
}

function findJsonPrices(data,out){
  if(!data)return;

  if(Array.isArray(data)){
    for(let i=0;i<data.length;i++)findJsonPrices(data[i],out);
    return;
  }

  if(typeof data==="object"){
    Object.keys(data).forEach(function(k){
      const v=data[k];
      const key=String(k).toLowerCase();

      if(key.indexOf("price")!==-1 && (typeof v==="string" || typeof v==="number")){
        const n=cleanPrice(v);
        if(n)out.push(n);
      }

      if(key==="offers" || key==="variants" || key==="product" || typeof v==="object"){
        findJsonPrices(v,out);
      }
    });
  }
}

function cleanPrice(v){
  let t=String(v||"")
    .replace(/[^\d.,\s]/g,"")
    .replace(/\s+/g,"")
    .trim();

  if(!t)return "";
  if(!/[1-9]/.test(t))return "";

  const m=t.match(/[0-9][0-9,.]*/);
  if(!m)return "";

  let n=m[0];

  if(n.indexOf(",")>-1 && n.indexOf(".")>-1){
    n=n.replace(/,/g,"");
  }else if(n.indexOf(",")>-1){
    n=n.replace(/,/g,"");
  }

  const parsed=parseFloat(n);

  if(!isFinite(parsed) || parsed<10 || parsed>200000)return "";

  return String(Math.round(parsed));
}

(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",boot):boot());
})();
