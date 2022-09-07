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
				href="/epics"
				text="Epics"
				on:click={handleClick}
				isSelected={selectedNavLink == 'Epics'}
			/>
			<SideNavMenuItem
				href="/teams"
				text="Teams"
				on:click={handleClick}
				isSelected={selectedNavLink == 'Teams'}
			/>
			<SideNavMenuItem
				href="/clients"
				text="Clients"
				on:click={handleClick}
				isSelected={selectedNavLink == 'Clients'}
			/>
			<SideNavMenuItem
				href="/sponsors"
				text="Sponsors"
				on:click={handleClick}
				isSelected={selectedNavLink == 'Sponsors'}
			/>
			<SideNavMenuItem
				href="/roles"
				text="Roles"
				on:click={handleClick}
				isSelected={selectedNavLink == 'Roles'}
			/>
			<SideNavMenuItem
				href="/epic-areas"
				text="Epic Areas"
				on:click={handleClick}
				isSelected={selectedNavLink == 'Epic Areas'}
			/>
			<SideNavMenuItem
				href="/users"
				text="Users"
				on:click={handleClick}
				isSelected={selectedNavLink == 'Users'}
			/>
		</SideNavMenu>
	</SideNavItems>
</SideNav>

<Content>
	<slot />
</Content>
