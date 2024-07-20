const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");
const button = document.querySelector("#button");
const total = document.querySelector("#totalPrice");
const totalQty = document.querySelector("#quantityToBuy");
const circle = document.querySelector("#color-circle");

button.addEventListener("click", () => {
  let color = select.value;
  circle.style.backgroundColor = color;
  total.textContent = formatPrice(parseInt(price.textContent) * parseInt(quantity.value));
  totalQty.textContent = quantity.value;
});

//the product has a different price deppending on the color chosen
const select = document.querySelector("#selectColor");
select.addEventListener("change", () => {
  switch (select.value) {
    case "red":
      price.textContent = "900";
      break;
    case "black":
      price.textContent = "900";
      break;
    case "blue":
      price.textContent = "900";
      break;
    case "pink":
      price.textContent = "900";
      break;
  }
});

function formatPrice(num) {
  typeof num === "number" ? (str = num.toString()) : (str = num);
  let newStr = "";
  let count = 0;
  let i = 0;
  while (i < str.length) {
    if (count === 3) {
      newStr = "." + newStr;
      count = 0;
    }
    count++;
    i++;
    newStr = str[str.length - i] + newStr;
  }
  return newStr;
}