

function addTask(){

    const task = document.querySelector("#task").value;


    if(task==""){
        alert("Enter some task");
        return false
    }


    const alltask = document.querySelector(".alltask");
    const div=document.createElement('DIV');
    div.classList.add('task')
    const p=document.createElement('P')
    p.innerText=`${task}`;

    const button=document.createElement('BUTTON');
    button.innerText=`remove`;
    button.addEventListener("click",()=>{
        alltask.removeChild(div)
    })
    div.append(p);
    div.append(button)
    alltask.append(div)
    

}




