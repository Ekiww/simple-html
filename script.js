// Function untuk menghitung diskon berdasarkan kategori
function hitungDiskon(kategori, harga) {
    let diskon = 0;
  
    // Kondisi untuk menentukan besaran diskon
    switch (kategori.toLowerCase()) {
        case 'elektronik':
            diskon = 0.3; // 30% diskon
            break;
        case 'pakaian':
            diskon = 0.15; // 15% diskon
            break;
        case 'makanan':
            diskon = 0.25; // 25% diskon
            break;
        default:
            diskon = 0.05; // Diskon default 5%
    }

    return harga - (harga * diskon); // Mengembalikan harga setelah diskon
}

// Function untuk mengambil input dan menampilkan hasil
function hitungHarga() {
    // Mengambil nilai dari form
    let kategori = document.getElementById("kategori").value;
    let harga = parseFloat(document.getElementById("harga").value);

    // Validasi input
    if (isNaN(harga) || harga <= 0) {
        alert("Masukkan harga yang valid!");
        return;
    }

    // Hitung harga akhir setelah diskon
    let hargaAkhir = hitungDiskon(kategori, harga);

    // Menampilkan hasil
    document.getElementById("hasil").innerText = `Harga setelah diskon: Rp ${hargaAkhir.toFixed(2)}`;

    switch (kategori.toLowerCase()) {
        case 'elektronik':
            pesan = "Kamu berhasil dapat diskon 30% untuk produk Elektronik!";
            break;
        case 'pakaian':
            pesan = "Kamu berhasil dapat diskon 15% untuk produk Pakaian!";
            break;
        case 'makanan':
            pesan = "Kamu berhasil dapat diskon 25% untuk produk Makanan!";
            break;
        default:
            pesan = "Kamu berhasil dapat diskon 5% untuk produk lainnya!";
    }

    // Menampilkan hasil diskon dan pesan setelah 2 detik
    setTimeout(function() {
        document.getElementById("hasil").innerText = `Harga setelah diskon: Rp ${hargaAkhir.toFixed(2)}`;
        alert(pesan); // Pesan diskon spesifik kategori
    }, 1000); // Menunda selama 1 detik 
}
