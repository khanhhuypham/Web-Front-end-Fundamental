function clickMe() {
    console.log("asdsad")
    let result = confirm("Bạn đã đủ 18 tuổi chưa");

    if (result === true) {

        document.getElementById("add").textContent = "Bạn đã đủ 18";
    } else {
        document.getElementById("add").textContent = "Bạn chưa đủ 18";
    }
}