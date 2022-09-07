<script lang="ts">
	let changed = 'not changed';
	export let options: any;
	export let selectDisplay: any;
	export let placeholder: any;
	let selectedOptions: any = [];
	let isSelectHidden = true;
	export let text: any = '';
	export let selectedItem: any = '';
	export let onChange = function (selectedItem: any) {};
	let current = 0;
	export let selectedOption: object = {};

	function getValues() {
		isSelectHidden = false;
		changed = text;
		selectedOptions = options.filter((item: any) => item[selectDisplay].includes(text));
	}

	function handleSelect(event: any) {
		isSelectHidden = true;
		text = event[selectDisplay];
		selectedItem = event[selectDisplay];
		selectedOption = event;
		onChange(event);
	}

	function handleArrow() {
		if (isSelectHidden == true) {
			isSelectHidden = false;
			selectedOptions = options;
			console.log('1');
		} else {
			isSelectHidden = true;
		}
	}

	function handleKeyDown(event: any) {
		let itemsCount = selectedOptions.length;
		if (event.key == 'ArrowUp' && current > 1) {
			current = current - 1;
		}

		if (event.key == 'ArrowDown' && current < itemsCount) {
			current = current + 1;
		}

		if (event.key == 'Enter') {
			let el = document.getElementsByClassName('acselected');
			text = el[0].innerHTML;
			selectedItem = { text: text, id: el[0].getAttribute('value') };
			console.log('selected item ', selectedItem);
			isSelectHidden = true;
			onChange(selectedItem);
		}
	}
</script>

<div class="autocomplete">
	<input
		class="autocomplete"
		bind:value={text}
		on:input={getValues}
		on:keydown={handleKeyDown}
		{placeholder}
		on:click={getValues}
	/>
	<!-- <Arrow {handleArrow} /> -->
	<div class="autocomplete-items" hidden={isSelectHidden}>
		{#each selectedOptions as option, i}
			<div
				class:acselected={current === i + 1}
				on:click={(event) => handleSelect(option)}
				value={option.id}
			>
				{option[selectDisplay]}
			</div>
		{/each}
	</div>
</div>

<style>
	* {
		box-sizing: border-box;
	}

	div.autocomplete {
		/*the container must be positioned relative:*/
		position: relative;
		display: block;
		background-color: #f1f1f1;
		padding-bottom: 0px;
		vertical-align: middle;
		border-bottom: solid 1px;
	}
	input.autocomplete {
		border: 1px solid transparent;
		background-color: #f1f1f1;
		font-size: 16px;
		height: 2.5rem;
		padding-left: 0.5rem;
	}
	input[type='text'] {
		background-color: #f1f1f1;
		width: 100%;
	}
	.autocomplete-items {
		position: absolute;
		border: 1px solid #d4d4d4;
		border-bottom: none;
		border-top: none;
		z-index: 99;
		/*position the autocomplete items to be the same width as the container:*/
		top: 100%;
		left: 0;
		right: 0;
	}
	.autocomplete-items div {
		padding: 10px;
		cursor: pointer;
		background-color: #fff;
		border-bottom: 1px solid #d4d4d4;
	}
	.autocomplete-items div:hover {
		/*when hovering an item:*/
		background-color: #e9e9e9;
	}
	.acselected {
		/*when navigating through the items using the arrow keys:*/
		background-color: #e9e9e9 !important;
		color: #ffffff;
	}
</style>
