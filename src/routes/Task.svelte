<script lang='ts'>
	import clockIcon from '$lib/assets/clock.svg'

  // props
  export let id: string;
  export let icon: string;
  export let title: string;
  export let tags: string[];
  export let time: string;
  export let taskIndex: number
  export let itemIndex: number

  const handleDragStart = (e: any, taskIndex: number, itemIndex: number) => {
    const data = {taskIndex, itemIndex};
    e.dataTransfer.setData('text/plain', JSON.stringify(data))
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div id={id} class='flex flex-col justify-center items-start border bg-white rounded-lg p-4 capitalize gap-10' draggable={true} on:dragstart={(e) => handleDragStart(e, taskIndex, itemIndex)} >
  <div class='flex items-start justify-center gap-4'>
    <img src={icon} alt="tick">
    <div class='flex flex-col gap-2'>
      <p class='font-semibold line-clamp-2'>{title}</p>
      <span class='flex gap-2 flex-wrap'>
        {#if tags.length > 0}
          {#each tags as tag }
          <p class={`py-1 px-2 bg-black text-white rounded-lg text-sm`}>{tag}</p>
          {/each}
        {/if}
      </span>
    </div>
  </div>

  <div class='flex justify-between text-sm items-center w-full'>
    <p class='text-gray-500 hover:underline cursor-pointer underline-offset-2'>more details</p>
    <span class='flex gap-2'>
      <p class='uppercase'>{time}</p>
      <img src={clockIcon} alt="">
    </span>
  </div>
</div>
