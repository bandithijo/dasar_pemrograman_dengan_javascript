console.log("23 Juragan Angkot 5");

var angkot = 1
var jumlah_angkot = 10;
var angkot_beroperasi = 6;
var angkot_lembur = [8, 10];

for(angkot; angkot <= jumlah_angkot; angkot++) {
  if(angkot <= angkot_beroperasi) {
    console.log(`Angkot No. ${angkot} beroperasi dengan baik!`);
  } else if(angkot_lembur.includes(angkot)) {
    console.log(`Angkot No. ${angkot} sedang lembur!`);
  } else {
    console.log(`Angkot No. ${angkot} sedang tidak beroperasi!`);
  }
}
