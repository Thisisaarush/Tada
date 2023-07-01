import { writable, type Writable } from "svelte/store";

  // icons
  import tickIcon from '$lib/assets/tick.svg'
  import doingIcon from '$lib/assets/doing.svg'
  import greenTick from '$lib/assets/greenTick.svg'

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
        title: 'Add Tasks By Clicking on + button',
        tags: ['tags-here'],
        priority: 'priority',
        time: `${new Date()}`,
      },
    ]
  },
  {
    title: 'doing', 
    bgColor: 'bg-yellow-200',
    items: [
      {
        id: "2",
        icon: doingIcon,
        title: 'Add Tasks By Clicking on + button',
        tags: ['tags-here'],
        priority: 'priority',
        time: `${new Date()}`,
      },
    ]
  },
  {
    title: 'done', 
    bgColor: 'bg-green-300',
    items: [
      {
        id: "3",
        icon: greenTick,
        title: 'Add Tasks By Clicking on + button',
        tags: ['tags-here'],
        priority: 'priority',
        time: `${new Date()}`,
      },
    ]
  },
]);
export const titleValue = writable<string>();
export const tagsValue = writable<string>();
export const priorityValue = writable<string>();
export const timeValue = writable<string>();
export const currentTaskId = writable<string>();
