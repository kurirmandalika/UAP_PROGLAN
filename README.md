README - Sistem Pemesanan Makanan

🎯 Tujuan Program

Program ini dirancang untuk memberikan pengalaman pemesanan makanan yang cepat, rapi, dan mudah dipahami. Dilengkapi dengan antarmuka yang menarik dan fitur lengkap seperti pengelolaan menu, pemesanan makanan, dan penampilan tagihan.

✨ Fitur Utama

1. Menampilkan Daftar Menu

Daftar menu makanan ditampilkan dalam tabel menggunakan JTable untuk tampilan yang rapi.

Data menu diisi secara otomatis saat program dijalankan.

2. Pemesanan Makanan

Pengguna dapat memilih makanan dari JComboBox yang menampilkan daftar menu.

Pengguna harus mengisi nama pelanggan sebelum memesan.

Jika nama kosong, program akan menampilkan pesan kesalahan melalui exception handling.

3. Penambahan Menu Baru

Pengguna dapat menambahkan menu baru dengan mengisi nama dan harga.

Data akan langsung ditambahkan ke tabel dan JComboBox.

Jika input harga bukan angka atau input tidak valid, program akan menangani kesalahan dengan menampilkan pesan error.

4. Penghapusan Pesanan

Pengguna dapat menghapus pesanan berdasarkan nama pelanggan.

Jika pesanan tidak ditemukan, program akan memberikan pesan kesalahan.

5. Tampilan Tagihan (Bill)

Tagihan ditampilkan dalam format yang bersih dan menarik di JTextArea.

Tagihan mencakup nama pelanggan, daftar pesanan, dan total harga.

🖥️ Desain Antarmuka yang Menarik

Warna biru cerah pada bagian atas dan bawah program menciptakan kesan modern dan profesional.

Panel tagihan memiliki latar belakang putih dan border untuk membedakannya dari bagian lain.

Font yang jelas dan tata letak yang teratur membuat program lebih mudah digunakan.

🛠️ Komponen Utama

JTable: Menampilkan daftar menu dalam format tabel menggunakan DefaultTableModel.

JComboBox: Memudahkan pemilihan menu dengan tampilan dropdown.

JTextArea: Menampilkan tagihan dalam format teks yang rapi.

JButton: Memproses berbagai fungsi, seperti pemesanan, penambahan menu, menampilkan tagihan, dan penghapusan pesanan.

Exception Handling: Mengatasi input yang tidak valid dengan pesan error yang jelas.

📐 Desain dan Warna

Warna Biru Cerah: (Color(72, 122, 189)) untuk menciptakan tampilan profesional.

Panel Tagihan: Latar putih dengan border agar tampak terpisah dan rapi.

Font Modern: Menggunakan "Arial", 14px untuk keterbacaan yang optimal.

Tata Letak Teratur: Kombinasi GridBagLayout dan FlowLayout untuk susunan elemen yang rapi.

🗂️ Struktur Data

Kelas MenuItem: Representasi menu makanan dengan atribut:

id: ID unik menu.

name: Nama menu.

price: Harga menu.

Kelas Order: Representasi pesanan dengan atribut:

customerName: Nama pelanggan.

menuItem: Objek menu yang dipesan.

ArrayList:

menuList: Menyimpan daftar menu.

orderList: Menyimpan daftar pesanan.

🚀 Fitur Tambahan - CRUD

Create: Tambah menu baru.

Read: Tampilkan menu di tabel dan pesanan di tagihan.

Update: Perbarui dropdown saat menu baru ditambahkan.

Delete: Hapus pesanan berdasarkan nama pelanggan.

Format Tagihan yang Menarik

Tagihan ditampilkan dengan garis pemisah dan teks tebal menggunakan format HTML.

🔧 Langkah Penggunaan Program

Jalankan program.

Pilih nama menu dari dropdown (JComboBox).

Isi nama pelanggan di kotak teks "Nama Pembeli".

Klik tombol "Pesan" untuk memesan makanan.

Untuk menambah menu, isi "Nama Menu" dan "Harga", lalu klik "Tambah Menu".

Klik "Tampilkan Tagihan" untuk melihat daftar pesanan dan total harga.

Untuk menghapus pesanan, masukkan nama pelanggan di "Nama Pembeli" dan klik "Hapus Pesanan".

Terima kasih telah menggunakan program ini! Semoga pengalaman pemesanan makanan Anda lebih cepat, mudah, dan menyenangkan! 🍽️
