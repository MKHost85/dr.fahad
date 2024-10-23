// script.js
const textElements = document.querySelectorAll(".text"); // تحديد العناصر النصية

const toggleLanguage = document.getElementById("toggleLanguage");
const buttonLanguageText = document.getElementById("buttonLanguageText");
const buttonLanguageFlag = document.getElementById("buttonLanguageFlag");
const titleMain = document.getElementById("titleMain");
const titleCustom = document.getElementById("titleCustom");
const titleContentOne = document.getElementById("titleContentOne");
const titleContentTwo = document.getElementById("titleContentTwo");
const speakersTitle = document.getElementById("speakersTitle");
const speakersDescription = document.getElementById("speakersDescription");
const customerTitle1 = document.getElementById("customerTitle1");
const customerTitle2 = document.getElementById("customerTitle2");
const customerTitle3 = document.getElementById("customerTitle3");
const customerTitle4 = document.getElementById("customerTitle4");
const customerDescription1 = document.getElementById("customerDescription1");
const customerDescription2 = document.getElementById("customerDescription2");
const customerDescription3 = document.getElementById("customerDescription3");
const customerDescription4 = document.getElementById("customerDescription4");
const registerNow = document.getElementById("registerNow");
const sponsoredBy = document.getElementById("sponsoredBy");
const dateEvenet = document.getElementById("dateEvenet");
const eventLocation = document.getElementById("eventLocation");

const eventSection = document.querySelector(".footer .event");
const speakers = document.querySelector(".speakers .customers");

// const speakersDescription = document.getElementById('speakersDescription');
// const registerButton = document.getElementById('registerButton');
// const toggleLanguage = document.getElementById('toggleLanguage');

// const main = document.querySelector('.main');

const translations = {
  en: {
    buttonLanguageText: "عربي",
    titleMain: "Strategy Experts Forum",
    titleCustom: "8th",
    titleContentOne:
      "The Strategy Experts Forum aims to review experiences and expertise in the field of strategic planning, monitoring the performance of organizations, and the most important lessons learned from the practical practices of the Kingdom's Vision 2030.",
    titleContentTwo:
      "There will be 4 keynote speakers and many guests of honor and experts specialized in the fields of management sciences from the Kingdom of Saudi Arabia and the Middle East",
    speakersTitle: "Expert Speakers",
    speakersDescription:
      "A group of experts offering insights and experiences to support Vision 2030 goals",
    customerTitle1: "Eng. Ahmed Al Zahrani",
    customerTitle2: "Dr. Majida Shaqdar",
    customerTitle3: "Dr. Jumaa Al-Anzi",
    customerTitle4: "Dr. Fahd Al-Fifi",
    customerDescription1: "CEO of Lessons Learned Management Consulting",
    customerDescription2:
      "General Supervisor of Planning and Institutional Excellence",
    customerDescription3: "Expert in Institutional Development and Excellence",
    customerDescription4: "Strategic Planning and KPI Expert",
    registerNow: "Register now",
    sponsoredBy: "Sponsored By",
    dateEvenet: "Date: December 10, 2024 AD - 6 pm",
    eventLocation: "Braira Al Olaya Hotel",

    imageSrc: "images/svg/KSA.svg",
  },
  ar: {
    buttonLanguageText: "English",
    titleMain: "منتدى خبراء الاستراتيجية",
    titleCustom: "الثامن",
    titleContentOne:
      "يهدف منتدى خبراء الاستراتيجية إلى استعراض التجارب والخبرات في مجال التخطيط الاستراتيجي، ومراقبة أداء المنظمات، وأهم الدروس المستفادة من الممارسات العملية لرؤية المملكة 2030.",
    titleContentTwo:
      "سيكون هناك 4 متحدثين رئيسيين والعديد من ضيوف الشرف والخبراء المتخصصين في مجالات العلوم الإدارية من المملكة العربية السعودية ومنطقة الشرق الأوسط",
    speakersTitle: "أفضل الخبراء في الملتقى",
    speakersDescription:
      "نخبة من الخبراء يقدمون رؤى وتجارب لدعم تحقيق أهداف رؤية 2030.",
    customerTitle1: "المهندس: أحمد الزهراني",
    customerTitle2: "الدكتورة: ماجدة شقدار",
    customerTitle3: "الدكتور: جمعة العنزي",
    customerTitle4: "الدكتور: فهد الفيفي",
    customerDescription1:
      "الرئيس التنفيذي للدروس المستفادة للاستشارات الإدارية",
    customerDescription2: "المشرف العام على التخطيط والتميز المؤسسي",
    customerDescription3: "خبير التطوير والتميز المؤسسي",
    customerDescription4: "خبير التخطيط الاستراتيجي ومؤشرات الأداء",
    registerNow: "سـجـل الان ",
    sponsoredBy: "برعاية",
    dateEvenet: "التاريخ: 10 ديسمبر 2024 م - 6 مساءً",
    eventLocation: "Braira Al Olaya Hotel – فندق بريرا العليا",

    imageSrc: "images/svg/Eng.svg",
  },
};

let currentLanguage = "en";
const ids = getIdsFromTranslations(translations[currentLanguage]); // استخدم الدالة لاستخراج المعرفات

function loadLanguage(language) {
  const otherTranslations = translations;
  // textElements.forEach(el => el.classList.add('fade-out'));

  buttonLanguageText.textContent = translations[language].buttonLanguageText;
  titleMain.textContent = translations[language].titleMain;
  titleCustom.textContent = translations[language].titleCustom;
  titleContentOne.textContent = translations[language].titleContentOne;
  titleContentTwo.textContent = translations[language].titleContentTwo;
  speakersTitle.textContent = translations[language].speakersTitle;
  speakersDescription.textContent = translations[language].speakersDescription;
  customerTitle1.textContent = translations[language].customerTitle1;
  customerTitle2.textContent = translations[language].customerTitle2;
  customerTitle3.textContent = translations[language].customerTitle3;
  customerTitle4.textContent = translations[language].customerTitle4;
  customerDescription1.textContent =
    translations[language].customerDescription1;
  customerDescription2.textContent =
    translations[language].customerDescription2;
  customerDescription3.textContent =
    translations[language].customerDescription3;
  customerDescription4.textContent =
    translations[language].customerDescription4;
  registerNow.textContent = translations[language].registerNow;
  sponsoredBy.textContent = translations[language].sponsoredBy;
  dateEvenet.textContent = translations[language].dateEvenet;
  eventLocation.textContent = translations[language].eventLocation;

  buttonLanguageFlag.src = translations[language].imageSrc;

  // updateStyle(language);
}

function getIdsFromTranslations(translations) {
  // استخرج جميع المفاتيح من كائن الترجمة وأعدها كقائمة من المعرفات
  return Object.keys(translations);
}

toggleLanguage.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "ar" : "en";
  loadLanguage(currentLanguage);
  updateElementIds(currentLanguage);
});

// تحميل اللغة الافتراضية
loadLanguage(currentLanguage);

function updateElementIds(language) {
  const otherLanguage = language === "en" ? "ar" : "en"; // تحديد اللغة الأخرى

  // إزالة المعرفات والفئة الخاصة باللغة الأخرى
  ids.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      if (otherLanguage === "ar") {
        element.classList.remove("ar"); // حذف فئة 'ar' إذا كانت اللغة الأخرى عربية
      } else {
        element.classList.add("ar");
      }
    }
  });

  if (otherLanguage === "ar") {
    eventSection.classList.remove("ar");
    speakers.classList.remove("ar");
  } else {
    eventSection.classList.add("ar");
    speakers.classList.add("ar");
  }
}

// countDown
const countdownDate = new Date("December 10, 2024 18:00:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  let nameDay = currentLanguage == "en" ? "days" : "يوم";
  const formattedTime = `
        <div class="days">
          <p class="dayname">${nameDay}</p>
          <p class="daynumber">${days}</p>
        </div>
        <div class="time">
        ${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}
        </div>
       `;
  document.getElementById("countdown").innerHTML = formattedTime;

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = `
     <div class="days">
      <p class="dayname">days</p>
      <p class="daynumber">00</p>
    </div>

    <div class="time">
      00:00:00
    </div>`;
  }
}, 1000);
