// Språkdata
const translations = {
    sv: {
        nav_about: "Om oss",
        nav_services: "Tjänster",
        nav_contact: "Kontakt",
        hero_lead: "Christian Werngren",
        hero_title: "Strategisk inköp & Supply Chain",
        hero_desc: "Vi hjälper företag att optimera inköp, säkra leverantörer och sänka kostnader. Professionell och personlig rådgivning baserad i Nacka, med tjänster i hela Sverige.",
        hero_cta: "Kontakta oss",
        linkedin_btn: "Besök min LinkedIn",
        about_title: "Om Christian",
        about_p1: "Christian Werngren är VD och grundare av Sourca AB. Med lång erfarenhet inom inköp och supply chain management erbjuder jag en direkt, smidig och höggradigt personlig konsulttjänst.",
        about_p2: "Till skillnad från stora byråer erbjuder Sourca AB en fokuserad och tillförlitlig lösning för företag som behöver snabba, effektiva och kostnadseffektiva beslut. Jag arbetar direkt med ledningen och ansvariga för att säkerställa att strategin är tydlig, genomförbar och ger mätbara resultat.",
        stat_years: "År erfarenhet",
        stat_clients: "Tillfredsställda kunder",
        stat_savings: "Genomsnittlig kostnadssänkning",
        services_title: "Våra tjänster",
        service1_title: "Global Sourcing",
        service1_desc: "Vi identifierar och utvärderar leverantörer över hela världen för att säkerställa bästa pris, kvalitet och leveranssäkerhet.",
        service2_title: "Kontraktsförhandling",
        service2_desc: "Strategisk förhandling med leverantörer för att säkra konkurrenskraftiga villkor och långsiktiga relationer.",
        service3_title: "Kostnadsoptimering",
        service3_desc: "Vi analyserar dina inköp för att hitta besparingspotential och implementera effektiva sparåtgärder.",
        service4_title: "Supply Chain Strategi",
        service4_desc: "Utveckla en robust och flexibel leverantörskedja som står emot marknadsförändringar och ökar din konkurrenskraft.",
        contact_title: "Kontakta oss",
        contact_name: "Namn",
        contact_email: "E-post",
        contact_message: "Meddelande",
        contact_button: "Skicka meddelande",
        footer_trust1: "SOURCA AB | Org.nr: 55-68634306",
        footer_trust2: "Moms: SE-XX-XXXXXX",
        footer_trust3: "Vitmossvägen 27, 138 36 Älta",
        footer_contact: "Telefon: +46 70 XXX XXX XX",
        footer_email: "E-post: christian@sourca.se",
        footer_copyright: "© 2026 Sourca AB. Alla rättigheter reserverade."
    },
    en: {
        nav_about: "About",
        nav_services: "Services",
        nav_contact: "Contact",
        hero_lead: "Christian Werngren",
        hero_title: "Strategic Procurement & Supply Chain",
        hero_desc: "We help companies optimize purchasing, secure suppliers, and reduce costs. Professional and personalized consulting based in Nacka, with services throughout Sweden.",
        hero_cta: "Contact Us",
        linkedin_btn: "Visit my LinkedIn",
        about_title: "About Christian",
        about_p1: "Christian Werngren is CEO and founder of Sourca AB. With extensive experience in procurement and supply chain management, I offer direct, efficient, and highly personalized consulting services.",
        about_p2: "Unlike large agencies, Sourca AB provides a focused and reliable solution for companies needing fast, effective, and cost-efficient decisions. I work directly with management and responsible parties to ensure that the strategy is clear, executable, and delivers measurable results.",
        stat_years: "Years of experience",
        stat_clients: "Satisfied clients",
        stat_savings: "Average cost reduction",
        services_title: "Our Services",
        service1_title: "Global Sourcing",
        service1_desc: "We identify and evaluate suppliers worldwide to ensure best price, quality, and delivery reliability.",
        service2_title: "Contract Negotiation",
        service2_desc: "Strategic negotiation with suppliers to secure competitive terms and long-term relationships.",
        service3_title: "Cost Optimization",
        service3_desc: "We analyze your purchases to identify savings potential and implement effective cost-saving measures.",
        service4_title: "Supply Chain Strategy",
        service4_desc: "Develop a robust and flexible supply chain that withstands market changes and increases your competitiveness.",
        contact_title: "Contact Us",
        contact_name: "Name",
        contact_email: "Email",
        contact_message: "Message",
        contact_button: "Send Message",
        footer_trust1: "SOURCA AB | Org. Nr: 55-68634306",
        footer_trust2: "VAT: SE-XX-XXXXXX",
        footer_trust3: "Vitmossvägen 27, 138 36 Älta",
        footer_contact: "Phone: +46 70 XXX XXX XX",
        footer_email: "Email: christian@sourca.se",
        footer_copyright: "© 2026 Sourca AB. All rights reserved."
    }
};

// --- Språkhantering ---
let currentLang = 'sv';

function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelector('#langToggle').textContent = lang === 'sv' ? 'EN' : 'SV';

    // Uppdatera alla texter med data-i18n attribut
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Lyssna på språkknapp
document.querySelector('#langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'sv' ? 'en' : 'sv';
    updateLanguage(newLang);
});


// --- Dark Mode Hantering ---
const themeToggleBtn = document.getElementById('themeToggle');

// Hämta sparad inställning eller läs av systemets preferens
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Initiera tema vid start
if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Växla tema vid klick
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
});


// --- Formulärhantering ---
document.querySelector('#contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const successMsg = currentLang === 'sv' 
        ? 'Tack för ditt meddelande! Vi återkommer så snart som möjligt.' 
        : 'Thank you for your message! We will get back to you as soon as possible.';
    alert(successMsg);
    this.reset();
});


// --- Smooth Scroll till sektioner ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sätt grundspråk vid start
updateLanguage('sv');
