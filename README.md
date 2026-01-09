# StackPlus - Website Perusahaan Digital Agency

Website perusahaan full-stack untuk StackPlus Digital Agency dengan panel admin, dukungan multi-bahasa (Indonesia/English), dan tema gelap/terang.

![StackPlus Logo](/images/logo-20text-202.png)

## Daftar Isi

- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Prasyarat](#prasyarat)
- [Instalasi Lokal](#instalasi-lokal)
- [Konfigurasi Database](#konfigurasi-database)
- [Menjalankan Proyek](#menjalankan-proyek)
- [Struktur Proyek](#struktur-proyek)
- [Panel Admin](#panel-admin)
- [Deployment ke Vercel](#deployment-ke-vercel)
- [Environment Variables](#environment-variables)
- [Troubleshooting](#troubleshooting)

---

## Fitur

### Website Publik
- **Homepage** - Hero section, layanan, portfolio, testimonial, dan CTA
- **Halaman About** - Visi, misi, nilai perusahaan, dan tim
- **Halaman Services** - Daftar layanan yang ditawarkan
- **Halaman Portfolio** - Galeri proyek dengan filter kategori
- **Halaman Blog** - Artikel dan berita terbaru
- **Halaman Contact** - Form kontak terintegrasi database
- **Halaman Testimonials** - Ulasan dari klien

### Fitur Umum
- **Multi-bahasa** - Dukungan Bahasa Indonesia dan English
- **Tema Gelap/Terang** - Toggle tema dengan persistensi
- **Responsive Design** - Optimal di semua ukuran layar
- **SEO Friendly** - Meta tags dan struktur yang optimal

### Panel Admin (`/admin`)
- **Dashboard** - Statistik dan overview
- **Manajemen Services** - CRUD layanan
- **Manajemen Portfolio** - CRUD proyek portfolio
- **Manajemen Blog** - CRUD artikel blog
- **Manajemen Team** - CRUD anggota tim
- **Manajemen Testimonials** - CRUD testimonial
- **Contact Submissions** - Lihat pesan dari form kontak
- **Homepage Content** - Edit konten homepage
- **Media Library** - Manajemen file dan gambar
- **Settings** - Pengaturan website

---

## Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| **Next.js 15** | Framework React dengan App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS v4** | Styling utility-first |
| **Supabase** | Database PostgreSQL + Authentication |
| **Shadcn/ui** | Komponen UI |
| **Lucide Icons** | Ikon SVG |

---

## Prasyarat

Sebelum memulai, pastikan Anda sudah menginstal:

1. **Node.js** versi 18.x atau lebih baru
   ```bash
   node --version  # Pastikan v18+
   ```

2. **npm** atau **pnpm** atau **yarn**
   ```bash
   npm --version
   ```

3. **Git** untuk version control
   ```bash
   git --version
   ```

4. **Akun Supabase** - Daftar gratis di [supabase.com](https://supabase.com)

---

## Instalasi Lokal

### Langkah 1: Clone Repository

```bash
# Clone repository
git clone https://github.com/username/stackplus-website.git

# Masuk ke direktori proyek
cd stackplus-website
```

### Langkah 2: Install Dependencies

```bash
# Menggunakan npm
npm install

# ATAU menggunakan pnpm (lebih cepat)
pnpm install

# ATAU menggunakan yarn
yarn install
```

### Langkah 3: Setup Environment Variables

Buat file `.env.local` di root proyek:

```bash
# Salin dari template
cp .env.example .env.local
```

Isi file `.env.local` dengan kredensial Supabase Anda:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database (PostgreSQL)
POSTGRES_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres
POSTGRES_PRISMA_URL=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres?pgbouncer=true
POSTGRES_URL_NON_POOLING=postgresql://postgres:[password]@db.[project-ref].supabase.co:5432/postgres

# Auth Redirect (untuk development)
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000/auth/callback
```

> **Catatan:** Dapatkan kredensial dari Supabase Dashboard > Project Settings > API

---

## Konfigurasi Database

### Langkah 1: Buat Tabel Database

Jalankan script SQL untuk membuat tabel dan RLS policies. Ada 2 cara:

#### Cara A: Melalui Supabase Dashboard

1. Buka [Supabase Dashboard](https://app.supabase.com)
2. Pilih proyek Anda
3. Buka **SQL Editor**
4. Salin dan jalankan isi file `scripts/001-create-tables.sql`
5. Kemudian jalankan `scripts/002-seed-initial-data.sql`

#### Cara B: Melalui v0 (Jika menggunakan v0.dev)

Script SQL akan otomatis tersedia di folder `/scripts`. Anda bisa menjalankannya langsung dari antarmuka v0.

### Langkah 2: Verifikasi Tabel

Pastikan tabel-tabel berikut sudah dibuat:

| Tabel | Deskripsi |
|-------|-----------|
| `services` | Daftar layanan |
| `portfolio` | Proyek portfolio |
| `blog_posts` | Artikel blog |
| `team_members` | Anggota tim |
| `testimonials` | Testimonial klien |
| `contact_submissions` | Pesan dari form kontak |
| `homepage_content` | Konten homepage |
| `media` | File dan gambar |
| `settings` | Pengaturan website |

### Langkah 3: Setup Authentication

1. Buka Supabase Dashboard > Authentication > Providers
2. Pastikan **Email** provider sudah aktif
3. (Opsional) Konfigurasi email templates di Authentication > Email Templates

---

## Menjalankan Proyek

### Development Mode

```bash
# Jalankan development server
npm run dev

# ATAU
pnpm dev

# ATAU
yarn dev
```

Buka browser dan akses:
- **Website Publik:** [http://localhost:3000](http://localhost:3000)
- **Panel Admin:** [http://localhost:3000/admin](http://localhost:3000/admin)
- **Login Admin:** [http://localhost:3000/auth/login](http://localhost:3000/auth/login)

### Production Build (Lokal)

```bash
# Build untuk production
npm run build

# Jalankan production server
npm run start
```

### Linting & Type Check

```bash
# Cek linting errors
npm run lint

# Type checking (jika tersedia)
npm run type-check
```

---

## Struktur Proyek

```
stackplus-website/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Halaman publik
│   │   ├── page.tsx              # Homepage
│   │   ├── about/                # Halaman About
│   │   ├── services/             # Halaman Services
│   │   ├── portfolio/            # Halaman Portfolio
│   │   ├── blog/                 # Halaman Blog
│   │   ├── contact/              # Halaman Contact
│   │   └── testimonials/         # Halaman Testimonials
│   ├── admin/                    # Panel Admin (protected)
│   │   ├── page.tsx              # Dashboard
│   │   ├── services/             # CRUD Services
│   │   ├── portfolio/            # CRUD Portfolio
│   │   ├── blog/                 # CRUD Blog
│   │   ├── team/                 # CRUD Team
│   │   ├── testimonials/         # CRUD Testimonials
│   │   ├── contacts/             # Contact Submissions
│   │   ├── homepage/             # Homepage Content
│   │   ├── media/                # Media Library
│   │   └── settings/             # Settings
│   ├── auth/                     # Authentication pages
│   │   ├── login/                # Login page
│   │   ├── sign-up/              # Sign up page
│   │   └── error/                # Error page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/                   # React components
│   ├── admin/                    # Admin components
│   ├── home/                     # Homepage sections
│   ├── layout/                   # Header, Footer
│   └── ui/                       # UI components (shadcn)
├── lib/                          # Utilities & configurations
│   ├── supabase/                 # Supabase clients
│   │   ├── client.ts             # Browser client
│   │   ├── server.ts             # Server client
│   │   └── proxy.ts              # Auth middleware helper
│   ├── i18n/                     # Internationalization
│   │   ├── translations.ts       # Terjemahan
│   │   └── context.tsx           # Language context
│   ├── theme/                    # Theme system
│   │   └── context.tsx           # Theme context
│   └── types/                    # TypeScript types
│       └── database.ts           # Database types
├── public/                       # Static files
│   └── images/                   # Images & logos
├── scripts/                      # SQL scripts
│   ├── 001-create-tables.sql     # Create tables & RLS
│   └── 002-seed-initial-data.sql # Seed data
├── proxy.ts                      # Next.js middleware
├── .env.local                    # Environment variables (local)
├── .env.example                  # Environment template
├── package.json                  # Dependencies
└── README.md                     # Dokumentasi ini
```

---

## Panel Admin

### Mengakses Panel Admin

1. **Buat Akun Admin**
   
   Kunjungi [http://localhost:3000/auth/sign-up](http://localhost:3000/auth/sign-up) dan daftar dengan email Anda.

2. **Konfirmasi Email**
   
   Cek inbox email untuk link konfirmasi (jika email confirmation diaktifkan di Supabase).

3. **Login**
   
   Kunjungi [http://localhost:3000/auth/login](http://localhost:3000/auth/login) dan masuk dengan kredensial Anda.

4. **Akses Dashboard**
   
   Setelah login, Anda akan diarahkan ke [http://localhost:3000/admin](http://localhost:3000/admin).

### Fitur Panel Admin

| Menu | Fungsi |
|------|--------|
| **Dashboard** | Lihat statistik: total services, portfolio, blog posts, contacts |
| **Services** | Tambah, edit, hapus layanan yang ditampilkan di website |
| **Portfolio** | Kelola proyek portfolio dengan gambar dan deskripsi |
| **Blog** | Tulis dan publikasikan artikel blog |
| **Team** | Kelola profil anggota tim |
| **Testimonials** | Kelola testimonial dari klien |
| **Contacts** | Lihat dan kelola pesan dari form kontak |
| **Homepage** | Edit konten yang tampil di homepage |
| **Media** | Upload dan kelola file/gambar |
| **Settings** | Pengaturan umum website |

### Tips Penggunaan Admin

- **Status Draft/Published:** Konten dengan status "draft" tidak akan tampil di website publik
- **Urutan Tampil:** Gunakan field "order" untuk mengatur urutan tampilan
- **SEO:** Isi meta description untuk setiap halaman agar SEO optimal
- **Gambar:** Upload gambar dengan ukuran yang sudah dioptimasi (max 1MB recommended)

---

## Deployment ke Vercel

### Langkah 1: Push ke GitHub

```bash
# Inisialisasi git (jika belum)
git init

# Tambahkan semua file
git add .

# Commit
git commit -m "Initial commit: StackPlus website"

# Tambahkan remote repository
git remote add origin https://github.com/username/stackplus-website.git

# Push ke GitHub
git push -u origin main
```

### Langkah 2: Import ke Vercel

1. Buka [vercel.com](https://vercel.com) dan login
2. Klik **"Add New..."** > **"Project"**
3. Pilih repository **stackplus-website** dari GitHub
4. Vercel akan otomatis mendeteksi Next.js

### Langkah 3: Konfigurasi Environment Variables

Di halaman konfigurasi Vercel, tambahkan environment variables:

| Key | Value |
|-----|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://your-project.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `your-anon-key` |
| `SUPABASE_SERVICE_ROLE_KEY` | `your-service-role-key` |
| `POSTGRES_URL` | `postgresql://...` |

> **Penting:** Jangan lupa menghapus `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` untuk production!

### Langkah 4: Deploy

1. Klik **"Deploy"**
2. Tunggu proses build selesai (biasanya 1-3 menit)
3. Setelah selesai, Anda akan mendapat URL production seperti `https://stackplus-website.vercel.app`

### Langkah 5: Update Supabase Auth Settings

Setelah deploy, update redirect URL di Supabase:

1. Buka Supabase Dashboard > Authentication > URL Configuration
2. Tambahkan URL production ke **Site URL**: `https://your-domain.vercel.app`
3. Tambahkan ke **Redirect URLs**:
   - `https://your-domain.vercel.app/auth/callback`
   - `https://your-domain.vercel.app/admin`

### Custom Domain (Opsional)

1. Di Vercel Dashboard, buka proyek Anda
2. Klik **Settings** > **Domains**
3. Tambahkan custom domain Anda (contoh: `stackplus.co.id`)
4. Ikuti instruksi untuk konfigurasi DNS

---

## Environment Variables

### Variabel Wajib

| Variable | Deskripsi | Contoh |
|----------|-----------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL proyek Supabase | `https://xxx.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Anon/public key Supabase | `eyJhbGc...` |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server-side only) | `eyJhbGc...` |

### Variabel Database

| Variable | Deskripsi |
|----------|-----------|
| `POSTGRES_URL` | Connection string PostgreSQL |
| `POSTGRES_PRISMA_URL` | Connection string dengan pgbouncer |
| `POSTGRES_URL_NON_POOLING` | Direct connection (tanpa pooling) |

### Variabel Development

| Variable | Deskripsi |
|----------|-----------|
| `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` | Redirect URL untuk development (`http://localhost:3000`) |

> **Catatan:** Hapus `NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL` di production!

---

## Troubleshooting

### Error: "useTheme must be used within a ThemeProvider"

**Solusi:** Pastikan `ThemeProvider` membungkus komponen di `app/layout.tsx`.

### Error: "Invalid API Key" atau "401 Unauthorized"

**Solusi:**
1. Periksa environment variables sudah benar
2. Pastikan tidak ada spasi atau karakter tersembunyi
3. Restart development server setelah mengubah `.env.local`

### Error: "relation does not exist" (PostgreSQL)

**Solusi:** Jalankan script SQL di `scripts/001-create-tables.sql` untuk membuat tabel.

### Halaman Admin Redirect ke Login Terus

**Solusi:**
1. Pastikan sudah login dengan akun yang valid
2. Cek apakah cookies tersimpan dengan benar
3. Clear cookies dan login ulang

### Gambar Tidak Muncul

**Solusi:**
1. Pastikan gambar sudah diupload ke folder `public/`
2. Gunakan path yang benar (contoh: `/images/logo.png`)
3. Untuk gambar eksternal, tambahkan domain ke `next.config.js`

### Form Kontak Tidak Terkirim

**Solusi:**
1. Periksa RLS policies di tabel `contact_submissions`
2. Pastikan policy mengizinkan INSERT untuk anonymous users

### Build Error di Vercel

**Solusi:**
1. Periksa log error di Vercel Dashboard
2. Pastikan semua dependencies terinstall
3. Cek TypeScript errors dengan `npm run build` di lokal

---

## Kontribusi

1. Fork repository ini
2. Buat branch baru: `git checkout -b feature/fitur-baru`
3. Commit perubahan: `git commit -m "Tambah fitur baru"`
4. Push ke branch: `git push origin feature/fitur-baru`
5. Buat Pull Request

---

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

## Kontak & Dukungan

- **Website:** [stackplus.co.id](https://stackplus.co.id)
- **Email:** hello@stackplus.co.id
- **GitHub Issues:** Laporkan bug atau request fitur

---

**Dibuat dengan cinta oleh Tim StackPlus** 💙
