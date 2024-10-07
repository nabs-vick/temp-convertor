let toFahrenheit = document.getElementById("toFahrenheit");
let toCelcius = document.getElementById("toCelsius");
let textbox = document.getElementById("textbox");
let result = document.getElementById("result");
let temp;



function convert(){
    if(toFahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp*9/5 + 32;
        // result = newTemp.toFixed(1);
        result.textContent = temp.toFixed(2) +"F";
    }
    else if(toCelcius.checked){
        temp = Number(textbox.value);
        temp = temp * 5/9 - 32;
        result.textContent = temp.toFixed(2) + "C";

    }
    else{
        result.textContent = "select a unit";
    }
    
}