
function func() {
    let a = +prompt("Sonning bo'luvchilar sonini toposh. \n Sonni kiriting");
    let n = 0;

    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            n++;
        }
    }
    document.getElementById("result").innerHTML = `${a} sonining bo'luvchilar soni ${n}ta ga teng`;
}
