<script lang='ts'>
  //icons
  import addIcon from '$lib/assets/add.svg'

  // states
  import { taskDetailsVisible, currentTaskBlock, editingCurrentTask, titleValue, tagsValue, priorityValue } from './stores.js'

  // props
  export let title: string

  const handleAddTask = () => {
    titleValue.set('')
    tagsValue.set('')
    priorityValue.set('no priority')
    editingCurrentTask.set(false)
    taskDetailsVisible.set(true)
    currentTaskBlock.set(title)
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={handleAddTask} class='flex justify-center items-center gap-4 bg-gray-50 py-4 rounded-lg border border-gray-300 border-dashed cursor-pointer hover:bg-gray-100'>
  <img src={addIcon} alt="add task">
  <p class='capitalize text-lg font-medium'>add task</p>
</div>
