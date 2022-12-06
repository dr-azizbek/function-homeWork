function func() {
    let time = +prompt("Hozirgi vaqtni kiriting (08.00):")
    let primeTime = 08.00

    if (primeTime >= time) {
        result = "Siz darsga o'z vaqtida keldinggiz!"
    }
    else {
        result = "Siz darsga kech qoldinggiz, adminga uchrashing!"
    }
    document.getElementById("result").innerHTML = result
}
