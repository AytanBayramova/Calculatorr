let btn = document.getElementsByTagName("button");
//console.log(dugme);16 buton varmış
let ekran = document.getElementsByClassName("ekran1")[0];
let hesabla = document.getElementById("hesabla");
let temizle = document.getElementById("temizle");
for (var i = 0; i < 16; i++) {
  if (i != 12 && i != 14) {
    btn[i].addEventListener("click", yazdir);
  }
}
function yazdir() {
  ekran.value = ekran.value + this.value;
}

hesabla.addEventListener("click", hesab);

function hesab() {
  ekran.value = eval(ekran.value);
}

temizle.addEventListener("click", temiz);

function temiz() {
  ekran.value = "";
}
