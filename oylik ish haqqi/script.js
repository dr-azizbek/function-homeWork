function func() {
    let monthly = 350

    let givenMonth = +prompt("Berilgan oylikni kiriting: ")

    if (givenMonth > monthly) {
        resut = ("Bu oy ko'proq oylik berildi!")
    }


    if (givenMonth < monthly) {
        resut = (`Bu oy ${monthly - givenMonth} kamroq oylik berildi!`)
    }

    else {
        resut = ("Odatiy oylik summasi berildi!")
    }
    document.querySelector("#result").innerHTML = result

}

