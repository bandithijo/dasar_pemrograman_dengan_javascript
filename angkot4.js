console.log("22 Juragan Angkot 4");

var angkot = 1
var jumlah_angkot = 10;
var angkot_beroperasi = 6;

for(angkot; angkot <= jumlah_angkot; angkot++) {
  if(angkot <= angkot_beroperasi) {
    console.log(`Angkot No. ${angkot} beroperasi dengan baik!`);
  } else if(angkot == 8) {
    console.log(`Angkot No. ${angkot} sedang lembur!`);
  }else {
    console.log(`Angkot No. ${angkot} sedang tidak beroperasi!`);
  }
}
