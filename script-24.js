console.log("24 Pengkondisian Switch");

var angka = parseInt(prompt("Masukkan Angka: "));
// tambahkan parseInt karena semua inputan user berupa string

switch(angka) {
  case 1:
    alert("anda memasukkan angka 1");
    break;
  case 2:
    alert("anda memasukkan angka 2");
    break;
  case 3:
    alert("anda memasukkan angka 3");
    break;
  default:
    alert("angka yang anda masukkan salah");
    break;
}
