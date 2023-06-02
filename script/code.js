const input = document.querySelector("#displayInput");
const sort = document.querySelector("#sort");
const addItem = document.querySelector("#addItem");
const output = document.querySelector("#item-list");
const itemName = [];
//set on local storage
localStorage.setItem("items", JSON.stringify(itemName))

//add
input.addEventListener("click", (e) => {
    e.preventDefault();
    if (addItem.value) {
      itemName.push(addItem.value);
      addItem.value = ""
    } else {
      addItem.style = "outline: 3px solid red;";
    }
     //Update
     localStorage.setItem("items",JSON.stringify (itemName))
  })

//display
input.addEventListener("click", () => {
    itemName = JSON.parse (localStorage.getItem("items"))
    itemName.forEach((items) =>{
      output.innerHTML += `
      <li><input type="checkbox">${items}</li>
      `
    })
})

// let array = [
// {
//     id:1,
//     name:"${'text'}",
//     createdDate: "${''}",
//     completed: "${''}",
// }
// ]
