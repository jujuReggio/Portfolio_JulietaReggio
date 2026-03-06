document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');
    const headerLogo = document.getElementById('header-logo');

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
