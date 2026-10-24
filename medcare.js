(()=>{"use strict";
// Optional: provide a public URL to your original MedCare logo to display it.
// Keep the original product routes and WhatsApp number from your existing script.
const C={
  style:"MedCareFinderStyle",
  btn:"MedCareFinderFloatingBtn",
  overlay:"MedCareFinderOverlay",
  box:"MedCareSupplementFinder",
  wa:"https://wa.me/201024348002",
  logo:"https://files.easy-orders.net/1789695346542392649.png"
};

const P={
mass_3000:[["Badass-Mass","Badass Mass"],["Nutriversum-Massgainer","Nutriversum Massgainer"]],
mass_1000:[["creatine-citrulline-carb-offer","Creatine Citrulline Carb Offer"],["Griffin-Mass-Gainer-6Kg","Griffin Mass Gainer 6Kg"],["anabolic-carb-creatine-offer","Anabolic Carb Creatine Offer"],["Xtreme-Mass-Gainer","Xtreme Mass Gainer"],["unlimited-mass-gainer-anabolic-creatine","Unlimited Mass Gainer + Anabolic Creatine"]],
mass_under_1000:[["Unlimited-Mass","Unlimited Mass"],["Carb","Carb"],["Griffin-Mass-Gainer-3Kg","Griffin Mass Gainer 3Kg"]],
muscle_creatine:[["Anabolic-Creatine-200Serv","Anabolic Creatine 200 Serv"],["Dy-Creatine","DY Creatine"],["CreaForce-Creatine-Creapure","CreaForce Creatine Creapure"],["CreaPower","CreaPower"],["BADASS-Creatine","BADASS Creatine"]],
muscle_creatine_citrulline:[["citrulline-malate-anabolic-creatine-pump","Citrulline Malate + Anabolic Creatine Pump"],["CreaForce-Creapure-Creatine-Citrulline","CreaForce Creapure Creatine Citrulline"],["creapower-creapure-citrulline-malate","CreaPower Creapure Citrulline Malate"],["creatine-citrulline-carb-offer","Creatine Citrulline Carb Offer"],["anabolic-carb-creatine-offer","Anabolic Carb Creatine Offer"]],
muscle_whey_creatine:[["whey-concentrate-anabolic-creatine","Whey Concentrate + Anabolic Creatine"],["evolve-whey-protein-creatine-offers","Evolve Whey Protein + Creatine Offers"],["Gold-Whey-Isolate-Creatine-Offer","Gold Whey Isolate + Creatine Offer"]],
fat_strong:[["Black-Spider-Fat-Burner","Black Spider Fat Burner"],["Lipo6","Lipo 6"],["Retatrutide","Retatrutide","يأخذ بعد استشارة طبيب"]],
fat_light:[["Gold-Whey-Isolate-Creatine-Offer","Gold Whey Isolate + Creatine Offer"],["Xtreme-Whey-Blend","Xtreme Whey Blend"],["evolve-whey-protein-creatine-offers","Evolve Whey Protein + Creatine Offers"],["Gold-Isolate","Gold Isolate"]],
pump_energy:[["Anabolic-Crazy-Pump-Preworkout","Anabolic Crazy Pump Preworkout"],["Pureganic-Preworkout","Pureganic Preworkout"],["Strongmuscles-Citrulline","Strongmuscles Citrulline"],["Citrulline-Malate","Citrulline Malate"]]
};

const S={
goal:{p:50,step:"السؤال 1 من 2",t:"ما هو هدفك؟",sub:"اختار الهدف الأقرب ليك، وبعدها هنرشحلك المنتجات المناسبة حسب احتياجك.",o:[["وزني خاسس ومحتاج جسمي يزيد","اختيارات للضخامة وزيادة الوزن","massBudget",0],["وزني مظبوط ومحتاج أزود الكتلة العضلية فقط","اختيارات لبناء عضل بدون زيادة وزن كبيرة","muscleBudget",0],["وزني زايد ومحتاج أخس","اختيارات للتخسيس ودعم التمرين","fatLoss",0],["محتاج أزود قوة التحمل والطاقة وضخ الدم للعضلات","اختيارات للطاقة والـ Pump قبل التمرين","pump_energy",1]]},
massBudget:{p:100,step:"السؤال 2 من 2",t:"المبلغ اللي محدده للضخامة وزيادة الوزن",sub:"حدد الميزانية المناسبة ليك علشان نرشحلك أفضل اختيارات للضخامة.",o:[["في حدود 3000 ج","اختيارات أعلى للضخامة وزيادة الوزن","mass_3000",1],["في حدود 1000 ج","اختيارات متوسطة وعملية","mass_1000",1],["تحت 1000 ج","اختيارات اقتصادية للضخامة","mass_under_1000",1]]},
muscleBudget:{p:100,step:"السؤال 2 من 2",t:"اختار الاختيار الأنسب لك",sub:"حدد مستوى الميزانية والمكملات اللي محتاجها لبناء كتلة عضلية.",o:[["ميزانيتي قليلة محتاج كرياتين فقط","اختيارات كرياتين أساسية ومباشرة","muscle_creatine",1],["ميزانيتي متوسطة محتاج كرياتين + سترولين","اختيارات للأداء والضخ العضلي","muscle_creatine_citrulline",1],["ميزانيتي عالية محتاج كرياتين + واي بروتين","اختيارات لبناء العضلات ودعم البروتين اليومي","muscle_whey_creatine",1]]},
fatLoss:{p:100,step:"السؤال 2 من 2",t:"اختر المناسب لك",sub:"حدد حالتك الأقرب علشان تظهرلك الترشيحات المناسبة للتخسيس.",o:[["وزني زايد جدا ومحتاج حارق دهون بشكل مباشر","اختيارات مخصصة للتخسيس القوي مع ضرورة الالتزام بالنظام الغذائي","fat_strong",1],["وزني زايد بنسبة بسيطة","واي بروتين أيزوليت + كرياتين + تمرين","fat_light",1]]}
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

let page="goal",hist=[],oldOverflow="",cache={},previousFocus=null;

const $=id=>document.getElementById(id);
const e=s=>String(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;");
const url=s=>"/products/"+String(s||"").trim();

function style(){
  if($(C.style))$(C.style).remove();

  const css=`@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap');

/* MedCare Deep Petrol — mobile-first, single column, no neon/glow */
#${C.btn},#${C.box}{
  --mc-bg:#152F35;
  --mc-surface:#214249;
  --mc-surface-2:#294B52;
  --mc-selected:#2A5155;
  --mc-primary:#5AC7BE;
  --mc-primary-dark:#0D3D40;
  --mc-ink:#F2F7F5;
  --mc-muted:#B5CDCA;
  --mc-border:#416269;
}
#${C.btn},#${C.box},#${C.box} *{
  box-sizing:border-box!important;
  font-family:'IBM Plex Sans Arabic',Tahoma,Arial,sans-serif!important;
}
#${C.btn}{
  position:fixed!important;
  right:18px!important;
  bottom:20px!important;
  top:auto!important;
  z-index:2147483000!important;
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  gap:9px!important;
  width:auto!important;
  height:50px!important;
  padding:0 16px!important;
  border-radius:14px!important;
  border:1px solid #3B7979!important;
  background:var(--mc-bg)!important;
  color:var(--mc-ink)!important;
  font-size:13px!important;
  font-weight:600!important;
  line-height:1.2!important;
  cursor:pointer!important;
  box-shadow:0 8px 22px rgba(3,20,24,.2)!important;
  direction:rtl!important;
  text-align:center!important;
  transform:none!important;
  animation:none!important;
  transition:background .18s ease, border-color .18s ease!important;
}
#${C.btn}:hover{background:var(--mc-surface)!important;border-color:var(--mc-primary)!important}
#${C.btn}:focus-visible{outline:3px solid var(--mc-primary)!important;outline-offset:3px!important}
#${C.btn} svg{width:19px!important;height:19px!important;color:var(--mc-primary)!important;flex:none!important}

#${C.overlay}{
  position:fixed!important;
  inset:0!important;
  z-index:2147483001!important;
  display:none!important;
  justify-content:center!important;
  align-items:center!important;
  padding:16px!important;
  background:rgba(5,20,23,.76)!important;
  backdrop-filter:blur(4px)!important;
  -webkit-backdrop-filter:blur(4px)!important;
  overflow-y:auto!important;
}
#${C.overlay}.active{display:flex!important}
#${C.box}{
  position:relative!important;
  width:100%!important;
  max-width:660px!important;
  max-height:min(90vh,900px)!important;
  max-height:min(90dvh,900px)!important;
  overflow-y:auto!important;
  overscroll-behavior:contain!important;
  padding:25px!important;
  background:var(--mc-bg)!important;
  color:var(--mc-ink)!important;
  border:1px solid var(--mc-border)!important;
  border-radius:20px!important;
  box-shadow:0 24px 65px rgba(0,0,0,.26)!important;
  direction:rtl!important;
  text-align:right!important;
  scrollbar-color:#52787D transparent!important;
}
#${C.overlay}.results #${C.box}{max-width:920px!important}
#${C.box} button,#${C.box} a{touch-action:manipulation!important}
#${C.box} button:focus-visible,#${C.box} a:focus-visible{outline:2px solid var(--mc-primary)!important;outline-offset:3px!important}
.lsf-head{
  display:flex!important;
  align-items:center!important;
  justify-content:space-between!important;
  gap:12px!important;
  margin:0 0 22px!important;
}
.lsf-brand{display:flex!important;align-items:center!important;gap:10px!important;min-width:0!important}
.lsf-brandmark{
  width:42px!important;height:42px!important;border-radius:12px!important;
  display:flex!important;align-items:center!important;justify-content:center!important;
  flex:none!important;background:#2A5155!important;
}
.lsf-brandmark svg{width:24px!important;height:24px!important;stroke:var(--mc-primary)!important}
.lsf-logo{height:40px!important;max-width:112px!important;object-fit:contain!important}
.lsf-brandname{display:block!important;color:var(--mc-ink)!important;font-size:18px!important;font-weight:700!important;line-height:1.25!important}
.lsf-brandtag{display:block!important;margin-top:2px!important;color:var(--mc-muted)!important;font-size:9px!important;letter-spacing:.7px!important;direction:ltr!important;text-align:right!important}
.lsf-close{
  width:38px!important;height:38px!important;display:grid!important;place-items:center!important;
  flex:none!important;border-radius:10px!important;border:1px solid var(--mc-border)!important;
  background:transparent!important;color:var(--mc-muted)!important;
  font-size:24px!important;font-weight:400!important;line-height:1!important;cursor:pointer!important;
}
.lsf-close:hover{background:var(--mc-surface)!important;color:var(--mc-ink)!important}
.lsf-intro{margin-bottom:23px!important}
.lsf-eyebrow{display:block!important;margin:0 0 8px!important;color:var(--mc-primary)!important;font-size:11px!important;font-weight:600!important;letter-spacing:.45px!important;direction:ltr!important;text-align:right!important}
.lsf-title{
  margin:0 0 7px!important;font-size:clamp(23px,4vw,31px)!important;
  font-weight:700!important;line-height:1.45!important;color:var(--mc-ink)!important;
}
.lsf-title span{color:var(--mc-primary)!important}
.lsf-sub{margin:0!important;color:var(--mc-muted)!important;font-size:13px!important;font-weight:400!important;line-height:1.9!important}
.lsf-progress{height:4px!important;width:100%!important;overflow:hidden!important;border-radius:99px!important;background:#38595E!important;margin:0 0 24px!important}
.lsf-fill{height:100%!important;width:50%;background:var(--mc-primary)!important;border-radius:99px!important;transition:width .25s ease!important}
.lsf-box{width:100%!important;margin:0!important;padding:0!important;background:none!important;border:0!important;box-shadow:none!important}
.lsf-step{display:block!important;margin:0 0 7px!important;color:var(--mc-primary)!important;font-size:12px!important;font-weight:600!important}
.lsf-q h3,.lsf-r h3{
  margin:0 0 6px!important;color:var(--mc-ink)!important;font-size:clamp(19px,3.6vw,25px)!important;font-weight:600!important;line-height:1.55!important;
}
.lsf-q p,.lsf-r p{margin:0 0 20px!important;color:var(--mc-muted)!important;font-size:13px!important;font-weight:400!important;line-height:1.85!important}
.lsf-options{display:grid!important;grid-template-columns:1fr!important;gap:10px!important;margin:0!important}
.lsf-option{
  position:relative!important;display:block!important;width:100%!important;min-height:78px!important;
  padding:14px 16px 14px 44px!important;text-align:right!important;direction:rtl!important;
  background:var(--mc-surface)!important;border:1px solid var(--mc-border)!important;
  border-radius:12px!important;color:var(--mc-ink)!important;cursor:pointer!important;
  transition:background .18s ease,border-color .18s ease!important;
}
.lsf-option::after{
  content:'‹'!important;position:absolute!important;left:17px!important;top:50%!important;
  transform:translateY(-50%)!important;color:var(--mc-primary)!important;font-family:Arial,sans-serif!important;
  font-size:25px!important;line-height:1!important;
}
.lsf-option:hover,.lsf-option:focus-visible{background:var(--mc-selected)!important;border-color:var(--mc-primary)!important}
.lsf-option strong{display:block!important;margin:0 0 3px!important;color:var(--mc-ink)!important;font-size:14px!important;font-weight:600!important;line-height:1.6!important}
.lsf-option small{display:block!important;color:var(--mc-muted)!important;font-size:11.5px!important;font-weight:400!important;line-height:1.55!important}
.lsf-actions{display:flex!important;flex-wrap:wrap!important;align-items:center!important;gap:10px!important;margin:22px 0 0!important}
.lsf-back,.lsf-consult,.lsf-restart{
  display:inline-flex!important;align-items:center!important;justify-content:center!important;
  min-height:43px!important;padding:9px 15px!important;border-radius:11px!important;
  font-size:12px!important;font-weight:600!important;line-height:1.4!important;
  text-decoration:none!important;cursor:pointer!important;transition:background .18s ease!important;
}
.lsf-back,.lsf-restart{background:transparent!important;border:1px solid var(--mc-border)!important;color:var(--mc-ink)!important}
.lsf-back:hover,.lsf-restart:hover{background:var(--mc-surface)!important}
.lsf-back:disabled{opacity:.4!important;cursor:not-allowed!important}
.lsf-consult{background:var(--mc-primary)!important;border:1px solid var(--mc-primary)!important;color:var(--mc-primary-dark)!important}
.lsf-consult:hover{background:#88DDD4!important}
.lsf-grid{display:grid!important;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:14px!important;margin:19px 0 0!important}
.lsf-card{
  display:flex!important;flex-direction:column!important;justify-content:space-between!important;
  min-width:0!important;min-height:0!important;padding:12px!important;
  background:var(--mc-surface)!important;border:1px solid var(--mc-border)!important;border-radius:14px!important;
  color:var(--mc-ink)!important;text-align:right!important;
}
.lsf-imgbox{
  height:225px!important;display:flex!important;align-items:center!important;justify-content:center!important;
  background:#F0F4F3!important;border-radius:10px!important;margin-bottom:12px!important;overflow:hidden!important;
}
.lsf-img{display:block!important;width:100%!important;height:100%!important;object-fit:contain!important;padding:9px!important}
.lsf-ph{color:#607578!important;text-align:center!important;font-size:12px!important;line-height:1.6!important}
.lsf-kicker{display:inline-block!important;color:var(--mc-primary)!important;font-size:10px!important;font-weight:600!important;margin:0 0 6px!important}
.lsf-card h4{margin:0 0 8px!important;font-size:13px!important;font-weight:600!important;line-height:1.5!important;color:var(--mc-ink)!important;direction:ltr!important;text-align:left!important;overflow-wrap:anywhere!important}
.lsf-price{margin:0 0 8px!important;color:var(--mc-primary)!important;font-size:17px!important;font-weight:700!important;direction:ltr!important;text-align:left!important;min-height:24px!important}
.lsf-loading{color:var(--mc-muted)!important;font-size:11px!important;font-weight:400!important}
.lsf-card p{margin:0 0 12px!important;color:var(--mc-muted)!important;font-size:11px!important;line-height:1.65!important}
.lsf-buy{
  display:flex!important;align-items:center!important;justify-content:center!important;
  margin-top:8px!important;min-height:43px!important;padding:9px!important;
  background:var(--mc-primary)!important;color:var(--mc-primary-dark)!important;
  border:1px solid var(--mc-primary)!important;border-radius:10px!important;
  text-decoration:none!important;font-size:12px!important;font-weight:700!important;
}
.lsf-buy:hover{background:#88DDD4!important}
.lsf-note{margin:8px 0 10px!important;padding:10px!important;background:#59482E!important;border:1px solid #8D754D!important;border-radius:8px!important;color:#F8E8CD!important;font-size:11px!important;line-height:1.65!important}
.lsf-coupon{
  display:flex!important;align-items:center!important;justify-content:space-between!important;
  flex-wrap:wrap!important;gap:10px!important;margin:10px 0 16px!important;
  padding:12px 14px!important;background:var(--mc-surface)!important;
  border:1px dashed var(--mc-border)!important;border-radius:11px!important;
}
.lsf-coupon-label{display:block!important;margin:0 0 3px!important;color:var(--mc-primary)!important;font-size:10px!important;font-weight:600!important}
.lsf-coupon p{margin:0!important;color:var(--mc-muted)!important;font-size:11px!important;line-height:1.6!important}
.lsf-coupon code{display:inline-block!important;padding:6px 10px!important;background:var(--mc-bg)!important;border-radius:7px!important;color:var(--mc-ink)!important;font-family:Arial,sans-serif!important;font-size:12px!important;font-weight:700!important}

@media(max-width:600px){
  #${C.overlay}{padding:8px!important;align-items:center!important}
  #${C.box}{padding:18px 15px!important;border-radius:16px!important;max-height:94vh!important;max-height:94dvh!important}
  .lsf-head{margin-bottom:17px!important}
  .lsf-intro{margin-bottom:17px!important}
  .lsf-title{font-size:23px!important}
  .lsf-grid{grid-template-columns:1fr!important;gap:12px!important}
  .lsf-imgbox{height:225px!important}
  .lsf-actions{display:grid!important;grid-template-columns:1fr 1fr!important}
  .lsf-actions .lsf-consult{grid-column:1/-1!important;grid-row:1!important}
  .lsf-option{min-height:75px!important;padding:13px 13px 13px 38px!important}
  #${C.btn}{right:12px!important;bottom:14px!important;height:46px!important;padding:0 13px!important;font-size:12px!important}
}
@media(prefers-reduced-motion:reduce){
  #${C.box} *,#${C.btn}{transition:none!important;animation:none!important}
}`;
  const s=document.createElement("style");
  s.id=C.style;
  s.textContent=css;
  document.head.appendChild(s);
}

function boot(){
  [C.overlay,C.btn,C.style].forEach(id=>{
    const existing=$(id);
    if(existing)existing.remove();
  });
  style();

  // The widget is NEVER opened automatically. A visitor must click this button.
  const b=document.createElement("button");
  b.id=C.btn;
  b.type="button";
  b.setAttribute("aria-label","اعرف مكملك المناسب");
  b.setAttribute("aria-haspopup","dialog");
  b.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12h4l2.5-5 4 10 2.5-5H21"/></svg><span>اعرف مكملك</span>`;
  b.addEventListener("click",open);
  document.body.appendChild(b);

  const brandLogo=C.logo
    ? `<img class="lsf-logo" src="${e(C.logo)}" alt="MedCare">`
    : `<span class="lsf-brandmark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.6c0 4.2-6.2 9.2-8.8 11.2-2.6-2-8.8-7-8.8-11.2a5 5 0 0 1 8.8-3.1 5 5 0 0 1 8.8 3.1Z"/><path d="M5 12h4l2-3 2.5 6 2-3H19"/></svg></span>`;

  const o=document.createElement("div");
  o.id=C.overlay;
  o.innerHTML=`<section id="${C.box}" role="dialog" aria-modal="true" aria-label="MedCare - اعرف مكملك" tabindex="-1">
    <header class="lsf-head">
      <div class="lsf-brand">
        ${brandLogo}
        <div><span class="lsf-brandname">MedCare</span><span class="lsf-brandtag">SUPPLEMENT FINDER</span></div>
      </div>
      <button type="button" class="lsf-close" aria-label="إغلاق">×</button>
    </header>
    <div class="lsf-intro">
      <span class="lsf-eyebrow">FIND YOUR FIT</span>
      <h2 class="lsf-title">اختار المكمل <span>المناسب لهدفك</span></h2>
      <p class="lsf-sub">جاوب على سؤالين سريعين وهتظهرلك اختيارات حسب هدفك وميزانيتك.</p>
    </div>
    <div class="lsf-progress" role="progressbar" aria-label="تقدم الاختيار" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50"><div class="lsf-fill" id="lsfFill"></div></div>
    <div class="lsf-box"><div id="lsfContent" aria-live="polite"></div></div>
  </section>`;
  document.body.appendChild(o);

  o.addEventListener("click",ev=>{
    if(ev.target===o||ev.target.closest(".lsf-close"))close();
  });
  $("lsfContent").addEventListener("click",click);
  document.addEventListener("keydown",ev=>{
    if(ev.key==="Escape"&&o.classList.contains("active"))close();
  });
  render("goal");
  // No timers, setTimeout, autoOpen, or session-triggered popup.
}

function open(){
  const o=$(C.overlay);
  if(!o||o.classList.contains("active"))return;
  previousFocus=document.activeElement;
  oldOverflow=document.body.style.overflow||"";
  o.classList.add("active");
  document.body.style.overflow="hidden";
  const x=o.querySelector(".lsf-close");
  if(x)x.focus();
}

function close(){
  const o=$(C.overlay);
  if(!o||!o.classList.contains("active"))return;
  o.classList.remove("active");
  document.body.style.overflow=oldOverflow;
  if(previousFocus&&typeof previousFocus.focus==="function")previousFocus.focus();
}

function click(ev){
  let op=ev.target.closest(".lsf-option");
  let back=ev.target.closest("[data-back]");
  let restart=ev.target.closest("[data-restart]");

  if(op){
    let next=op.dataset.next;
    let res=op.dataset.result;

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
    let p=hist.pop();
    page=p;
    p.indexOf("result:")===0?result(p.replace("result:","")):render(p);
  }else if(restart){
    hist=[];
    page="goal";
    render("goal");
  }
}

function fill(n){
  let f=$("lsfFill");
  if(f)f.style.width=n+"%";
  const bar=$(C.overlay)?.querySelector(".lsf-progress");
  if(bar)bar.setAttribute("aria-valuenow",String(n));
}

function render(name){
  let s=S[name];
  let c=$("lsfContent");
  if(!s||!c)return;

  $(C.overlay)?.classList.remove("results");
  fill(s.p);

  c.innerHTML=`<div class="lsf-q">
    <span class="lsf-step">${e(s.step)}</span>
    <h3>${e(s.t)}</h3>
    <p>${e(s.sub)}</p>
    <div class="lsf-options">
      ${s.o.map(x=>`<button type="button" class="lsf-option" ${x[3]?`data-result="${e(x[2])}"`:`data-next="${e(x[2])}"`}>
        <strong>${e(x[0])}</strong>
        <small>${e(x[1])}</small>
      </button>`).join("")}
    </div>
    <div class="lsf-actions">
      <button type="button" class="lsf-back" data-back ${hist.length?"":"disabled"}>رجوع</button>
      <a class="lsf-consult" href="${C.wa}" target="_blank" rel="noopener">استشارة مع د/مازن</a>
    </div>
  </div>`;
}

function result(k){
  let r=R[k];
  let c=$("lsfContent");
  let items=P[k]||[];

  if(!r||!c)return;

  $(C.overlay)?.classList.add("results");
  fill(100);

  c.innerHTML=`<div class="lsf-r">
    <span class="lsf-step">النتيجة</span>
    <h3>${e(r[0])}</h3>
    <p>${e(r[1])}</p>
    <div class="lsf-coupon"><div><span class="lsf-coupon-label">خصم لأول طلب</span><p>استخدم الكود عند إتمام الطلب، إذا كان العرض ساريًا.</p></div><code>Limitless50</code></div>
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
  let slug=String(x[0]||"").trim();
  let fb={title:x[1],image:"",price:""};
  let d=cache[slug];

  if(!d){
    try{
      let r=await fetch(url(slug),{credentials:"same-origin",cache:"no-store"});
      if(r.ok){
        let doc=new DOMParser().parseFromString(await r.text(),"text/html");
        d=parse(doc,fb);
      }else{
        d=fb;
      }
    }catch(_){
      d=fb;
    }

    cache[slug]=d;
  }

  let card=findCard(slug);
  if(!card)return;

  let im=card.querySelector("[data-img]");
  let t=card.querySelector("[data-title]");
  let p=card.querySelector("[data-price]");

  if(t&&d.title)t.textContent=d.title;

  if(im){
    im.innerHTML=d.image?`<img class="lsf-img" src="${e(d.image)}" alt="${e(d.title||"")}" loading="lazy">`:`<div class="lsf-ph">لا توجد صورة</div>`;
  }

  if(p){
    p.innerHTML=d.price?e(d.price):`<span class="lsf-loading">السعر يظهر داخل صفحة المنتج</span>`;
  }
}

function findCard(slug){
  let cards=document.querySelectorAll(".lsf-card[data-slug]");
  for(let i=0;i<cards.length;i++){
    if(cards[i].getAttribute("data-slug")===slug)return cards[i];
  }
  return null;
}

function m(doc,s){
  let x=doc.querySelector(s);
  return x?x.getAttribute("content")||"":"";
}

function parse(doc,fb){
  let title=(m(doc,'meta[property="og:title"]')||m(doc,'meta[name="twitter:title"]')||(doc.querySelector("h1")||{}).textContent||fb.title).replace(/\s*\|\s*.*$/,"").trim();

  return {
    title,
    image:m(doc,'meta[property="og:image"]')||m(doc,'meta[name="twitter:image"]')||img(doc),
    price:price(doc)
  };
}

function img(doc){
  let im=doc.querySelector('.product img,.product-page img,.product__media img,.product-gallery img,.swiper-slide img,img[src*="digitaloceanspaces"],img');

  if(!im)return "";

  let s=im.getAttribute("src")||im.getAttribute("data-src")||im.getAttribute("data-lazy-src")||"";

  if(!s)return "";
  if(s.indexOf("//")===0)return location.protocol+s;
  if(/^https?:\/\//.test(s))return s;
  if(s[0]==="/")return location.origin+s;

  return location.origin+"/"+s;
}

function price(doc){
  let v=
    m(doc,'meta[property="product:price:amount"]')||
    m(doc,'meta[property="og:price:amount"]')||
    m(doc,'meta[itemprop="price"]')||
    attr(doc,'[itemprop="price"][content]',"content")||
    attr(doc,'[data-product-price]',"data-product-price")||
    attr(doc,'[data-price]',"data-price")||
    jsonPrice(doc)||
    selectorPrice(doc);

  return formatPrice(v);
}

function attr(doc,selector,name){
  let x=doc.querySelector(selector);
  return x?x.getAttribute(name)||"":"";
}

function selectorPrice(doc){
  let selectors=[
    ".product .price",
    ".product-price",
    ".product__price",
    ".price-item--sale",
    ".price__current",
    ".current-price",
    ".sale-price",
    ".amount",
    ".money"
  ];

  for(let i=0;i<selectors.length;i++){
    let x=doc.querySelector(selectors[i]);
    let v=x?(x.getAttribute("content")||x.getAttribute("data-price")||x.textContent||""):"";
    if(formatPrice(v))return v;
  }

  return "";
}

function jsonPrice(doc){
  let scripts=doc.querySelectorAll('script[type="application/ld+json"]');

  for(let i=0;i<scripts.length;i++){
    try{
      let data=JSON.parse(scripts[i].textContent||"");
      let found=findJsonPrice(data);
      if(found)return found;
    }catch(_){}
  }

  return "";
}

function findJsonPrice(data){
  if(!data)return "";

  if(Array.isArray(data)){
    for(let i=0;i<data.length;i++){
      let v=findJsonPrice(data[i]);
      if(v)return v;
    }
    return "";
  }

  if(typeof data==="object"){
    if(data.price)return data.price;
    if(data.lowPrice)return data.lowPrice;
    if(data.highPrice)return data.highPrice;

    if(data.offers){
      let v=findJsonPrice(data.offers);
      if(v)return v;
    }

    if(data["@graph"]){
      let v=findJsonPrice(data["@graph"]);
      if(v)return v;
    }
  }

  return "";
}

function formatPrice(v){
  let txt=String(v||"").replace(/\u00a0/g," ").trim();
  if(!txt)return "";

  let a=txt.match(/[0-9][0-9,\s]*(?:\.[0-9]{1,2})?/);
  if(!a)return "";

  let n=a[0].replace(/\s/g,"").replace(/\.00$/,"");
  return n?n+" EGP":"";
}

(document.readyState==="loading"?document.addEventListener("DOMContentLoaded",boot):boot());
})();
