<script>
  // @ts-ignore
  import {NavbarClassic,Banner,Footer,Cart,Modal} from "$components";

  import "../app.postcss";
  let menu = [
    {
      title:"Top Ventas",
      href:"/categorias/Top",
      icon:"/estrella.png"
    },
    {
      title:"Juguetes",
      href:"/categorias/SexToys",
      icon:"/dildo.png"
    },
    {
      title:"Lubricantes",
      href:"/categorias/Lubricants",
      icon:"/gota.png"
    },
    {
      title:"Lencería",
      href:"/categorias/Lingerie",
      icon:"/lenceria.png"
    },
    {
      title:"Health",
      href:"/categorias/HealthCare",
      icon:"/kits.png"
    },


  ];

  
</script>
<Banner/>
<Modal showModal={false}/>
<div class=" bg-white flex pt-4 justify-center">
  <div class="flex flex-row items-center">
    <a href="/" class="flex flex-row items-center">
      <img src="/logo.png" class="h-[50px]">
      <p class="font-principal text-4xl text-black ">Sins</p>
    </a>

  </div>
</div>

<NavbarClassic menu={menu}/>
<slot />
<Footer/>