var box = document.getElementById("box");
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var button4 = document.getElementById("button4")
button1.onclick = function(){
    document.getElementById("box").style.height = "250px"
    document.getElementById("box").style.width = "250px"
}
button2.onclick = function(){
    document.getElementById("box").style.backgroundColor = "blue"
} 
button3.onclick = function(){
    document.getElementById("box").style.opacity = "0.3"
}
button4.onclick = function(){
    document.getElementById("box").style.backgroundColor = "orange"
    document.getElementById("box").style.opacity = ""
    document.getElementById("box").style.height = "150px"
    document.getElementById("box").style.width = "150px"
}