const keys=document.querySelector(".calc-keys")
let currentOperand=document.querySelector(".current-operand")
let previousOperand=document.querySelector(".previous-operand")

keys.addEventListener("click",(event)=>{
    let target=event.target
    if(!target.matches("button")){return false;}
    if(target.value==="=") {
        if(currentOperand.innerText===""){alert("please, Enter a number")}
        else{
        try{
            
            let result=eval(currentOperand.innerText)
            currentOperand.innerText += target.value
            previousOperand.innerText=currentOperand.innerText
            currentOperand.innerText = result
            currentOperand.style.fontSize="25px"
            
        }
        catch(e){ 
            alert("Error")
            currentOperand.innerText=""
             
        } }  
    }else if(target.value==="ac"){
      currentOperand.innerText =currentOperand.innerText.slice(0, -1)
        
    }else if(target.value==="del"){
        previousOperand.innerText=""
        currentOperand.innerText=""
    }
    
    else{
     
        function getlength(number) {
        return number.toString().length;
        }
        if(getlength(currentOperand.innerText)>30){
            alert("Sorry, it is a huge operation")
        }
        else{
        currentOperand.innerText += target.value 
        }
    }  
})
