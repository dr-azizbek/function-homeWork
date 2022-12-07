function func() {
    let monthly = 350

    let givenMonth = +prompt("Berilgan oylikni kiriting: ")

    if (givenMonth > monthly) {
        result = ("Bu oy ko'proq oylik berildi!")
    }


    if (givenMonth < monthly) {
        result = (`Bu oy ${monthly - givenMonth} kamroq oylik berildi!`)
    }

    else {
        result = ("Odatiy oylik summasi berildi!")
    }
    document.querySelector("#result").innerHTML = result

}

