const logTasks = async () => {
  let tasksToDo = await collectTasks();
  console.log(tasksToDo)
  const taskList = document.querySelector('#taskList');
  tasksToDo.forEach((task) => {
    const listItem = document.createElement('li');
    // console.log(listItem)
    const deleteBtn = document.createElement('button')
    const listItemContent = document.createTextNode('Ik moet nog: ' + task.description);
    listItem.appendChild(listItemContent);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    deleteBtn.className = 'remove'
    deleteBtn.dataset.id = task.id
    deleteBtn.innerHTML = 'Done';
    deleteBtn.addEventListener('click', () => deleteTask())
    function deleteTask(){
      const url = `https://wincacademydatabase.firebaseio.com/nils/tasks/${task.id}.json`;
      const removeTask = { method: 'DELETE' };
      fetch(url, removeTask)
      .then( listItem.remove() )
    }
 

    
  });
};

logTasks();

