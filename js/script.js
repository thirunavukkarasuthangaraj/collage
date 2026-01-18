// ===================================================
// VASANTH SCHOOL - Clean JavaScript
// With Tamil/English Language Support
// ===================================================

document.addEventListener('DOMContentLoaded', function() {

    // ===== Language Translations =====
    const translations = {
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.academics': 'Academics',
            'nav.admissions': 'Admissions',
            'nav.facilities': 'Facilities',
            'nav.gallery': 'Gallery',
            'nav.contact': 'Contact',
            'nav.applyNow': 'Apply Now',

            // Top Bar & Announcement
            'topbar.feePayment': 'Online Fee Payment',
            'announcement.text': 'Admissions Open 2026-27 | Vasanth Nursery And Primary School - 1st to 5th Standard',

            // Hero Section
            'hero.badge': '🎓 Quality Primary Education',
            'hero.title': 'Nurturing <span>Young Minds</span> for a Brighter Future',
            'hero.subtitle': 'Vasanth Nursery And Primary School provides quality education from 1st to 5th standard with digital classrooms, experienced teachers, and safe transport facility in Tirupattur.',
            'hero.applyNow': 'Apply for Admission',
            'hero.learnMore': 'Learn More',

            // Stats
            'stats.years': 'Years of Excellence',
            'stats.students': 'Students Enrolled',
            'stats.teachers': 'Qualified Teachers',
            'stats.results': 'Pass Rate',

            // Features
            'features.label': 'Why Choose Us',
            'features.title': 'Building Tomorrow\'s Leaders',
            'features.desc': 'We provide holistic education that nurtures academic excellence and character development.',
            'features.quality': 'Quality Education',
            'features.qualityDesc': 'Strong academic foundation with focus on holistic development.',
            'features.faculty': 'Expert Faculty',
            'features.facultyDesc': '20+ qualified teachers dedicated to student success.',
            'features.modern': 'Digital Classroom',
            'features.modernDesc': 'Modern smart boards, projectors & interactive learning tools.',
            'features.holistic': 'Safe Transport',
            'features.holisticDesc': 'GPS-enabled buses covering all areas of Tirupattur.',

            // About
            'about.label': 'About Our School',
            'about.title': 'The Best Primary School in Tirupattur',
            'about.years': 'Years',
            'about.desc1': 'Vasanth Nursery And Primary School is committed to providing quality education that builds strong foundations for young learners from 1st to 5th standard.',
            'about.desc2': 'Our mission is to develop well-rounded individuals who are academically proficient and ready for higher education.',
            'about.list1': 'Digital classrooms with smart boards',
            'about.list2': 'Safe transport facility across Tirupattur',
            'about.list3': '20+ experienced and caring teachers',
            'about.list4': 'Safe and secure campus',
            'about.learnMore': 'Learn More',

            // Programs
            'programs.label': 'Academic Programs',
            'programs.title': 'Classes We Offer',
            'programs.desc': 'Quality education for every stage of primary schooling.',
            'programs.primary': 'Junior Primary',
            'programs.primaryDesc': 'Class 1-2: Building strong foundations through activity-based learning.',
            'programs.middle': 'Middle Primary',
            'programs.middleDesc': 'Class 3-4: Developing analytical skills with subject-specific knowledge.',
            'programs.high': 'Senior Primary',
            'programs.highDesc': 'Class 5: Comprehensive academics preparing for higher education.',
            'programs.learnMore': 'Learn More →',

            // Principal
            'principal.label': 'Leadership',
            'principal.title': 'Principal\'s Message',
            'principal.name': 'Principal',
            'principal.role': 'Head of School',
            'principal.message': '"At Vasanth Nursery And Primary School, we believe every child is unique with unlimited potential. Our dedicated team works tirelessly to nurture young minds, instill values, and prepare them for a successful future."',
            'principal.exp': 'Years Experience',
            'principal.qual': 'Qualification',

            // Transport
            'transport.label': 'Transport',
            'transport.title': 'Safe & Reliable Transportation',
            'transport.desc': 'GPS-enabled buses covering all major areas of Tirupattur.',
            'transport.fleet': 'School Buses',
            'transport.fleetDesc': 'Well-maintained buses with regular safety inspections.',
            'transport.gps': 'GPS Tracking',
            'transport.gpsDesc': 'Real-time tracking for parents to monitor journeys.',
            'transport.staff': 'Trained Staff',
            'transport.staffDesc': 'Experienced drivers and attendants on every bus.',

            // Admission Page
            'admission.title': 'Admissions 2026-27',
            'admission.subtitle': 'Join Vasanth Nursery And Primary School and give your child the best primary education. Now accepting applications for 1st to 5th Standard.',
            'admission.applyBtn': 'Start Application',
            'admission.processLabel': 'How to Apply',
            'admission.processTitle': 'Simple Admission Process',
            'admission.processDesc': 'Follow these easy steps to enroll your child.',
            'admission.step1': 'Register Online',
            'admission.step1Desc': 'Fill the online application form.',
            'admission.step2': 'Submit Documents',
            'admission.step2Desc': 'Provide required documents.',
            'admission.step3': 'Interaction',
            'admission.step3Desc': 'Meet with administration.',
            'admission.step4': 'Confirmation',
            'admission.step4Desc': 'Complete enrollment.',
            'admission.formLabel': 'Apply Now',
            'admission.formTitle': 'Register for Admission',
            'admission.formDesc': 'Fill the form and we\'ll contact you within 24 hours.',
            'admission.documentsTitle': 'Documents Required',
            'admission.doc1': 'Birth Certificate',
            'admission.doc2': 'Aadhar Card',
            'admission.doc3': 'Transfer Certificate',
            'admission.doc4': 'Passport Photos (4)',
            'admission.doc5': 'Community Certificate',
            'admission.doc6': 'Previous Marksheet',

            // Fee Section
            'fee.label': 'Fee Structure',
            'fee.title': 'Transparent Pricing',
            'fee.desc': 'Affordable quality education with flexible payment options.',
            'fee.primary': 'Primary School',
            'fee.primaryGrade': 'Class 1 to 5',
            'fee.middle': '',
            'fee.middleGrade': '',
            'fee.high': '',
            'fee.highGrade': '',
            'fee.item1': 'Tuition Fee',
            'fee.item2': 'Books & Notebooks',
            'fee.item3': 'Uniform (2 Sets)',
            'fee.item4': 'Activity Materials',
            'fee.item5': '',
            'fee.applyNow': 'Apply Now'
        },
        ta: {
            // Navigation
            'nav.home': 'முகப்பு',
            'nav.about': 'எங்களை பற்றி',
            'nav.academics': 'கல்வி',
            'nav.admissions': 'சேர்க்கை',
            'nav.facilities': 'வசதிகள்',
            'nav.gallery': 'புகைப்படம்',
            'nav.contact': 'தொடர்பு',
            'nav.applyNow': 'விண்ணப்பிக்க',

            // Top Bar & Announcement
            'topbar.feePayment': 'கட்டணம் செலுத்த',
            'announcement.text': '2026-27 சேர்க்கை தொடங்கியது | வசந்த் நர்சரி மற்றும் தொடக்கப் பள்ளி - 1 முதல் 5ம் வகுப்பு',

            // Hero Section
            'hero.badge': '🎓 தரமான தொடக்கக் கல்வி',
            'hero.title': '<span>இளம் மனங்களை</span> ஒளிமயமான எதிர்காலத்திற்கு வளர்க்கிறோம்',
            'hero.subtitle': 'வசந்த் நர்சரி மற்றும் தொடக்கப் பள்ளி 1 முதல் 5ம் வகுப்பு வரை டிஜிட்டல் வகுப்பறைகள், அனுபவமிக்க ஆசிரியர்கள் மற்றும் பாதுகாப்பான போக்குவரத்துடன் தரமான கல்வியை வழங்குகிறது.',
            'hero.applyNow': 'சேர்க்கைக்கு விண்ணப்பிக்க',
            'hero.learnMore': 'மேலும் அறிய',

            // Stats
            'stats.years': 'ஆண்டுகள் சிறப்பு',
            'stats.students': 'மாணவர்கள்',
            'stats.teachers': 'ஆசிரியர்கள்',
            'stats.results': 'தேர்ச்சி விகிதம்',

            // Features
            'features.label': 'எங்களை ஏன் தேர்வு செய்ய வேண்டும்',
            'features.title': 'நாளைய தலைவர்களை உருவாக்குகிறோம்',
            'features.desc': 'கல்வி சிறப்பு மற்றும் குணநலன் வளர்ச்சியை ஊக்குவிக்கும் முழுமையான கல்வி.',
            'features.quality': 'தரமான கல்வி',
            'features.qualityDesc': 'முழுமையான வளர்ச்சியுடன் வலுவான கல்வி அடித்தளம்.',
            'features.faculty': 'திறமையான ஆசிரியர்கள்',
            'features.facultyDesc': 'மாணவர் வெற்றிக்கு அர்ப்பணிக்கப்பட்ட 20+ ஆசிரியர்கள்.',
            'features.modern': 'டிஜிட்டல் வகுப்பறை',
            'features.modernDesc': 'நவீன ஸ்மார்ட் போர்டுகள், புரொஜெக்டர்கள் & கற்றல் கருவிகள்.',
            'features.holistic': 'பாதுகாப்பான போக்குவரத்து',
            'features.holisticDesc': 'திருப்பத்தூரின் அனைத்து பகுதிகளிலும் GPS பேருந்துகள்.',

            // About
            'about.label': 'எங்கள் பள்ளி',
            'about.title': 'திருப்பத்தூரின் சிறந்த தொடக்கப் பள்ளி',
            'about.years': 'ஆண்டுகள்',
            'about.desc1': 'வசந்த் நர்சரி மற்றும் தொடக்கப் பள்ளி 1 முதல் 5ம் வகுப்பு வரை இளம் மாணவர்களுக்கு வலுவான அடித்தளத்தை உருவாக்கும் தரமான கல்வியை வழங்குகிறது.',
            'about.desc2': 'கல்வியில் திறமையான மற்றும் உயர் கல்விக்கு தயாரான தனிநபர்களை உருவாக்குவது எங்கள் நோக்கம்.',
            'about.list1': 'ஸ்மார்ட் போர்டுகளுடன் டிஜிட்டல் வகுப்பறைகள்',
            'about.list2': 'திருப்பத்தூர் முழுவதும் பாதுகாப்பான போக்குவரத்து',
            'about.list3': '20+ அனுபவமும் அக்கறையும் கொண்ட ஆசிரியர்கள்',
            'about.list4': 'பாதுகாப்பான வளாகம்',
            'about.learnMore': 'மேலும் அறிய',

            // Programs
            'programs.label': 'கல்வி திட்டங்கள்',
            'programs.title': 'நாங்கள் வழங்கும் வகுப்புகள்',
            'programs.desc': 'தொடக்கக் கல்வியின் ஒவ்வொரு நிலைக்கும் தரமான கல்வி.',
            'programs.primary': 'ஜூனியர் தொடக்கம்',
            'programs.primaryDesc': 'வகுப்பு 1-2: செயல்பாடு கற்றல் மூலம் வலுவான அடித்தளம்.',
            'programs.middle': 'நடுநிலை தொடக்கம்',
            'programs.middleDesc': 'வகுப்பு 3-4: பாட அறிவுடன் பகுப்பாய்வு திறன்கள்.',
            'programs.high': 'மூத்த தொடக்கம்',
            'programs.highDesc': 'வகுப்பு 5: உயர் கல்விக்கு தயாரிக்கும் முழுமையான கல்வி.',
            'programs.learnMore': 'மேலும் அறிய →',

            // Principal
            'principal.label': 'தலைமை',
            'principal.title': 'தலைமை ஆசிரியர் செய்தி',
            'principal.name': 'தலைமை ஆசிரியர்',
            'principal.role': 'பள்ளி தலைவர்',
            'principal.message': '"வசந்த் நர்சரி மற்றும் தொடக்கப் பள்ளியில், ஒவ்வொரு குழந்தையும் எல்லையற்ற திறனுடன் தனித்துவமானது என்று நாங்கள் நம்புகிறோம். எங்கள் அர்ப்பணிப்பான குழு இளம் மனங்களை வளர்க்க, மதிப்புகளை புகட்ட, வெற்றிகரமான எதிர்காலத்திற்கு தயார்படுத்த இடைவிடாமல் உழைக்கிறது."',
            'principal.exp': 'ஆண்டுகள் அனுபவம்',
            'principal.qual': 'தகுதி',

            // Transport
            'transport.label': 'போக்குவரத்து',
            'transport.title': 'பாதுகாப்பான போக்குவரத்து',
            'transport.desc': 'திருப்பத்தூரின் அனைத்து முக்கிய பகுதிகளிலும் GPS பேருந்துகள்.',
            'transport.fleet': 'பள்ளி பேருந்துகள்',
            'transport.fleetDesc': 'வழக்கமான பாதுகாப்பு ஆய்வுகளுடன் பராமரிக்கப்படும் பேருந்துகள்.',
            'transport.gps': 'GPS கண்காணிப்பு',
            'transport.gpsDesc': 'பெற்றோர்களுக்கு நிகழ்நேர கண்காணிப்பு.',
            'transport.staff': 'பயிற்சி பெற்ற ஊழியர்கள்',
            'transport.staffDesc': 'அனுபவமிக்க ஓட்டுநர்கள் மற்றும் உதவியாளர்கள்.',

            // Admission Page
            'admission.title': '2026-27 சேர்க்கை',
            'admission.subtitle': 'வசந்த் நர்சரி மற்றும் தொடக்கப் பள்ளியில் சேர்ந்து உங்கள் குழந்தைக்கு சிறந்த தொடக்கக் கல்வியை வழங்குங்கள். 1 முதல் 5ம் வகுப்பு வரை விண்ணப்பங்கள் ஏற்றுக்கொள்ளப்படுகின்றன.',
            'admission.applyBtn': 'விண்ணப்பிக்க',
            'admission.processLabel': 'எப்படி விண்ணப்பிப்பது',
            'admission.processTitle': 'எளிய சேர்க்கை செயல்முறை',
            'admission.processDesc': 'உங்கள் குழந்தையை சேர்க்க இந்த எளிய படிகளைப் பின்பற்றுங்கள்.',
            'admission.step1': 'ஆன்லைன் பதிவு',
            'admission.step1Desc': 'விண்ணப்ப படிவத்தை நிரப்பவும்.',
            'admission.step2': 'ஆவணங்கள் சமர்ப்பி',
            'admission.step2Desc': 'தேவையான ஆவணங்களை வழங்கவும்.',
            'admission.step3': 'நேர்காணல்',
            'admission.step3Desc': 'நிர்வாகத்துடன் சந்திப்பு.',
            'admission.step4': 'உறுதிப்படுத்தல்',
            'admission.step4Desc': 'சேர்க்கையை முடிக்கவும்.',
            'admission.formLabel': 'இப்போது விண்ணப்பிக்க',
            'admission.formTitle': 'சேர்க்கைக்கு பதிவு செய்யுங்கள்',
            'admission.formDesc': 'படிவத்தை நிரப்பவும், 24 மணி நேரத்திற்குள் தொடர்பு கொள்வோம்.',
            'admission.documentsTitle': 'தேவையான ஆவணங்கள்',
            'admission.doc1': 'பிறப்பு சான்றிதழ்',
            'admission.doc2': 'ஆதார் அட்டை',
            'admission.doc3': 'மாற்று சான்றிதழ்',
            'admission.doc4': 'பாஸ்போர்ட் புகைப்படங்கள் (4)',
            'admission.doc5': 'சமூக சான்றிதழ்',
            'admission.doc6': 'முந்தைய மதிப்பெண் பட்டியல்',

            // Fee Section
            'fee.label': 'கட்டண அமைப்பு',
            'fee.title': 'வெளிப்படையான கட்டணம்',
            'fee.desc': 'நெகிழ்வான கட்டண விருப்பங்களுடன் தரமான கல்வி.',
            'fee.primary': 'தொடக்கப் பள்ளி',
            'fee.primaryGrade': '1 முதல் 5ம் வகுப்பு',
            'fee.middle': '',
            'fee.middleGrade': '',
            'fee.high': '',
            'fee.highGrade': '',
            'fee.item1': 'கற்பித்தல் கட்டணம்',
            'fee.item2': 'புத்தகங்கள் & நோட்புக்குகள்',
            'fee.item3': 'சீருடை (2 செட்)',
            'fee.item4': 'செயல்பாடு பொருட்கள்',
            'fee.item5': '',
            'fee.applyNow': 'இப்போது விண்ணப்பிக்க'
        }
    };

    // ===== Language Switcher =====
    const langBtns = document.querySelectorAll('.lang-btn');
    const langSwitchBtns = document.querySelectorAll('.lang-switch button');
    let currentLang = localStorage.getItem('language') || 'en';

    setLanguage(currentLang);

    // Support for .lang-btn buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });

    // Support for .lang-switch buttons (English/Tamil toggle)
    langSwitchBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const lang = index === 0 ? 'en' : 'ta';
            setLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });

    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.lang = lang;

        // Update .lang-btn buttons
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update .lang-switch buttons
        langSwitchBtns.forEach((btn, index) => {
            btn.classList.toggle('active', (index === 0 && lang === 'en') || (index === 1 && lang === 'ta'));
        });

        // Support for data-lang-key system
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Support for .lang-en / .lang-ta span system
        document.querySelectorAll('.lang-en').forEach(el => {
            el.style.display = lang === 'en' ? 'inline' : 'none';
        });
        document.querySelectorAll('.lang-ta').forEach(el => {
            el.style.display = lang === 'ta' ? 'inline' : 'none';
        });
    }

    // ===== Header Scroll Effect =====
    const header = document.getElementById('header');

    if (header) {
        const handleScroll = () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
    }

    // ===== Mobile Menu =====
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });

        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', function(e) {
            if (nav.classList.contains('active') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                menuToggle.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ===== Smooth Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
            }
        });
    });

    // ===== Lightbox =====
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    window.openLightbox = function(element) {
        if (lightbox && lightboxImg) {
            const img = element.querySelector('img');
            let imgSrc = img.src.replace(/w=\d+/, 'w=1400').replace(/h=\d+/, 'h=1000');
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeLightbox = function() {
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
        });
    }

    // ===== Form Handling =====
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;
            form.querySelectorAll('[required]').forEach(field => {
                field.style.borderColor = '';
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ef4444';
                }
            });

            const emailField = form.querySelector('input[type="email"]');
            if (emailField && emailField.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
                isValid = false;
                emailField.style.borderColor = '#ef4444';
            }

            const phoneField = form.querySelector('input[type="tel"]');
            if (phoneField && phoneField.value && !/^[\d\s+()-]{10,}$/.test(phoneField.value)) {
                isValid = false;
                phoneField.style.borderColor = '#ef4444';
            }

            if (isValid) {
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.textContent;
                btn.textContent = currentLang === 'ta' ? 'வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!' : 'Submitted Successfully!';
                btn.style.background = '#10b981';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    form.reset();
                }, 3000);
            }
        });

        form.querySelectorAll('input, textarea, select').forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '';
            });
        });
    });

    // ===== Scroll Animations =====
    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                animateOnScroll.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .about-image, .about-content, .section-header').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
        animateOnScroll.observe(el);
    });

    // ===== Counter Animation =====
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const text = counter.textContent;
                const match = text.match(/(\d+)/);
                if (match) {
                    const target = parseInt(match[0]);
                    const suffix = text.replace(match[0], '');
                    let count = 0;
                    const increment = target / 60;
                    const updateCounter = () => {
                        count += increment;
                        if (count < target) {
                            counter.textContent = Math.floor(count) + suffix;
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + suffix;
                        }
                    };
                    updateCounter();
                    counterObserver.unobserve(counter);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item h3, .stat-card h3').forEach(counter => {
        counterObserver.observe(counter);
    });

    // ===== Active Navigation =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === currentPage);
    });

    // ===== Page Load Animation =====
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';

// ===== Global Language Switcher (for mobile sidebar buttons) =====
window.switchLanguage = function(lang) {
    // Update localStorage
    localStorage.setItem('language', lang);

    // Update document lang
    document.documentElement.lang = lang;

    // Update .lang-btn buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update .lang-switch buttons
    document.querySelectorAll('.lang-switch button').forEach((btn, index) => {
        btn.classList.toggle('active', (index === 0 && lang === 'en') || (index === 1 && lang === 'ta'));
    });

    // Support for .lang-en / .lang-ta span system
    document.querySelectorAll('.lang-en').forEach(el => {
        el.style.display = lang === 'en' ? 'inline' : 'none';
    });
    document.querySelectorAll('.lang-ta').forEach(el => {
        el.style.display = lang === 'ta' ? 'inline' : 'none';
    });

    // Update mobile sidebar language buttons styling
    const mobileLangBtns = document.querySelectorAll('#mobileSidebar button[onclick*="switchLanguage"]');
    mobileLangBtns.forEach(btn => {
        const isEnglish = btn.onclick.toString().includes("'en'");
        if ((isEnglish && lang === 'en') || (!isEnglish && lang === 'ta')) {
            btn.style.background = '#2b6cb0';
            btn.style.color = '#fff';
        } else {
            btn.style.background = '#e2e8f0';
            btn.style.color = '#1a365d';
        }
    });
};

// ===== Features Slider =====
// Using IIFE to avoid variable conflicts with inline scripts
(function() {
    var featureSlideIndex = 0;
    var featureTotalSlides = 4;
    var featureSlideInterval;

    function showFeatureSlide(index) {
        var slides = document.querySelectorAll('.feature-slide');
        var dots = document.querySelectorAll('.slider-dots .dot');

        if (slides.length === 0) return;

        // Handle wrap-around
        if (index >= featureTotalSlides) featureSlideIndex = 0;
        else if (index < 0) featureSlideIndex = featureTotalSlides - 1;
        else featureSlideIndex = index;

        // Update slides
        slides.forEach(function(slide, i) {
            slide.classList.toggle('active', i === featureSlideIndex);
        });

        // Update dots
        dots.forEach(function(dot, i) {
            dot.classList.toggle('active', i === featureSlideIndex);
        });
    }

    window.changeSlide = function(direction) {
        showFeatureSlide(featureSlideIndex + direction);
        clearInterval(featureSlideInterval);
        startFeatureSlideInterval();
    };

    window.goToFeatureSlide = function(index) {
        showFeatureSlide(index);
        clearInterval(featureSlideInterval);
        startFeatureSlideInterval();
    };

    function startFeatureSlideInterval() {
        featureSlideInterval = setInterval(function() {
            window.changeSlide(1);
        }, 5000);
    }

    // Initialize slider on page load
    document.addEventListener('DOMContentLoaded', function() {
        if (document.querySelector('.features-slider')) {
            showFeatureSlide(0);
            startFeatureSlideInterval();
        }
    });
})();
