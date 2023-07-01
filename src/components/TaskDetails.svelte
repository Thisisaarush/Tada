<script lang='ts'>
  import { v4 as uuidv4 } from 'uuid';

  // icons
  import tickIcon from '$lib/assets/tick.svg'
  import doingIcon from '$lib/assets/doing.svg'
  import greenTick from '$lib/assets/greenTick.svg'

  // states
  import { taskDetailsVisible, editingCurrentTask, tasksData, currentTaskBlock, titleValue, tagsValue, priorityValue, timeValue, currentTaskId } from '../routes/stores.js'

  const handleOverlay = () => {
    taskDetailsVisible.set(false)
  }
  const previousTime = $timeValue
  const handleSubmit = () => {
    let tags: string[] = []
    if ($tagsValue && $tagsValue.length) {
      tags = [...tags, ...$tagsValue?.split(' ')]
    }
    $tasksData.map(task => {
      if ($editingCurrentTask) {
        task.items.map(item => {
          if (item.id === $currentTaskId) {
            item.title = $titleValue
            item.tags = $tagsValue !== '' ? $tagsValue?.split(' ') : []
            item.priority = $priorityValue
            item.time = $timeValue
          } 
        })
      }
      
      if (!$editingCurrentTask) {
        if (task.title === $currentTaskBlock) {
          task.items = [...task.items, {
            id: uuidv4(),
            icon: $currentTaskBlock === 'todo' ? tickIcon : $currentTaskBlock === 'doing' ? doingIcon : greenTick,
            title: $titleValue,
            tags,
            priority: $priorityValue,
            time: $timeValue
          }]
        }
      }
    })
    $tasksData = $tasksData
    taskDetailsVisible.set(false)
		window.localStorage.setItem('tasksData', JSON.stringify($tasksData))
  }
</script>

<div class={`${$taskDetailsVisible ? 'block' : 'hidden'}`}>
  <div class='flex justify-center items-center gap-6 flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 shadow-md bg-white rounded-2xl w-[400px] h-[450px]'>
    <span class='mx-10 flex flex-col text-sm'>
      <p class='font-bold text-2xl'>Add Task</p>
      <p class='text-gray-500'>Fill the details and click on SAVE to create a task. Click Outside to Cancel.</p>
    </span>
    <form method='post' on:submit|preventDefault={handleSubmit} class='flex flex-col justify-end items-end gap-4 capitalize tesm'>
      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="title">Title</label>
        <input bind:value={$titleValue} type="text" id='title' name='title' class='border p-2 w-[250px] rounded-md' required>
      </span>

      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="tags">Tags</label>
        <input bind:value={$tagsValue} type="text" id='tags' name='tags' class='border p-2 w-[250px] rounded-md'>
      </span>
      
      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="priority">Priority</label>
        <select bind:value={$priorityValue} id="priority" name='priority' class='border p-2 w-[250px] rounded-md capitalize'>
          <option value="no priority">no priority</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </span>

      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="time">Time</label>
        <input bind:value={$timeValue} type="datetime-local" id='time' name='time' class='border p-2 w-[250px] rounded-md'>
      </span>
      <input type="submit" value='save' class='mx-12 mt-6 uppercase bg-black text-white py-2 px-4 rounded-md hover:bg-black/80 cursor-pointer'>
    </form>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={handleOverlay} class='fixed w-screen h-screen top-0 left-0 bg-black/10 backdrop-blur-sm z-10'></div>
</div>
