<script>
  import profileIcon from '$lib/assets/profile.svg'
  import moment from 'moment'

  const day = moment().format('dddd') + " " + moment().format('MMMM DD')
</script>

<header class='fixed top-8 flex justify-center items-center flex-col gap-2 w-full'>
  <ul class='flex gap-2 items-center justify-center border rounded-2xl py-2 backdrop-blur-md w-5/6 max-w-xl'>
    <a href="/" class="uppercase font-bold text-2xl py-2 px-4 rounded-md">Tada.</a>
    <li class="text-xl">|<li/>
    <a href="/pomo" class="capitalize text-lg px-4 py-2 rounded-md hover:bg-gray-100">pomo</a>
    <a href='/stopwatch' class="hidden sm:block capitalize text-lg px-4 py-2 rounded-md hover:bg-gray-100">stopwatch</a>
    <a href="/calendar" class="hidden sm:block capitalize text-lg px-4 py-2 rounded-md hover:bg-gray-100">Calendar</a>
    <img src={profileIcon} alt="user profile" class="rounded-md p-1">
  </ul>
  <p class="uppercase tracking-[0.475rem] text-gray-500 text-sm">{day}</p>
</header>
