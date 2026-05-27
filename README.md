<div align="center">
  <h1>📦 DevStash</h1>
  <p><b>Centralized Digital Asset Management Hub for Developers & Creators</b></p>
  
  [![Status](https://img.shields.io/badge/status-active-success.svg)]()
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
</div>

---

## 📖 Tentang Proyek (Overview)
**DevStash** adalah aplikasi web manajemen aset berbasis *cloud* yang dirancang khusus untuk memecahkan masalah fragmentasi *file* dalam proses pengembangan perangkat lunak dan *game*. 

Platform ini bertindak sebagai "brankas" terpusat di mana *developer* dapat mengunggah, mengkategorikan, dan mempratinjau berbagai sumber daya proyek—seperti *snippet* kode, *voice lines*, aset UI dari Figma, hingga lembar referensi karakter—dalam satu dasbor yang rapi, aman, dan responsif.

## ✨ Fitur Utama (Key Features)

- 📝 **Smart Script Organization:** Sistem repositori *snippet* kode yang mendukung *syntax highlighting* langsung di dalam *browser*. Sangat ideal untuk menyimpan struktur logika *visual novel*, *script* Lua, maupun GDScript.
- 🎨 **Visual Asset & Reference Gallery:** Penampil gambar dinamis dengan fitur *drag-and-drop*. Dilengkapi sistem *tagging* untuk memisahkan hasil *export* UI/UX dengan lembar referensi desain (seperti *flat-color character sheets*).
- 🎵 **Audio Library & Previewer:** Pemutar media bawaan untuk melakukan *preview* pada *voice lines* (hasil TTS) atau *background music* secara *real-time* tanpa perlu mengunduhnya.
- 🔍 **Advanced Filtering System:** Mesin pencari internal yang cepat untuk menemukan *file* menggunakan kombinasi *tag* (contoh: "Enemy Pathfinding", "Gacha UI").
- 🔒 **Secure File Handling:** Sistem autentikasi pengguna dan RBAC (*Role-Based Access Control*) dengan implementasi keamanan tingkat lanjut (pencegahan XSS/SQLi) untuk melindungi aset proyek yang bersifat rahasia.

## 🛠️ Teknologi yang Digunakan (Tech Stack)

**Frontend:**
- React.js / Next.js
- Tailwind CSS (untuk *styling* yang cepat dan responsif)
- Axios (untuk komunikasi API)

**Backend:**
- Python (Flask / FastAPI)
- JWT (JSON Web Tokens) untuk autentikasi yang aman
- SQLAlchemy / ORM

**Database & Storage:**
- PostgreSQL (Production) / SQLite (Local Development)
- AWS S3 / Firebase Storage (untuk *cloud file hosting*)

## 🚀 Instalasi & Cara Penggunaan (Getting Started)

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

### Prasyarat
- Python 3.9+
- Node.js & npm
- PostgreSQL (opsional untuk *local dev*)

### Langkah Instalasi

1. **Clone repository ini**
```bash
   git clone [https://github.com/username-kamu/DevStash.git](https://github.com/username-kamu/DevStash.git)
   cd DevStash
