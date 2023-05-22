export const handleModal = ()=>{
    const modal = document.querySelector(".modal__controller");
    const button = document.querySelector(".header__button-register");
    const buttonEmpty = document.querySelector(".empty__open-modal")

    button.addEventListener("click", ()=>{
        modal.showModal();
    })

    buttonEmpty.addEventListener("click", ()=>{
        modal.showModal();
    })
}

const creatModalCards = ()=>{
    const divTag = document.createElement("div")
    const section1 = document.createElement("section");
    const h2Tag = document.createElement("h2");
    const buttonClose = document.createElement("button");
    const section2 = document.createElement("section");
    const paragraph = document.createElement("p");
    const formTag1 = document.createElement("form");
    const labelTag1 = document.createElement("label");
    const inputTag1 = document.createElement("input");
    const formTag2 = document.createElement("form");
    const divTag2 = document.createElement("div");
    const h3Tag = document.createElement("h3")
    const inputTag2 = document.createElement("input");
    const labelTag2 = document.createElement("label");
    const inputTag3 = document.createElement("input");
    const labelTag3 = document.createElement("label");
    const divTag3 = document.createElement("div");
    const buttonCancel = document.createElement("button");
    const buttonInsert = document.createElement("button");

    divTag.className = ("modal__container");

    section1.className = ("modal__register")

    h2Tag.className = ("title-2-bold");
    h2Tag.innerText = "Registro de valor"

    buttonClose.classList.add("modal__button-close", "text-1-regular");
    buttonClose.innerText = "X";

    paragraph.className = ("text-1-regular");
    paragraph.innerText = "Digite o valor e em seguida aperte no botão referente ao tipo do valor";

    formTag1.className = "modal__form-value";

    labelTag1.className = "text-1-medium";
    labelTag1.for = "value";
    labelTag1.innerText = "Valor";

    inputTag1.className = "modal__input-value";
    inputTag1.type = "number";
    inputTag1.id = "value";
    inputTag1.name = "value";
    inputTag1.placeholder = "R$ 00,00";

    formTag2.className = "modal__form-type";

    divTag2.className = "modal__input-type";
    
    h3Tag.className = "text-1-medium";
    h3Tag.innerText = "Tipo de valor";

    inputTag2.type = "radio";
    inputTag2.hidden = true;
    inputTag2.id = "radio-input-entry";
    inputTag2.value = "0";
    inputTag2.name = "categoryID";

    labelTag2.classList.add("modal__button-entry", "button__outline-modal");
    labelTag2.tabIndex = "0";
    labelTag2.htmlFor = "radio-input-entry"
    labelTag2.innerText = "Entrada";

    inputTag3.type = "radio";
    inputTag3.hidden = true; 
    inputTag3.id = "radio-input-exit";
    inputTag3.value = "1";
    inputTag3.name = "categoryID";
    
    labelTag3.classList.add("modal__button-exit", "button__outline-modal");
    labelTag3.tabIndex = "0";
    labelTag3.htmlFor = "radio-input-exit";
    labelTag3.innerText = "Saida";

    divTag3.className = "modal__buttons-container";

    buttonCancel.classList.add("modal__button-cancel", "button__greylow");
    buttonCancel.type = "submit";
    buttonCancel.innerText = "Cancelar"
    
    buttonInsert.classList.add("modal__button-insert", "button__primary");
    buttonInsert.type = "submit";
    buttonInsert.innerText = "Inserir"
    
    section1.append(h2Tag, buttonClose);
    section2.appendChild(paragraph);
    formTag1.append(labelTag1, inputTag1);
    divTag2.append(h3Tag, inputTag2, labelTag2, inputTag3, labelTag3);
    divTag3.append(buttonCancel, buttonInsert);
    formTag2.append(divTag2, divTag3);
    divTag.append(section1,section2, formTag1, formTag2);
    
    return divTag;
}



export const closeModal = ()=>{
    const modal = document.querySelector(".modal__controller");
    const button = document.querySelector(".modal__button-close");
    const buttonEntry = document.querySelector(".modal__button-entry");
    const buttonExit = document.querySelector(".modal__button-exit");
    const input = document.querySelector(".modal__input-value");

    button.addEventListener("click", ()=>{
        buttonEntry.classList.remove("button__outline-selected");
        buttonExit.classList.remove("button__outline-selected");
        input.value = "";    
        modal.close();
    })
}


export const renderModal = ()=>{
    const modal = document.querySelector(".modal__controller");
    const modalCard = creatModalCards();

    modal.appendChild(modalCard);
}



