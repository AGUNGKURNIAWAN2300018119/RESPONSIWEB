function Selesai() {
    var nama = document.fform.nama.value;
    var tanggal = document.fform.tanggal.value;
    var hari = document.fform.hari.value;
    var waktu = document.fform.waktu.value;
    var konsultasi = document.fform.konsultasi.value;
    var message;

    if (nama && tanggal && hari && waktu && konsultasi) {
        message = `JANJI KONSUL KE DOKTER ${nama} TANGGAL ${tanggal} HARI ${hari} WAKTU ${waktu} konsultasi ${konsultasi}`;
        alert(message);
        document.fform.submit();
    } else {
        
        alert("Semua kolom harus diisi.");
    }
}
