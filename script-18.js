console.log("18 Pengulangan While");

var ulang = true;
while(ulang) {
  console.log("Hello World!");
  ulang = confirm("lagi?");
}

var nilai_awal = 1;
while(nilai_awal <= 5) {
  console.log(`Perulangan ke-${nilai_awal}`); // string interpolation
  nilai_awal++;
}
