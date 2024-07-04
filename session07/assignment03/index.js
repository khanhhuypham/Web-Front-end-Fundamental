



function calculateSquare(){
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;

    if (width == ""){
        alert("Vui lòng nhập chiều rộng hình chữ nhật")
    }else if (height == ""){
        alert("Vui lòng nhập chiều dài hình chữ nhật")
    }else{
        document.getElementById("result").innerHTML = width*height
    }

}