console.log("17 Control Flow Perulangan");

alert("Mulai - Perulangan");
var ulang = prompt("Berapa kali akan berulang: ");
for(var i = 1; i <= ulang; i++) {
  alert("Perulangan ke-" + i);
}
alert("Selesai");


console.log("17 Control Flow Pengkondisian");

alert("Mulai - Pengkondisian");
var angka = prompt("Masukkan sembarang angka: ");
if(angka % 2 === 0) {
  alert(angka + ", adalah bilangan GENAP!");
} else {
  alert(angka + ", adalah bilangan GANJIL!");
};
alert("Selesai");
