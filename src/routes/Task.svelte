<script lang='ts'>
	import clockIcon from '$lib/assets/clock.svg'
  import moment from 'moment'

  // states
  import { tasksData, taskDetailsVisible, titleValue, tagsValue, priorityValue, timeValue, currentTaskId, editingCurrentTask } from './stores.js'

  // props
  export let id: string;
  export let icon: string;
  export let title: string;
  export let tags: string[];
  export let priority: string;
  export let time: string;
  export let taskIndex: number
  export let itemIndex: number

  const handleDragStart = (e: any, taskIndex: number, itemIndex: number) => {
    const data = {taskIndex, itemIndex};
    e.dataTransfer.setData('text/plain', JSON.stringify(data))
  }

  const handleTaskDetails = () => {
    taskDetailsVisible.set(true)
    currentTaskId.set(id)
    editingCurrentTask.set(true)
    if ($tasksData[taskIndex].items[itemIndex].id === id) {
      const { title, tags, time } = $tasksData[taskIndex].items[itemIndex]
      titleValue.set(title)
      tagsValue.set(tags.toString().replaceAll(',', ' '))
      timeValue.set(time)
    }
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id={id} draggable={true} on:dragstart={(e) => handleDragStart(e, taskIndex, itemIndex)} class='flex flex-col justify-center items-start border bg-white rounded-lg p-4 capitalize gap-10'>
  <div class='flex items-start justify-center gap-4'>
    <img src={icon} alt="tick">
    <div class='flex flex-col gap-2'>
      <p class='font-semibold line-clamp-2'>{title}</p>
      <span class='flex gap-2 flex-wrap'>
        <p class={`py-1 px-2 bg-black text-white rounded-lg text-sm`}>{priority}</p>
        {#if tags.length}
          {#each tags as tag }
          <p class={`py-1 px-2 bg-black text-white rounded-lg text-sm`}>{tag}</p>
          {/each}
        {/if}
      </span>
    </div>
  </div>

  <div class='flex justify-between text-sm items-center w-full'>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <p on:click={handleTaskDetails} class='text-gray-500 hover:underline cursor-pointer underline-offset-2'>edit details</p>
    <span class='flex gap-2'>
      <p class='uppercase'>{moment(time).format('dddd') + ", " + moment(time).format('LT')}</p>
      <img src={clockIcon} alt="time">
    </span>
  </div>
</div>
