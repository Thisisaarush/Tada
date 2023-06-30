<script lang='ts'>
	// components
	import TaskTitle from './TaskTitle.svelte'
	import AddTask from './AddTask.svelte'
	import Task from './Task.svelte'
	import TaskDetails from './TaskDetails.svelte'

	// states
	import { tasksData } from './stores.js'

	const handleDrop = (e: any, taskIndex: number) => {
		const data = JSON.parse(e.dataTransfer.getData("text/plain"))
		const [item] = $tasksData[data.taskIndex].items.splice(data.itemIndex, 1);
		$tasksData[taskIndex].items.push(item);
		$tasksData = $tasksData;
	}
	
</script>

<svelte:head>
	<title>Tada | Your Daily Tasks</title>
	<meta name="description" content="Todo app" />
</svelte:head>

<section class='mt-44 mb-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 p-2'>
	{#each $tasksData as {title, bgColor, items}, taskIndex (taskIndex) }
	<div class='max-w-xs w-5/6 flex flex-col gap-6'>
		<TaskTitle title={title} bgColor={bgColor} />
		{#key items.length, items}
			<ul class='min-h-[200px] flex flex-col gap-4' on:dragover|preventDefault on:drop|preventDefault={(e) => handleDrop(e, taskIndex)}>
				{#each items as item, itemIndex (item.id) }
				<Task {...item} itemIndex={itemIndex} taskIndex={taskIndex}/>
				{/each}
			</ul>
		{/key}
		<AddTask title={title} />
	</div>
	{/each}
	<TaskDetails />
</section>
