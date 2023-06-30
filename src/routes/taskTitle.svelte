<script lang='ts'>
  // states
  import { taskDetailsVisible, currentTaskBlock } from './stores.js'

  // icons
  import addIcon from '$lib/assets/add.svg'

  // props
  export let title: string;
  export let bgColor: string;

  const handleAddTask = () => {
    taskDetailsVisible.set(true)
    currentTaskBlock.set(title)
  }
</script>

<div class={`${bgColor} flex justify-between items-center py-4 px-6 rounded-lg gap-10 border-b-4 border-black`}>
  <p class='uppercase font-bold text-lg'>{title}</p>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img src={addIcon} alt="add task" class='cursor-pointer' on:click={handleAddTask} />
</div>
