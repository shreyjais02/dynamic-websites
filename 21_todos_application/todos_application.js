let todoList = [{
        text: "Learn HTML",
    },
    {
        text: "Learn CSS",
    },
    {
        text: "Learn JavaScript",
    },
];

let taskList = document.getElementById("todoItemsContainer");
for (let i = 0; i < todoList.length; i++) {
    let div = document.createElement("div");
    let imgEl = document.createElement("img");
    imgEl.src = "https://s3.ap-south-1.amazonaws.com/new-assets.ccbp.in/frontend/loading-data/niat_dynamic_webapps/niat_coding_questions/objects_todo_list_delete_new.png";
    imgEl.classList.add("h-6", "w-6", "mr-3");
    div.appendChild(imgEl);
    div.classList.add("p-3", "text-[#0369a1]",
        "border-[#bae6fd]", "bg-[#f0f9ff]",
        "m-3", "border-2", "rounded-md", "font-bold", "flex",
        "flex-row");
    let li = document.createElement("li");
    li.textContent = todoList[i].text;
    let spanEl = document.createElement("span");
    div.appendChild(spanEl);
    div.appendChild(li);
    taskList.appendChild(div);
}