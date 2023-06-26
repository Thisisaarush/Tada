<script lang='ts'>
  import addIcon from '$lib/assets/add.svg'

  // props
  export let title: string;
  export let bgColor: string;
</script>

<div class={`${bgColor} flex justify-between items-center py-4 px-6 rounded-lg gap-10 border-b-4 border-black`}>
  <p class='uppercase font-bold text-lg'>{title}</p>
  <img src={addIcon} alt="add task" class='cursor-pointer'>
</div>
