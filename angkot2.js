console.log("20 Tugas Angkot Pengulangan For");

var angkot = 1
var jumlah_angkot = 10;
var angkot_beroperasi = 8;

while(angkot <= jumlah_angkot) {
  for(angkot; angkot <= angkot_beroperasi; angkot++) {
    console.log(`Angkot No. ${angkot} beroperasi dengan baik!`);
  }
  console.log(`Angkot No. ${angkot} sedang tidak beroperasi!`);
  angkot++;
}
