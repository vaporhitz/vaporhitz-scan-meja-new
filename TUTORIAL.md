# Tutorial: Memasang Halaman Meja Vaporhitz Vapestore di GitHub

Hasil akhir: sebuah link (contoh `https://vaporhitz.github.io/vaporhitz-meja/`)
yang bisa dibuatkan QR code lalu ditempel di meja toko.

Isi halaman:
1. Logo + "VAPORHITZ VAPESTORE" + sambutan "Selamat datang, selamat berbelanja!..."
2. Tombol **Menu Nicotine** (daftar menu bergambar)
3. **Free WiFi Vaporhitz Vapestore** + barcode (QR) agar HP langsung tersambung
4. **Rating Pelayanan** (bintang 1-5 + kesan), lalu ajakan menilai di Google Maps

---
## BAGIAN A — Pasang di GitHub (gratis, tanpa coding)

### Langkah 1 — Buat akun GitHub
1. Buka https://github.com/signup, daftar dengan email.
2. Username akan jadi bagian link. Contoh username `vaporhitz` -> link
   `https://vaporhitz.github.io/...`. Pakai huruf kecil, tanpa spasi.

### Langkah 2 — Buat repository
1. Klik tanda **+** (kanan atas) -> **New repository**.
2. **Repository name:** `vaporhitz-meja`
3. Pilih **Public** (wajib, supaya GitHub Pages gratis jalan).
4. Klik **Create repository**.

### Langkah 3 — Unggah semua file
1. Ekstrak dulu file zip `vaporhitz-meja.zip` di HP/komputer.
2. Di halaman repository, klik **uploading an existing file**.
3. Seret SEMUA isi folder: `index.html`, `style.css`, `config.js`, `app.js`,
   `README.md`, `TUTORIAL.md`, dan folder `assets` (berisi logo, menu-1..5.jpg, qrcode.js).
   - Penting: yang diunggah isi folder, BUKAN folder `vaporhitz-meja` itu sendiri.
     `index.html` harus ada di paling luar.
   - Kalau folder `assets` tidak ikut ter-drag di HP, buka Add file -> Create new file,
     ketik `assets/x` untuk membuat folder, lalu unggah gambar satu per satu.
4. Klik **Commit changes**.

### Langkah 4 — Aktifkan GitHub Pages
1. Tab **Settings** -> menu kiri **Pages**.
2. Di *Build and deployment*: **Source = Deploy from a branch**.
3. **Branch = main**, folder **/ (root)** -> **Save**.
4. Tunggu 1-2 menit, refresh halaman Pages. Muncul tulisan
   "Your site is live at https://USERNAME.github.io/vaporhitz-meja/".
5. Buka link itu di HP. Selesai!

### Langkah 5 — Buat QR code untuk meja
1. Salin link website tadi.
2. Buat QR di https://www.qr-code-generator.com atau situs QR gratis lain
   (tempel link -> unduh PNG).
3. Cetak, laminating, tempel di meja. Tes scan dulu dengan HP.

---
## BAGIAN B — Mengubah isi (semua lewat `config.js`)

Cara edit: buka file di GitHub -> ikon **pensil** -> ubah -> **Commit changes**.
Halaman ikut berubah dalam 1-2 menit (kalau belum berubah, tutup lalu buka ulang / refresh).

| Mau ubah | File & bagian |
|---|---|
| Nama toko & kalimat sambutan | `config.js` -> `nama`, `tagline` |
| Logo | unggah `logo.png` baru ke folder `assets` (nama sama, menimpa) |
| Gambar menu | unggah JPG baru ke `assets`, sesuaikan daftar `menu.halaman` di `config.js` |
| Nama WiFi / password | `config.js` -> `wifi` (barcode otomatis ikut berubah) |
| Link Google Maps | `config.js` -> `gmaps` |
| Warna | `style.css` -> bagian `:root` paling atas (kode warna `#ffc400` = kuning) |

Catatan WiFi: tulis nama & password persis sama dengan di router (huruf besar/kecil
berpengaruh), lalu tes scan barcode-nya. Kalau password diganti di router, ganti juga di `config.js`.

---
## BAGIAN C — Rating masuk ke Google Form (agar bisa dilihat pemilik)

Tanpa langkah ini, tombol Kirim Penilaian tetap jalan tapi nilainya tidak tersimpan.

1. Buka https://forms.google.com -> buat form baru.
2. Pertanyaan 1: **Bintang** -> jenis *Skala linier* 1 sampai 5.
3. Pertanyaan 2: **Kesan** -> jenis *Paragraf*.
4. Titik tiga (kanan atas) -> **Dapatkan link isi otomatis** -> isi jawaban contoh
   -> **Dapatkan link** -> **Salin link**, lalu tempel di Notepad. Bentuknya:
   `https://docs.google.com/forms/d/e/XXXX/viewform?usp=pp_url&entry.111=3&entry.222=bagus`
5. Dari link itu ambil:
   - `action`: bagian sebelum `?`, ganti `viewform` jadi `formResponse`
   - `entryBintang`: `entry.111` (yang isinya angka)
   - `entryKesan`: `entry.222` (yang isinya teks)
6. Isi di `config.js`:
   ```js
   form: {
     action: "https://docs.google.com/forms/d/e/XXXX/formResponse",
     entryBintang: "entry.111",
     entryKesan: "entry.222"
   },
   ```
7. Commit. Tes kirim rating dari HP, lalu cek tab **Respons** di Google Form.

---
## Masalah umum
- **Halaman 404:** `index.html` belum di paling luar, atau Pages belum aktif / belum 2 menit.
- **Gambar/logo tidak muncul:** folder `assets` belum terunggah, atau nama file beda huruf besar/kecil.
- **Perubahan tidak tampil:** tunggu 1-2 menit, lalu refresh paksa.
- **Rating tidak masuk Form:** cek `action` berakhir `formResponse` dan kode `entry.` benar.
