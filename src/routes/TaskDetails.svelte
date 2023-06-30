<script lang='ts'>
  import { v4 as uuidv4 } from 'uuid';
  import moment from 'moment'

  // icons
  import tickIcon from '$lib/assets/tick.svg'
  import doingIcon from '$lib/assets/doing.svg'
  import greenTick from '$lib/assets/greenTick.svg'

  // states
  import { taskDetailsVisible, tasksData, currentTaskBlock } from './stores.js'

  // refs
  let formElement: HTMLFormElement;
  let titleValue: string;
  let tagsValue: string;
  let priorityValue: string;
  let timeValue: string

  const handleOverlay = () => {
    formElement.reset()
    taskDetailsVisible.set(false)
  }
  const handleSubmit = () => {
    let tags = [priorityValue]
    if (tagsValue && tagsValue.length) {
      tags = [...tags, ...tagsValue?.split(' ')]
    }
    
    $tasksData.map(task => {
      if (task.title === $currentTaskBlock) {
        task.items = [...task.items, {
          id: uuidv4(),
          icon: $currentTaskBlock === 'todo' ? tickIcon : $currentTaskBlock === 'doing' ? doingIcon : greenTick,
          title: titleValue,
          tags,
          time: moment(timeValue).format('dddd') + " " + moment(timeValue).format('LT')
        }]
      }
    })
    $tasksData = $tasksData
    taskDetailsVisible.set(false)
    formElement.reset()
  }
</script>

<div class={`${$taskDetailsVisible ? 'block' : 'hidden'}`}>
  <div class='flex justify-center items-center gap-6 flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 shadow-md bg-white rounded-2xl w-[400px] h-[450px]'>
    <span class='mx-10 flex flex-col text-sm'>
      <p class='font-bold text-2xl'>Task</p>
      <p class='text-gray-500'>Fill the details and click on SAVE to create a task. Click Outside to Cancel.</p>
    </span>
    <form bind:this={formElement} method='post' on:submit|preventDefault={handleSubmit} class='flex flex-col justify-end items-end gap-4 capitalize tesm'>
      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="title">Title</label>
        <input bind:value={titleValue} type="text" id='title' name='title' class='border p-2 w-[250px] rounded-md' required>
      </span>

      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="tags">Tags</label>
        <input bind:value={tagsValue} type="text" id='tags' name='tags' class='border p-2 w-[250px] rounded-md'>
      </span>
      
      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="priority">Priority</label>
        <select bind:value={priorityValue} id="priority" name='priority' class='border p-2 w-[250px] rounded-md capitalize'>
          <option value="no priority">no priority</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </span>

      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="time">Time</label>
        <input bind:value={timeValue} type="datetime-local" id='time' name='time' class='border p-2 w-[250px] rounded-md'>
      </span>
      <input type="submit" value='save' class='mx-12 mt-6 uppercase bg-black text-white py-2 px-4 rounded-md hover:bg-black/80 cursor-pointer'>
    </form>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={handleOverlay} class='fixed w-screen h-screen top-0 left-0 bg-black/10 backdrop-blur-sm z-10'></div>
</div>
