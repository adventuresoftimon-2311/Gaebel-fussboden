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
    const imageData = {
      "025a9aab-f280-4f80-bbc6-2a833d3524b8.jpg": {
        "category": "treppen",
        "alt": "Neu verlegte Massivholztreppe in Eiche Natur mit unsichtbarer Befestigung und weißen Wänden im modernen Treppenhaus"
      },
      "025b1c65-c7bc-48b8-82e2-4e191bd3252b.jpg": {
        "category": "parkett",
        "alt": "Hochwertiges Eichenparkett im Fischgrätmuster mit sauberem Übergang zu grauen Bodenfliesen und weißer Sockelleiste"
      },
      "0331bb05-6902-4eec-b8f6-598ca4209709.jpg": {
        "category": "parkett",
        "alt": "Detailansicht eines durchgehenden Fischgrätparketts aus Eiche im Türübergang ohne störende Schwellen oder Profile"
      },
      "0e96f157-eb29-4198-a34b-c81f02a43acb.jpg": {
        "category": "parkett",
        "alt": "Großzügiger heller Wohnraum mit meisterhaft verlegtem Fischgrät-Parkettboden aus Eichenholz und bodentiefen Fenstern"
      },
      "12788988-3579-4bb5-9b86-cd373828fb68.jpg": {
        "category": "treppen",
        "alt": "Handwerkliche Treppensanierung mit Eichenholzstufen im Rohbau, inklusive Montagekleber und Verlegewerkzeug auf der Baustelle"
      },
      "12f9ba9f-7be6-4b25-afdb-94e68ba9c040.jpg": {
        "category": "vorbereitung",
        "alt": "Mitarbeiter von Fußbodentechnik Gäbel im Firmen-T-Shirt trägt einen gelben Förderschlauch bei der Untergrundvorbereitung"
      },
      "162afc25-6f60-4bf2-8209-b99916cdc785.jpg": {
        "category": "vorbereitung",
        "alt": "Professionelle Bodenleger beim Einbringen von flüssiger Ausgleichsmasse zur Untergrundvorbereitung in einem großen Saal"
      },
      "2f664495-6f51-4e59-b8ca-d51f970f55e6.jpg": {
        "category": "parkett",
        "alt": "Elegantes Eichen-Fischgrätparkett in einem Flur mit modernem weißem Treppengeländer und flachen weißen Sockelleisten"
      },
      "35e589d1-c918-4465-b192-34acfcaae260.jpg": {
        "category": "vinyl",
        "alt": "Hochwertiger Vinylboden in authentischer Holzoptik im Landhausdielen-Format in einem hellen Raum mit Balkonzugang"
      },
      "376b3134-aa09-46bd-a21e-95a9ed07b5c6.jpg": {
        "category": "parkett",
        "alt": "Verlegung von klassischem Eichen-Fischgrätparkett in einer modernen Küche mit weißen Einbauschränken"
      },
      "3f9141d4-41c0-4d62-9c6a-bd5cd43701cb.jpg": {
        "category": "treppen",
        "alt": "Moderne gewendelte Treppe mit Trittstufen in dunkelgrauer Steinoptik und Edelstahlgeländer mit Holzhandlauf"
      },
      "47763b3f-23d1-4994-8a16-9c91772cb6f9.jpg": {
        "category": "vorbereitung",
        "alt": "Großbaustelle im Altbau mit blauen Schutzfolien auf dem Boden und Vorbereitungen für den neuen Fußbodenaufbau"
      },
      "5a45dc22-4182-4002-8576-316631e59e46.jpg": {
        "category": "treppen",
        "alt": "Treppenhaus mit neu belegten Treppenstufen in dunkelgrauer Fliesenoptik und robustem Metallgeländer mit Holzhandlauf"
      },
      "5c1e5f9b-4b1e-4c43-adbb-1641b3fdd106.jpg": {
        "category": "vorbereitung",
        "alt": "Bodenleger bereiten vor einem Gebäude am Hofbräu München die Maschine für die flüssige Ausgleichsmasse vor"
      },
      "5ccb3364-412a-4797-abd4-4d9f1fadfda5.jpg": {
        "category": "vorbereitung",
        "alt": "Fachgerechtes Gießen von selbstverlaufender Spachtelmasse mit einem Schlauch zur perfekten Untergrundnivellierung"
      },
      "6aebdaf8-eb53-4516-a6fb-03f7e8264ab1.jpg": {
        "category": "vorbereitung",
        "alt": "Pumpmaschine verteilt Ausgleichsmasse über einen gelben Schlauch auf dem Rohboden einer Großbaustelle"
      },
      "6e6f3f66-556c-4370-b975-70ece7a6b697.jpg": {
        "category": "vorbereitung",
        "alt": "Großer Raum im Altbau mit teils fertiger Spachtelmasse und Werkzeugen zur professionellen Bodenuntergrund-Vorbereitung"
      },
      "842f69f8-9e0d-4cc7-bb3f-ff1748ffd015.jpg": {
        "category": "vinyl",
        "alt": "Detailaufnahme eines verlegten Designbodens in Holzoptik mit sauberem Abschluss an einer weißen Wand durch Sockelleisten"
      },
      "86260448-ecc1-428f-b5d0-2fc39177f87e.jpg": {
        "category": "vorbereitung",
        "alt": "Baustellenansicht mit Paletten voller Ausgleichsmasse ZM vor einem Gebäude in München zur Bodenvorbereitung"
      },
      "885bc217-e71c-4f1f-a293-d0b061d4020e.jpg": {
        "category": "treppen",
        "alt": "Elegante gewendelte Holztreppe in heller Eichenoptik mit nahtlosen Übergängen und minimalistischem Design ohne Setzstufenprofil"
      },
      "8e070f58-25cb-4a9c-a9a9-711fb6c34e56.jpg": {
        "category": "parkett",
        "alt": "Fachgerechte Verlegung von hochwertigem Parkettboden aus Massivholz in elegantem Verlegemuster für langlebige Wohnqualität"
      },
      "96612c81-4d11-47e0-b10e-b2e85a1a74d8.jpg": {
        "category": "vinyl",
        "alt": "Moderner, pflegeleichter Vinyl-Designboden in authentischer Holzoptik, perfekt geeignet für anspruchsvolle und stark beanspruchte Wohnräume"
      },
      "9704364f-9b2e-4cb3-8119-b702a06ba5ab.jpg": {
        "category": "treppen",
        "alt": "Professionelle Treppensanierung mit maßgefertigten Trittstufen und Setzstufen für eine moderne und sichere Aufwertung des Treppenhauses"
      },
      "IMG_0010.jpg": {
        "category": "bad-fliesen",
        "alt": "Exklusive Badezimmergestaltung mit großformatigen Fliesen, fugenloser Duschrückwand und rutschfesten Bodenfliesen im modernen Design"
      },
      "IMG_0011.jpg": {
        "category": "vorbereitung",
        "alt": "Fachmännische Untergrundvorbereitung durch Schleifen, Grundieren und vollflächiges Spachteln als perfekte Basis für den neuen Bodenbelag"
      },
      "IMG_0013.jpg": {
        "category": "parkett",
        "alt": "Wunderschön versiegeltes Echtholzparkett in warmen Tönen für eine natürliche und elegante Raumgestaltung"
      },
      "IMG_0014.jpg": {
        "category": "vinyl",
        "alt": "Hochwertiger Vinylbodenbelag in detailreicher Steinoptik mit widerstandsfähiger Nutzschicht für stark frequentierte Bereiche"
      },
      "IMG_0015.jpg": {
        "category": "treppen",
        "alt": "Sanierte Massivholztreppe mit rutschhemmender Versiegelung, die sich ideal in das moderne Raumkonzept einfügt"
      },
      "IMG_0016.jpg": {
        "category": "bad-fliesen",
        "alt": "Badezimmerfliesen in Betonoptik für ein urbanes, minimalistisches Design mit pflegeleichten Oberflächen"
      },
      "IMG_0017.jpg": {
        "category": "vorbereitung",
        "alt": "Bodenleger beim fachgerechten Auftragen einer hochfesten Nivelliermasse zur Schaffung einer ebenen Verlegefläche"
      },
      "IMG_0760.jpg": {
        "category": "parkett",
        "alt": "Stilvoller Parkettboden mit gebürsteter Oberfläche für eine spürbare Holzstruktur und ein angenehmes Laufgefühl"
      },
      "IMG_0761.jpg": {
        "category": "vinyl",
        "alt": "Robuster Vinyl-Designboden im Klickformat verlegt, ideal für eine schnelle Renovierung mit hochwertiger Optik"
      },
      "IMG_0762.jpg": {
        "category": "treppen",
        "alt": "Umfassende Treppenbelegung mit Tritt- und Setzstufen aus kratzfestem Laminat in harmonischer Abstimmung zum Boden"
      },
      "IMG_0763.jpg": {
        "category": "bad-fliesen",
        "alt": "Edle Wand- und Bodenfliesen im Badezimmer mit nahtlosem Übergang in die bodengleiche Dusche für maximalen Komfort"
      },
      "IMG_0764.jpg": {
        "category": "vorbereitung",
        "alt": "Abschleifen des alten Estrichs mit einer professionellen Tellerschleifmaschine zur optimalen Haftung des neuen Belags"
      },
      "IMG_0765.jpg": {
        "category": "parkett",
        "alt": "Klassisches Stäbchenparkett, frisch geölt und poliert, bringt zeitlose Eleganz in jeden Wohnbereich"
      },
      "IMG_0766.jpg": {
        "category": "vinyl",
        "alt": "Wasserdichter Vinylboden, ideal verlegt in Feuchträumen, in einer modernen und authentischen Eichenholz-Nachbildung"
      },
      "IMG_0770.jpg": {
        "category": "bad-fliesen",
        "alt": "Modernes Badezimmer mit dunkelgrauen Bodenfliesen, halbhohen Wandfliesen in weiß-grauer Marmoroptik und WC-Vorwandelement im Rohbau"
      },
      "IMG_0771.jpg": {
        "category": "bad-fliesen",
        "alt": "Schmaler Badezimmer-Flurbereich mit grauen Bodenfliesen, Marmoroptik-Wandfliesen und integrierter flacher Duschwanne"
      },
      "IMG_0772.jpg": {
        "category": "bad-fliesen",
        "alt": "Duschkabine mit raumhoch gefliesten Wänden in glänzender Marmoroptik und quadratischer weißer Duschwanne"
      },
      "IMG_0773.jpg": {
        "category": "bad-fliesen",
        "alt": "Großes Badezimmer mit warmen beigen Wandfliesen in Marmoroptik, dunkelgrauen Bodenfliesen, Duschwanne und praktischer Wandnische"
      },
      "IMG_0774.jpg": {
        "category": "bad-fliesen",
        "alt": "Nahaufnahme des Duschbereichs mit beigen Marmoroptik-Wandfliesen, integrierter Nische und WC-Spülkasten-Vorwand"
      },
      "a03bb75b-cabd-4f34-a6fa-1a6574043824.jpg": {
        "category": "treppen",
        "alt": "Elegante Treppensanierung mit modernen Stufen und einem optisch ansprechenden Geländer für höchste Wohnansprüche"
      },
      "a3309d78-9de6-4e45-ab6f-2ebc9355c203.jpg": {
        "category": "bad-fliesen",
        "alt": "Großformatige Badfliesen in Anthrazit mit minimaler Fugenbreite für eine moderne, großzügige Raumwirkung"
      },
      "a8dd826e-0851-4a18-b71f-60f78ed41e42.jpg": {
        "category": "vorbereitung",
        "alt": "Sorgfältige Überprüfung der Untergrundfeuchtigkeit und Ebenheit vor der geplanten Parkettverlegung durch den Profi"
      },
      "a9d948fb-123a-45ca-87d4-a0ef03310902.jpg": {
        "category": "parkett",
        "alt": "Naturgeöltes Massivholzparkett im Schlafzimmer sorgt für ein gesundes Raumklima und eine behagliche Atmosphäre"
      },
      "bc2723b0-4a8b-4074-a4c9-80305f1b8c21.jpg": {
        "category": "vinyl",
        "alt": "Strapazierfähiger Vinylboden in Fliesenoptik, perfekt geeignet für Küchen und hoch frequentierte Flurbereiche"
      },
      "c5538bea-11c8-4101-b21e-fea685935bfb.jpg": {
        "category": "treppen",
        "alt": "Handwerklich perfekte Holztreppe, die Funktionalität und zeitlose Ästhetik im offenen Wohnbereich vereint"
      },
      "ce4b8249-f15a-40f0-afac-68d16a00dc40.jpg": {
        "category": "bad-fliesen",
        "alt": "Verlegung von edlen Fliesen im Badbereich, die durch eine spezielle Oberflächenveredelung besonders rutschfest sind"
      },
      "ce5d5aa9-1324-4efc-bd33-5ebc64c39452.jpg": {
        "category": "vorbereitung",
        "alt": "Verwendung einer Stachelwalze nach dem Ausgießen der Bodenspachtelmasse, um Lufteinschlüsse zuverlässig zu entfernen"
      },
      "d33390ff-629f-423d-9f98-0765572ed995.jpg": {
        "category": "parkett",
        "alt": "Großzügige Landhausdielen aus Eichenholz mit markanter Maserung, die jedem Raum einen rustikalen Charme verleihen"
      },
      "d7ce2073-5241-453d-bae7-2da07f37ff93.jpg": {
        "category": "vinyl",
        "alt": "Vollflächig verklebter Designboden in edler Holzoptik, der maximale Stabilität und hervorragende Trittschalldämmung bietet"
      },
      "dc9b8182-bd23-411c-b431-444736bdb8fc.jpg": {
        "category": "treppen",
        "alt": "Millimetergenaue Einpassung der neuen Treppenstufen bei der Renovierung einer alten Holztreppe durch Fachexperten"
      },
      "f7ef91ad-b547-4486-8c48-f3c9955362b2.jpg": {
        "category": "bad-fliesen",
        "alt": "Detail einer bodengleichen Dusche mit eingelassenem Ablaufrinne und exakt zugeschnittenen Bodenfliesen"
      },
      "ff16e5b2-6d80-4ea0-8aad-10e56a1fbf10.jpg": {
        "category": "vorbereitung",
        "alt": "Abkleben und Vorbereiten der Wände und Randfugen vor dem großflächigen Gießen der faserarmierten Ausgleichsmasse"
      }
    };

    // Render Gallery Items dynamically
    Object.keys(imageData).forEach((filename) => {
        const itemData = imageData[filename];
        const src = `/images/gallery/${filename}`;
        
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-category', itemData.category);
        item.innerHTML = `<img src="${src}" alt="${itemData.alt} - Fußbodentechnik Gäbel Referenz" loading="lazy">`;
        
        item.addEventListener('click', () => openLightbox(item));
        galleryContainer.appendChild(item);
    });

    // Lightbox references & state
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let visibleItems = [];
    let currentVisibleIndex = 0;

    function openLightbox(itemElement) {
        visibleItems = Array.from(galleryContainer.querySelectorAll('.gallery-item:not(.hidden)'));
        currentVisibleIndex = visibleItems.indexOf(itemElement);
        
        if (currentVisibleIndex !== -1) {
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightbox() {
        if (visibleItems.length === 0) return;
        const activeItem = visibleItems[currentVisibleIndex];
        const activeImg = activeItem.querySelector('img');
        
        lightboxImg.src = activeImg.src;
        lightboxImg.alt = activeImg.alt;
    }

    function showNext() {
        if (visibleItems.length === 0) return;
        currentVisibleIndex = (currentVisibleIndex + 1) % visibleItems.length;
        updateLightbox();
    }

    function showPrev() {
        if (visibleItems.length === 0) return;
        currentVisibleIndex = (currentVisibleIndex - 1 + visibleItems.length) % visibleItems.length;
        updateLightbox();
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
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });

    // Gallery Category Filtering Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active states
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            const items = galleryContainer.querySelectorAll('.gallery-item');
            
            items.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                if (filterValue === 'all' || itemCategory === filterValue) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
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
