var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;

var taskFormHandler = function(event) {

    //this will tell the browser not to automatically reload the page when the form is submitted
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //check if input values are empty strings(form input validation)
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    formEl.reset(); //resets the form to default value after user submits a response

    //send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //add task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

    //increase task counter for next unique id
    taskIdCounter++;
}

formEl.addEventListener("submit", taskFormHandler); {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
}
