<style id="LimitlessSupplementFinderStyle">
  @import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@400;500;600;700;800&display=swap");

  #LimitlessFinderFloatingBtn {
    position: fixed !important;
    right: 12px !important;
    left: auto !important;
    top: 50% !important;
    bottom: auto !important;
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
    font-family: "Readex Pro", Arial, sans-serif !important;
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
    letter-spacing: 0 !important;
    line-height: 1.18 !important;
    text-align: center !important;
    transform: translateY(-50%) !important;
    animation: lsfButtonShake 4.5s ease-in-out infinite !important;
  }

  #LimitlessFinderFloatingBtn::before {
    content: "" !important;
    width: 7px !important;
    height: 7px !important;
    border-radius: 50% !important;
    background: #25D366 !important;
    box-shadow: none !important;
    display: block !important;
    margin-bottom: 2px !important;
  }

  #LimitlessFinderFloatingBtn span {
    display: block !important;
    line-height: 1.15 !important;
  }

  #LimitlessFinderFloatingBtn:hover {
    animation-play-state: paused !important;
    transform: translateY(calc(-50% - 2px)) !important;
    border-color: rgba(37, 211, 102, 0.9) !important;
    box-shadow: 0 16px 42px rgba(0, 0, 0, 0.48) !important;
  }

  #LimitlessFinderOverlay {
    position: fixed !important;
    inset: 0 !important;
    z-index: 2147483001 !important;
    background: rgba(0, 0, 0, 0.78) !important;
    display: none !important;
    align-items: center !important;
    justify-content: center !important;
    padding: 18px !important;
    box-sizing: border-box !important;
  }

  #LimitlessFinderOverlay.active {
    display: flex !important;
  }

  #LimitlessSupplementFinder {
    width: 100% !important;
    max-width: 1080px !important;
    max-height: 92vh !important;
    overflow-y: auto !important;
    box-sizing: border-box !important;
    padding: 28px 14px !important;
    color: #ffffff !important;
    font-family: "Readex Pro", Arial, sans-serif !important;
    direction: rtl !important;
    text-align: center !important;
    position: relative !important;
    border-radius: 30px !important;
    box-shadow: 0 28px 95px rgba(0, 0, 0, 0.72) !important;
    background: linear-gradient(135deg, #000000 0%, #101010 48%, #050505 100%) !important;
    isolation: isolate !important;
  }

  #LimitlessSupplementFinder::before {
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

  #LimitlessSupplementFinder * {
    box-sizing: border-box !important;
    font-family: "Readex Pro", Arial, sans-serif !important;
  }

  #LimitlessFinderClose {
    position: absolute !important;
    top: 14px !important;
    left: 14px !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50% !important;
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
    background: rgba(255, 255, 255, 0.08) !important;
    color: #fff !important;
    font-size: 25px !important;
    line-height: 1 !important;
    cursor: pointer !important;
    z-index: 5 !important;
  }

  #LimitlessFinderClose:hover {
    background: rgba(255, 255, 255, 0.16) !important;
  }

  .lsf-box {
    max-width: 1010px !important;
    margin: 0 auto !important;
    border: 1px solid rgba(37, 211, 102, 0.22) !important;
    border-radius: 26px !important;
    padding: 32px 20px 26px !important;
    background: rgba(12, 12, 12, 0.78) !important;
    box-shadow: 0 22px 70px rgba(0, 0, 0, 0.48) !important;
    backdrop-filter: blur(10px) !important;
  }

  .lsf-badge {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    min-height: 32px !important;
    padding: 7px 15px !important;
    border-radius: 999px !important;
    background: rgba(37, 211, 102, 0.12) !important;
    border: 1px solid rgba(37, 211, 102, 0.38) !important;
    font-size: 12px !important;
    margin-bottom: 13px !important;
    color: #25D366 !important;
    font-weight: 600 !important;
  }

  .lsf-title {
    font-size: clamp(25px, 4vw, 44px) !important;
    font-weight: 800 !important;
    margin: 0 0 8px !important;
    line-height: 1.25 !important;
    letter-spacing: -0.6px !important;
    color: #ffffff !important;
  }

  .lsf-title span {
    display: inline-block !important;
    padding: 2px 10px !important;
    border-radius: 999px !important;
    background: linear-gradient(135deg, #25D366 0%, #25D366 100%) !important;
    color: #000000 !important;
    text-shadow: none !important;
  }

  .lsf-subtitle {
    margin: 0 auto 22px !important;
    max-width: 690px !important;
    color: #d6d6d6 !important;
    font-size: 14px !important;
    line-height: 1.9 !important;
    font-weight: 400 !important;
  }

  .lsf-progress {
    width: 100% !important;
    max-width: 590px !important;
    height: 8px !important;
    border-radius: 999px !important;
    background: rgba(255, 255, 255, 0.11) !important;
    margin: 0 auto 24px !important;
    overflow: hidden !important;
  }

  .lsf-progress-fill {
    height: 100% !important;
    width: 45% !important;
    background: linear-gradient(90deg, #B7F5C8, #25D366) !important;
    border-radius: 999px !important;
    transition: 0.35s ease !important;
  }

  #lsfContent {
    animation: lsfFade 0.28s ease !important;
  }

  .lsf-step {
    display: inline-block !important;
    color: #25D366 !important;
    font-size: 12px !important;
    font-weight: 700 !important;
    margin-bottom: 12px !important;
  }

  .lsf-question h3,
  .lsf-result h3 {
    font-size: clamp(22px, 3vw, 32px) !important;
    margin: 0 0 12px !important;
    color: #ffffff !important;
    line-height: 1.45 !important;
    font-weight: 800 !important;
  }

  .lsf-question p,
  .lsf-result p {
    max-width: 720px !important;
    margin: 0 auto 20px !important;
    color: #dddddd !important;
    line-height: 1.85 !important;
    font-size: 14px !important;
  }

  .lsf-options {
    display: grid !important;
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    gap: 14px !important;
    max-width: 840px !important;
    margin: 0 auto !important;
  }

  .lsf-option {
    min-height: 108px !important;
    border: 1px solid rgba(255, 255, 255, 0.13) !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.105), rgba(37, 211, 102, 0.075)) !important;
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

  .lsf-option::before {
    content: "" !important;
    position: absolute !important;
    right: 0 !important;
    top: 18px !important;
    width: 4px !important;
    height: calc(100% - 36px) !important;
    border-radius: 999px 0 0 999px !important;
    background: linear-gradient(180deg, #25D366 0%, #25D366 100%) !important;
    box-shadow: none !important;
  }

  .lsf-option:hover {
    transform: translateY(-4px) !important;
    background: rgba(37, 211, 102, 0.12) !important;
    border-color: rgba(37, 211, 102, 0.62) !important;
    box-shadow: 0 16px 38px rgba(0, 0, 0, 0.35) !important;
  }

  .lsf-option strong {
    display: block !important;
    font-size: 16px !important;
    margin-bottom: 8px !important;
    color: #ffffff !important;
    line-height: 1.65 !important;
    font-weight: 800 !important;
  }

  .lsf-option small {
    display: block !important;
    color: #d6d6d6 !important;
    line-height: 1.7 !important;
    font-size: 12px !important;
    font-weight: 400 !important;
  }

  .lsf-keyword {
    display: inline-block !important;
    color: #25D366 !important;
    font-weight: 900 !important;
    padding: 0 3px !important;
    border-bottom: 0 !important;
    text-decoration: none !important;
    text-shadow: none !important;
  }

  .lsf-option small .lsf-keyword,
  .lsf-result p .lsf-keyword,
  .lsf-question p .lsf-keyword {
    color: #B7F5C8 !important;
    font-weight: 800 !important;
  }

  .lsf-option:hover .lsf-keyword {
    color: #000000 !important;
    background: #25D366 !important;
    border-bottom-color: transparent !important;
    border-radius: 7px !important;
    text-shadow: none !important;
  }

  .lsf-actions {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
    flex-wrap: wrap !important;
    margin-top: 24px !important;
  }

  .lsf-back,
  .lsf-consult,
  .lsf-restart {
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

  .lsf-back {
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
    background: rgba(255, 255, 255, 0.08) !important;
    color: #fff !important;
  }

  .lsf-back:disabled {
    opacity: 0.45 !important;
    cursor: not-allowed !important;
  }

  .lsf-consult {
    border: 1px solid rgba(37, 211, 102, 0.82) !important;
    background: linear-gradient(135deg, #25D366 0%, #25D366 100%) !important;
    color: #000000 !important;
  }

  .lsf-restart {
    border: 1px solid rgba(255, 255, 255, 0.22) !important;
    background: rgba(255, 255, 255, 0.1) !important;
    color: #fff !important;
  }

  .lsf-back:hover,
  .lsf-consult:hover,
  .lsf-restart:hover {
    transform: translateY(-2px) !important;
  }

  .lsf-products-grid {
    display: grid !important;
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
    gap: 16px !important;
    max-width: 960px !important;
    margin: 24px auto 0 !important;
  }

  .lsf-product-card {
    background: #fff !important;
    color: #000 !important;
    border-radius: 22px !important;
    padding: 12px !important;
    text-align: right !important;
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35) !important;
    min-height: 420px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-between !important;
    overflow: hidden !important;
    position: relative !important;
  }

  .lsf-product-image-box {
    width: 100% !important;
    height: 270px !important;
    border-radius: 18px !important;
    background: #f4f4f5 !important;
    overflow: hidden !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-bottom: 13px !important;
  }

  .lsf-product-image {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain !important;
    display: block !important;
    padding: 4px !important;
  }

  .lsf-product-placeholder {
    width: 78px !important;
    height: 78px !important;
    border-radius: 18px !important;
    background: linear-gradient(135deg, #e5e7eb, #f9fafb) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    color: #777 !important;
    font-size: 11px !important;
    text-align: center !important;
    line-height: 1.5 !important;
  }

  .lsf-card-kicker {
    display: inline-flex !important;
    width: fit-content !important;
    padding: 5px 10px !important;
    border-radius: 999px !important;
    background: #B7F5C8 !important;
    color: #1a1a1a !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    margin-bottom: 9px !important;
  }

  .lsf-product-card h4 {
    margin: 0 0 8px !important;
    font-size: 15px !important;
    color: #000 !important;
    line-height: 1.5 !important;
    font-weight: 800 !important;
    direction: ltr !important;
    text-align: left !important;
    min-height: 46px !important;
  }

  .lsf-product-price {
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    direction: ltr !important;
    margin: 0 0 12px !important;
    min-height: 27px !important;
    white-space: nowrap !important;
  }

  .lsf-current-price {
    color: #128C3F !important;
    font-size: 18px !important;
    font-weight: 900 !important;
  }

  .lsf-price-loading {
    color: #777 !important;
    font-size: 12px !important;
    font-weight: 600 !important;
  }

  .lsf-product-card p {
    margin: 0 0 14px !important;
    color: #555 !important;
    font-size: 12px !important;
    line-height: 1.7 !important;
    text-align: right !important;
  }

  .lsf-buy-btn {
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 100% !important;
    min-height: 43px !important;
    padding: 0 16px !important;
    border-radius: 999px !important;
    border: 1px solid rgba(37, 211, 102, 0.72) !important;
    background: #000 !important;
    color: #B7F5C8 !important;
    text-decoration: none !important;
    font-weight: 800 !important;
    font-size: 12px !important;
  }

  .lsf-medical-note {
    background: #000000 !important;
    color: #B7F5C8 !important;
    border-radius: 14px !important;
    padding: 10px !important;
    font-size: 12px !important;
    line-height: 1.7 !important;
    margin-top: 10px !important;
  }

  @keyframes lsfButtonShake {
    0%,
    82%,
    100% {
      transform: translateY(-50%) translateX(0);
    }

    85% {
      transform: translateY(-50%) translateX(-4px);
    }

    88% {
      transform: translateY(-50%) translateX(4px);
    }

    91% {
      transform: translateY(-50%) translateX(-3px);
    }

    94% {
      transform: translateY(-50%) translateX(3px);
    }

    97% {
      transform: translateY(-50%) translateX(-1px);
    }
  }

  @keyframes lsfFade {
    from {
      opacity: 0;
      transform: translateY(12px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 900px) {
    .lsf-products-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
    }
  }

  @media (max-width: 760px) {
    #LimitlessFinderFloatingBtn {
      right: 8px !important;
      left: auto !important;
      top: 50% !important;
      bottom: auto !important;
      width: 70px !important;
      min-width: 70px !important;
      height: 74px !important;
      font-size: 10px !important;
      padding: 7px 6px !important;
      border-radius: 18px 0 0 18px !important;
    }

    #LimitlessFinderOverlay {
      padding: 10px !important;
    }

    #LimitlessSupplementFinder {
      padding: 22px 10px !important;
      border-radius: 22px !important;
      max-height: 90vh !important;
    }

    .lsf-box {
      padding: 25px 12px 20px !important;
      border-radius: 22px !important;
    }

    .lsf-options,
    .lsf-products-grid {
      grid-template-columns: 1fr !important;
      gap: 12px !important;
    }

    .lsf-option {
      min-height: auto !important;
      padding: 16px 13px !important;
    }

    .lsf-actions {
      flex-direction: column !important;
    }

    .lsf-back,
    .lsf-consult,
    .lsf-restart {
      width: 100% !important;
    }

    .lsf-product-card {
      min-height: auto !important;
    }

    .lsf-product-image-box {
      height: 280px !important;
    }
  }
</style>

<script>
  (function () {
    const CONFIG = {
      sectionId: "LimitlessSupplementFinder",
      overlayId: "LimitlessFinderOverlay",
      buttonId: "LimitlessFinderFloatingBtn",
      whatsappLink: "https://wa.me/201024348002"
    };

    const PRODUCTS = {
      mass_3000: [
        {
          slug: "Badass-Mass",
          title: "Badass Mass"
        },
        {
          slug: "Nutriversum-Massgainer",
          title: "Nutriversum Massgainer"
        }
      ],

      mass_1000: [
        {
          slug: "creatine-citrulline-carb-offer",
          title: "Creatine Citrulline Carb Offer"
        },
        {
          slug: "Griffin-Mass-Gainer-6Kg",
          title: "Griffin Mass Gainer 6Kg"
        },
        {
          slug: "anabolic-carb-creatine-offer",
          title: "Anabolic Carb Creatine Offer"
        },
        {
          slug: "Xtreme-Mass-Gainer",
          title: "Xtreme Mass Gainer"
        },
        {
          slug: "unlimited-mass-gainer-anabolic-creatine",
          title: "Unlimited Mass Gainer + Anabolic Creatine"
        }
      ],

      mass_under_1000: [
        {
          slug: "Unlimited-Mass",
          title: "Unlimited Mass"
        },
        {
          slug: "Carb",
          title: "Carb"
        },
        {
          slug: "Griffin-Mass-Gainer-3Kg",
          title: "Griffin Mass Gainer 3Kg"
        }
      ],

      muscle_creatine: [
        {
          slug: "Anabolic-Creatine-200Serv",
          title: "Anabolic Creatine 200 Serv"
        },
        {
          slug: "Dy-Creatine",
          title: "DY Creatine"
        },
        {
          slug: "CreaForce-Creatine-Creapure",
          title: "CreaForce Creatine Creapure"
        },
        {
          slug: "CreaPower",
          title: "CreaPower"
        },
        {
          slug: "BADASS-Creatine",
          title: "BADASS Creatine"
        }
      ],

      muscle_creatine_citrulline: [
        {
          slug: "citrulline-malate-anabolic-creatine-pump",
          title: "Citrulline Malate + Anabolic Creatine Pump"
        },
        {
          slug: "CreaForce-Creapure-Creatine-Citrulline",
          title: "CreaForce Creapure Creatine Citrulline"
        },
        {
          slug: "creapower-creapure-citrulline-malate",
          title: "CreaPower Creapure Citrulline Malate"
        },
        {
          slug: "creatine-citrulline-carb-offer",
          title: "Creatine Citrulline Carb Offer"
        },
        {
          slug: "anabolic-carb-creatine-offer",
          title: "Anabolic Carb Creatine Offer"
        }
      ],

      muscle_whey_creatine: [
        {
          slug: "whey-concentrate-anabolic-creatine",
          title: "Whey Concentrate + Anabolic Creatine"
        },
        {
          slug: "evolve-whey-protein-creatine-offers",
          title: "Evolve Whey Protein + Creatine Offers"
        },
        {
          slug: "Gold-Whey-Isolate-Creatine-Offer",
          title: "Gold Whey Isolate + Creatine Offer"
        }
      ],

      fat_strong: [
        {
          slug: "Black-Spider-Fat-Burner",
          title: "Black Spider Fat Burner"
        },
        {
          slug: "Lipo6",
          title: "Lipo 6"
        },
        {
          slug: "Retatrutide",
          title: "Retatrutide",
          note: "يأخذ بعد استشارة طبيب"
        }
      ],

      fat_light: [
        {
          slug: "Gold-Whey-Isolate-Creatine-Offer",
          title: "Gold Whey Isolate + Creatine Offer"
        },
        {
          slug: "Xtreme-Whey-Blend",
          title: "Xtreme Whey Blend"
        },
        {
          slug: "evolve-whey-protein-creatine-offers",
          title: "Evolve Whey Protein + Creatine Offers"
        },
        {
          slug: "Gold-Isolate",
          title: "Gold Isolate"
        }
      ],

      pump_energy: [
        {
          slug: "Anabolic-Crazy-Pump-Preworkout",
          title: "Anabolic Crazy Pump Preworkout"
        },
        {
          slug: "Pureganic-Preworkout",
          title: "Pureganic Preworkout"
        },
        {
          slug: "Strongmuscles-Citrulline",
          title: "Strongmuscles Citrulline"
        },
        {
          slug: "Citrulline-Malate",
          title: "Citrulline Malate"
        }
      ]
    };

    const SCREENS = {
      goal: {
        progress: 45,
        step: "السؤال 1 من 2",
        title: "ما هو هدفك؟",
        subtitle: "اختار الهدف الأقرب ليك، وبعدها هنرشحلك المنتجات المناسبة حسب احتياجك.",
        options: [
          {
            label: "وزني خاسس ومحتاج جسمي يزيد",
            note: "اختيارات للضخامة وزيادة الوزن",
            next: "massBudget"
          },
          {
            label: "وزني مظبوط ومحتاج أزود الكتلة العضلية فقط",
            note: "اختيارات لبناء عضل بدون زيادة وزن كبيرة",
            next: "muscleBudget"
          },
          {
            label: "وزني زايد ومحتاج أخس",
            note: "اختيارات للتخسيس ودعم التمرين",
            next: "fatLoss"
          },
          {
            label: "محتاج أزود قوة التحمل والطاقة وضخ الدم للعضلات",
            note: "اختيارات للطاقة والـ Pump قبل التمرين",
            result: "pump_energy"
          }
        ]
      },

      massBudget: {
        progress: 72,
        step: "السؤال 2 من 2",
        title: "المبلغ اللي محدده للضخامة وزيادة الوزن",
        subtitle: "حدد الميزانية المناسبة ليك علشان نرشحلك أفضل اختيارات للضخامة.",
        options: [
          {
            label: "في حدود 3000 ج",
            note: "اختيارات أعلى للضخامة وزيادة الوزن",
            result: "mass_3000"
          },
          {
            label: "في حدود 1000 ج",
            note: "اختيارات متوسطة وعملية",
            result: "mass_1000"
          },
          {
            label: "تحت 1000 ج",
            note: "اختيارات اقتصادية للضخامة",
            result: "mass_under_1000"
          }
        ]
      },

      muscleBudget: {
        progress: 72,
        step: "السؤال 2 من 2",
        title: "اختار الاختيار الأنسب لك",
        subtitle: "حدد مستوى الميزانية والمكملات اللي محتاجها لبناء كتلة عضلية.",
        options: [
          {
            label: "ميزانيتي قليلة محتاج كرياتين فقط",
            note: "اختيارات كرياتين أساسية ومباشرة",
            result: "muscle_creatine"
          },
          {
            label: "ميزانيتي متوسطة محتاج كرياتين + سترولين",
            note: "اختيارات للأداء والضخ العضلي",
            result: "muscle_creatine_citrulline"
          },
          {
            label: "ميزانيتي عالية محتاج كرياتين + واي بروتين",
            note: "اختيارات لبناء العضلات ودعم البروتين اليومي",
            result: "muscle_whey_creatine"
          }
        ]
      },

      fatLoss: {
        progress: 72,
        step: "السؤال 2 من 2",
        title: "اختر المناسب لك",
        subtitle: "حدد حالتك الأقرب علشان تظهرلك الترشيحات المناسبة للتخسيس.",
        options: [
          {
            label: "وزني زايد جدا ومحتاج حارق دهون بشكل مباشر",
            note: "اختيارات مخصصة للتخسيس القوي مع ضرورة الالتزام بالنظام الغذائي",
            result: "fat_strong"
          },
          {
            label: "وزني زايد بنسبة بسيطة",
            note: "واي بروتين أيزوليت + كرياتين + تمرين",
            result: "fat_light"
          }
        ]
      }
    };

    const RESULT_TEXT = {
      mass_3000: {
        title: "أفضل ترشيحات للضخامة ضمن ميزانية 3000 ج",
        text: "الاختيارات دي مناسبة لو هدفك زيادة الوزن والضخامة بميزانية أعلى."
      },
      mass_1000: {
        title: "أفضل ترشيحات للضخامة ضمن ميزانية 1000 ج",
        text: "الاختيارات دي مناسبة لو محتاج حلول عملية للضخامة بسعر متوسط."
      },
      mass_under_1000: {
        title: "أفضل ترشيحات للضخامة تحت 1000 ج",
        text: "الاختيارات دي مناسبة لو محتاج بداية اقتصادية لزيادة الوزن."
      },
      muscle_creatine: {
        title: "أفضل ترشيحات كرياتين فقط",
        text: "الاختيارات دي مناسبة لو ميزانيتك قليلة وهدفك دعم القوة والأداء وبناء الكتلة العضلية."
      },
      muscle_creatine_citrulline: {
        title: "أفضل ترشيحات كرياتين + سترولين",
        text: "الاختيارات دي مناسبة لو عايز تجمع بين القوة والضخ العضلي والأداء الأفضل في التمرين."
      },
      muscle_whey_creatine: {
        title: "أفضل ترشيحات كرياتين + واي بروتين",
        text: "الاختيارات دي مناسبة لو ميزانيتك أعلى وعايز تدعم بناء العضلات بالبروتين والكرياتين."
      },
      fat_strong: {
        title: "أفضل ترشيحات للتخسيس القوي",
        text: "الاختيارات دي موجهة للتخسيس الأقوى، ويفضل استشارة مختص خصوصا مع أي حالة صحية أو أدوية."
      },
      fat_light: {
        title: "أفضل ترشيحات للتخسيس البسيط مع التمرين",
        text: "الاختيارات دي مناسبة لو وزنك زايد بنسبة بسيطة وعايز بروتين أنضف مع دعم الأداء في التمرين."
      },
      pump_energy: {
        title: "أفضل ترشيحات للطاقة والتحمل وضخ الدم",
        text: "الاختيارات دي مناسبة قبل التمرين لدعم الطاقة والتحمل والإحساس بالـ Pump."
      }
    };

    const productCache = {};
    let previousBodyOverflow = "";
    let currentScreen = "goal";
    let historyStack = [];
    let userClosedFinder = false;
    let finderOpenedOnce = false;

    function ready(fn) {
      if (document.readyState !== "loading") {
        fn();
      } else {
        document.addEventListener("DOMContentLoaded", fn);
      }
    }

    function removeOldFinder() {
      const oldOverlay = document.getElementById(CONFIG.overlayId);
      const oldButton = document.getElementById(CONFIG.buttonId);

      if (oldOverlay) {
        oldOverlay.remove();
      }

      if (oldButton) {
        oldButton.remove();
      }
    }

    function createFloatingButton() {
      const btn = document.createElement("button");

      btn.id = CONFIG.buttonId;
      btn.type = "button";
      btn.innerHTML = "<span>اعرف</span><span>مكملك</span><span>المناسب</span>";

      btn.addEventListener(
        "click",
        function (e) {
          e.preventDefault();
          e.stopPropagation();
          openFinder();
        },
        true
      );

      document.body.appendChild(btn);
    }

    function createFinderPopup() {
      const overlay = document.createElement("div");

      overlay.id = CONFIG.overlayId;

      overlay.innerHTML = `
        <section id="${CONFIG.sectionId}">
          <button type="button" id="LimitlessFinderClose" aria-label="Close">×</button>

          <div class="lsf-box">
            <h2 class="lsf-title">
              اكتشف المكمل <span>الأنسب لهدفك</span>
            </h2>

            <p class="lsf-subtitle">
              جاوب على سؤالين سريعين، وهيظهرلك ترشيح مناسب حسب هدفك وميزانيتك.
            </p>

            <div id="lsfCouponBox" style="width:100%;max-width:760px;margin:0 auto 22px;padding:1px;border-radius:19px;background:linear-gradient(135deg,rgba(37,211,102,.95),rgba(183,245,200,.48),rgba(37,211,102,.9));box-shadow:0 15px 35px rgba(0,0,0,.35),0 0 0 1px rgba(37,211,102,.18);box-sizing:border-box;">
              <div style="width:100%;min-height:54px;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap;padding:11px 14px;border-radius:18px;background:radial-gradient(circle at 18% 50%,rgba(37,211,102,.2),transparent 34%),linear-gradient(135deg,#020202 0%,#101010 54%,#052b14 100%);box-sizing:border-box;">
                <span style="display:inline-flex;align-items:center;justify-content:center;min-height:24px;padding:5px 11px;border-radius:999px;border:1px solid rgba(37,211,102,.55);background:rgba(37,211,102,.12);color:#B7F5C8;font-size:11px;font-weight:900;line-height:1;white-space:nowrap;box-sizing:border-box;">عرض لأول طلب فقط</span>
                <span style="color:#fff;font-size:13px;font-weight:900;line-height:1.7;text-align:center;box-sizing:border-box;">كوبون خصم لأول طلب للاستفادة بخصم أعلى</span>
                <b style="direction:ltr;display:inline-flex;align-items:center;justify-content:center;min-height:30px;padding:6px 14px;border-radius:999px;background:#25D366;color:#000;font-size:14px;font-weight:900;line-height:1;letter-spacing:.25px;box-shadow:0 0 0 3px rgba(37,211,102,.14);white-space:nowrap;box-sizing:border-box;">Limitless50</b>
              </div>
            </div>

            <div class="lsf-progress">
              <div class="lsf-progress-fill" id="lsfProgressFill"></div>
            </div>

            <div id="lsfContent"></div>
          </div>
        </section>
      `;

      document.body.appendChild(overlay);
      bindFinderEvents();
      renderScreen("goal");
    }

    function openFinder() {
      const overlay = document.getElementById(CONFIG.overlayId);

      if (!overlay) {
        return;
      }

      finderOpenedOnce = true;
      previousBodyOverflow = document.body.style.overflow || "";
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }

    function closeFinder() {
      const overlay = document.getElementById(CONFIG.overlayId);

      if (!overlay) {
        return;
      }

      userClosedFinder = true;
      overlay.classList.remove("active");
      document.body.style.overflow = previousBodyOverflow;
    }

    function bindFinderEvents() {
      const overlay = document.getElementById(CONFIG.overlayId);
      const content = document.getElementById("lsfContent");

      if (!overlay || !content) {
        return;
      }

      overlay.addEventListener(
        "click",
        function (event) {
          const closeButton = event.target.closest("#LimitlessFinderClose");

          if (closeButton) {
            event.preventDefault();
            event.stopPropagation();
            closeFinder();
            return;
          }

          if (event.target === overlay) {
            closeFinder();
          }
        },
        true
      );

      content.addEventListener(
        "click",
        function (event) {
          const option = event.target.closest(".lsf-option");
          const back = event.target.closest("[data-lsf-back]");
          const restart = event.target.closest("[data-lsf-restart]");

          if (option) {
            event.preventDefault();
            event.stopPropagation();

            const nextScreen = option.getAttribute("data-next");
            const resultKey = option.getAttribute("data-result");

            if (nextScreen) {
              goToScreen(nextScreen);
            } else if (resultKey) {
              showResult(resultKey);
            }

            return;
          }

          if (back) {
            event.preventDefault();
            event.stopPropagation();
            goBack();
            return;
          }

          if (restart) {
            event.preventDefault();
            event.stopPropagation();
            restartFinder();
          }
        },
        true
      );

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeFinder();
        }
      });
    }

    function goToScreen(screenName) {
      historyStack.push(currentScreen);
      currentScreen = screenName;
      renderScreen(screenName);
    }

    function showResult(resultKey) {
      historyStack.push(currentScreen);
      currentScreen = "result:" + resultKey;
      renderResult(resultKey);
    }

    function goBack() {
      if (!historyStack.length) {
        return;
      }

      const previous = historyStack.pop();

      currentScreen = previous;

      if (previous.indexOf("result:") === 0) {
        renderResult(previous.replace("result:", ""));
      } else {
        renderScreen(previous);
      }
    }

    function restartFinder() {
      historyStack = [];
      currentScreen = "goal";
      renderScreen("goal");
    }

    function setProgress(width) {
      const progressFill = document.getElementById("lsfProgressFill");

      if (progressFill) {
        progressFill.style.width = width + "%";
      }
    }

    function renderScreen(screenName) {
      const screen = SCREENS[screenName];
      const content = document.getElementById("lsfContent");

      if (!screen || !content) {
        return;
      }

      setProgress(screen.progress);

      const optionsHtml = screen.options
        .map(function (option) {
          const nextAttr = option.next ? `data-next="${escapeHtml(option.next)}"` : "";
          const resultAttr = option.result ? `data-result="${escapeHtml(option.result)}"` : "";

          return `
            <button type="button" class="lsf-option" ${nextAttr} ${resultAttr}>
              <strong>${highlightImportant(option.label)}</strong>
              <small>${highlightImportant(option.note || "")}</small>
            </button>
          `;
        })
        .join("");

      content.innerHTML = `
        <div class="lsf-question">
          <span class="lsf-step">${escapeHtml(screen.step)}</span>

          <h3>${highlightImportant(screen.title)}</h3>

          <p>${highlightImportant(screen.subtitle)}</p>

          <div class="lsf-options">
            ${optionsHtml}
          </div>

          <div class="lsf-actions">
            <button type="button" class="lsf-back" data-lsf-back ${historyStack.length ? "" : "disabled"}>
              رجوع
            </button>

            <a class="lsf-consult" href="${CONFIG.whatsappLink}" target="_blank" rel="noopener">
              استشارة مع د/مازن
            </a>
          </div>
        </div>
      `;
    }

    function renderResult(resultKey) {
      const content = document.getElementById("lsfContent");
      const resultInfo = RESULT_TEXT[resultKey];
      const products = PRODUCTS[resultKey] || [];

      if (!content || !resultInfo) {
        return;
      }

      setProgress(100);

      const productsHtml = products
        .map(function (product) {
          return renderProductCard(product);
        })
        .join("");

      content.innerHTML = `
        <div class="lsf-result">
          <span class="lsf-step">النتيجة</span>

          <h3>${highlightImportant(resultInfo.title)}</h3>

          <p>${highlightImportant(resultInfo.text)}</p>

          <div class="lsf-products-grid">
            ${productsHtml}
          </div>

          <div class="lsf-actions">
            <button type="button" class="lsf-back" data-lsf-back>
              رجوع
            </button>

            <button type="button" class="lsf-restart" data-lsf-restart>
              ابدأ من جديد
            </button>

            <a class="lsf-consult" href="${CONFIG.whatsappLink}" target="_blank" rel="noopener">
              استشارة مع د/مازن
            </a>
          </div>
        </div>
      `;

      loadVisibleProductData(products);
    }

    function renderProductCard(product) {
      if (product.medicalOnly) {
        return `
          <div class="lsf-product-card">
            <div>
              <div class="lsf-product-image-box">
                <div class="lsf-product-placeholder">
                  استشارة طبية
                </div>
              </div>

              <span class="lsf-card-kicker">استشارة طبية فقط</span>

              <h4>${escapeHtml(product.title)}</h4>

              <p>${escapeHtml(product.note || "هذا الاختيار يحتاج استشارة طبية قبل الاستخدام.")}</p>

              <div class="lsf-medical-note">
                لا يتم فتح صفحة شراء مباشرة لهذا الاختيار.
              </div>
            </div>

            <a class="lsf-buy-btn" href="${CONFIG.whatsappLink}" target="_blank" rel="noopener">
              اسأل د/مازن
            </a>
          </div>
        `;
      }

      return `
        <div class="lsf-product-card" data-lsf-product-slug="${escapeHtml(product.slug)}">
          <div>
            <div class="lsf-product-image-box" data-lsf-image-box>
              <div class="lsf-product-placeholder">
                جاري تحميل الصورة
              </div>
            </div>

            <span class="lsf-card-kicker">منتج مرشح</span>

            <h4 data-lsf-title>${escapeHtml(product.title)}</h4>

            <div class="lsf-product-price" data-lsf-price>
              <span class="lsf-price-loading">جاري تحميل السعر...</span>
            </div>

            <p>مناسب بناءً على إجاباتك داخل الـ Supplement Finder.</p>
            ${product.note ? `<div class="lsf-medical-note">${escapeHtml(product.note)}</div>` : ""}
          </div>

          <a class="lsf-buy-btn" href="${productUrl(product.slug)}">
            افتح المنتج
          </a>
        </div>
      `;
    }

    function loadVisibleProductData(products) {
      products.forEach(function (product) {
        if (product.medicalOnly) {
          return;
        }

        loadProductData(product).then(function (data) {
          updateProductCard(product.slug, data);
        });
      });
    }

    async function loadProductData(product) {
      const slug = String(product.slug || "").trim();

      if (productCache[slug]) {
        return productCache[slug];
      }

      const fallbackData = {
        title: product.title || slug,
        image: "",
        price: ""
      };

      try {
        const response = await fetch(productUrl(slug), {
          method: "GET",
          credentials: "same-origin"
        });

        if (!response.ok) {
          productCache[slug] = fallbackData;
          return fallbackData;
        }

        const html = await response.text();
        const doc = new DOMParser().parseFromString(html, "text/html");
        const data = extractProductData(doc, fallbackData);

        productCache[slug] = data;
        return data;
      } catch (error) {
        productCache[slug] = fallbackData;
        return fallbackData;
      }
    }

    function extractProductData(doc, fallbackData) {
      const title =
        getMetaContent(doc, 'meta[property="og:title"]') ||
        getMetaContent(doc, 'meta[name="twitter:title"]') ||
        getText(doc, "h1") ||
        fallbackData.title;

      const image =
        getMetaContent(doc, 'meta[property="og:image"]') ||
        getMetaContent(doc, 'meta[name="twitter:image"]') ||
        getImageFromPage(doc);

      const price = getFinalPriceFromPage(doc);

      return {
        title: cleanTitle(title),
        image: image || "",
        price: price || ""
      };
    }

    function getFinalPriceFromPage(doc) {
      const metaPrice =
        getMetaContent(doc, 'meta[property="product:price:amount"]') ||
        getMetaContent(doc, 'meta[property="og:price:amount"]') ||
        getMetaContent(doc, 'meta[itemprop="price"]');

      if (metaPrice) {
        return formatPrice(metaPrice);
      }

      const jsonPrice = getPriceFromJsonLd(doc);

      if (jsonPrice) {
        return formatPrice(jsonPrice);
      }

      const preferredSelectors = [
        "[class*='sale'][class*='price']",
        "[class*='current'][class*='price']",
        "[class*='final'][class*='price']",
        "[class*='discount'][class*='price']",
        "[data-price]",
        ".sale-price",
        ".current-price",
        ".product-price"
      ];

      for (let i = 0; i < preferredSelectors.length; i++) {
        const elements = doc.querySelectorAll(preferredSelectors[i]);

        for (let j = 0; j < elements.length; j++) {
          const value = extractFirstPrice(elements[j].textContent);

          if (value) {
            return formatPrice(value);
          }
        }
      }

      const bodyText = doc.body ? doc.body.innerText : "";
      const allPrices = bodyText.match(/(?:EGP|ج\.م|جنيه|LE|L\.E|E£)?\s*[0-9][0-9,.\s]{1,12}\s*(?:EGP|ج\.م|جنيه|LE|L\.E|E£)?/gi) || [];

      for (let k = 0; k < allPrices.length; k++) {
        const cleaned = cleanPriceCandidate(allPrices[k]);

        if (cleaned && !/%/.test(cleaned) && !/save/i.test(cleaned)) {
          return formatPrice(cleaned);
        }
      }

      return "";
    }

    function getPriceFromJsonLd(doc) {
      const scripts = doc.querySelectorAll('script[type="application/ld+json"]');

      for (let i = 0; i < scripts.length; i++) {
        try {
          const data = JSON.parse(scripts[i].textContent);
          const found = findJsonLdPrice(data);

          if (found) {
            return found;
          }
        } catch (error) {}
      }

      return "";
    }

    function findJsonLdPrice(data) {
      if (!data) {
        return "";
      }

      if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
          const found = findJsonLdPrice(data[i]);

          if (found) {
            return found;
          }
        }
      }

      if (typeof data === "object") {
        if (data.offers) {
          const offerPrice = findJsonLdPrice(data.offers);

          if (offerPrice) {
            return offerPrice;
          }
        }

        if (data.price) {
          return data.price;
        }

        if (data.lowPrice) {
          return data.lowPrice;
        }

        if (data.highPrice) {
          return data.highPrice;
        }
      }

      return "";
    }

    function extractFirstPrice(text) {
      const normalized = normalizeSpace(text);

      if (!normalized) {
        return "";
      }

      const withoutSave = normalized
        .replace(/save\s*-?\s*[0-9]+%/gi, "")
        .replace(/-[0-9]+%/g, "")
        .replace(/خصم|وفر|توفير/gi, "");

      const matches = withoutSave.match(/(?:EGP|ج\.م|جنيه|LE|L\.E|E£)?\s*[0-9][0-9,.\s]{1,12}\s*(?:EGP|ج\.م|جنيه|LE|L\.E|E£)?/gi);

      if (!matches || !matches.length) {
        return "";
      }

      return cleanPriceCandidate(matches[0]);
    }

    function cleanPriceCandidate(value) {
      let text = normalizeSpace(value);

      text = text.replace(/save/gi, "");
      text = text.replace(/-[0-9]+%/g, "");
      text = text.replace(/[^\d.,\sA-Za-z£جنيهج.م]/g, "");
      text = normalizeSpace(text);

      const numberMatch = text.match(/[0-9][0-9,.\s]*/);

      if (!numberMatch) {
        return "";
      }

      const number = normalizeSpace(numberMatch[0]).replace(/\s/g, "");

      if (!number) {
        return "";
      }

      return number;
    }

    function formatPrice(value) {
      const number = cleanPriceCandidate(value);

      if (!number) {
        return "";
      }

      return number + " EGP";
    }

    function updateProductCard(slug, data) {
      const card = document.querySelector('[data-lsf-product-slug="' + cssEscape(slug) + '"]');

      if (!card) {
        return;
      }

      const imageBox = card.querySelector("[data-lsf-image-box]");
      const title = card.querySelector("[data-lsf-title]");
      const price = card.querySelector("[data-lsf-price]");

      if (title && data.title) {
        title.textContent = data.title;
      }

      if (imageBox) {
        if (data.image) {
          imageBox.innerHTML = `
            <img
              class="lsf-product-image"
              src="${escapeHtml(data.image)}"
              alt="${escapeHtml(data.title || "")}"
              loading="lazy"
            >
          `;
        } else {
          imageBox.innerHTML = `
            <div class="lsf-product-placeholder">
              لا توجد صورة
            </div>
          `;
        }
      }

      if (price) {
        if (data.price) {
          price.innerHTML = `
            <span class="lsf-current-price">${escapeHtml(data.price)}</span>
          `;
        } else {
          price.innerHTML = `
            <span class="lsf-price-loading">السعر يظهر داخل صفحة المنتج</span>
          `;
        }
      }
    }

    function getMetaContent(doc, selector) {
      const el = doc.querySelector(selector);

      if (!el) {
        return "";
      }

      return el.getAttribute("content") || "";
    }

    function getText(doc, selector) {
      const el = doc.querySelector(selector);

      if (!el) {
        return "";
      }

      return el.textContent.trim();
    }

    function getImageFromPage(doc) {
      const selectors = [
        ".product img",
        ".product-page img",
        ".product__media img",
        ".product-gallery img",
        ".swiper-slide img",
        "img[src*='digitaloceanspaces']",
        "img"
      ];

      for (let i = 0; i < selectors.length; i++) {
        const img = doc.querySelector(selectors[i]);

        if (img) {
          const src =
            img.getAttribute("src") ||
            img.getAttribute("data-src") ||
            img.getAttribute("data-lazy-src") ||
            "";

          if (src) {
            return absoluteUrl(src);
          }
        }
      }

      return "";
    }

    function productUrl(slug) {
      return "/products/" + String(slug || "").trim();
    }

    function absoluteUrl(url) {
      if (!url) {
        return "";
      }

      if (url.indexOf("//") === 0) {
        return window.location.protocol + url;
      }

      if (url.indexOf("http://") === 0 || url.indexOf("https://") === 0) {
        return url;
      }

      if (url.indexOf("/") === 0) {
        return window.location.origin + url;
      }

      return window.location.origin + "/" + url;
    }

    function cleanTitle(title) {
      return normalizeSpace(String(title || "").replace(/\s*\|\s*.*$/g, ""));
    }

    function normalizeSpace(value) {
      return String(value || "").replace(/\s+/g, " ").trim();
    }

    function highlightImportant(value) {
      const keywords = [
        "وزني خاسس",
        "جسمي يزيد",
        "الكتلة العضلية",
        "كتلة عضلية",
        "أخس",
        "قوة التحمل",
        "الطاقة",
        "ضخ الدم",
        "الضخ العضلي",
        "الضخامة",
        "زيادة الوزن",
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
        "التخسيس القوي",
        "التخسيس",
        "وزني زايد جدا",
        "وزني زايد",
        "وزنك زايد بنسبة بسيطة",
        "بسيطة",
        "أيزوليت",
        "البروتين",
        "القوة",
        "الأداء",
        "التمرين",
        "قبل التمرين",
        "Pump",
        "هدفك",
        "ميزانيتك"
      ];

      const safeText = escapeHtml(value);
      const pattern = keywords
        .map(function (keyword) {
          return escapeRegExp(escapeHtml(keyword));
        })
        .sort(function (a, b) {
          return b.length - a.length;
        })
        .join("|");

      if (!pattern) {
        return safeText;
      }

      return safeText.replace(new RegExp("(" + pattern + ")", "g"), '<span class="lsf-keyword">$1</span>');
    }

    function escapeRegExp(value) {
      return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function cssEscape(value) {
      if (window.CSS && typeof window.CSS.escape === "function") {
        return window.CSS.escape(String(value));
      }

      return String(value).replace(/"/g, '\\"');
    }

    function escapeHtml(value) {
      return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    }

    function scheduleAutoOpen() {
      window.setTimeout(function () {
        const overlay = document.getElementById(CONFIG.overlayId);

        if (!overlay) {
          return;
        }

        if (userClosedFinder || finderOpenedOnce || overlay.classList.contains("active")) {
          return;
        }

        openFinder();
      }, 15000);
    }

    ready(function () {
      removeOldFinder();
      createFloatingButton();
      createFinderPopup();
      scheduleAutoOpen();
    });
  })();
</script>
