import { writable, type Writable } from "svelte/store";
// icons
import tickIcon from '$lib/assets/tick.svg'

// global states
export const taskDetailsVisible = writable(false);
export const currentTaskBlock = writable('');
export const editingCurrentTask = writable(false);
export let tasksData: Writable<{
  title: string;
  bgColor: string;
  items: {
      id: string;
      icon: string;
      title: string;
      tags: string[];
      priority: string;
      time: string;
  }[];
}[]> = writable([
  {
    title: 'todo', 
    bgColor: 'bg-blue-200',
    items: [
      {
        id: "1",
        icon: tickIcon,
        title: 'connect with team on zoom for discussion',
        tags: ['off track'],
        priority: 'No Priority',
        time: 'Today, 5:00 pm',
      },
      {
        id: "2",
        icon: tickIcon,
        title: '2 connect with team on zoom for discussion',
        tags: ['off track'],
        priority: 'No Priority',
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
export const titleValue = writable<string>();
export const tagsValue = writable<string>();
export const priorityValue = writable<string>();
export const timeValue = writable<string>();
export const currentTaskId = writable<string>();
