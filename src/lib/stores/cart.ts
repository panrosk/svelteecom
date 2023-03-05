import { writable } from "svelte/store";
import {browser} from "$app/environment"

function manejarproductos () {
 const defaultValue:any[] = [];
 const initialValue = browser ? JSON.parse(window.localStorage.getItem('cart')|| "[]") ?? defaultValue : defaultValue;
    const {subscribe,set,update} = writable(initialValue)
	subscribe((value:any)=>{
		if (browser) {
			window.localStorage.setItem('cart', JSON.stringify(value));
		  }
	})
    return {
		subscribe,
		agregar: (val:any) => update((n): any[] => [...n, val]),
		// quitar:(val:any) => update((n): any[] => n.filter(x=>x!==val)),
		reset: () => set(defaultValue)
	};


    
}


export const cart = manejarproductos()