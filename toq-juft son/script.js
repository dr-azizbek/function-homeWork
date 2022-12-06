
function numers() {
    let a = +prompt("Sonni juft yoki toq ekan bilish mumkin \n Iltimos sonni kiriting:")
    let result = document.getElementById("even__odd__number")
    if (a % 2 == 0) {
        result = a + " soni juft son."
    }
    else {
        result = a + " soni toq son."
    }
    document.getElementById("even__odd__number").innerHTML = result
}
