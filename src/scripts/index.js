import { valuesCategory, insertedValues} from "./valuesData.js"
import {handleModal, renderModal, closeModal} from "./modal.js"
import { handleFormValue} from "./form.js";
import { handleButton } from "./filter.js";

const creatButtonFilter = () =>{
    const ulTag = document.querySelector(".filter__list");

    const liTagAll = document.createElement("li");
    const buttonAll = document.createElement("button");
    const liTagEntry = document.createElement("li");
    const buttonEntry = document.createElement("button");
    const buttonExit = document.createElement("button");
    const liTagExit = document.createElement("li");

    buttonAll.innerText = "Todos";
    buttonAll.className = "button__outline";
    buttonAll.dataset.buttonID = 2;

    buttonEntry.innerText = "Entradas";
    buttonEntry.className = "button__outline";
    buttonEntry.dataset.buttonID = 0;

    buttonExit.innerText = "Saidas";
    buttonExit.className = "button__outline";
    buttonExit.dataset.buttonID = 1;

    liTagAll.appendChild(buttonAll);
    liTagEntry.appendChild(buttonEntry);
    liTagExit.appendChild(buttonExit);
    ulTag.append(liTagAll,liTagEntry,liTagExit);
}

const creatCards = (element)=>{
    const ulTag = document.createElement("ul");
    const liTag = document.createElement("li");
    const spanTag = document.createElement("span");
    const divTag = document.createElement("div");
    const spanTag2 = document.createElement("span");
    const imgTag = document.createElement("img");

    ulTag.className = ("values__content");

    liTag.className = ("values__list");
    
    spanTag.className = ("text-2-regular");
    spanTag.innerHTML =  `R$ ${element.value.toFixed(2)}`
    
    spanTag2.className = ("button__greylow");
    spanTag2.innerHTML = valuesCategory[element.categoryID];

    imgTag.dataset.elementId = element.id;
    imgTag.className = "values__trash"; 
    imgTag.src = "./src/assets/img/trash.png";
    imgTag.alt = "trash-icon";

    divTag.append(spanTag2, imgTag);
    liTag.append(spanTag, divTag);
    ulTag.appendChild(liTag);

    return ulTag;
}

const sumValue = (arr) => {
    const spanSum = document.querySelector(".sum__container > span");
    
    const totalValue = arr.reduce((acc, element) => {
        if(element.categoryID === 1){
            return acc - element.value;
        } else if (element.categoryID === 0){
            return acc + element.value;
        } 
    }, 0); 
    
    if(arr.length === 0){
        spanSum.innerHTML = "R$0,00";
    } else {
        spanSum.innerHTML = `R$ ${totalValue.toFixed(2)}`;
    }   
}


const deleteButtonHover = () => {
    const imgElements = document.querySelectorAll(".values__trash");
  
    imgElements.forEach(imgElement => {
      imgElement.addEventListener("mousedown", () => {
        imgElement.src = "./src/assets/img/trashHover.png";
      });
  
      imgElement.addEventListener("mouseup", () => {
        imgElement.src = "./src/assets/img/trash.png";
      });
    });
  }

const handleDeleted = (arr)=>{
    const buttons = document.querySelectorAll(".values__trash");
    
    buttons.forEach( button =>{
        button.addEventListener("click", (e)=>{
            const elementId = e.target.dataset.elementId;
            const findElementIndex = arr.findIndex(element => element.id === Number(elementId));
            const removeElement = arr.splice(findElementIndex, 1);

            render(arr);
        })
    })
}

const emptyValues = (arr)=>{
    const emptySection = document.querySelector(".empty_container");
    
    if(arr.length == ""){
       emptySection.style.display = "flex"; 
    }else{
        emptySection.style.display = "none";
    }
}

export const render = (arr)=>{
    const sectionValues = document.querySelector(".values__container");
    sectionValues.innerHTML = "";

    arr.forEach(element => {
        const cards = creatCards(element);
        sectionValues.appendChild(cards)
    });

    sumValue(arr);
    deleteButtonHover();
    handleDeleted(arr);
    emptyValues(arr);  
}

creatButtonFilter();
handleModal();
renderModal();
closeModal();
render(insertedValues);
handleFormValue(insertedValues);
handleButton(); 
















