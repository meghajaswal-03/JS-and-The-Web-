// Task 1: Use innerText to change the content
document.getElementById("task1").innerText = "Changed using 'innerText'.";

// Task 2: Use innerHTML to add a submit button 
document.getElementById("task2").innerHTML = "<button type='submit'>Submit</button>";

// Task 3: Change the background color 
document.body.style.backgroundColor = "#232323";

// Task 4: Give all elements a border
document.querySelectorAll("*").forEach(element => {
    element.style.border = "1px solid #000";
});

// Task 5: Change the href attribute of a link
document.getElementById("task5").href = "https://www.springboard.com/";

// Task 6: Change the input value
document.getElementById("task6").value = "DOM Master";

//  Task 7: new class 
document.getElementById("task7").classList.add("new-class");

// Task 8: Append a new button 
const newButton = document.createElement("button");
newButton.type = "button";
newButton.innerText = "New Button";
document.getElementById("task8").appendChild(newButton);    

// Task 9: Remove an element 
document.getElementById("task9").remove();
