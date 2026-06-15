(function () {
  "use strict";

  var GAME = {
    styleId: "limitlessNewQuizStyle",
    buttonId: "limitlessNewQuizBtn",
    overlayId: "limitlessNewQuizOverlay",
    boxId: "limitlessNewQuizBox",
    contentId: "limitlessNewQuizContent",
    hostId: "limitlessNewQuizHost",
    targetSelector: ".p_details_container .bg-white.rounded-lg.border.border-gray-300.mt-8.max-w-full",
    maxQuestions: 8,
    whatsappLink: "https://wa.me/201024348002",
    couponCode: "Limitless50"
  };

  var state = {
    questions: [],
    current: 0,
    score: 0,
    answered: false,
    selectedIndex: -1,
    started: false
  };

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  }

  function $(id) {
    return document.getElementById(id);
  }

  function createEl(tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (typeof text === "string") el.textContent = text;
    return el;
  }

  function shuffleArray(arr) {
    var copy = arr.slice();

    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }

    return copy;
  }

  function cleanOldGame() {
    var oldOverlay = $(GAME.overlayId);
    var oldBtn = $(GAME.buttonId);
    var oldHost = $(GAME.hostId);
    var oldStyle = $(GAME.styleId);

    if (oldOverlay) oldOverlay.remove();
    if (oldBtn) oldBtn.remove();
    if (oldHost) oldHost.remove();
    if (oldStyle) oldStyle.remove();
  }

  function injectStyle() {
    var css = [
      "#" + GAME.hostId + "{width:100%!important;max-width:100%!important;margin:14px 0 18px!important;padding:0!important;box-sizing:border-box!important;direction:rtl!important;font-family:Readex Pro,Arial,sans-serif!important;}",
      "#" + GAME.buttonId + "{position:relative!important;left:auto!important;right:auto!important;top:auto!important;bottom:auto!important;transform:none!important;z-index:5!important;width:100%!important;min-height:76px!important;height:auto!important;border:1px solid rgba(37,211,102,.65)!important;border-radius:18px!important;background:linear-gradient(135deg,#000 0%,#111 55%,#073d1b 100%)!important;color:#fff!important;font-family:Readex Pro,Arial,sans-serif!important;font-size:13px!important;font-weight:900!important;line-height:1.5!important;text-align:center!important;cursor:pointer!important;box-shadow:0 14px 34px rgba(0,0,0,.28)!important;padding:13px 14px!important;display:flex!important;align-items:center!important;justify-content:center!important;flex-direction:column!important;gap:4px!important;box-sizing:border-box!important;}",
      "#" + GAME.buttonId + ":hover{transform:translateY(-2px)!important;box-shadow:0 18px 42px rgba(0,0,0,.36)!important;border-color:rgba(37,211,102,.9)!important;}",
      "#" + GAME.overlayId + "{position:fixed!important;inset:0!important;z-index:2147482600!important;background:rgba(0,0,0,.78)!important;display:none!important;align-items:center!important;justify-content:center!important;padding:16px!important;box-sizing:border-box!important;font-family:Readex Pro,Arial,sans-serif!important;direction:rtl!important;}",
      "#" + GAME.overlayId + ".active{display:flex!important;}",
      "#" + GAME.boxId + "{width:100%!important;max-width:760px!important;max-height:92vh!important;overflow:auto!important;border-radius:28px!important;background:linear-gradient(135deg,#000 0%,#111 55%,#041f0f 100%)!important;color:#fff!important;border:1px solid rgba(37,211,102,.34)!important;box-shadow:0 28px 90px rgba(0,0,0,.72)!important;position:relative!important;padding:26px 18px!important;box-sizing:border-box!important;text-align:center!important;}",
      "#" + GAME.boxId + " *{box-sizing:border-box!important;font-family:Readex Pro,Arial,sans-serif!important;}",
      ".lnq-close{position:absolute!important;top:13px!important;left:13px!important;width:40px!important;height:40px!important;border-radius:50%!important;border:1px solid rgba(255,255,255,.17)!important;background:rgba(255,255,255,.08)!important;color:#fff!important;font-size:26px!important;line-height:1!important;cursor:pointer!important;}",
      ".lnq-title{font-size:clamp(25px,4vw,40px)!important;line-height:1.25!important;margin:10px 0 9px!important;font-weight:900!important;color:#fff!important;}",
      ".lnq-title span{display:inline-block!important;background:#25D366!important;color:#000!important;border-radius:999px!important;padding:1px 10px!important;}",
      ".lnq-sub{max-width:560px!important;margin:0 auto 18px!important;color:#ddd!important;font-size:14px!important;line-height:1.9!important;font-weight:600!important;}",
      ".lnq-coupon{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:8px!important;margin:0 auto 18px!important;padding:10px 14px!important;border-radius:999px!important;border:1px solid rgba(37,211,102,.55)!important;background:rgba(37,211,102,.11)!important;color:#dfffe8!important;font-size:13px!important;font-weight:900!important;}",
      ".lnq-coupon b{direction:ltr!important;background:#25D366!important;color:#000!important;border-radius:999px!important;padding:5px 10px!important;font-size:12px!important;}",
      ".lnq-progress{width:100%!important;max-width:560px!important;height:9px!important;border-radius:999px!important;background:rgba(255,255,255,.11)!important;overflow:hidden!important;margin:0 auto 20px!important;}",
      ".lnq-progress-fill{height:100%!important;width:0%!important;border-radius:999px!important;background:linear-gradient(90deg,#b7f5c8,#25D366)!important;transition:.25s ease!important;}",
      ".lnq-card{border:1px solid rgba(255,255,255,.12)!important;background:rgba(255,255,255,.055)!important;border-radius:24px!important;padding:18px!important;box-shadow:0 18px 45px rgba(0,0,0,.28)!important;}",
      ".lnq-step{display:inline-flex!important;margin-bottom:11px!important;color:#25D366!important;font-size:12px!important;font-weight:900!important;}",
      ".lnq-question{font-size:clamp(19px,3vw,27px)!important;line-height:1.65!important;margin:0 0 16px!important;color:#fff!important;font-weight:900!important;}",
      ".lnq-options{display:grid!important;grid-template-columns:1fr 1fr!important;gap:12px!important;margin:0 auto!important;}",
      ".lnq-option{width:100%!important;min-height:74px!important;border-radius:18px!important;border:1px solid rgba(255,255,255,.13)!important;background:linear-gradient(135deg,rgba(255,255,255,.09),rgba(37,211,102,.055))!important;color:#fff!important;font-family:Readex Pro,Arial,sans-serif!important;font-size:14px!important;font-weight:800!important;line-height:1.55!important;text-align:right!important;padding:14px 15px!important;cursor:pointer!important;transition:.2s ease!important;}",
      ".lnq-option:hover{transform:translateY(-2px)!important;border-color:rgba(37,211,102,.62)!important;background:rgba(37,211,102,.13)!important;}",
      ".lnq-option.correct{background:rgba(37,211,102,.24)!important;border-color:#25D366!important;color:#dfffe8!important;}",
      ".lnq-option.wrong{background:rgba(255,70,70,.18)!important;border-color:rgba(255,70,70,.7)!important;color:#fff!important;}",
      ".lnq-option:disabled{cursor:not-allowed!important;opacity:.95!important;}",
      ".lnq-feedback{min-height:31px!important;margin:13px auto 0!important;font-size:13px!important;font-weight:900!important;line-height:1.7!important;}",
      ".lnq-actions{display:flex!important;align-items:center!important;justify-content:center!important;gap:10px!important;flex-wrap:wrap!important;margin-top:17px!important;}",
      ".lnq-btn,.lnq-link{display:inline-flex!important;align-items:center!important;justify-content:center!important;min-height:45px!important;padding:0 20px!important;border-radius:999px!important;font-family:Readex Pro,Arial,sans-serif!important;font-size:13px!important;font-weight:900!important;text-decoration:none!important;cursor:pointer!important;border:1px solid rgba(37,211,102,.75)!important;background:#25D366!important;color:#000!important;}",
      ".lnq-btn.secondary{background:rgba(255,255,255,.08)!important;color:#fff!important;border-color:rgba(255,255,255,.18)!important;}",
      ".lnq-result-score{font-size:43px!important;font-weight:900!important;color:#25D366!important;margin:5px 0!important;line-height:1!important;}",
      ".lnq-result-text{font-size:15px!important;color:#ddd!important;line-height:1.9!important;margin:10px auto!important;max-width:560px!important;}",
      "@media(max-width:760px){#" + GAME.hostId + "{margin:12px 0 16px!important;}#" + GAME.buttonId + "{min-height:70px!important;font-size:12px!important;border-radius:16px!important;padding:12px 12px!important;}#" + GAME.boxId + "{padding:24px 12px!important;border-radius:23px!important;max-height:90vh!important;}.lnq-options{grid-template-columns:1fr!important;gap:10px!important;}.lnq-option{min-height:auto!important;font-size:13px!important;padding:13px!important;}.lnq-actions{flex-direction:column!important;}.lnq-btn,.lnq-link{width:100%!important;}.lnq-coupon{font-size:12px!important;gap:6px!important;padding:9px 10px!important;}.lnq-coupon b{font-size:11px!important;padding:4px 8px!important;}}"
    ].join("\n");

    var style = document.createElement("style");
    style.id = GAME.styleId;
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
  }

  function getValidQuestions() {
    var source = window.QUIZ_QUESTIONS;

    if (!source || !Array.isArray(source)) return [];

    var valid = [];

    for (var i = 0; i < source.length; i++) {
      var q = source[i];

      if (!q || typeof q.q !== "string" || !Array.isArray(q.o)) continue;
      if (q.o.length < 2) continue;
      if (typeof q.a !== "number" || q.a < 0 || q.a >= q.o.length) continue;

      valid.push(q);
    }

    return valid;
  }

  function prepareRound() {
    var all = shuffleArray(getValidQuestions());
    var take = Math.min(GAME.maxQuestions, all.length);
    var round = [];

    for (var i = 0; i < take; i++) {
      var item = all[i];
      var correctText = String(item.o[item.a]);
      var options = shuffleArray(
        item.o.map(function (x) {
          return String(x);
        })
      );

      round.push({
        q: String(item.q),
        o: options,
        a: options.indexOf(correctText)
      });
    }

    return round;
  }

  function insertGameUnderTarget(host) {
    var tries = 0;

    function tryInsert() {
      var target =
        document.querySelector(GAME.targetSelector) ||
        document.querySelector(".p_details_container .bg-white.rounded-lg.border.border-gray-300") ||
        document.querySelector(".p_details_container [class*='border-gray-300'][class*='mt-8']");

      if (target && target.parentNode) {
        target.insertAdjacentElement("afterend", host);
        return;
      }

      tries++;

      if (tries < 40) {
        setTimeout(tryInsert, 250);
      } else {
        document.body.appendChild(host);
      }
    }

    tryInsert();
  }

  function createFloatingButton() {
    var host = document.createElement("div");
    var btn = document.createElement("button");

    host.id = GAME.hostId;

    btn.id = GAME.buttonId;
    btn.type = "button";

    btn.innerHTML =
      "<span style='display:block;font-size:13px;font-weight:900;line-height:1.5;'>اختبر معلوماتك عن المكملات</span>" +
      "<span style='display:block;font-size:11px;font-weight:700;line-height:1.5;color:#B7F5C8;'>جاوب على أسئلة سريعة واستفد من كود الخصم Limitless50</span>";

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      openGame();
    });

    host.appendChild(btn);
    insertGameUnderTarget(host);
  }

  function createOverlay() {
    var overlay = document.createElement("div");
    overlay.id = GAME.overlayId;

    var box = document.createElement("section");
    box.id = GAME.boxId;

    var close = document.createElement("button");
    close.type = "button";
    close.className = "lnq-close";
    close.setAttribute("aria-label", "Close");
    close.textContent = "×";

    var title = createEl("h2", "lnq-title", "");
    title.appendChild(document.createTextNode("اختبر معلوماتك عن "));
    title.appendChild(createEl("span", "", "المكملات"));

    var sub = createEl(
      "p",
      "lnq-sub",
      "جاوب على أسئلة سريعة عن الكرياتين والبروتين والجينر، وشوف نتيجتك في الآخر."
    );

    var coupon = createEl("div", "lnq-coupon", "");
    coupon.appendChild(document.createTextNode("كوبون لأول طلب"));
    coupon.appendChild(createEl("b", "", GAME.couponCode));

    var progress = createEl("div", "lnq-progress", "");
    var fill = createEl("div", "lnq-progress-fill", "");
    fill.id = "limitlessNewQuizProgressFill";
    progress.appendChild(fill);

    var content = createEl("div", "", "");
    content.id = GAME.contentId;

    box.appendChild(close);
    box.appendChild(title);
    box.appendChild(sub);
    box.appendChild(coupon);
    box.appendChild(progress);
    box.appendChild(content);

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    close.addEventListener("click", closeGame);

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeGame();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeGame();
    });
  }

  function setProgress() {
    var fill = $("limitlessNewQuizProgressFill");

    if (!fill) return;

    if (!state.questions.length) {
      fill.style.width = "0%";
      return;
    }

    var pct = Math.round((state.current / state.questions.length) * 100);

    if (state.current >= state.questions.length) pct = 100;

    fill.style.width = pct + "%";
  }

  function clearContent() {
    var content = $(GAME.contentId);

    if (!content) return null;

    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }

    return content;
  }

  function startGame() {
    state.questions = prepareRound();
    state.current = 0;
    state.score = 0;
    state.answered = false;
    state.selectedIndex = -1;
    state.started = true;

    if (!state.questions.length) {
      renderNoQuestions();
      return;
    }

    renderQuestion();
  }

  function renderNoQuestions() {
    setProgress();

    var content = clearContent();
    if (!content) return;

    var card = createEl("div", "lnq-card", "");
    var h = createEl("h3", "lnq-question", "الأسئلة لم تتحمل");
    var p = createEl(
      "p",
      "lnq-result-text",
      "تأكد أن ملف questionlist.js اتحمل قبل newgame.js وأن window.QUIZ_QUESTIONS موجودة."
    );

    var actions = createEl("div", "lnq-actions", "");
    var retry = createEl("button", "lnq-btn", "إعادة المحاولة");

    retry.type = "button";
    retry.addEventListener("click", startGame);

    actions.appendChild(retry);
    card.appendChild(h);
    card.appendChild(p);
    card.appendChild(actions);
    content.appendChild(card);
  }

  function renderQuestion() {
    setProgress();

    var content = clearContent();
    if (!content) return;

    if (state.current >= state.questions.length) {
      renderResult();
      return;
    }

    state.answered = false;
    state.selectedIndex = -1;

    var q = state.questions[state.current];

    var card = createEl("div", "lnq-card", "");
    var step = createEl("span", "lnq-step", "السؤال " + (state.current + 1) + " من " + state.questions.length);
    var title = createEl("h3", "lnq-question", q.q);
    var optionsWrap = createEl("div", "lnq-options", "");
    var feedback = createEl("div", "lnq-feedback", "");

    feedback.id = "limitlessNewQuizFeedback";

    for (var i = 0; i < q.o.length; i++) {
      var opt = document.createElement("button");

      opt.type = "button";
      opt.className = "lnq-option";
      opt.textContent = q.o[i];
      opt.setAttribute("data-index", String(i));
      opt.addEventListener("click", onOptionClick);

      optionsWrap.appendChild(opt);
    }

    var actions = createEl("div", "lnq-actions", "");

    var next = createEl(
      "button",
      "lnq-btn",
      state.current === state.questions.length - 1 ? "عرض النتيجة" : "السؤال التالي"
    );

    next.type = "button";
    next.id = "limitlessNewQuizNext";
    next.disabled = true;
    next.style.opacity = ".55";

    next.addEventListener("click", function () {
      if (!state.answered) return;

      state.current += 1;

      if (state.current >= state.questions.length) {
        renderResult();
      } else {
        renderQuestion();
      }
    });

    var restart = createEl("button", "lnq-btn secondary", "ابدأ من جديد");
    restart.type = "button";
    restart.addEventListener("click", startGame);

    actions.appendChild(next);
    actions.appendChild(restart);

    card.appendChild(step);
    card.appendChild(title);
    card.appendChild(optionsWrap);
    card.appendChild(feedback);
    card.appendChild(actions);

    content.appendChild(card);
  }

  function onOptionClick(e) {
    if (state.answered) return;

    var btn = e.currentTarget;
    var selected = parseInt(btn.getAttribute("data-index"), 10);
    var q = state.questions[state.current];
    var options = btn.parentNode.querySelectorAll(".lnq-option");
    var feedback = $("limitlessNewQuizFeedback");
    var next = $("limitlessNewQuizNext");

    state.answered = true;
    state.selectedIndex = selected;

    for (var i = 0; i < options.length; i++) {
      options[i].disabled = true;

      if (i === q.a) options[i].classList.add("correct");
      if (i === selected && selected !== q.a) options[i].classList.add("wrong");
    }

    if (selected === q.a) {
      state.score += 1;

      if (feedback) {
        feedback.style.color = "#25D366";
        feedback.textContent = "إجابة صحيحة";
      }
    } else {
      if (feedback) {
        feedback.style.color = "#ff8a8a";
        feedback.textContent = "إجابة غير صحيحة — الإجابة الصح اتعلمت بالأخضر";
      }
    }

    if (next) {
      next.disabled = false;
      next.style.opacity = "1";
    }
  }

  function renderResult() {
    state.current = state.questions.length;
    setProgress();

    var content = clearContent();
    if (!content) return;

    var total = state.questions.length || 1;
    var pct = Math.round((state.score / total) * 100);
    var message = "ممتاز، عندك أساس كويس. اختار مكملك حسب هدفك واستفد من كود الخصم لأول طلب.";

    if (pct < 50) {
      message = "بداية كويسة. المكمل الصح بيتحدد حسب هدفك: كرياتين للأداء، واي للبروتين، وجينر للسعرات.";
    }

    if (pct >= 80) {
      message = "نتيجة قوية جدًا. واضح إنك فاهم الفرق بين المكملات، دلوقتي اختار المنتج الأنسب لهدفك.";
    }

    var card = createEl("div", "lnq-card", "");
    var step = createEl("span", "lnq-step", "النتيجة النهائية");
    var score = createEl("div", "lnq-result-score", state.score + " / " + total);
    var text = createEl("p", "lnq-result-text", message);

    var coupon = createEl("div", "lnq-coupon", "استخدم كود الخصم ");
    coupon.appendChild(createEl("b", "", GAME.couponCode));

    var actions = createEl("div", "lnq-actions", "");

    var again = createEl("button", "lnq-btn secondary", "العب مرة تانية");
    again.type = "button";
    again.addEventListener("click", startGame);

    var consult = createEl("a", "lnq-link", "استشارة واتساب");
    consult.href = GAME.whatsappLink;
    consult.target = "_blank";
    consult.rel = "noopener";

    var close = createEl("button", "lnq-btn", "إغلاق");
    close.type = "button";
    close.addEventListener("click", closeGame);

    actions.appendChild(again);
    actions.appendChild(consult);
    actions.appendChild(close);

    card.appendChild(step);
    card.appendChild(score);
    card.appendChild(text);
    card.appendChild(coupon);
    card.appendChild(actions);

    content.appendChild(card);
  }

  function openGame() {
    var overlay = $(GAME.overlayId);

    if (!overlay) return;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    startGame();
  }

  function closeGame() {
    var overlay = $(GAME.overlayId);

    if (!overlay) return;

    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  function init() {
    cleanOldGame();
    injectStyle();
    createFloatingButton();
    createOverlay();
  }

  ready(init);
})();
