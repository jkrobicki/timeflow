<script lang="ts">
	export let value: string = 'test';
	async function onBlur(e) {
		let inputValue = e.target.value;
		value = inputValue.replace('T', ' ');
	}
</script>

<input type="datetime-local" class="month-picker" on:blur={(e) => onBlur(e)} />
