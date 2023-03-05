<script lang="ts">
    export let products:any;


</script>

<div class="bg-white ">

    <div class="mx-auto max-w-2xl px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

  
      <div class=" grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
{#each products as item}
<div class="group py-4 relative">
  <div class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
    <img src={item.src} alt="Hand stitched, orange leather long wallet." class="h-full w-full object-cover object-center">
  </div>
  <h3 class="mt-4  text-center font-principal hover:underline  text-lg text-gray-700">
    <a href={item.href}>
      <span class="absolute inset-0"></span>
      {item.title}
    </a>
  </h3>
  <!-- <p class="mt-1 text-sm text-gray-500">{item.type}</p> -->
  <p class="mt-1 text-xl text-center font-medium text-naranjasins">{item.price}</p>
</div>
{/each}
  
        <!-- More products... -->
      </div>
<!--   
      <div class="mt-8 text-sm md:hidden">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
          Shop the collection
          <span aria-hidden="true"> &rarr;</span>
        </a>
      </div> -->
    </div>
  </div>
  