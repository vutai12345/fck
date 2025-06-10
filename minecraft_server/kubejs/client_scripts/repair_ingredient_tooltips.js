// priority: 0

ItemEvents.tooltip(event => {
    const repairableItems = {
    'minecraft:turtle_helmet': 'Turtle Scute',
    'minecraft:flint_and_steel': 'Flint',
    'minecraft:shears': 'Copper Ingot, Copper Sheet',
    'alloyed:steel_shears': 'Diamond',
    'minecraft:bow': 'Planks',
    'minecraft:crossbow': 'Iron Ingot, Iron Sheet',
    'supplementaries:slingshot': 'Planks',
    'minecraft:fishing_rod': 'Planks',
    'aquaculture:iron_fishing_rod': 'Iron Ingot, Iron Sheet',
    'minecraft:carrot_on_a_stick': 'Carrot',
    'minecraft:warped_fungus_on_a_stick': 'Warped Fungus',
    'minecraft:trident': 'Prismarine Shard, Thrasher Tooth',
    'another_furniture:furniture_hammer': 'Copper Ingot, Copper Sheet',
    'kubejs:copper_brush': 'Feather',
    'kubejs:copper_brush_wax': 'Honeycomb',
    'create:super_glue': 'Slimeball',
    'naturalist:bug_net': 'Bamboo, Bamboo Planks',
    'supplementaries:flute': 'Bamboo, Bamboo Planks',
    'vc_gliders:paraglider_wood': 'Sail, Phantom Membrane',
    'create:potato_cannon': 'Copper Ingot, Copper Sheet',
    'create:extendo_grip': 'Rose Gold Ingot',
    'supplementaries:wrench': 'Copper Ingot, Copper Sheet',
    'quark:echorang': 'Echo Shard',
	
    'savage_and_ravage:wand_of_freezing': 'Soul Bead',
    'savage_and_ravage:conch_of_conjuring': 'Soul Bead',
    'savage_and_ravage:mask_of_dishonesty': 'Soul Bead',
	
    'chalk:white_chalk': 'Calcite',
    'chalk:orange_chalk': 'Calcite',
    'chalk:magenta_chalk': 'Calcite',
    'chalk:light_blue_chalk': 'Calcite',
    'chalk:yellow_chalk': 'Calcite',
    'chalk:lime_chalk': 'Calcite',
    'chalk:pink_chalk': 'Calcite',
    'chalk:gray_chalk': 'Calcite',
    'chalk:light_gray_chalk': 'Calcite',
    'chalk:cyan_chalk': 'Calcite',
    'chalk:purple_chalk': 'Calcite',
    'chalk:blue_chalk': 'Calcite',
    'chalk:brown_chalk': 'Calcite',
    'chalk:green_chalk': 'Calcite',
    'chalk:red_chalk': 'Calcite',
    'chalk:black_chalk': 'Calcite',
	
    'minecraft:wooden_sword': 'Planks',
    'minecraft:wooden_shovel': 'Planks',
    'minecraft:wooden_pickaxe': 'Planks',
    'minecraft:wooden_axe': 'Planks',
    'minecraft:wooden_hoe': 'Planks',
    'shieldexp:wooden_shield': 'Planks',
    'farmersdelight:flint_knife': 'Flint',
    'kubejs:bone_knife': 'Bone, Withered Bone, Fish Bones',
	
    'minecraft:leather_helmet': 'Leather, Leather Scrap',
    'minecraft:leather_chestplate': 'Leather, Leather Scrap',
    'minecraft:leather_leggings': 'Leather, Leather Scrap',
    'minecraft:leather_boots': 'Leather, Leather Scrap',
	
    'minecraft:stone_sword': 'Copper Ingot, Copper Sheet',
    'minecraft:stone_shovel': 'Copper Ingot, Copper Sheet',
    'minecraft:stone_pickaxe': 'Copper Ingot, Copper Sheet',
    'minecraft:stone_axe': 'Copper Ingot, Copper Sheet',
    'minecraft:stone_hoe': 'Copper Ingot, Copper Sheet',
    'kubejs:copper_knife': 'Copper Ingot, Copper Sheet',
	
    'minecraft:chainmail_helmet': 'Chain',
    'minecraft:chainmail_chestplate': 'Chain',
    'minecraft:chainmail_leggings': 'Chain',
    'minecraft:chainmail_boots': 'Chain',
	
    'minecraft:golden_sword': 'Gold Ingot, Golden Sheet',
    'minecraft:golden_shovel': 'Gold Ingot, Golden Sheet',
    'minecraft:golden_pickaxe': 'Gold Ingot, Golden Sheet',
    'minecraft:golden_axe': 'Gold Ingot, Golden Sheet',
    'minecraft:golden_hoe': 'Gold Ingot, Golden Sheet',
    'farmersdelight:golden_knife': 'Gold Ingot, Golden Sheet',
	
    'minecraft:golden_helmet': 'Gold Ingot, Golden Sheet',
    'minecraft:golden_chestplate': 'Gold Ingot, Golden Sheet',
    'minecraft:golden_leggings': 'Gold Ingot, Golden Sheet',
    'minecraft:golden_boots': 'Gold Ingot, Golden Sheet',
	
    'copperized:copper_helmet': 'Copper Ingot, Copper Sheet',
    'copperized:copper_chestplate': 'Copper Ingot, Copper Sheet',
    'copperized:copper_leggings': 'Copper Ingot, Copper Sheet',
    'copperized:copper_boots': 'Copper Ingot, Copper Sheet',
    'create:copper_diving_boots': 'Copper Ingot, Copper Sheet',
    'create:copper_diving_helmet': 'Copper Ingot, Copper Sheet',
    'shieldexp:golden_shield': 'Copper Ingot, Copper Sheet',
	
    'minecraft:iron_sword': 'Iron Ingot, Iron Sheet',
    'minecraft:iron_shovel': 'Iron Ingot, Iron Sheet',
    'minecraft:iron_pickaxe': 'Iron Ingot, Iron Sheet',
    'minecraft:iron_axe': 'Iron Ingot, Iron Sheet',
    'minecraft:iron_hoe': 'Iron Ingot, Iron Sheet',
    'farmersdelight:iron_knife': 'Iron Ingot, Iron Sheet',
    'farmersdelight:skillet': 'Iron Ingot, Iron Sheet',
    'minecraft:shield': 'Iron Ingot, Iron Sheet',
	
    'minecraft:iron_helmet': 'Iron Ingot, Iron Sheet',
    'minecraft:iron_chestplate': 'Iron Ingot, Iron Sheet',
    'minecraft:iron_leggings': 'Iron Ingot, Iron Sheet',
    'minecraft:iron_boots': 'Iron Ingot, Iron Sheet',
	
    'additionaladditions:rose_gold_sword': 'Rose Gold Ingot',
    'additionaladditions:rose_gold_shovel': 'Rose Gold Ingot',
    'additionaladditions:rose_gold_pickaxe': 'Rose Gold Ingot',
    'additionaladditions:rose_gold_axe': 'Rose Gold Ingot',
    'additionaladditions:rose_gold_hoe': 'Rose Gold Ingot',
    'kubejs:rose_gold_knife': 'Rose Gold Ingot',
	
    'additionaladditions:rose_gold_helmet': 'Rose Gold Ingot',
    'additionaladditions:rose_gold_chestplate': 'Rose Gold Ingot',
    'additionaladditions:rose_gold_leggings': 'Rose Gold Ingot',
    'additionaladditions:rose_gold_boots': 'Rose Gold Ingot',
	
    'alloyed:steel_sword': 'Steel Ingot, Steel Sheet',
    'alloyed:steel_shovel': 'Steel Ingot, Steel Sheet',
    'alloyed:steel_pickaxe': 'Steel Ingot, Steel Sheet',
    'alloyed:steel_axe': 'Steel Ingot, Steel Sheet',
    'alloyed:steel_hoe': 'Steel Ingot, Steel Sheet',
    'alloyed:steel_knife': 'Steel Ingot, Steel Sheet',
	
    'alloyed:steel_helmet': 'Steel Ingot, Steel Sheet',
    'alloyed:steel_chestplate': 'Steel Ingot, Steel Sheet',
    'alloyed:steel_leggings': 'Steel Ingot, Steel Sheet',
    'alloyed:steel_boots': 'Steel Ingot, Steel Sheet',
	
    'minecraft:diamond_sword': 'Diamond',
    'minecraft:diamond_shovel': 'Diamond',
    'minecraft:diamond_pickaxe': 'Diamond',
    'minecraft:diamond_axe': 'Diamond',
    'minecraft:diamond_hoe': 'Diamond',
    'farmersdelight:diamond_knife': 'Diamond',
	
    'minecraft:diamond_helmet': 'Diamond',
    'minecraft:diamond_chestplate': 'Diamond',
    'minecraft:diamond_leggings': 'Diamond',
    'minecraft:diamond_boots': 'Diamond',
	
    'oreganized:electrum_sword': 'Electrum Ingot, Block of Diamond',
    'oreganized:electrum_shovel': 'Electrum Ingot, Block of Diamond',
    'oreganized:electrum_pickaxe': 'Electrum Ingot, Block of Diamond',
    'oreganized:electrum_axe': 'Electrum Ingot, Block of Diamond',
    'oreganized:electrum_hoe': 'Electrum Ingot, Block of Diamond',
    'oreganized:electrum_knife': 'Electrum Ingot, Block of Diamond',
	
    'oreganized:electrum_helmet': 'Electrum Ingot, Block of Diamond',
    'oreganized:electrum_chestplate': 'Electrum Ingot, Block of Diamond',
    'oreganized:electrum_leggings': 'Electrum Ingot, Block of Diamond',
    'oreganized:electrum_boots': 'Electrum Ingot, Block of Diamond',
	
    'caverns_and_chasms:necromium_sword': 'Necromium Ingot, Block of Diamond',
    'caverns_and_chasms:necromium_shovel': 'Necromium Ingot, Block of Diamond',
    'caverns_and_chasms:necromium_pickaxe': 'Necromium Ingot, Block of Diamond',
    'caverns_and_chasms:necromium_axe': 'Necromium Ingot, Block of Diamond',
    'caverns_and_chasms:necromium_hoe': 'Necromium Ingot, Block of Diamond',
    'abnormals_delight:necromium_knife': 'Necromium Ingot, Block of Diamond',
	
    'caverns_and_chasms:necromium_helmet': 'Necromium Ingot, Block of Diamond',
    'caverns_and_chasms:necromium_chestplate': 'Necromium Ingot, Block of Diamond',
    'caverns_and_chasms:necromium_leggings': 'Necromium Ingot, Block of Diamond',
    'caverns_and_chasms:necromium_boots': 'Necromium Ingot, Block of Diamond',
	
    'minecraft:netherite_sword': 'Netherite Ingot, Block of Diamond',
    'minecraft:netherite_shovel': 'Netherite Ingot, Block of Diamond',
    'minecraft:netherite_pickaxe': 'Netherite Ingot, Block of Diamond',
    'minecraft:netherite_axe': 'Netherite Ingot, Block of Diamond',
    'minecraft:netherite_hoe': 'Netherite Ingot, Block of Diamond',
    'farmersdelight:netherite_knife': 'Netherite Ingot, Block of Diamond',
	
    'minecraft:netherite_helmet': 'Netherite Ingot',
    'minecraft:netherite_chestplate': 'Netherite Ingot',
    'minecraft:netherite_leggings': 'Netherite Ingot',
    'minecraft:netherite_boots': 'Netherite Ingot',
	
    'savage_and_ravage:griefer_helmet': 'Blast-Proof Plating',
    'savage_and_ravage:griefer_chestplate': 'Blast-Proof Plating',
    'savage_and_ravage:griefer_leggings': 'Blast-Proof Plating',
    'savage_and_ravage:griefer_boots': 'Blast-Proof Plating',
    'shieldexp:griefer_shield': 'Blast-Proof Plating',
	
    'caverns_and_chasms:sanguine_helmet': 'Sanguine Plating',
    'caverns_and_chasms:sanguine_chestplate': 'Sanguine Plating',
    'caverns_and_chasms:sanguine_leggings': 'Sanguine Plating',
    'caverns_and_chasms:sanguine_boots': 'Sanguine Plating',
    'shieldexp:iron_shield': 'Sanguine Plating',
	
    'environmental:thief_hood': 'Leather, Leather Scrap',
    'environmental:healer_pouch': 'Leather, Leather Scrap',
    'environmental:architect_belt': 'Leather, Leather Scrap',
    'environmental:wanderer_boots': 'Leather, Leather Scrap',
	
    'autumnity:snail_shell_chestplate': 'Snail Shell Piece',
    'environmental:yak_pants': 'Yak Hair',
    'windswept:snow_boots': 'Iron Ingot, Iron Sheet, Lead Ingot',
	
    'clash:spear': 'Electrum Ingot, Block of Diamond',
    'clash:swept_axe': 'Netherite Ingot, Block of Diamond',
    'clash:greatblade': 'Necromium Ingot, Block of Diamond',
    'kubejs:rose_gold_rapier': 'Rose Gold Ingot',
    'mace_backport:mace': 'Steel Ingot, Steel Sheet'
    }

    Object.keys(repairableItems).forEach(itemID => {
		let value = repairableItems[itemID]
		event.addAdvanced(itemID, (item, advanced, text) => {
			if (event.shift) {
				text.add([Text.of(' Repaired with: ').darkGreen(), Text.of(value).blue()])
			} else return
		})
    })
})