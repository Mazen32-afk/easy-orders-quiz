(function () {
  // ================= SETTINGS =================
  const QUESTION_COUNT = 3; 
  const TIME_LIMIT = 30;
  const COUPON_PARTS = ["SAVE", "10", "OFF"];

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
        background: #000;
        color: #fff;
        font-family: Arial, sans-serif;
        padding: 20px;
        margin: 20px 0;
        border: 1px solid #fff;
        border-radius: 12px;
        direction: rtl;
        text-align: right;
      }

      #quiz-container .quiz-title {
        font-size: 22px;
        font-weight: 900;
        margin-bottom: 12px;
      }

      #quiz-container .quiz-info {
        font-size: 15px;
        opacity: 0.9;
        margin-bottom: 12px;
      }

      #quiz-container #timer {
        font-size: 20px;
        font-weight: 900;
        margin-bottom: 12px;
      }

      #quiz-container .question {
        font-size: 18px;
        margin-bottom: 14px;
        font-weight: 700;
        line-height: 1.7;
      }

      #quiz-container .option {
        padding: 12px;
        margin: 8px 0;
        border: 1px solid #fff;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.2s;
        line-height: 1.6;
      }

      #quiz-container .option:hover {
        background: #fff;
        color: #000;
      }

      #quiz-container .option.disabled {
        pointer-events: none;
        opacity: 0.7;
      }

      #quiz-container #coupon {
        margin-top: 16px;
        font-size: 22px;
        font-weight: 900;
        letter-spacing: 1px;
      }

      #quiz-container .quiz-btn {
        margin-top: 15px;
        padding: 12px 18px;
        border: 1px solid #fff;
        background: #fff;
        color: #000;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 700;
      }

      #quiz-container .quiz-btn:hover {
        opacity: 0.85;
      }

      #quiz-container .success {
        font-size: 24px;
        font-weight: 900;
        color: #fff;
        margin-bottom: 12px;
      }

      #quiz-container .error {
        font-size: 20px;
        font-weight: 900;
        margin-bottom: 10px;
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

  function startTimer() {
    clearInterval(timer);

    timer = setInterval(function () {
      timeLeft--;

      const timerEl = document.getElementById("timer");
      if (timerEl) {
        timerEl.innerHTML = "⏰ " + timeLeft;
      }

      if (timeLeft <= 0) {
        loseGame("⏰ الوقت خلص!");
      }
    }, 1000);
  }

  // ================= GAME =================
  function startGame() {
    QUESTIONS = window.QUIZ_QUESTIONS || [];

    const container = getContainer();

    if (!QUESTIONS.length) {
      container.innerHTML = `
        <div class="error">لم يتم تحميل الأسئلة</div>
        <div>تأكد إن ملف questions.js موجود قبل ملف quiz-game.js</div>
      `;
      return;
    }

    if (QUESTIONS.length < QUESTION_COUNT) {
      container.innerHTML = `
        <div class="error">عدد الأسئلة غير كافي</div>
        <div>لازم يكون عندك على الأقل ${QUESTION_COUNT} أسئلة.</div>
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

    let html = `
      <div class="quiz-title">اختبار المكملات الغذائية</div>
      <div class="quiz-info">السؤال ${step + 1} من ${QUESTION_COUNT}</div>
      <div id="timer">⏰ ${timeLeft}</div>
      <div class="question">${q.q}</div>
    `;

    q.o.forEach(function (option, index) {
      html += `
        <div class="option" data-answer="${index}">
          ${option}
        </div>
      `;
    });

    html += `
      <div id="coupon">🔓 ${currentCoupon.join(" ")}</div>
    `;

    container.innerHTML = html;

    const options = container.querySelectorAll(".option");

    options.forEach(function (option) {
      option.addEventListener("click", function () {
        const selectedAnswer = Number(this.getAttribute("data-answer"));
        answer(selectedAnswer);
      });
    });
  }

  function answer(selectedAnswer) {
    if (locked) return;
    locked = true;

    const q = currentQuestions[step];

    if (selectedAnswer !== q.a) {
      loseGame("❌ إجابة غلط!");
      return;
    }

    currentCoupon[step] = COUPON_PARTS[step] || "";
    step++;

    if (step >= QUESTION_COUNT) {
      finishGame();
      return;
    }

    locked = false;
    renderQuestion();
  }

  function finishGame() {
    clearInterval(timer);

    const finalCoupon = currentCoupon.join("");
    const container = getContainer();

    container.innerHTML = `
      <div class="success">🎉 مبروك!</div>
      <div id="coupon">كوبونك: ${finalCoupon}</div>
      <button class="quiz-btn" id="copy-coupon">نسخ الكوبون</button>
      <button class="quiz-btn" id="play-again">العب مرة أخرى</button>
    `;

    document.getElementById("copy-coupon").addEventListener("click", function () {
      navigator.clipboard.writeText(finalCoupon);
      this.innerText = "تم النسخ ✅";
    });

    document.getElementById("play-again").addEventListener("click", startGame);
  }

  function loseGame(message) {
    clearInterval(timer);

    const container = getContainer();

    container.innerHTML = `
      <div class="error">${message}</div>
      <div>حاول مرة تانية وافتح الكوبون.</div>
      <button class="quiz-btn" id="restart-game">ابدأ من جديد</button>
    `;

    document.getElementById("restart-game").addEventListener("click", startGame);
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
