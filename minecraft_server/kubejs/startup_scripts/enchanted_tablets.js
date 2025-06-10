// priority: 0

StartupEvents.registry('item', event => {
	const enchantedTablets = [
	'aquatic_tablet',
	'beastly_tablet',
	'cyclic_tablet',
	'enduring_tablet',
	'flinging_tablet',
	'glacial_tablet',
	'hallowed_tablet',
	'haunted_tablet',
	'heavy_tablet',
	'infested_tablet',
	'otherworldly_tablet',
	'piercing_tablet',
	'pulling_tablet',
	'silent_tablet',
	'swift_tablet'
	]
	
	event.create('blank_tablet').texture('kubejs:item/enchanted_tablets/blank_tablet').group('brewing')
	event.create('everlasting_tablet').glow(true).rarity('epic').texture('kubejs:item/enchanted_tablets/everlasting_tablet').group('brewing')
	
	enchantedTablets.forEach(tablet => {
		event.create(tablet).glow(true).rarity('rare').texture('kubejs:item/enchanted_tablets/'+tablet).group('brewing')
	})
})