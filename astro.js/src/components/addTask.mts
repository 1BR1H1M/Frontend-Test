function addTask() {
    const taskText = (document.querySelector('[x-model="newTask"]') as HTMLInputElement).value;
fetch('http://localhost:3000/tasks', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ text: taskText, done: false })
})
.then(response => {
if (response.ok) {
window.location.reload();
}
});
}
