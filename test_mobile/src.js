//touchstert
//touchmove
//tochend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded',function () {
    let box = document.querySelector('.box');

/*
    box.addEventListener('touchstart',function(e){
        e.preventDefault();
        console.log("Red box:touchstart");
        console.log(e.target);
        console.log(e.touches[0].target);
        console.log(e.changedTouches);
        console.log(e.targetTouches);
    });
    */
    
    box.addEventListener('touchmove',function(e){
        e.preventDefault();
        console.log("Red box:" + e.touches[0].pageX);

});

//new RegExp('pattern','flags');
// /pattern/ 
   

// i
// g
// m




});
 /*   
    box.addEventListener('touchend',function(e){
        e.preventDefault();
        console.log("Red box:touchend");

    });



})




let ans = prompt ('Видите ваше имя');

let reg = /n/ig;


console.log(reg.test(ans));



  let pass = prompt ('Введитк пароль ');
  console.log(pass.replace(/./g,"*"));
  alert("12-34-56".replace(/-/g,':'));
  
 let ans = prompt ('Видите число');

let reg = /\d/g;
console.log (ans.match(reg));


let str = 'My name is R2D2';
console.log(str.match())

let timerId = setInterval(sayHello,3000);
clearTimeout(timerId);

function sayHello () {
    console.log("hello world");
}

*/
 let timerId= setTimeout