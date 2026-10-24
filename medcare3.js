(()=>{"use strict";
// MedCare Off-White V5 — thicker Readex Pro, tighter mobile layout and cleaner results.
// To change the logo, update C.logo below.
// Original product slugs, WhatsApp number, questions, and recommendations are preserved.
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

  const css=`@import url('https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500;600;700&display=swap');

/* MedCare Off-White | single-column | mobile-first | manual opening only */
#${C.btn},#${C.box}{
  --mc-bg:#F6F7F4;
  --mc-paper:#FFFFFF;
  --mc-soft:#E4F4F1;
  --mc-primary:#009C98;
  --mc-primary-hover:#008A85;
  --mc-ink:#173D42;
  --mc-muted:#455F5E;
  --mc-border:#D7E3E0;
}
#${C.btn},#${C.box},#${C.box} *{
  box-sizing:border-box!important;
  font-family:'Readex Pro',Tahoma,Arial,sans-serif!important;
  font-synthesis:weight!important;
}
#${C.btn}{
  position:fixed!important;
  right:0!important;
  top:50%!important;
  bottom:auto!important;
  transform:translateY(-50%)!important;
  z-index:2147483000!important;
  width:79px!important;
  height:88px!important;
  padding:9px 5px!important;
  display:flex!important;
  flex-direction:column!important;
  align-items:center!important;
  justify-content:center!important;
  gap:2px!important;
  border-radius:17px 0 0 17px!important;
  border:1px solid #237B7B!important;
  border-right:0!important;
  background:#173D42!important;
  color:#FFFFFF!important;
  box-shadow:0 8px 22px rgba(10,40,40,.22)!important;
  cursor:pointer!important;
  font-size:12px!important;
  font-weight:700!important;
  line-height:1.3!important;
  text-align:center!important;
  direction:rtl!important;
  white-space:normal!important;
  animation:none!important;
  transition:background .18s ease,box-shadow .18s ease!important;
}
#${C.btn}::before{
  content:''!important;
  display:block!important;
  flex:none!important;
  width:6px!important;
  height:6px!important;
  margin-bottom:3px!important;
  border-radius:50%!important;
  background:#4ED4C6!important;
}
#${C.btn} span{display:block!important;color:#FFF!important;white-space:nowrap!important;line-height:1.3!important}
#${C.btn}:hover{background:#23545A!important;box-shadow:0 9px 24px rgba(10,40,40,.25)!important}
#${C.btn}:focus-visible{outline:3px solid #009C98!important;outline-offset:3px!important}
#${C.overlay}{
  position:fixed!important;
  inset:0!important;
  z-index:2147483001!important;
  display:none!important;
  align-items:center!important;
  justify-content:center!important;
  padding:15px!important;
  overflow-y:auto!important;
  background:rgba(16,35,39,.63)!important;
  backdrop-filter:blur(3px)!important;
  -webkit-backdrop-filter:blur(3px)!important;
}
#${C.overlay}.active{display:flex!important}
#${C.box}{
  position:relative!important;
  direction:rtl!important;
  text-align:right!important;
  width:100%!important;
  max-width:640px!important;
  max-height:92vh!important;
  max-height:92dvh!important;
  overflow-y:auto!important;
  overscroll-behavior:contain!important;
  padding:21px 25px 25px!important;
  border-radius:19px!important;
  border:1px solid #E0E8E5!important;
  background:var(--mc-bg)!important;
  color:var(--mc-ink)!important;
  box-shadow:0 24px 70px rgba(12,34,34,.25)!important;
  scrollbar-color:#B4C9C3 transparent!important;
}
#${C.overlay}.results #${C.box}{max-width:940px!important}
#${C.box} button,#${C.box} a{touch-action:manipulation!important}
#${C.box} button:focus-visible,#${C.box} a:focus-visible{outline:2px solid var(--mc-primary)!important;outline-offset:2px!important}
#${C.box} .lsf-head{
  position:relative!important;
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  width:100%!important;
  margin:0 0 9px!important;
  min-height:66px!important;
  padding:3px 44px 4px!important;
}
#${C.box} .lsf-brand{
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  width:100%!important;
  text-align:center!important;
}
#${C.box} .lsf-logo{
  display:block!important;
  width:auto!important;
  height:auto!important;
  max-width:174px!important;
  max-height:84px!important;
  object-fit:contain!important;
  margin:0 auto!important;
}
#${C.box} .lsf-brandmark{display:grid!important;place-items:center!important;width:76px!important;height:76px!important}
#${C.box} .lsf-brandmark svg{width:56px!important;height:56px!important;stroke:var(--mc-primary)!important}
#${C.box} .lsf-close{
  position:absolute!important;
  left:0!important;
  top:5px!important;
  width:35px!important;
  height:35px!important;
  padding:0!important;
  border:1px solid var(--mc-border)!important;
  border-radius:10px!important;
  background:var(--mc-paper)!important;
  color:var(--mc-muted)!important;
  cursor:pointer!important;
  font-size:23px!important;
  font-weight:400!important;
  line-height:1!important;
}
#${C.box} .lsf-close:hover{background:var(--mc-soft)!important;color:var(--mc-ink)!important}
#${C.box} .lsf-progress{
  height:5px!important;
  width:100%!important;
  margin:0 0 13px!important;
  overflow:hidden!important;
  border-radius:99px!important;
  background:#DBE7E3!important;
}
#${C.box} .lsf-fill{
  height:100%!important;
  width:50%;
  background:var(--mc-primary)!important;
  border-radius:99px!important;
  transition:width .25s ease!important;
}
#${C.box} .lsf-box{width:100%!important;padding:0!important;margin:0!important;background:none!important;border:0!important;box-shadow:none!important}
#${C.box} .lsf-step{
  display:block!important;
  margin:0 0 6px!important;
  font-size:13px!important;
  font-weight:700!important;
  color:var(--mc-primary)!important;
}
#${C.box} .lsf-q h3,#${C.box} .lsf-r h3{
  margin:0 0 8px!important;
  color:var(--mc-ink)!important;
  font-size:clamp(25px,4vw,28px)!important;
  font-weight:700!important;
  line-height:1.42!important;
  -webkit-text-stroke:.18px currentColor!important;
}
#${C.box} .lsf-q p,#${C.box} .lsf-r p{
  margin:0 0 13px!important;
  color:var(--mc-muted)!important;
  font-size:14.5px!important;
  font-weight:600!important;
  line-height:1.7!important;
}
#${C.box} .lsf-options{
  display:grid!important;
  grid-template-columns:1fr!important;
  gap:9px!important;
  margin:0!important;
}
#${C.box} .lsf-option{
  position:relative!important;
  display:block!important;
  width:100%!important;
  min-height:72px!important;
  padding:11px 16px 11px 42px!important;
  border:1px solid var(--mc-border)!important;
  border-radius:12px!important;
  background:var(--mc-paper)!important;
  color:var(--mc-ink)!important;
  cursor:pointer!important;
  text-align:right!important;
  direction:rtl!important;
  transition:background .17s ease,border-color .17s ease!important;
}
#${C.box} .lsf-option::after{
  content:'‹'!important;
  position:absolute!important;
  left:17px!important;
  top:50%!important;
  transform:translateY(-50%)!important;
  font-family:Arial,sans-serif!important;
  font-size:24px!important;
  font-weight:400!important;
  line-height:1!important;
  color:#7E9692!important;
}
#${C.box} .lsf-option:hover,#${C.box} .lsf-option:focus-visible{
  background:var(--mc-soft)!important;
  border-color:var(--mc-primary)!important;
}
#${C.box} .lsf-option:hover::after{color:var(--mc-primary)!important}
#${C.box} .lsf-option strong{
  display:block!important;
  margin:0 0 3px!important;
  color:var(--mc-ink)!important;
  font-size:16px!important;
  font-weight:700!important;
  line-height:1.52!important;
  -webkit-text-stroke:.14px currentColor!important;
}
#${C.box} .lsf-option small{
  display:block!important;
  color:var(--mc-muted)!important;
  font-size:13.5px!important;
  font-weight:600!important;
  line-height:1.58!important;
}
#${C.box} .lsf-actions{
  display:flex!important;
  align-items:center!important;
  flex-wrap:wrap!important;
  gap:9px!important;
  margin:14px 0 0!important;
}
#${C.box} .lsf-back,#${C.box} .lsf-consult,#${C.box} .lsf-restart{
  display:inline-flex!important;
  justify-content:center!important;
  align-items:center!important;
  min-height:44px!important;
  padding:9px 15px!important;
  border-radius:10px!important;
  font-size:13px!important;
  font-weight:700!important;
  line-height:1.5!important;
  text-decoration:none!important;
  cursor:pointer!important;
  transition:background .17s ease!important;
}
#${C.box} .lsf-back,#${C.box} .lsf-restart{
  background:var(--mc-paper)!important;
  border:1px solid var(--mc-border)!important;
  color:var(--mc-ink)!important;
}
#${C.box} .lsf-back:hover,#${C.box} .lsf-restart:hover{background:#ECF3F0!important}
#${C.box} .lsf-back:disabled{opacity:.45!important;cursor:not-allowed!important}
#${C.box} .lsf-consult{
  background:var(--mc-primary)!important;
  border:1px solid var(--mc-primary)!important;
  color:#FFFFFF!important;
}
#${C.box} .lsf-consult:hover{background:var(--mc-primary-hover)!important}
#${C.box} .lsf-grid{
  display:grid!important;
  grid-template-columns:repeat(2,minmax(0,1fr))!important;
  gap:13px!important;
  margin:18px 0 0!important;
}
#${C.box} .lsf-card{
  display:flex!important;
  flex-direction:column!important;
  justify-content:space-between!important;
  min-width:0!important;
  padding:12px!important;
  border-radius:13px!important;
  border:1px solid var(--mc-border)!important;
  background:var(--mc-paper)!important;
  color:var(--mc-ink)!important;
  text-align:right!important;
}
#${C.box} .lsf-imgbox{
  display:flex!important;
  justify-content:center!important;
  align-items:center!important;
  overflow:hidden!important;
  height:220px!important;
  margin-bottom:11px!important;
  border-radius:9px!important;
  background:#F3F5F4!important;
}
#${C.box} .lsf-img{
  display:block!important;
  width:100%!important;
  height:100%!important;
  padding:8px!important;
  object-fit:contain!important;
}
#${C.box} .lsf-ph{color:#879795!important;text-align:center!important;font-size:11px!important}
#${C.box} .lsf-kicker{display:block!important;margin:0 0 6px!important;color:var(--mc-primary)!important;font-size:12px!important;font-weight:700!important}
#${C.box} .lsf-card h4{margin:0 0 6px!important;color:var(--mc-ink)!important;font-size:15px!important;font-weight:700!important;line-height:1.55!important;direction:ltr!important;text-align:left!important;overflow-wrap:anywhere!important}
#${C.box} .lsf-price{min-height:24px!important;margin:0 0 9px!important;color:#007A77!important;font-size:19px!important;font-weight:700!important;direction:ltr!important;text-align:left!important}
#${C.box} .lsf-loading{color:var(--mc-muted)!important;font-size:12px!important;font-weight:600!important}
#${C.box} .lsf-card p{margin:0 0 12px!important;color:var(--mc-muted)!important;font-size:12px!important;font-weight:600!important;line-height:1.6!important}
#${C.box} .lsf-buy{
  display:flex!important;
  align-items:center!important;
  justify-content:center!important;
  min-height:43px!important;
  margin-top:8px!important;
  padding:9px!important;
  border:1px solid var(--mc-primary)!important;
  border-radius:9px!important;
  background:var(--mc-primary)!important;
  color:#FFFFFF!important;
  font-size:14px!important;
  font-weight:700!important;
  text-decoration:none!important;
}
#${C.box} .lsf-buy:hover{background:var(--mc-primary-hover)!important}
#${C.box} .lsf-note{
  margin:7px 0 11px!important;
  padding:10px!important;
  border-radius:8px!important;
  background:#FFF4E8!important;
  border:1px solid #E6CCAA!important;
  color:#745334!important;
  font-size:12px!important;
  font-weight:600!important;
  line-height:1.6!important;
}
#${C.box} .lsf-coupon{
  display:flex!important;
  align-items:center!important;
  justify-content:space-between!important;
  flex-wrap:wrap!important;
  gap:10px!important;
  margin:8px 0 15px!important;
  padding:12px!important;
  border:1px dashed #B6CFCA!important;
  border-radius:11px!important;
  background:#EDF7F4!important;
}
#${C.box} .lsf-coupon-label{display:block!important;margin:0 0 3px!important;color:#007E79!important;font-size:11px!important;font-weight:600!important}
#${C.box} .lsf-coupon p{margin:0!important;color:var(--mc-muted)!important;font-size:12px!important;font-weight:600!important;line-height:1.6!important}
#${C.box} .lsf-coupon code{padding:7px 10px!important;border-radius:7px!important;background:#FFFFFF!important;color:var(--mc-ink)!important;font:700 12px Arial,sans-serif!important}
@media(max-width:600px){
  #${C.overlay}{padding:8px!important;padding-bottom:max(8px,env(safe-area-inset-bottom))!important}
  #${C.box}{padding:13px 15px 16px!important;border-radius:16px!important;max-height:95vh!important;max-height:95dvh!important}
  #${C.box} .lsf-head{min-height:60px!important;margin-bottom:8px!important;padding:0 40px 2px!important}
  #${C.box} .lsf-logo{max-width:155px!important;max-height:78px!important}
  #${C.box} .lsf-progress{margin-bottom:12px!important}
  #${C.box} .lsf-step{margin-bottom:5px!important;font-size:13px!important;font-weight:700!important}
  #${C.box} .lsf-q h3,#${C.box} .lsf-r h3{font-size:25px!important;margin-bottom:5px!important}
  #${C.box} .lsf-q p,#${C.box} .lsf-r p{font-size:14px!important;font-weight:600!important;line-height:1.65!important;margin-bottom:12px!important}
  #${C.box} .lsf-options{gap:8px!important}
  #${C.box} .lsf-option{min-height:72px!important;padding:10px 13px 10px 34px!important}
  #${C.box} .lsf-option::after{left:12px!important}
  #${C.box} .lsf-option strong{font-size:16px!important;font-weight:700!important;line-height:1.5!important}
  #${C.box} .lsf-option small{font-size:13px!important;font-weight:600!important;line-height:1.55!important}
  #${C.box} .lsf-actions{display:grid!important;grid-template-columns:1fr 1fr!important;margin-top:12px!important}
  #${C.box} .lsf-actions .lsf-consult{grid-column:1/-1!important;grid-row:1!important}
  #${C.box} .lsf-grid{grid-template-columns:1fr!important;gap:11px!important}
  #${C.box} .lsf-card{padding:11px!important}
  #${C.box} .lsf-imgbox{height:225px!important}
  #${C.box} .lsf-price{font-size:19px!important}
  #${C.btn}{width:79px!important;height:88px!important;font-size:12px!important}
}
@media(max-width:360px){
  #${C.box}{padding:11px 11px 14px!important}
  #${C.box} .lsf-head{min-height:53px!important;margin-bottom:6px!important}
  #${C.box} .lsf-logo{max-width:139px!important;max-height:68px!important}
  #${C.box} .lsf-q h3,#${C.box} .lsf-r h3{font-size:23px!important}
  #${C.box} .lsf-option strong{font-size:15px!important}
  #${C.box} .lsf-option small{font-size:12.5px!important}
}
@media(prefers-reduced-motion:reduce){
  #${C.box} *,#${C.btn}{animation:none!important;transition:none!important}
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
  b.innerHTML="<span>اعرف</span><span>مكملك</span><span>المناسب</span>";
  b.addEventListener("click",open);
  document.body.appendChild(b);

  const brandLogo=C.logo
    ? `<img class="lsf-logo" src="${e(C.logo)}" alt="MedCare">`
    : `<span class="lsf-brandmark" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.6c0 4.2-6.2 9.2-8.8 11.2-2.6-2-8.8-7-8.8-11.2a5 5 0 0 1 8.8-3.1 5 5 0 0 1 8.8 3.1Z"/><path d="M5 12h4l2-3 2.5 6 2-3H19"/></svg></span>`;

  const o=document.createElement("div");
  o.id=C.overlay;
  o.innerHTML=`<section id="${C.box}" role="dialog" aria-modal="true" aria-label="اعرف مكملك المناسب" tabindex="-1">
    <header class="lsf-head">
      <div class="lsf-brand">${brandLogo}</div>
      <button type="button" class="lsf-close" aria-label="إغلاق">×</button>
    </header>
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
  const modal=$(C.box);
  if(modal)modal.scrollTop=0;
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
  const modal=$(C.box);
  if(modal)modal.scrollTop=0;
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
      <h4 data-title>${e(x[1])}</h4>
      <div class="lsf-price" data-price>
        <span class="lsf-loading">جاري تحميل السعر...</span>
      </div>
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
