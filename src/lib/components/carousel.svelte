<script lang="ts">
    interface Content{
        leyenda:String,
        imagen:String,
        href:String,
    } 
    export let content :Content[]
</script>
<swiper-container pagination={true} effect="fade" autoplay={true}>
    {#each content as item}
    <swiper-slide>
        <div class="grid grid-cols-1 lg:grid-cols-2 h-[700px] bg-lilasins py-20">
            <div class="flex justify-center items-center flex-col">
              <p class=" text-4xl lg:text-5xl text-center w-[400px] font-principal text-azulsins">{item.leyenda}</p>
              <a href={item.href} class=" bg-azulsins mt-6 font-principal text-white px-10 py-2"> Conoce mas </a>
            </div>
            <div class="hidden lg:block">
                <img
                src="sextoys.png"/>
            </div>
         </div>
    </swiper-slide>


    {/each}



</swiper-container>