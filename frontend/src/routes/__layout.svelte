<script>
	import {
		Header,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SkipToContent,
		Content
	} from '../library/carbon/components';
	import '../app.css';
	let isSideNavOpen = false;
	let selectedNavLink = '';

	function handleClick(event) {
		selectedNavLink = event.target.outerText;
		console.log('event', event);
	}
</script>

<Header company="dyvenia" platformName="timeflow" bind:isSideNavOpen persistentHamburgerMenu>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent href="/timelogs" />
	</svelte:fragment>
</Header>
<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink
			id="1"
			href="/timelogs"
			text="Timelogs"
			isSelected={selectedNavLink == 'Timelogs'}
			on:click={handleClick}
		/>
		<SideNavLink
			href="/capacities"
			text="Capacities"
			isSelected={selectedNavLink == 'Capacities'}
			on:click={handleClick}
		/>

		<SideNavMenu text="Admin">
			<SideNavMenuItem
				href="/clients"
				text="Clients"
				on:click={handleClick}
				isSelected={selectedNavLink == 'Clients'}
			/>
		</SideNavMenu>
	</SideNavItems>
</SideNav>

<Content>
	<slot />
</Content>
