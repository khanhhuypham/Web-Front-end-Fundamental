const pi = 3.14


function calculateCircumference(){
    let radius = Number(document.getElementById('radius').value)
  
    if (radius == 0){
        alert("Vui lòng nhập bán kính hình tròn")
    }else{
        document.getElementById("resultOfCircumference").innerHTML = 2*pi*radius
    }

}


function calculatePerimeter(){
    let width = Number(document.getElementById('width').value)
    let length = Number(document.getElementById('length').value)


    console.log(width)

    if (width == 0){
        alert("Vui lòng nhập chiều rộng hình chữ nhật")
    }else if (length == 0){
        alert("Vui lòng nhập chiều dài hình chữ nhật")
    }else{
        document.getElementById("resultOfPerimeter").innerHTML = (width+length)*2
    }

    console.log(width*2+length*2)
}


function calculateArea(){
    let width = Number(document.getElementById('width').value)
    let length = Number(document.getElementById('length').value)


    if (width == 0){
        alert("Vui lòng nhập chiều rộng hình chữ nhật")
    }else if (length == 0){
        alert("Vui lòng nhập chiều dài hình chữ nhật")
    }else{
        document.getElementById("resultOfArea").innerHTML = width*length
    }
}