async function collectTasks() {
    try {
    const apiUrl = ('https://wincacademydatabase.firebaseio.com/nils/tasks.json');
    const res = await fetch(apiUrl, { method: 'GET' })
    const processedRes = await res.json();
    let tasks = Object.keys(processedRes).map(key => ({
      id: key,
      description: processedRes[key].description,
      done: processedRes[key].done
  }));
    return tasks;
     } catch (err) {
        console.log(err);
    };
};
collectTasks();

// element.addEventListener("click", myFunction);

// function myFunction() {
//   alert ("Hello World!");
// }
const newTaskForm = document.querySelector('#new-task-form');
newTaskForm.addEventListener('submit', (e)=>postQuote(e))
function postQuote(e) {
    e.preventDefault();
    const newTask = document.querySelector('#new-task').value;

    const url = 'https://wincacademydatabase.firebaseio.com/nils/tasks.json';
    const addTask = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        description: newTask,
        done: false 
      })
    };
    fetch(url, addTask)
    .then(res => res.json())
    .then(decription => collectTasks([decription]))
   
};


