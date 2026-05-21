const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '../calistay/sulakalanlar.html');
const outPath = path.join(__dirname, '../wetlands-dkmp.json');

const provinceCoords = {
  'Adana': [37.0, 35.3], 'Adıyaman': [37.76, 38.28], 'Afyonkarahisar': [38.76, 30.54],
  'Ağrı': [39.72, 43.05], 'Aksaray': [38.37, 34.03], 'Ankara': [39.93, 32.85],
  'Antalya': [36.89, 30.70], 'Ardahan': [41.11, 42.70], 'Aydın': [37.85, 27.85],
  'Balıkesir': [39.65, 27.88], 'Bayburt': [40.26, 40.23], 'Bilecik': [40.14, 29.98],
  'Bingöl': [38.88, 40.50], 'Bitlis': [38.40, 42.11], 'Bolu': [40.73, 31.61],
  'Burdur': [37.72, 30.29], 'Bursa': [40.18, 29.06], 'Çanakkale': [40.15, 26.41],
  'Çankırı': [40.60, 33.62], 'Çorum': [40.55, 34.95], 'Denizli': [37.77, 29.09],
  'Düzce': [40.84, 31.16], 'Edirne': [41.68, 26.56], 'Elazığ': [38.68, 39.22],
  'Erzincan': [39.75, 39.49], 'Erzurum': [39.90, 41.27], 'Eskişehir': [39.78, 30.52],
  'Gaziantep': [37.07, 37.38], 'Giresun': [40.92, 38.39], 'Hakkâri': [37.57, 43.74],
  'Hatay': [36.40, 36.35], 'Iğdır': [39.92, 44.04], 'Isparta': [37.76, 30.56],
  'İstanbul': [41.01, 28.98], 'İzmir': [38.42, 27.14], 'Kars': [40.60, 43.10],
  'Kastamonu': [41.39, 33.78], 'Kayseri': [38.73, 35.48], 'Kırıkkale': [39.85, 33.51],
  'Kırklareli': [41.73, 27.23], 'Kırşehir': [39.15, 34.16], 'Kocaeli': [40.77, 29.96],
  'Konya': [37.87, 32.49], 'Manisa': [38.62, 27.43], 'Mersin': [36.80, 34.64],
  'Muğla': [37.22, 28.36], 'Muş': [38.73, 41.49], 'Nevşehir': [38.62, 34.72],
  'Niğde': [37.97, 34.68], 'Ordu': [40.98, 37.88], 'Osmaniye': [37.07, 36.25],
  'Rize': [41.02, 40.52], 'Sakarya': [40.69, 30.40], 'Samsun': [41.29, 36.33],
  'Sinop': [42.03, 35.15], 'Sivas': [39.75, 37.02], 'Şanlıurfa': [37.16, 38.79],
  'Şırnak': [37.52, 42.46], 'Tekirdağ': [40.98, 27.51], 'Tokat': [40.32, 36.55],
  'Trabzon': [41.00, 39.72], 'Tunceli': [39.11, 39.55], 'Van': [38.49, 43.38],
  'Yalova': [40.65, 29.27], 'Yozgat': [39.82, 34.81]
};

const knownCoords = {
  'Gediz Deltası': [38.487, 26.933], 'Büyük Menderes Deltası': [37.516, 27.256],
  'Göksu Deltası': [36.447, 34.022], 'Kızılırmak Deltası': [41.722, 35.875],
  'Yumurtalık Lagünü': [36.757, 35.792], 'Akyatan Gölü': [36.633, 35.377],
  'Manyas (Kuş) Gölü': [40.204, 27.978], 'Uluabat Gölü': [40.180, 28.758],
  'Burdur Gölü': [37.720, 30.283], 'Beyşehir Gölü': [37.783, 31.517],
  'Eğirdir Gölü': [37.883, 30.850], 'Seyfe Gölü': [39.020, 34.180],
  'Kızören Obruğu': [38.297, 33.492], 'Meke Maarı': [37.583, 33.617],
  'Acıgöl': [38.550, 34.517], 'Sultansazlığı': [38.252, 35.198],
  'Kuyucuk Gölü': [40.717, 42.017], 'Nemrut Gölü': [38.654, 42.237],
  'Çıldır Gölü': [41.033, 43.283], 'Hazar Gölü': [38.483, 39.417],
  'Gökçeada Lagünü': [40.20, 26.45], 'Meriç Deltası': [40.98, 26.52],
  'Yeşilırmak Deltası': [41.25, 36.35], 'İznik Gölü': [40.433, 29.517],
  'Efteni Gölü': [40.783, 31.133], 'Acarlar Longoz Ormanı': [40.783, 30.483],
  'Gönen Deltası': [40.183, 27.650], 'Kocaçay Deltası': [40.383, 28.850],
  'Akşehir ve Eber Gölleri': [38.350, 31.200], 'Tuzla Palas Gölü': [39.55, 41.62],
  'Tortum Gölü': [40.55, 41.55], 'Aktaş Gölü': [41.15, 43.05],
  'Erçek Gölü': [38.65, 43.55], 'Bendimahi Deltası': [38.75, 43.35],
  'Karakuyu Sazlıkları': [38.55, 30.55], 'Tol Gölü': [39.55, 32.75],
  'Avlan Gölü': [36.95, 31.05], 'Beymelek Lagünü': [36.25, 30.35],
  'Hersek Lagünü': [40.65, 29.35], 'Kumkale Deltası': [40.05, 26.15],
  'Kavak Deltası': [40.35, 26.55], 'Çardak Lagünü': [40.12, 26.28],
  'Suvla Tuz Lagünü': [40.18, 26.22], 'Nallıhan Kuş Cenneti': [40.18, 31.62],
  'Karakuyu Sazlıkları': [38.55, 30.55], 'Karamık Sazlıkları': [38.72, 30.58],
  'Doğubayazıt Sazlıkları': [39.55, 44.08], 'Sarısu Ovası Sulak Alanları': [39.48, 43.38],
  'Balıklı Göl': [38.35, 33.85], 'Demre Çayağzı Kuşcenneti': [36.25, 30.28],
  'Eğri Göl': [36.85, 30.55], 'Putka Gölü': [41.05, 43.15],
  'Aşağı Dip Gölü': [37.55, 27.95], 'Azap Gölü': [37.62, 27.88],
  'Akçay Sazlıkları': [39.55, 27.25], 'Karakoç Deresi Sulak Alanı': [39.72, 27.88],
  'Şeytansofrası Sulak Alanı': [39.58, 27.92], 'Ahlat Sazlığı': [38.75, 42.68],
  'Arin (Sodalı) Gölü': [38.42, 42.25], 'Heybeli (Norşin) Gölü': [38.38, 42.18],
  'Nazik Gölü': [38.52, 42.32], 'İron Sazlığı': [38.95, 41.55],
  'Aladağ Göleti': [40.58, 31.55], 'Yeniçağa Gölü': [40.75, 32.05],
  'Çorak Gölü': [37.55, 30.15], 'Gölhisar Gölü': [37.15, 29.52],
  'Yarışlı Gölü': [37.35, 29.85], 'Yazır Gölü': [37.45, 30.05],
  'Bakkal Gölü': [40.55, 33.45], 'Işıklı Gökgöl': [37.75, 29.05],
  'Güney Keban Barajı': [38.55, 39.42], 'Ekşisu Sazlıkları': [39.72, 39.45],
  'Erzurum Bataklıkları': [39.92, 41.18], 'Balıkdamı Gölü': [39.45, 30.52],
  'Karkamış Taşkın Ovası': [36.85, 38.02], 'Karagöl': [40.92, 38.42],
  'Yüksekova(Nehil) Sazlıkları': [37.55, 44.28], 'Gölbaşı Gölü': [36.35, 36.28],
  'Haydarlar Gölü': [36.55, 36.35], 'Mileyha Sulak Alanı': [36.15, 36.08],
  'Aras Karasu Taşkınları': [39.88, 44.72], 'Gölcük Gölü': [38.05, 27.15],
  'Aygır Gölü': [40.55, 43.05], 'Çalı Gölü': [40.62, 43.12],
  'Asar Göleti': [41.35, 33.55], 'Tuzaklı Göleti': [41.42, 33.62],
  'Hürmetçi Sazlığı': [38.65, 35.55], 'Çeşnigir Sulak Alanı': [39.72, 33.62],
  'İzmit Körfezi Sulak Alanı': [40.75, 29.75], 'Çavuşçu Gölü': [37.55, 32.35],
  'Dipsiz Göl': [37.72, 32.42], 'Ereğli Sazlıkları': [37.52, 34.05],
  'Kozanlı Gökgöl': [37.65, 32.55], 'Samsam Gölü': [37.82, 32.65],
  'Gölmarmara Gölü': [38.72, 27.95], 'Dipsiz Lagünü': [36.55, 34.35],
  'Girdev Gölü': [36.85, 29.55], 'Gölköy Gölü': [37.05, 28.35],
  'Metruk Tuzlası': [36.75, 28.95], 'Akdoğan Gölü': [39.05, 41.85],
  'Batmış Gölü': [38.95, 41.72], 'Bulanık Ovası Sulak Alanları': [39.05, 41.65],
  'Haçlı Gölü': [38.88, 41.78], 'Karagöl Çinili Göl': [37.85, 34.55],
  'Çiğ Gölü': [40.95, 37.88], 'Kastabala Sulak Alanı': [37.25, 36.45],
  'Büyük Akgöl': [40.72, 30.55], 'Keremali Gölü': [40.68, 30.48],
  'Küçük Akgöl': [40.70, 30.52], 'Taşkısığı Gölü': [40.65, 30.58],
  'Ladik Gölü': [40.88, 35.92], 'Aksaz Gölü': [41.95, 34.95],
  'Kaz Gölü': [39.35, 37.55], 'Tödürge Gölü': [39.82, 37.15],
  'Ulaş Gölü': [39.45, 37.25], 'Cizre Dicle Nehri Sulak Alanı': [37.35, 42.18],
  'Melen Gölü': [40.95, 27.35], 'Karaca Gölü': [40.25, 36.55],
  'Sulu Adalı Gölü': [40.18, 36.48], 'Buyer Baba Gölü': [39.15, 39.42],
  'Akgöl': [38.52, 43.42], 'Çelebibağ Sazlıkları': [38.48, 43.35],
  'Çiçekli Gölü': [38.55, 43.28], 'Dönemeç Deltası': [38.62, 43.22],
  'Edremit Sazlıkları': [38.72, 43.18], 'Gövelek Gölü': [38.58, 43.32],
  'Karasu Deltası': [38.45, 43.38], 'Turna (Keşiş) Gölü': [38.52, 43.25],
  'Van Sazlıkları': [38.55, 43.15], 'Gelingüllü Göleti': [39.55, 35.25],
  'Üçağaç Göleti': [39.48, 35.18], 'Akçaağıl': [41.02, 40.52],
  'Buzlu': [40.98, 39.72], 'Gölbaşı Gölleri': [37.58, 38.28],
  'Gölünyazı Gölü': [40.35, 34.75], 'Karagöl': [40.84, 31.16],
  'Torkul Gölü': [40.78, 31.22], 'Beşgöller': [40.12, 30.02],
  'Gölbaşı Gölü': [38.95, 40.52], 'Oruçbeyli Göleti': [40.25, 40.28],
  'Uğurca Göl': [39.92, 44.12], 'Rize': [41.02, 40.52]
};

function decodeHtml(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n))
    .replace(/&nbsp;/g, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function inferType(name) {
  const n = name.toLowerCase();
  if (n.includes('delta') || n.includes('ovası') || n.includes('taşkın') || n.includes('nehri')) return 'delta';
  if (n.includes('lagün') || n.includes('körfez') || n.includes('tuzlası')) return 'lagoon';
  if (n.includes('sazlık') || n.includes('longoz') || n.includes('bataklık')) return 'marsh';
  return 'lake';
}

function normalizeStatus(s) {
  if (/ramsar/i.test(s)) return 'ramsar';
  if (/ulusal/i.test(s)) return 'national';
  return 'local';
}

function parseHtml() {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const tableMatch = html.match(/ExternalClass177AF92E[\s\S]*?<table[\s\S]*?<\/table>/i);
  if (!tableMatch) throw new Error('Table not found in sulakalanlar.html');
  const table = tableMatch[0];
  const rows = [...table.matchAll(/<tr[^>]*class="ms-rteTable[^"]*"[^>]*>([\s\S]*?)<\/tr>/gi)];
  const wetlands = [];
  const linkIds = [...table.matchAll(/ekotaban\.tarimorman\.gov\.tr\/alan\/(\d+)/g)].map(m => m[1]);

  for (const row of rows) {
    const cells = [...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(m => decodeHtml(m[1]));
    if (cells.length < 5) continue;
    const no = parseInt(cells[0].replace(/[\u200B-\u200D\uFEFF]/g, ''), 10);
    if (isNaN(no) || no < 1 || no > 138) continue;
    if (cells[0] === 'No' || cells[2] === 'Sulak Alan Adı') continue;
    wetlands.push({
      no,
      il: cells[1],
      name: cells[2],
      status: cells[4]
    });
  }

  wetlands.forEach((w, i) => { w.ekotabanId = linkIds[i] || null; });
  return wetlands;
}

function getCoords(il, name, no) {
  if (knownCoords[name]) return knownCoords[name];
  const primaryIl = il.split(';')[0].trim().replace(/​/g, '');
  const base = provinceCoords[primaryIl];
  const jitter = ((no % 9) - 4) * 0.06;
  if (!base) return [39.0 + jitter, 35.0 + jitter * 1.2];
  return [base[0] + jitter * 0.4, base[1] + jitter * 0.5];
}

const raw = parseHtml();
console.log('Parsed from HTML:', raw.length);

const output = raw.map(w => {
  const [lat, lng] = getCoords(w.il, w.name, w.no);
  const statusKey = normalizeStatus(w.status);
  return {
    no: w.no,
    lat,
    lng,
    type: inferType(w.name),
    ramsar: statusKey === 'ramsar',
    status: statusKey,
    ekotabanId: w.ekotabanId,
    tr: {
      name: w.name,
      region: w.il,
      typeLabel: w.status,
      statusShort: statusKey === 'ramsar' ? 'Ramsar' : statusKey === 'national' ? 'Ulusal' : 'Mahalli'
    },
    en: {
      name: w.name,
      region: w.il,
      typeLabel: w.status
        .replace(/Ulusal Öneme Haiz Sulak Alan/gi, 'National Important Wetland')
        .replace(/Mahalli Öneme Haiz Sulak Alan/gi, 'Local Important Wetland')
        .replace(/Ramsar Alanı/gi, 'Ramsar Site'),
      statusShort: statusKey === 'ramsar' ? 'Ramsar' : statusKey === 'national' ? 'National' : 'Local'
    }
  };
});

const stats = {
  ramsar: output.filter(w => w.status === 'ramsar').length,
  national: output.filter(w => w.status === 'national').length,
  local: output.filter(w => w.status === 'local').length
};

fs.writeFileSync(outPath, JSON.stringify({
  source: 'https://www.tarimorman.gov.tr/DKMP/Menu/31/Sulak-Alanlar',
  total: 138,
  ...stats,
  wetlands: output
}, null, 2));

console.log('Stats:', stats, 'Written:', outPath);
