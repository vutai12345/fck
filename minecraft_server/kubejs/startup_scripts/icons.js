// priority: 0

StartupEvents.registry('item', event => {
	const tabIcons = ['building', 'combat', 'deco', 'hotbar', 'inventory', 'machine', 'magic', 'misc', 'search', 'tools', 'transport', 'food']
	tabIcons.forEach(tabIcon => {
		event.create(tabIcon+'_icon');
	})
})