/**
 * RouteGuard Landing Page Scripts
 * Handles theme toggling (Dark/Light mode), EN/ES i18n localization,
 * accessible mobile navigation, and Terms & Conditions dialog.
 */

const TRANSLATIONS = {
    en: {
        meta_title: 'RouteGuard - Real-Time School Transport Monitoring',
        meta_description:
            'Smart platform for school transport fleet management and real-time GPS monitoring. Keep children safe and bring peace of mind to families and drivers.',
        skip_to_content: 'Skip to main content',
        nav_problem: 'Problem',
        nav_solution: 'Solution',
        nav_features: 'Features',
        nav_plans: 'Plans',
        nav_product: 'Product',
        nav_videos: 'Videos',
        nav_team: 'Team',
        nav_repo: 'View Repository',
        hero_badge: 'Smart School Mobility · Android & Flutter',
        hero_title:
            'The safety and peace of mind your children deserve, in <span class="text-blue-900 dark:text-blue-400">real time</span>.',
        hero_subtitle:
            'Intelligent fleet management and private school transport monitoring ecosystem. Eliminate daily uncertainty and phone calls while driving.',
        hero_cta_primary: 'Explore Features',
        hero_cta_secondary: 'Watch Product Videos',
        hero_pill_1: 'Native Kotlin Driver App',
        hero_pill_2: 'Flutter Cross-Platform App',
        hero_pill_3: 'Bilingual EN / ES & Offline-First',
        problem_title: "The challenge of today's school transport",
        problem_subtitle:
            'Informal coordination through phone calls and chat messages compromises road safety and creates daily stress for families.',
        problem_1_title: 'Daily Uncertainty',
        problem_1_desc:
            "Parents wait without real-time visibility of the vehicle's exact location or arrival ETA in heavy urban traffic.",
        problem_2_title: 'Driver Distraction',
        problem_2_desc:
            'Drivers face cognitive overload trying to answer phone calls and manually report route updates while driving.',
        problem_3_title: 'Informal Operations',
        problem_3_desc:
            'Reliance on paper rosters and cluttered group chats hinders scalable fleet control, billing, and authorized pickups.',
        solution_badge: 'Dual Architecture',
        solution_title: 'A connected ecosystem for administrators, drivers, and families',
        solution_desc:
            'RouteGuard delivers full 3-role parity across its Android Native (Kotlin) and Cross-Platform (Flutter) clients backed by an ASP.NET Core 10 RESTful API.',
        solution_bullet_1:
            '<strong class="text-slate-900 dark:text-white">Native App for Drivers &amp; Fleets:</strong> Background GPS tracking, Room offline persistence, and one-tap boarding check-in with undo protection.',
        solution_bullet_2:
            '<strong class="text-slate-900 dark:text-white">Flutter Cross-Platform App:</strong> Interactive live OpenStreetMap view, authorized caregiver network, push alerts, and instant EN/ES switching.',
        solution_impact_title: 'Proven Engineering Impact',
        solution_impact_desc:
            'Built with Lean UX, Domain-Driven Design (DDD), automated unit/widget testing, and CI/CD delivery to Firebase App Distribution.',
        solution_metric_1: 'End-to-end route traceability',
        solution_metric_2: 'Automated CI tests (Native + Flutter)',
        features_title: 'Core Features',
        features_subtitle: 'Purpose-built tools to keep every school trip safe, traceable, and accessible.',
        feat_1_title: 'Live GPS Telemetry',
        feat_1_desc:
            'Real-time location streaming with ETA calculation, vehicle speed indicator, and interactive map stops.',
        feat_2_title: 'Offline Check-in & Sync',
        feat_2_desc:
            'Local Room storage and resilient offline demo fallback keep student boarding logs working even without mobile signal.',
        feat_3_title: 'Caregiver Network & Alerts',
        feat_3_desc:
            'Authorized pickup caregivers, instant push notifications via FCM, direct driver calling, and live English/Spanish switching.',
        plans_badge: 'Flexible Plans',
        plans_title: 'Scale confidently with your school fleet',
        plans_subtitle:
            'Choose the subscription tier integrated directly with Stripe in RouteGuard Mobile and Flutter.',
        plan_period: '/ month',
        plan_popular_badge: 'Recommended',
        plan_basic_name: 'Basic',
        plan_basic_desc: 'Essential monitoring for small school transport operations.',
        plan_basic_f1: 'Up to 2 concurrent school routes',
        plan_basic_f2: 'Up to 2 registered drivers',
        plan_basic_f3: 'Real-time GPS telemetry tracking',
        plan_basic_f4: 'Parent app with authorized caregiver network',
        plan_inter_name: 'Intermediate',
        plan_inter_desc: 'Recommended option for growing mobility fleets.',
        plan_inter_f1: 'Up to 5 concurrent school routes',
        plan_inter_f2: 'Up to 5 registered drivers',
        plan_inter_f3: 'Real-time GPS telemetry tracking',
        plan_inter_f4: 'Parent app with authorized caregiver network',
        plan_complete_name: 'Complete',
        plan_complete_desc: 'For schools and high-demand transport fleets.',
        plan_complete_f1: 'Up to 15 concurrent school routes',
        plan_complete_f2: 'Up to 15 registered drivers',
        plan_complete_f3: 'Real-time GPS telemetry tracking',
        plan_complete_f4: 'Parent app with authorized caregiver network',
        plan_complete_f5: '24/7 priority phone and WhatsApp support',
        plan_cta: 'See in App',
        plan_cta_featured: 'Explore Project Docs',
        product_title: 'Product in Action',
        product_subtitle: 'Explore the unified mobile experience across our Native Android and Flutter apps.',
        product_cap_1: 'Android Native · Driver Trip & Boarding Control',
        product_cap_2: 'Flutter App · Live Parent Tracking & Direct Call',
        product_cap_3: 'Multi-Role Switcher, Interactive Guide & ES/EN i18n',
        videos_badge: 'Project Videos',
        videos_title: 'About the Product, Team & Validation',
        videos_subtitle:
            'Watch our product pitch, engineering team retrospective, and live user validation sessions.',
        video_product_title: 'About the Product',
        video_product_desc: 'Business model, live telemetry demo, and parent/driver testimonials.',
        video_team_title: 'About the Team',
        video_team_desc: 'RouteGolem Scrum retrospective, GitFlow process, and engineering learnings.',
        video_validation_title: 'See a Real User Testing RouteGuard',
        video_validation_desc:
            'Usability validation session evaluating real interaction flows and interface clarity.',
        team_title: 'RouteGolem Team',
        team_subtitle:
            'Software Engineering students committed to school transport innovation and road safety.',
        team_career: 'Software Engineering',
        cta_title: 'Transform school transport safety today',
        cta_desc:
            'Explore our official GitHub organization with complete documentation, Native & Flutter mobile repositories, and CI/CD pipelines.',
        cta_button: 'Access Project Repository',
        footer_course:
            'Universidad Peruana de Ciencias Aplicadas (UPC) • Mobile Application Development (NRC 4945)',
        footer_terms: 'Terms & Conditions',
        terms_title: 'Terms & Conditions of Service',
        terms_intro:
            'RouteGuard operates under strict ethical and professional responsibility principles aligned with the ACM/IEEE Software Engineering Code of Ethics and the Colegio de Ingenieros del Perú (CIP).',
        terms_h1: '1. Child Safety & Geolocation Data Privacy',
        terms_p1:
            'Real-time GPS telemetry and boarding records are processed exclusively for authorized guardians, caregivers, assigned drivers, and fleet administrators. Location history is encrypted in transit via HTTPS and never shared with unauthorized third parties.',
        terms_h2: '2. Authorized Pickup & Accountability',
        terms_p2:
            'Fleet administrators and parents are responsible for keeping the authorized caregiver network up to date. Drivers must prioritize road safety by using hands-free boarding workflows and avoiding manual device manipulation while driving.',
        terms_h3: '3. Subscriptions & Academic Scope',
        terms_p3:
            'Service plans (Basic S/ 49.99, Intermediate S/ 99.99, Complete S/ 179.99) operate via Stripe test mode integration for educational demonstration within course 1ACC0238 at UPC.',
        terms_close_btn: 'Understood',
        github_modal_title: 'Leaving RouteGuard Landing Page',
        github_modal_desc:
            'You are about to be redirected to an external GitHub repository belonging to the RouteGolem organization.',
        github_modal_cancel: 'Cancel',
        github_modal_continue: 'Continue to GitHub',
    },
    es: {
        meta_title: 'RouteGuard - Monitoreo de Transporte Escolar en Tiempo Real',
        meta_description:
            'Plataforma inteligente para la gestión de flotas y monitoreo del transporte escolar privado. Brinda seguridad a tus hijos y tranquilidad a tu familia.',
        skip_to_content: 'Saltar al contenido principal',
        nav_problem: 'Problema',
        nav_solution: 'Solución',
        nav_features: 'Características',
        nav_plans: 'Planes',
        nav_product: 'Producto',
        nav_videos: 'Videos',
        nav_team: 'Equipo',
        nav_repo: 'Ver Repositorio',
        hero_badge: 'Movilidad Escolar Inteligente · Android y Flutter',
        hero_title:
            'La seguridad y tranquilidad que tus hijos merecen, en <span class="text-blue-900 dark:text-blue-400">tiempo real</span>.',
        hero_subtitle:
            'Ecosistema inteligente para la gestión de flotas y monitoreo del transporte escolar privado. Olvídate de la incertidumbre y las llamadas al volante.',
        hero_cta_primary: 'Explorar Características',
        hero_cta_secondary: 'Ver Videos del Producto',
        hero_pill_1: 'App Nativa Kotlin para Conductores',
        hero_pill_2: 'App Multiplataforma en Flutter',
        hero_pill_3: 'Bilingüe ES / EN y Modo Offline',
        problem_title: 'El desafío del transporte escolar actual',
        problem_subtitle:
            'La coordinación informal basada en llamadas y mensajes pone en riesgo la seguridad vial y genera estrés diario en las familias.',
        problem_1_title: 'Incertidumbre Diaria',
        problem_1_desc:
            'Los padres esperan sin visibilidad en tiempo real de la ubicación exacta ni del tiempo estimado de llegada ante el tráfico urbano.',
        problem_2_title: 'Distracción al Volante',
        problem_2_desc:
            'Los conductores sufren sobrecarga cognitiva intentando contestar llamadas y reportar avances de ruta manualmente mientras manejan.',
        problem_3_title: 'Operaciones Informales',
        problem_3_desc:
            'El uso de listas en papel y chats saturados dificulta el control escalable de flotas, cobros y recojo autorizado.',
        solution_badge: 'Arquitectura Dual',
        solution_title: 'Un ecosistema conectado para administradores, conductores y familias',
        solution_desc:
            'RouteGuard ofrece paridad completa de 3 roles en sus clientes Android Nativo (Kotlin) y Multiplataforma (Flutter) respaldados por una API RESTful ASP.NET Core 10.',
        solution_bullet_1:
            '<strong class="text-slate-900 dark:text-white">App Nativa para Conductores y Flotas:</strong> GPS en segundo plano, persistencia offline con Room y registro de abordaje con protección ante toques accidentales.',
        solution_bullet_2:
            '<strong class="text-slate-900 dark:text-white">App Multiplataforma en Flutter:</strong> Mapa interactivo en vivo con OpenStreetMap, red de cuidadores autorizados, alertas push e idioma ES/EN instantáneo.',
        solution_impact_title: 'Impacto de Ingeniería Comprobado',
        solution_impact_desc:
            'Construido bajo Lean UX, Domain-Driven Design (DDD), pruebas automatizadas unitarias y de widgets, y entrega continua CI/CD en Firebase App Distribution.',
        solution_metric_1: 'Trazabilidad integral de ruta',
        solution_metric_2: 'Pruebas automatizadas en CI (Native + Flutter)',
        features_title: 'Características Principales',
        features_subtitle:
            'Herramientas diseñadas para que cada traslado escolar sea seguro, trazable y accesible.',
        feat_1_title: 'Telemetría GPS en Vivo',
        feat_1_desc:
            'Transmisión de ubicación en tiempo real con cálculo de ETA, velocidad del vehículo y paraderos interactivos en mapa.',
        feat_2_title: 'Check-in Offline y Sincronización',
        feat_2_desc:
            'Almacenamiento local con Room y respaldo demostrativo offline para registrar abordajes incluso sin cobertura móvil.',
        feat_3_title: 'Red Familiar y Alertas',
        feat_3_desc:
            'Cuidadores autorizados para entrega, notificaciones push vía FCM, llamada directa al conductor e idioma ES/EN en caliente.',
        plans_badge: 'Planes Flexibles',
        plans_title: 'Escala con confianza junto a tu flota escolar',
        plans_subtitle:
            'Elige el plan integrado directamente con Stripe en RouteGuard Mobile y RouteGuard Flutter.',
        plan_period: '/ mes',
        plan_popular_badge: 'Recomendado',
        plan_basic_name: 'Básico',
        plan_basic_desc: 'Monitoreo esencial para pequeñas operaciones de transporte escolar.',
        plan_basic_f1: 'Hasta 2 rutas escolares concurrentes',
        plan_basic_f2: 'Hasta 2 conductores registrados',
        plan_basic_f3: 'Monitoreo telemétrico GPS en tiempo real',
        plan_basic_f4: 'App para padres con red de cuidadores autorizados',
        plan_inter_name: 'Intermedio',
        plan_inter_desc: 'La opción recomendada para empresas de movilidad en crecimiento.',
        plan_inter_f1: 'Hasta 5 rutas escolares concurrentes',
        plan_inter_f2: 'Hasta 5 conductores registrados',
        plan_inter_f3: 'Monitoreo telemétrico GPS en tiempo real',
        plan_inter_f4: 'App para padres con red de cuidadores autorizados',
        plan_complete_name: 'Completo',
        plan_complete_desc: 'Para instituciones educativas y flotas escolares de alta demanda.',
        plan_complete_f1: 'Hasta 15 rutas escolares concurrentes',
        plan_complete_f2: 'Hasta 15 conductores registrados',
        plan_complete_f3: 'Monitoreo telemétrico GPS en tiempo real',
        plan_complete_f4: 'App para padres con red de cuidadores autorizados',
        plan_complete_f5: 'Soporte telefónico y WhatsApp prioritario 24/7',
        plan_cta: 'Ver en la App',
        plan_cta_featured: 'Explorar Documentación',
        product_title: 'Producto en Acción',
        product_subtitle:
            'Explora la experiencia móvil unificada en nuestras aplicaciones Android Nativo y Flutter.',
        product_cap_1: 'Android Nativo · Viaje del Conductor y Control de Abordaje',
        product_cap_2: 'App Flutter · Seguimiento en Vivo y Llamada Directa',
        product_cap_3: 'Cambio de Rol, Guía Interactiva e Idioma ES/EN',
        videos_badge: 'Videos del Proyecto',
        videos_title: 'About the Product, Team y Validación',
        videos_subtitle:
            'Conoce nuestra propuesta de valor, la retrospectiva del equipo y las sesiones de validación con usuarios reales.',
        video_product_title: 'About the Product',
        video_product_desc: 'Modelo de negocio, demostración de telemetría en vivo y testimonios de usuarios.',
        video_team_title: 'About the Team',
        video_team_desc: 'Retrospectiva Scrum de RouteGolem, flujo GitFlow y aprendizajes de ingeniería.',
        video_validation_title: 'Mira a un usuario probando RouteGuard',
        video_validation_desc:
            'Sesión de validación de usabilidad evaluando flujos reales de interacción y claridad de interfaz.',
        team_title: 'Equipo RouteGolem',
        team_subtitle:
            'Estudiantes de Ingeniería de Software comprometidos con la innovación y seguridad vial escolar.',
        team_career: 'Ingeniería de Software',
        cta_title: 'Transforma la seguridad del transporte escolar hoy',
        cta_desc:
            'Explora nuestra organización oficial en GitHub con la documentación completa, repositorios móviles Native y Flutter y flujos CI/CD.',
        cta_button: 'Acceder al Repositorio',
        footer_course:
            'Universidad Peruana de Ciencias Aplicadas (UPC) • Aplicaciones para Dispositivos Móviles (NRC 4945)',
        footer_terms: 'Términos y Condiciones',
        terms_title: 'Términos y Condiciones de Servicio',
        terms_intro:
            'RouteGuard opera bajo principios estrictos de responsabilidad ética y profesional alineados con el Código de Ética de Ingeniería de Software ACM/IEEE y del Colegio de Ingenieros del Perú (CIP).',
        terms_h1: '1. Seguridad Infantil y Privacidad de Datos Geoespaciales',
        terms_p1:
            'La telemetría GPS en tiempo real y los registros de abordaje se procesan exclusivamente para apoderados autorizados, cuidadores, conductores asignados y administradores de flota. El historial de ubicación viaja cifrado mediante HTTPS y no se comparte con terceros no autorizados.',
        terms_h2: '2. Recojo Autorizado y Responsabilidad Operativa',
        terms_p2:
            'Los administradores de flota y padres son responsables de mantener actualizada su red de cuidadores autorizados. Los conductores deben priorizar la seguridad vial evitando manipular el dispositivo manualmente mientras conducen.',
        terms_h3: '3. Suscripciones y Alcance Académico',
        terms_p3:
            'Los planes de suscripción (Básico S/ 49.99, Intermedio S/ 99.99, Completo S/ 179.99) operan con integración Stripe en modo de prueba para demostración académica del curso 1ACC0238 en la UPC.',
        terms_close_btn: 'Entendido',
        github_modal_title: 'Saliendo de RouteGuard Landing Page',
        github_modal_desc:
            'Estás a punto de ser redirigido a un repositorio externo de GitHub perteneciente a la organización RouteGolem.',
        github_modal_cancel: 'Cancelar',
        github_modal_continue: 'Continuar a GitHub',
    },
};

document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;

    // 1. Dark / Light Theme Handling
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        const isDark = savedTheme === 'dark';
        htmlElement.classList.toggle('dark', isDark);
        updateThemeButton(isDark);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = htmlElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            updateThemeButton(isDark);
        });
    }

    function updateThemeButton(isDark) {
        if (!themeToggleBtn) return;
        const moonIcon = document.getElementById('theme-icon-moon');
        const sunIcon = document.getElementById('theme-icon-sun');
        if (moonIcon) moonIcon.classList.toggle('hidden', isDark);
        if (sunIcon) sunIcon.classList.toggle('hidden', !isDark);
        themeToggleBtn.setAttribute('aria-pressed', String(isDark));
    }

    // 2. Bilingual Localization (Default: English en, Optional: Spanish es-419)
    const langButtons = document.querySelectorAll('[data-lang]');
    const savedLang = localStorage.getItem('rg_lang');
    let currentLang = savedLang === 'es' ? 'es' : 'en';

    function applyLanguage(lang) {
        currentLang = lang === 'es' ? 'es' : 'en';
        const dict = TRANSLATIONS[currentLang];
        htmlElement.setAttribute('lang', currentLang);
        document.title = dict.meta_title;

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', dict.meta_description);

        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        langButtons.forEach((btn) => {
            const active = btn.getAttribute('data-lang') === currentLang;
            btn.setAttribute('aria-pressed', String(active));
            btn.classList.toggle('bg-white', active);
            btn.classList.toggle('dark:bg-slate-700', active);
            btn.classList.toggle('text-blue-900', active);
            btn.classList.toggle('dark:text-white', active);
            btn.classList.toggle('shadow-sm', active);
            btn.classList.toggle('text-slate-600', !active);
            btn.classList.toggle('dark:text-slate-300', !active);
        });

        localStorage.setItem('rg_lang', currentLang);
    }

    langButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            applyLanguage(btn.getAttribute('data-lang'));
        });
    });

    applyLanguage(currentLang);

    // 3. Mobile Navigation Menu
    const menuToggleBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    function setMenuOpen(open) {
        if (!mobileMenu || !menuToggleBtn) return;
        mobileMenu.classList.toggle('hidden', !open);
        if (iconOpen) iconOpen.classList.toggle('hidden', open);
        if (iconClose) iconClose.classList.toggle('hidden', !open);
        menuToggleBtn.setAttribute('aria-expanded', String(open));
        menuToggleBtn.setAttribute(
            'aria-label',
            open
                ? currentLang === 'es'
                    ? 'Cerrar menú'
                    : 'Close navigation menu'
                : currentLang === 'es'
                ? 'Abrir menú'
                : 'Open navigation menu'
        );
    }

    if (menuToggleBtn && mobileMenu) {
        menuToggleBtn.addEventListener('click', () => {
            setMenuOpen(mobileMenu.classList.contains('hidden'));
        });

        mobileMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => setMenuOpen(false));
        });

        window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
            if (event.matches) setMenuOpen(false);
        });
    }

    // 4. Accessible Terms & Conditions Modal
    const termsModal = document.getElementById('terms-modal');
    const termsOpenBtn = document.getElementById('terms-open');
    const termsCloseBtn = document.getElementById('terms-close');
    const termsAcceptBtn = document.getElementById('terms-accept');

    function toggleTermsModal(open) {
        if (!termsModal) return;
        termsModal.classList.toggle('hidden', !open);
        document.body.classList.toggle('overflow-hidden', open);
        if (open && termsCloseBtn) {
            termsCloseBtn.focus();
        } else if (!open && termsOpenBtn) {
            termsOpenBtn.focus();
        }
    }

    if (termsOpenBtn && termsModal) {
        termsOpenBtn.addEventListener('click', () => toggleTermsModal(true));
        if (termsCloseBtn) termsCloseBtn.addEventListener('click', () => toggleTermsModal(false));
        if (termsAcceptBtn) termsAcceptBtn.addEventListener('click', () => toggleTermsModal(false));
        termsModal.addEventListener('click', (event) => {
            if (event.target === termsModal) toggleTermsModal(false);
        });
    }

    // 5. External GitHub Redirect Confirmation Modal
    const githubModal = document.getElementById('github-modal');
    const githubTargetUrl = document.getElementById('github-target-url');
    const githubConfirmBtn = document.getElementById('github-confirm');
    const githubCancelBtn = document.getElementById('github-cancel');
    const githubCloseBtn = document.getElementById('github-close');
    let lastRedirectTrigger = null;

    function toggleGithubModal(open, href = '') {
        if (!githubModal) return;
        if (open && href) {
            if (githubTargetUrl) githubTargetUrl.textContent = href;
            if (githubConfirmBtn) githubConfirmBtn.setAttribute('href', href);
        }
        githubModal.classList.toggle('hidden', !open);
        document.body.classList.toggle('overflow-hidden', open);
        if (open && githubConfirmBtn) {
            githubConfirmBtn.focus();
        } else if (!open && lastRedirectTrigger) {
            lastRedirectTrigger.focus();
            lastRedirectTrigger = null;
        }
    }

    document.querySelectorAll('[data-github-redirect]').forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            lastRedirectTrigger = link;
            toggleGithubModal(true, link.getAttribute('href') || '');
        });
    });

    if (githubModal) {
        if (githubCloseBtn) githubCloseBtn.addEventListener('click', () => toggleGithubModal(false));
        if (githubCancelBtn) githubCancelBtn.addEventListener('click', () => toggleGithubModal(false));
        if (githubConfirmBtn) githubConfirmBtn.addEventListener('click', () => toggleGithubModal(false));
        githubModal.addEventListener('click', (event) => {
            if (event.target === githubModal) toggleGithubModal(false);
        });
    }

    // Global Escape key handler for menu & modals
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMenuOpen(false);
            if (termsModal && !termsModal.classList.contains('hidden')) {
                toggleTermsModal(false);
            }
            if (githubModal && !githubModal.classList.contains('hidden')) {
                toggleGithubModal(false);
            }
        }
    });
});
