<script>
// @ts-nocheck
  
  export let data;
  import { page } from '$app/stores';
  import {cart} from "$storecart"
  // console.log($page.params)

  const producto = data.products.filter((val)=>val.node.id===$page.params.idproductos)[0]
  
</script>

<div class="bg-white">

  <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->


  <main class="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <!-- Product -->
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <div class="flex flex-col-reverse">
          <!-- Image selector -->
          <div class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
            <div class="grid grid-cols-4 gap-6" aria-orientation="horizontal" role="tablist">
              <button id="tabs-2-tab-1" class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4" aria-controls="tabs-2-panel-1" role="tab" type="button">
                <span class="sr-only"> Angled view </span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg" alt="" class="h-full w-full object-cover object-center">
                </span>
                <!-- Selected: "ring-indigo-500", Not Selected: "ring-transparent" -->
                <span class="ring-transparent pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2" aria-hidden="true"></span>
              </button>

              <!-- More images... -->
            </div>
          </div>

          <div class="aspect-w-1 aspect-h-1 w-full">
            <!-- Tab panel, show/hide based on tab state. -->
            <div id="tabs-2-panel-1" aria-labelledby="tabs-2-tab-1" role="tabpanel" tabindex="0">
              <img src={producto.node.images.edges[0].node.url}  alt="Angled front view with bag zipped and handles upright." class="h-full w-full object-cover object-center sm:rounded-lg">
            </div>

            <!-- More images... -->
          </div>
        </div>

        <!-- Product info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1 class="text-3xl hover:text-naranjasins font-bold tracking-tight text-gray-900">{producto.node.title}</h1>

          <div class="mt-3">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-914000">${producto.node.priceRange.minVariantPrice.amount}</p>
          </div>

          <!-- Reviews -->


          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6 text-base text-gray-700">
              <p>{producto.node.description}</p>
            </div>
          </div>

          <form class="mt-6">
            <!-- Colors -->
            <div>
              <h3 class="text-sm text-gray-600">Color</h3>

              <fieldset class="mt-2">
                <legend class="sr-only">Choose a color</legend>
                <div class="flex items-center space-x-3">
                  <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-700">
                    <input type="radio" name="color-choice" value="Washed Black" class="sr-only" aria-labelledby="color-choice-0-label">
                    <span id="color-choice-0-label" class="sr-only"> Washed Black </span>
                    <span aria-hidden="true" class="h-8 w-8 bg-gray-700 rounded-full border border-black border-opacity-10"></span>
                  </label>

                  <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-400">
                    <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-1-label">
                    <span id="color-choice-1-label" class="sr-only"> White </span>
                    <span aria-hidden="true" class="h-8 w-8 bg-white rounded-full border border-black border-opacity-10"></span>
                  </label>

                  <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label class="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-500">
                    <input type="radio" name="color-choice" value="Washed Gray" class="sr-only" aria-labelledby="color-choice-2-label">
                    <span id="color-choice-2-label" class="sr-only"> Washed Gray </span>
                    <span aria-hidden="true" class="h-8 w-8 bg-gray-500 rounded-full border border-black border-opacity-10"></span>
                  </label>
                </div>
              </fieldset>
            </div>

            <div class="mt-10 flex">
              <button on:click={()=>{
                console.log("Hola")
                cart.agregar(producto)
              }} type="submit" class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">Add to bag</button>

              <!-- <button type="button" class="ml-4 flex items-center justify-center rounded-md py-3 px-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                <svg class="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <span class="sr-only">Add to favorites</span>
              </button> -->
            </div>
          </form>

          <section aria-labelledby="details-heading" class="mt-12">
            <h2 id="details-heading" class="sr-only">Additional details</h2>


          </section>
        </div>
      </div>

      <section aria-labelledby="related-heading" class="mt-10 border-t border-gray-200 py-16 px-4 sm:px-0">
        <h2 id="related-heading" class="text-xl font-bold text-gray-900">Customers also bought</h2>

        <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          <div>
            <div class="relative">
              <div class="relative h-72 w-full overflow-hidden rounded-lg">
                <img src={producto.node.images.edges[0].node.url} alt="Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls." class="h-full w-full object-cover object-center">
              </div>
              <div class="relative mt-4">
                <h3 class="text-sm font-medium text-gray-900">Zip Tote Basket</h3>
                <p class="mt-1 text-sm text-gray-500">White and black</p>
              </div>
              <div class="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"></div>
                <p class="relative text-lg font-semibold text-white">{producto.node.priceRange.minVariantPrice.amount}</p>
              </div>
            </div>
            <div class="mt-6">
              <a href="#" class="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200">Add to bag<span class="sr-only">, Zip Tote Basket</span></a>
            </div>
          </div>

          <!-- More products... -->
        </div>
      </section>
    </div>
  </main>

</div>
