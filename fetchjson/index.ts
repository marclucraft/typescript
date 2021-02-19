import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/2';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then(response => {
	const todo = response.data as Todo;
	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	logToConsole(id, title, completed);
});

function logToConsole(id: number, title: string, completed: boolean) {
	console.log(`
  The todo with id: ${id}
  Has a title of: ${title}
  Is it completed? ${completed}
 `);
}
