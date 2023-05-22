import { render } from "./index.js"

const checkRadio = ()=> {
    const radioInputEntry = document.querySelector("#radio-input-entry");
    const radioInputExit = document.querySelector("#radio-input-exit");
    const buttonEntry = document.querySelector(".modal__button-entry");
    const buttonExit = document.querySelector(".modal__button-exit");
    
    buttonEntry.addEventListener("click", ()=>{
        radioInputEntry.checked = true;
    })
  
    buttonExit.addEventListener("click", ()=>{
      radioInputExit.checked = true;
    })
    
    
  }

  const selectedButtonToggle = ()=>{
    const buttonEntry = document.querySelector(".modal__button-entry");
    const buttonExit = document.querySelector(".modal__button-exit");

    buttonEntry.addEventListener("click", ()=>{
        buttonEntry.classList.toggle("button__outline-selected");
        if(buttonEntry.classList.contains("button__outline-selected") && buttonExit.classList.contains("button__outline-selected")){
            buttonExit.classList.remove("button__outline-selected");
        }     
    })
 
    buttonExit.addEventListener("click", ()=>{
        buttonExit.classList.toggle("button__outline-selected");
        if(buttonExit.classList.contains("button__outline-selected") && buttonEntry.classList.contains("button__outline-selected")){
            buttonEntry.classList.remove("button__outline-selected");
        }         
    })
    
  }

export const handleFormValue = (arr) =>{
    const modal = document.querySelector(".modal__controller");
    const inputs = document.querySelectorAll("input");
    const buttonCancel = document.querySelector(".modal__button-cancel");
    const buttonInsert = document.querySelector(".modal__button-insert");
    const input = document.querySelector(".modal__input-value");
    const buttonEntry = document.querySelector(".modal__button-entry");
    const buttonExit = document.querySelector(".modal__button-exit");

    selectedButtonToggle();
    checkRadio();
    let newValues = {};
    buttonInsert.addEventListener("click", (e)=>{
        e.preventDefault();
        
        newValues.id = arr.length + 1;

        inputs.forEach(input =>{
            if(input.name === "value"){
                newValues.value = Number(input.value);
            }else if (input.type === "radio" && input.checked){
                newValues.categoryID = Number(input.defaultValue);
            }
        })
           
            buttonEntry.classList.remove("button__outline-selected");
            buttonExit.classList.remove("button__outline-selected");
            arr.push(newValues);
            newValues = {}; 
            render(arr.reverse());
            input.value = "";   
            modal.close();
    }) 

    buttonCancel.addEventListener("click", (e)=>{
        buttonEntry.classList.remove("button__outline-selected");
        buttonExit.classList.remove("button__outline-selected");
        inputs.forEach(input =>{
            if(input.type === "radio" && input.checked){
                input.checked = false;
            }
        })  
        e.preventDefault();
        input.value = "";
        console.log(inputs);
    })
}






