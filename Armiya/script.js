function func() {
    let tall = +prompt("Bo'yinggizni kiriting(160):")
    let weight = +prompt("Vazniniggizni kiriting(55):")

    let RTall = 160
    let RWeight = 55

    if (RTall <= tall && RWeight <= weight && tall-weight<110) {
        result = "Siz armiya qabul qilinasiz"
    }
    else {
        result = "Siz armiyaga qabul qilinmaysiz"
    }
    document.getElementById("result").innerHTML = result
}