
import { render } from "./index.js";
import { insertedValues} from "./valuesData.js";

const filterButtons = (arr, id) => {
  const filteredElements = arr.filter(element => {
    if (element.categoryID === id || id === 2){
        return true;
    }else{
        return false;
    }
  });
  render(filteredElements);
};

export const handleButton = () => {
  const buttons = document.querySelectorAll(".button__outline");

  buttons.forEach(button => {
    button.addEventListener("click", (e) => {
      const buttonId = Number(e.target.dataset.buttonID);
      const filter = filterButtons(insertedValues, buttonId);
    });
  });
};









