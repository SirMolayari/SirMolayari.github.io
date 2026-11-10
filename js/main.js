/**
 * Mohammad Mahdi Molayari - Official Portfolio
 * Auto-Localization Engine (i18n), Dynamic Typing, Modals & Floating Physics
 */

(function () {
  'use strict';

  // =========================================================
  // 1. CONTENT DICTIONARY (ENGLISH & PERSIAN)
  // Strictly adhering to CRITICAL CONTENT RULES:
  // - No "Floating Physics", "Floating Physics", or "Floating Physics Engine" in visible text.
  // - No mention of "Archived".
  // - 3D games are separate from offline hand-crafted animation.
  // - Exact emails: sirmolayari@gmail.com and studio@activelegend.ir.
  // =========================================================
  const i18nData = {
    en: {
      // Navigation
      navCore: "Core",
      navAbout: "About",
      navSkills: "Solo 0-100",
      navCraft: "Animation Art",
      navGames: "Flagship Games",
      navStudio: "Studio",
      navComms: "Contact",

      // Telemetry HUD
      hudCoords: "SECTOR:",
      hudCoordsVal: "DEEP SPACE ORBIT",
      hudEngine: "ENGINE:",
      hudFlux: "FIELD FLUX:",
      hudPerf: "PERF:",
      hudLangBtn: "LANG: EN",
      hudFluxBtn: "FLUX: STABLE",
      hudAudioOff: "AUDIO: OFF",
      hudAudioOn: "AUDIO: ON",

      // Hero Section
      heroBadge: "Interactive Game Developer Portfolio",
      heroTitle: "Mohammad Mahdi Molayari",
      heroRoles: [
        "Solo Indie Game Developer (0 to 100)",
        "3D Artist & Technical Game Designer",
        "Founder of Active Legend Studio",
        "Unreal Engine 5.6.1 Specialist"
      ],
      heroBtnExplore: "Explore Flagship Games",
      heroBtnStudio: "Active Legend Studio",
      statEngine: "Core Architecture",
      statPipeline: "Solo 0-to-100",
      statCraft: "Hand-Crafted Animation",
      statPerf: "Engine Optimization",

      // About Section
      aboutBadge: "Developer Dossier",
      aboutTitleStart: "Architecting",
      aboutTitleEnd: "Virtual Realities",
      aboutSubtitle: "Building entire game ecosystems from 0 to 100 — mastering Unreal Engine 5.6.1 real-time technology, technical design, and systems architecture.",
      aboutConsoleTitle: "Solo Indie Developer",
      aboutConsoleSub: "(0 to 100 Pipeline)",
      aboutBio1: "I am <strong>Mohammad Mahdi Molayari</strong>, an Indie Game Developer, 3D Artist, and the founder of <strong style=\"color: var(--neon-blue);\">Active Legend</strong>. As a solo developer, I command every facet of the production pipeline from initial concept design to final compiled deployment.",
      aboutBio2: "From the high-stakes tactical dynamics of <strong style=\"color: var(--neon-cyan);\">Dodge Or Seek</strong> to the imaginative celestial worlds of <strong style=\"color: var(--plasma-violet);\">FoodPlanet</strong>, I build complete interactive universes with rigorous technical fidelity and polished gameplay loops.",
      aboutMatrixTitle: "// Technical Skills Matrix",

      // Solo 0 to 100 Responsibilities
      soloHeaderBadge: "Solo Developer Pipeline",
      soloTitleStart: "End-to-End",
      soloTitleEnd: "Development Mastery",
      soloSubtitle: "Every single layer of game production crafted independently from 0 to 100 with technical precision and creative autonomy.",
      skill1Title: "Full Gameplay Loop Creation",
      skill1Desc: "Designing and iterating complete moment-to-moment game loops, progression systems, rulesets, and interactive mechanics.",
      skill2Title: "Technical Game Design",
      skill2Desc: "Translating high-level creative concepts into mathematically balanced, systemic, and responsive gameplay architecture.",
      skill3Title: "End-to-End Core Coding (All Sections)",
      skill3Desc: "Writing modular, performant C++ and Blueprint logic driving player mechanics, physics interactions, AI, and UI systems.",
      skill4Title: "Animation Assembly & State Machines",
      skill4Desc: "Skeletal mesh setups, complex state machines, layered blend spaces, and procedural locomotion inside Unreal Engine.",
      skill5Title: "Audio Synchronization & Sound Design",
      skill5Desc: "Custom sound design, spatial audio attenuation, frame-accurate animation event triggers, and dynamic mixing.",
      skill6Title: "Multiplayer & Network Programming",
      skill6Desc: "Authoritative server-client replication, network prediction, latency compensation, and session/lobby management.",
      skill7Title: "Extreme Game Size Optimization",
      skill7Desc: "Aggressive memory profiling, Nanite geometry streaming, texture compression, and minimal disk footprint packaging.",
      skill8Title: "Unreal Engine 5.6.1 Mastery",
      skill8Desc: "Deep implementation of Chaos Physics, Lumen dynamic global illumination, virtual shadow maps, and modern engine pipelines.",

      // Distinct Hand-Crafted Animation Section
      craftBadge: "Traditional Artistry",
      craftTitleStart: "Hand-Crafted",
      craftTitleEnd: "Animation Styles",
      craftSubtitle: "A dedicated artistic discipline entirely separate from my 3D game development pipeline. Exploring classical, frame-by-frame physical and tactile animation mediums.",
      craftNotice: "Note: The techniques below represent offline, physical and traditional fine-art animation methods, practiced distinctly from real-time digital 3D game engines.",
      
      craft1Title: "Stop-Motion Claymation",
      craft1Badge: "TACTILE CLAY / ARMATURE",
      craft1Desc: "Frame-by-frame physical manipulation of sculpted clay figures over jointed armatures under physical studio lighting, capturing organic warmth, tangible volume, and classical artisan storytelling.",

      craft2Title: "Cut-out Animation",
      craft2Badge: "LAYERED PAPER / COLLAGE",
      craft2Desc: "Multi-layered paper, cardboard, and graphic cut-out puppetry on a glass multiplane setup, blending stylized graphic design with articulated jointed movements.",

      craft3Title: "Silhouette Animation",
      craft3Badge: "SHADOW PUPPETRY / HIGH CONTRAST",
      craft3Desc: "Stark, expressive shadow puppetry filmed with backlit screens, relying on pure silhouette shapes, delicate filigree profiles, and cinematic high-contrast visual poetry.",

      craft4Title: "Pixilation",
      craft4Badge: "LIVE-ACTION STOP-MOTION",
      craft4Desc: "An avant-garde stop-motion technique utilizing live human actors and real-world physical objects as frame-by-frame animated subjects to produce surreal, physics-defying motion.",

      // Projects Section (Strictly Dodge Or Seek & FoodPlanet)
      projectsBadge: "Flagship Games",
      projectsTitleStart: "Interactive",
      projectsTitleEnd: "Game Creations",
      projectsSubtitle: "Explore the two main flagship titles developed in Unreal Engine 5.6.1. Hover over cards to experience 3D perspective levitation.",
      filterAll: "All Flagship Games",
      filterUE5: "Unreal Engine 5.6.1",
      filterTactical: "Tactical Survival",
      filterAdventure: "3D Adventure",

      // Project 1: Dodge Or Seek
      p1Title: "Dodge Or Seek",
      p1Category: "Tactical Physics Survival",
      p1Desc: "A high-octane tactical physics survival and stealth game set in weightless orbital chambers. Outwit adaptive hunter AI through kinetic momentum, precision trajectory control, and dynamic shadow manipulation in Unreal Engine 5.6.1.",
      p1Status: "FLAGSHIP TITLE // UE 5.6.1",
      p1Inspect: "Inspect Blueprint",

      // Project 2: FoodPlanet
      p2Title: "FoodPlanet",
      p2Category: "Whimsical 3D Adventure",
      p2Desc: "A vibrant 3D adventure platformer set across fantastical celestial gastronomy worlds. Players navigate whimsical burger-astronauts and alien flora with dynamic physics, interactive environments, and stylized real-time UE5 rendering.",
      p2Status: "FLAGSHIP TITLE // UE 5.6.1",
      p2Inspect: "Inspect Blueprint",

      // Studio Section
      studioBadge: "Independent Game Studio",
      studioTitleStart: "Active",
      studioTitleEnd: "Legend",
      studioSubtitle: "Forging independent interactive experiences where innovative game mechanics converge with visceral visual storytelling.",
      studioPortalBadge: "Official Studio Portal",
      studioDesc1: "Active Legend is Iran's premier indie game development studio and gaming research portal, founded by Mohammad Mahdi Molayari.",
      studioLaunchBtn: "Launch Studio Portal",
      studioStoryTitle: "Where Pure Imagination Meets Real-Time Tech",
      studioStoryP1: "Active Legend is more than a studio—it is an experimental game development laboratory. We challenge conventions by coupling rigorous 0-to-100 game development disciplines with the bleeding-edge lighting and physics of Unreal Engine 5.6.1.",
      studioStat1: "Indie Creative Freedom",
      studioStat2: "Next-Gen Pipeline",
      studioStat3: "Solo 0-100 Engineering",
      studioStat4: "Competitive & Adventure",

      // Contact Section (Exact Emails)
      contactBadge: "Comm Channel",
      contactTitleStart: "Establish",
      contactTitleEnd: "Transmission",
      contactSubtitle: "Have a game publishing inquiry, collaboration proposal, technical art consultation, or studio partnership? Send a direct transmission.",
      contactFreqTitle: "Direct Channels",
      contactFreqDesc: "Available for professional inquiries, game development projects, technical design, and studio collaborations.",
      commsEmail1Label: "PERSONAL DIRECT EMAIL",
      commsEmail2Label: "STUDIO OFFICIAL EMAIL",
      commsStudioLabel: "STUDIO WEBSITE",
      commsGithubLabel: "GITHUB CODEBASE",
      commsStatus: "STATUS: OPEN TO INQUIRIES",

      // Form
      lblSender: "// IDENTIFIER / YOUR NAME",
      lblEmail: "// TRANSMISSION FREQUENCY / EMAIL",
      lblSubject: "// MISSION SUBJECT",
      lblMsg: "// TRANSMISSION MESSAGE",
      phName: "e.g. Commander Shepard",
      phEmail: "name@domain.com",
      phSubject: "Game Collaboration / Publishing / UE5",
      phMsg: "Detail your project scope, inquiry, or transmission brief...",
      btnTransmit: "Transmit Message",
      transmitting: "TRANSMITTING...",
      transmitted: "TRANSMISSION RECEIVED",
      transmissionSuccess: "SIGNAL LOCKED: Thank you, your transmission has been routed to Mohammad Mahdi Molayari. Comms link established.",
      formError: "Oops! There was a problem transmitting your message. Please verify fields and try again.",
      formNetworkError: "Network connection error. Please check your connection or contact sirmolayari@gmail.com directly.",

      // Footer
      footerCopy: "© 2026 <strong>Mohammad Mahdi Molayari</strong>. All Rights Reserved. Founder of Active Legend.",
      footerCoords: "DEEP SPACE ENGINE // CRAFTED WITH UNREAL PASSION // 60 FPS INTERACTIVE ENVIRONMENT",
      btnBackToOrbit: "Back To Orbit"
    },

    fa: {
      // Navigation
      navCore: "هسته",
      navAbout: "درباره من",
      navSkills: "مهارت‌های ۰ تا ۱۰۰",
      navCraft: "هنر انیمیشن دستی",
      navGames: "بازی‌های شاخص",
      navStudio: "استودیو",
      navComms: "تماس",

      // Telemetry HUD
      hudCoords: "بخش:",
      hudCoordsVal: "مدار اعماق فضا",
      hudEngine: "موتور:",
      hudFlux: "شار میدان:",
      hudPerf: "عملکرد:",
      hudLangBtn: "زبان: فارسی",
      hudFluxBtn: "میدان: پایدار",
      hudAudioOff: "صدا: خاموش",
      hudAudioOn: "صدا: روشن",

      // Hero Section
      heroBadge: "پورتفولیوی تعاملی توسعه‌دهنده بازی",
      heroTitle: "محمد مهدی مولایاری",
      heroRoles: [
        "توسعه‌دهنده سولو (صفر تا صد) بازی‌های ویدیویی",
        "طراح فنی و آرتیست سه‌بعدی بازی",
        "بنیان‌گذار استودیو بازی‌سازی اکتیو لجند (Active Legend)",
        "متخصص ارشد آنریل انجین ۵.۶.۱"
      ],
      heroBtnExplore: "مشاهده بازی‌های شاخص",
      heroBtnStudio: "استودیو اکتیو لجند",
      statEngine: "معماری پایه موتور",
      statPipeline: "خط لوله سولو ۰ تا ۱۰۰",
      statCraft: "انیمیشن سنتی و دستی",
      statPerf: "بهینه‌سازی ۶۰ فریم",

      // About Section
      aboutBadge: "پرونده تخصصی توسعه‌دهنده",
      aboutTitleStart: "معماری و خلق",
      aboutTitleEnd: "جهان‌های مجازی",
      aboutSubtitle: "توسعه کامل بازی‌ها از نقطه صفر تا صد؛ تسلط بر فناوری بلادرنگ آنریل انجین ۵.۶.۱، طراحی فنی و سیستم‌های پیچیده گیم‌پلی.",
      aboutConsoleTitle: "توسعه‌دهنده مستقل سولو",
      aboutConsoleSub: "(خط لوله صفر تا صد)",
      aboutBio1: "من <strong style=\"color: #fff;\">محمد مهدی مولایاری</strong> هستم؛ بازی‌ساز مستقل، آرتیست سه‌بعدی و بنیان‌گذار استودیو <strong style=\"color: var(--neon-blue);\">اکتیو لجند (Active Legend)</strong>. به عنوان یک توسعه‌دهنده سولو، تمام چرخه ساخت بازی را از ایده خام و طراحی اولیه تا کدنویسی، آرت، صداگذاری و خروجی نهایی شخصاً به سرانجام می‌رسانم.",
      aboutBio2: "از طراحی فیزیک و گیم‌پلی تاکتیکی در بازی <strong style=\"color: var(--neon-cyan);\">Dodge Or Seek</strong> تا جهان‌های فانتزی و ماجراجویی در <strong style=\"color: var(--plasma-violet);\">FoodPlanet</strong>، دنیاهای تعاملی را با دقت فنی بالا و استانداردهای روز گیمینگ خلق می‌کنم.",
      aboutMatrixTitle: "// ماتریس مهارت‌های فنی",

      // Solo 0 to 100 Responsibilities
      soloHeaderBadge: "خط لوله توسعه سولو",
      soloTitleStart: "تسلط کامل بر",
      soloTitleEnd: "توسعه صفر تا صد بازی",
      soloSubtitle: "اجرا و پیاده‌سازی مستقل تمامی لایه‌های تولید بازی از نقطه صفر تا صد با دقت فنی و استقلال خلاقانه کامل.",
      skill1Title: "خلق کامل لوپ گیم‌پلی (Full Gameplay Loop Creation)",
      skill1Desc: "طراحی، پیاده‌سازی و بالانس کامل چرخه لحظه‌به‌لحظه گیم‌پلی، سیستم‌های پاداش، قوانین بازی و مکانیزم‌های هسته.",
      skill2Title: "طراحی فنی بازی (Technical Game Design)",
      skill2Desc: "تبدیل ایده‌های خلاقانه و هنری به سیستم‌های مکانیکی و محاسباتی متعادل، واکنش‌گرا و ساختاریافته.",
      skill3Title: "کدنویسی سرتاسری و هسته اصلی (End-to-End Core Coding)",
      skill3Desc: "معماری ماژولار و تمیز به زبان‌های C++ و بلوپرینت برای کنترل فیزیک، UI، هوش مصنوعی و گیم‌مودها.",
      skill4Title: "اسمبلی انیمیشن و استیت ماشین‌ها (Animation Assembly)",
      skill4Desc: "ریگینگ، راه‌اندازی اسکلتال مش‌ها، Blend Spaceهای اختصاصی و ماشین‌های وضعیت انیمیشن پیچیده در آنریل انجین.",
      skill5Title: "سینک و هماهنگ‌سازی صدا (Audio Synchronization)",
      skill5Desc: "طراحی ساند افکت‌های اختصاصی، پیاده‌سازی صدای فراگیر، و هماهنگ‌سازی فریم‌به‌فریم رویدادهای صوتی با انیمیشن.",
      skill6Title: "برنامه‌نویسی شبکه و چندنفره (Multiplayer & Network Programming)",
      skill6Desc: "رپلیکیشن دقیق کلاینت-سرور، جبران تاخیر شبکه (Lag Compensation) و مدیریت لابی‌های رقابتی LAN و آنلاین.",
      skill7Title: "بهینه‌سازی حداکثری حجم بازی (Extreme Game Size Optimization)",
      skill7Desc: "پروفایلینگ حافظه، خط لوله هندسه نانایت، فشرده‌سازی بافت‌ها و کاهش حداکثری حجم پکیج بدون افت کیفیت.",
      skill8Title: "تسلط جامع بر آنریل انجین ۵.۶.۱ (Unreal Engine 5.6.1 Mastery)",
      skill8Desc: "بهره‌گیری عمیق از فیزیک Chaos، نورپردازی سراسری لومن (Lumen)، نانایت و تکنولوژی‌های مدرن اپیک گیمز.",

      // Distinct Hand-Crafted Animation Section
      craftBadge: "هنر اصیل فریم‌به‌فریم",
      craftTitleStart: "تکنیک‌های انیمیشن",
      craftTitleEnd: "دست‌ساز و سنتی",
      craftSubtitle: "یک مهارت هنری کاملاً مستقل و متمایز از خط لوله بازی‌سازی سه‌بعدی؛ کاوش در سبک‌های کلاسیک، فیزیکی و فریم‌به‌فریم انیمیشن سنتی.",
      craftNotice: "نکته مهم: تکنیک‌های زیر نمایانگر مهارت‌های من در متدهای انیمیشن سنتی، فیزیکی و آفلاین هستند و ماهیتی مستقل از موتورهای بازی‌سازی دیجیتال سه‌بعدی دارند.",

      craft1Title: "استاپ‌موشن خمیری (Stop-Motion Claymation)",
      craft1Badge: "خمیر فیزیکی / آرماتوربندی",
      craft1Desc: "متحرک‌سازی فریم‌به‌فریم فیگورهای خمیری دست‌ساز روی آرماتورهای مفصلی در زیر نورپردازی استودیویی؛ خلق فرم‌های ارگانیک، بافت ملموس و روایتگری اصیل دستی.",

      craft2Title: "انیمیشن کات‌اوت (Cut-out Animation)",
      craft2Badge: "کاغذ چندلایه / کلاژ",
      craft2Desc: "متحرک‌سازی کاراکترهای مفصل‌بندی‌شده کاغذی و مقوایی روی میز نور مولتی‌پلی‌ن؛ تلفیق طراحی گرافیکی متمایز با حرکات ریتمیک دوبعدی.",

      craft3Title: "انیمیشن سایه‌ای / سیلوئت (Silhouette Animation)",
      craft3Badge: "تئاتر سایه / کنتراست مطلق",
      craft3Desc: "روایتگری بصری با فیگورهای مفصلی سایه‌ای در برابر پرده نور پس‌زمینه؛ با الهام از هنرهای سایه‌بازی سنتی و تأکید بر زیبایی فرم‌های سیاه و سفید.",

      craft4Title: "پیکسیلیشن (Pixilation)",
      craft4Badge: "استاپ‌موشن با انسان و اشیاء واقعی",
      craft4Desc: "تکنیک آوانگارد استاپ‌موشن که با استفاده از انسان‌های واقعی و اشیای پیرامون به عنوان سوژه‌های فریم‌به‌فریم، حرکات سورئال و فراتر از قوانین فیزیک خلق می‌کند.",

      // Projects Section (Strictly Dodge Or Seek & FoodPlanet)
      projectsBadge: "بازی‌های شاخص",
      projectsTitleStart: "بازی‌های اصلی و",
      projectsTitleEnd: "شاخص استودیو",
      projectsSubtitle: "دو بازی برجسته توسعه‌یافته با موتور قدرتمند Unreal Engine 5.6.1. نشانگر ماوس را روی کارت‌ها حرکت دهید تا زاویه سه‌بعدی شناور را تجربه نمایید.",
      filterAll: "همه بازی‌های شاخص",
      filterUE5: "آنریل انجین ۵.۶.۱",
      filterTactical: "بقا و تاکتیکی",
      filterAdventure: "ماجراجویی سه‌بعدی",

      // Project 1: Dodge Or Seek
      p1Title: "Dodge Or Seek",
      p1Category: "بقا و اکشن فیزیکی تاکتیکی",
      p1Desc: "یک بازی اکشن و بقای تاکتیکی در اتاقک‌های اوربیتال فضایی. تقابل فیزیکی با هوش مصنوعی شکارچی با استفاده از تکانه جنبشی، مدیریت سایه‌ها و کنترل مسیر در آنریل انجین ۵.۶.۱.",
      p1Status: "عنوان شاخص // UE 5.6.1",
      p1Inspect: "مشاهده بلوپرینت",

      // Project 2: FoodPlanet
      p2Title: "FoodPlanet",
      p2Category: "ماجراجویی سه‌بعدی فانتزی",
      p2Desc: "یک پلتفرمر ماجراجویی سه‌بعدی شاداب و رنگارنگ در دنیاهای آسمانی خوراکی. کنترل کاراکترهای فضانورد-برگری در میان گیاهان فضایی با فیزیک پویا و رندر بلادرنگ آنریل انجین ۵.۶.۱.",
      p2Status: "عنوان شاخص // UE 5.6.1",
      p2Inspect: "مشاهده بلوپرینت",

      // Studio Section
      studioBadge: "استودیو مستقل بازی‌سازی",
      studioTitleStart: "اکتیو",
      studioTitleEnd: "لجند (Active Legend)",
      studioSubtitle: "پیشگام در خلق تجربیات تعاملی مستقل با تلفیق مکانیک‌های نوین گیم‌پلی و روایتگری بصری عمیق.",
      studioPortalBadge: "پرتال رسمی استودیو",
      studioDesc1: "اکتیو لجند برترین استودیو مستقل بازی‌سازی و مرجع گیمینگ در ایران است که توسط محمد مهدی مولایاری پایه‌گذاری شده است.",
      studioLaunchBtn: "ورود به پرتال استودیو",
      studioStoryTitle: "جایی که تخیل ناب با فناوری بلادرنگ پیوند می‌خورد",
      studioStoryP1: "اکتیو لجند فراتر از یک استودیو، یک آزمایشگاه خلاقیت است. ما با تلفیق دیسیپلین توسعه صفر تا صد با نورپردازی و فیزیک نسل آینده آنریل انجین ۵.۶.۱، بازی‌های متمایزی خلق می‌کنیم.",
      studioStat1: "آزادی خلاقیت مستقل",
      studioStat2: "خط تولید نسل جدید",
      studioStat3: "مهندسی صفر تا صد سولو",
      studioStat4: "بازی‌های رقابتی و ماجراجویی",

      // Contact Section (Exact Emails)
      contactBadge: "کانال ارتباطی",
      contactTitleStart: "ارسال پیام و",
      contactTitleEnd: "برقراری ارتباط",
      contactSubtitle: "برای پیشنهادات نشر بازی، همکاری‌های فنی، مشاوره تکنیکال آرت یا همکاری‌های استودیویی، مستقیماً با من در تماس باشید.",
      contactFreqTitle: "راه‌های ارتباط مستقیم",
      contactFreqDesc: "آماده برای پروژه‌های جدید بازی‌سازی، مشاوره‌های تخصصی، طراحی فنی گیم‌پلی و فرصت‌های کاری.",
      commsEmail1Label: "ایمیل مستقیم شخصی",
      commsEmail2Label: "ایمیل رسمی استودیو",
      commsStudioLabel: "وب‌سایت استودیو",
      commsGithubLabel: "ریپازیتوری گیت‌هاب",
      commsStatus: "وضعیت: آماده دریافت پیام و پروژه‌ها",

      // Form
      lblSender: "// شناسه فرستنده / نام شما",
      lblEmail: "// ایمیل فرستنده",
      lblSubject: "// موضوع پیام",
      lblMsg: "// متن پیام",
      phName: "مثلاً: مهندس رضایی",
      phEmail: "name@domain.com",
      phSubject: "همکاری در ساخت بازی / آنریل انجین ۵ / طراحی فنی",
      phMsg: "جزییات پروژه، زمان‌بندی یا پیام خود را شرح دهید...",
      btnTransmit: "ارسال پیام",
      transmitting: "در حال ارسال پیام...",
      transmitted: "پیام دریافت شد",
      transmissionSuccess: "سیگنال دریافت شد: پیام شما با موفقیت برای محمد مهدی مولایاری ارسال گردید و در سریع‌ترین زمان پاسخ داده خواهد شد.",
      formError: "خطا در ارسال پیام. لطفاً اطلاعات را بررسی کرده و مجدداً تلاش فرمایید.",
      formNetworkError: "خطای اتصال به اینترنت. لطفاً شبکه خود را بررسی کرده یا مستقیماً به sirmolayari@gmail.com ایمیل بزنید.",

      // Footer
      footerCopy: "© ۲۰۲۶ <strong>محمد مهدی مولایاری</strong>. کلیه حقوق محفوظ است. بنیان‌گذار استودیو اکتیو لجند.",
      footerCoords: "موتور اعماق فضا // توسعه با اشتیاق آنریل انجین // محیط تعاملی ۶۰ فریم",
      btnBackToOrbit: "بازگشت به ابتدای صفحه"
    }
  };

  // =========================================================
  // 2. SEAMLESS AUTO-LOCALIZATION ENGINE (i18n)
  // =========================================================
  let currentLang = 'en';

  function detectLanguage() {
    const saved = localStorage.getItem('preferred_lang');
    if (saved === 'fa' || saved === 'en') {
      return saved;
    }
    const languages = navigator.languages || [navigator.language || navigator.userLanguage || ''];
    for (const lang of languages) {
      if (lang && lang.toLowerCase().startsWith('fa')) {
        return 'fa';
      }
    }
    return 'en';
  }

  function setLanguage(lang) {
    currentLang = lang;
    try {
      localStorage.setItem('preferred_lang', lang);
    } catch (e) {}

    const html = document.documentElement;
    const isRtl = lang === 'fa';

    html.setAttribute('lang', lang);
    html.setAttribute('dir', isRtl ? 'rtl' : 'ltr');

    const dict = i18nData[lang];

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = dict[key];
        } else {
          el.innerHTML = dict[key];
        }
      }
    });

    // Update Language HUD Button Text
    const langBtn = document.getElementById('toggle-lang-btn');
    if (langBtn) {
      langBtn.innerHTML = `<span>🌐</span> ${dict.hudLangBtn}`;
    }

    // Restart typing effect with localized roles
    restartTyping(dict.heroRoles);
  }

  // =========================================================
  // 3. DYNAMIC SUBTITLE TYPING EFFECT
  // =========================================================
  let typingTimeout = null;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentRoles = i18nData.en.heroRoles;

  function restartTyping(newRoles) {
    if (typingTimeout) clearTimeout(typingTimeout);
    currentRoles = newRoles;
    roleIndex = 0;
    charIndex = 0;
    isDeleting = false;
    type();
  }

  function type() {
    const typingElement = document.getElementById('typing-subtitle');
    if (!typingElement) return;

    const currentRole = currentRoles[roleIndex] || currentRoles[0];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 25 : 65;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2200; // Pause at end of text
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % currentRoles.length;
      speed = 450;
    }

    typingTimeout = setTimeout(type, speed);
  }

  // =========================================================
  // 4. LIVE TELEMETRY HUD UPDATER (FPS & PERFORMANCE)
  // =========================================================
  const fpsDisplay = document.getElementById('hud-fps');
  let frameCount = 0;
  let lastFpsTime = performance.now();

  function updateHUD() {
    frameCount++;
    const now = performance.now();

    if (now - lastFpsTime >= 1000) {
      const fps = Math.round((frameCount * 1000) / (now - lastFpsTime));
      if (fpsDisplay) {
        fpsDisplay.textContent = `${fps} FPS`;
      }
      frameCount = 0;
      lastFpsTime = now;
    }

    requestAnimationFrame(updateHUD);
  }

  requestAnimationFrame(updateHUD);

  // =========================================================
  // 5. PHYSICS FLUX CONTROLLER (VISUAL FLOATING SPEED SWITCH)
  // =========================================================
  const fluxToggleBtn = document.getElementById('toggle-flux-btn');
  let fluxModes = [
    { label: 'FLUX: STABLE', labelFa: 'میدان: پایدار', class: '' },
    { label: 'FLUX: HIGH', labelFa: 'میدان: فعال', class: 'high-drift-mode' },
    { label: 'FLUX: WARP', labelFa: 'میدان: وارپ', class: 'hyperdrive-mode' }
  ];
  let currentFluxIdx = 0;

  if (fluxToggleBtn) {
    fluxToggleBtn.addEventListener('click', () => {
      document.body.classList.remove(fluxModes[currentFluxIdx].class);
      currentFluxIdx = (currentFluxIdx + 1) % fluxModes.length;
      const newMode = fluxModes[currentFluxIdx];

      if (newMode.class) {
        document.body.classList.add(newMode.class);
      }

      fluxToggleBtn.innerHTML = `<span>🌀</span> ${currentLang === 'fa' ? newMode.labelFa : newMode.label}`;

      if (window.SpaceCanvas) {
        window.SpaceCanvas.triggerGravitationalPulse();
      }

      if (window.SynthAudio) {
        window.SynthAudio.playGravityPulse();
      }
    });
  }

  // =========================================================
  // 6. PROJECT FILTERING SYSTEM
  // =========================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.transition = 'all 0.4s ease';
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // =========================================================
  // 7. PROJECT DETAILS MODAL (Dodge Or Seek & FoodPlanet)
  // =========================================================
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalEngine = document.getElementById('modal-engine');
  const modalBody = document.getElementById('modal-body');

  const projectDetails = {
    'dodge-or-seek': {
      en: {
        title: 'Dodge Or Seek',
        engine: 'Unreal Engine 5.6.1 // Tactical Physics Survival // Chaos Engine',
        body: `
          <p style="margin-bottom: 1rem; color: #cbd5e1;"><strong>Dodge Or Seek</strong> is a tactical physics survival and stealth game developed in Unreal Engine 5.6.1. Players are thrust into weightless orbital chambers where survival requires mastering kinetic momentum, precision trajectory control, and dynamic shadow manipulation.</p>
          <h4 style="color: #00f0ff; margin: 1rem 0 0.5rem;">Key Engineering & Design Highlights:</h4>
          <ul style="list-style: disc; margin-left: 1.5rem; color: #94a3b8; line-height: 1.8;">
            <li><strong>Chaos Physics Integration:</strong> Custom momentum conservation algorithms and multi-directional collision handling.</li>
            <li><strong>Adaptive Hunter AI:</strong> Behavioral trees utilizing auditory spatial sensors and dynamic occlusion to hunt players across 360-degree vertical geometry.</li>
            <li><strong>Lumen Real-time GI:</strong> Dynamic laser illumination, volumetric lighting, and real-time shadow casting.</li>
          </ul>
        `
      },
      fa: {
        title: 'Dodge Or Seek',
        engine: 'آنریل انجین ۵.۶.۱ // فیزیک تاکتیکی و بقا // موتور فیزیک Chaos',
        body: `
          <p style="margin-bottom: 1rem; color: #cbd5e1;"><strong>Dodge Or Seek</strong> یک اثر اکشن تاکتیکی و بقا در محیط‌های معلق فضایی است که با موتور Unreal Engine 5.6.1 توسعه یافته است. بازیکنان در اتاقک‌های اوربیتال قرار می‌گیرند و بقا نیازمند تسلط بر تکانه جنبشی، آکوستیک محیط و مخفی‌کاری در سایه‌ها است.</p>
          <h4 style="color: #00f0ff; margin: 1rem 0 0.5rem;">ویژگی‌های فنی و مهندسی:</h4>
          <ul style="list-style: disc; margin-right: 1.5rem; color: #94a3b8; line-height: 1.8;">
            <li><strong>پیاده‌سازی فیزیک Chaos:</strong> شبیه‌سازی دقیق بقای تکانه و برخوردهای فیزیکی چندجهته.</li>
            <li><strong>هوش مصنوعی تطبیق‌پذیر:</strong> درخت‌های رفتاری با سنسورهای صوتی سه‌بعدی برای ردیابی بازیکن در ۳۶۰ درجه.</li>
            <li><strong>نورپردازی سراسری لومن:</strong> انعکاس بلادرنگ پرتوهای نوری و سایه‌های حجمی در لحظه.</li>
          </ul>
        `
      }
    },
    'foodplanet': {
      en: {
        title: 'FoodPlanet',
        engine: 'Unreal Engine 5.6.1 // 3D Adventure // Stylized Real-time Rendering',
        body: `
          <p style="margin-bottom: 1rem; color: #cbd5e1;"><strong>FoodPlanet</strong> is a vibrant 3D adventure platformer set across fantastical celestial gastronomy worlds. Players guide burger-helmeted astronaut heroes through alien flora with dynamic physics and interactive environments.</p>
          <h4 style="color: #a855f7; margin: 1rem 0 0.5rem;">Key Engineering & World Design Highlights:</h4>
          <ul style="list-style: disc; margin-left: 1.5rem; color: #94a3b8; line-height: 1.8;">
            <li><strong>3D Character Rigging & Controls:</strong> Tight, responsive platforming character controllers with procedural secondary motion.</li>
            <li><strong>Dynamic Celestial Environments:</strong> Interactive planetary physics, gravity-defying ramps, and organic hazard encounters.</li>
            <li><strong>UE 5.6.1 Shader Optimization:</strong> High-performance stylized PBR shading running smoothly at 60 FPS.</li>
          </ul>
        `
      },
      fa: {
        title: 'FoodPlanet',
        engine: 'آنریل انجین ۵.۶.۱ // ماجراجویی سه‌بعدی // رندر بلادرنگ استایلایزد',
        body: `
          <p style="margin-bottom: 1rem; color: #cbd5e1;"><strong>FoodPlanet</strong> یک ماجراجویی سه‌بعدی شاداب و رنگارنگ در دنیاهای آسمانی خوراکی است. بازیکنان کاراکترهای فضانورد-برگری را در میان گیاهان فضایی غول‌پیکر با فیزیک پویا و پلتفرمینگ دقیق هدایت می‌کنند.</p>
          <h4 style="color: #a855f7; margin: 1rem 0 0.5rem;">نوآوری‌های فنی و طراحی دنیا:</h4>
          <ul style="list-style: disc; margin-right: 1.5rem; color: #94a3b8; line-height: 1.8;">
            <li><strong>کنترلر و ریگینگ سه‌بعدی کاراکتر:</strong> پلتفرمینگ روان و واکنش‌گرا همراه با انیمیشن‌های ثانویه پروسیجرال.</li>
            <li><strong>محیط‌های آسمانی تعاملی:</strong> موانع محیطی هوشمند و فیزیک سیاره‌ای پویا.</li>
            <li><strong>بهینه‌سازی شیدرها در UE 5.6.1:</strong> رندرینگ باکیفیت و استایلایزد با نرخ فریم پایدار ۶۰ فریم بر ثانیه.</li>
          </ul>
        `
      }
    }
  };

  document.querySelectorAll('.open-modal-trigger').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-project');
      const dataGroup = projectDetails[projId];

      if (dataGroup && modalBackdrop) {
        const langData = dataGroup[currentLang] || dataGroup.en;
        modalTitle.textContent = langData.title;
        modalEngine.textContent = langData.engine;
        modalBody.innerHTML = langData.body;
        modalBackdrop.classList.add('open');
      }
    });
  });

  if (modalCloseBtn && modalBackdrop) {
    modalCloseBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
    });

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
      }
    });
  }

  // =========================================================
  // 8. CONTACT FORM TRANSMISSION (FORMSPREE AJAX INTEGRATION)
  // Endpoint: https://formspree.io/f/xdeeqkgl
  // =========================================================
  const contactForm = document.getElementById('orbital-contact-form');
  const formStatus = document.getElementById('form-status-msg');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      const dict = i18nData[currentLang];

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>🛰️</span> ${dict.transmitting}`;

      if (formStatus) {
        formStatus.style.display = 'none';
        formStatus.innerHTML = '';
      }

      const formData = new FormData(contactForm);

      try {
        const response = await fetch('https://formspree.io/f/xdeeqkgl', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          submitBtn.innerHTML = `<span>✓</span> ${dict.transmitted}`;
          contactForm.reset();

          if (formStatus) {
            formStatus.style.display = 'block';
            formStatus.innerHTML = `
              <div style="background: rgba(0, 240, 255, 0.12); border: 1px solid #00f0ff; padding: 0.9rem; border-radius: 10px; color: #00f0ff; font-family: var(--font-mono); font-size: 0.85rem; margin-top: 1rem; line-height: 1.6;">
                ${dict.transmissionSuccess}
              </div>
            `;
            setTimeout(() => {
              formStatus.style.display = 'none';
              submitBtn.disabled = false;
              submitBtn.innerHTML = originalText;
            }, 7000);
          }

          if (window.SynthAudio) {
            window.SynthAudio.playClick();
          }
        } else {
          const data = await response.json();
          let errorMsg = dict.formError;
          if (data && data.errors && data.errors.length > 0) {
            errorMsg = data.errors.map(err => err.message).join(', ');
          }
          if (formStatus) {
            formStatus.style.display = 'block';
            formStatus.innerHTML = `
              <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; padding: 0.9rem; border-radius: 10px; color: #f87171; font-family: var(--font-mono); font-size: 0.85rem; margin-top: 1rem; line-height: 1.6;">
                ${errorMsg}
              </div>
            `;
          }
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      } catch (err) {
        if (formStatus) {
          formStatus.style.display = 'block';
          formStatus.innerHTML = `
            <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid #ef4444; padding: 0.9rem; border-radius: 10px; color: #f87171; font-family: var(--font-mono); font-size: 0.85rem; margin-top: 1rem; line-height: 1.6;">
              ${dict.formNetworkError}
            </div>
          `;
        }
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  // =========================================================
  // 9. MANUAL LANGUAGE TOGGLE VIA HUD
  // =========================================================
  const toggleLangBtn = document.getElementById('toggle-lang-btn');
  if (toggleLangBtn) {
    toggleLangBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'en' ? 'fa' : 'en';
      setLanguage(nextLang);
      if (window.SynthAudio) {
        window.SynthAudio.playClick();
      }
    });
  }

  // Initialize Language based on invisible auto-detection
  const detected = detectLanguage();
  setLanguage(detected);
})();
