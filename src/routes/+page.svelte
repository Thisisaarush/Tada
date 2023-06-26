<script>
	import TaskTitle from './TaskTitle.svelte'
	import AddTask from './AddTask.svelte'
	import Task from './Task.svelte'

  import doingIcon from '$lib/assets/doing.svg'
  import tickIcon from '$lib/assets/tick.svg'
  import greenTickIcon from '$lib/assets/greenTick.svg'

	const taskProps = {
		icon: tickIcon,
		title: 'connect with team on zoom for discussion',
		tags: ['medium', 'off track'],
		time: 'Today, 5:00 pm'
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Todo app" />
</svelte:head>

<section class='mt-44 mb-10 flex flex-col md:flex-row justify-center items-center md:items-start gap-8 p-2'>
	<div class='max-w-xs w-5/6 flex flex-col gap-6'>
		<TaskTitle title='todo' bgColor='bg-blue-200'/>
		<Task {...taskProps} />
		<AddTask />
	</div>
	<div class='max-w-xs w-5/6 flex flex-col gap-6'>
		<TaskTitle title='doing' bgColor='bg-yellow-200'/>
		<AddTask />
	</div>
	<div class='max-w-xs w-5/6 flex flex-col gap-6'>
		<TaskTitle title='done' bgColor='bg-green-200'/>
		<AddTask />
	</div>
</section>
