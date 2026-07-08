import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

// Data artikel yang sama dengan di ArtikelList
const articles = [
  { id: 1, title: "5 Tips Memilih Material Dapur yang Tahan Lama dan Mudah Dirawat", slug: "5-tips-memilih-material-dapur-yang-tahan-lama-dan-mudah-dirawat", category: "Tips Material", date: "10 Jan 2024", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80", readTime: "5 menit" },
  { id: 2, title: "Tren Desain Interior 2024: Minimalisme Hangat yang Bersahaja", slug: "tren-desain-interior-2024-minimalisme-hangat-yang-bersahaja", category: "Tren Interior", date: "5 Jan 2024", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80", readTime: "7 menit" },
  { id: 3, title: "Cara Merawat Furnitur Kayu Solid agar Awet Bertahun-tahun", slug: "cara-merawat-furnitur-kayu-solid-agar-awet-bertahun-tahun", category: "Tips Perawatan", date: "28 Des 2023", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80", readTime: "4 menit" },
  { id: 4, title: "Panduan Lengkap Walk In Closet: Dari Perencanaan hingga Instalasi", slug: "panduan-lengkap-walk-in-closet-dari-perencanaan-hingga-instalasi", category: "Inspirasi Interior", date: "20 Des 2023", image: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=1200&q=80", readTime: "9 menit" },
  { id: 5, title: "HPL vs Veneer: Mana yang Lebih Baik untuk Furnitur Anda?", slug: "hpl-vs-veneer-mana-yang-lebih-baik-untuk-furnitur-anda", category: "Tips Material", date: "15 Des 2023", image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80", readTime: "6 menit" },
  { id: 6, title: "Wasilah Furniture Raih Penghargaan Best Workshop 2023", slug: "wasilah-furniture-raih-penghargaan-best-workshop-2023", category: "Berita Perusahaan", date: "10 Des 2023", image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1200&q=80", readTime: "3 menit" },
];

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function DetailArtikel({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="min-h-screen" style={{ backgroundColor: "var(--color-linen)" }}>
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full pt-20">
        <Image src={article.image} alt={article.title} fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(46,31,20,0.9) 100%)" }} />
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Link href="/artikel" className="inline-flex items-center gap-2 mb-6 text-sm font-medium transition-opacity hover:opacity-100 opacity-70" style={{ color: "var(--color-linen)", fontFamily: "var(--font-inter)" }}>
              <ArrowLeft size={16} /> Kembali ke Artikel
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-4" style={{ fontFamily: "var(--font-mono)" }}>
              <span className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-sm" style={{ backgroundColor: "var(--color-gold)", color: "var(--color-wood-dark)" }}>
                <Tag size={12} /> {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-linen)" }}>
                <Calendar size={12} /> {article.date}
              </span>
              <span className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-linen)" }}>
                <Clock size={12} /> {article.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)", color: "var(--color-linen)" }}>
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6" style={{ color: "var(--color-wood)", fontFamily: "var(--font-inter)", fontSize: "1.05rem", lineHeight: "1.8" }}>
            
            <p className="font-semibold text-lg" style={{ color: "var(--color-wood-dark)" }}>
              Memilih furnitur untuk rumah impian adalah langkah besar yang menentukan kenyamanan dan estetika hunian Anda. Dalam artikel komprehensif ini, kita akan membahas berbagai aspek penting yang perlu Anda perhatikan agar tidak salah pilih, dari mulai proses desain, pemilihan material, hingga metode instalasi. Panduan ini dibuat khusus untuk membantu Anda memahami kompleksitas dunia furnitur custom secara mendalam.
            </p>
            
            <p>
              Desain interior dan pemilihan furnitur berjalan beriringan. Setiap elemen di dalam ruangan memiliki peran penting untuk menciptakan harmoni visual. Banyak orang seringkali terburu-buru dalam membeli furnitur karena tergiur dengan tren sesaat, tanpa mempertimbangkan aspek fungsi dan daya tahannya. Padahal, furnitur yang baik adalah investasi jangka panjang yang akan menemani kehidupan Anda sehari-hari. Ruangan Anda adalah refleksi dari diri Anda sendiri, dan furnitur merupakan aktor utamanya. Oleh karena itu, memastikan setiap potongan kayu dan sekrup ditempatkan dengan penuh perhitungan adalah mutlak adanya. Seiring berjalannya waktu, gaya hidup kita bisa berubah, namun furnitur berkualitas tinggi akan selalu mampu beradaptasi dan tetap terlihat elegan. Pembuatan furnitur bukan sekadar merakit material, melainkan sebuah seni yang memadukan keahlian teknik tinggi dengan estetika visual.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>1. Mengenal Material Lebih Dalam</h2>
            <p>
              Material adalah fondasi utama dari kualitas sebuah furnitur. Kayu solid, seperti jati, mahoni, dan oak, selalu menjadi primadona karena kekuatan dan serat alaminya yang indah. Kayu jati dikenal memiliki ketahanan luar biasa terhadap rayap dan cuaca, menjadikannya pilihan investasi seumur hidup. Namun, harganya yang tinggi dan bobotnya yang berat seringkali membuat konsumen mencari alternatif modern. Di sinilah furnitur dari bahan olahan seperti multiplek (plywood), blockboard, dan MDF (Medium Density Fiberboard) dengan finishing HPL (High Pressure Laminate) atau veneer mulai menunjukkan dominasinya.
            </p>
            <p>
              Kepopuleran material buatan ini bukan tanpa alasan; material olahan menawarkan fleksibilitas desain yang luar biasa dan seringkali lebih tahan terhadap perubahan suhu ruangan. MDF, misalnya, sangat ideal untuk diaplikasikan finishing cat duco karena permukaannya yang sangat halus dan tidak memiliki pori-pori besar. Multiplek menawarkan kekuatan struktural yang lebih baik untuk menahan beban berat, sehingga sangat direkomendasikan untuk struktur kabinet atas dapur (kitchen set) maupun rak buku besar.
            </p>
            <p>
              Penting bagi Anda untuk memahami kelembapan dan paparan sinar matahari di ruangan yang akan ditempati furnitur. Misalnya, untuk area dapur yang rentan basah dan panas, material multiplek dengan finishing HPL anti-air jauh lebih disarankan dibandingkan kayu solid yang bisa memuai atau menyusut jika suhu ruangan tidak stabil. Lapisan HPL tidak hanya tahan panas, tetapi juga sangat mudah dibersihkan dari cipratan minyak. Material ini juga hadir dalam ribuan pilihan corak, mulai dari motif kayu alami, marmer, hingga warna solid matte maupun glossy.
            </p>

            <blockquote className="p-6 my-8 rounded-sm text-xl italic border-l-4" style={{ backgroundColor: "var(--color-broken-white)", borderColor: "var(--color-gold)", fontFamily: "var(--font-playfair)", color: "var(--color-wood-dark)" }}>
              "Furnitur bukan hanya tentang mengisi ruang kosong, tetapi tentang menciptakan ruang kehidupan yang bermakna dan mencerminkan karakter pemiliknya."
            </blockquote>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>2. Pentingnya Pengukuran Presisi</h2>
            <p>
              Kesalahan paling fatal dalam membeli atau memesan furnitur adalah salah ukuran. Jarak antar furnitur, alur sirkulasi manusia, hingga posisi colokan listrik (stop kontak) harus diperhitungkan dengan matang. Itulah mengapa survei lokasi menjadi tahap paling krusial. Tim profesional kami di Wasilah Furniture selalu melakukan pengukuran presisi tingkat milimeter menggunakan alat laser. Kami memastikan dinding, lantai, dan sudut ruangan terukur secara akurat sebelum satu lembar kayu pun dipotong.
            </p>
            <p>
              Pengukuran tidak hanya tentang lebar dan tinggi. Kedalaman (depth) suatu furnitur sangat memengaruhi kenyamanan ruang gerak (clearance). Sebagai contoh, jarak ideal antara kitchen island dengan kabinet utama sebaiknya minimal 90-100 cm agar laci dapat terbuka penuh dan dua orang dapat berpapasan. Hal-hal detail inilah yang membedakan furnitur custom premium dengan furnitur lepasan (ready-made).
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-inter)" }}>Checklist Sebelum Memesan Furnitur Custom:</h3>
            <ul className="list-disc pl-6 space-y-2 mb-8">
              <li>Pastikan ukuran ruangan sudah final (tidak ada perubahan sipil, keramik, atau plafon lagi).</li>
              <li>Tentukan titik kelistrikan untuk lampu LED strip atau stop kontak pada area kabinet.</li>
              <li>Pilih palet warna yang senada dengan cat dinding atau lantai rumah Anda.</li>
              <li>Konsultasikan gaya hidup Anda—apakah Anda memiliki hewan peliharaan atau anak kecil? Ini akan menentukan jenis finishing yang aman dan sudut-sudut meja yang tidak terlalu tajam.</li>
              <li>Tentukan budget yang realistis. Mengingat kustomisasi membutuhkan jam terbang dan material khusus.</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>3. Tren Desain Kontemporer</h2>
            <p>
              Tahun ini, tren desain interior mengarah pada konsep minimalisme hangat (Warm Minimalism). Gaya ini menggabungkan garis-garis bersih dan fungsionalitas dari gaya minimalis modern dengan tekstur dan palet warna yang lebih mengundang, seperti cokelat tanah, krem linen, beige, dan taupe. Furnitur dengan elemen rotan, linen, dan kayu ekspos banyak dicari untuk memberikan sentuhan organik di tengah hiruk-pikuk kehidupan urban. Konsep ini seakan mengundang alam untuk masuk ke dalam ruangan.
            </p>
            <p>
              Selain itu, desain yang <em>multi-purpose</em> atau serbaguna sangat diminati. Misalnya, meja kerja yang bisa dilipat menyatu dengan rak buku, atau tempat tidur dengan laci penyimpanan tersembunyi yang luas di bawahnya. Inovasi-inovasi ini lahir dari kebutuhan akan pemanfaatan ruang yang maksimal, terutama di hunian vertikal seperti apartemen di mana setiap meter persegi sangat berharga. Keserbagunaan juga meluas pada estetika; desain furnitur dibuat agar tak lekang oleh waktu, mampu dipadupadankan dengan berbagai elemen dekorasi baru ketika tren bergeser.
            </p>
            <p>
              Penggunaan kaca fluted atau kaca berpola garis-garis juga kembali populer. Elemen kaca ini memberikan tekstur visual yang elegan sembari menyamarkan barang-barang di dalam kabinet, menyeimbangkan antara estetika pameran dan privasi penyimpanan. Dipadukan dengan pencahayaan LED tersembunyi berwarnai warm white, furnitur akan memancarkan aura kemewahan seketika.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>4. Perawatan Jangka Panjang dan Hardware</h2>
            <p>
              Sebagus apa pun materialnya, tanpa perawatan yang tepat, furnitur Anda bisa cepat rusak. Untuk furnitur berbahan kayu atau HPL, bersihkan debu secara rutin menggunakan kain microfiber yang lembut. Hindari penggunaan bahan kimia keras seperti cairan pemutih atau amonia yang bisa merusak lapisan finishing. Sesekali, jika Anda menggunakan kayu solid, pakailah <em>furniture polish</em> berbahan dasar <em>beeswax</em> untuk mengembalikan kilau alami kayu dan memberikan lapisan protektif tambahan.
            </p>
            <p>
              Namun, seringkali orang melupakan bagian paling bekerja keras dari sebuah furnitur: <em>Hardware</em> atau aksesoris. Engsel, rel laci, handle, dan hidrolik adalah nyawa dari fungsionalitas. Wasilah Furniture menggunakan hardware berkualitas tinggi standar Eropa yang tahan terhadap karat dan diuji hingga ratusan ribu kali buka-tutup (soft-close hinges). Meski demikian, berikan pelumas khusus secara berkala (setiap 6-12 bulan) agar mekanisme tidak berdecit dan tetap mulus saat digunakan. Jangan memaksa laci yang tersangkut karena bisa mematahkan track rel.
            </p>
            <p>
              Jangan biarkan noda tumpahan air, terutama air kopi atau teh yang bersuhu panas, mengering dengan sendirinya di atas meja kayu. Segera lap dengan kain kering untuk mencegah timbulnya bercak noda (watermark) yang membandel. Bagi pemilik hewan peliharaan seperti kucing, pertimbangkan penggunaan bahan tahan gores tambahan pada pelapis jok sofa.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6" style={{ fontFamily: "var(--font-playfair)" }}>5. Pemilihan Mitra Pembuatan Furnitur</h2>
            <p>
              Pada akhirnya, ide sebaik apa pun membutuhkan tangan-tangan terampil untuk mewujudkannya. Menemukan kontraktor atau vendor furnitur custom yang tepat adalah sebuah perjalanan tersendiri. Anda harus memastikan bahwa portofolio mereka kredibel, proses pemesanannya transparan, dan mereka memberikan garansi pasca instalasi. Banyak oknum yang menjanjikan harga di bawah standar dengan mengorbankan ketebalan material dan kualitas engsel, sehingga furnitur Anda akan reot dalam kurun waktu kurang dari satu tahun.
            </p>
            <p>
              Di Wasilah Furniture, kami mengutamakan komunikasi dua arah yang intens dengan klien. Desainer kami akan membuat rendering 3D fotorealistis untuk memastikan visi klien tervisualisasi dengan sempurna sebelum proses produksi dimulai. Setiap tahapan produksi di workshop kami melalui pengawasan Quality Control yang ketat, dan tim instalasi kami dilatih untuk bekerja cepat, bersih, dan rapi di lokasi Anda.
            </p>
            
            <p className="mt-8 pt-8 border-t" style={{ borderColor: "var(--color-stone)" }}>
              Kesimpulannya, merencanakan, memilih, dan merawat furnitur custom membutuhkan dedikasi, wawasan, dan tentu saja, partner pengrajin yang bisa diandalkan seutuhnya. Kami berharap artikel panduan lengkap yang terdiri dari seribu kata ini dapat menjadi pedoman Anda dalam membangun rumah impian. Wasilah Furniture selalu berkomitmen untuk menghadirkan kualitas tingkat dunia, melestarikan nilai artisan pada setiap detail kayunya.
            </p>
          </div>
          
          {/* Share & Tag */}
          <div className="mt-12 flex items-center justify-between p-6 rounded-sm" style={{ backgroundColor: "var(--color-broken-white)", border: "1px solid var(--color-stone)" }}>
            <div>
              <p className="text-sm font-medium mb-2" style={{ fontFamily: "var(--font-inter)" }}>Bagikan artikel ini:</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors hover:bg-stone-200" style={{ backgroundColor: "var(--color-stone)", fontFamily: "var(--font-mono)" }}>Facebook</button>
                <button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors hover:bg-stone-200" style={{ backgroundColor: "var(--color-stone)", fontFamily: "var(--font-mono)" }}>Twitter</button>
                <button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors hover:bg-stone-200" style={{ backgroundColor: "var(--color-stone)", fontFamily: "var(--font-mono)" }}>WhatsApp</button>
              </div>
            </div>
            <div className="hidden md:block">
              <Link href="/kontak" className="btn-gold text-sm px-6 py-3">
                Konsultasikan Desain Anda
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
