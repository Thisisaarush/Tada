import { writable } from "svelte/store";
// icons
import tickIcon from '$lib/assets/tick.svg'

// global states
export const taskDetailsVisible = writable(false);
export const currentTaskBlock = writable('');
export let tasksData = writable([
  {
    title: 'todo', 
    bgColor: 'bg-blue-200',
    items: [
      {
        id: "1",
        icon: tickIcon,
        title: 'connect with team on zoom for discussion',
        tags: ['medium', 'off track'],
        time: 'Today, 5:00 pm',
      },
      {
        id: "2",
        icon: tickIcon,
        title: '2 connect with team on zoom for discussion',
        tags: ['easy', 'off track'],
        time: 'Today, 6:00 pm',
      }
    ]
  },
  {
    title: 'doing', 
    bgColor: 'bg-yellow-200',
    items: []
  },
  {
    title: 'done', 
    bgColor: 'bg-green-300',
    items: []
  },
]);
