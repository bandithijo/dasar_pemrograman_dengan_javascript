console.log("16 PopUp Box");
alert("Selamat Datang!");
var lagi = true;

while(lagi) {
  var nama_depan = prompt("Siapa nama kamu?");
  if (nama_depan) {
    alert("Hello, " + nama_depan.toUpperCase() + "!");
  } else {
    alert("Kamu tidak memasukkan nama!");
  };
  lagi = confirm("Coba lagi?");
};

if (nama_depan) {
  alert("Terima kasih, " + nama_depan.toUpperCase() + "!");
} else {
  alert("Terima kasih!");
};
