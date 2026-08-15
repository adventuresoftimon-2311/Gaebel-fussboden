import './style.css'

// Global JS Scripts
console.log('Fußbodentechnik Gäbel Website Loaded');

// Sticky Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hero Background Slider (Fading Effect)
const heroSlides = document.querySelectorAll('.hero-slide');
if (heroSlides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
        heroSlides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % heroSlides.length;
        heroSlides[currentSlide].classList.add('active');
    }, 5000);
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });

    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// Gallery & Lightbox Logic
const galleryContainer = document.getElementById('gallery-container');
if (galleryContainer) {
    const galleryImages = [
        "025a9aab-f280-4f80-bbc6-2a833d3524b8.jpg",
        "025b1c65-c7bc-48b8-82e2-4e191bd3252b.jpg",
        "0331bb05-6902-4eec-b8f6-598ca4209709.jpg",
        "0e96f157-eb29-4198-a34b-c81f02a43acb.jpg",
        "12788988-3579-4bb5-9b86-cd373828fb68.jpg",
        "12f9ba9f-7be6-4b25-afdb-94e68ba9c040.jpg",
        "162afc25-6f60-4bf2-8209-b99916cdc785.jpg",
        "2f664495-6f51-4e59-b8ca-d51f970f55e6.jpg",
        "35e589d1-c918-4465-b192-34acfcaae260.jpg",
        "376b3134-aa09-46bd-a21e-95a9ed07b5c6.jpg",
        "3f9141d4-41c0-4d62-9c6a-bd5cd43701cb.jpg",
        "47763b3f-23d1-4994-8a16-9c91772cb6f9.jpg",
        "5a45dc22-4182-4002-8576-316631e59e46.jpg",
        "5c1e5f9b-4b1e-4c43-adbb-1641b3fdd106.jpg",
        "5ccb3364-412a-4797-abd4-4d9f1fadfda5.jpg",
        "6aebdaf8-eb53-4516-a6fb-03f7e8264ab1.jpg",
        "6e6f3f66-556c-4370-b975-70ece7a6b697.jpg",
        "842f69f8-9e0d-4cc7-bb3f-ff1748ffd015.jpg",
        "86260448-ecc1-428f-b5d0-2fc39177f87e.jpg",
        "885bc217-e71c-4f1f-a293-d0b061d4020e.jpg",
        "8e070f58-25cb-4a9c-a9a9-711fb6c34e56.jpg",
        "96612c81-4d11-47e0-b10e-b2e85a1a74d8.jpg",
        "9704364f-9b2e-4cb3-8119-b702a06ba5ab.jpg",
        "IMG_0010.jpg",
        "IMG_0011.jpg",
        "IMG_0013.jpg",
        "IMG_0014.jpg",
        "IMG_0015.jpg",
        "IMG_0016.jpg",
        "IMG_0017.jpg",
        "IMG_0760.jpg",
        "IMG_0761.jpg",
        "IMG_0762.jpg",
        "IMG_0763.jpg",
        "IMG_0764.jpg",
        "IMG_0765.jpg",
        "IMG_0766.jpg",
        "IMG_0770.jpg",
        "IMG_0771.jpg",
        "IMG_0772.jpg",
        "IMG_0773.jpg",
        "IMG_0774.jpg",
        "a03bb75b-cabd-4f34-a6fa-1a6574043824.jpg",
        "a3309d78-9de6-4e45-ab6f-2ebc9355c203.jpg",
        "a8dd826e-0851-4a18-b71f-60f78ed41e42.jpg",
        "a9d948fb-123a-45ca-87d4-a0ef03310902.jpg",
        "bc2723b0-4a8b-4074-a4c9-80305f1b8c21.jpg",
        "c5538bea-11c8-4101-b21e-fea685935bfb.jpg",
        "ce4b8249-f15a-40f0-afac-68d16a00dc40.jpg",
        "ce5d5aa9-1324-4efc-bd33-5ebc64c39452.jpg",
        "d33390ff-629f-423d-9f98-0765572ed995.jpg",
        "d7ce2073-5241-453d-bae7-2da07f37ff93.jpg",
        "dc9b8182-bd23-411c-b431-444736bdb8fc.jpg",
        "f7ef91ad-b547-4486-8c48-f3c9955362b2.jpg",
        "ff16e5b2-6d80-4ea0-8aad-10e56a1fbf10.jpg"
    ];

    const allImages = galleryImages.map(img => `/images/gallery/${img}`);

    // SEO-optimized descriptions
    const altDescriptions = [
        "Massivholz-Eichenparkett verlegen - Exklusiver Echtholzboden im Wohnzimmer",
        "Vinylboden in eleganter Holzoptik - Langlebiger Designboden in der Küche",
        "Treppensanierung mit Eichen-Parkettdielen - Fließender Übergang zum Stockwerk",
        "Parkett abschleifen, ölen und versiegeln - Fachgerechte Altbausanierung Waldkraiburg",
        "Klassisches Fischgrät-Parkett verlegen - Edler Echtholz-Klassiker im Salon",
        "Sockelleisten Wandanschluss Detail - Passgenau verarbeitet vom Fachbetrieb",
        "Nutzschicht Vinyl Designbelag - Strapazierfähiger Boden im Treppenhaus",
        "PVC-Bodenbelag fugenlos verlegen - Pflegeleicht im Büroraum",
        "Eichen-Landhausdielen geölt - Naturnahes Wohnen im Schlafzimmer",
        "Untergrund nivellieren und spachteln - Professionelle Estrichvorbereitung",
        "Umweltfreundlicher Korkboden verlegen - Elastischer Trittschallschutz im Kinderzimmer",
        "Laminat verlegen im Flur - Kostengünstig und robust in Holzstruktur",
        "Moderne Treppensanierung mit Trittkanten-Profilen - Rutschfeste Stufenbelegung",
        "Materialübergang Fliesen auf Dielenboden - Saubere Abschlussleistenverlegung",
        "Linoleum verlegen in öffentlichen Räumen - Natürlicher Belag",
        "Eichen-Mosaikparkett reparieren und versiegeln - Glänzendes Finish"
    ];

    allImages.forEach((src, index) => {
        const baseAlt = altDescriptions[index % altDescriptions.length];
        const finalAlt = `${baseAlt} - Fußbodentechnik Gäbel Referenz ${index + 1}`;
        
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${src}" alt="${finalAlt}" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(index));
        galleryContainer.appendChild(item);
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    let currentIndex = 0;

    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = allImages[currentIndex];
        lightboxImg.alt = galleryContainer.children[currentIndex].querySelector('img').alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % allImages.length;
        lightboxImg.src = allImages[currentIndex];
        lightboxImg.alt = galleryContainer.children[currentIndex].querySelector('img').alt;
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
        lightboxImg.src = allImages[currentIndex];
        lightboxImg.alt = galleryContainer.children[currentIndex].querySelector('img').alt;
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', showNext);
    if (lightboxPrev) lightboxPrev.addEventListener('click', showPrev);

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });
}

// Services Modal Logic
const serviceCards = document.querySelectorAll('.service-card');
const serviceModal = document.getElementById('service-modal');
if (serviceModal && serviceCards.length > 0) {
    const modalClose = serviceModal.querySelector('.service-modal-close');
    const modalBody = serviceModal.querySelector('.service-modal-body');

    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const detailSource = card.querySelector('.service-detail-source');
            if (detailSource && modalBody) {
                modalBody.innerHTML = detailSource.innerHTML;
                serviceModal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Lock background scrolling
            }
        });
    });

    const closeModal = () => {
        serviceModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    serviceModal.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
            closeModal();
        }
    });
}
