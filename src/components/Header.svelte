<script>
  import moment from 'moment'
  import githubIcon from '$lib/assets/github.svg'

  const day = moment().format('dddd') + " " + moment().format('MMMM DD')
</script>

<header class='fixed top-8 flex justify-center items-center flex-col gap-2 w-full'>
  <ul class='flex gap-2 items-center justify-center border rounded-2xl py-2 sm:px-4 backdrop-blur-md w-[95%] sm:w-fit max-w-xl'>
    <a href="/" class="uppercase font-bold text-2xl py-2 px-4 rounded-md">Tada.</a>
    <li class="text-xl">|<li/>
    <a
    href="https://github.com/Thisisaarush/Tada"
    target="_blank"
    class="bg-black p-1 mx-4 rounded-lg hover:bg-black/70"
  >
    <img src={githubIcon} alt="github" />
  </a>
  </ul>
  <p class="uppercase tracking-[0.475rem] text-gray-500 text-sm">{day}</p>
</header>
