<script>
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SkipToContent,
		Content,
		Grid,
		Row,
		Column
	} from 'carbon-components-svelte';

	let isSideNavOpen = false;
</script>

<Header company="dyvenia" platformName="timeflow" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent href="/timelogs" />
	</svelte:fragment>
</Header>
<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavLink href="/timelogs" text="Timelogs" />
		<SideNavLink href="/capacities" text="Capacities" />
		<SideNavMenu text="Admin">
			<SideNavMenuItem href="/" text="Link 1" />
		</SideNavMenu>
	</SideNavItems>
</SideNav>

<Content>
	<slot />
</Content>
