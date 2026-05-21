/* ==========================================================================
   SCRIPT FILE - Türkiye'de Antroposen Çağında Sulak Alanlarda Ekolojik Riskler Çalıştayı
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // 1. DİL ÇEVİRİ VERİSİ (TRANSLATION DICTIONARY)
    // ---------------------------------------------------------
    const translations = {
        tr: {
            // Meta & SEO
            "meta-title": "Türkiye’de Antroposen Çağında Sulak Alanlarda Ekolojik Riskler Çalıştayı",
            "meta-desc": "Sulak alan ekosistemlerinde ekolojik riskler, iklim değişikliği, insan baskıları, doğa temelli çözümler ve dijital izleme teknolojileri üzerine çok disiplinli bilimsel çalıştay.",
            
            // Header / Menu
            "menu-home": "Ana Sayfa",
            "menu-about": "Çalıştay Hakkında",
            "menu-topics": "Konular",
            "menu-map": "Sulak Alanlar Haritası",
            "menu-dates": "Önemli Tarihler",
            "menu-presentations": "Kabul Edilen Bildiriler",
            "menu-committee": "Düzenleme Kurulu",
            "menu-publication": "Yayın Olanakları",
            "menu-contact": "İletişim",
            
            // Logo
            "logo-title": "SULAK ALANLAR",
            "logo-sub": "Ekolojik Riskler Çalıştayı",
            
            // Hero
            "hero-badge": "Akademik Bilimsel Çalıştay 2026",
            "hero-title": "Türkiye’de Antroposen Çağında",
            "hero-title-span": "Sulak Alanlarda Ekolojik Riskler",
            "hero-honoree": "Doç. Dr. Topçu Ahmet ERTEK Onuruna",
            "hero-desc": "Sulak alan ekosistemlerinde ekolojik riskler, iklim değişikliği, insan baskıları, doğa temelli çözümler ve dijital izleme teknolojileri üzerine çok disiplinli bir bilimsel buluşma.",
            "btn-explore-pres": "Bildirileri İncele",
            "btn-about": "Çalıştay Hakkında",
            "btn-topics": "Konuları İncele",
            
            // Hero Meta Info
            "meta-date-label": "Çalıştay Tarihi",
            "meta-date-val": "22–24 Ekim 2026",
            "meta-venue-label": "Etkinlik Yeri",
            "meta-venue-val": "ÇOMÜ, Çanakkale",
            "meta-capacity-label": "Katılım Sınırı",
            "meta-capacity-val": "En Fazla 20 Bildiri",
            
            // Countdown Widget
            "countdown-title": "Çalıştaya Kalan Süre",
            "countdown-days": "Gün",
            "countdown-hours": "Saat",
            "countdown-minutes": "Dakika",
            "countdown-seconds": "Saniye",
            "countdown-note": "Kabul edilen bildiri sınırı: <strong>En fazla 20</strong>",
            
            // About Section
            "about-subtitle": "Bilimsel Perspektif",
            "about-title": "Çalıştay Hakkında",
            "about-text-1": "Sulak alanlar; biyolojik çeşitlilik, karbon depolama, su döngüsünün düzenlenmesi ve kıyı koruma işlevleri bakımından yeryüzünün en hassas ve en kritik ekosistemleri arasında yer almaktadır. Ancak Antroposen çağında hızlanan insan faaliyetleri, iklim değişikliği ve arazi kullanım dönüşümleri bu ekosistemleri çok boyutlu ekolojik risklerle karşı karşıya bırakmaktadır.",
            "about-text-2": "Bu çalıştay, <strong>Türkiye’de Antroposen çağında sulak alanların karşı karşıya olduğu ekolojik riskleri</strong>, insan kaynaklı baskıları, yönetim sorunlarını ve sürdürülebilir çözüm yaklaşımlarını çok disiplinli bir perspektifle tartışmayı amaçlamaktadır.",
            
            // About Metrics
            "metric-topics-val": "20",
            "metric-topics-lbl": "Tematik Odak Alanı",
            "metric-papers-val": "Max 20",
            "metric-papers-lbl": "Kabul Edilecek Bildiri",
            "metric-host-val": "ÇOMÜ",
            "metric-host-lbl": "Ev Sahibi Kurum",
            "metric-pub-val": "SCI",
            "metric-pub-lbl": "Özel Sayı Planı",
            
            // About Bullet Points
            "about-bullet-1": "Çok disiplinli katılım",
            "about-bullet-2": "Doğa temelli çözümler",
            "about-bullet-3": "Dijital CBS entegrasyonu",
            "about-bullet-4": "Stratejik karar destek",
            
            // Honoree Section
            "honoree-subtitle": "Saygı ve İthaf",
            "honoree-title": "Doç. Dr. Topçu Ahmet ERTEK Onuruna",
            "honoree-bio": "Bu çalıştay, <strong>Doç. Dr. Topçu Ahmet ERTEK’in</strong> Antroposen çağında ortam degradasyonu, çevresel değişim ve coğrafi süreçler alanındaki bilimsel katkılarına saygı amacıyla düzenlenmektedir. Dr. Ertek, Türkiye fiziki coğrafyası, jeomorfolojisi ve kıyı ekosistemleri üzerine yaptığı uzun soluklu akademik çalışmalarıyla nesiller boyu yerbilimcilere rehberlik etmiştir.",
            "honoree-role": "Fiziki Coğrafya & Jeomorfoloji Uzmanı",
            "honoree-profile-btn": "Akademik Profil",
            
            // Topics Section
            "topics-subtitle": "Bilimsel Kapsam",
            "topics-title": "Tematik Odaklar & Konu Başlıkları",
            "topics-desc": "Çalıştay kapsamında tartışılacak ve taranacak 20 temel akademik konu başlığı.",
            "filter-all": "Tüm Konular",
            "filter-physical": "Fiziksel & Hidroloji",
            "filter-ecology": "Ekoloji & İklim",
            "filter-policy": "Yönetim & Politika",
            "filter-technology": "CBS & Yapay Zeka",
            
            // Topics - Cards (1 to 20)
            "topic-1": "Sulak alan ekosistemlerinin fiziksel, hidrolojik ve ekolojik dinamikleri",
            "topic-2": "Kıyı lagünleri, deltalar, göller ve taşkın düzlüklerinde çevresel değişimler",
            "topic-3": "Deniz–kara etkileşimi ve morfolojik süreçler",
            "topic-4": "Arazi kullanımı/arazi örtüsü değişimleri ve sulak alan baskıları",
            "topic-5": "Kentsel yayılma, turizm, sanayi ve tarımsal faaliyetlerin etkileri",
            "topic-6": "Hidromorfolojik müdahaleler ve su rejimi değişimleri",
            "topic-7": "Su kalitesi, kirlilik yükleri ve ötrofikasyon süreçleri",
            "topic-8": "Sediment taşınımı ve sulak alan sistem dengeleri",
            "topic-9": "Biyoçeşitlilik kaybı, habitat parçalanması ve ekosistem bozulmaları",
            "topic-10": "İstilacı türler ve ekolojik dayanıklılık sorunları",
            "topic-11": "İklim değişikliği, kuraklık ve ekstrem olayların etkileri",
            "topic-12": "Deniz seviyesi yükselmesi ve kıyı taşkın riskleri",
            "topic-13": "Ekolojik risk analizi ve kırılganlık değerlendirmeleri",
            "topic-14": "Sulak alan koruma politikaları ve yönetişim yaklaşımları",
            "topic-15": "Ekosistem temelli yönetim ve sürdürülebilir planlama",
            "topic-16": "Doğa temelli çözümler ve sulak alan restorasyonu",
            "topic-17": "Ramsar alanları ve koruma-kullanma dengesi",
            "topic-18": "CBS, uzaktan algılama ve mekânsal analiz uygulamaları",
            "topic-19": "Yapay zekâ, büyük veri ve dijital ikiz teknolojileri",
            "topic-20": "Karar destek sistemleri ve sürdürülebilir yönetim araçları",
            
            // Why Participate Section
            "why-subtitle": "Katılım Gerekçeleri",
            "why-title": "Çalıştaya Neden Katılmalısınız?",
            "why-desc": "Bu çalıştay, akademik üretkenliği en üst düzeye çıkarmak ve sulak alan ekosistemlerimizin geleceğini şekillendirmek için tasarlanmış seçkin bir platformdur.",
            "why-point-1-title": "Çok Disiplinli Perspektif",
            "why-point-1-desc": "Türkiye'de sulak alan risklerini çok disiplinli bir bakışla tartışmak ve farklı alanlardan yerbilimcilerle iş birliği kurmak.",
            "why-point-2-title": "Antroposen & İklim Değişikliği",
            "why-point-2-desc": "Antroposen ve iklim değişikliği bağlamında güncel bilimsel yaklaşımları, teori ve saha tecrübelerini değerlendirmek.",
            "why-point-3-title": "İleri Dijital Entegrasyon",
            "why-point-3-desc": "CBS, uzaktan algılama, yapay zekâ ve dijital ikiz teknolojilerinin pratik saha uygulamalarını paylaşmak.",
            "why-point-4-title": "Doğa Temelli Yaklaşımlar",
            "why-point-4-desc": "Sürdürülebilir restorasyon yaklaşımları ve doğa temelli çözümleri bilim dünyası ve politika yapıcılara görünür kılmak.",
            "why-point-5-title": "SCI İndeks Özel Sayı Olanağı",
            "why-point-5-desc": "Seçili bildiriler için indeksli dergide (SCI/SCI-E kapsamında) özel sayı yayını sürecine katkı sunmak.",
            
            "why-sci-badge": "Ekolojik Gösterge",
            "why-sci-title": "Türkiye Sulak Alan Bozulma Trendi",
            "why-sci-label-1": "Lagünler",
            "why-sci-label-2": "Deltalar",
            "why-sci-label-3": "İç Göller",
            "why-sci-label-4": "Koruma Alanları",
            
            // Wetlands Map
            "map-subtitle": "Coğrafi Kapsam",
            "map-title": "Türkiye Sulak Alanlar Haritası",
            "map-desc": "Türkiye’deki önemli göller, deltalar, lagünler ve sulak alan koruma alanları OpenStreetMap üzerinde işaretlenmiştir. İşarete tıklayarak ayrıntılı bilgi alabilirsiniz.",
            "map-legend-title": "Gösterge",
            "map-source": "Kaynak:",
            "map-stat-total": "Toplam Sulak Alan",
            "map-stat-ramsar": "Ramsar Alanı",
            "map-stat-national": "Ulusal Öneme Haiz",
            "map-stat-local": "Mahalli Öneme Haiz",
            "map-legend-ramsar": "Ramsar Alanı",
            "map-legend-national": "Ulusal Öneme Haiz",
            "map-legend-local": "Mahalli Öneme Haiz",
            "map-filter-title": "Filtrele",
            "map-filter-all": "Tümü",
            "map-filter-ramsar": "Ramsar",
            "map-filter-national": "Ulusal",
            "map-filter-local": "Mahalli",
            "map-search-placeholder": "İl veya sulak alan adı...",
            "map-count-label": "haritada gösterilen",
            "map-attribution": "Harita verisi",
            "map-table-title": "Tescilli Sulak Alanlar Listesi",
            "map-th-no": "No",
            "map-th-province": "İl",
            "map-th-name": "Sulak Alan",
            "map-th-status": "Tescil Statüsü",
            "map-th-link": "Detay",
            "map-popup-region": "İl",
            "map-popup-status": "Tescil",
            "map-popup-detail": "Ekotaban",
            "map-no-results": "Eşleşen sulak alan bulunamadı.",
            
            // Key Info Section
            "info-subtitle": "Katılım Koşulları",
            "info-title": "Önemli Bilgiler & Süreçler",
            "info-box-1-title": "Etkinlik Tarihi",
            "info-box-1-desc": "Çalıştay oturumları, arazi gezileri ve sosyal programlar.",
            "info-box-1-val": "22–24 Ekim 2026",
            "info-box-2-title": "Etkinlik Yeri",
            "info-box-2-desc": "Çanakkale Onsekiz Mart Üniversitesi, Anafartalar Yerleşkesi.",
            "info-box-2-val": "Eğitim Fakültesi",
            "info-box-3-title": "Kabul Limiti",
            "info-box-3-desc": "Etkinlik kalitesi ve yoğun bilimsel tartışma ortamını korumak için.",
            "info-box-3-val": "Maksimum 20 Bildiri",
            "info-box-4-title": "Değerlendirme Tipi",
            "info-box-4-desc": "Bildiriler özgünlük, bilimsel yeterlilik ve tema uyumu açısından değerlendirilir.",
            "info-box-4-val": "Çift-Kör Hakemli",
            
            // Timeline
            "timeline-main-title": "Çalıştay Süreç Takvimi",
            "timeline-1-date": "05 Eylül 2026",
            "timeline-1-title": "Kabul Edilen Bildirilerin İlanı",
            "timeline-1-desc": "Bilim kurulu değerlendirmesi sonucu kabul edilen bildiriler e-posta ile duyurulacaktır.",
            "timeline-2-date": "30 Eylül 2026",
            "timeline-2-title": "Tam Metin Gönderim Son Tarihi",
            "timeline-2-desc": "Çalıştay kitabında ve özel sayı değerlendirmesinde yer alacak tam metinlerin gönderilmesi.",
            "timeline-3-date": "10 Ekim 2026",
            "timeline-3-title": "Çalıştay Programının İlanı",
            "timeline-3-desc": "Oturumların, davetli konuşmacıların ve arazi gezisi rotasının detaylı ilanı.",
            "timeline-4-date": "22–24 Ekim 2026",
            "timeline-4-title": "Çalıştay Başlangıcı",
            "timeline-4-desc": "Açılış töreni, bilimsel sunumlar ve sulak alan izleme panelleri.",
            
            // Special Feature Box
            "special-box-title": "Kabul Edilen Bildirilerin Duyurulması Hakkında",
            "special-box-desc": "Özet bildiri değerlendirme süreci devam etmektedir. Bilim kurulu tarafından kabul edilen bildirilerin listesi 5 Eylül 2026 tarihinde duyurulacaktır.",
            
            // Publication Section
            "pub-subtitle": "Akademik İndeks Fırsatı",
            "pub-title": "Yayın Olanakları & SCI Özel Sayısı",
            "pub-tag": "Bilimsel Saygınlık",
            "pub-text": "Çalıştay kapsamında kabul edilen ve başarıyla sunulan seçili bildirilerin SCI (Science Citation Index) kapsamında taranan saygın bir uluslararası akademik dergide <strong>özel sayı (Special Issue) olarak yayımlanması planlanmaktadır</strong>.",
            "pub-badge-1": "SCI / Web of Science",
            "pub-badge-2": "Hakem Değerlendirmeli",
            "pub-badge-3": "Yüksek Etki Faktörü",
            "journal-lbl": "ÖZEL SAYI PLANI",
            "journal-vol": "Cilt 48, Sayı 4 - 2026",
            "journal-title": "Anthropocene Wetland Risks & Solutions",
            "journal-sub": "Seçilmiş makaleler derlemesi hakem sürecine tabidir.",
            
            // Committee Section
            "committee-subtitle": "Organizasyon",
            "committee-title": "Düzenleme Kurulu Başkanı",
            "committee-dept": "Coğrafya Eğitimi Anabilim Dalı",
            "committee-fac": "Eğitim Fakültesi",
            "committee-uni": "Çanakkale Onsekiz Mart Üniversitesi",
            "committee-role": "Düzenleme Kurulu Başkanı",
            
            // Presentations Section
            "pres-subtitle": "Bilimsel Bildiriler",
            "pres-title": "Çalıştay Bildirileri",
            "pres-desc-short": "Çalıştay bilim kurulu tarafından onaylanan ve 22–24 Ekim tarihleri arasında sunulacak seçkin bilimsel bildiriler hakkında bilgi.",
            "pres-desc": "Çalıştay bilim kurulu tarafından onaylanan ve 22–24 Ekim tarihleri arasında sunulacak olan seçkin bilimsel bildiriler. Çağrı metnine ulaşmak için dökümanı indirebilirsiniz.",
            "pres-note": "Kabul edilen bildirilerin ayrıntılı listesi, değerlendirme süreci tamamlandıktan sonra bu sayfada ilan edilecektir.",
            "btn-download-pdf": "Çalıştay Çağrı Metnini İndir (PDF)",
            
            // Contact Section
            "contact-subtitle": "İletişim Portalı",
            "contact-title": "Kurumsal İletişim Bilgileri",
            "contact-address-title": "Çalıştay Merkezi Adresi",
            "contact-email-title": "E-posta Adresi",
            "contact-email-val": "Yakında duyurulacaktır.",
            "contact-form-title": "Hızlı İletişim Formu",
            "form-name-lbl": "Adınız ve Soyadınız",
            "form-email-lbl": "E-posta Adresiniz",
            "form-subject-lbl": "Konu",
            "form-message-lbl": "Mesajınız",
            "btn-send-message": "Mesajı Gönder",
            
            // Footer
            "footer-about-title": "SULAK ALANLAR 2026",
            "footer-about-desc": "Türkiye'de Antroposen Çağında Sulak Alanlarda Ekolojik Riskler Çalıştayı. Doç. Dr. Topçu Ahmet ERTEK Onuruna.",
            "footer-links-title": "Hızlı Bağlantılar",
            "footer-contact-title": "İletişim",
            "footer-copyright": "© 2026 <strong>Çanakkale Onsekiz Mart Üniversitesi</strong>. Tüm hakları saklıdır.",
            "footer-dev": "Tasarım & Entegrasyon: Antigravity AI",
            
            // Toast Notifications
            "toast-success-title": "Başarılı!",
            "toast-success-desc": "Mesajınız Düzenleme Kurulu Sekretaryasına iletildi. En kısa sürede dönüş yapılacaktır.",
            "toast-invalid-title": "Hata!",
            "toast-invalid-desc": "Lütfen formdaki tüm alanları eksiksiz ve geçerli doldurun."
        },
        en: {
            // Meta & SEO
            "meta-title": "Workshop on Ecological Risks in Wetlands in Türkiye in the Anthropocene",
            "meta-desc": "A multidisciplinary scientific workshop on ecological risks, climate change, human-induced pressures, nature-based solutions and digital monitoring technologies in wetland ecosystems.",
            
            // Header / Menu
            "menu-home": "Home",
            "menu-about": "About",
            "menu-topics": "Topics",
            "menu-map": "Wetlands Map",
            "menu-dates": "Important Dates",
            "menu-presentations": "Accepted Papers",
            "menu-committee": "Committee",
            "menu-publication": "Publication Opportunities",
            "menu-contact": "Contact",
            
            // Logo
            "logo-title": "WETLANDS 2026",
            "logo-sub": "Ecological Risks Workshop",
            
            // Hero
            "hero-badge": "Academic Scientific Workshop 2026",
            "hero-title": "Workshop on Ecological Risks",
            "hero-title-span": "in Wetlands in Türkiye in the Anthropocene",
            "hero-honoree": "In Honor of Assoc. Prof. Dr. Topçu Ahmet ERTEK",
            "hero-desc": "A multidisciplinary scientific meeting on ecological risks, climate change, human-induced pressures, nature-based solutions and digital monitoring technologies in wetland ecosystems.",
            "btn-explore-pres": "Explore Presentations",
            "btn-about": "About the Workshop",
            "btn-topics": "Explore Topics",
            
            // Hero Meta Info
            "meta-date-label": "Workshop Date",
            "meta-date-val": "22–24 October 2026",
            "meta-venue-label": "Venue",
            "meta-venue-val": "COMU, Çanakkale",
            "meta-capacity-label": "Paper Limit",
            "meta-capacity-val": "Max 20 Papers",
            
            // Countdown Widget
            "countdown-title": "Countdown to Workshop",
            "countdown-days": "Days",
            "countdown-hours": "Hours",
            "countdown-minutes": "Mins",
            "countdown-seconds": "Secs",
            "countdown-note": "Accepted paper limit: <strong>Maximum 20</strong>",
            
            // About Section
            "about-subtitle": "Scientific Perspective",
            "about-title": "About the Workshop",
            "about-text-1": "Wetlands are among the most sensitive and critical ecosystems on Earth due to their essential roles in biodiversity conservation, carbon storage, water cycle regulation and coastal protection. However, accelerating human activities, climate change and land-use transformations in the Anthropocene are exposing these ecosystems to multidimensional ecological risks.",
            "about-text-2": "This workshop aims to discuss the <strong>ecological risks, human-induced pressures</strong>, management challenges and sustainable solution approaches affecting wetlands in Türkiye from a multidisciplinary perspective.",
            
            // About Metrics
            "metric-topics-val": "20",
            "metric-topics-lbl": "Thematic Focus Areas",
            "metric-papers-val": "Max 20",
            "metric-papers-lbl": "Accepted Papers Limit",
            "metric-host-val": "COMU",
            "metric-host-lbl": "Host Institution",
            "metric-pub-val": "SCI",
            "metric-pub-lbl": "Special Issue Plan",
            
            // About Bullet Points
            "about-bullet-1": "Multidisciplinary approach",
            "about-bullet-2": "Nature-based solutions",
            "about-bullet-3": "Digital GIS integration",
            "about-bullet-4": "Strategic decision support",
            
            // Honoree Section
            "honoree-subtitle": "Respect & Dedication",
            "honoree-title": "In Honor of Assoc. Prof. Dr. Topçu Ahmet ERTEK",
            "honoree-bio": "This workshop is organized in honor of <strong>Assoc. Prof. Dr. Topçu Ahmet ERTEK</strong>, recognizing his scientific contributions to environmental degradation, geographical processes and environmental change in the Anthropocene. Dr. Ertek has guided generations of geoscientists through his lifelong research on physical geography, geomorphology and coastal ecosystems of Türkiye.",
            "honoree-role": "Physical Geography & Geomorphology Expert",
            "honoree-profile-btn": "Academic Profile",
            
            // Topics Section
            "topics-subtitle": "Scientific Scope",
            "topics-title": "Workshop Topics & Themes",
            "topics-desc": "The 20 main academic topic headings to be explored during the workshop.",
            "filter-all": "All Topics",
            "filter-physical": "Physical & Hydrology",
            "filter-ecology": "Ecology & Climate",
            "filter-policy": "Governance & Policy",
            "filter-technology": "GIS & AI",
            
            // Topics - Cards (1 to 20)
            "topic-1": "Physical, hydrological and ecological dynamics of wetland ecosystems",
            "topic-2": "Environmental changes in coastal lagoons, deltas, lakes and floodplains",
            "topic-3": "Sea–land interactions and morphological processes",
            "topic-4": "Land-use/land-cover changes and pressures on wetlands",
            "topic-5": "Impacts of urban expansion, tourism, industry and agricultural activities",
            "topic-6": "Hydromorphological interventions and changes in water regimes",
            "topic-7": "Water quality, pollution loads and eutrophication processes",
            "topic-8": "Sediment transport and wetland system balances",
            "topic-9": "Biodiversity loss, habitat fragmentation and ecosystem degradation",
            "topic-10": "Invasive species and ecological resilience challenges",
            "topic-11": "Climate change, drought and extreme event impacts",
            "topic-12": "Sea-level rise and coastal flood risks",
            "topic-13": "Ecological risk analysis and vulnerability assessments",
            "topic-14": "Wetland conservation policies and governance approaches",
            "topic-15": "Ecosystem-based management and sustainable planning",
            "topic-16": "Nature-based solutions and wetland restoration",
            "topic-17": "Ramsar sites and conservation-use balance",
            "topic-18": "GIS, remote sensing and spatial analysis applications",
            "topic-19": "Artificial intelligence, big data and digital twin technologies",
            "topic-20": "Decision support systems and sustainable management tools",
            
            // Why Participate Section
            "why-subtitle": "Why Participate?",
            "why-title": "Why Participate in the Workshop?",
            "why-desc": "This workshop is an elite platform designed to maximize academic productivity and shape the future of our wetland ecosystems.",
            "why-point-1-title": "Multidisciplinary Perspective",
            "why-point-1-desc": "To discuss wetland risks in Türkiye through a multidisciplinary lens and establish collaborations with geoscientists.",
            "why-point-2-title": "Anthropocene & Climate Change",
            "why-point-2-desc": "To evaluate current scientific theories, methods, and field observations regarding environment degradation and climate change.",
            "why-point-3-title": "Advanced Digital Integration",
            "why-point-3-desc": "To share practical applications of GIS, remote sensing, artificial intelligence, and digital twin technologies in wetlands.",
            "why-point-4-title": "Nature-Based Solutions",
            "why-point-4-desc": "To highlight sustainable restoration frameworks and nature-based solutions to scientific bodies and policymakers.",
            "why-point-5-title": "SCI Indexed Publication",
            "why-point-5-desc": "To contribute to the planned special issue process for selected high-quality papers in an SCI/SCI-E indexed journal.",
            
            "why-sci-badge": "Ecological Indicator",
            "why-sci-title": "Wetland Degradation Trend in Türkiye",
            "why-sci-label-1": "Lagoons",
            "why-sci-label-2": "Deltas",
            "why-sci-label-3": "Inland Lakes",
            "why-sci-label-4": "Protected Areas",
            
            // Wetlands Map
            "map-subtitle": "Geographic Scope",
            "map-title": "Wetlands Map of Türkiye",
            "map-desc": "Major lakes, deltas, lagoons and wetland conservation areas in Türkiye are marked on OpenStreetMap. Click a marker for details.",
            "map-legend-title": "Legend",
            "map-source": "Source:",
            "map-stat-total": "Total Wetlands",
            "map-stat-ramsar": "Ramsar Sites",
            "map-stat-national": "National Importance",
            "map-stat-local": "Local Importance",
            "map-legend-ramsar": "Ramsar Site",
            "map-legend-national": "National Importance",
            "map-legend-local": "Local Importance",
            "map-filter-title": "Filter",
            "map-filter-all": "All",
            "map-filter-ramsar": "Ramsar",
            "map-filter-national": "National",
            "map-filter-local": "Local",
            "map-search-placeholder": "Province or wetland name...",
            "map-count-label": "shown on map",
            "map-attribution": "Map data",
            "map-table-title": "Registered Wetlands List",
            "map-th-no": "No",
            "map-th-province": "Province",
            "map-th-name": "Wetland",
            "map-th-status": "Designation",
            "map-th-link": "Detail",
            "map-popup-region": "Province",
            "map-popup-status": "Designation",
            "map-popup-detail": "Ekotaban",
            "map-no-results": "No matching wetlands found.",
            
            // Key Info Section
            "info-subtitle": "Participation Terms",
            "info-title": "Key Information & Details",
            "info-box-1-title": "Event Date",
            "info-box-1-desc": "Workshop sessions, field trips and scientific panels.",
            "info-box-1-val": "22–24 October 2026",
            "info-box-2-title": "Venue",
            "info-box-2-desc": "Çanakkale Onsekiz Mart University, Anafartalar Campus.",
            "info-box-2-val": "Faculty of Education",
            "info-box-3-title": "Paper Limit",
            "info-box-3-desc": "To maintain high scientific quality and allow intensive discussion.",
            "info-box-3-val": "Maximum 20 Papers",
            "info-box-4-title": "Review Type",
            "info-box-4-desc": "Submissions will be reviewed based on scientific merit, originality and theme fit.",
            "info-box-4-val": "Double-Blind Peer Reviewed",
            
            // Timeline
            "timeline-main-title": "Workshop Milestone Timeline",
            "timeline-1-date": "05 September 2026",
            "timeline-1-title": "Announcement of Accepted Papers",
            "timeline-1-desc": "Papers accepted following the review by the scientific committee will be notified via email.",
            "timeline-2-date": "30 September 2026",
            "timeline-2-title": "Full Paper Submission Deadline",
            "timeline-2-desc": "Submission of full manuscripts to be printed in the proceedings book or reviewed for the special issue.",
            "timeline-3-date": "10 October 2026",
            "timeline-3-title": "Announcement of the Program",
            "timeline-3-desc": "Detailed release of sessions schedule, invited speaker keynotes, and field trip route.",
            "timeline-4-date": "22–24 October 2026",
            "timeline-4-title": "Workshop Commencement",
            "timeline-4-desc": "Opening ceremony, scientific sessions, panels and wetland monitoring workshops.",
            
            // Special Feature Box
            "special-box-title": "Regarding Announcement of Accepted Papers",
            "special-box-desc": "Abstract review is in progress. The list of papers accepted by the scientific committee will be announced on 5 September 2026.",
            
            // Publication Section
            "pub-subtitle": "Academic Index Opportunity",
            "pub-title": "Publication Opportunities & SCI Special Issue",
            "pub-tag": "Scientific Prestige",
            "pub-text": "Selected high-quality papers accepted and successfully presented at the workshop <strong>are planned to be published in a special issue</strong> of a reputable international academic journal indexed in SCI (Science Citation Index).",
            "pub-badge-1": "SCI / Web of Science",
            "pub-badge-2": "Peer-Reviewed",
            "pub-badge-3": "High Impact Factor",
            "journal-lbl": "SPECIAL ISSUE PLAN",
            "journal-vol": "Vol 48, Issue 4 - 2026",
            "journal-title": "Anthropocene Wetland Risks & Solutions",
            "journal-sub": "Compilation of selected papers is subject to standard peer review.",
            
            // Committee Section
            "committee-subtitle": "Organization",
            "committee-title": "Chair of the Organizing Committee",
            "committee-dept": "Department of Geography Education",
            "committee-fac": "Faculty of Education",
            "committee-uni": "Çanakkale Onsekiz Mart University",
            "committee-role": "Chair of the Organizing Committee",
            
            // Presentations Section
            "pres-subtitle": "Scientific Papers",
            "pres-title": "Workshop Papers",
            "pres-desc-short": "Information on outstanding scientific papers to be presented at the workshop between 22–24 October, following approval by the scientific committee.",
            "pres-desc": "Outstanding scientific papers approved by the scientific committee to be presented at the workshop between 22–24 October. You may download the call for papers document below.",
            "pres-note": "The detailed list of accepted papers will be published on this page once the review process is complete.",
            "btn-download-pdf": "Download Call for Papers (PDF)",
            
            // Contact Section
            "contact-subtitle": "Contact Portal",
            "contact-title": "Institutional Contact Information",
            "contact-address-title": "Workshop Center Address",
            "contact-email-title": "E-mail Address",
            "contact-email-val": "To be announced soon.",
            "contact-form-title": "Quick Contact Form",
            "form-name-lbl": "Your Full Name",
            "form-email-lbl": "Your E-mail Address",
            "form-subject-lbl": "Subject",
            "form-message-lbl": "Your Message",
            "btn-send-message": "Send Message",
            
            // Footer
            "footer-about-title": "WETLANDS 2026",
            "footer-about-desc": "Workshop on Ecological Risks in Wetlands in Türkiye in the Anthropocene. In Honor of Assoc. Prof. Dr. Topçu Ahmet ERTEK.",
            "footer-links-title": "Quick Links",
            "footer-contact-title": "Contact",
            "footer-copyright": "© 2026 <strong>Çanakkale Onsekiz Mart University</strong>. All rights reserved.",
            "footer-dev": "Design & Integration: Antigravity AI",
            
            // Toast Notifications
            "toast-success-title": "Success!",
            "toast-success-desc": "Your message has been sent to the Organizing Committee. We will get back to you shortly.",
            "toast-invalid-title": "Error!",
            "toast-invalid-desc": "Please fill in all form fields with valid information."
        }
    };

    // ---------------------------------------------------------
    // 2. DİL DEĞİŞTİRME MEKANİZMASI (LANGUAGE SWITCH ENGINE)
    // ---------------------------------------------------------
    let currentLang = localStorage.getItem('workshop_lang') || 'tr';
    
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('workshop_lang', lang);
        
        // Update lang attribute on html tag
        document.documentElement.setAttribute('lang', lang);
        
        // Update active class on language switcher buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update title and meta tag values
        document.title = translations[lang]["meta-title"];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', translations[lang]["meta-desc"]);
        }
        
        // Translate all DOM elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.setAttribute('placeholder', translations[lang][key]);
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });
        
        updateWetlandMapPopups();
    }
    
    // Bind buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            showToast('info', lang === 'tr' ? 'Dil Değiştirildi' : 'Language Changed', lang === 'tr' ? 'Çalıştay web sitesi Türkçe olarak gösteriliyor.' : 'Workshop website is now displayed in English.');
        });
    });

    // ---------------------------------------------------------
    // 3. GERİ SAYIM SAYAÇ SİSTEMİ (COUNTDOWN TIMER SYSTEM)
    // ---------------------------------------------------------
    const targetDate = new Date('2026-10-22T09:00:00+03:00').getTime(); // Workshop Start Date: Oct 22, 2026
    
    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;
        
        const daysEl = document.getElementById('cd-days');
        const hoursEl = document.getElementById('cd-hours');
        const minsEl = document.getElementById('cd-mins');
        const secsEl = document.getElementById('cd-secs');
        
        if (!daysEl) return;
        
        if (difference <= 0) {
            daysEl.innerText = "00";
            hoursEl.innerText = "00";
            minsEl.innerText = "00";
            secsEl.innerText = "00";
            return;
        }
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        daysEl.innerText = days < 10 ? '0' + days : days;
        hoursEl.innerText = hours < 10 ? '0' + hours : hours;
        minsEl.innerText = minutes < 10 ? '0' + minutes : minutes;
        secsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // ---------------------------------------------------------
    // 6. KONULAR FİLTRELEME SİSTEMİ (TOPICS FILTERING SYSTEM)
    // ---------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const topicCards = document.querySelectorAll('.topic-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-filter');
            
            topicCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat === category) {
                    card.style.display = 'flex';
                    // Trigger tiny dynamic animation
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // ---------------------------------------------------------
    // 7. MOBİL MENÜ TETİKLEYİCİ (MOBILE NAV TOGGLE)
    // ---------------------------------------------------------
    const navBurger = document.querySelector('.nav-burger');
    const mobileOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    
    if (navBurger && mobileOverlay) {
        navBurger.addEventListener('click', () => {
            const isOpen = mobileOverlay.classList.contains('active');
            if (isOpen) {
                mobileOverlay.classList.remove('active');
                navBurger.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                mobileOverlay.classList.add('active');
                navBurger.innerHTML = '<i class="fas fa-times"></i>';
            }
        });
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileOverlay.classList.remove('active');
                navBurger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }

    // ---------------------------------------------------------
    // 8. SCROLL & STICKY NAVIGATION & INDICATOR
    // ---------------------------------------------------------
    const header = document.querySelector('header');
    const progressBar = document.querySelector('.scroll-progress-bar');
    
    window.addEventListener('scroll', () => {
        // Sticky Header class
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Scroll progress bar indicator calculation
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolledPercentage = (window.scrollY / windowHeight) * 100;
        if (progressBar) {
            progressBar.style.width = scrolledPercentage + '%';
        }
        
        // Highlight active nav item on scroll
        const sections = document.querySelectorAll('section, hero');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSecId = '';
        sections.forEach(sec => {
            const sectionTop = sec.offsetTop - 120;
            const sectionHeight = sec.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSecId = sec.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSecId}`) {
                link.classList.add('active');
            }
        });
    });

    // ---------------------------------------------------------
    // 9. SCROLL REVEAL ANIMASYONU (SCROLL REVEAL INTERSECTION OBSERVER)
    // ---------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal-element');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ---------------------------------------------------------
    // 10. TOAST NOTİFİKASYON SİSTEMİ (TOAST SYSTEM)
    // ---------------------------------------------------------
    const toastContainer = document.getElementById('toast-container');
    
    function showToast(type, title, desc) {
        if (!toastContainer) return;
        
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let iconClass = 'fa-info-circle';
        if (type === 'success') iconClass = 'fa-check-circle';
        if (type === 'warning') iconClass = 'fa-exclamation-triangle';
        
        toast.innerHTML = `
            <i class="fas ${iconClass} toast-icon"></i>
            <div class="toast-content">
                <h5>${title}</h5>
                <p>${desc}</p>
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        // Trigger show
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);
        
        // Remove after duration
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 5000);
    }

    // ---------------------------------------------------------
    // 11. HIZLI İLETİŞİM FORMU KONTROLÜ (CONTACT FORM SECRETARY LOGIC)
    // ---------------------------------------------------------
    const contactForm = document.getElementById('quick-contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('form-name').value.trim();
            const email = document.getElementById('form-email').value.trim();
            const subject = document.getElementById('form-subject').value.trim();
            const message = document.getElementById('form-message').value.trim();
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                const title = translations[currentLang]["toast-invalid-title"];
                const desc = translations[currentLang]["toast-invalid-desc"];
                showToast('warning', title, desc);
                return;
            }
            
            // Success Simulation
            const title = translations[currentLang]["toast-success-title"];
            const desc = translations[currentLang]["toast-success-desc"];
            showToast('success', title, desc);
            contactForm.reset();
        });
    }

    // ---------------------------------------------------------
    // TÜRKİYE SULAK ALANLAR HARİTASI (DKMP 138 + OpenStreetMap)
    // ---------------------------------------------------------
    const wetlandStatusColors = {
        ramsar: { fill: '#fbbf24', stroke: '#f59e0b' },
        national: { fill: '#38bdf8', stroke: '#0ea5e9' },
        local: { fill: '#94a3b8', stroke: '#64748b' }
    };

    let turkeyWetlands = [];
    let wetlandsMapInstance = null;
    let wetlandClusterGroup = null;
    let wetlandMarkerMap = new Map();
    let wetlandFilterStatus = 'all';
    let wetlandSearchQuery = '';

    function buildWetlandPopup(site, lang) {
        const data = site[lang];
        const t = translations[lang];
        const statusClass = `status-badge-${site.status}`;
        const ekotabanLink = site.ekotabanId
            ? `<p><a href="https://ekotaban.tarimorman.gov.tr/alan/${site.ekotabanId}" target="_blank" rel="noopener">${t['map-popup-detail']} →</a></p>`
            : '';
        return `
            <div class="wetland-popup">
                <h4>${data.name}</h4>
                <p><strong>${t['map-popup-region']}:</strong> ${data.region}</p>
                <p><strong>${t['map-popup-status']}:</strong> <span class="wetland-status-badge ${statusClass}">${data.typeLabel}</span></p>
                ${ekotabanLink}
            </div>
        `;
    }

    function wetlandMatchesFilter(site) {
        const q = wetlandSearchQuery.toLowerCase();
        const data = site[currentLang];
        const textMatch = !q || data.name.toLowerCase().includes(q) || data.region.toLowerCase().includes(q);
        const statusMatch = wetlandFilterStatus === 'all' || site.status === wetlandFilterStatus;
        return textMatch && statusMatch;
    }

    function refreshWetlandLayers() {
        if (!wetlandClusterGroup) return;
        wetlandClusterGroup.clearLayers();
        let visible = 0;
        turkeyWetlands.forEach(site => {
            if (!wetlandMatchesFilter(site)) return;
            const colors = wetlandStatusColors[site.status] || wetlandStatusColors.local;
            const marker = L.circleMarker([site.lat, site.lng], {
                radius: site.status === 'ramsar' ? 8 : 6,
                fillColor: colors.fill,
                color: colors.stroke,
                weight: 2,
                opacity: 1,
                fillOpacity: 0.9
            });
            marker.bindPopup(buildWetlandPopup(site, currentLang));
            marker._wetlandNo = site.no;
            wetlandClusterGroup.addLayer(marker);
            wetlandMarkerMap.set(site.no, marker);
            visible++;
        });
        const countEl = document.getElementById('wetland-count');
        if (countEl) countEl.textContent = visible;
        renderWetlandsTable();
    }

    function updateWetlandMapPopups() {
        wetlandMarkerMap.forEach((marker, no) => {
            const site = turkeyWetlands.find(w => w.no === no);
            if (site) marker.setPopupContent(buildWetlandPopup(site, currentLang));
        });
        renderWetlandsTable();
    }

    function renderWetlandsTable() {
        const tbody = document.getElementById('wetlands-table-body');
        if (!tbody) return;
        const t = translations[currentLang];
        const filtered = turkeyWetlands.filter(wetlandMatchesFilter);
        if (filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" class="wetlands-table-empty">${t['map-no-results']}</td></tr>`;
            return;
        }
        tbody.innerHTML = filtered.map(site => {
            const data = site[currentLang];
            const link = site.ekotabanId
                ? `<a href="https://ekotaban.tarimorman.gov.tr/alan/${site.ekotabanId}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i></a>`
                : '—';
            return `<tr data-no="${site.no}" class="wetland-row status-row-${site.status}">
                <td>${site.no}</td>
                <td>${data.region}</td>
                <td>${data.name}</td>
                <td><span class="wetland-status-badge status-badge-${site.status}">${data.statusShort}</span></td>
                <td>${link}</td>
            </tr>`;
        }).join('');
        tbody.querySelectorAll('.wetland-row').forEach(row => {
            row.addEventListener('click', () => {
                const no = parseInt(row.getAttribute('data-no'), 10);
                const marker = wetlandMarkerMap.get(no);
                const site = turkeyWetlands.find(w => w.no === no);
                if (marker && wetlandsMapInstance && site) {
                    wetlandsMapInstance.setView([site.lat, site.lng], 10, { animate: true });
                    marker.openPopup();
                }
            });
        });
    }

    async function initTurkeyWetlandsMap() {
        const mapEl = document.getElementById('turkey-wetlands-map');
        if (!mapEl || typeof L === 'undefined') return;

        try {
            const res = await fetch('./wetlands-dkmp.json');
            const data = await res.json();
            turkeyWetlands = data.wetlands || [];
            ['stat-total', 'stat-ramsar', 'stat-national', 'stat-local'].forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                const key = id.replace('stat-', '');
                if (key === 'total') el.textContent = data.total || turkeyWetlands.length;
                else el.textContent = data[key] ?? '';
            });
        } catch (e) {
            console.warn('wetlands-dkmp.json yüklenemedi', e);
            return;
        }

        wetlandsMapInstance = L.map(mapEl, { scrollWheelZoom: false }).setView([39.0, 35.0], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(wetlandsMapInstance);

        wetlandClusterGroup = typeof L.markerClusterGroup === 'function'
            ? L.markerClusterGroup({ maxClusterRadius: 45, spiderfyOnMaxZoom: true, showCoverageOnHover: false })
            : L.layerGroup();
        wetlandsMapInstance.addLayer(wetlandClusterGroup);

        refreshWetlandLayers();
        const bounds = L.latLngBounds(turkeyWetlands.map(s => [s.lat, s.lng]));
        wetlandsMapInstance.fitBounds(bounds.pad(0.06));

        mapEl.addEventListener('mouseenter', () => wetlandsMapInstance.scrollWheelZoom.enable());
        mapEl.addEventListener('mouseleave', () => wetlandsMapInstance.scrollWheelZoom.disable());

        document.querySelectorAll('.map-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.map-filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                wetlandFilterStatus = btn.getAttribute('data-filter');
                refreshWetlandLayers();
            });
        });

        const searchInput = document.getElementById('wetland-search');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                wetlandSearchQuery = searchInput.value.trim();
                refreshWetlandLayers();
            });
        }

        const mapSection = document.getElementById('wetlands-map');
        if (mapSection && 'IntersectionObserver' in window) {
            new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) setTimeout(() => wetlandsMapInstance.invalidateSize(), 200);
                });
            }, { threshold: 0.15 }).observe(mapSection);
        }
        window.addEventListener('resize', () => wetlandsMapInstance?.invalidateSize());
    }

    initTurkeyWetlandsMap();

    // Initialize Language Setting
    setLanguage(currentLang);
});
