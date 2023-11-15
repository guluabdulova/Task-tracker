


const taskList=document.querySelector('.result');
const addBtn = document.querySelector('.add-button')
const inputEl = document.querySelector('.input-field')

let isAscending = true; 

taskList.style.display = 'none';



const sortBtn = document.querySelector('.sort-button')

const downArrow = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none">
<rect x="5" y="15" width="2.5" height="12.5" transform="rotate(-180 5 15)" fill="#C4C4C4"/>
<rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)" fill="#C4C4C4"/>
<rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)" fill="#C4C4C4"/>
<rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)" fill="#C4C4C4"/>
<path d="M3.75 6.55671e-07L6.99759 4.6875L0.502404 4.6875L3.75 6.55671e-07Z" fill="#C4C4C4"/>
</svg>`


const upArrow = `<svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.5" width="2.5" height="12.5" fill="#C4C4C4"/>
<rect x="10" y="3.75" width="2.5" height="7.5" transform="rotate(-90 10 3.75)" fill="#C4C4C4"/>
<rect x="10" y="8.75" width="2.5" height="10" transform="rotate(-90 10 8.75)" fill="#C4C4C4"/>
<rect x="10" y="13.75" width="2.5" height="15" transform="rotate(-90 10 13.75)" fill="#C4C4C4"/>
<path d="M3.75 15L0.502405 10.3125L6.9976 10.3125L3.75 15Z" fill="#C4C4C4"/>
</svg>
`
sortBtn.innerHTML = downArrow;


sortBtn.addEventListener('click', () => {
   
    const tasks = Array.from(taskList.children).sort((a, b) => {
      if (isAscending) {
        return a.textContent.localeCompare(b.textContent);
      } else {
        return b.textContent.localeCompare(a.textContent);
      }
    });


 tasks.forEach(task => taskList.appendChild(task));


 isAscending = !isAscending;
 sortBtn.innerHTML = isAscending ? downArrow : upArrow;
});


addBtn.addEventListener('click', () => {


    if (inputEl.style.display === 'none') {
        inputEl.style.display = 'block';
        taskList.style.display = 'none'
        return false;
    }
    taskList.innerHTML += `<li class="taskElement">${inputEl.value} 
    <svg class="deleteIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke="#C4C4C4"/>
    <path d="M6 6L14 14" stroke="#C4C4C4"/>
    <path d="M6 14L14 6" stroke="#C4C4C4"/>
    </svg>
    </li>`

    if (!inputEl.value) {
        return false;
    }
        
    taskList.style.display = 'block'
    inputEl.style.display = 'none'
    inputEl.value = '';
    document.querySelectorAll('.deleteIcon').forEach(el => {
        el.addEventListener('click', e => {
            console.log(e.target.parentElement.parentElement.children.length);
            if (e.target.parentElement.parentElement.children.length === 1) {
                taskList.style.display = 'none'
                inputEl.style.display = 'block'
            }
            e.target.parentElement.remove();
        })
    })


    
})







