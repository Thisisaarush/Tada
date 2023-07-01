<script lang='ts'>
	import { onMount } from 'svelte'

	// icons
	import tickIcon from '$lib/assets/tick.svg'
  import doingIcon from '$lib/assets/doing.svg'
  import greenTick from '$lib/assets/greenTick.svg'

	// components
	import TaskTitle from './taskTitle.svelte'
	import AddTask from './addTask.svelte'
	import Task from './task.svelte'
	import TaskDetails from './taskDetails.svelte'

	// states
	import { tasksData } from './stores.js'

	const handleDrop = (e: any, taskIndex: number) => {
		const data = JSON.parse(e.dataTransfer.getData("text/plain"))
		const [item] = $tasksData[data.taskIndex].items.splice(data.itemIndex, 1);
		$tasksData[taskIndex].title === 'todo' ? item.icon = tickIcon : $tasksData[taskIndex].title === 'doing' ? item.icon = doingIcon : item.icon = greenTick;
		$tasksData[taskIndex].items.push(item);
		$tasksData = $tasksData;
		window.localStorage.setItem('tasksData', JSON.stringify($tasksData))
	}

	onMount(() => {
		if (!window.localStorage.getItem('tasksData')) {
			window.localStorage.setItem('tasksData', JSON.stringify($tasksData))
		} else if (window.localStorage.getItem('tasksData') !== null) {
			const localData = window.localStorage.getItem('tasksData')
			if (localData) {
				$tasksData = JSON.parse(localData)
			}
		}
	})
	
</script>

<svelte:head>
	<title>Tada | Your Daily Tasks</title>
	<meta name="description" content="Todo app" />
</svelte:head>

<section>
	<div class='mt-44 mb-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-6'>
		{#each $tasksData as {title, bgColor, items}, taskIndex (taskIndex) }
		<div class='max-w-xs w-5/6 flex flex-col gap-6'>
			<TaskTitle {title} {bgColor} />
				<ul class='min-h-[200px] flex flex-col gap-4' on:dragover|preventDefault on:drop|preventDefault={(e) => handleDrop(e, taskIndex)}>
					{#each items as item, itemIndex (item.id) }
					<Task {...item} {itemIndex} {taskIndex}/>
					{/each}
				</ul>
			<AddTask {title} />
		</div>
		{/each}
	</div>
	<TaskDetails />
</section>
