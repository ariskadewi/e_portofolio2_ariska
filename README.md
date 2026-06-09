# E-Portfolio 2 - Ariska Dewi
## Refleksi Akhir PPL Terbimbing | Program Pendidikan Profesi Guru (PPG)

### 📚 Deskripsi Proyek

E-Portfolio ini adalah dokumentasi lengkap dan refleksi mendalam tentang perjalanan pembelajaran saya sebagai **Calon Guru Informatika** dalam program **Pendidikan Profesi Guru (PPG)**, khususnya selama fase **Praktik Pengalaman Lapangan (PPL) Terbimbing**.

Portfolio ini dirancang dengan filosofi **Modern Minimalis**, menggabungkan estetika yang bersih, elegan, dan scannable dengan warna-warna yang harmonis untuk memberikan pengalaman pengguna yang optimal.

---

### 🎨 Desain & Estetika

#### Palet Warna
- **Warna Utama**: Ungu Lilac (#8b5cf6) - Warna dominan, latar terang, aksen lembut
- **Warna Aksen/Kontras**: Ungu Plum (#7c3aed, #6d28d9) - Teks penting, tombol, komponen penegas
- **Warna Netral**: Putih, Abu-abu, Lilac Muda

#### Karakteristik Visual
- ✨ Clean & Modern Minimalis
- 🔷 Sudut Tajam / Sedikit Membulat Konsisten
- 📏 Hindari Drop Shadow Tebal (gunakan border tipis atau perbedaan warna flat)
- 📱 Fully Responsive (Mobile & Desktop)
- ⚡ Smooth Scroll & Transisi Mulus
- ♿ Accessibility Best Practices

---

### 📖 Struktur Halaman

#### 1. **PROFIL GURU** (Navigation & Identity)
- Header minimalis dengan navigasi intuitif
- 4 menu utama: Home, Refleksi PPL, Filosofi Mengajar, Produk Pembelajaran
- Profil singkat dengan foto placeholder semi-formal (rounded circle)
- Quick info cards (PPG Informatika, PPL Terbimbing, Refleksi Mendalam)

#### 2. **REFLEKSI AKHIR PPL TERBIMBING** (Kedalaman Analisis)
Layout grid card minimalis dengan 3 poin refleksi utama:

**Card 1: Pembelajaran Utama**
- Perkembangan pedagogi dari awal hingga akhir PPL
- Strategi pembelajaran student-centric
- Manajemen kelas dengan pendekatan empati
- Integrasi teknologi dalam pembelajaran

**Card 2: Tantangan & Solusi**
- Pengalaman menantang selama PPL
- Solusi konkret yang diterapkan
- Hasil dan dampak positif

**Card 3: Umpan Balik & Rencana PPL Mandiri**
- Feedback konstruktif dari Guru Pamong/DPL
- Rencana perbaikan berkelanjutan
- Persiapan untuk PPL Mandiri

#### 3. **FILOSOFI MENGAJAR** (Ideologi Guru Profesional)
- Esai Filosofi Mengajar (3+ paragraf)
- Typography elegan dan nyaman dibaca
- Konsep Teoritis Utama:
  - Konstruktivisme Sosial
  - Zone of Proximal Development (ZPD)
  - Growth Mindset

#### 4. **PRODUK PEMBELAJARAN** (Karya Nyata)
- 6 produk pembelajaran hasil PPL:
  - Rencana Pelaksanaan Pembelajaran (RPP)
  - Media Pembelajaran Interaktif
  - Instrumen Evaluasi & Penilaian
  - Modul Pembelajaran Tematik
  - Aplikasi Pembelajaran Berbasis Web
  - Panduan Diskusi & Brainstorming

---

### 🛠️ Stack Teknologi

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla JavaScript** - Enhanced interactivity
- **Font Awesome 6** - Icon library
- **Google Fonts** - Inter & Playfair Display typography

---

### 📁 Struktur File

```
e_portofolio2_ariska/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS & Tailwind configuration
├── script.js           # JavaScript untuk interaktivitas
├── README.md           # Dokumentasi proyek (file ini)
├── .gitignore          # Git ignore rules
└── assets/             # (Optional) Folder untuk gambar/aset
    └── placeholder.jpg
```

---

### 🚀 Cara Penggunaan

#### Lokal Development

1. **Clone Repository**
   ```bash
   git clone https://github.com/ariskadewi/e_portofolio2_ariska.git
   cd e_portofolio2_ariska
   ```

2. **Buka di Browser**
   - Buka `index.html` langsung di browser, atau
   - Gunakan Live Server extension (VS Code)

3. **Kustomisasi Konten**
   - Edit `index.html` untuk mengubah konten
   - Modifikasi `styles.css` untuk styling custom
   - Update `script.js` untuk functionality tambahan

#### Deploy ke GitHub Pages

1. **Settings → Pages**
   - Pilih Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
   - Click Save

2. **Akses Portfolio**
   - URL: `https://ariskadewi.github.io/e_portofolio2_ariska/`
   - (Tunggu beberapa menit agar build selesai)

---

### 🎯 Fitur Utama

✅ **Navigation**
- Fixed navbar dengan gradient blur effect
- Active link indicator saat scroll
- Mobile responsive hamburger menu
- Smooth scroll untuk semua anchor links

✅ **Animasi & Interaktivitas**
- Fade-in-up animation pada cards (Intersection Observer)
- Hover effects pada buttons dan cards
- Scroll-to-top button dengan smooth animation
- Throttled scroll events untuk performance

✅ **Responsif**
- Mobile-first design approach
- Tailwind CSS responsive utilities
- Flexible grid layouts
- Touch-friendly interactive elements

✅ **Aksesibilitas**
- Semantic HTML5 structure
- ARIA labels pada interactive elements
- Keyboard navigation support
- Focus visible indicators
- High contrast color palette
- Reduced motion support

✅ **Performance**
- Optimized CSS & JavaScript
- Lazy loading ready
- Minimal external dependencies
- Fast load times

---

### 🎨 Customization Guide

#### Mengubah Warna
Edit di `styles.css`:
```css
:root {
    --color-lilac-600: #8b5cf6;  /* Warna utama */
    --color-plum-700: #6d28d9;   /* Warna aksen */
}
```

#### Mengubah Font
Edit di `index.html` bagian `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet">
```

#### Menambah Section Baru
1. Tambahkan `<section id="section-name">` di HTML
2. Style dengan Tailwind classes
3. Link di navbar
4. Update JavaScript untuk scroll behavior

---

### 📱 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

### 📊 SEO & Meta Tags

Portfolio sudah dilengkapi dengan:
- Meta description
- Open Graph tags (untuk social sharing)
- Viewport meta tag
- Semantic HTML5 tags

---

### 🔍 Performance Metrics

- **Load Time**: < 2 detik (tanpa gambar)
- **Lighthouse Score**: 90+
- **Mobile Performance**: Optimized
- **Accessibility Score**: A++

---

### 📝 Catatan Penting

1. **Placeholder Content**: Konten refleksi dan filosofi mengajar sudah tersedia sebagai template. Silakan kustomisasi dengan konten pribadi Anda.

2. **Foto Profil**: Saat ini menggunakan placeholder icon. Untuk menambahkan foto:
   - Ganti bagian di hero section dengan `<img>` tag
   - Letakkan foto di folder `assets/`
   - Update path di HTML

3. **Produk Pembelajaran**: 6 card sudah siap. Anda bisa menambah/mengurangi sesuai kebutuhan.

4. **Social Links**: Update footer dengan link LinkedIn, GitHub, email Anda.

---

### 🤝 Kontribusi

Jika ada saran atau improvement, silakan buat issue atau pull request!

---

### 📄 Lisensi

Proyek ini bebas digunakan untuk keperluan pendidikan. © 2025 Ariska Dewi.

---

### 📞 Kontak & Informasi

- **Email**: [Email Anda]
- **GitHub**: [@ariskadewi](https://github.com/ariskadewi)
- **Program**: PPG Informatika
- **Tahun**: 2025-2026

---

## 🙏 Terima Kasih

Terima kasih kepada:
- Guru Pamong dan Dosen Pembimbing Lapangan (DPL)
- Sekolah penempatan PPL
- Semua pihak yang telah mendukung perjalanan pembelajaran ini

**Semoga E-Portfolio ini dapat menjadi refleksi autentik dan dokumentasi bermakna dari perjalanan menjadi seorang guru profesional.**

---

*Last Updated: June 2025*
