<script lang='ts'>
	import TaskTitle from './TaskTitle.svelte'
	import AddTask from './AddTask.svelte'
	import Task from './Task.svelte'
	import TaskDetails from './TaskDetails.svelte'

	// icons
  import tickIcon from '$lib/assets/tick.svg'

	let tasksData = [
		{
			title: 'todo', 
			bgColor: 'bg-blue-200',
			items: [
				{
					id: "1",
					icon: tickIcon,
					title: 'connect with team on zoom for discussion',
					tags: ['medium', 'off track'],
					time: 'Today, 5:00 pm',
				},
				{
					id: "2",
					icon: tickIcon,
					title: '2 connect with team on zoom for discussion',
					tags: ['easy', 'off track'],
					time: 'Today, 6:00 pm',
				}
			]
		},
		{
			title: 'doing', 
			bgColor: 'bg-yellow-200',
			items: []
		},
		{
			title: 'done', 
			bgColor: 'bg-green-300',
			items: []
		},
	]

	const handleDrop = (e: any, taskIndex: number) => {
		const data = JSON.parse(e.dataTransfer.getData("text/plain"))
		const [item] = tasksData[data.taskIndex].items.splice(data.itemIndex, 1);
		tasksData[taskIndex].items.push(item);
		tasksData = tasksData;
	}
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Todo app" />
</svelte:head>

<section class='mt-44 mb-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 p-2'>
	{#each tasksData as {title, bgColor, items}, taskIndex (taskIndex) }
		<div class='max-w-xs w-5/6 flex flex-col gap-6'>
			<TaskTitle title={title} bgColor={bgColor} />
			<ul class='min-h-[200px] flex flex-col gap-4' on:dragover|preventDefault on:drop|preventDefault={(e) => handleDrop(e, taskIndex)}>
				{#each items as item, itemIndex (item.id) }
						<Task {...item} itemIndex={itemIndex} taskIndex={taskIndex}/>
				{/each}
			</ul>
			<AddTask />
		</div>
	{/each}
	<TaskDetails />
</section>
