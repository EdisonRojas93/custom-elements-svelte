<!-- <script>
	import Input from './components/input.svelte';
</script> -->
<script>
	import './custom-elements/input.component.js';
	import Input from './components/input.svelte';

	// let showComponent = true;

	// const toogleAttr = () => {
	// 	const el = document.getElementById('inputCustom');
	// 	let changeAttr = false;

	// 	if (changeAttr) {
	// 		el.setAttribute('data-test-1', 'hola');
	// 	} else {
	// 		el.setAttribute('data-test-1', 'mundo')
	// 	}

	// 	changeAttr = !changeAttr;
	// }

	// const deleteComponent = () => {
	// 	showComponent = !showComponent;
	// }
</script>

<!-- <main>
	<fieldset>
		<legend>custom element</legend>
		{#if showComponent}
		<input  id="inputCustom" data-test-1="hola1" data-test="hola" is="input-test" type="text">
		{/if}
		<button type="button" on:click={toogleAttr}>toggle attr</button>
		<button type="button" on:click={deleteComponent}>
			{#if showComponent}
				delete component
			{:else}
				mostrar component
			{/if}
		</button>
	</fieldset>

	<hr>

	<fieldset>
		<legend>Component svelte</legend>
		<Input value={"hola"} />
		<button type="button">toggle disable</button>
	</fieldset>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style> -->