<script>

</script>

<div>
  <div class='flex justify-center items-start gap-6 flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 shadow-md bg-white rounded-2xl w-[400px] h-[400px]'>
    <span class='mx-10 flex flex-col text-sm'>
      <p class='font-bold text-xl'>Task</p>
      <p class='text-gray-500'>Fill the details and click on SAVE to create a task. Click Outside to Cancel.</p>
    </span>
    <form on:submit={(e) => e.preventDefault()} class='flex flex-col justify-end items-end gap-4 capitalize tesm'>
      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="title">Title</label>
        <input type="text" id='title' class='border p-2 w-[250px] rounded-md'>
      </span>

      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="tags">Tags</label>
        <input type="text" id='tags' class='border p-2 w-[250px] rounded-md'>
      </span>
      
      <span class='flex items-center w-full gap-4 justify-end px-12'>
        <label for="priority">Priority</label>
        <select id="priority" class='border p-2 w-[250px] rounded-md capitalize'>
          <option value="">no priority</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </span>
      <input type="submit" value='save' class='mx-12 mt-6 uppercase bg-black text-white py-2 px-4 rounded-md hover:bg-black/80 cursor-pointer'>
    </form>

  </div>

  <div class='fixed w-screen h-screen top-0 left-0 bg-black/10 backdrop-blur-sm z-10'></div>
</div>
