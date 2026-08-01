let display = document.getElementById("display");

function appendValue(value){

    display.value += value;

}

function clearDisplay(){

    display.value = "";

}

function deleteLast(){

    display.value = display.value.slice(0,-1);

}

function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

    }

}

document.addEventListener("keydown",function(event){

    let key = event.key;

    if(!isNaN(key) || "+-*/.%".includes(key)){

        display.value += key;

    }

    else if(key==="Enter"){

        calculate();

    }

    else if(key==="Backspace"){

        deleteLast();

    }

    else if(key==="Escape"){

        clearDisplay();

    }

});