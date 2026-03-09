document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');
    const headerLogo = document.getElementById('header-logo');
    const langToggle = document.querySelector('.lang-toggle');
    const langText = langToggle.querySelector('span') || langToggle.childNodes[2]; // Target the text node specifically if possible or use a span

    const translations = {
        en: {
            navAbout: "About",
            navSkills: "Skills",
            navProjects: "Projects",
            navGallery: "Gallery",
            navContact: "Contact",
            heroTitle: "JULIETA REGGIO",
            heroSubtitle: "Game Developer & Technical Artist",
            heroDesc: "Game development student working at the intersection of art, programming, and design, with experience in 2D/3D art, technical workflows, and gameplay systems in Unreal Engine and Unity.",
            viewProjects: "View Projects",
            contactBtn: "Contact",
            downloadCV: "Download CV",
            aboutTitle: "About Me",
            aboutP1: "I'm a <strong>Technician Video Game Developer</strong> in my final year of studies towards getting my Bachelor's degree at <strong>UADE</strong> (Universidad de la Empresa Argentina).",
            aboutP2: "I specialize in 2D art, with experience in 3D modeling, texturing, and technical art workflows. With proficiency in Unreal Engine and Unity, I develop gameplay systems using both Blueprints and code (C++ and C#).",
            aboutP3: "My multidisciplinary background gives me a unique perspective, allowing me to bridge the gap between art, programming, and design teams. I have a strong inclination toward product management and cross-disciplinary coordination.",
            academicTitle: "Academic Background",
            academicUade: "2023 - Present (Currently in 4th year)",
            academicUadeDeg: "Technician in Video Game Development",
            academicSchool: "Bilingual High School Diploma in Natural Sciences",
            languagesTitle: "Languages",
            langSpanish: "<strong>Spanish:</strong> Native",
            langEnglish: "<strong>English:</strong> Bilingual / Advanced (Cambridge IGCSE and A - Level)",
            nationalityTitle: "Nationality & Location",
            nationalityContent: "Argentinian / Italian",
            locationContent: "Based in Buenos Aires, Argentina",
            skillsTitle: "Skills & Tools",
            skill2d: "2D Art & Design",
            skill3d: "3D Production",
            skillCode: "Code & Engines",
            skillWeb: "Web Development",
            projectsTitle: "Game Development Projects",
            artTitle: "Art Portfolio",
            contactTitle: "Get in Touch",
            contactSub: "Let's Work Together",
            contactDesc: "Have a project in mind or just want to say hi? Feel free to reach out!",
            contactName: "Name",
            contactEmail: "Email",
            contactMsg: "Message",
            contactSend: "Send Message",
            footerAuthor: "Author: Julieta Reggio",
            footerRights: "&copy; 2026 Game Developer & Technical Artist. All rights reserved.",
            modalPurpose: "Short Description",
            modalAddition: "My Addition",
            modalTools: "Tools Used",
            projects: {
                knk: {
                    purpose: "Resource management and restoration with a combat component and three different biomes to explore. Gather resources, face enemies, and defeat bosses that block progress.",
                    desc: "Resource management and restoration with a combat component and three different biomes to explore. Gather resources, face enemies, and defeat bosses that block progress.",
                    addition: "I was responsible for the entire art pipeline, from concept art and visual design to producing all in-game assets and sprite animations. I also created visual effects using Unity’s particle system and contributed to programming features such as the restoration and inventory systems.",
                    tools: "Unity, C#, Photoshop, Medibang Paint Pro, Particle Systems"
                },
                goblin: {
                    purpose: "Create a fast-paced FPS dungeon crawler with a focus on smart AI behavior and replayability through procedural generation.",
                    desc: "Medieval fantasy first-person shooter developed in Unreal Engine 5 with custom combat systems, AI behavior, and procedural level generation.",
                    addition: "I developed the custom combat systems and the AI logic for variety of enemy types. I also designed the modular environment kits used for the procedural level generation.",
                    tools: "Unreal Engine 5, Blueprints, Blender, Niagara System, Custom Shaders"
                },
                btnView: "View Project"
            }
        },
        es: {
            navAbout: "Sobre mí",
            navSkills: "Habilidades",
            navProjects: "Proyectos",
            navGallery: "Galería",
            navContact: "Contacto",
            heroTitle: "JULIETA REGGIO",
            heroSubtitle: "Desarrolladora de Videojuegos & Artista Técnica",
            heroDesc: "Estudiante de desarrollo de videojuegos trabajando en la intersección del arte, la programación y el diseño, con experiencia en arte 2D/3D, flujos de trabajo técnicos y sistemas de videojuegos en Unreal Engine y Unity.",
            viewProjects: "Ver Proyectos",
            contactBtn: "Contacto",
            downloadCV: "Descargar CV",
            aboutTitle: "Sobre Mí",
            aboutP1: "Soy <strong>Técnica en Desarrollo de Videojuegos</strong> en mi último año de estudios para obtener mi licenciatura en <strong>UADE</strong> (Universidad de la Empresa Argentina).",
            aboutP2: "Me especializo en arte 2D, con experiencia en modelado 3D, texturizado y flujos de trabajo de arte técnico. Con dominio de Unreal Engine y Unity, desarrollo sistemas de videojuegos utilizando tanto Blueprints como código (C++ y C#).",
            aboutP3: "Mi formación multidisciplinaria me brinda una perspectiva única, permitiéndome cerrar la brecha entre los equipos de arte, programación y diseño. Tengo una fuerte inclinación hacia la gestión de productos y la coordinación interdisciplinaria.",
            academicTitle: "Formación Académica",
            academicUade: "2023 - Presente (Actualmente en 4º año)",
            academicUadeDeg: "Tecnicatura en Desarrollo de Videojuegos",
            academicSchool: "Bachillerato Bilingüe en Ciencias Naturales",
            languagesTitle: "Idiomas",
            langSpanish: "<strong>Español:</strong> Nativo",
            langEnglish: "<strong>Inglés:</strong> Bilingüe / Avanzado (Cambridge IGCSE y A - Level)",
            nationalityTitle: "Nacionalidad y Ubicación",
            nationalityContent: "Argentina / Italiana",
            locationContent: "Basada en Buenos Aires, Argentina",
            skillsTitle: "Habilidades y Herramientas",
            skill2d: "Arte y Diseño 2D",
            skill3d: "Producción 3D",
            skillCode: "Código y Motores",
            skillWeb: "Desarrollo Web",
            projectsTitle: "Proyectos de Desarrollo de Videojuegos",
            artTitle: "Portafolio de Arte",
            contactTitle: "Ponte en Contacto",
            contactSub: "Trabajemos Juntos",
            contactDesc: "¿Tienes un proyecto en mente o solo quieres saludar? ¡No dudes en escribirme!",
            contactName: "Nombre",
            contactEmail: "Correo",
            contactMsg: "Mensaje",
            contactSend: "Enviar Mensaje",
            footerAuthor: "Autor: Julieta Reggio",
            footerRights: "&copy; 2026 Desarrolladora de Videojuegos & Artista Técnica. Todos los derechos reservados.",
            modalPurpose: "Breve Descripción",
            modalAddition: "Mi Contribución",
            modalTools: "Herramientas",
            projects: {
                knk: {
                    purpose: "Gestión de recursos y restauración con un componente de combate y tres biomas diferentes para explorar. Reúne recursos, enfrenta enemigos y derrota jefes que bloquean el progreso.",
                    desc: "Gestión de recursos y restauración con un componente de combate y tres biomas diferentes para explorar. Reúne recursos, enfrenta enemigos y derrota jefes que bloquean el progreso.",
                    addition: "Fui responsable de todo el flujo de trabajo artístico, desde el arte conceptual y el diseño visual hasta la producción de todos los assets del juego y las animaciones de sprites. También creé efectos visuales utilizando el sistema de partículas de Unity y contribuí a la programación de características como los sistemas de restauración e inventario.",
                    tools: "Unity, C#, Photoshop, Medibang Paint Pro, Particle Systems"
                },
                goblin: {
                    purpose: "Crear un dungeon crawler FPS de ritmo rápido centrado en un comportamiento de IA inteligente y rejugabilidad a través de la generación procedimental.",
                    desc: "Shooter en primera persona de fantasía medieval desarrollado en Unreal Engine 5 con sistemas de combate personalizados, comportamiento de IA y generación de niveles procedimental.",
                    addition: "Desarrollé los sistemas de combate personalizados y la lógica de IA para una variedad de tipos de enemigos. También diseñé los kits de entorno modulares utilizados para la generación de niveles procedimental.",
                    tools: "Unreal Engine 5, Blueprints, Blender, Niagara System, Custom Shaders"
                },
                btnView: "Ver Proyecto"
            },
            catCharacter: "Diseño de Personajes",
            catCommissions: "Comisiones",
            catAnimation: "Sprites de Animación",
            catProps: "Props / Assets",
            catCovers: "Portadas / Covers",
            catModels: "Modelos",
            catOptimization: "Optimización",
            catShaders: "Shaders",
            goBack: "Volver",
            overview: "Descripción General",
            contribution: "Mi Contribución",
            visitItch: "Ver en itch.io"
        }
    };


    const enGalleryCats = {
        character: "Character Design",
        comissions: "Comissions",
        animation: "Animation Sprites",
        props: "Prop / Assets",
        covers: "SplashScreens / Covers",
        models: "Models",
        optimization: "Optimization",
        shaders: "Shaders"
    };

    let currentLang = 'en';

    const updateLanguage = () => {
        const t = translations[currentLang];

        // Navigation
        document.querySelector('a[href="#about"]').textContent = t.navAbout;
        document.querySelectorAll('a[href="#skills"]').forEach(el => el.textContent = t.navSkills);
        document.querySelectorAll('a[href="#projects"]').forEach(el => el.textContent = t.navProjects);
        document.querySelectorAll('a[href="#gallery"]').forEach(el => el.textContent = t.navGallery);
        document.querySelectorAll('a[href="#contact"]').forEach(el => el.textContent = t.navContact);

        // Toggle Text
        langToggle.innerHTML = `<img src="img/icons/language_light.png" alt="Language" class="nav-icon"> ${currentLang.toUpperCase()}`;

        // Hero
        document.querySelector('.hero h1').textContent = t.heroTitle;
        document.querySelector('.hero .subtitle').textContent = t.heroSubtitle;
        document.querySelector('.hero .description').textContent = t.heroDesc;
        document.querySelector('.hero .btn-primary').innerHTML = `<img src="img/icons/show_light.png" alt="Show" class="btn-icon"> ${t.viewProjects}`;
        document.querySelectorAll('.hero .btn-outline')[0].innerHTML = `<img src="img/icons/mail_light.png" alt="Contact" class="btn-icon"> ${t.contactBtn}`;
        document.querySelectorAll('.hero .btn-outline')[1].innerHTML = `<img src="img/icons/download_light.png" alt="Download" class="btn-icon"> ${t.downloadCV}`;

        // About
        document.querySelector('#about h2').textContent = t.aboutTitle;
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        aboutParagraphs[0].innerHTML = t.aboutP1;
        aboutParagraphs[1].innerHTML = t.aboutP2;
        aboutParagraphs[2].innerHTML = t.aboutP3;

        const aboutHeadings = document.querySelectorAll('.detail-group h3');
        aboutHeadings[0].textContent = t.academicTitle;
        aboutHeadings[1].textContent = t.languagesTitle;
        aboutHeadings[2].textContent = t.nationalityTitle;

        const academicItems = document.querySelectorAll('.detail-item');
        academicItems[0].querySelector('p:nth-child(2)').textContent = t.academicUade;
        academicItems[0].querySelector('p:nth-child(3)').textContent = t.academicUadeDeg;
        academicItems[1].querySelector('p:nth-child(2)').textContent = t.academicSchool;

        const langItems = document.querySelectorAll('.detail-group:nth-of-type(1) ul li');
        // Based on structure in HTML
        const langList = document.querySelector('.detail-column .detail-group:nth-child(1) ul').querySelectorAll('li');
        langList[0].innerHTML = t.langSpanish;
        langList[1].innerHTML = t.langEnglish;

        const geoList = document.querySelector('.detail-column .detail-group:nth-child(2) ul').querySelectorAll('li');
        geoList[0].textContent = t.nationalityContent;
        geoList[1].textContent = t.locationContent;

        // Skills
        document.querySelector('#skills h2').textContent = t.skillsTitle;
        const skillCards = document.querySelectorAll('.skill-card h3');
        skillCards[0].textContent = t.skill2d;
        skillCards[1].textContent = t.skill3d;
        skillCards[2].textContent = t.skillCode;
        skillCards[3].textContent = t.skillWeb;

        // Projects & Gallery
        document.querySelector('#projects h2').textContent = t.projectsTitle;
        document.querySelector('#gallery h2').textContent = t.artTitle;

        // Update Project Cards content
        document.querySelectorAll('.project-card').forEach(card => {
            const id = card.getAttribute('data-id');
            if (t.projects[id]) {
                const data = t.projects[id];
                card.setAttribute('data-purpose', data.purpose);
                card.setAttribute('data-addition', data.addition);
                card.setAttribute('data-tools', data.tools);
                card.querySelector('.project-info p').textContent = data.desc;

                const btn = card.querySelector('.btn-project');
                if (btn && id === 'goblin') { // Only translate generic buttons, itch.io stays as brand
                    btn.innerHTML = `<img src="img/icons/show_light.png" alt="Show" class="btn-icon"> ${t.projects.btnView}`;
                }
            }
        });

        // Gallery Categories (Overlay text)
        document.querySelectorAll('.gallery-item').forEach(item => {
            const cat = item.getAttribute('data-category');
            const span = item.querySelector('.gallery-overlay span');
            if (cat === 'character') span.textContent = currentLang === 'en' ? enGalleryCats.character : t.catCharacter;
            if (cat === 'comissions') span.textContent = currentLang === 'en' ? enGalleryCats.comissions : t.catCommissions;
            if (cat === 'animation') span.textContent = currentLang === 'en' ? enGalleryCats.animation : t.catAnimation;
            if (cat === 'props') span.textContent = currentLang === 'en' ? enGalleryCats.props : t.catProps;
            if (cat === 'covers') span.textContent = currentLang === 'en' ? enGalleryCats.covers : t.catCovers;
            if (cat === 'models') span.textContent = currentLang === 'en' ? enGalleryCats.models : t.catModels;
            if (cat === 'optimization') span.textContent = currentLang === 'en' ? enGalleryCats.optimization : t.catOptimization;
            if (cat === 'shaders') span.textContent = currentLang === 'en' ? enGalleryCats.shaders : t.catShaders;
        });

        // Contact
        document.querySelector('#contact h2').textContent = t.contactTitle;
        document.querySelector('.contact-info h3').textContent = t.contactSub;
        document.querySelector('.contact-info p').textContent = t.contactDesc;

        const formGroups = document.querySelectorAll('.form-group');
        formGroups[0].querySelector('label').textContent = t.contactName;
        formGroups[0].querySelector('input').placeholder = t.contactName;
        formGroups[1].querySelector('label').textContent = t.contactEmail;
        formGroups[1].querySelector('input').placeholder = t.contactEmail;
        formGroups[2].querySelector('label').textContent = t.contactMsg;
        formGroups[2].querySelector('textarea').placeholder = t.contactMsg;
        document.querySelector('.btn-submit').innerHTML = `<img src="img/icons/send_dark.png" alt="Send" class="btn-icon"> ${t.contactSend}`;

        // Footer
        const footerParas = document.querySelectorAll('.footer-content p');
        footerParas[0].innerHTML = t.footerRights;
        footerParas[1].textContent = t.footerAuthor;

        // Modals (Labels)
        if (document.querySelector('.modal-section h4')) {
            document.querySelectorAll('.modal-section h4')[0].textContent = t.modalPurpose;
            document.querySelectorAll('.modal-section h4')[1].textContent = t.modalAddition;
            if (document.querySelectorAll('.modal-section h4')[2]) {
                document.querySelectorAll('.modal-section h4')[2].textContent = t.modalTools;
            }
        }

        // Project Page specific
        const goBack = document.querySelector('.go-back');
        if (goBack) goBack.innerHTML = `<span class="arrow">&larr;</span> ${currentLang === 'en' ? 'Go Back' : t.goBack}`;

        const overviewTitle = document.querySelector('[data-t="overview"]');
        if (overviewTitle) overviewTitle.textContent = currentLang === 'en' ? 'Overview' : t.overview;

        const contributionTitle = document.querySelector('[data-t="contribution"]');
        if (contributionTitle) contributionTitle.textContent = currentLang === 'en' ? 'My Contribution' : t.contribution;

        const itchBtn = document.querySelector('.project-detail-page .btn-primary');
        if (itchBtn) itchBtn.innerHTML = `<img src="img/icons/show_light.png" alt="Show" class="btn-icon"> ${currentLang === 'en' ? 'View on itch.io' : t.visitItch}`;
    };


    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        updateLanguage();
    });

    // Toggle Mobile Menu
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenu.classList.toggle('open');

        // Mobile menu spans animation
        const spans = mobileMenu.querySelectorAll('span');
        if (mobileMenu.classList.contains('open')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close Menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenu.classList.remove('open');
            const spans = mobileMenu.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // Smooth Scroll for Logo
    headerLogo.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Change Header Style on Scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.padding = '1rem 5%';
            header.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            header.style.padding = '1.5rem 5%';
            header.style.background = 'rgba(0, 0, 0, 0.85)';
        }
    });

    // Reveal Sections on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal');
        revealObserver.observe(section);
    });

    // Lightbox Logic
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    const lightboxVideo = document.getElementById('lightbox-video');

    // Zoom & Pan Logic
    let isPanning = false;
    let startX, startY;
    let translateX = 0, translateY = 0;
    let scale = 1;
    const minScale = 1;
    const maxScale = 5;

    let currentImages = [];
    let currentCaptions = [];
    let currentIndex = 0;

    const updateTransform = () => {
        lightboxImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
        lightboxImg.style.cursor = scale > 1 ? (isPanning ? 'grabbing' : 'grab') : 'zoom-in';
    };

    const updateLightboxContent = () => {
        const currentSrc = currentImages[currentIndex];
        const currentCap = currentCaptions[currentIndex] || "";
        const videoExtensions = ['.mp4', '.webm', '.mkv'];
        const isVideo = videoExtensions.some(ext => currentSrc.toLowerCase().endsWith(ext));

        // Reset zoom & pan
        scale = 1;
        translateX = 0;
        translateY = 0;
        updateTransform();
        lightboxImg.style.cursor = isVideo ? 'default' : 'zoom-in';

        if (isVideo) {
            lightboxImg.style.display = 'none';
            lightboxVideo.style.display = 'block';
            lightboxVideo.src = currentSrc;
            lightboxVideo.play();
        } else {
            lightboxVideo.style.display = 'none';
            lightboxVideo.pause();
            lightboxVideo.src = '';
            lightboxImg.style.display = 'block';
            lightboxImg.src = currentSrc;
        }
        lightboxCaption.textContent = currentCap;
    };

    const openLightbox = (images, captions, index) => {
        currentImages = images;
        currentCaptions = captions;
        currentIndex = index;
        updateLightboxContent();
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
        lightboxVideo.src = '';
        scale = 1;
        lightboxImg.style.transform = 'none';
        document.body.style.overflow = 'auto';
    };

    const showNext = (e) => {
        if (e) e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateLightboxContent();
    };

    const showPrev = (e) => {
        if (e) e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateLightboxContent();
    };

    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            const images = JSON.parse(item.getAttribute('data-images'));
            const captions = JSON.parse(item.getAttribute('data-captions') || '[]');
            openLightbox(images, captions, 0);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content')) closeLightbox();
    });


    lightbox.addEventListener('wheel', (e) => {
        if (lightbox.style.display === 'flex' && lightboxImg.style.display === 'block') {
            e.preventDefault();
            const delta = e.deltaY;
            const scrollSpeed = 0.001;

            const prevScale = scale;
            scale -= delta * scrollSpeed;
            scale = Math.min(Math.max(minScale, scale), maxScale);

            if (scale === 1) {
                translateX = 0;
                translateY = 0;
            }

            if (scale !== prevScale) {
                updateTransform();
            }
        }
    }, { passive: false });

    lightboxImg.addEventListener('mousedown', (e) => {
        if (scale > 1) {
            isPanning = true;
            startX = e.clientX - translateX * scale;
            startY = e.clientY - translateY * scale;
            updateTransform();
        }
    });

    window.addEventListener('mousemove', (e) => {
        if (isPanning && scale > 1) {
            translateX = (e.clientX - startX) / scale;
            translateY = (e.clientY - startY) / scale;
            updateTransform();
        }
    });

    window.addEventListener('mouseup', () => {
        isPanning = false;
        if (lightbox.style.display === 'flex') updateTransform();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext(e);
            if (e.key === 'ArrowLeft') showPrev(e);
        }
        if (projectModal && projectModal.style.display === 'flex') {
            if (e.key === 'Escape') closeProjectModal();
        }
    });


    // Project Details Modal Logic
    const projectModal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalPurpose = document.getElementById('modal-purpose');
    const modalAddition = document.getElementById('modal-addition');
    const modalTools = document.getElementById('modal-tools');
    const projectModalClose = document.getElementById('modal-close');

    const openProjectModal = (data) => {
        modalImg.src = data.img;
        modalTitle.textContent = data.title;
        modalPurpose.textContent = data.purpose;
        modalAddition.textContent = data.addition;
        modalTools.textContent = data.tools;

        projectModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
        projectModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Only trigger modal if there's no link wrapper
            if (!card.querySelector('.project-link-wrapper') && e.target.tagName !== 'A' && !e.target.closest('a')) {
                const data = {
                    title: card.getAttribute('data-title'),
                    img: card.getAttribute('data-img'),
                    purpose: card.getAttribute('data-purpose'),
                    addition: card.getAttribute('data-addition'),
                    tools: card.getAttribute('data-tools')
                };
                openProjectModal(data);
            }
        });
    });

    if (projectModalClose) projectModalClose.addEventListener('click', closeProjectModal);
    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) closeProjectModal();
        });
    }


    // Form Submission Handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalBtnText = submitBtn.innerHTML;

            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                } else {
                    alert('Oops! There was a problem sending your message.');
                }
            } catch (error) {
                alert('Oops! There was a problem sending your message.');
            } finally {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});
