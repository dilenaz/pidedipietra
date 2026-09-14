const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=40.8294706%2C29.378899";
const instagramUrl = "https://www.instagram.com/pidedipietra/";
const whatsappUrl = "https://wa.me/905473000505?text=Merhaba%2C%20sipari%C5%9F%20vermek%20istiyorum.";

const classicPides = [
  "Kıymalı Pide", "Kıymalı Kaşarlı Pide", "Kuşbaşılı Pide", "Kuşbaşılı Kaşarlı Pide",
  "Peynirli Pide", "Patatesli Kaşarlı Pide", "Sucuklu Kaşarlı Pide", "Mantarlı Kaşarlı Pide",
  "Tavuklu Kaşarlı Pide", "Bafra Kıymalı Pide (Kapalı)",
];

const specialPides = [
  "Trabzon Peynirli Pide", "Görele Kavurmalı Pide", "Kavurmalı Kapalı Pide",
  "Pastırmalı Peynirli Pide", "Amasya Pide", "Yoğurtlu Pide",
  "Çikolatalı Pide (Tatlı)", "Bayburt Pide", "Karışık Special Pide",
];

const reviews = [
  { quote: "Tek kelime ile mükemmel. Bundan sonra pide deyince aklımıza gelen ilk yer olacak.", name: "Zeki A.", detail: "Google yorumu" },
  { quote: "Kaliteli, hijyenik, mükemmel lezzet ve güler yüzlü hizmet. Ailecek gönül rahatlığıyla gelebilirsiniz.", name: "Adem T.", detail: "Yerel Rehber" },
  { quote: "Aile için çok uygun bir mekân. Lezzetleri çok iyiydi; biz ailecek çok sevdik.", name: "Onur D.", detail: "Google yorumu" },
];

function Logo({ className = "" }: { className?: string }) {
  return <img className={`logo-image ${className}`} src="/logo-original.jpeg" alt="Pide Di Pietra — Taş Fırın Lezzet, Murat Usta" />;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Pide Di Pietra ana sayfa"><Logo /></a>
        <nav aria-label="Ana menü">
          <a href="#menu">Menü</a><a href="#usta">Murat Usta</a><a href="#yorumlar">Yorumlar</a><a href="#iletisim">İletişim</a>
        </nav>
        <a className="header-cta" href="tel:+905473000505"><span>☎</span> 0547 300 05 05</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-kicker"><span>Çayırova</span><i></i><span>Taş Fırın Lezzeti</span></div>
          <p className="script-line">Murat Usta’nın Lezzeti</p>
          <h1>Taş fırından<br /><em>sofranıza.</em></h1>
          <p className="hero-lead">Geleneksel taş fırında, usta ellerle hazırlanan çıtır pideler ve incecik lahmacunlar. Her lokmada gerçek ustalık.</p>
          <div className="hero-actions">
            <a className="button primary" href={whatsappUrl} target="_blank" rel="noreferrer">Sipariş ver <span>→</span></a>
            <a className="button ghost" href="#menu">Menüyü incele</a>
          </div>
          <div className="trust-row">
            <div><b>5.0</b><span>★★★★★</span><small>35 Google yorumu</small></div>
            <div><b>00:00</b><span>’a kadar açık</span><small>Her gün sıcak servis</small></div>
          </div>
        </div>
        <div className="hero-photo">
          <img src="/yumurtali-pideler.jpeg" alt="Murat Usta'nın yumurtalı özel pideleri" />
          <div className="hero-photo-label"><span>USTA İŞİ</span><b>Özel Pideler</b></div>
        </div>
        <div className="hero-seal"><span>Taş Fırın</span><b>GERÇEK<br />LEZZET</b></div>
      </section>

      <section className="feature-ribbon" aria-label="Ürün özellikleri">
        <span>TAŞ FIRIN LEZZETİ</span><b>✦</b><span>DOĞAL VE TAZE MALZEMELER</span><b>✦</b><span>USTA ELLERDE HAZIRLANIR</span><b>✦</b><span>GELENEKSEL TAT</span>
      </section>

      <section className="intro" id="usta">
        <div className="intro-poster"><img src="/brand-poster.jpeg" alt="Pide Di Pietra marka afişi" /></div>
        <div className="intro-copy">
          <p className="section-kicker">Murat Usta’nın mutfağı</p>
          <h2>Her lokmada<br /><em>usta işi lezzet.</em></h2>
          <p>Pide Di Pietra’da hamur günlük açılır, iç harç özenle hazırlanır ve her pide taş fırının yüksek ısısında tam kıvamında pişirilir.</p>
          <div className="feature-list">
            <article><span>01</span><div><b>Taş fırın</b><p>Çıtır kenar, yumuşak iç ve kendine özgü fırın kokusu.</p></div></article>
            <article><span>02</span><div><b>Taze malzeme</b><p>Günlük hazırlanan harçlar ve cömert porsiyonlar.</p></div></article>
            <article><span>03</span><div><b>Aile sıcaklığı</b><p>Ferah, temiz ve samimi bir sofrada güler yüzlü servis.</p></div></article>
          </div>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading centered">
          <p className="section-kicker">Pide &amp; lahmacun lezzetleri</p>
          <h2>Taş fırın<br /><em>menüsü.</em></h2>
          <p>Tüm pide çeşitlerimiz salata ve karışık turşu ile servis edilir.</p>
        </div>
        <div className="menu-board">
          <div className="menu-column">
            <div className="menu-title"><span>◇</span><h3>Pide Çeşitleri</h3><b>250₺</b></div>
            {classicPides.map((name) => <div className="menu-row" key={name}><span>{name}</span><i></i><b>250₺</b></div>)}
          </div>
          <div className="menu-column">
            <div className="menu-title dark"><span>♨</span><h3>Lahmacun</h3></div>
            <div className="menu-row"><span>Lahmacun</span><i></i><b>85₺</b></div>
            <div className="menu-row"><span>Kaşarlı Lahmacun</span><i></i><b>100₺</b></div>
            <div className="menu-title special"><span>★</span><h3>Özel Pideler</h3><b>350₺</b></div>
            {specialPides.map((name) => <div className="menu-row" key={name}><span>{name}</span><i></i><b>350₺</b></div>)}
          </div>
        </div>
        <div className="menu-cta-row">
          <a className="button ghost" href="/menu-poster.jpeg" target="_blank">Afiş menüyü görüntüle</a>
          <p>Fiyatlar paylaşılan güncel menü afişinden alınmıştır.</p>
        </div>
      </section>

      <section className="table-section">
        <div className="table-copy">
          <p className="section-kicker">Paylaşmak güzeldir</p>
          <h2>Sofranın<br /><em>en sıcak hâli.</em></h2>
          <p>Karışık pideler, sıcak sunum ve yanında salata, limon, turşu… Kalabalık sofralar için tam Murat Usta usulü.</p>
          <a className="button primary" href="tel:+905473000505">Masanı ayırt <span>→</span></a>
        </div>
        <div className="table-photo"><img src="/karisik-pide-sofrasi.jpeg" alt="Karışık pide sofrası ve alevli sunum" /><span>SICAK SUNUM · BOL ÇEŞİT</span></div>
      </section>

      <section className="reviews-section" id="yorumlar">
        <div className="review-title"><p className="section-kicker">Misafirlerimiz anlatıyor</p><h2>5.0 <span>★★★★★</span></h2><p>Google’da 35 değerlendirme</p></div>
        <div className="review-grid">
          {reviews.map((review) => <blockquote key={review.name}><span className="quote-mark">“</span><p>{review.quote}</p><footer><b>{review.name}</b><small>{review.detail}</small><span>★★★★★</span></footer></blockquote>)}
        </div>
        <a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Pide%20Di%20Pietra%20%C3%87ay%C4%B1rova" target="_blank" rel="noreferrer">Tüm Google yorumlarını gör →</a>
      </section>

      <section className="visit-section" id="iletisim">
        <div className="visit-copy">
          <p className="section-kicker">Fırının başında sizi bekliyoruz</p>
          <h2>Geleneksel tat.<br /><em>Gerçek lezzet.</em></h2>
          <div className="contact-list">
            <div><span>Adres</span><p>Özgürlük Mah., Uğur Mumcu Cd.<br />No: 5/A, Çayırova / Kocaeli</p></div>
            <div><span>Telefon</span><a href="tel:+905473000505">0547 300 05 05</a></div>
            <div><span>Saatler</span><p>Her gün · 00:00’a kadar</p></div>
          </div>
          <div className="hero-actions"><a className="button primary" href={mapsUrl} target="_blank" rel="noreferrer">Yol tarifi al <span>→</span></a><a className="button ghost light" href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></div>
        </div>
        <a className="location-card" href={mapsUrl} target="_blank" rel="noreferrer"><img src="/dukkan.jpg" alt="Pide Di Pietra Çayırova mağaza cephesi" /><div className="map-pin"><Logo /><b>ÇAYIROVA · KOCAELİ</b><small>Konumu aç →</small></div></a>
      </section>

      <footer className="site-footer">
        <a className="footer-logo" href="#top"><Logo /></a>
        <div className="footer-links"><a href="#menu">Menü</a><a href="#yorumlar">Yorumlar</a><a href={instagramUrl} target="_blank" rel="noreferrer">Instagram ↗</a></div>
        <p>© 2026 Pide Di Pietra<br />Murat Usta’nın Lezzeti</p>
        <div className="footer-credit">
          <a href="https://dilenazozdemir.com.tr" target="_blank" rel="noreferrer">
            Designed &amp; Developed by Dilenaz Özdemir
          </a>
        </div>
      </footer>
      <div className="mobile-actions"><a href="tel:+905473000505">Ara</a><a href={whatsappUrl} target="_blank" rel="noreferrer">Sipariş ver</a></div>
    </main>
  );
}
