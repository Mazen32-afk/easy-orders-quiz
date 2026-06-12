(function () {
  // ================= SETTINGS =================
  const COUPON_PARTS = ["SAVE", "10", "OFF"];
  const QUESTION_COUNT = COUPON_PARTS.length;
  const TIME_LIMIT = 30;

  // اختياري: لو عندك لينك صفحة منتجات حطه هنا
  // مثال: const SHOP_URL = "https://your-store.com/products";
  const SHOP_URL = "";

  let QUESTIONS = window.QUIZ_QUESTIONS || [];
  let currentQuestions = [];
  let currentCoupon = [];
  let step = 0;
  let timeLeft = TIME_LIMIT;
  let timer = null;
  let locked = false;

  // ================= STYLE =================
  function injectStyle() {
    if (document.getElementById("quiz-game-style")) return;

    const style = document.createElement("style");
    style.id = "quiz-game-style";
    style.innerHTML = `
      #quiz-container {
        --quiz-bg: #050505;
        --quiz-card: #111111;
        --quiz-card-2: #181818;
        --quiz-border: rgba(255,255,255,0.12);
        --quiz-border-strong: rgba(214,168,79,0.45);
        --quiz-text: #ffffff;
        --quiz-muted: #a3a3a3;
        --quiz-gold: #d6a84f;
        --quiz-gold-2: #f4d27a;
        --quiz-gold-soft: rgba(214,168,79,0.15);
        --quiz-green: #22c55e;
        --quiz-green-soft: rgba(34,197,94,0.16);
        --quiz-red: #ef4444;
        --quiz-red-soft: rgba(239,68,68,0.16);

        direction: rtl;
        text-align: right;
        font-family: Arial, Tahoma, sans-serif;
        color: var(--quiz-text);
        background:
          radial-gradient(circle at top right, rgba(214,168,79,0.18), transparent 34%),
          radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 28%),
          var(--quiz-bg);
        padding: 22px;
        margin: 22px 0;
        border-radius: 24px;
        border: 1px solid var(--quiz-border);
        box-shadow:
          0 22px 70px rgba(0,0,0,0.45),
          inset 0 1px 0 rgba(255,255,255,0.05);
        overflow: hidden;
        position: relative;
        isolation: isolate;
      }

      #quiz-container::before {
        content: "";
        position: absolute;
        inset: 0;
        background:
          linear-gradient(135deg, rgba(255,255,255,0.07), transparent 30%),
          linear-gradient(315deg, rgba(214,168,79,0.08), transparent 35%);
        pointer-events: none;
        z-index: -1;
      }

      #quiz-container * {
        box-sizing: border-box;
      }

      #quiz-container .quiz-shell {
        max-width: 760px;
        margin: 0 auto;
      }

      #quiz-container .quiz-card {
        background: linear-gradient(180deg, rgba(24,24,24,0.98), rgba(12,12,12,0.98));
        border: 1px solid var(--quiz-border);
        border-radius: 22px;
        padding: 22px;
        box-shadow:
          0 16px 42px rgba(0,0,0,0.35),
          inset 0 1px 0 rgba(255,255,255,0.06);
        animation: quizFadeUp 0.35s ease both;
      }

      #quiz-container .quiz-top {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 14px;
        margin-bottom: 18px;
      }

      #quiz-container .quiz-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        width: fit-content;
        padding: 7px 12px;
        border-radius: 999px;
        background: var(--quiz-gold-soft);
        border: 1px solid var(--quiz-border-strong);
        color: var(--quiz-gold-2);
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 0.5px;
        margin-bottom: 10px;
      }

      #quiz-container .quiz-title {
        font-size: 26px;
        font-weight: 950;
        line-height: 1.35;
        margin: 0 0 6px;
      }

      #quiz-container .quiz-subtitle {
        margin: 0;
        color: var(--quiz-muted);
        font-size: 15px;
        line-height: 1.7;
      }

      #quiz-container .timer-pill {
        min-width: 84px;
        height: 44px;
        padding: 0 14px;
        border-radius: 999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        background: rgba(214,168,79,0.13);
        border: 1px solid rgba(214,168,79,0.45);
        color: var(--quiz-gold-2);
        font-size: 18px;
        font-weight: 950;
        box-shadow: 0 0 22px rgba(214,168,79,0.12);
        white-space: nowrap;
      }

      #quiz-container .timer-pill.danger {
        background: var(--quiz-red-soft);
        border-color: rgba(239,68,68,0.55);
        color: #fecaca;
        animation: quizPulse 0.8s infinite;
      }

      #quiz-container .progress-wrap {
        margin: 18px 0;
      }

      #quiz-container .progress-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        margin-bottom: 8px;
        color: var(--quiz-muted);
        font-size: 13px;
        font-weight: 700;
      }

      #quiz-container .progress-track {
        height: 10px;
        border-radius: 999px;
        background: rgba(255,255,255,0.08);
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.08);
      }

      #quiz-container .progress-fill {
        height: 100%;
        width: 0%;
        border-radius: 999px;
        background: linear-gradient(90deg, var(--quiz-gold), var(--quiz-gold-2));
        box-shadow: 0 0 24px rgba(214,168,79,0.45);
        transition: width 0.35s ease;
      }

      #quiz-container .question-box {
        margin-top: 18px;
        padding: 18px;
        border-radius: 18px;
        background:
          linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02));
        border: 1px solid rgba(255,255,255,0.1);
      }

      #quiz-container .question-label {
        color: var(--quiz-gold-2);
        font-size: 13px;
        font-weight: 900;
        margin-bottom: 8px;
      }

      #quiz-container .question {
        font-size: 19px;
        font-weight: 900;
        line-height: 1.8;
        margin: 0;
      }

      #quiz-container .options-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        margin-top: 16px;
      }

      #quiz-container .option {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 13px 14px;
        min-height: 54px;
        border-radius: 15px;
        background: rgba(255,255,255,0.045);
        border: 1px solid rgba(255,255,255,0.11);
        color: var(--quiz-text);
        cursor: pointer;
        transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease, box-shadow 0.18s ease;
        line-height: 1.6;
      }

      #quiz-container .option:hover {
        transform: translateY(-2px);
        border-color: rgba(214,168,79,0.65);
        background: var(--quiz-gold-soft);
        box-shadow: 0 10px 24px rgba(0,0,0,0.24);
      }

      #quiz-container .option.disabled {
        pointer-events: none;
      }

      #quiz-container .option-letter {
        width: 34px;
        height: 34px;
        min-width: 34px;
        border-radius: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 950;
        color: var(--quiz-gold-2);
        background: rgba(214,168,79,0.14);
        border: 1px solid rgba(214,168,79,0.35);
      }

      #quiz-container .option-text {
        flex: 1;
        font-size: 15px;
        font-weight: 700;
      }

      #quiz-container .option.correct {
        background: var(--quiz-green-soft);
        border-color: rgba(34,197,94,0.75);
        box-shadow: 0 0 22px rgba(34,197,94,0.13);
      }

      #quiz-container .option.correct .option-letter {
        color: #bbf7d0;
        background: rgba(34,197,94,0.22);
        border-color: rgba(34,197,94,0.65);
      }

      #quiz-container .option.wrong {
        background: var(--quiz-red-soft);
        border-color: rgba(239,68,68,0.75);
        animation: quizShake 0.28s ease both;
      }

      #quiz-container .option.wrong .option-letter {
        color: #fecaca;
        background: rgba(239,68,68,0.22);
        border-color: rgba(239,68,68,0.65);
      }

      #quiz-container .coupon-area {
        margin-top: 18px;
        padding: 16px;
        border-radius: 18px;
        background: rgba(0,0,0,0.28);
        border: 1px dashed rgba(214,168,79,0.35);
      }

      #quiz-container .coupon-title {
        color: var(--quiz-muted);
        font-size: 13px;
        font-weight: 800;
        margin-bottom: 10px;
      }

      #quiz-container .coupon-slots {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      #quiz-container .coupon-slot {
        flex: 1;
        min-width: 90px;
        min-height: 44px;
        border-radius: 14px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 10px 12px;
        background: rgba(255,255,255,0.045);
        border: 1px solid rgba(255,255,255,0.1);
        color: rgba(255,255,255,0.55);
        font-weight: 950;
        letter-spacing: 1px;
      }

      #quiz-container .coupon-slot.open {
        color: #111;
        background: linear-gradient(135deg, var(--quiz-gold), var(--quiz-gold-2));
        border-color: rgba(214,168,79,0.8);
        box-shadow: 0 0 26px rgba(214,168,79,0.22);
        animation: quizPop 0.35s ease both;
      }

      #quiz-container .quiz-note {
        margin-top: 12px;
        color: var(--quiz-muted);
        font-size: 12px;
        line-height: 1.7;
      }

      #quiz-container .result-screen {
        text-align: center;
        padding: 10px 0;
        animation: quizFadeUp 0.35s ease both;
      }

      #quiz-container .result-icon {
        width: 74px;
        height: 74px;
        margin: 0 auto 14px;
        border-radius: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 34px;
        background: var(--quiz-gold-soft);
        border: 1px solid var(--quiz-border-strong);
        box-shadow: 0 0 36px rgba(214,168,79,0.18);
      }

      #quiz-container .result-icon.error-icon {
        background: var(--quiz-red-soft);
        border-color: rgba(239,68,68,0.45);
        box-shadow: 0 0 36px rgba(239,68,68,0.13);
      }

      #quiz-container .result-title {
        margin: 0 0 8px;
        font-size: 28px;
        font-weight: 950;
      }

      #quiz-container .result-text {
        margin: 0 auto 18px;
        max-width: 520px;
        color: var(--quiz-muted);
        line-height: 1.8;
        font-size: 15px;
      }

      #quiz-container .final-coupon {
        width: fit-content;
        max-width: 100%;
        margin: 0 auto 16px;
        padding: 14px 22px;
        border-radius: 18px;
        color: #111;
        background: linear-gradient(135deg, var(--quiz-gold), var(--quiz-gold-2));
        border: 1px solid rgba(255,255,255,0.2);
        font-size: 28px;
        font-weight: 950;
        letter-spacing: 2px;
        box-shadow: 0 14px 36px rgba(214,168,79,0.18);
        word-break: break-word;
      }

      #quiz-container .action-row {
        display: flex;
        justify-content: center;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 12px;
      }

      #quiz-container .quiz-btn {
        min-height: 46px;
        padding: 12px 18px;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255,0.12);
        cursor: pointer;
        font-weight: 950;
        transition: transform 0.18s ease, opacity 0.18s ease, box-shadow 0.18s ease;
      }

      #quiz-container .quiz-btn:hover {
        transform: translateY(-2px);
        opacity: 0.92;
      }

      #quiz-container .quiz-btn.primary {
        color: #111;
        background: linear-gradient(135deg, var(--quiz-gold), var(--quiz-gold-2));
        box-shadow: 0 10px 24px rgba(214,168,79,0.16);
      }

      #quiz-container .quiz-btn.secondary {
        color: var(--quiz-text);
        background: rgba(255,255,255,0.06);
      }

      #quiz-container .quiz-btn.danger {
        color: #fff;
        background: rgba(239,68,68,0.18);
        border-color: rgba(239,68,68,0.45);
      }

      @keyframes quizFadeUp {
        from {
          opacity: 0;
          transform: translateY(12px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes quizPop {
        0% {
          transform: scale(0.92);
          opacity: 0.45;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }

      @keyframes quizPulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
      }

      @keyframes quizShake {
        0%, 100% {
          transform: translateX(0);
        }
        25% {
          transform: translateX(-4px);
        }
        75% {
          transform: translateX(4px);
        }
      }

      @media (max-width: 600px) {
        #quiz-container {
          padding: 14px;
          border-radius: 18px;
          margin: 16px 0;
        }

        #quiz-container .quiz-card {
          padding: 16px;
          border-radius: 18px;
        }

        #quiz-container .quiz-top {
          flex-direction: column;
        }

        #quiz-container .timer-pill {
          width: 100%;
        }

        #quiz-container .quiz-title {
          font-size: 22px;
        }

        #quiz-container .question {
          font-size: 16px;
        }

        #quiz-container .option {
          padding: 12px;
          min-height: 52px;
        }

        #quiz-container .option-text {
          font-size: 14px;
        }

        #quiz-container .coupon-slot {
          min-width: 80px;
        }

        #quiz-container .final-coupon {
          font-size: 22px;
          width: 100%;
        }

        #quiz-container .quiz-btn {
          width: 100%;
        }
      }
    `;

    document.head.appendChild(style);
  }

  // ================= HELPERS =================
  function getContainer() {
    let container = document.getElementById("quiz-container");

    if (!container) {
      container = document.createElement("div");
      container.id = "quiz-container";
      document.body.appendChild(container);
    }

    return container;
  }

  function escapeHTML(value) {
    return String(value)
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

  function pickQuestions() {
    currentQuestions = shuffleArray(QUESTIONS).slice(0, QUESTION_COUNT);
  }

  function resetCoupon() {
    currentCoupon = Array(QUESTION_COUNT).fill("");
  }

  function getProgressPercent() {
    return Math.round((step / QUESTION_COUNT) * 100);
  }

  function renderCouponSlots() {
    return COUPON_PARTS.map(function (part, index) {
      const isOpen = Boolean(currentCoupon[index]);
      return `
        <div class="coupon-slot ${isOpen ? "open" : ""}">
          ${isOpen ? escapeHTML(part) : "???"}
        </div>
      `;
    }).join("");
  }

  function updateTimerUI() {
    const timerEl = document.getElementById("timer");
    if (!timerEl) return;

    timerEl.innerHTML = `⏱ ${timeLeft}s`;

    if (timeLeft <= 10) {
      timerEl.classList.add("danger");
    } else {
      timerEl.classList.remove("danger");
    }
  }

  function startTimer() {
    clearInterval(timer);

    updateTimerUI();

    timer = setInterval(function () {
      timeLeft--;
      updateTimerUI();

      if (timeLeft <= 0) {
        loseGame("الوقت خلص!", "قربت توصل للخصم. حاول مرة تانية وافتح الكوبون قبل انتهاء الوقت.");
      }
    }, 1000);
  }

  function copyText(text, button) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        button.innerText = "تم نسخ الكوبون";
      }).catch(function () {
        fallbackCopy(text, button);
      });
    } else {
      fallbackCopy(text, button);
    }
  }

  function fallbackCopy(text, button) {
    const input = document.createElement("textarea");
    input.value = text;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.focus();
    input.select();

    try {
      document.execCommand("copy");
      button.innerText = "تم نسخ الكوبون";
    } catch (e) {
      button.innerText = text;
    }

    document.body.removeChild(input);
  }

  // ================= GAME =================
  function startGame() {
    QUESTIONS = window.QUIZ_QUESTIONS || [];

    const container = getContainer();

    if (!QUESTIONS.length) {
      container.innerHTML = `
        <div class="quiz-shell">
          <div class="quiz-card">
            <div class="result-screen">
              <div class="result-icon error-icon">!</div>
              <h3 class="result-title">لم يتم تحميل الأسئلة</h3>
              <p class="result-text">تأكد أن ملف questions.js موجود قبل ملف quiz-game.js في كود Easy Orders.</p>
            </div>
          </div>
        </div>
      `;
      return;
    }

    if (QUESTIONS.length < QUESTION_COUNT) {
      container.innerHTML = `
        <div class="quiz-shell">
          <div class="quiz-card">
            <div class="result-screen">
              <div class="result-icon error-icon">!</div>
              <h3 class="result-title">عدد الأسئلة غير كافي</h3>
              <p class="result-text">لازم يكون عندك على الأقل ${QUESTION_COUNT} أسئلة.</p>
            </div>
          </div>
        </div>
      `;
      return;
    }

    step = 0;
    timeLeft = TIME_LIMIT;
    locked = false;
    resetCoupon();
    pickQuestions();
    renderQuestion();
    startTimer();
  }

  function renderQuestion() {
    const container = getContainer();
    const q = currentQuestions[step];

    if (!q || !Array.isArray(q.o)) {
      loseGame("حدث خطأ في السؤال", "راجع تنسيق ملف questions.js وتأكد أن كل سؤال يحتوي على q و o و a.");
      return;
    }

    const letters = ["A", "B", "C", "D", "E", "F"];
    const progress = getProgressPercent();

    let optionsHTML = "";

    q.o.forEach(function (option, index) {
      optionsHTML += `
        <button class="option" type="button" data-answer="${index}">
          <span class="option-letter">${letters[index] || index + 1}</span>
          <span class="option-text">${escapeHTML(option)}</span>
        </button>
      `;
    });

    container.innerHTML = `
      <div class="quiz-shell">
        <div class="quiz-card">
          <div class="quiz-top">
            <div>
              <div class="quiz-badge">SUPPLEMENT CHALLENGE</div>
              <h2 class="quiz-title">اختبر معلوماتك واربح خصم فوري</h2>
              <p class="quiz-subtitle">جاوب على ${QUESTION_COUNT} أسئلة صح وافتح الكوبون خطوة بخطوة.</p>
            </div>

            <div id="timer" class="timer-pill">⏱ ${timeLeft}s</div>
          </div>

          <div class="progress-wrap">
            <div class="progress-meta">
              <span>السؤال ${step + 1} من ${QUESTION_COUNT}</span>
              <span>${progress}% مكتمل</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width:${progress}%"></div>
            </div>
          </div>

          <div class="question-box">
            <div class="question-label">اختر الإجابة الصحيحة</div>
            <p class="question">${escapeHTML(q.q)}</p>

            <div class="options-grid">
              ${optionsHTML}
            </div>
          </div>

          <div class="coupon-area">
            <div class="coupon-title">الكوبون الخاص بك</div>
            <div class="coupon-slots">
              ${renderCouponSlots()}
            </div>
            <div class="quiz-note">كل إجابة صحيحة تفتح جزء من الكوبون.</div>
          </div>
        </div>
      </div>
    `;

    updateTimerUI();

    const options = container.querySelectorAll(".option");

    options.forEach(function (option) {
      option.addEventListener("click", function () {
        const selectedAnswer = Number(this.getAttribute("data-answer"));
        answer(selectedAnswer, this);
      });
    });
  }

  function answer(selectedAnswer, selectedElement) {
    if (locked) return;
    locked = true;

    const q = currentQuestions[step];
    const allOptions = document.querySelectorAll("#quiz-container .option");

    allOptions.forEach(function (option) {
      option.classList.add("disabled");
    });

    if (selectedAnswer !== q.a) {
      selectedElement.classList.add("wrong");

      setTimeout(function () {
        loseGame("إجابة غلط!", "قربت توصل للخصم. حاول مرة تانية وافتح الكوبون قبل انتهاء الوقت.");
      }, 650);

      return;
    }

    selectedElement.classList.add("correct");
    currentCoupon[step] = COUPON_PARTS[step] || "";

    const slots = document.querySelector("#quiz-container .coupon-slots");
    if (slots) {
      slots.innerHTML = renderCouponSlots();
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

    const finalCoupon = currentCoupon.join("");
    const container = getContainer();

    container.innerHTML = `
      <div class="quiz-shell">
        <div class="quiz-card">
          <div class="result-screen">
            <div class="result-icon">🎉</div>
            <h3 class="result-title">مبروك!</h3>
            <p class="result-text">فتحت كوبون الخصم بنجاح. انسخ الكوبون واستخدمه أثناء الطلب.</p>

            <div class="final-coupon">${escapeHTML(finalCoupon)}</div>

            <div class="action-row">
              <button class="quiz-btn primary" id="copy-coupon" type="button">نسخ الكوبون</button>
              ${SHOP_URL ? `<button class="quiz-btn secondary" id="shop-now" type="button">تسوق الآن</button>` : ""}
              <button class="quiz-btn secondary" id="play-again" type="button">العب مرة أخرى</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const copyBtn = document.getElementById("copy-coupon");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        copyText(finalCoupon, this);
      });
    }

    const playAgainBtn = document.getElementById("play-again");
    if (playAgainBtn) {
      playAgainBtn.addEventListener("click", startGame);
    }

    const shopBtn = document.getElementById("shop-now");
    if (shopBtn) {
      shopBtn.addEventListener("click", function () {
        window.location.href = SHOP_URL;
      });
    }
  }

  function loseGame(title, text) {
    clearInterval(timer);

    const container = getContainer();

    container.innerHTML = `
      <div class="quiz-shell">
        <div class="quiz-card">
          <div class="result-screen">
            <div class="result-icon error-icon">×</div>
            <h3 class="result-title">${escapeHTML(title)}</h3>
            <p class="result-text">${escapeHTML(text)}</p>

            <div class="action-row">
              <button class="quiz-btn primary" id="restart-game" type="button">إعادة المحاولة</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const restartBtn = document.getElementById("restart-game");
    if (restartBtn) {
      restartBtn.addEventListener("click", startGame);
    }
  }

  // ================= START =================
  function initQuizGame() {
    injectStyle();
    startGame();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuizGame);
  } else {
    initQuizGame();
  }
})();
