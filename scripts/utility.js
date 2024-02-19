
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-[#1DD100]");
  }
  
  function getTotalPriceById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const price = parseInt(elementValueText);
    return price;
  }
  function setTotalPriceById(elementId, price) {
    const element = document.getElementById(elementId);
    element.innerText = price;
  }


  function getGrandTotalPriceById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const price = parseInt(elementValueText);
    return price;
  }
  function setGrandTotalPriceById(elementId, price) {
    const element = document.getElementById(elementId);
    element.innerText = price;
  }




