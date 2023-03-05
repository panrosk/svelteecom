<script lang="ts">
	export let showModal:Boolean; // boolean

	let dialog:any; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<div class="bg-white py-10 px-10 grid grid-cols-2  ">
			<div>
				<p class=" text-azulsins text-xl font-bold font-principal lg:text-3xl w-[150px] lg:w-[200px]">Quieres saber mas de nuestros productos</p>
				<a></a>
			</div>
			<div>
				<img
				src="mabo.webp"
				class="w-full h-full"
				/>
			</div>
		<hr />
		<!-- svelte-ignore a11y-autofocus -->
		
	</div>
</dialog>

<style>
	dialog {
		max-width: 50em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
