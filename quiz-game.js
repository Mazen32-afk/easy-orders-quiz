(function () {
  // ================= SETTINGS =================
  const CONFIG = {
    overlayId: "LimitlessQuizOverlay",
    finderId: "LimitlessQuizGame",
    floatingBtnId: "LimitlessQuizFloatingBtn",
    containerId: "quiz-container",

    couponParts: ["SAVE", "10", "OFF"],
    timeLimit: 30,

    // خليه true لو عايز زر عائم زي الكود اللي بعتّه
    showFloatingButton: true,

    // لو عايز البوب أب يفتح تلقائيًا بعد ثواني، حط رقم مثل 12000
    autoOpenDelay: 0
  };

  const QUESTION_COUNT = CONFIG.couponParts.length;

  let QUESTIONS = window.QUIZ_QUESTIONS || [];
  let currentQuestions = [];
  let currentCoupon = [];
  let step = 0;
  let timeLeft = CONFIG.timeLimit;
  let timer = null;
  let locked = false;
  let previousBodyOverflow = "";

  // ================= READY =================
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  // ================= STYLE =================
  function injectStyle() {
    if (document.getElementById("LimitlessQuizStyle")) return;

    const style = document.createElement("style");
    style.id = "LimitlessQuizStyle";

    style.innerHTML = `
      @import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500;600;700;800&display=swap");

      #${CONFIG.containerId},
      #${CONFIG.overlayId},
      #${CONFIG.floatingBtnId} {
        font-family: "Readex Pro", Arial, sans-serif !important;
      }

      #${CONFIG.containerId} * ,
      #${CONFIG.overlayId} * ,
      #${CONFIG.floatingBtnId} * {
        box-sizing: border-box !important;
        font-family: "Readex Pro", Arial, sans-serif !important;
      }

      /* ================= INLINE LAUNCH CARD ================= */
      #${CONFIG.containerId} {
        direction: rtl !important;
        text-align: center !important;
        width: 100% !important;
        margin: 22px 0 !important;
      }

      .lq-launch-card {
        width: 100% !important;
        max-width: 1020px !important;
        margin: 0 auto !important;
        padding: 28px 14px !important;
        color: #ffffff !important;
        position: relative !important;
        border-radius: 30px !important;
        background: linear-gradient(135deg, #000000 0%, #101010 48%, #050505 100%) !important;
        box-shadow: 0 28px 95px rgba(0, 0, 0, 0.45) !important;
        overflow: hidden !important;
        isolation: isolate !important;
      }

      .lq-launch-card::before {
        content: "" !important;
        position: absolute !important;
        inset: 0 !important;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px) !important;
        background-size: 38px 38px !important;
        opacity: 0.24 !important;
        pointer-events: none !important;
        z-index: -1 !important;
      }

      .lq-launch-box {
        max-width: 940px !important;
        margin: 0 auto !important;
        border: 1px solid rgba(37, 211, 102, 0.22) !important;
        border-radius: 26px !important;
        padding: 32px 20px 28px !important;
        background: rgba(12, 12, 12, 0.78) !important;
        box-shadow: 0 22px 70px rgba(0, 0, 0, 0.48) !important;
        backdrop-filter: blur(10px) !important;
      }

      .lq-badge {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: 32px !important;
        padding: 7px 15px !important;
        border-radius: 999px !important;
        background: rgba(37, 211, 102, 0.12) !important;
        border: 1px solid rgba(37, 211, 102, 0.38) !important;
        color: #25D366 !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        margin-bottom: 13px !important;
      }

      .lq-title {
        margin: 0 0 8px !important;
        color: #ffffff !important;
        font-size: clamp(25px, 4vw, 44px) !important;
        line-height: 1.25 !important;
        font-weight: 800 !important;
        letter-spacing: -0.6px !important;
      }

      .lq-title span {
        display: inline-block !important;
        padding: 2px 10px !important;
        border-radius: 999px !important;
        background: #25D366 !important;
        color: #000000 !important;
      }

      .lq-subtitle {
        max-width: 690px !important;
        margin: 0 auto 22px !important;
        color: #d6d6d6 !important;
        font-size: 14px !important;
        line-height: 1.9 !important;
        font-weight: 400 !important;
      }

      .lq-launch-features {
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 12px !important;
        max-width: 760px !important;
        margin: 0 auto 24px !important;
      }

      .lq-feature {
        min-height: 74px !important;
        border-radius: 20px !important;
        padding: 14px !important;
        border: 1px solid rgba(255,255,255,0.12) !important;
        background: linear-gradient(135deg, rgba(255,255,255,0.09), rgba(37,211,102,0.06)) !important;
        color: #ffffff !important;
        text-align: center !important;
      }

      .lq-feature strong {
        display: block !important;
        color: #25D366 !important;
        font-size: 17px !important;
        margin-bottom: 4px !important;
      }

      .lq-feature small {
        color: #d6d6d6 !important;
        font-size: 12px !important;
        line-height: 1.6 !important;
      }

      .lq-main-btn {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: 50px !important;
        padding: 0 30px !important;
        border-radius: 999px !important;
        border: 1px solid rgba(37, 211, 102, 0.82) !important;
        background: #25D366 !important;
        color: #000000 !important;
        font-size: 14px !important;
        font-weight: 800 !important;
        cursor: pointer !important;
        transition: 0.22s ease !important;
        text-decoration: none !important;
      }

      .lq-main-btn:hover {
        transform: translateY(-2px) !important;
        box-shadow: 0 18px 42px rgba(37, 211, 102, 0.18) !important;
      }

      /* ================= FLOATING BUTTON ================= */
      #${CONFIG.floatingBtnId} {
        position: fixed !important;
        right: 12px !important;
        top: 50% !important;
        z-index: 2147483000 !important;
        width: 76px !important;
        min-width: 76px !important;
        height: 78px !important;
        padding: 8px 7px !important;
        border-radius: 20px 0 0 20px !important;
        border: 1px solid rgba(37, 211, 102, 0.62) !important;
        border-right: 0 !important;
        background: linear-gradient(135deg, #000000 0%, #111111 56%, #052B14 100%) !important;
        color: #ffffff !important;
        font-size: 10.5px !important;
        font-weight: 800 !important;
        cursor: pointer !important;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.38) !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 2px !important;
        direction: rtl !important;
        line-height: 1.18 !important;
        text-align: center !important;
        transform: translateY(-50%) !important;
        animation: lqButtonShake 4.5s ease-in-out infinite !important;
      }

      #${CONFIG.floatingBtnId}::before {
        content: "" !important;
        width: 7px !important;
        height: 7px !important;
        border-radius: 50% !important;
        background: #25D366 !important;
        display: block !important;
        margin-bottom: 2px !important;
      }

      #${CONFIG.floatingBtnId}:hover {
        animation-play-state: paused !important;
        transform: translateY(calc(-50% - 2px)) !important;
        border-color: rgba(37, 211, 102, 0.9) !important;
        box-shadow: 0 16px 42px rgba(0, 0, 0, 0.48) !important;
      }

      /* ================= OVERLAY ================= */
      #${CONFIG.overlayId} {
        position: fixed !important;
        inset: 0 !important;
        z-index: 2147483001 !important;
        background: rgba(0, 0, 0, 0.78) !important;
        display: none !important;
        align-items: center !important;
        justify-content: center !important;
        padding: 18px !important;
        box-sizing: border-box !important;
        direction: rtl !important;
      }

      #${CONFIG.overlayId}.active {
        display: flex !important;
      }

      #${CONFIG.finderId} {
        width: 100% !important;
        max-width: 1080px !important;
        max-height: 92vh !important;
        overflow-y: auto !important;
        box-sizing: border-box !important;
        padding: 28px 14px !important;
        color: #ffffff !important;
        direction: rtl !important;
        text-align: center !important;
        position: relative !important;
        border-radius: 30px !important;
        box-shadow: 0 28px 95px rgba(0, 0, 0, 0.72) !important;
        background: linear-gradient(135deg, #000000 0%, #101010 48%, #050505 100%) !important;
        isolation: isolate !important;
      }

      #${CONFIG.finderId}::before {
        content: "" !important;
        position: absolute !important;
        inset: 0 !important;
        border-radius: 30px !important;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px) !important;
        background-size: 38px 38px !important;
        opacity: 0.24 !important;
        pointer-events: none !important;
        z-index: -1 !important;
      }

      .lq-close {
        position: absolute !important;
        top: 14px !important;
        left: 14px !important;
        width: 40px !important;
        height: 40px !important;
        border-radius: 50% !important;
        border: 1px solid rgba(255,255,255,0.18) !important;
        background: rgba(255,255,255,0.08) !important;
        color: #fff !important;
        font-size: 25px !important;
        line-height: 1 !important;
        cursor: pointer !important;
        z-index: 5 !important;
      }

      .lq-close:hover {
        background: rgba(255,255,255,0.16) !important;
      }

      .lq-box {
        max-width: 1010px !important;
        margin: 0 auto !important;
        border: 1px solid rgba(37, 211, 102, 0.22) !important;
        border-radius: 26px !important;
        padding: 32px 20px 26px !important;
        background: rgba(12, 12, 12, 0.78) !important;
        box-shadow: 0 22px 70px rgba(0, 0, 0, 0.48) !important;
        backdrop-filter: blur(10px) !important;
      }

      .lq-topline {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 10px !important;
        flex-wrap: wrap !important;
        margin-bottom: 13px !important;
      }

      .lq-pill {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: 32px !important;
        padding: 7px 15px !important;
        border-radius: 999px !important;
        background: rgba(37, 211, 102, 0.12) !important;
        border: 1px solid rgba(37, 211, 102, 0.38) !important;
        color: #25D366 !important;
        font-size: 12px !important;
        font-weight: 700 !important;
      }

      .lq-timer {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: 32px !important;
        min-width: 82px !important;
        padding: 7px 15px !important;
        border-radius: 999px !important;
        background: rgba(255, 255, 255, 0.08) !important;
        border: 1px solid rgba(255, 255, 255, 0.16) !important;
        color: #ffffff !important;
        font-size: 12px !important;
        font-weight: 800 !important;
      }

      .lq-timer.danger {
        color: #ffffff !important;
        background: rgba(239, 68, 68, 0.18) !important;
        border-color: rgba(239, 68, 68, 0.52) !important;
        animation: lqPulse 0.8s infinite !important;
      }

      .lq-heading {
        font-size: clamp(23px, 3.4vw, 38px) !important;
        font-weight: 800 !important;
        margin: 0 0 10px !important;
        line-height: 1.45 !important;
        color: #ffffff !important;
      }

      .lq-heading span {
        display: inline-block !important;
        padding: 1px 10px !important;
        border-radius: 999px !important;
        background: #25D366 !important;
        color: #000000 !important;
      }

      .lq-desc {
        max-width: 720px !important;
        margin: 0 auto 20px !important;
        color: #dddddd !important;
        line-height: 1.85 !important;
        font-size: 14px !important;
      }

      .lq-progress {
        width: 100% !important;
        max-width: 590px !important;
        height: 8px !important;
        border-radius: 999px !important;
        background: rgba(255,255,255,0.11) !important;
        margin: 0 auto 18px !important;
        overflow: hidden !important;
      }

      .lq-progress-fill {
        height: 100% !important;
        width: 0% !important;
        background: linear-gradient(90deg, #B7F5C8, #25D366) !important;
        border-radius: 999px !important;
        transition: 0.35s ease !important;
      }

      .lq-question-wrap {
        animation: lqFade 0.28s ease !important;
      }

      .lq-step {
        display: inline-block !important;
        color: #25D366 !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        margin-bottom: 12px !important;
      }

      .lq-question {
        font-size: clamp(20px, 2.5vw, 30px) !important;
        margin: 0 0 18px !important;
        color: #ffffff !important;
        line-height: 1.6 !important;
        font-weight: 800 !important;
      }

      .lq-options {
        display: grid !important;
        grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        gap: 14px !important;
        max-width: 840px !important;
        margin: 0 auto !important;
      }

      .lq-option {
        min-height: 108px !important;
        border: 1px solid rgba(255,255,255,0.13) !important;
        background: linear-gradient(135deg, rgba(255,255,255,0.105), rgba(37,211,102,0.075)) !important;
        color: #ffffff !important;
        border-radius: 22px !important;
        padding: 18px 22px 18px 16px !important;
        cursor: pointer !important;
        transition: 0.25s ease !important;
        text-align: right !important;
        display: block !important;
        width: 100% !important;
        appearance: none !important;
        -webkit-appearance: none !important;
        position: relative !important;
        overflow: hidden !important;
      }

      .lq-option::before {
        content: "" !important;
        position: absolute !important;
        right: 0 !important;
        top: 18px !important;
        width: 4px !important;
        height: calc(100% - 36px) !important;
        border-radius: 999px 0 0 999px !important;
        background: #25D366 !important;
      }

      .lq-option:hover {
        transform: translateY(-4px) !important;
        background: rgba(37,211,102,0.12) !important;
        border-color: rgba(37,211,102,0.62) !important;
        box-shadow: 0 16px 38px rgba(0,0,0,0.35) !important;
      }

      .lq-option strong {
        display: block !important;
        font-size: 16px !important;
        margin-bottom: 8px !important;
        color: #ffffff !important;
        line-height: 1.65 !important;
        font-weight: 800 !important;
      }

      .lq-option small {
        display: block !important;
        color: #d6d6d6 !important;
        line-height: 1.7 !important;
        font-size: 12px !important;
        font-weight: 400 !important;
      }

      .lq-option.disabled {
        pointer-events: none !important;
      }

      .lq-option.correct {
        background: rgba(37,211,102,0.20) !important;
        border-color: rgba(37,211,102,0.9) !important;
      }

      .lq-option.wrong {
        background: rgba(239,68,68,0.18) !important;
        border-color: rgba(239,68,68,0.75) !important;
        animation: lqShake 0.28s ease both !important;
      }

      .lq-coupon {
        max-width: 760px !important;
        margin: 22px auto 0 !important;
        padding: 15px !important;
        border-radius: 22px !important;
        border: 1px dashed rgba(37,211,102,0.35) !important;
        background: rgba(0,0,0,0.25) !important;
      }

      .lq-coupon-title {
        color: #d6d6d6 !important;
        font-size: 12px !important;
        font-weight: 700 !important;
        margin-bottom: 10px !important;
      }

      .lq-coupon-slots {
        display: grid !important;
        grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
        gap: 10px !important;
      }

      .lq-slot {
        min-height: 44px !important;
        border-radius: 999px !important;
        border: 1px solid rgba(255,255,255,0.12) !important;
        background: rgba(255,255,255,0.08) !important;
        color: #d6d6d6 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        font-size: 13px !important;
        font-weight: 800 !important;
        letter-spacing: 1px !important;
      }

      .lq-slot.open {
        background: #25D366 !important;
        color: #000000 !important;
        border-color: rgba(37,211,102,0.9) !important;
        animation: lqPop 0.32s ease both !important;
      }

      .lq-actions {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 10px !important;
        flex-wrap: wrap !important;
        margin-top: 24px !important;
      }

      .lq-btn {
        display: inline-flex !important;
        align-items: center !important;
        justify-content: center !important;
        min-height: 46px !important;
        padding: 0 22px !important;
        border-radius: 999px !important;
        font-size: 13px !important;
        font-weight: 800 !important;
        cursor: pointer !important;
        text-decoration: none !important;
        transition: 0.22s ease !important;
      }

      .lq-btn.primary {
        border: 1px solid rgba(37,211,102,0.82) !important;
        background: #25D366 !important;
        color: #000000 !important;
      }

      .lq-btn.secondary {
        border: 1px solid rgba(255,255,255,0.18) !important;
        background: rgba(255,255,255,0.08) !important;
        color: #ffffff !important;
      }

      .lq-btn:hover {
        transform: translateY(-2px) !important;
      }

      .lq-result {
        animation: lqFade 0.28s ease !important;
      }

      .lq-result-icon {
        width: 76px !important;
        height: 76px !important;
        border-radius: 24px !important;
        margin: 0 auto 16px !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        background: rgba(37,211,102,0.12) !important;
        border: 1px solid rgba(37,211,102,0.38) !important;
        color: #25D366 !important;
        font-size: 34px !important;
        font-weight: 800 !important;
      }

      .lq-result-icon.error {
        background: rgba(239,68,68,0.14) !important;
        border-color: rgba(239,68,68,0.42) !important;
        color: #ffb4b4 !important;
      }

      .lq-final-coupon {
        width: fit-content !important;
        max-width: 100% !important;
        margin: 18px auto 0 !important;
        padding: 14px 28px !important;
        border-radius: 999px !important;
        background: #25D366 !important;
        color: #000000 !important;
        font-size: clamp(22px, 4vw, 34px) !important;
        font-weight: 800 !important;
        letter-spacing: 2px !important;
        word-break: break-word !important;
      }

      @keyframes lqButtonShake {
        0%, 82%, 100% { transform: translateY(-50%) translateX(0); }
        85% { transform: translateY(-50%) translateX(-4px); }
        88% { transform: translateY(-50%) translateX(4px); }
        91% { transform: translateY(-50%) translateX(-3px); }
        94% { transform: translateY(-50%) translateX(3px); }
        97% { transform: translateY(-50%) translateX(-1px); }
      }

      @keyframes lqFade {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes lqPop {
        from { opacity: 0.4; transform: scale(0.92); }
        to { opacity: 1; transform: scale(1); }
      }

      @keyframes lqShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-4px); }
        75% { transform: translateX(4px); }
      }

      @keyframes lqPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }

      @media (max-width: 760px) {
        #${CONFIG.overlayId} {
          padding: 10px !important;
        }

        #${CONFIG.finderId} {
          padding: 22px 10px !important;
          border-radius: 22px !important;
          max-height: 90vh !important;
        }

        .lq-box,
        .lq-launch-box {
          padding: 25px 12px 20px !important;
          border-radius: 22px !important;
        }

        .lq-options,
        .lq-launch-features {
          grid-template-columns: 1fr !important;
          gap: 12px !important;
        }

        .lq-option {
          min-height: auto !important;
          padding: 16px 13px !important;
        }

        .lq-coupon-slots {
          grid-template-columns: 1fr !important;
        }

        .lq-actions {
          flex-direction: column !important;
        }

        .lq-btn,
        .lq-main-btn {
          width: 100% !important;
        }

        #${CONFIG.floatingBtnId} {
          right: 8px !important;
          width: 70px !important;
          min-width: 70px !important;
          height: 74px !important;
          font-size: 10px !important;
          padding: 7px 6px !important;
          border-radius: 18px 0 0 18px !important;
        }
      }
    `;

    document.head.appendChild(style);
  }

  // ================= HELPERS =================
  function escapeHTML(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function shuffleArray(array) {
    const arr = [...array];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  function normalizeQuestion(question) {
    const options = question.o.map(function (text, index) {
      return {
        text: text,
        correct: index === question.a
      };
    });

    const shuffledOptions = shuffleArray(options);
    const correctIndex = shuffledOptions.findIndex(function (option) {
      return option.correct;
    });

    return {
      q: question.q,
      o: shuffledOptions.map(function (option) {
        return option.text;
      }),
      a: correctIndex
    };
  }

  function getProgress() {
    return Math.round((step / QUESTION_COUNT) * 100);
  }

  function couponCode() {
    return CONFIG.couponParts.join("");
  }

  function renderSlots() {
    return CONFIG.couponParts.map(function (part, index) {
      const opened = currentCoupon[index];

      return `
        <div class="lq-slot ${opened ? "open" : ""}">
          ${opened ? escapeHTML(part) : "???"}
        </div>
      `;
    }).join("");
  }

  function getContainer() {
    let container = document.getElementById(CONFIG.containerId);

    if (!container) {
      container = document.createElement("div");
      container.id = CONFIG.containerId;
      document.body.appendChild(container);
    }

    return container;
  }

  // ================= DOM CREATE =================
  function removeOldQuiz() {
    const oldOverlay = document.getElementById(CONFIG.overlayId);
    const oldButton = document.getElementById(CONFIG.floatingBtnId);

    if (oldOverlay) oldOverlay.remove();
    if (oldButton) oldButton.remove();
  }

  function createInlineLaunch() {
    const container = getContainer();

    container.innerHTML = `
      <div class="lq-launch-card">
        <div class="lq-launch-box">
          <div class="lq-badge">LIMITLESS QUIZ CHALLENGE</div>

          <h2 class="lq-title">
            جاوب واكسب <span>كوبون خصم</span>
          </h2>

          <p class="lq-subtitle">
            اختبر معلوماتك في المكملات الغذائية. جاوب على ${QUESTION_COUNT} أسئلة صح قبل انتهاء الوقت وافتح الكوبون.
          </p>

          <div class="lq-launch-features">
            <div class="lq-feature">
              <strong>${QUESTION_COUNT}</strong>
              <small>أسئلة عشوائية</small>
            </div>

            <div class="lq-feature">
              <strong>${CONFIG.timeLimit}s</strong>
              <small>وقت محدود</small>
            </div>

            <div class="lq-feature">
              <strong>خصم</strong>
              <small>كوبون فوري</small>
            </div>
          </div>

          <button class="lq-main-btn" type="button" data-lq-open>
            ابدأ الاختبار الآن
          </button>
        </div>
      </div>
    `;

    const openBtn = container.querySelector("[data-lq-open]");
    if (openBtn) {
      openBtn.addEventListener("click", function () {
        startGame();
      });
    }
  }

  function createFloatingButton() {
    if (!CONFIG.showFloatingButton) return;

    const btn = document.createElement("button");
    btn.id = CONFIG.floatingBtnId;
    btn.type = "button";
    btn.innerHTML = "<span>اكسب</span><span>كوبون</span><span>خصم</span>";

    btn.addEventListener("click", function (event) {
      event.preventDefault();
      startGame();
    });

    document.body.appendChild(btn);
  }

  function createOverlay() {
    const overlay = document.createElement("div");
    overlay.id = CONFIG.overlayId;

    overlay.innerHTML = `
      <section id="${CONFIG.finderId}">
        <button type="button" class="lq-close" aria-label="Close">×</button>

        <div class="lq-box">
          <div id="LimitlessQuizContent"></div>
        </div>
      </section>
    `;

    document.body.appendChild(overlay);

    overlay.addEventListener("click", function (event) {
      const closeBtn = event.target.closest(".lq-close");

      if (closeBtn || event.target === overlay) {
        closeQuiz();
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        closeQuiz();
      }
    });
  }

  function openQuiz() {
    const overlay = document.getElementById(CONFIG.overlayId);

    if (!overlay) return;

    previousBodyOverflow = document.body.style.overflow || "";
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeQuiz() {
    const overlay = document.getElementById(CONFIG.overlayId);

    if (!overlay) return;

    clearInterval(timer);
    overlay.classList.remove("active");
    document.body.style.overflow = previousBodyOverflow;
  }

  // ================= TIMER =================
  function startTimer() {
    clearInterval(timer);
    updateTimer();

    timer = setInterval(function () {
      timeLeft--;
      updateTimer();

      if (timeLeft <= 0) {
        loseGame("الوقت خلص!", "حاول مرة تانية وافتح الكوبون قبل انتهاء الوقت.");
      }
    }, 1000);
  }

  function updateTimer() {
    const timerEl = document.querySelector("#" + CONFIG.overlayId + " .lq-timer");

    if (!timerEl) return;

    timerEl.innerHTML = "⏱ " + timeLeft + "s";

    if (timeLeft <= 10) {
      timerEl.classList.add("danger");
    } else {
      timerEl.classList.remove("danger");
    }
  }

  // ================= GAME =================
  function startGame() {
    QUESTIONS = window.QUIZ_QUESTIONS || [];

    if (!QUESTIONS.length) {
      showMessage("لم يتم تحميل الأسئلة", "تأكد إن ملف questions.js موجود قبل ملف quiz-game.js.");
      return;
    }

    if (QUESTIONS.length < QUESTION_COUNT) {
      showMessage("عدد الأسئلة غير كافي", "لازم يكون عندك على الأقل " + QUESTION_COUNT + " أسئلة.");
      return;
    }

    currentQuestions = shuffleArray(QUESTIONS).slice(0, QUESTION_COUNT).map(normalizeQuestion);
    currentCoupon = Array(QUESTION_COUNT).fill("");
    step = 0;
    timeLeft = CONFIG.timeLimit;
    locked = false;

    openQuiz();
    renderQuestion();
    startTimer();
  }

  function renderQuestion() {
    const content = document.getElementById("LimitlessQuizContent");
    const q = currentQuestions[step];

    if (!content || !q) return;

    const letters = ["A", "B", "C", "D"];
    const progress = getProgress();

    const optionsHTML = q.o.map(function (option, index) {
      return `
        <button type="button" class="lq-option" data-answer="${index}">
          <strong>${letters[index] || index + 1}. ${escapeHTML(option)}</strong>
          <small>اختار الإجابة لو متأكد، أي إجابة غلط هتعيد المحاولة من البداية.</small>
        </button>
      `;
    }).join("");

    content.innerHTML = `
      <div class="lq-question-wrap">
        <div class="lq-topline">
          <div class="lq-pill">السؤال ${step + 1} من ${QUESTION_COUNT}</div>
          <div class="lq-timer">⏱ ${timeLeft}s</div>
        </div>

        <h2 class="lq-heading">
          اختبر معلوماتك واربح <span>كوبون خصم</span>
        </h2>

        <p class="lq-desc">
          جاوب صح وافتح جزء من الكوبون. الأسئلة بتتغير عشوائيًا في كل محاولة.
        </p>

        <div class="lq-progress">
          <div class="lq-progress-fill" style="width:${progress}%"></div>
        </div>

        <span class="lq-step">اختر الإجابة الصحيحة</span>

        <h3 class="lq-question">${escapeHTML(q.q)}</h3>

        <div class="lq-options">
          ${optionsHTML}
        </div>

        <div class="lq-coupon">
          <div class="lq-coupon-title">الكوبون الخاص بك</div>
          <div class="lq-coupon-slots">
            ${renderSlots()}
          </div>
        </div>
      </div>
    `;

    updateTimer();

    content.querySelectorAll(".lq-option").forEach(function (button) {
      button.addEventListener("click", function () {
        answer(Number(this.getAttribute("data-answer")), this);
      });
    });
  }

  function answer(selected, selectedButton) {
    if (locked) return;
    locked = true;

    const q = currentQuestions[step];
    const options = document.querySelectorAll("#" + CONFIG.overlayId + " .lq-option");

    options.forEach(function (option) {
      option.classList.add("disabled");
    });

    if (selected !== q.a) {
      selectedButton.classList.add("wrong");

      setTimeout(function () {
        loseGame("إجابة غلط!", "قربت توصل للخصم. حاول مرة تانية وجاوب على الأسئلة صح.");
      }, 650);

      return;
    }

    selectedButton.classList.add("correct");
    currentCoupon[step] = CONFIG.couponParts[step];

    const slots = document.querySelector("#" + CONFIG.overlayId + " .lq-coupon-slots");
    if (slots) {
      slots.innerHTML = renderSlots();
    }

    setTimeout(function () {
      step++;

      if (step >= QUESTION_COUNT) {
        finishGame();
        return;
      }

      locked = false;
      renderQuestion();
    }, 650);
  }

  function finishGame() {
    clearInterval(timer);

    const content = document.getElementById("LimitlessQuizContent");
    const code = couponCode();

    if (!content) return;

    content.innerHTML = `
      <div class="lq-result">
        <div class="lq-result-icon">✓</div>

        <h2 class="lq-heading">
          مبروك! فتحت <span>كوبون الخصم</span>
        </h2>

        <p class="lq-desc">
          انسخ الكوبون واستخدمه أثناء إتمام الطلب.
        </p>

        <div class="lq-final-coupon">${escapeHTML(code)}</div>

        <div class="lq-actions">
          <button class="lq-btn primary" type="button" data-copy>
            نسخ الكوبون
          </button>

          <button class="lq-btn secondary" type="button" data-restart>
            العب مرة أخرى
          </button>
        </div>
      </div>
    `;

    const copyBtn = content.querySelector("[data-copy]");
    const restartBtn = content.querySelector("[data-restart]");

    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        copyCoupon(code, this);
      });
    }

    if (restartBtn) {
      restartBtn.addEventListener("click", function () {
        startGame();
      });
    }
  }

  function loseGame(title, text) {
    clearInterval(timer);

    const content = document.getElementById("LimitlessQuizContent");

    if (!content) return;

    content.innerHTML = `
      <div class="lq-result">
        <div class="lq-result-icon error">×</div>

        <h2 class="lq-heading">${escapeHTML(title)}</h2>

        <p class="lq-desc">${escapeHTML(text)}</p>

        <div class="lq-actions">
          <button class="lq-btn primary" type="button" data-restart>
            إعادة المحاولة
          </button>

          <button class="lq-btn secondary" type="button" data-close>
            إغلاق
          </button>
        </div>
      </div>
    `;

    const restartBtn = content.querySelector("[data-restart]");
    const closeBtn = content.querySelector("[data-close]");

    if (restartBtn) {
      restartBtn.addEventListener("click", function () {
        startGame();
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        closeQuiz();
      });
    }
  }

  function showMessage(title, text) {
    openQuiz();

    const content = document.getElementById("LimitlessQuizContent");

    if (!content) return;

    content.innerHTML = `
      <div class="lq-result">
        <div class="lq-result-icon error">!</div>

        <h2 class="lq-heading">${escapeHTML(title)}</h2>

        <p class="lq-desc">${escapeHTML(text)}</p>

        <div class="lq-actions">
          <button class="lq-btn secondary" type="button" data-close>
            إغلاق
          </button>
        </div>
      </div>
    `;

    const closeBtn = content.querySelector("[data-close]");

    if (closeBtn) {
      closeBtn.addEventListener("click", closeQuiz);
    }
  }

  function copyCoupon(code, button) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(function () {
        button.innerText = "تم نسخ الكوبون";
      }).catch(function () {
        fallbackCopy(code, button);
      });
    } else {
      fallbackCopy(code, button);
    }
  }

  function fallbackCopy(code, button) {
    const textarea = document.createElement("textarea");
    textarea.value = code;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      document.execCommand("copy");
      button.innerText = "تم نسخ الكوبون";
    } catch (e) {
      button.innerText = code;
    }

    document.body.removeChild(textarea);
  }

  // ================= INIT =================
  function init() {
    injectStyle();
    removeOldQuiz();
    createInlineLaunch();
    createOverlay();
    createFloatingButton();

    if (CONFIG.autoOpenDelay && CONFIG.autoOpenDelay > 0) {
      setTimeout(function () {
        startGame();
      }, CONFIG.autoOpenDelay);
    }
  }

  ready(init);
})();
