<script>
import {onMount} from 'svelte';
//import { redirect } from '@sveltejs/kit';
import { baseUrl, initLogin } from './data/+server.js';

let user = {}
/** @type {import('./$types').PageLoad} */

function Logout(){
    user["kc"].logout("/logout")
}

onMount(async () => {
    user = await initLogin();
    user = user
    console.log(user)
    //throw redirect(307, '/timelogs');
	});
</script>

<p>{user["token"]}</p>
<p>{user["name"]}</p>
<p>{user["lastname"]}</p>
Roles: <p>{user["roles"]}</p>

<button on:click={Logout}>Logout</button>