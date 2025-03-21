let display=document.getElementById('inputBox'); //inputBox is id
let buttons=document.querySelectorAll('button');
let buttonsArray=Array.from(buttons);//all buttons made into an array

let string = ' ';

buttonsArray.forEach(btn => { //from array to single-single variable(each button)

    btn.addEventListener('click',function(event) { //whenever clicked click event is passed
        if(event.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);//to delete single when DEL pressed from last
            display.value=string;
        }

        else if(event.target.innerHTML=='AC'){
           string=''; //complete delete
           display.value=string;
        }
        else if(event.target.innerHTML=='='){
            //eval converts string to number and evaluates it and gives us ans
            string = eval(string);
            display.value=string;
         }
       else {
      string += event.target.innerHTML; // value goes in string
       display.value=string;//value in string goes inside input box
      }
    });
});
