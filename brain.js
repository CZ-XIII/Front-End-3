const Counter = document.getElementById("taskCounter");
const Task = document.getElementById("task");
const List = document.getElementById("list")
const form = document.getElementById("form");
let count = 0;
form.addEventListener("submit", function(e) {
    e.preventDefault();
    const TaskValue = Task.value;
    if (TaskValue.trim() == "") {
        return;
    }
    const tskList = document.createElement("li");

    const checkBox = document.createElement("input")
    checkBox.type = "checkbox";
    tskList.appendChild(checkBox);

    const taskText = document.createElement("span");
    taskText.textContent = TaskValue;

    tskList.appendChild(taskText);

    const delButton = document.createElement("button");
    delButton.innerHTML = "Delete";
    tskList.appendChild(delButton);

    delButton.addEventListener("click", function() {
        tskList.remove();
        if (!checkBox.checked) {
            count -= 1;
            Counter.innerHTML = `<strong>Jumlah task yg belum selesai: ${count}</strong>`;
        }
    })

    checkBox.addEventListener("change", function() {
        if (checkBox.checked) {
            taskText.style.textDecoration = "line-through";
            count -=1;
            taskText.classList.add("Done");
        }
        else {
            taskText.style.textDecoration = "none";
            count += 1;
            taskText.classList.remove("Done");
        }
        Counter.innerHTML = `<strong>Jumlah task yg belum selesai: ${count}</strong>`;
    })
    List.appendChild(tskList);
    Task.value = "";
    
    count++;
    Counter.innerHTML = `<strong>Jumlah task yg belum selesai: ${count}</strong>`;
})