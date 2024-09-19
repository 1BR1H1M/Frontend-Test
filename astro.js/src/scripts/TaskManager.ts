export function taskManager() {
    return {
      newTask: '',
      tasks: JSON.parse('<?= JSON.stringify(tasks) ?>'),
  
      async addTask() {
        const inputElement = document.querySelector('[x-model="newTask"]') as HTMLInputElement;
        const taskText = inputElement ? inputElement.value : '';
        const response = await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: taskText, done: false })
        });
        if (response.ok) {
          this.newTask = ''; // Clear input after adding task
          this.tasks.push({ text: taskText, done: false }); // Add task to the local list
        }
      }
    }
  }
  