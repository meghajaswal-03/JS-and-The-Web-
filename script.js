document.addEventListener("DOMContentLoaded", function() {
    // Step 2: get elements 
    const boxContainer = document.getElementById("box-container");
    const newBoxButton = document.getElementById("new-box-button");
    const colorForm = document.getElementById("color-form");
    const colorInput = document.getElementById("color-input");

    // Step 3: Create variables to store the box container and new box ID 
    let boxColor = "null";
    let boxIDCounter = 0;
    
    // Step 4: Get the color 
    function addNewBox() {
        const box = document.createElement("div");
        box.className = "box";
        box.style.backgroundColor = boxColor;
        box.textContent = ++boxIDCounter;
        boxContainer.appendChild(box);
        boxIDCounter++; 
    }

    colorForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newColor = colorInput.value;
        boxColor = colorInput.value;
        document.querySelectorAll(".box").forEach(function(box) {
            box.style.backgroundColor = boxColor;
        });
    });
    newBoxButton.addEventListener("click", addNewBox);
    document.addEventListener("dblclick", function(event) {
        if (event.target.classList.contains("box")) {
            event.target.remove();
        }
    }); 

    document.addEventListener("mouseover", function(event) {
        if (event.target.classList.contains("box")) {
            event.target.style.border = "2px solid #000";
        }
    });
    document.addEventListener("mouseout", function(event) {
        if (event.target.classList.contains("box")) {
            event.target.style.border = "none";
        }
    }); 

    window.addEventListener("keydown", function(event) {
        if (event.key === "Delete") {
            const selectedBox = document.querySelector(".box.selected");
            if (selectedBox) {
                selectedBox.remove();
            }
        }
    }); 
});