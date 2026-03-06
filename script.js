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
            heroDesc: "Studying towards bridging art, programming, and design with expertise in 2D/3D art, technical workflows, and gameplay systems in Unreal Engine and Unity.",
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
            modalPurpose: "Purpose",
            modalAddition: "My Addition",
            modalTools: "Tools Used"
        },
        es: {
            navAbout: "Sobre mí",
            navSkills: "Habilidades",
            navProjects: "Proyectos",
            navGallery: "Galería",
            navContact: "Contacto",
            heroTitle: "JULIETA REGGIO",
            heroSubtitle: "Desarrolladora de Juegos & Artista Técnica",
            heroDesc: "Estudiando para unir el arte, la programación y el diseño con experiencia en arte 2D/3D, flujos de trabajo técnicos y sistemas de juego en Unreal Engine y Unity.",
            viewProjects: "Ver Proyectos",
            contactBtn: "Contacto",
            downloadCV: "Descargar CV",
            aboutTitle: "Sobre Mí",
            aboutP1: "Soy <strong>Técnica en Desarrollo de Videojuegos</strong> en mi último año de estudios para obtener mi licenciatura en <strong>UADE</strong> (Universidad de la Empresa Argentina).",
            aboutP2: "Me especializo en arte 2D, con experiencia en modelado 3D, texturizado y flujos de trabajo de arte técnico. Con dominio de Unreal Engine y Unity, desarrollo sistemas de juego utilizando tanto Blueprints como código (C++ y C#).",
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
            projectsTitle: "Proyectos de Desarrollo de Juegos",
            artTitle: "Portafolio de Arte",
            contactTitle: "Ponte en Contacto",
            contactSub: "Trabajemos Juntos",
            contactDesc: "¿Tienes un proyecto en mente o solo quieres saludar? ¡No dudes en escribirme!",
            contactName: "Nombre",
            contactEmail: "Correo",
            contactMsg: "Mensaje",
            contactSend: "Enviar Mensaje",
            footerAuthor: "Autor: Julieta Reggio",
            footerRights: "&copy; 2026 Desarrolladora de Juegos & Artista Técnica. Todos los derechos reservados.",
            modalPurpose: "Objetivo",
            modalAddition: "Mi Contribución",
            modalTools: "Herramientas"
        }
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
        document.querySelectorAll('.modal-section h4')[0].textContent = t.modalPurpose;
        document.querySelectorAll('.modal-section h4')[1].textContent = t.modalAddition;
        document.querySelectorAll('.modal-section h4')[2].textContent = t.modalTools;
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

    let currentImages = [];
    let currentIndex = 0;

    const updateLightboxContent = () => {
        const currentSrc = currentImages[currentIndex];
        const videoExtensions = ['.mp4', '.webm', '.mkv'];
        const isVideo = videoExtensions.some(ext => currentSrc.toLowerCase().endsWith(ext));

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
    };

    const openLightbox = (images, index, title) => {
        currentImages = images;
        currentIndex = index;
        updateLightboxContent();
        lightboxCaption.textContent = title;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
        lightboxVideo.src = '';
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
            const title = item.querySelector('span').textContent;
            openLightbox(images, 0, title);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', showNext);
    prevBtn.addEventListener('click', showPrev);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') showNext(e);
            if (e.key === 'ArrowLeft') showPrev(e);
        }
        if (projectModal.style.display === 'flex') {
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
            // Only trigger if not clicking a link inside (if any)
            if (e.target.tagName !== 'A') {
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

    projectModalClose.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeProjectModal();
    });

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
