let a = ""; //first number
let b = "";  //second number
let oper = ""; //operators
let finish = false;

const digit = ["0","1","2","3","4","5","6","7","8","9","."];
const action = ["-","+","*","/","%","+/-"];


const out = document.querySelector('.calc_screen p');
   function clearAll (){
    a = "";
    b = "";
    oper = "";
    finish = false;
    out.textContent = 0;
   }
document.querySelector('#ac').onclick = clearAll;
 
document.querySelector(".calc_buttons").onclick = (event) =>{

    if(!event.target.classList.contains("btn"))return;
    
    if(event.target.classList.contains("ac"))return;

    out.textContent = " ";
    const key = event.target.textContent;

    if(digit.includes(key)){
        if(b === "" && oper === ""){
        a += key;
    
       out.textContent = a;
    }
    else if (a!== '' && b!== '' && finish){
        b = key;
        finish = false;
        out.textContent = b;

    }
    else{
        b+=key;
        out.textContent = b;
    }
    console.table(a,b,oper);
      return;
    }
    
    if(action.includes(key)){
        oper = key;
        out.textContent = oper;
        return;
    }

    if (key === '='){
        if(b === ""){
            b = a;
        }
        switch(oper){
            case "+":
                a = (+a)+(+b);
                break;
            case "-":
                a = a - b;
                break;  
            case "*":
                a = a * b;
                break;
            case "/":
                a = a / b;
                break;
            case "%":
                a = a  / 100;
                break;
            case "+/-":
                a = -a;
                break;    
        }
        finish = true;
        out.textContent = a;
        console.table(a,b, oper);
    }

   
}


