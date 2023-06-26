<script lang='ts'>
	import clockIcon from '$lib/assets/clock.svg'

  // props
  export let icon: string;
  export let title: string;
  export let tags: string[];
  export let time: string;
</script>

<div class='flex flex-col justify-between items-center border rounded-lg p-4 capitalize gap-12'>
  <div class='flex items-start justify-center gap-4'>
    <img src={icon} alt="tick" class='mt-2'>
    <div class='flex flex-col gap-2'>
      <p class='font-semibold line-clamp-2'>{title}</p>
      <span class='flex gap-2'>
        { #each tags as tag }
        <p class={`py-1 px-2 bg-gray-100 rounded-lg text-sm`}>{tag}</p>
        {/each}
      </span>
    </div>
  </div>

  <div class='flex justify-between text-sm items-center w-full'>
    <p class='text-gray-500'>more details</p>
    <span class='flex gap-2'>
      <p class='uppercase'>{time}</p>
      <img src={clockIcon} alt="">
    </span>
  </div>
</div>
