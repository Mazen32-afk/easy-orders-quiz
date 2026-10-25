/**
 * MedCare Trust Popup — V3 | Auto-open 7s | Alexandria + Almarai.
 * Embed this file ONCE on your Easy Orders website.
 * Does not modify the Supplement Finder.
 * Opens automatically 7 seconds after site loads, once per browser tab session.
 * Public helper: window.openMedCareSafetyPopup()
 */
(() => {
  'use strict';

  const CONFIG = {
    logo: 'https://files.easy-orders.net/1789695346542392649.png',
    doctor: 'https://easyorders.fra1.digitaloceanspaces.com/1781078308680066101.png',
    whatsapp: 'https://api.whatsapp.com/send/?phone=201024348002&text=اترك+استفسارك+ل+د%2Fمازن+من+الساعة+3+عصرا+الى+9+مساءا+وبالرجاء+كتابة+التفاصيل+من+حيث+الوزن+-+الطول+-+العمر',
    offers: 'https://medcare-supplement.com/collections/Offers',
    autoOpenDelay: 7000, // 7 seconds after load
    showOncePerSession: true // Avoid re-opening across pages within the same browser tab.
  };

  const IDS = {
    style: 'medcare-trust-style-v1',
    overlay: 'medcare-trust-overlay-v1',
    popup: 'medcare-trust-popup-v1',
    title: 'medcare-trust-title-v1'
  };

  const sourceIcon = `<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9"/><path d="m9 15 2 2 4-4"/></svg>`;
  const calendarIcon = `<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/><path d="m9 15 2 2 4-4"/></svg>`;
  const packageIcon = `<svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="M3 7v10l9 5 9-5V7M12 12v10"/><path d="m8 14 2 2 4-4"/></svg>`;

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@700;800;900&family=Almarai:wght@400;700;800&display=swap');

    #${IDS.overlay}, #${IDS.overlay} * {
      box-sizing: border-box !important;
      font-family: 'Almarai', Tahoma, Arial, sans-serif !important;
    }
    #${IDS.overlay} button:focus-visible {
      outline: 3px solid #76B98B !important;
      outline-offset: 3px !important;
    }

    #${IDS.overlay} {
      position: fixed !important;
      inset: 0 !important;
      z-index: 2147483000 !important;
      display: none !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 14px !important;
      background: rgba(16, 26, 20, .58) !important;
      backdrop-filter: blur(4px) !important;
      -webkit-backdrop-filter: blur(4px) !important;
      direction: rtl !important;
    }
    #${IDS.overlay}.mct-active { display: flex !important; }

    #${IDS.popup} {
      position: relative !important;
      width: min(100%, 492px) !important;
      max-height: min(92vh, 800px) !important;
      max-height: min(92dvh, 800px) !important;
      overflow-y: auto !important;
      overscroll-behavior: contain !important;
      -webkit-overflow-scrolling: touch !important;
      border: 1px solid #E2EAE2 !important;
      border-radius: 24px !important;
      padding: 20px 23px 22px !important;
      background: #F8FAF7 !important;
      color: #101813 !important;
      box-shadow: 0 24px 70px rgba(9, 30, 17, .23) !important;
      text-align: center !important;
    }
    #${IDS.popup} button { font-family: inherit !important; }
    #${IDS.popup} .mct-close {
      position: absolute !important;
      top: 14px !important;
      left: 14px !important;
      width: 38px !important;
      height: 38px !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      border: 1px solid #DFE8DF !important;
      border-radius: 12px !important;
      background: #FFF !important;
      color: #25332A !important;
      font-size: 25px !important;
      line-height: 1 !important;
      cursor: pointer !important;
    }
    #${IDS.popup} .mct-logo {
      display: block !important;
      width: min(215px, 64%) !important;
      height: auto !important;
      max-height: 84px !important;
      object-fit: contain !important;
      margin: 1px auto 6px !important;
    }
    #${IDS.popup} .mct-person {
      position: relative !important;
      height: 188px !important;
      width: 216px !important;
      overflow: hidden !important;
      margin: 2px auto 11px !important;
      border-radius: 108px 108px 24px 24px !important;
      background: radial-gradient(ellipse at 50% 58%, #E9F4EC 0%, #F3F8F3 65%, #F8FAF7 100%) !important;
    }
    #${IDS.popup} .mct-person::after {
      content: '' !important;
      position: absolute !important;
      inset: auto 15px 0 !important;
      height: 2px !important;
      border-radius: 999px !important;
      background: #B7D7C1 !important;
    }
    #${IDS.popup} .mct-doctor {
      position: absolute !important;
      top: -24px !important;
      left: 50% !important;
      width: 199px !important;
      height: auto !important;
      max-width: none !important;
      transform: translateX(-50%) !important;
    }
    /* Title: the stronger green word is intentional, not fake stroke or glow. */
    #${IDS.popup} .mct-heading {
      margin: 4px 0 11px !important;
      padding: 0 3px !important;
      font-family: 'Alexandria', Tahoma, Arial, sans-serif !important;
      font-size: 30px !important;
      font-weight: 900 !important;
      line-height: 1.6 !important;
      letter-spacing: -.45px !important;
      color: #101813 !important;
      text-align: center !important;
      white-space: normal !important;
    }
    #${IDS.popup} .mct-heading .mct-green {
      color: #369766 !important;
      font-family: 'Alexandria', Tahoma, Arial, sans-serif !important;
      font-size: 38px !important;
      font-weight: 900 !important;
      white-space: nowrap !important;
    }
    #${IDS.popup} .mct-intro {
      max-width: 430px !important;
      margin: 0 auto 5px !important;
      font-family: 'Alexandria', Tahoma, Arial, sans-serif !important;
      color: #111A14 !important;
      font-size: 19px !important;
      font-weight: 800 !important;
      line-height: 1.9 !important;
      text-wrap: balance !important;
    }
    #${IDS.popup} .mct-intro strong {
      font-family: 'Alexandria', Tahoma, Arial, sans-serif !important;
      font-weight: 900 !important;
      color: #111A14 !important;
    }
    #${IDS.popup} .mct-job {
      margin: 0 auto 20px !important;
      font-family: 'Alexandria', Tahoma, Arial, sans-serif !important;
      color: #283B30 !important;
      font-size: 15.5px !important;
      font-weight: 700 !important;
      line-height: 1.85 !important;
    }
    #${IDS.popup} .mct-divider {
      width: 100% !important;
      height: 1px !important;
      margin: 0 0 8px !important;
      background: #E3EBE4 !important;
    }
    #${IDS.popup} .mct-benefits { margin: 0 !important; padding: 0 !important; list-style: none !important; text-align: right !important; }
    #${IDS.popup} .mct-benefit {
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      gap: 12px !important;
      margin: 0 !important;
      padding: 14px 2px !important;
      border-bottom: 1px solid #E6EEE7 !important;
      background: transparent !important;
    }
    #${IDS.popup} .mct-benefit:last-child { border-bottom: 0 !important; }
    #${IDS.popup} .mct-icon {
      display: inline-flex !important;
      flex: 0 0 42px !important;
      width: 42px !important;
      height: 42px !important;
      align-items: center !important;
      justify-content: center !important;
      border-radius: 13px !important;
      background: #E3F2E8 !important;
      color: #409969 !important;
    }
    #${IDS.popup} .mct-benefit-copy { flex: 1 !important; min-width: 0 !important; }
    #${IDS.popup} .mct-benefit-title {
      display: block !important;
      color: #121A15 !important;
      font-size: 15px !important;
      font-weight: 800 !important;
      line-height: 1.85 !important;
      margin: 0 !important;
    }
    #${IDS.popup} .mct-benefit-detail {
      display: block !important;
      margin-top: 2px !important;
      font-size: 13.5px !important;
      font-weight: 700 !important;
      line-height: 1.7 !important;
      color: #707D73 !important; /* user-requested grey for this one subtitle */
    }
    /* Two clear actions: contact the doctor or browse current offers. */
    #${IDS.popup} .mct-actions {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      align-items: stretch !important;
      gap: 10px !important;
      margin: 15px auto 0 !important;
    }
    #${IDS.popup} .mct-action {
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      min-width: 0 !important;
      min-height: 51px !important;
      padding: 12px 10px !important;
      border-radius: 12px !important;
      text-decoration: none !important;
      text-align: center !important;
      font-family: 'Alexandria', Tahoma, Arial, sans-serif !important;
      font-size: 14px !important;
      font-weight: 800 !important;
      line-height: 1.65 !important;
      box-shadow: none !important;
      transition: background-color 150ms ease, border-color 150ms ease !important;
    }
    #${IDS.popup} .mct-action-contact {
      background: #D9EEDF !important;
      color: #11241A !important;
      border: 1px solid #ADD7BB !important;
    }
    #${IDS.popup} .mct-action-contact:hover { background: #C8E5D0 !important; }
    #${IDS.popup} .mct-action-offers {
      background: #FFFFFF !important;
      color: #172F22 !important;
      border: 1px solid #B5D7BF !important;
    }
    #${IDS.popup} .mct-action-offers:hover { background: #EDF7EF !important; }
    #${IDS.popup} .mct-action:focus-visible {
      outline: 3px solid #76B98B !important;
      outline-offset: 3px !important;
    }

    @media (max-width: 480px) {
      #${IDS.overlay} { padding: 10px !important; }
      #${IDS.popup} { padding: 16px 17px 18px !important; border-radius: 21px !important; max-height: calc(100dvh - 20px) !important; }
      #${IDS.popup} .mct-logo { width: min(199px, 66%) !important; margin-top: 5px !important; margin-bottom: 4px !important; }
      #${IDS.popup} .mct-person { width: 202px !important; height: 166px !important; margin-bottom: 9px !important; }
      #${IDS.popup} .mct-doctor { width: 183px !important; top: -22px !important; }
      #${IDS.popup} .mct-heading { font-size: 25px !important; margin-bottom: 6px !important; line-height: 1.65 !important; letter-spacing: -.3px !important; }
      #${IDS.popup} .mct-heading .mct-green { font-size: 33px !important; }
      #${IDS.popup} .mct-intro { font-size: 16px !important; line-height: 1.85 !important; }
      #${IDS.popup} .mct-job { font-size: 13.2px !important; margin-bottom: 15px !important; }
      #${IDS.popup} .mct-benefit { gap: 10px !important; padding: 11px 0 !important; }
      #${IDS.popup} .mct-icon { width: 39px !important; height: 39px !important; flex-basis: 39px !important; }
      #${IDS.popup} .mct-benefit-title { font-size: 14px !important; line-height: 1.85 !important; }
      #${IDS.popup} .mct-benefit-detail { font-size: 12.4px !important; }
      #${IDS.popup} .mct-actions { grid-template-columns: 1fr !important; gap: 8px !important; margin-top: 12px !important; }
      #${IDS.popup} .mct-action { min-height: 48px !important; font-size: 13px !important; padding: 10px 12px !important; }
    }

    @media (max-height: 650px) {
      #${IDS.popup} .mct-benefit { padding-top: 10px !important; padding-bottom: 10px !important; }
    }

    @media (prefers-reduced-motion: reduce) {
      #${IDS.overlay} { scroll-behavior: auto !important; }
    }
  `;

  let oldOverflow = '';
  let lastFocus = null;
  const sessionKey = 'medcare-trust-autoshow-v3';
  let scheduled = false;

  function alreadyShownThisSession() {
    try { return CONFIG.showOncePerSession && sessionStorage.getItem(sessionKey) === 'yes'; }
    catch (_) { return false; }
  }

  function rememberShown() {
    if (!CONFIG.showOncePerSession) return;
    try { sessionStorage.setItem(sessionKey, 'yes'); } catch (_) { /* storage may be unavailable */ }
  }

  function openPopup() {
    const overlay = document.getElementById(IDS.overlay);
    if (!overlay || overlay.classList.contains('mct-active')) return;
    lastFocus = document.activeElement;
    oldOverflow = document.body.style.overflow;
    overlay.classList.add('mct-active');
    rememberShown();
    document.body.style.overflow = 'hidden';
    overlay.querySelector('.mct-close').focus();
  }

  function closePopup() {
    const overlay = document.getElementById(IDS.overlay);
    if (!overlay || !overlay.classList.contains('mct-active')) return;
    overlay.classList.remove('mct-active');
    document.body.style.overflow = oldOverflow;
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  function onKeydown(event) {
    const overlay = document.getElementById(IDS.overlay);
    if (!overlay || !overlay.classList.contains('mct-active')) return;
    if (event.key === 'Escape') { closePopup(); return; }
    if (event.key === 'Tab') {
      const elements = [...overlay.querySelectorAll('button:not([disabled]), a[href]')];
      if (!elements.length) return;
      const first = elements[0];
      const last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  }

  function init() {
    // Keep this component isolated from any other popup on the store.
    if (document.getElementById(IDS.overlay)) return;

    const style = document.createElement('style');
    style.id = IDS.style;
    style.textContent = css;
    document.head.appendChild(style);

    const overlay = document.createElement('div');
    overlay.id = IDS.overlay;
    overlay.innerHTML = `
      <section id="${IDS.popup}" role="dialog" aria-modal="true" aria-labelledby="${IDS.title}" dir="rtl">
        <button class="mct-close" type="button" aria-label="إغلاق النافذة">&times;</button>
        <img class="mct-logo" src="${CONFIG.logo}" alt="MedCare" loading="eager" decoding="async" />
        <div class="mct-person">
          <img class="mct-doctor" src="${CONFIG.doctor}" alt="د. مازن مجدي" loading="eager" decoding="async" />
        </div>
        <h2 id="${IDS.title}" class="mct-heading">تسوّق <span class="mct-green">بأمان</span></h2>
        <p class="mct-intro">جميع المنتجات تحت إشراف <strong>د. مازن مجدي</strong></p>
        <p class="mct-job">طبيب بشري / جامعة الزقازيق</p>
        <div class="mct-divider"></div>
        <ul class="mct-benefits">
          <li class="mct-benefit">
            <span class="mct-icon">${sourceIcon}</span>
            <div class="mct-benefit-copy">
              <strong class="mct-benefit-title">لا نتعامل مع موزعين غير معتمدين</strong>
              <span class="mct-benefit-detail">من المصادر الرسمية فقط</span>
            </div>
          </li>
          <li class="mct-benefit">
            <span class="mct-icon">${calendarIcon}</span>
            <div class="mct-benefit-copy">
              <strong class="mct-benefit-title">لا يوجد تلاعب بتاريخ صلاحية المنتجات</strong>
            </div>
          </li>
          <li class="mct-benefit">
            <span class="mct-icon">${packageIcon}</span>
            <div class="mct-benefit-copy">
              <strong class="mct-benefit-title">لا توجد منتجات تم التلاعب بمحتواها أو استبداله</strong>
            </div>
          </li>
        </ul>
        <div class="mct-actions" aria-label="اختيارات المتابعة">
          <a class="mct-action mct-action-contact" href="${CONFIG.whatsapp.replace(/&/g, '&amp;')}" target="_blank" rel="noopener noreferrer">للتواصل مع د/مازن</a>
          <a class="mct-action mct-action-offers" href="${CONFIG.offers}">لمعرفة العروض الحالية</a>
        </div>
      </section>`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', (event) => {
      if (event.target === overlay || event.target.closest('.mct-close')) closePopup();
    });
    overlay.querySelector('.mct-action-contact').addEventListener('click', closePopup);
    document.addEventListener('keydown', onKeydown);

    // No floating trigger anywhere. Show automatically after 7 seconds.
    // Once per tab session avoids repeatedly interrupting customers as they navigate.
    if (!scheduled && !alreadyShownThisSession()) {
      scheduled = true;
      window.setTimeout(() => {
        if (!alreadyShownThisSession() && document.getElementById(IDS.overlay)) openPopup();
      }, CONFIG.autoOpenDelay);
    }
  }

  window.openMedCareSafetyPopup = openPopup;
  window.closeMedCareSafetyPopup = closePopup;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
