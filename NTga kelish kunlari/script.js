// let weeks = prompt("Haftani kiriting:")
// let group = +prompt("Guruhni kiriting:")
function weekss() {
    let weeks = prompt("Haftani kiriting:")
    let group = +prompt("Guruhni kiriting(n-guruh):")
    if ((weeks == "Dushanba" || weeks == "dushanba" || weeks == "Chorshanba" || weeks == "chorshanba" || weeks == "Juma" || weeks == "juma") && group == "79-guruh") {
        result = "Sizning darsga keladigan kuninggiz ekan."
    }
    else{ 
        result = "Sizning bugun darsinggiz yoq ekan"
    }
    
    document.getElementById("result").innerHTML = result
}
