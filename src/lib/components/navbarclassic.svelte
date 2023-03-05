<script lang="ts">
  import Cart from "./cart.svelte";
  let showCart=false;

    let open:boolean;
    export let menu:any;
    
</script>
<Cart bind:showCart={showCart}/>
<header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <!-- <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
        </a> -->
      </div>
      <div class="flex lg:hidden">
        <button on:click={()=>open=true} type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        {#each menu as elemento}
        <a rel="external" href={elemento.href} class="hover:scale-110 font-light hover:text-naranjasins hover:font-semibold flex flex-row text-sm font-principal  leading-6 text-black">
          <img class="h-[20px]"  src={elemento.icon}>
          {elemento.title}
        </a>
        {/each}
        <!-- <a href="#" class="text-sm font-semibold leading-6 text-textcolorprimary">Product</a>
  
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Features</a>
  
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
  
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Company</a> -->
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button on:click={()=>showCart=true}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
        </button>
        
        <!-- <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> -->
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
{#if open}
     <!-- content here -->
     <div class="lg:hidden" role="dialog" aria-modal="true">
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="fixed inset-0 z-10"></div>
        <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">
            <!-- <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
            </a> -->
            <button on:click={()=>open=false} type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
              <span class="sr-only">Close menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                {#each menu as elemento}
                <a rel="external" href={elemento.href} class=" hover:scale-110 -mx-3 block rounded-lg py-2 px-3 font-light hover:text-naranjasins hover:font-semibold flex flex-row text-sm font-principal  leading-6 text-black">
                  <img class="h-[20px]"  src={elemento.icon}>
                  {elemento.title}
                </a>
                {/each}
                <!-- <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
    
                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
    
                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
    
                <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a> -->
              </div>
              <div class="py-6">
                <!-- <a href="#" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
{/if}
  </header>
  