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
            projectsTitle: "Projects and Prototypes",
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
            knkVisionTitle: "Artistic Vision & Core Objective",
            knkVisionP1: "I was responsible for the entire artistic pipeline, from initial concept art and visual design to the production of all in-game assets and sprite animations. Our goal was to create an engaging experience featuring a charming art style and a recognizable, memorable protagonist.",
            knkVisionP2: "The game is set in a village in ruins, and the art aims to implement contrast and distinction while remaining visually cohesive. Across different biomes and states of decay, every element feels like part of the same world. I designed the environment specifically to inspire a \"restoration drive\" in the player—creating a world they genuinely want to see beautiful, repaired, and full of life once again.",
            knkVillageTitle: "The Village: Old vs. New",
            knkVillageP1: "The village serves as the central hub where the contrast between ruin and restoration is most evident. I designed and produced key environmental assets to support a progression system where locations transition from abandoned and damaged to fully restored.",
            knkVillageOld: "<strong>The \"Old\" State:</strong> Uses muted tones, cracked textures, and overgrowth to convey a sense of history and neglect.",
            knkVillageNew: "<strong>The \"New\" State:</strong> Features vibrant colors, clean architectural lines, and atmospheric details like lanterns and flowing water to reward the player's progress.",
            knkCombatTitle: "Combat: Player & Enemies",
            knkCombatP1: "I focused on creating a protagonist that feels agile.",
            knkProtagonist: "<strong>Protagonista:</strong> 4-way movement and multi-frame attack sequences. Custom particle systems that provide visceral feedback during encounters. Unique silhouette and distinct color palette, ensuring high legibility.",
            knkBestiaryTitle: "The Bestiary",
            knkBestiaryP1: "Diverse range of enemies, each with \"telegraphed\" animations to ensure combat feels fair and rewarding",
            knkBiomesTitle: "Biomes & Asset Architecture",
            knkBiomesP1: "I produced a wide array of biome-specific assets to ensure each of the three regions had a distinct visual identity and atmosphere.",
            knkLandmarks: "<strong>Landmarks & Navigation:</strong> Distinct \"landmarks\"—such as the great spirit tree—to serve as focal points. Each biome uses a specific color signature, making it intuitive for the player to know exactly where they are.",
            knkTechDesign: "<strong>Technical Design:</strong> Modular tilesets and layered backgrounds to allow for efficient level building.",
            knkNpcTitle: "NPCs: Animation & Purpose",
            knkNpcP1: "All sprite animations for the NPCs were created to focus on fluid movement and emotional connection.",
            knkNpcInteraction: "<strong>Interaction Design:</strong> \"Talking\" headshot sprites and specific animations, such as characters burrowing or waving, to give the inhabitants a sense of life.",
            knkNpcNarrative: "<strong>Narrative Role:</strong> These characters serve as the heart of the village, providing a tangible reason for the player to continue their restoration efforts.",
            knkProgramTitle: "Technical Contributions & Programming",
            knkRestoration: "<strong>Restoration System:</strong> I programmed the logic that handles the structural transitions.",
            knkInventory: "<strong>Inventory System:</strong> I developed the underlying architecture for resource management.",
            knkParticles: "<strong>Particle Systems:</strong> I implemented custom 2D particle effects to enhance the feel of combat impacts and the visual \"sparkle\" when a structure is successfully restored.",
            knkDesc: "Resource management and restoration with a combat component and three different biomes to explore. Gather resources, face enemies, and defeat bosses that block progress.",
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
            projectsTitle: "Proyectos y Prototipos",
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
            knkVisionTitle: "Visión Artística y Objetivo Central",
            knkVisionP1: "Fui responsable de todo el flujo artístico, desde el arte conceptual inicial y el diseño visual hasta la producción de todos los assets del juego y las animaciones de sprites. Nuestro objetivo era crear una experiencia atractiva con un estilo artístico encantador y un protagonista reconocible y memorable.",
            knkVisionP2: "El juego se desarrolla en una aldea en ruinas, y el arte busca implementar contraste y distinción manteniéndose visualmente cohesivo. A través de diferentes biomas y estados de decadencia, cada elemento se siente parte del mismo mundo. Diseñé el entorno específicamente para inspirar un \"impulso de restauración\" en el jugador, creando un mundo que realmente quieran ver hermoso, reparado y lleno de vida una vez más.",
            knkVillageTitle: "La Aldea: Viejo vs. Nuevo",
            knkVillageP1: "La aldea sirve como el núcleo central donde el contraste entre la ruina y la restauración es más evidente. Diseñé y produje los assets ambientales clave para apoyar un sistema de progresión donde las ubicaciones pasan de estar abandonadas y dañadas a estar completamente restauradas.",
            knkVillageOld: "<strong>El Estado \"Viejo\":</strong> Utiliza tonos apagados, texturas agrietadas y vegetación excesiva para transmitir una sensación de historia y descuido.",
            knkVillageNew: "<strong>El Estado \"Nuevo\":</strong> Presenta colores vibrantes, líneas arquitectónicas limpias y detalles atmosféricos como linternas y agua corriente para recompensar el progreso del jugador.",
            knkCombatTitle: "Combate: Jugador y Enemigos",
            knkCombatP1: "Me enfoqué en crear un protagonista que se sienta ágil.",
            knkProtagonist: "<strong>Protagonista:</strong> Movimiento en 4 direcciones y secuencias de ataque de múltiples fotogramas. Sistemas de partículas personalizados que proporcionan una retroalimentación visceral durante los encuentros. Silueta única y paleta de colores distintiva, asegurando una alta legibilidad.",
            knkBestiaryTitle: "El Bestiario",
            knkBestiaryP1: "Una amplia gama de enemigos, cada uno con animaciones \"telegrafiadas\" para asegurar que el combate se sienta justo y gratificante.",
            knkBiomesTitle: "Biomas y Arquitectura de Assets",
            knkBiomesP1: "Produje una amplia gama de assets específicos de cada bioma para asegurar que cada una de las tres regiones tuviera una identidad visual y atmósfera distintivas.",
            knkLandmarks: "<strong>Puntos de Referencia y Navegación:</strong> \"Landmarks\" distintivos —como el gran árbol espiritual— para servir como puntos focales. Cada bioma utiliza una firma de color específica, haciendo que sea intuitivo para el jugador saber exactamente dónde está.",
            knkTechDesign: "<strong>Diseño Técnico:</strong> Tilesets modulares y fondos por capas para permitir una construcción de niveles eficiente.",
            knkNpcTitle: "NPCs: Animación y Propósito",
            knkNpcP1: "Todas las animaciones de sprites para los NPCs fueron creadas para enfocarse en el movimiento fluido y la conexión emocional.",
            knkNpcInteraction: "<strong>Diseño de Interacción:</strong> Sprites de rostros \"parlantes\" y animaciones específicas, como personajes enterrándose o saludando, para dar a los habitantes una sensación de vida.",
            knkNpcNarrative: "<strong>Rol Narrativo:</strong> Estos personajes sirven como el corazón de la aldea, proporcionando una razón tangible para que el jugador continúe sus esfuerzos de restauración.",
            knkProgramTitle: "Contribuciones Técnicas y Programación",
            knkRestoration: "<strong>Sistema de Restauración:</strong> Programé la lógica que maneja las transiciones estructurales.",
            knkInventory: "<strong>Sistema de Inventario:</strong> Desarrollé la arquitectura subyacente para la gestión de recursos.",
            knkParticles: "<strong>Sistemas de Partículas:</strong> Implementé efectos de partículas 2D personalizados para mejorar la sensación de los impactos en combate y el \"brillo\" visual cuando una estructura se restaura con éxito.",
            knkDesc: "Gestión de recursos y restauración con un componente de combate y tres biomas diferentes para explorar. Reúne recursos, enfrenta enemigos y derrota jefes que bloquean el progreso.",
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

    let currentLang = localStorage.getItem('portfolioLang') || 'en';

    const updateLanguage = () => {
        const t = translations[currentLang];

        // Navigation
        const navAbout = document.querySelector('a[href="#about"], a[href="index.html#about"]');
        if (navAbout) navAbout.textContent = t.navAbout;
        document.querySelectorAll('a[href="#skills"], a[href="index.html#skills"]').forEach(el => el.textContent = t.navSkills);
        document.querySelectorAll('a[href="#projects"], a[href="index.html#projects"]').forEach(el => el.textContent = t.navProjects);
        document.querySelectorAll('a[href="#gallery"], a[href="index.html#gallery"]').forEach(el => el.textContent = t.navGallery);
        document.querySelectorAll('a[href="#contact"], a[href="index.html#contact"]').forEach(el => el.textContent = t.navContact);

        // Toggle Text
        langToggle.innerHTML = `<img src="img/icons/language_light.png" alt="Language" class="nav-icon"> ${currentLang.toUpperCase()}`;

        // Hero
        const heroH1 = document.querySelector('.hero h1');
        if (heroH1) heroH1.textContent = t.heroTitle;
        const heroSubtitle = document.querySelector('.hero .subtitle');
        if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;
        const heroDesc = document.querySelector('.hero .description');
        if (heroDesc) heroDesc.textContent = t.heroDesc;
        const heroBtnPrimary = document.querySelector('.hero .btn-primary');
        if (heroBtnPrimary) heroBtnPrimary.innerHTML = `<img src="img/icons/show_light.png" alt="Show" class="btn-icon"> ${t.viewProjects}`;

        const heroOutlines = document.querySelectorAll('.hero .btn-outline');
        if (heroOutlines.length >= 2) {
            heroOutlines[0].innerHTML = `<img src="img/icons/mail_light.png" alt="Contact" class="btn-icon"> ${t.contactBtn}`;
            heroOutlines[1].innerHTML = `<img src="img/icons/download_light.png" alt="Download" class="btn-icon"> ${t.downloadCV}`;
        }

        // About
        const aboutH2 = document.querySelector('#about h2');
        if (aboutH2) aboutH2.textContent = t.aboutTitle;
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        if (aboutParagraphs.length >= 3) {
            aboutParagraphs[0].innerHTML = t.aboutP1;
            aboutParagraphs[1].innerHTML = t.aboutP2;
            aboutParagraphs[2].innerHTML = t.aboutP3;
        }

        const aboutHeadings = document.querySelectorAll('.detail-group h3');
        if (aboutHeadings.length >= 3) {
            aboutHeadings[0].textContent = t.academicTitle;
            aboutHeadings[1].textContent = t.languagesTitle;
            aboutHeadings[2].textContent = t.nationalityTitle;
        }

        const academicItems = document.querySelectorAll('.detail-item');
        if (academicItems.length >= 2) {
            const p2 = academicItems[0].querySelector('p:nth-child(2)');
            if (p2) p2.textContent = t.academicUade;
            const p3 = academicItems[0].querySelector('p:nth-child(3)');
            if (p3) p3.textContent = t.academicUadeDeg;
            const p2_2 = academicItems[1].querySelector('p:nth-child(2)');
            if (p2_2) p2_2.textContent = t.academicSchool;
        }

        const langList = document.querySelector('.detail-column .detail-group:nth-child(1) ul');
        if (langList) {
            const items = langList.querySelectorAll('li');
            if (items.length >= 2) {
                items[0].innerHTML = t.langSpanish;
                items[1].innerHTML = t.langEnglish;
            }
        }

        const geoGroup = document.querySelector('.detail-column .detail-group:nth-child(2) ul');
        if (geoGroup) {
            const items = geoGroup.querySelectorAll('li');
            if (items.length >= 2) {
                items[0].textContent = t.nationalityContent;
                items[1].textContent = t.locationContent;
            }
        }

        // Skills
        const skillsH2 = document.querySelector('#skills h2');
        if (skillsH2) skillsH2.textContent = t.skillsTitle;
        const skillCards = document.querySelectorAll('.skill-card h3');
        if (skillCards.length >= 4) {
            skillCards[0].textContent = t.skill2d;
            skillCards[1].textContent = t.skill3d;
            skillCards[2].textContent = t.skillCode;
            skillCards[3].textContent = t.skillWeb;
        }

        // Projects & Gallery
        const projectsH2 = document.querySelector('#projects h2');
        if (projectsH2) projectsH2.textContent = t.projectsTitle;
        const galleryH2 = document.querySelector('#gallery h2');
        if (galleryH2) galleryH2.textContent = t.artTitle;

        // Update Project Cards content
        document.querySelectorAll('.project-card').forEach(card => {
            const id = card.getAttribute('data-id');
            if (t.projects[id]) {
                const data = t.projects[id];
                card.setAttribute('data-purpose', data.purpose);
                card.setAttribute('data-addition', data.addition);
                card.setAttribute('data-tools', data.tools);
                const infoP = card.querySelector('.project-info p');
                if (infoP) infoP.textContent = data.desc;

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
            if (span) {
                if (cat === 'character') span.textContent = currentLang === 'en' ? enGalleryCats.character : t.catCharacter;
                if (cat === 'comissions') span.textContent = currentLang === 'en' ? enGalleryCats.comissions : t.catCommissions;
                if (cat === 'animation') span.textContent = currentLang === 'en' ? enGalleryCats.animation : t.catAnimation;
                if (cat === 'props') span.textContent = currentLang === 'en' ? enGalleryCats.props : t.catProps;
                if (cat === 'covers') span.textContent = currentLang === 'en' ? enGalleryCats.covers : t.catCovers;
                if (cat === 'models') span.textContent = currentLang === 'en' ? enGalleryCats.models : t.catModels;
                if (cat === 'optimization') span.textContent = currentLang === 'en' ? enGalleryCats.optimization : t.catOptimization;
                if (cat === 'shaders') span.textContent = currentLang === 'en' ? enGalleryCats.shaders : t.catShaders;
            }
        });

        // Contact
        const contactH2 = document.querySelector('#contact h2');
        if (contactH2) contactH2.textContent = t.contactTitle;
        const contactH3 = document.querySelector('.contact-info h3');
        if (contactH3) contactH3.textContent = t.contactSub;
        const contactP = document.querySelector('.contact-info p');
        if (contactP) contactP.textContent = t.contactDesc;

        const formGroups = document.querySelectorAll('.form-group');
        if (formGroups.length >= 3) {
            formGroups[0].querySelector('label').textContent = t.contactName;
            formGroups[0].querySelector('input').placeholder = t.contactName;
            formGroups[1].querySelector('label').textContent = t.contactEmail;
            formGroups[1].querySelector('input').placeholder = t.contactEmail;
            formGroups[2].querySelector('label').textContent = t.contactMsg;
            formGroups[2].querySelector('textarea').placeholder = t.contactMsg;
        }
        const submitBtn = document.querySelector('.btn-submit');
        if (submitBtn) submitBtn.innerHTML = `<img src="img/icons/send_dark.png" alt="Send" class="btn-icon"> ${t.contactSend}`;

        // Footer
        const footerParas = document.querySelectorAll('.footer-content p');
        if (footerParas.length >= 2) {
            footerParas[0].innerHTML = t.footerRights;
            footerParas[1].textContent = t.footerAuthor;
        }

        // Modals (Labels)
        const modalH4s = document.querySelectorAll('.modal-section h4');
        if (modalH4s.length >= 2) {
            modalH4s[0].textContent = t.modalPurpose;
            modalH4s[1].textContent = t.modalAddition;
            if (modalH4s[2]) {
                modalH4s[2].textContent = t.modalTools;
            }
        }

        // Project Page specific
        const goBack = document.querySelector('.go-back');
        if (goBack) goBack.innerHTML = `<span class="arrow">&larr;</span> ${currentLang === 'en' ? 'Go Back' : t.goBack}`;

        const overviewTitle = document.querySelector('[data-t="overview"]');
        if (overviewTitle) overviewTitle.textContent = currentLang === 'en' ? 'Overview' : t.overview;

        const knkDesc = document.querySelector('#project-overview');
        if (knkDesc) knkDesc.textContent = t.knkDesc;

        const contributionTitle = document.querySelector('[data-t="contribution"]');
        if (contributionTitle) contributionTitle.textContent = currentLang === 'en' ? 'My Contribution' : t.contribution;

        const itchBtn = document.querySelector('.project-detail-page .btn-primary');
        if (itchBtn) itchBtn.innerHTML = `<img src="img/icons/show_light.png" alt="Show" class="btn-icon"> ${currentLang === 'en' ? 'View on itch.io' : t.visitItch}`;

        // Katana No Neko Specific Detailed Content
        if (document.body.classList.contains('project-detail-page')) {
            // Row 1
            const r1h3 = document.querySelector('#row1 h3');
            if (r1h3) r1h3.textContent = t.knkVisionTitle;
            const r1ps = document.querySelectorAll('#row1 p');
            if (r1ps.length >= 2) {
                r1ps[0].textContent = t.knkVisionP1;
                r1ps[1].textContent = t.knkVisionP2;
            }

            // Row 2
            const r2h3 = document.querySelector('#row2 h3');
            if (r2h3) r2h3.textContent = t.knkVillageTitle;
            const r2ps = document.querySelectorAll('#row2 p');
            if (r2ps.length >= 3) {
                r2ps[0].textContent = t.knkVillageP1;
                r2ps[1].innerHTML = t.knkVillageOld;
                r2ps[2].innerHTML = t.knkVillageNew;
            }

            // Row 3
            const r3h3s = document.querySelectorAll('#row3 h3');
            if (r3h3s.length >= 2) {
                r3h3s[0].textContent = t.knkCombatTitle;
                r3h3s[1].textContent = t.knkBestiaryTitle;
            }
            const r3ps = document.querySelectorAll('#row3 p');
            if (r3ps.length >= 3) {
                r3ps[0].textContent = t.knkCombatP1;
                r3ps[1].innerHTML = t.knkProtagonist;
                r3ps[2].textContent = t.knkBestiaryP1;
            }

            // Row 4
            const r4h3 = document.querySelector('#row4 h3');
            if (r4h3) r4h3.textContent = t.knkBiomesTitle;
            const r4ps = document.querySelectorAll('#row4 p');
            if (r4ps.length >= 3) {
                r4ps[0].textContent = t.knkBiomesP1;
                r4ps[1].innerHTML = t.knkLandmarks;
                r4ps[2].innerHTML = t.knkTechDesign;
            }

            // Row 5
            const r5h3 = document.querySelector('#row5 h3');
            if (r5h3) r5h3.textContent = t.knkNpcTitle;
            const r5ps = document.querySelectorAll('#row5 p');
            if (r5ps.length >= 3) {
                r5ps[0].textContent = t.knkNpcP1;
                r5ps[1].innerHTML = t.knkNpcInteraction;
                r5ps[2].innerHTML = t.knkNpcNarrative;
            }

            // Row 6
            const r6h3 = document.querySelector('#row6 h3');
            if (r6h3) r6h3.textContent = t.knkProgramTitle;
            const r6ps = document.querySelectorAll('#row6 p');
            if (r6ps.length >= 3) {
                r6ps[0].innerHTML = t.knkRestoration;
                r6ps[1].innerHTML = t.knkInventory;
                r6ps[2].innerHTML = t.knkParticles;
            }
        }
    };

    // Initialize
    updateLanguage();


    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        localStorage.setItem('portfolioLang', currentLang);
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
    if (headerLogo) {
        headerLogo.addEventListener('click', (e) => {
            const href = headerLogo.getAttribute('href');
            if (href === '#hero' || href === '#') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Change Header Style on Scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.padding = '1rem 5%';
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.padding = '1.5rem 5%';
                header.style.background = 'rgba(0, 0, 0, 0.85)';
            }
        }
    });

    // Reveal Sections on Scroll
    const observerOptions = {
        threshold: 0.05, // Reduced from 0.1 to handle large sections on mobile
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // For project detailed pages, we reveal rows instead of the whole section
    // to avoid the entire page being hidden if the section is too tall for the threshold
    const revealTargets = document.querySelectorAll('section:not(.project-hero), .intercalated-row, .project-top-row');

    revealTargets.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
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
        if (lightboxImg) {
            lightboxImg.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
            lightboxImg.style.cursor = scale > 1 ? (isPanning ? 'grabbing' : 'grab') : 'zoom-in';
        }
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
        if (lightboxImg) lightboxImg.style.cursor = isVideo ? 'default' : 'zoom-in';

        if (isVideo) {
            if (lightboxImg) lightboxImg.style.display = 'none';
            if (lightboxVideo) {
                lightboxVideo.style.display = 'block';
                lightboxVideo.src = currentSrc;
                lightboxVideo.play();
            }
        } else {
            if (lightboxVideo) {
                lightboxVideo.style.display = 'none';
                lightboxVideo.pause();
                lightboxVideo.src = '';
            }
            if (lightboxImg) {
                lightboxImg.style.display = 'block';
                lightboxImg.src = currentSrc;
            }
        }
        if (lightboxCaption) lightboxCaption.textContent = currentCap;
    };

    const openLightbox = (images, captions, index) => {
        currentImages = images;
        currentCaptions = captions;
        currentIndex = index;
        updateLightboxContent();
        if (lightbox) lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scroll
    };

    const closeLightbox = () => {
        if (lightbox) lightbox.style.display = 'none';
        if (lightboxVideo) {
            lightboxVideo.pause();
            lightboxVideo.src = '';
        }
        scale = 1;
        if (lightboxImg) lightboxImg.style.transform = 'none';
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

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (nextBtn) nextBtn.addEventListener('click', showNext);
    if (prevBtn) prevBtn.addEventListener('click', showPrev);

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content')) closeLightbox();
        });
    }

    if (lightbox) {
        lightbox.addEventListener('wheel', (e) => {
            if (lightbox.style.display === 'flex' && lightboxImg && lightboxImg.style.display === 'block') {
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
    }

    if (lightboxImg) {
        lightboxImg.addEventListener('mousedown', (e) => {
            if (scale > 1) {
                isPanning = true;
                startX = e.clientX - translateX * scale;
                startY = e.clientY - translateY * scale;
                updateTransform();
            }
        });
    }

    window.addEventListener('mousemove', (e) => {
        if (isPanning && scale > 1) {
            translateX = (e.clientX - startX) / scale;
            translateY = (e.clientY - startY) / scale;
            updateTransform();
        }
    });

    window.addEventListener('mouseup', () => {
        isPanning = false;
        if (lightbox && lightbox.style.display === 'flex') updateTransform();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox && lightbox.style.display === 'flex') {
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
        if (modalImg) modalImg.src = data.img;
        if (modalTitle) modalTitle.textContent = data.title;
        if (modalPurpose) modalPurpose.textContent = data.purpose;
        if (modalAddition) modalAddition.textContent = data.addition;
        if (modalTools) modalTools.textContent = data.tools;

        if (projectModal) projectModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    };

    const closeProjectModal = () => {
        if (projectModal) projectModal.style.display = 'none';
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
