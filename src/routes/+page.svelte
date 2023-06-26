<script>
	import TaskTitle from './TaskTitle.svelte'
	import AddTask from './AddTask.svelte'
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Todo app" />
</svelte:head>

<section class='mt-44 mb-10 flex flex-col md:flex-row justify-center items-center gap-8 p-2'>
	<div class='max-w-xs w-5/6 flex flex-col gap-4'>
		<TaskTitle title='todo' bgColor='bg-blue-200'/>
		<AddTask />
	</div>
	<div class='max-w-xs w-5/6 flex flex-col gap-4'>
		<TaskTitle title='doing' bgColor='bg-yellow-200'/>
		<AddTask />
	</div>
	<div class='max-w-xs w-5/6 flex flex-col gap-4'>
		<TaskTitle title='done' bgColor='bg-green-200'/>
		<AddTask />
	</div>
</section>
