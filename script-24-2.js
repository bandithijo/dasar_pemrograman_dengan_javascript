console.log("24 Pengkondisian Switch (makanan minuman)");

var item = prompt("Masukkan nama makanan / minuman: \n [cth: nasi, daging, susu, hamburger, softdrink]");

switch(item) {
  case 'nasi':
  case 'daging':
  case 'susu':
    alert("Makanan / Minuman SEHAT!");
    break;
  case 'hamburger':
  case 'softdrink':
    alert("Makanan / Minuman TIDAK SEHAT!");
    break;
  default:
    alert("Nama makanan / minuman TIDAK TERDAFTAR!");
    break;
}
