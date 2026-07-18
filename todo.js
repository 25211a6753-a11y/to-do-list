const detail = document.getElementById("details");
const btn = document.getElementById("btn");
const text = document.getElementById("text");
const inputs = document.getElementById("inputs");

const progress = document.getElementById("progressbar");
const numbers = document.getElementById("Numbers");

function updateProgress(){

    const total = inputs.children.length;

    const completed =
    inputs.querySelectorAll("input[type='checkbox']:checked").length;

    let percent = 0;

    if(total>0){

        percent=Math.round((completed/total)*100);

    }

    progress.value=percent;

    numbers.textContent=percent+"%";

}

btn.addEventListener("click",function(){

    if(detail.value.trim()==""){

        text.textContent="Enter a task!";
        text.style.color="red";
        return;

    }

    const box=document.createElement("div");
    box.className="task-box";

    const check=document.createElement("input");
    check.type="checkbox";

    const task=document.createElement("span");
    task.className="task-text";
    task.textContent=detail.value;

    const complete=document.createElement("button");
    complete.className="complete-btn";
    complete.textContent="✅";

    const del=document.createElement("button");
    del.className="delete-btn";
    del.textContent="🚮";

    check.addEventListener("change",function(){

        if(check.checked){

            task.style.textDecoration="line-through";
            task.style.color="gray";

        }

        else{

            task.style.textDecoration="none";
            task.style.color="white";

        }

        updateProgress();

    });

    complete.addEventListener("click",function(){

        if(check.checked){

            alert("🎉 Task Completed!");

        }

        else{

            alert("First check the checkbox.");

        }

    });

    del.addEventListener("click",function(){

        box.remove();

        updateProgress();

    });

    box.appendChild(check);
    box.appendChild(task);
    box.appendChild(complete);
    box.appendChild(del);

    inputs.appendChild(box);

    detail.value="";

    text.textContent="Task Added Successfully!";
    text.style.color="green";

    updateProgress();

});