let x = function(e){
    alert("hello world 1")
}

let y = function(e){
    alert("hello world 2")
}

btn.addEventListener('click',x)

btn.addEventListener('click',y)

 let a = prompt("enter your number")
if( a == "2"){
    btn.removeEventListener('click',x)
}




