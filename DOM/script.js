// var a = document.querySelector("h1")
//  a.innerHTML = "change hogya"
//  a.style.color = "red"
//  a.style.backgroundColor = "black"
var b = document.querySelectorAll("h1")
 console.log(b)
var a = document.querySelector("#blub")
var btn = document.querySelector("button")

var flag = 0;

    btn.addEventListener("click", function(){
        if (flag == 0) {
            a.style.backgroundColor = "yellow"
            flag = 1 
        }else{
            a.style.backgroundColor = "white"
            flag = 0

        }
 })