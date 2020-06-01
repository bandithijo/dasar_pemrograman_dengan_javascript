console.log("21 Tugas Angkot Pengkondisian If Else dan For");

var angkot = 1
var jumlah_angkot = 10;
var angkot_beroperasi = 6;

for(angkot; angkot <= jumlah_angkot; angkot++) {
  if(angkot <= angkot_beroperasi) {
    console.log(`Angkot No. ${angkot} beroperasi dengan baik!`);
  } else {
    console.log(`Angkot No. ${angkot} sedang tidak beroperasi!`);
  }
}
