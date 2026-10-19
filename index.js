//الفرق لبين var و let و const
// var لايوجد scope: يمكن إعادة تعيين القيمة وتغيير نوع البيانات
// let:  يوجدscopeيمكن إعادة تعيين القيمة ولكن لا يمكن تغيير نوع البيانات
// const: لا يمكن إعادة تعيين القيمة ولا يمكن تغيير نوع البيانات
//ex
//{
   // let x=1;
   // var z=2;
//}

//console.log(x); // ReferenceError: x is not defined

//let lst=[1,2,3,4]
//for(let i=0;i<4;i++){
   // var x=+lst[i];
   // console.log(x);
//}
//alert("hi")
//prompt("enter your name")
//var name=prompt("enter your name")
//console.log(name)
//document.getElementById("pt").style.color="red"

let liest=document.getElementById("lt")
let btn= document.getElementById("bt")

btn.addEventListener("click",function(){
   setTimeout(function(){
   let newitme=document.createElement("li")
   newitme.textContent="javascript"
   liest.append(newitme)
},3000)
})
let darkModeBtn = document.getElementById("dark-mode-btn");
let lightModeBtn = document.getElementById("light-mode-btn");
darkModeBtn.addEventListener("click", function() {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
});
lightModeBtn.addEventListener("click", function() {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
});