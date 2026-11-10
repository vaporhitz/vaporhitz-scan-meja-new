// =====================================================
//  PENGATURAN HALAMAN — ubah isi di sini, lalu simpan.
//  (Warna & tampilan ada di style.css bagian paling atas)
// =====================================================
window.CONFIG = {
  nama: "VAPORHITZ VAPESTORE",
  tagline: "Makasih sudah mampir! Sambil nunggu, yuk cek Menu Nicotine Cafe & Bar, ada juga FREE WIFI yang bisa kalian nikmati.",
  logo: "assets/logo.png",

  // Halaman menu (gambar). Tambah/kurangi/ganti urutan sesuka hati.
  menu: {
    judul: "Menu Nicotine",
    halaman: [
      "assets/menu-1.jpg",
      "assets/menu-2.jpg",
      "assets/menu-3.jpg",
      "assets/menu-4.jpg",
      "assets/menu-5.jpg"
    ]
  },

  // Daftar WiFi
  wifi: [
    { nama: "Vaporhitz Vapestore 5G",   password: "estehmanis", ket: "Lebih cepat" },
    { nama: "Vaporhitz Vapestore 2.4G", password: "estehmanis", ket: "Jangkauan lebih luas" }
  ],

  // Link Google Maps toko (muncul setelah customer menilai)
  gmaps: "https://maps.app.goo.gl/CTwbjG4Z4MVbbiKGA",

  // Penilaian dikirim ke Google Form (lihat README.md langkah 3).
  // Kosongkan 3 baris ini kalau belum ada Form.
  form: {
    action: "",      // contoh: "https://docs.google.com/forms/d/e/XXXXXXXX/formResponse"
    entryBintang: "",// contoh: "entry.1234567890"
    entryKesan: ""   // contoh: "entry.0987654321"
  },

  footer: "Vaporhitz Vapestore · Terima kasih sudah mampir"
};
