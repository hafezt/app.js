

    
    const itemForm = document.getElementById("item-form");
    const itemInput = document.getElementById("item-input");
    const itemList = document.getElementById("items");

    itemForm.addEventListener("submit", function (e) {
      e.preventDefault();

      
      const newItemText = itemInput.value.trim();

    
      if (newItemText !== "") {
    
        const newItem = document.createElement("li");
        newItem.className = "list-group-item font-weight-bold";
        newItem.style.backgroundColor = "";
        
        
        itemList.appendChild(newItem);

        
        itemInput.value = "";

        
        newItem.textContent = newItemText;

        
        if (itemList.children.length === 3) {
          newItem.style.backgroundColor = "green";
        }
      }
    });
