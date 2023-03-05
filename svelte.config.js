import preprocess from "svelte-preprocess";
import { vitePreprocess } from "@sveltejs/kit/vite";
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter({

    }),
    alias:{
      $components:"src/lib/components",
      $storeproductos:"src/lib/stores/product.ts",
      $storecart:"src/lib/stores/cart.ts"
    }
  },
};

export default config;
