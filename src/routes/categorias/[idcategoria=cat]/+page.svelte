<script>
// @ts-nocheck

  /** @type {import('./$types').PageData} */

  export let data;
  let productType = ["Top","SexToys","Lubricants","Lingerie","HealthCare"]
  let filters = {
    Top:["Top"],
    SexToys:["JUGUETE"],
    Lubricants:["Lubricante"],
    Lingerie:["Lenceria"],
    HealthCare:["HealthCare"]
  }
  import { page } from '$app/stores';
  console.log($page.params)
  let seleccion = data.products.filter((val)=>val.node.tags.some(a1=>filters[$page.params.idcategoria].includes(a1)));
  let productos = seleccion.map((val)=>{
  return {
  title:val.node.title,
  price:val.node.priceRange.minVariantPrice.amount,
  src:val.node.images.edges[0].node.url,
  href:"/productos/"+val.node.id
  }


})
  import {ProductList} from "$components"
  

</script>
<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->


<ProductList
bind:products={productos}
/>
  