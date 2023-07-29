import { it } from 'vitest';
import { screen, render } from '@testing-library/vue';
import TodoList from './ToDoList.vue';

it('should render a list of items based on props', async () => {
	const items = [
		{ id: 1, text: 'Item 1' },
		{ id: 2, text: 'Item 2' },
		{ id: 3, text: 'Item 3' },
	];

	const props = {
		items,
	}

	render(TodoList, { props });
	items.forEach((item) => {
		screen.getByText(item.text);
	})
})
