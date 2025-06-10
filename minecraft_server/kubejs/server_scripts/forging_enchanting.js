// priority: 0

ServerEvents.recipes(event => {
// Forging
	function modifyingWeapon(material, catalystItem, resultItem) {
		event.custom({type: 'miningmaster:forging_recipe', gems: [{item: material}, {item: material}, {item: 'architects_palette:withered_bone'}, {item: 'architects_palette:withered_bone'}, {item: 'minecraft:quartz'}, {item: 'minecraft:quartz'}], catalyst: {item: catalystItem}, result: {item: resultItem}})
	}
	const allColours = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']
	
	// Runes
	allColours.forEach(colour => {
        event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'supplementaries:antique_ink'}, {item: 'minecraft:'+colour+'_dye'}], catalyst: {item: 'quark:blank_rune'}, result: {item: 'quark:'+colour+'_rune'}})
    })
    event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'twigs:pebble'}, {item: 'twigs:pebble'}, {item: 'architects_palette:withered_bone'}, {item: 'minecraft:quartz'}], catalyst: {tag: 'forge:stone'}, result: {item: 'quark:blank_rune'}})
    event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'quark:red_rune'}, {item: 'quark:orange_rune'}, {item: 'quark:yellow_rune'}, {item: 'quark:lime_rune'}, {item: 'quark:light_blue_rune'}, {item: 'quark:blue_rune'}, {item: 'quark:magenta_rune'}, {item: 'quark:pink_rune'}, {item: 'quark:white_rune'}], catalyst: {item: 'quark:blank_rune'}, result: {item: 'quark:rainbow_rune', count: 3}})
	
// Enchanting tablets
	// Blank
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}, {item: 'minecraft:amethyst_shard'}], catalyst: {tag: 'forge:stone'}, result: {item: 'kubejs:blank_tablet'}})
	// Aquatic
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:nautilus_shell'}, {item: 'minecraft:nautilus_shell'}, {item: 'minecraft:nautilus_shell'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:aquatic_tablet'}})
	// Beastly
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:goat_horn'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:beastly_tablet'}})
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'caverns_and_chasms:lost_goat_horn'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:beastly_tablet'}}).id('kubejs:beastly_tablet_special')
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}, {item: 'naturalist:bear_fur'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:beastly_tablet'}})
	// Cyclic
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:prismarine_shard'}, {item: 'minecraft:prismarine_shard'}, {item: 'minecraft:prismarine_shard'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:cyclic_tablet'}})
	// Enduring
	event.custom({type: 'miningmaster:forging_recipe', gems: [{tag: 'raspberry_flavoured:golden_healers'}, {tag: 'raspberry_flavoured:golden_healers'}, {item: 'environmental:truffle'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:enduring_tablet'}})
	// Everlasting
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'kubejs:stardust'}, {item: 'create:powdered_obsidian'}, {item: 'create:powdered_obsidian'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:everlasting_tablet'}})
	// Flinging
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}, {item: 'kubejs:rubber'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:flinging_tablet'}})
	// Glacial
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}, {item: 'minecraft:blue_ice'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:glacial_tablet'}})
	// Hallowed
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'oreganized:silver_ingot'}, {item: 'oreganized:silver_ingot'}, {item: 'spelunkery:rock_salt'}, {item: 'spelunkery:rock_salt'}, {item: 'spelunkery:rock_salt'}, {item: 'spelunkery:rock_salt'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:hallowed_tablet'}})
	// Haunted
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'quark:soul_bead'}, {item: 'quark:soul_bead'}, {item: 'quark:soul_bead'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:haunted_tablet'}})
	// Heavy
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}, {item: 'oreganized:lead_ingot'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:heavy_tablet'}})
	// Infested
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:spider_eye'}, {item: 'minecraft:spider_eye'}, {item: 'minecraft:spider_eye'}, {item: 'savage_and_ravage:creeper_spores'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:infested_tablet'}})
	// Otherworldly
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:ender_pearl'}, {item: 'minecraft:ender_pearl'}, {item: 'minecraft:ender_pearl'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:otherworldly_tablet'}})
	// Piercing
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'upgrade_aquatic:thrasher_tooth'}, {item: 'upgrade_aquatic:thrasher_tooth'}, {item: 'upgrade_aquatic:thrasher_tooth'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:piercing_tablet'}})
	// Pulling
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'spelunkery:magnetite_chunk'}, {item: 'spelunkery:magnetite_chunk'}, {item: 'spelunkery:magnetite_chunk'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:pulling_tablet'}})
	// Silent
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:echo_shard'}, {item: 'minecraft:echo_shard'}, {item: 'minecraft:echo_shard'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:silent_tablet'}})
	// Swift
	event.custom({type: 'miningmaster:forging_recipe', gems: [{item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}, {item: 'minecraft:gold_ingot'}], catalyst: {item: 'kubejs:blank_tablet'}, result: {item: 'kubejs:swift_tablet'}})
	// event.custom({type: 'modestmining:forging_shaped', cooktime: 200, key: {A: {item: 'minecraft:amethyst_shard'}, B: {tag: 'forge:stone'}}, pattern: ['AAA', 'ABA', 'AAA'], fuel: {item: 'minecraft:blaze_powder'}, result: {item: 'kubejs:blank_tablet', count: 2}})
	
// Weapon modifiers
	modifyingWeapon('minecraft:netherite_ingot', 'minecraft:netherite_axe', 'clash:swept_axe')
	modifyingWeapon('oreganized:electrum_ingot', 'oreganized:electrum_sword', 'clash:spear')
	modifyingWeapon('caverns_and_chasms:necromium_ingot', 'abnormals_delight:necromium_knife', 'clash:greatblade')
	modifyingWeapon('alloyed:steel_ingot', 'alloyed:steel_axe', 'mace_backport:mace')
	modifyingWeapon('additionaladditions:rose_gold_alloy', 'additionaladditions:rose_gold_sword', 'kubejs:rose_gold_rapier')
	
// Smith-enchanting
	function smithEnchanting(templateItem, [enchantment]) {
		event.custom({type: 'miningmaster:gem_smithing_recipe', blacklist: {tag: 'miningmaster:gem_enchanting_blacklist'}, gem: {item: templateItem}, enchantments: [enchantment]})
	}
	
	smithEnchanting('kubejs:aquatic_tablet', ['ensorcellation:angler'])
	smithEnchanting('kubejs:aquatic_tablet', ['minecraft:respiration'])
	smithEnchanting('kubejs:aquatic_tablet', ['create:capacity'])
	smithEnchanting('kubejs:aquatic_tablet', ['minecraft:depth_strider'])
	smithEnchanting('kubejs:aquatic_tablet', ['domesticationinnovation:amphibious'])
	
	smithEnchanting('kubejs:beastly_tablet', ['ensorcellation:cavalier'])
	smithEnchanting('kubejs:beastly_tablet', ['miningmaster:knight_jump'])
	smithEnchanting('kubejs:beastly_tablet', ['domesticationinnovation:intimidation'])
	
	smithEnchanting('kubejs:cyclic_tablet', ['minecraft:sweeping'])
	smithEnchanting('kubejs:cyclic_tablet', ['minecraft:riptide'])
	smithEnchanting('kubejs:cyclic_tablet', ['allurement:vengeance'])
	
	smithEnchanting('kubejs:enduring_tablet', ['miningmaster:heartfelt'])
	smithEnchanting('kubejs:enduring_tablet', ['domesticationinnovation:health_boost'])
	
	smithEnchanting('kubejs:everlasting_tablet', ['minecraft:unbreaking'])
	
	smithEnchanting('kubejs:flinging_tablet', ['allurement:launch'])
	smithEnchanting('kubejs:flinging_tablet', ['minecraft:multishot'])
	smithEnchanting('kubejs:flinging_tablet', ['ensorcellation:volley'])
	smithEnchanting('kubejs:flinging_tablet', ['domesticationinnovation:deflection'])
	
	smithEnchanting('kubejs:glacial_tablet', ['minecraft:frost_walker'])
	smithEnchanting('kubejs:glacial_tablet', ['domesticationinnovation:frost_fang'])
	
	smithEnchanting('kubejs:hallowed_tablet', ['minecraft:smite'])
	smithEnchanting('kubejs:hallowed_tablet', ['minecraft:channeling'])
	smithEnchanting('kubejs:hallowed_tablet', ['usefulspyglass:marking'])
	
	smithEnchanting('kubejs:haunted_tablet', ['additional_enchantments:homing'])
	smithEnchanting('kubejs:haunted_tablet', ['minecraft:soul_speed'])
	smithEnchanting('kubejs:haunted_tablet', ['domesticationinnovation:total_recall'])
	
	smithEnchanting('kubejs:heavy_tablet', ['kubejs:guard_break'])
	smithEnchanting('kubejs:heavy_tablet', ['additional_enchantments:bracewalk'])
	smithEnchanting('kubejs:heavy_tablet', ['allurement:shockwave'])
	
	smithEnchanting('kubejs:infested_tablet', ['minecraft:bane_of_arthropods'])
	smithEnchanting('kubejs:infested_tablet', ['allurement:spread_of_ailments'])
	
	smithEnchanting('kubejs:otherworldly_tablet', ['supplementaries:stasis'])
	smithEnchanting('kubejs:otherworldly_tablet', ['additional_enchantments:straight_shot'])
	smithEnchanting('kubejs:otherworldly_tablet', ['ensorcellation:displacement'])
	smithEnchanting('kubejs:otherworldly_tablet', ['domesticationinnovation:tethered_teleport'])
	
	smithEnchanting('kubejs:piercing_tablet', ['minecraft:piercing'])
	smithEnchanting('kubejs:piercing_tablet', ['ensorcellation:trueshot'])
	smithEnchanting('kubejs:piercing_tablet', ['minecraft:impaling'])
	
	smithEnchanting('kubejs:pulling_tablet', ['allurement:reeling'])
	smithEnchanting('kubejs:pulling_tablet', ['ensorcellation:reach'])
	
	smithEnchanting('kubejs:silent_tablet', ['farmersdelight:backstabbing'])
	smithEnchanting('kubejs:silent_tablet', ['minecraft:swift_sneak'])
	smithEnchanting('kubejs:silent_tablet', ['domesticationinnovation:muffled'])
	
	smithEnchanting('kubejs:swift_tablet', ['additional_enchantments:faster_attacks'])
	smithEnchanting('kubejs:swift_tablet', ['ensorcellation:quick_draw'])
	smithEnchanting('kubejs:swift_tablet', ['minecraft:quick_charge'])
})

MoreJSEvents.filterAvailableEnchantments((event) => {
    event.remove("minecraft:protection");
    event.remove("minecraft:thorns");
    event.remove("minecraft:looting");
    event.remove("minecraft:mending");
    event.remove("minecraft:infinity");
    event.remove("minecraft:flame");
    event.remove("minecraft:efficiency");
    event.remove("minecraft:fortune");
    event.remove("minecraft:silk_touch");
    event.remove("minecraft:power");
    event.remove("minecraft:sharpness");
    event.remove("minecraft:loyalty");
    event.remove("additionaladditions:precision");
    event.remove("additionaladditions:speed");
    event.remove("cofh_core:holding");
});