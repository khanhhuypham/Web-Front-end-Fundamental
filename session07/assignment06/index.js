function calculateFahrenheit(){
    let celsius = document.getElementById("celsius").value;
    
    console.log("pham khanh huy")
    if (celsius == ""){
        alert("Vui lòng nhập độ C (celsius)")
    }else{
        document.getElementById("result").innerHTML = (celsius*(9/5)) + 32
    }
}