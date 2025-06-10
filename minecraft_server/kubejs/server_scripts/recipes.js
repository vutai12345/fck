// priority: 0
ServerEvents.recipes(event => {
	const allColours = ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']
	const noWhiteAllColours = ['orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']
	
// Shapeless crafting
	allColours.forEach(colour => {
        event.shapeless('8x minecraft:'+colour+'_stained_glass', ['8x minecraft:glass', colour+'_dye']).id('minecraft:'+colour+'_stained_glass')
        event.shapeless('8x minecraft:'+colour+'_stained_glass_pane', ['8x minecraft:glass_pane', colour+'_dye']).id('minecraft:'+colour+'_stained_glass_pane_from_glass_pane')
        event.shapeless('8x minecraft:'+colour+'_terracotta', ['8x minecraft:terracotta', colour+'_dye']).id('minecraft:'+colour+'_terracotta')
        event.shapeless('8x quark:'+colour+'_shingles', ['8x quark:shingles', colour+'_dye']).id('quark:building/crafting/shingles/'+colour+'_shingles_dye')
        event.shapeless('8x quark:'+colour+'_framed_glass_pane', ['8x quark:framed_glass_pane', colour+'_dye'])
        event.shapeless('8x clayworks:'+colour+'_terracotta_bricks', ['8x clayworks:terracotta_bricks', colour+'_dye']).id('clayworks:'+colour+'_terracotta_bricks_from_'+colour+'_dye')
        event.shapeless('8x twigs:'+colour+'_packed_silt', ['8x twigs:packed_silt', colour+'_dye']).id('twigs:'+colour+'_packed_silt')
        event.shapeless('8x twigs:'+colour+'_silt_shingles', ['8x twigs:silt_shingles', colour+'_dye']).id('twigs:'+colour+'_silt_shingles')
        event.shapeless('8x oreganized:'+colour+'_crystal_glass', ['8x minecraft:'+colour+'_stained_glass', 'oreganized:lead_ingot']).id('oreganized:'+colour+'_crystal_glass')
        event.shapeless('8x oreganized:'+colour+'_crystal_glass_pane', ['8x minecraft:'+colour+'_stained_glass_pane', 'oreganized:lead_ingot'])
        event.shapeless('8x minecraft:'+colour+'_concrete_powder', ['minecraft:'+colour+'_dye', '2x supplementaries:ash', '3x #forge:gravel', '3x sand'])
        event.shapeless('kubejs:'+colour+'_cloth_scrap_block', ['minecraft:'+colour+'_dye', 'kubejs:cloth_scrap_block'])
        event.shapeless('kubejs:'+colour+'_cloth_scrap_carpet', ['minecraft:'+colour+'_dye', 'kubejs:cloth_scrap_carpet'])
        event.shapeless('kubejs:'+colour+'_canvas_rug', ['minecraft:'+colour+'_dye', 'farmersdelight:canvas_rug'])
        event.shapeless('create:'+colour+'_seat', [['minecraft:'+colour+'_wool', 'kubejs:'+colour+'_cloth_scrap_block'], '#minecraft:wooden_slabs']).id('create:crafting/kinetics/'+colour+'_seat')
        event.shapeless('create:'+colour+'_toolbox', ['minecraft:'+colour+'_dye', '#create:toolboxes'])
    })
	
	noWhiteAllColours.forEach(colour => {
        event.shapeless('minecraft:'+colour+'_carpet', ['minecraft:white_carpet', colour+'_dye']).id('minecraft:'+colour+'_carpet_from_white_carpet')
		event.shapeless('another_furniture:'+colour+'_lamp', ['another_furniture:white_lamp', colour+'_dye'])
		event.shapeless('another_furniture:'+colour+'_sofa', ['another_furniture:white_sofa', colour+'_dye'])
    })
	
	event.shapeless('9x ender_pearl', ['architects_palette:ender_pearl_block']).id('architects_palette:ender_pearl_from_block')
	event.shapeless('9x amethyst_shard', ['twigs:polished_amethyst'])
	event.shapeless('9x paper', ['kubejs:paper_block'])
	event.shapeless('9x kubejs:cobbled_blackstone', ['kubejs:sturdy_blackstone'])
	event.shapeless('9x string', ['architects_palette:spool'])
	event.shapeless('9x additionaladditions:rose_gold_alloy', ['#forge:storage_blocks/rose_gold'])
	event.shapeless('9x kubejs:rose_gold_nugget', ['#forge:ingots/rose_gold'])
	event.shapeless('9x create:wheat_flour', ['kubejs:wheat_flour_bag'])
	event.shapeless('9x create:cinder_flour', ['kubejs:cinder_flour_bag'])
	event.shapeless('9x kubejs:corn_flour', ['kubejs:corn_flour_bag'])
	event.shapeless('9x kubejs:cinnamon', ['kubejs:cinnamon_bag'])
	event.shapeless('9x kubejs:oats', ['kubejs:oat_bag'])
	
	event.shapeless('charcoal', ['8x kubejs:charcoal_lump'])
	event.shapeless('8x kubejs:charcoal_lump', ['charcoal'])
	
	event.shapeless('4x kubejs:cloth_scrap', ['#raspberry_flavoured:cloth_blocks'])
	event.shapeless('4x kubejs:rubber', ['kubejs:rubber_block'])
	event.shapeless('4x ecologics:surface_moss', ['minecraft:moss_block']).id('ecologics:surface_moss')
	event.shapeless('4x additionaladditions:copper_patina', ['additionaladditions:patina_block'])
	
	event.shapeless('2x minecraft:bone_meal', [['bone', 'aquaculture:fish_bones']]).id('minecraft:bone_meal')
	event.shapeless('2x minecraft:bone_meal', ['architects_palette:withered_bone'])
	event.shapeless('farmersdelight:melon_popsicle', ['neapolitan:ice_cubes', 'minecraft:melon_slice', 'minecraft:stick']).id('abnormals_delight:neapolitan/melon_popsicle')
	event.shapeless('architects_palette:algal_blend', ['clay_ball', 'kelp']).id('architects_palette:algal_blend')
	event.shapeless('2x architects_palette:algal_blend', ['2x clay_ball', 'aquaculture:algae'])
	event.shapeless('2x architects_palette:overgrown_algal_bricks', ['2x architects_palette:algal_bricks', 'aquaculture:algae'])
	event.shapeless('architects_palette:heavy_mossy_stone_bricks', ['architects_palette:heavy_stone_bricks', '#raspberry_flavoured:moss']).id('architects_palette:heavy_mossy_stone_bricks')
	event.shapeless('2x twigs:packed_silt', ['2x twigs:silt', 'farmersdelight:straw']).id('twigs:packed_silt')
	event.shapeless('minecraft:leather', ['2x rabbit_hide']).id('minecraft:leather')
	event.shapeless('3x culturaldelights:corn_dough', ['water_bucket', '3x #raspberry_flavoured:corn_dough_ingredients']).id('culturaldelights:corn_dough')
	event.shapeless('3x culturaldelights:corn_dough', ['#forge:eggs', '3x #raspberry_flavoured:corn_dough_ingredients'])
	event.shapeless('minecraft:globe_banner_pattern', ['minecraft:paper', ['supplementaries:globe', 'supplementaries:globe_sepia']])
	event.shapeless('twigs:mossy_bricks', ['minecraft:bricks', '#raspberry_flavoured:moss'])
	event.shapeless('twigs:twisting_polished_blackstone_bricks', ['minecraft:polished_blackstone_bricks', ['minecraft:warped_roots', 'minecraft:twisting_vines']]).id('twigs:twisting_polished_blackstone_bricks')
	event.shapeless('twigs:weeping_polished_blackstone_bricks', ['minecraft:polished_blackstone_bricks', ['minecraft:crimson_roots', 'minecraft:weeping_vines']]).id('twigs:weeping_polished_blackstone_bricks')
	event.shapeless(Item.of('minecraft:potion',4,{Potion:"minecraft:water"}).strongNBT(), ['minecraft:water_bucket', '4x minecraft:glass_bottle'])
	event.shapeless('minecraft:water_bucket', ['minecraft:bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT(), Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT(), Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT(), Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()])
	event.shapeless('3x farmersdelight:wheat_dough', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '3x #farmersdelight:wheat_or_flour']).id('farmersdelight:wheat_dough_from_water')
	event.shapeless('3x culturaldelights:corn_dough', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '3x #raspberry_flavoured:corn_dough_ingredients']).id('culturaldelights:corn_dough')
	event.shapeless('24x quark:rusty_iron_plate', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x iron_ingot']).id('quark:building/crafting/rusty_iron_plate_manual_only')
	event.shapeless('8x quark:rusty_iron_plate', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x quark:iron_plate']).id('quark:building/crafting/rusty_iron_plate2_manual_only')
	event.shapeless('8x mud', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x dirt']).id('minecraft:mud_manual_only')
	event.shapeless('8x clay', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x #minecraft:sand']).id('kubejs:clay_manual_only')
	event.shapeless('8x upgrade_aquatic:driftwood_log', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x #raspberry_flavoured:logs']).id('kubejs:driftwood_log_manual_only')
	event.shapeless('8x upgrade_aquatic:stripped_driftwood_log', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x #raspberry_flavoured:stripped_logs']).id('kubejs:stripped_driftwood_log_manual_only')
	event.shapeless('8x upgrade_aquatic:driftwood', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x #raspberry_flavoured:wood']).id('kubejs:driftwood_manual_only')
	event.shapeless('8x upgrade_aquatic:stripped_driftwood', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '8x #raspberry_flavoured:stripped_wood']).id('kubejs:stripped_driftwood_manual_only')
	event.shapeless('3x sob:cinder_dough', [['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], '3x create:cinder_flour']).id('sob:sob/crafting/cinder_dough')
	event.shapeless('4x andesite', ['granite', '3x cobblestone'])
	event.shapeless('kubejs:prickly_pear_pie', ['4x kubejs:prickly_pear_pie_slice'])
	event.shapeless('neapolitan:mint_chops', ['#forge:raw_mutton', 'neapolitan:mint_leaves']).id('neapolitan:mint/mint_chops')
	event.shapeless('caverns_and_chasms:cupric_campfire', ['campfire', 'additionaladditions:copper_patina']).id('caverns_and_chasms:cupric_campfire')
	event.shapeless('endergetic:ender_campfire', ['campfire', '#endergetic:ender_fire_base_blocks']).id('endergetic:ender_campfire')
	event.shapeless('etched:album_jukebox', ['note_block', 'diamond']).id('etched:album_jukebox')
	event.shapeless('supplementaries:speaker_block', ['note_block', 'hopper']).id('supplementaries:speaker_block')
	event.shapeless('ecologics:coconut_chest_boat', ['#forge:chests/wooden', 'ecologics:coconut_boat']).id('ecologics:coconut_chest_boat')
	event.shapeless('ecologics:azalea_chest_boat', ['#forge:chests/wooden', 'ecologics:azalea_boat']).id('ecologics:azalea_chest_boat')
	event.shapeless('2x mynethersdelight:hoglin_sausage', ['bone_meal', ['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], 'nethersdelight:hoglin_loin'])
	event.shapeless('gray_dye', ['2x supplementaries:ash'])
	event.shapeless('6x fire_charge', ['gunpowder', '#minecraft:coals']).id('minecraft:fire_charge')
	event.shapeless('golden_apple', ['apple', 'gold_ingot']).id('minecraft:golden_apple')
	event.shapeless('golden_carrot', ['carrot', 'gold_ingot']).id('minecraft:golden_carrot')
	event.shapeless('glistering_melon_slice', ['melon_slice', 'gold_ingot']).id('minecraft:glistering_melon_slice')
	event.shapeless('kubejs:golden_strawberries', ['neapolitan:strawberries', 'gold_ingot'])
	event.shapeless('2x ender_eye', ['2x ender_pearl', 'gold_ingot', 'fire_charge']).id('minecraft:ender_eye')
	event.shapeless('2x kubejs:spirited_exopearl', ['2x ender_pearl', 'quark:soul_bead'])
	event.shapeless('skull_banner_pattern', ['paper', ['skeleton_skull', 'wither_skeleton_skull']]).id('minecraft:skull_banner_pattern')
	event.shapeless('create:encased_chain_drive', ['create:andesite_casing', 'chain']).id('create:crafting/kinetics/encased_chain_drive')
	event.shapeless('create:gearshift', ['create:andesite_casing', 'create:shaft', '#minecraft:planks', 'redstone'])
	event.shapeless('create:gearshift', ['create:clutch', '#minecraft:planks'])
	event.shapeless('twigs:twig', ['#raspberry_flavoured:saplings_with_twigs'])
	event.shapeless('8x create:controller_rail', ['8x powered_rail', 'create:electron_tube'])
	event.shapeless('mynethersdelight:hot_wings_bucket', ['4x mynethersdelight:hot_wings', 'bucket']).id('mynethersdelight:crafting/hot_wings_bucket')
	event.shapeless('8x dark_prismarine', ['ink_sac', '8x prismarine']).id('minecraft:dark_prismarine')
	event.shapeless('8x upgrade_aquatic:luminous_prismarine', ['glow_ink_sac', '8x prismarine']).id('upgrade_aquatic:luminous_prismarine')
	event.shapeless('mynethersdelight:breakfast_sampler', ['2x mynethersdelight:roasted_sausage', '#raspberry_flavoured:breakfast_condiments', '2x incubation:fried_egg', '#forge:bread/wheat', 'bowl']).id('mynethersdelight:crafting/breakfast_sampler')
	event.shapeless('kubejs:latex_bucket', ['bucket', '4x kubejs:latex_bottle'])
	event.shapeless('4x kubejs:latex_bottle', ['kubejs:latex_bucket', '4x glass_bottle'])
	event.shapeless('4x kubejs:latex_jungle_log', ['kubejs:latex_bucket', '4x stripped_jungle_log'])
	event.shapeless('4x kubejs:latex_jungle_wood', ['kubejs:latex_bucket', '4x stripped_jungle_wood'])
	event.shapeless('kubejs:latex_jungle_log', ['kubejs:latex_bottle', 'stripped_jungle_log'])
	event.shapeless('kubejs:latex_jungle_wood', ['kubejs:latex_bottle', 'stripped_jungle_wood'])
	event.shapeless('4x kubejs:latex_rosewood_log', ['kubejs:latex_bucket', '4x atmospheric:stripped_rosewood_log'])
	event.shapeless('4x kubejs:latex_rosewood', ['kubejs:latex_bucket', '4x atmospheric:stripped_rosewood'])
	event.shapeless('kubejs:latex_rosewood_log', ['kubejs:latex_bottle', 'atmospheric:stripped_rosewood_log'])
	event.shapeless('kubejs:latex_rosewood', ['kubejs:latex_bottle', 'atmospheric:stripped_rosewood'])
	event.shapeless('culturaldelights:corn_kernels', ['culturaldelights:corn_cob'])
	event.shapeless('caverns_and_chasms:bejeweled_apple', ['apple', 'additionaladditions:rose_gold_alloy'])
	event.shapeless('2x tuff', ['cobblestone', ['cobbled_deepslate', 'basalt', 'smooth_basalt']]).id('caverns_and_chasms:tuff')
	event.shapeless('3x kubejs:cobbled_blackstone', ['3x create:scorchia', 'black_dye'])
	event.shapeless('kubejs:squid_sandwich', ['#forge:bread/wheat', 'miners_delight:baked_squid'])
	event.shapeless('kubejs:cave_burger', ['#forge:bread/wheat', 'miners_delight:baked_tentacles', 'miners_delight:smoked_bat_wing', '#raspberry_flavoured:cave_scrap_ingredients', '#raspberry_flavoured:cave_scrap_ingredients'])
	event.shapeless('4x create:portable_storage_interface', ['toms_storage:ts.inventory_connector', '4x create:chute']).id('create:crafting/kinetics/portable_storage_interface')
	event.shapeless('create:portable_fluid_interface', ['create:portable_storage_interface', 'create:fluid_tank']).id('create:crafting/kinetics/portable_fluid_interface')
	event.shapeless('kubejs:preserved_skewer', ['brewinandchewin:kippers', 'brewinandchewin:jerky', '2x brewinandchewin:kimchi', 'stick'])
	event.shapeless('spelunkery:portal_fluid_bottle', ['crying_obsidian', 'glass_bottle']).replaceIngredient('crying_obsidian', 'obsidian')
	event.shapeless('aquaculture:double_hook', ['aquaculture:light_hook', 'aquaculture:heavy_hook']).id('aquaculture:double_hook')
	event.shapeless('2x heartstone:heartstone', ['2x ender_pearl', '2x spelunkery:cinnabar']).id('heartstone:heartstone')
	event.shapeless('domesticationinnovation:deed_of_ownership', ['domesticationinnovation:deed_of_ownership']).id('kubejs:deed_of_ownership_clear')
	event.shapeless('4x alloyed:bronze_ingot', ['3x copper_ingot', '2x create:zinc_ingot', 'oreganized:lead_ingot'])
	event.shapeless('farmersdelight:fruit_salad', ['#raspberry_flavoured:apples', 'melon_slice', 'farmersdelight:pumpkin_slice', '#raspberry_flavoured:berries', '#raspberry_flavoured:berries', 'bowl']).id('farmersdelight:fruit_salad')
	event.shapeless('string', ['6x environmental:cattail_seeds']).id('environmental:string_from_cattail_seeds')
	event.shapeless('kubejs:batter_bucket', ['bucket', '4x kubejs:batter'])
	event.shapeless('4x kubejs:batter', ['kubejs:batter_bucket', '4x bowl'])
	event.shapeless('cookscollection:cooking_oil', ['glass_bottle', '2x sunflower']).id('cookscollection:sunflower_oil')
	event.shapeless('cookscollection:cooking_oil', ['glass_bottle', '8x supplementaries:flax_seeds'])
	event.shapeless('4x cookscollection:cooking_oil', ['kubejs:cooking_oil_bucket', '4x glass_bottle'])
	event.shapeless('kubejs:cooking_oil_bucket', ['bucket', '4x cookscollection:cooking_oil'])
	event.shapeless('cookscollection:fish_and_chips', ['2x #forge:cooked_fishes', 'bowl', 'cookscollection:fried_potato', '#forge:crops/onion', 'cookscollection:lemon']).id('cookscollection:fish_and_chips')
	event.shapeless('kubejs:pumpkin_pie', ['4x create_central_kitchen:pumpkin_pie_slice']).id('create_central_kitchen:crafting/pumpkin_pie_from_slices')
	event.shapeless('brewinandchewin:pizza', ['4x brewinandchewin:pizza_slice'])
	event.shapeless('4x quark:bamboo_planks', ['#quark:bamboo_logs']).id('quark:building/crafting/woodsets/bamboo/planks')
	event.shapeless('leather', ['rotten_flesh', '4x spelunkery:salt'])
	event.shapeless('farmersdelight:mixed_salad', ['#forge:crops/cabbage', '#forge:crops/tomato', 'bowl', '#forge:crops/beetroot', 'cookscollection:cooking_oil']).id('farmersdelight:mixed_salad')
	event.shapeless('farmersdelight:pie_crust', ['2x #farmersdelight:wheat_or_flour', 'sugar', 'spelunkery:salt'])
	event.shapeless('create_confectionery:cocoa_butter', ['cocoa_beans', '#forge:milk'])
	event.shapeless('pink_dye', ['2x raspberry:pink_petals']).id('raspberry:pink_dye_from_pink_petals')
	event.shapeless('yellow_dye', ['2x raspberry:cheery_wildflowers']).id('raspberry:yellow_dye_from_wildflowers')
	event.shapeless('purple_dye', ['2x raspberry:moody_wildflowers']).id('raspberry:purple_dye_from_wildflowers')
	event.shapeless('2x stick', ['spelunkery:tangle_roots'])
	event.shapeless('supplementaries:cog_block', ['#forge:stone', 'redstone']).id('supplementaries:cog_block')
	event.shapeless('8x quark:dirty_glass', ['#minecraft:dirt', '8x glass']).id('quark:tweaks/crafting/dirty_glass')
	event.shapeless('8x quark:dirty_glass_pane', ['#minecraft:dirt', '8x glass_pane'])
	event.shapeless('snow_block', ['8x snow']).id('minecraft:snow_block')
	event.shapeless('raspberry:ash_block', ['8x supplementaries:ash']).id('raspberry:ash_block')
	event.shapeless('8x snow', ['snow_block'])
	event.shapeless('8x supplementaries:ash', ['raspberry:ash_block'])
	event.shapeless('create:sand_paper', ['paper', '#minecraft:sand']).id('create:crafting/materials/sand_paper')
	event.shapeless('green_dye', ['6x raspberry:clovers'])
	
	event.shapeless('raspberry:cake', ['7x farmersdelight:cake_slice'])
	event.shapeless('raspberry:vanilla_cake', ['7x abnormals_delight:vanilla_cake_slice'])
	event.shapeless('raspberry:chocolate_cake', ['7x abnormals_delight:chocolate_cake_slice'])
	event.shapeless('raspberry:strawberry_cake', ['7x abnormals_delight:strawberry_cake_slice'])
	event.shapeless('raspberry:banana_cake', ['7x abnormals_delight:banana_cake_slice'])
	event.shapeless('raspberry:mint_cake', ['7x abnormals_delight:mint_cake_slice'])
	event.shapeless('raspberry:cherry_cake', ['7x abnormals_delight:adzuki_cake_slice'])
	event.shapeless('raspberry:green_tea_cake', ['7x respiteful:green_tea_cake_slice'])
	event.shapeless('raspberry:yellow_tea_cake', ['7x respiteful:yellow_tea_cake_slice'])
	event.shapeless('raspberry:black_tea_cake', ['7x respiteful:black_tea_cake_slice'])
	event.shapeless('raspberry:coffee_cake', ['7x farmersrespite:coffee_cake_slice'])
	event.shapeless('raspberry:magma_cake', ['7x mynethersdelight:magma_cake_slice'])
	
	event.shapeless('quark:pipe', ['quark:encased_pipe']).replaceIngredient('quark:encased_pipe', 'quark:framed_glass').id('quark:oddities/crafting/encased_pipe_revert')
	
	event.shapeless('chest', ['chest_minecart']).replaceIngredient('chest_minecart', 'minecart')
	event.shapeless('furnace', ['furnace_minecart']).replaceIngredient('furnace_minecart', 'minecart')
	event.shapeless('tnt', ['tnt_minecart']).replaceIngredient('tnt_minecart', 'minecart')
	event.shapeless('hopper', ['hopper_minecart']).replaceIngredient('hopper_minecart', 'minecart')
	event.shapeless('oreganized:shrapnel_bomb', ['oreganized:shrapnel_bomb_minecart']).replaceIngredient('oreganized:shrapnel_bomb_minecart', 'minecart')
	event.shapeless('dispenser', ['supplementaries:dispenser_minecart']).replaceIngredient('supplementaries:dispenser_minecart', 'minecart')
	
	event.shapeless('chest', ['oak_chest_boat']).replaceIngredient('oak_chest_boat', 'oak_boat')
	event.shapeless('chest', ['spruce_chest_boat']).replaceIngredient('spruce_chest_boat', 'spruce_boat')
	event.shapeless('chest', ['birch_chest_boat']).replaceIngredient('birch_chest_boat', 'birch_boat')
	event.shapeless('chest', ['jungle_chest_boat']).replaceIngredient('jungle_chest_boat', 'jungle_boat')
	event.shapeless('chest', ['acacia_chest_boat']).replaceIngredient('acacia_chest_boat', 'acacia_boat')
	event.shapeless('chest', ['dark_oak_chest_boat']).replaceIngredient('dark_oak_chest_boat', 'dark_oak_boat')
	event.shapeless('chest', ['mangrove_chest_boat']).replaceIngredient('mangrove_chest_boat', 'mangrove_boat')
	event.shapeless('chest', ['boatload:crimson_chest_boat']).replaceIngredient('boatload:crimson_chest_boat', 'boatload:crimson_boat')
	event.shapeless('chest', ['boatload:warped_chest_boat']).replaceIngredient('boatload:warped_chest_boat', 'boatload:warped_boat')
	event.shapeless('chest', ['windswept:chestnut_chest_boat']).replaceIngredient('windswept:chestnut_chest_boat', 'windswept:chestnut_boat')
	event.shapeless('chest', ['ecologics:coconut_chest_boat']).replaceIngredient('ecologics:coconut_chest_boat', 'ecologics:coconut_boat')
	event.shapeless('chest', ['ecologics:azalea_chest_boat']).replaceIngredient('ecologics:azalea_chest_boat', 'ecologics:azalea_boat')
	event.shapeless('chest', ['environmental:willow_chest_boat']).replaceIngredient('environmental:willow_chest_boat', 'environmental:willow_boat')
	event.shapeless('chest', ['environmental:wisteria_chest_boat']).replaceIngredient('environmental:wisteria_chest_boat', 'environmental:wisteria_boat')
	event.shapeless('chest', ['environmental:cherry_chest_boat']).replaceIngredient('environmental:cherry_chest_boat', 'environmental:cherry_boat')
	event.shapeless('chest', ['upgrade_aquatic:driftwood_chest_boat']).replaceIngredient('upgrade_aquatic:driftwood_chest_boat', 'upgrade_aquatic:driftwood_boat')
	event.shapeless('chest', ['autumnity:maple_chest_boat']).replaceIngredient('autumnity:maple_chest_boat', 'autumnity:maple_boat')
	event.shapeless('chest', ['atmospheric:rosewood_chest_boat']).replaceIngredient('atmospheric:rosewood_chest_boat', 'atmospheric:rosewood_boat')
	event.shapeless('chest', ['atmospheric:morado_chest_boat']).replaceIngredient('atmospheric:morado_chest_boat', 'atmospheric:morado_boat')
	event.shapeless('chest', ['atmospheric:yucca_chest_boat']).replaceIngredient('atmospheric:yucca_chest_boat', 'atmospheric:yucca_boat')
	
	event.shapeless('furnace', ['boatload:oak_furnace_boat']).replaceIngredient('boatload:oak_furnace_boat', 'oak_boat')
	event.shapeless('furnace', ['boatload:spruce_furnace_boat']).replaceIngredient('boatload:spruce_furnace_boat', 'spruce_boat')
	event.shapeless('furnace', ['boatload:birch_furnace_boat']).replaceIngredient('boatload:birch_furnace_boat', 'birch_boat')
	event.shapeless('furnace', ['boatload:jungle_furnace_boat']).replaceIngredient('boatload:jungle_furnace_boat', 'jungle_boat')
	event.shapeless('furnace', ['boatload:acacia_furnace_boat']).replaceIngredient('boatload:acacia_furnace_boat', 'acacia_boat')
	event.shapeless('furnace', ['boatload:dark_oak_furnace_boat']).replaceIngredient('boatload:dark_oak_furnace_boat', 'dark_oak_boat')
	event.shapeless('furnace', ['boatload:mangrove_furnace_boat']).replaceIngredient('boatload:mangrove_furnace_boat', 'mangrove_boat')
	event.shapeless('furnace', ['boatload:crimson_furnace_boat']).replaceIngredient('boatload:crimson_furnace_boat', 'boatload:crimson_boat')
	event.shapeless('furnace', ['boatload:warped_furnace_boat']).replaceIngredient('boatload:warped_furnace_boat', 'boatload:warped_boat')
	event.shapeless('furnace', ['windswept:chestnut_furnace_boat']).replaceIngredient('windswept:chestnut_furnace_boat', 'windswept:chestnut_boat')
	event.shapeless('furnace', ['windswept:holly_furnace_boat']).replaceIngredient('windswept:holly_furnace_boat', 'ecologics:coconut_boat')
	event.shapeless('furnace', ['atmospheric:kousa_furnace_boat']).replaceIngredient('atmospheric:kousa_furnace_boat', 'ecologics:azalea_boat')
	event.shapeless('furnace', ['environmental:willow_furnace_boat']).replaceIngredient('environmental:willow_furnace_boat', 'environmental:willow_boat')
	event.shapeless('furnace', ['environmental:wisteria_furnace_boat']).replaceIngredient('environmental:wisteria_furnace_boat', 'environmental:wisteria_boat')
	event.shapeless('furnace', ['environmental:cherry_furnace_boat']).replaceIngredient('environmental:cherry_furnace_boat', 'environmental:cherry_boat')
	event.shapeless('furnace', ['upgrade_aquatic:driftwood_furnace_boat']).replaceIngredient('upgrade_aquatic:driftwood_furnace_boat', 'upgrade_aquatic:driftwood_boat')
	event.shapeless('furnace', ['autumnity:maple_furnace_boat']).replaceIngredient('autumnity:maple_furnace_boat', 'autumnity:maple_boat')
	event.shapeless('furnace', ['atmospheric:rosewood_furnace_boat']).replaceIngredient('atmospheric:rosewood_furnace_boat', 'atmospheric:rosewood_boat')
	event.shapeless('furnace', ['atmospheric:morado_furnace_boat']).replaceIngredient('atmospheric:morado_furnace_boat', 'atmospheric:morado_boat')
	event.shapeless('furnace', ['atmospheric:yucca_furnace_boat']).replaceIngredient('atmospheric:yucca_furnace_boat', 'atmospheric:yucca_boat')
	
	// unused item compensation
	event.shapeless('kubejs:loot_bag', ['#raspberry:disabled'])
	event.shapeless('raspberry:deepslate_gravel', ['kubejs:deepslate_gravel'])
	event.shapeless('raspberry:blackstone_gravel', ['kubejs:blackstone_gravel'])
	event.shapeless('netherite_ingot', ['supplementaries:safe'])

// Shaped crafting
	allColours.forEach(colour => {
        event.shaped('3x kubejs:'+colour+'_cloth_scrap_carpet', ['AA'], {A: 'kubejs:'+colour+'_cloth_scrap_block'})
        event.shaped('create:'+colour+'_toolbox', ['EAE', 'C C', 'BDB'], {A: 'minecraft:'+colour+'_dye', B: 'create:cogwheel', C: '#minecraft:planks', D: 'gold_block', E: 'create:golden_sheet'})
    })
	
	noWhiteAllColours.forEach(colour => {
        event.shaped('minecraft:'+colour+'_bed', ['CCC', 'AAA', 'BBB'], {A: ['minecraft:'+colour+'_wool', 'kubejs:'+colour+'_cloth_scrap_block'], B: '#minecraft:planks', C: 'kubejs:cloth_scrap'}).id('minecraft:'+colour+'_bed')
        event.shaped('3x minecraft:'+colour+'_banner', ['AAA', 'AAA', ' B '], {A: ['minecraft:'+colour+'_wool', 'kubejs:'+colour+'_cloth_scrap_block'], B: 'stick'}).id('minecraft:'+colour+'_banner')
        event.shaped('3x supplementaries:flag_'+colour, ['AAA', 'AAA', 'B  '], {A: ['minecraft:'+colour+'_wool', 'kubejs:'+colour+'_cloth_scrap_block'], B: 'stick'}).id('supplementaries:flags/flag_'+colour)
        event.shaped('3x another_furniture:'+colour+'_stool', ['BAB', 'C C'], {A: ['minecraft:'+colour+'_wool', 'kubejs:'+colour+'_cloth_scrap_block'], B: '#minecraft:planks', C: 'stick'}).id('another_furniture:'+colour+'_stool')
        event.shaped('3x another_furniture:'+colour+'_tall_stool', ['BAB', 'CCC', 'C C'], {A: ['minecraft:'+colour+'_wool', 'kubejs:'+colour+'_cloth_scrap_block'], B: '#minecraft:planks', C: 'stick'}).id('another_furniture:'+colour+'_tall_stool')
        event.shaped('3x another_furniture:'+colour+'_curtain', ['BB', 'AA', 'AA'], {A: ['minecraft:'+colour+'_wool', 'kubejs:'+colour+'_cloth_scrap_block'], B: 'stick'}).id('another_furniture:'+colour+'_curtain')
        event.shaped('3x another_furniture:'+colour+'_lamp', [' A ', 'ACA', ' B '], {A: ['minecraft:'+colour+'_wool', 'kubejs:'+colour+'_cloth_scrap_block'], B: 'stick', C: 'torch'}).id('another_furniture:'+colour+'_lamp')
        event.shaped('3x another_furniture:'+colour+'_sofa', ['CA ', 'CAA', 'B B'], {A: ['minecraft:'+colour+'_wool', 'kubejs:'+colour+'_cloth_scrap_block'], B: 'stick', C: '#minecraft:planks'}).id('another_furniture:'+colour+'_sofa')
        event.shaped('domesticationinnovation:pet_bed_'+colour, ['AAA', 'CBC'], {A: ['minecraft:'+colour+'_wool', 'kubejs:'+colour+'_cloth_scrap_block'], B: 'bone', C: '#minecraft:planks'}).id('domesticationinnovation:pet_bed_'+colour)
    })
	
	function twoByTwo(inputItem, resultItem, resultAmount) {
		event.shaped(Item.of(resultItem,resultAmount), ['AA', 'AA'], {A: inputItem})
	}
	
	function threeByThree(inputItem, resultItem, resultAmount) {
		event.shaped(Item.of(resultItem,resultAmount), ['AAA', 'AAA', 'AAA'], {A: inputItem})
	}
	
	twoByTwo('kubejs:cloth_scrap', 'kubejs:cloth_scrap_block', 1)
	twoByTwo('kubejs:rubber', 'kubejs:rubber_block', 1)
	twoByTwo('quark:clear_shard', 'glass', 1)
	twoByTwo('ecologics:surface_moss', 'moss_block', 1)
	twoByTwo('autumnity:large_pumpkin_slice', 'pumpkin', 4)
	twoByTwo('redstone_lamp', 'additionaladditions:amethyst_lamp', 4)
	twoByTwo('copper_ingot', 'copper_block', 4)
	twoByTwo('quartz', 'quartz_block', 4)
	twoByTwo('amethyst_block', 'sullysmod:polished_jade_block', 4)
	twoByTwo('farmersdelight:straw', 'farmersdelight:canvas', 2)
	twoByTwo('supplementaries:flax', 'farmersdelight:canvas', 4)
	twoByTwo('kubejs:exolite', 'architects_palette:cerebral_block', 4)
	twoByTwo('architects_palette:cerebral_block', 'architects_palette:mushy_myonite_bricks', 4)
	twoByTwo('architects_palette:algal_brick', 'architects_palette:algal_bricks', 2)
	twoByTwo('twigs:silt_brick', 'twigs:silt_bricks', 2)
	twoByTwo('red_mushroom', 'red_mushroom_block', 1)
	twoByTwo('brown_mushroom', 'brown_mushroom_block', 1)
	twoByTwo('crimson_fungus', 'nether_wart_block', 1)
	twoByTwo('warped_fungus', 'warped_wart_block', 1)
	twoByTwo('architects_palette:twisted_sapling', 'kubejs:choral_cap', 1)
	twoByTwo('spelunkery:portabella', 'spelunkery:portabella_block', 1)
	twoByTwo('spelunkery:inkcap_mushroom', 'spelunkery:inkcap_mushroom_block', 1)
	twoByTwo('spelunkery:white_inkcap_mushroom', 'spelunkery:white_inkcap_mushroom_block', 1)
	twoByTwo('spelunkery:milly_bubcap', 'spelunkery:milly_bubcap_block', 1)
	twoByTwo('quark:glow_shroom', 'quark:glow_shroom_block', 1)
	twoByTwo('sand', 'sandstone', 4)
	twoByTwo('red_sand', 'red_sandstone', 4)
	twoByTwo('atmospheric:arid_sand', 'atmospheric:arid_sandstone', 4)
	twoByTwo('atmospheric:red_arid_sand', 'atmospheric:red_arid_sandstone', 4)
	twoByTwo('atmospheric:cut_arid_sandstone', 'atmospheric:arid_sandstone_bricks', 4)
	twoByTwo('atmospheric:cut_red_arid_sandstone', 'atmospheric:red_arid_sandstone_bricks', 4)
	twoByTwo('soul_sand', 'quark:soul_sandstone', 4)
	twoByTwo('everycomp:abnww/ecologics/coconut_leaf_pile', 'ecologics:coconut_leaves', 1)
	twoByTwo('everycomp:abnww/culturaldelights/avocado_leaf_pile', 'culturaldelights:avocado_leaves', 1)
	twoByTwo('raspberry:deepslate_gravel', 'kubejs:deepslate_gravel_bricks', 4)
	twoByTwo('stone', 'smooth_stone', 4)
	twoByTwo('neapolitan:banana_bunch', 'neapolitan:banana_bundle', 1)
	twoByTwo('atmospheric:yucca_fruit', 'atmospheric:yucca_bundle', 1)
	twoByTwo('atmospheric:roasted_yucca_fruit', 'atmospheric:roasted_yucca_bundle', 1)
	twoByTwo('snow', 'snowball', 4)
	twoByTwo('supplementaries:ash', 'raspberry:ashball', 4)
	
	threeByThree('amethyst_shard', 'twigs:polished_amethyst', 1)
	threeByThree('string', 'architects_palette:spool', 1)
	threeByThree('twigs:pebble', 'cobblestone', 1)
	threeByThree('twigs:twig', 'quark:stick_block', 2)
	threeByThree('ender_pearl', 'architects_palette:ender_pearl_block', 1)
	threeByThree('paper', 'kubejs:paper_block', 1)
	threeByThree('kubejs:cobbled_blackstone', 'kubejs:sturdy_blackstone', 1)
	threeByThree('alloyed:bronze_ingot', 'kubejs:bronze_block', 1)
	threeByThree('cookscollection:lemon', 'cookscollection:lemon_crate', 1)
	threeByThree('additionaladditions:rose_gold_alloy', 'kubejs:rose_gold_block', 1)
	threeByThree('kubejs:rose_gold_nugget', 'additionaladditions:rose_gold_alloy', 1)
	threeByThree('create:wheat_flour', 'kubejs:wheat_flour_bag', 1)
	threeByThree('create:cinder_flour', 'kubejs:cinder_flour_bag', 1)
	threeByThree('kubejs:corn_flour', 'kubejs:corn_flour_bag', 1)
	threeByThree('kubejs:cinnamon', 'kubejs:cinnamon_bag', 1)
	threeByThree('kubejs:oats', 'kubejs:oat_bag', 1)
	
	event.shaped('minecraft:white_bed', ['CCC', 'AAA', 'BBB'], {A: ['minecraft:white_wool', 'kubejs:cloth_scrap_block', 'kubejs:white_cloth_scrap_block', 'supplementaries:feather_block'], B: '#minecraft:planks', C: 'kubejs:cloth_scrap'}).id('minecraft:white_bed')
    event.shaped('3x minecraft:white_banner', ['AAA', 'AAA', ' B '], {A: ['minecraft:white_wool', 'kubejs:cloth_scrap_block', 'kubejs:white_cloth_scrap_block', 'supplementaries:feather_block'], B: 'stick'}).id('minecraft:white_banner')
    event.shaped('3x supplementaries:flag_white', ['AAA', 'AAA', 'B  '], {A: ['minecraft:white_wool', 'kubejs:cloth_scrap_block', 'kubejs:white_cloth_scrap_block', 'supplementaries:feather_block'], B: 'stick'}).id('supplementaries:flags/flag_white')
    event.shaped('3x another_furniture:white_stool', ['BAB', 'C C'], {A: ['minecraft:white_wool', 'kubejs:cloth_scrap_block', 'kubejs:white_cloth_scrap_block', 'supplementaries:feather_block'], B: '#minecraft:planks', C: 'stick'}).id('another_furniture:white_stool')
    event.shaped('3x another_furniture:white_tall_stool', ['BAB', 'CCC', 'C C'], {A: ['minecraft:white_wool', 'kubejs:cloth_scrap_block', 'kubejs:white_cloth_scrap_block', 'supplementaries:feather_block'], B: '#minecraft:planks', C: 'stick'}).id('another_furniture:white_tall_stool')
    event.shaped('3x another_furniture:white_curtain', ['BB', 'AA', 'AA'], {A: ['minecraft:white_wool', 'kubejs:cloth_scrap_block', 'kubejs:white_cloth_scrap_block', 'supplementaries:feather_block'], B: 'stick'}).id('another_furniture:white_curtain')
    event.shaped('3x another_furniture:white_lamp', [' A ', 'ACA', ' B '], {A: ['minecraft:white_wool', 'kubejs:cloth_scrap_block', 'kubejs:white_cloth_scrap_block', 'supplementaries:feather_block'], B: 'stick', C: 'torch'}).id('another_furniture:white_lamp')
    event.shaped('3x another_furniture:white_sofa', ['CA ', 'CAA', 'B B'], {A: ['minecraft:white_wool', 'kubejs:cloth_scrap_block', 'kubejs:white_cloth_scrap_block', 'supplementaries:feather_block'], B: 'stick', C: '#minecraft:planks'}).id('another_furniture:white_sofa')
    event.shaped('domesticationinnovation:pet_bed_white', ['AAA', 'CBC'], {A: ['minecraft:white_wool', 'kubejs:cloth_scrap_block', 'kubejs:white_cloth_scrap_block', 'supplementaries:feather_block'], B: 'bone', C: '#minecraft:planks'}).id('domesticationinnovation:pet_bed_white')
	event.shaped('3x kubejs:cloth_scrap_carpet', ['AA'], {A: 'kubejs:cloth_scrap_block'})
	
	event.shaped('2x minecraft:flower_pot', ['ABA', ' A '], {A: 'minecraft:brick', B: 'minecraft:dirt'}).id('minecraft:flower_pot')
	event.shaped('3x supplementaries:netherite_door', ['AA', 'AA', 'AA'], {A: 'oreganized:lead_ingot'})
	event.shaped('6x supplementaries:netherite_trapdoor', ['AAA', 'AAA'], {A: 'oreganized:lead_ingot'})
	event.shaped('6x alloyed:steel_trapdoor', ['AAA', 'AAA'], {A: 'alloyed:steel_ingot'}).id('alloyed:crafting/steel_trapdoor')
	event.shaped('3x copperandtuffbackport:copper_door', ['AA', 'AA', 'AA'], {A: 'copper_ingot'}).id('copperandtuffbackport:copper_door')
	event.shaped('6x copperandtuffbackport:copper_trapdoor', ['AAA', 'AAA'], {A: 'copper_ingot'}).id('copperandtuffbackport:copper_trapdoor')
	event.shaped('6x architects_palette:twisted_trapdoor', ['AAA', 'AAA'], {A: 'architects_palette:twisted_planks'}).id('architects_palette:twisted_trapdoor')
	event.shaped('6x mynethersdelight:powdery_trapdoor', ['AAA', 'AAA'], {A: 'mynethersdelight:powdery_planks'}).id('mynethersdelight:powdery_trapdoor')
	event.shaped('another_furniture:furniture_hammer', ['BBB', 'BAB', ' A '], {A: 'minecraft:stick', B: 'copper_ingot'}).id('another_furniture:furniture_hammer')
	event.shaped('4x architects_palette:tuff_bricks', ['BA', 'AA'], {A: 'minecraft:tuff', B: 'paletteblocks:cobblestone_bricks'}).id('architects_palette:tuff_bricks')
	event.shaped('4x architects_palette:calcite_bricks', ['BA', 'AA'], {A: 'minecraft:calcite', B: 'paletteblocks:cobblestone_bricks'}).id('architects_palette:calcite_bricks')
	event.shaped('4x architects_palette:dripstone_bricks', ['BA', 'AA'], {A: 'minecraft:dripstone_block', B: 'paletteblocks:cobblestone_bricks'}).id('architects_palette:dripstone_bricks')
	event.shaped('4x twigs:smooth_basalt_bricks', ['BA', 'AA'], {A: 'minecraft:smooth_basalt', B: 'paletteblocks:cobblestone_bricks'}).id('twigs:smooth_basalt_bricks')
	event.shaped('4x architects_palette:sunstone', ['AB', 'BA'], {A: 'minecraft:basalt', B: 'alloyed:bronze_ingot'}).id('architects_palette:sunstone')
	event.shaped('8x architects_palette:plating_block', [' B ', 'BAB', ' B '], {A: ['#forge:ingots/iron', '#forge:ingots/lead'], B: ['#forge:nuggets/iron', '#forge:nuggets/lead']}).id('architects_palette:plating_block')
	event.shaped('incubation:twig_nest', ['A A', 'AAA'], {A: 'twigs:twig'})
	event.shaped('etched:blank_music_disc', ['AAA', 'A A', 'AAA'], {A: 'minecraft:disc_fragment_5'})
	event.shaped('quark:torch_arrow', ['A', 'B'], {A: '#minecraft:coals', B: 'minecraft:arrow'}).id('quark:tools/crafting/torch_arrow')
	event.shaped('create:peculiar_bell', [' B ', 'BAB', ' B '], {A: 'minecraft:bell', B: 'create:brass_ingot'}).id('create:crafting/curiosities/peculiar_bell')
	event.shaped('2x minecraft:ender_chest', ['AAA', 'ABA', 'AAA'], {A: 'obsidian', B: 'ender_eye'}).id('minecraft:ender_chest')
	event.shaped('8x supplementaries:slice_map', ['AAA', 'ABA', 'AAA'], {A: 'minecraft:map', B: 'caverns_and_chasms:depth_gauge'}).id('supplementaries:slice_map')
	event.shaped('etched:etching_table', ['BC', 'DD', 'AA'], {A: '#minecraft:planks', B: 'diamond', C: 'iron_ingot', D: 'alloyed:bronze_ingot'}).id('etched:etching_table')
	event.shaped('etched:radio', ['B', 'C', 'A'], {A: '#minecraft:planks', B: 'iron_nugget', C: 'alloyed:bronze_ingot'}).id('etched:radio')
	event.shaped('4x note_block', ['CAC', 'ABA', 'CAC'], {A: '#minecraft:planks', B: 'redstone', C: 'alloyed:bronze_ingot'}).id('minecraft:note_block')
	event.shaped('etched:boombox', [' C ', 'BAB'], {A: 'etched:album_jukebox', B: 'alloyed:bronze_ingot', C: 'alloyed:bronze_ingot'}).id('etched:boombox')
	event.shaped('4x spectral_arrow', [' B ', 'BAB', ' B '], {A: ['glowstone_dust', 'naturalist:glow_goop'], B: 'arrow'}).id('minecraft:spectral_arrow')
	event.shaped('2x upgrade_aquatic:prismarine_rod', ['A', 'A'], {A: 'prismarine_shard'}).id('upgrade_aquatic:prismarine_rod')
	event.shaped('2x architects_palette:entwine_rod', ['ABA'], {A: 'additionaladditions:copper_patina', B: 'upgrade_aquatic:prismarine_rod'}).id('architects_palette:entwine_rod')
	event.shaped('architects_palette:gilded_sandstone', ['AB', 'BA'], {A: 'sandstone', B: ['spelunkery:raw_gold_nugget', 'gold_nugget']}).id('architects_palette:gilded_sandstone')
	event.shaped('2x twigs:silt_shingles', ['AA'], {A: 'twigs:packed_silt'}).id('twigs:silt_shingles')
	event.shaped('12x create:andesite_alloy', ['AB', 'BA'], {A: '#raspberry_flavoured:sturdy_stone', B: 'create:zinc_ingot'}).id('create:crafting/materials/andesite_alloy_from_zinc')
	event.shaped('caverns_and_chasms:tuning_fork', ['B B', 'B B', ' A '], {A: 'alloyed:bronze_ingot', B: 'alloyed:bronze_nugget'}).id('caverns_and_chasms:tuning_fork')
	event.shaped('exposure:camera', ['BAB', 'ACA', 'BAB'], {A: 'gold_ingot', B: '#minecraft:planks', C: '#forge:glass'}).id('exposure:camera')
	event.shaped('6x exposure:black_and_white_film', ['ABB', 'ACC', 'ADD'], {A: 'iron_ingot', B: 'bone_meal', C: 'gunpowder', D: 'dried_kelp'}).id('exposure:black_and_white_film')
	event.shaped('6x exposure:color_film', ['ABB', 'ACC', 'ADD'], {A: 'gold_ingot', B: 'amethyst_shard', C: 'spelunkery:cinnabar', D: 'kubejs:rubber'}).id('exposure:color_film')
	event.shaped('vc_gliders:paraglider_wood', ['ABA', 'ABA', 'BCB'], {A: 'create:white_sail', B: 'stick', C: 'phantom_membrane'}).id('vc_gliders:paraglider_wood')
	event.shaped('8x minecraft:scaffolding', ['ABA', 'A A', 'A A'], {A: '#raspberry_flavoured:bamboolikes', B: ['string', 'farmersdelight:canvas']}).id('minecraft:scaffolding')
	event.shaped('6x hopper', ['A A', 'ABA', ' A '], {A: 'iron_ingot', B: ['#forge:chests/wooden', '#forge:barrels/wooden']}).id('minecraft:hopper')
	event.shaped('3x hopper', ['A A', 'ABA', ' A '], {A: 'oreganized:lead_ingot', B: ['#forge:chests/wooden', '#forge:barrels/wooden']})
	event.shaped('upgrade_aquatic:bedroll', ['BB', 'AA'], {A: 'farmersdelight:canvas', B: 'kubejs:cloth_scrap'}).id('upgrade_aquatic:bedroll')
	event.shaped('8x caverns_and_chasms:amethyst_block', ['AAA', 'ABA', 'AAA'], {A: 'amethyst_block', B: 'amethyst_shard'}).id('caverns_and_chasms:amethyst_block')
	event.shaped('8x caverns_and_chasms:cut_amethyst', ['AAA', 'A A', 'AAA'], {A: 'amethyst_block'}).id('caverns_and_chasms:cut_amethyst')
	event.shaped('6x twigs:cut_amethyst', ['ABA', 'BAB', 'ABA'], {A: 'amethyst_block', B: 'amethyst_shard'}).id('twigs:cut_amethyst')
	event.shaped('minecraft:smithing_table', ['AA', 'BB', 'BB'], {A: ['iron_ingot', 'oreganized:lead_ingot'], B: '#minecraft:planks'}).id('minecraft:smithing_table')
	event.shaped('supplementaries:spring_launcher', ['BBB', 'ACA', 'ADA'], {A: ['iron_ingot', 'oreganized:lead_ingot'], B: '#minecraft:planks', C: 'kubejs:rubber', D: 'piston'}).id('supplementaries:spring_launcher')
	event.shaped('2x name_tag', [' BA', 'BBB', 'BB '], {A: 'chain', B: ['paper', 'farmersdelight:canvas', 'kubejs:cloth_scrap']})
	event.shaped('saddle', ['BBB', ' A '], {A: 'chain', B: '#minecraft:leather_cuts'})
	event.shaped('2x chain', ['A', 'A', 'A'], {A: 'iron_nugget'}).id('minecraft:chain')
	event.shaped('chain', ['A', 'A', 'A'], {A: 'oreganized:lead_nugget'})
	event.shaped('4x chain', ['A', 'A', 'A'], {A: 'alloyed:steel_nugget'})
	event.shaped('create:mechanical_drill', ['DBD', 'CBC', ' A '], {A: 'alloyed:steel_casing', B: 'alloyed:steel_ingot', C: 'alloyed:steel_sheet', D: 'alloyed:steel_nugget'}).id('create:crafting/kinetics/mechanical_drill')
	event.shaped('create:mechanical_saw', [' C ', 'CBC', ' A '], {A: 'alloyed:steel_casing', B: 'alloyed:steel_ingot', C: 'alloyed:steel_sheet'}).id('create:crafting/kinetics/mechanical_saw')
	event.shaped('create:mechanical_roller', ['C', 'A', 'B'], {A: 'alloyed:steel_casing', B: 'create:crushing_wheel', C: 'create:electron_tube'}).id('create:crafting/kinetics/mechanical_roller')
	event.shaped('create:encased_fan', [' C ', ' A ', 'BDB'], {A: 'alloyed:steel_casing', B: 'alloyed:steel_sheet', C: 'create:shaft', D: 'alloyed:steel_ingot'}).id('create:crafting/kinetics/encased_fan')
	event.shaped('kubejs:bone_knife', ['B', 'A'], {A: 'stick', B: '#brewinandchewin:bone_or_withered_bone'})
	event.shaped('sculk_sensor', ['B B', 'AAA', 'ACA'], {A: 'sculk', B: 'sculk_vein', C: 'echo_shard'})
	event.shaped('24x caverns_and_chasms:kunai', [' A', 'B '], {A: 'oreganized:silver_ingot', B: 'oreganized:silver_nugget'}).id('caverns_and_chasms:kunai')
	event.shaped('4x quark:midori_block', ['BA', 'AB'], {A: '#raspberry_flavoured:moss', B: 'additionaladditions:copper_patina'}).id('quark:building/crafting/midori_block')
	event.shaped('4x prismarine_bricks', ['AA', 'AA'], {A: 'prismarine'}).id('minecraft:prismarine_bricks')
	event.shaped('4x sea_lantern', ['ABA', 'BBB', 'ABA'], {A: 'prismarine_shard', B: 'prismarine_crystals'}).id('minecraft:sea_lantern')
	event.shaped('4x quark:blaze_lantern', ['ABA', 'BBB', 'ABA'], {A: 'blaze_rod', B: 'blaze_powder'}).id('quark:building/crafting/blaze_lantern')
	event.shaped('5x quark:framed_glass', ['ABA', 'BAB', 'ABA'], {A: ['glass', 'create:tiled_glass', 'create:framed_glass', 'create:horizontal_framed_glass', 'create:vertical_framed_glass'], B: ['iron_nugget', 'oreganized:lead_nugget']}).id('quark:building/crafting/framed_glass')
	event.shaped('supplementaries:quiver', ['BB', 'AA', 'AA'], {A: '#minecraft:leather_cuts', B: 'kubejs:cloth_scrap'})
	event.shaped('4x create:track', ['ABA', 'ABA', 'ABA'], {A: ['iron_nugget', 'create:zinc_nugget', 'oreganized:lead_nugget'], B: 'create:andesite_alloy'})
	event.shaped('farmersdelight:stove', ['AAA', 'B B', 'BCB'], {A: 'iron_ingot', B: 'bricks', C: 'campfire'})
	event.shaped('mynethersdelight:nether_bricks_soul_stove', ['AAA', 'B B', 'BCB'], {A: 'nether_brick', B: 'polished_blackstone_bricks', C: 'soul_campfire'})
	event.shaped('kubejs:copper_brush', ['C', 'B', 'A'], {A: 'stick', B: 'copper_ingot', C: 'feather'})
	event.shaped('2x kubejs:rubber_tire', ['A', 'A'], {A: 'kubejs:rubber_block'})
	event.shaped('sullysmod:jade_flinger_totem', ['BCB', 'AAC', 'BCB'], {A: 'kubejs:rubber', B: '#minecraft:stone_tool_materials', C: '#raspberry_flavoured:stone_crafting_slabs'})
	event.shaped('3x create:belt_connector', ['AAA', 'AAA'], {A: 'kubejs:rubber'})
	event.shaped('3x create:spout', ['AAA', ' B '], {A: 'create:fluid_tank', B: 'kubejs:rubber'})
	event.shaped('create:weighted_ejector', [' A ', 'DBD', ' C '], {A: 'create:golden_sheet', B: 'create:depot', C: 'create:cogwheel', D: 'kubejs:rubber'}).id('create:crafting/kinetics/weighted_ejector')
	event.shaped('create:hose_pulley', [' A ', 'EBD', ' C '], {A: 'create:copper_casing', B: 'create:shaft', C: 'create:copper_sheet', D: 'create:fluid_pipe', E: 'kubejs:rubber'}).id('create:crafting/kinetics/hose_pulley')
	event.shaped('create:elevator_pulley', [' A ', 'DBD', ' C '], {A: 'create:brass_casing', B: 'create:shaft', C: 'create:iron_sheet', D: 'kubejs:rubber'}).id('create:crafting/kinetics/elevator_pulley')
	event.shaped('2x architects_palette:pipe', ['A', 'A'], {A: 'architects_palette:plating_block'}).id('architects_palette:pipe')
	event.shaped('bundle', ['A', 'B'], {A: 'string', B: '#minecraft:leather_cuts'})
	event.shaped('kubejs:glance_pillar', ['A', 'A'], {A: 'oreganized:polished_glance_slab'}).id('oreganized:quark/glance_pillar')
	event.shaped('4x lodestone', ['AAA', 'ABA', 'AAA'], {A: '#forge:stone', B: ['iron_ingot', 'spelunkery:raw_magnetite_nugget']})
	event.shaped('12x create:chute', ['B', 'A', 'B'], {A: 'alloyed:steel_ingot', B: 'alloyed:steel_sheet'})
	event.shaped('12x create:metal_bracket', ['BBB', 'ACA'], {A: 'alloyed:steel_ingot', B: 'alloyed:steel_nugget', C: 'create:andesite_alloy'})
	event.shaped('16x create:industrial_iron_block', ['BA', 'AB'], {A: 'alloyed:steel_ingot', B: 'iron_ingot'})
	event.shaped('12x create:item_vault', ['AAA', 'A A', 'AAA'], {A: 'alloyed:steel_sheet'})
	event.shaped('24x create:metal_girder', ['AAA', 'BBB'], {A: 'alloyed:steel_sheet', B: 'create:andesite_alloy'})
	event.shaped('spyglass', ['A', 'B', 'B'], {A: '#forge:glass', B: 'copper_ingot'}).id('minecraft:spyglass')
	event.shaped('spelunkery:conk_fungus_block', ['AAA', 'AAA'], {A: 'spelunkery:conk_fungus'})
	event.shaped('toms_storage:ts.inventory_connector', [' B ', 'CAC', ' D '], {A: 'create:andesite_casing', B: 'create:electron_tube', C: 'minecraft:comparator', D: 'ender_pearl'}).id('toms_storage:inventory_connector')
	event.shaped('toms_storage:ts.storage_terminal', [' B ', 'ADA', ' C '], {A: 'create:andesite_alloy', B: 'create:electron_tube', C: 'minecraft:comparator', D: '#forge:glass'}).id('toms_storage:storage_terminal')
	event.shaped('4x kubejs:heating_cask', ['ABA', 'ADA', 'ACA'], {A: '#minecraft:planks', B: 'stick', C: 'magma_block', D: '#minecraft:coals'})
	event.shaped('4x kubejs:ice_crate', ['ABA', 'ACA', 'ACA'], {A: '#minecraft:planks', B: 'farmersdelight:canvas', C: 'packed_ice'})
	event.shaped('2x create:rose_quartz_lamp', ['ABA', 'BCB', 'ABA'], {A: 'create:zinc_ingot', B: 'spelunkery:cinnabar', C: 'redstone'}).id('create:crafting/kinetics/rose_quartz_lamp')
	event.shaped('aquaculture:tackle_box', ['CCC', 'BAB', 'BBB'], {A: 'string', B: 'iron_ingot', C: 'create:zinc_ingot'}).id('aquaculture:tackle_box')
	event.shaped('2x twigs:chiseled_bricks', ['A', 'A'], {A: 'bricks'}).id('twigs:chiseled_bricks')
	event.shaped('2x twigs:chiseled_silt_bricks', ['A', 'A'], {A: 'twigs:silt_bricks'}).id('twigs:chiseled_silt_bricks')
	event.shaped('2x kubejs:trimmed_ash_bricks', ['A', 'A'], {A: 'supplementaries:ash_bricks'})
	event.shaped('kubejs:chiseled_silt_bricks', ['A', 'A'], {A: 'twigs:silt_brick_slab'})
	event.shaped('kubejs:chiseled_ash_bricks', ['A', 'A'], {A: 'supplementaries:ash_bricks_slab'})
	event.shaped('echochest:echo_chest', ['ABA', 'B B', 'ABA'], {A: '#raspberry_flavoured:deepslate', B: 'echo_shard'}).id('echochest:echo_chest')
	event.shaped('2x create:electron_tube', ['AB', 'CC'], {A: 'quartz', B: 'spelunkery:cinnabar', C: 'create:iron_sheet'}).id('create:crafting/materials/electron_tube')
	event.shaped('8x create:nixie_tube', ['BB', 'AA', 'BB'], {A: 'create:electron_tube', B: 'quartz'}).id('create:crafting/kinetics/nixie_tube')
	event.shaped('create:mechanical_mixer', [' A ', ' B ', 'CCC'], {A: 'create:cogwheel', B: 'create:andesite_casing', C: 'create:iron_sheet'}).id('create:crafting/kinetics/mechanical_mixer')
	event.shaped('create:deployer', [' A ', ' B ', ' C '], {A: 'create:electron_tube', B: 'create:andesite_casing', C: 'additionaladditions:rose_gold_alloy'}).id('create:crafting/kinetics/deployer')
	event.shaped('domesticationinnovation:deed_of_ownership', ['AAA', 'ABA', 'AAA'], {A: 'paper', B: 'domesticationinnovation:collar_tag'})
	event.shaped('8x architects_palette:hazard_sign', [' A ', 'AAA'], {A: 'architects_palette:hazard_block'}).id('architects_palette:hazard_sign')
	event.shaped('farmersdelight:cooking_pot', ['C C', 'BAB', 'BBB'], {A: ['minecraft:water_bucket', Item.of('minecraft:potion',{Potion:"minecraft:water"}).strongNBT()], B: 'iron_ingot', C: '#forge:ingots/brick'}).id('farmersdelight:cooking_pot')
	event.shaped('farmersdelight:skillet', [' AA', ' AA', 'B  '], {A: 'iron_ingot', B: '#forge:ingots/brick'}).id('farmersdelight:skillet')
	event.shaped('supplementaries:wind_vane', [' A ', 'BBB', ' C '], {A: 'copper_ingot', B: 'caverns_and_chasms:copper_bars', C: 'redstone'}).id('supplementaries:wind_vane')
	event.shaped('shulker_box', [' A ', 'ABA', ' A '], {A: 'scute', B: 'quark:soul_bead'}).id('minecraft:shulker_box')
	event.shaped('4x quark:bamboo_chest', ['AAA', 'A A', 'AAA'], {A: '#quark:bamboo_logs'}).id('quark:building/crafting/woodsets/bamboo/chest_wood')
	event.shaped('8x quark:bamboo_post', ['A', 'A', 'A'], {A: 'quark:bamboo_block'}).id('quark:building/crafting/woodsets/bamboo/post')
	event.shaped('8x quark:stripped_bamboo_post', ['A', 'A', 'A'], {A: 'quark:stripped_bamboo_block'}).id('quark:building/crafting/woodsets/bamboo/stripped_post')
	event.shaped('8x everycomp:q/mynethersdelight/powdery_post', ['A', 'A', 'A'], {A: 'mynethersdelight:powdery_block'})
	event.shaped('8x everycomp:q/mynethersdelight/stripped_powdery_post', ['A', 'A', 'A'], {A: 'mynethersdelight:stripped_powdery_block'})
	event.shaped('4x everycomp:q/mynethersdelight/powdery_chest', ['AAA', 'A A', 'AAA'], {A: '#mynethersdelight:powdery_logs'})
	event.shaped('2x quark:mud_pillar', ['A', 'A'], {A: 'mud_bricks'}).id('quark:building/crafting/mud_pillar')
	event.shaped('3x farmersdelight:canvas_rug', ['AA'], {A: 'farmersdelight:canvas'}).id('farmersdelight:canvas_rug')
	event.shaped('4x end_rod', [' B ', 'BAB', ' B '], {A: 'quartz', B: 'upgrade_aquatic:prismarine_rod'}).id('minecraft:end_rod')
	event.shaped('3x alloyed:bronze_bell', [' A ', 'BBB'], {A: '#forge:storage_blocks/bronze', B: '#forge:ingots/bronze'}).id('alloyed:crafting/bronze_bell')
	event.shaped('supplementaries:key', ['B', 'A'], {A: '#forge:nuggets/gold', B: '#forge:ingots/gold'})
	event.shaped('2x create:mechanical_crafter', [' A ', 'DBD', ' C '], {A: 'create:cogwheel', B: 'create:andesite_casing', C: 'crafting_table', D: 'redstone'}).id('create:crafting/kinetics/mechanical_crafter')
	event.shaped('alloyed:steel_shears', [' A', 'A '], {A: 'diamond'})
	event.shaped('2x create:speedometer', ['CAB'], {A: 'create:andesite_casing', B: 'create:shaft', C: 'clock'})
	event.shaped('2x create:stressometer', ['CAB'], {A: 'create:andesite_casing', B: 'create:shaft', C: 'caverns_and_chasms:depth_gauge'})
	
	event.shaped('aquaculture:gold_hook', [' A', ' B', 'BB'], {A: 'spelunkery:magnetite_chunk', B: 'spelunkery:raw_magnetite_nugget'}).id('aquaculture:gold_hook')
	event.shaped('aquaculture:light_hook', [' A', ' B', 'BB'], {A: 'copper_ingot', B: 'create:copper_nugget'}).id('aquaculture:light_hook')
	event.shaped('aquaculture:heavy_hook', [' A', ' B', 'BB'], {A: 'alloyed:steel_ingot', B: 'alloyed:steel_nugget'}).id('aquaculture:heavy_hook')
	event.shaped('aquaculture:redstone_hook', [' A', ' B', 'BB'], {A: 'create:zinc_ingot', B: 'create:zinc_nugget'}).id('aquaculture:redstone_hook')
	
	event.shaped('4x twigs:bamboo_thatch', ['AAA', 'AAA'], {A: 'twigs:bamboo_leaves'}).id('twigs:bamboo_thatch')
	event.shaped('4x neapolitan:frond_thatch', ['AAA', 'AAA'], {A: 'neapolitan:banana_frond'}).id('neapolitan:banana/frond_thatch/frond_thatch')
	event.shaped('4x environmental:grass_thatch', ['ABA', 'BAB'], {A: 'wheat', B: 'grass'})
	event.shaped('4x environmental:cattail_thatch', ['AAA', 'AAA'], {A: 'environmental:cattail'}).id('environmental:cattail_thatch')
	event.shaped('4x environmental:duckweed_thatch', ['AAA', 'AAA'], {A: 'environmental:duckweed'}).id('environmental:duckweed_thatch')
	event.shaped('4x upgrade_aquatic:beachgrass_thatch', ['AAA', 'AAA'], {A: 'farmersdelight:sandy_shrub'}).id('upgrade_aquatic:beachgrass_thatch')
	event.shaped('4x kubejs:straw_thatch', ['AAA', 'AAA'], {A: 'farmersdelight:straw'})
	event.shaped('4x kubejs:flax_thatch', ['AAA', 'AAA'], {A: 'supplementaries:flax'})
	
	event.shaped('6x kubejs:straw_thatch_slab', ['AAA'], {A: 'kubejs:straw_thatch'})
	event.shaped('4x kubejs:straw_thatch_stairs', ['A  ', 'AA ', 'AAA'], {A: 'kubejs:straw_thatch'})
	event.shaped('6x kubejs:flax_thatch_slab', ['AAA'], {A: 'kubejs:flax_thatch'})
	event.shaped('4x kubejs:flax_thatch_stairs', ['A  ', 'AA ', 'AAA'], {A: 'kubejs:flax_thatch'})
	event.shaped('4x kubejs:bamboo_thatch_stairs', ['A  ', 'AA ', 'AAA'], {A: 'twigs:bamboo_thatch'})
	
	event.shaped('4x kubejs:deepslate_gravel_brick_stairs', ['A  ', 'AA ', 'AAA'], {A: 'kubejs:deepslate_gravel_bricks'})
	event.shaped('6x kubejs:deepslate_gravel_brick_wall', ['AAA', 'AAA'], {A: 'kubejs:deepslate_gravel_bricks'})
	event.shaped('6x kubejs:deepslate_gravel_brick_slab', ['AAA'], {A: 'kubejs:deepslate_gravel_bricks'})
	
	event.shaped('4x kubejs:blackstone_gravel_brick_stairs', ['A  ', 'AA ', 'AAA'], {A: 'kubejs:blackstone_gravel_bricks'})
	event.shaped('6x kubejs:blackstone_gravel_brick_wall', ['AAA', 'AAA'], {A: 'kubejs:blackstone_gravel_bricks'})
	event.shaped('6x kubejs:blackstone_gravel_brick_slab', ['AAA'], {A: 'kubejs:blackstone_gravel_bricks'})
	
	event.shaped('4x kubejs:cobbled_blackstone_stairs', ['A  ', 'AA ', 'AAA'], {A: 'kubejs:cobbled_blackstone'})
	event.shaped('6x kubejs:cobbled_blackstone_wall', ['AAA', 'AAA'], {A: 'kubejs:cobbled_blackstone'})
	event.shaped('6x kubejs:cobbled_blackstone_slab', ['AAA'], {A: 'kubejs:cobbled_blackstone'})
	
	event.shaped('shieldexp:wooden_shield', [' A ', 'ABA', ' A '], {A: '#minecraft:planks', B: 'stick'}).id('shieldexp:wooden_shield')
	event.shaped('shieldexp:golden_shield', [' A ', 'ABA', ' A '], {A: 'create:copper_sheet', B: 'stick'}).id('shieldexp:golden_shield')
	event.shaped('shield', [' A ', 'ABA', ' A '], {A: 'create:iron_sheet', B: 'stick'}).id('minecraft:shield')
	event.shaped('shieldexp:griefer_shield', [' A ', 'ABA', ' A '], {A: 'savage_and_ravage:blast_proof_plating', B: 'stick'}).id('shieldexp:griefer_shield')
	event.shaped('shieldexp:iron_shield', [' A ', 'ABA', ' A '], {A: 'caverns_and_chasms:sanguine_plating', B: 'stick'}).id('shieldexp:iron_shield')
	
	event.shaped('kubejs:chiseled_exolite', ['A', 'A'], {A: 'architects_palette:cerebral_slab'})
	event.shaped('kubejs:chiseled_exolite_tiles', ['A', 'A'], {A: 'architects_palette:cerebral_tile_slab'})
	
	event.shaped('leather_horse_armor', ['  A', 'ABA', 'CAC'], {A: '#minecraft:leather_cuts', B: 'kubejs:cloth_scrap', C: 'farmersdelight:straw'}).id('minecraft:leather_horse_armor')
	event.shaped('kubejs:copper_horse_armor', ['  A', 'ABA', 'AAA'], {A: 'create:copper_sheet', B: 'kubejs:cloth_scrap'})
	event.shaped('iron_horse_armor', ['  A', 'ABA', 'AAA'], {A: 'create:iron_sheet', B: 'kubejs:cloth_scrap'})
	event.shaped('golden_horse_armor', ['  A', 'ABA', 'AAA'], {A: 'create:golden_sheet', B: 'kubejs:cloth_scrap'})
	
	event.shaped('leather_helmet', ['ABA', 'A A'], {A: '#minecraft:leather_cuts', B: 'farmersdelight:straw'}).id('minecraft:leather_helmet')
	event.shaped('leather_chestplate', ['A A', 'ABA', 'ABA'], {A: '#minecraft:leather_cuts', B: 'farmersdelight:straw'}).id('minecraft:leather_chestplate')
	event.shaped('leather_leggings', ['BAB', 'A A', 'A A'], {A: '#minecraft:leather_cuts', B: 'farmersdelight:straw'}).id('minecraft:leather_leggings')
	event.shaped('leather_boots', ['B B', 'A A'], {A: '#minecraft:leather_cuts', B: 'farmersdelight:straw'}).id('minecraft:leather_boots')
	
	event.shaped('minecart', ['A A', 'AAA'], {A: '#brewinandchewin:iron_or_lead'}).id('minecraft:minecart')
	event.shaped('oreganized:shrapnel_bomb_minecart', ['A', 'B'], {A: 'oreganized:shrapnel_bomb', B: 'minecart'}).id('oreganized:shrapnel_bomb_minecart')
	event.shaped('oreganized:shrapnel_bomb_minecart', ['ABA', 'AAA'], {A: '#brewinandchewin:iron_or_lead', B: 'oreganized:shrapnel_bomb'})
	event.shaped('supplementaries:dispenser_minecart', ['ABA', 'AAA'], {A: '#brewinandchewin:iron_or_lead', B: 'dispenser'})
	event.shaped('8x rail', ['A A', 'ABA', 'A A'], {A: ['iron_nugget', 'oreganized:lead_nugget'], B: 'stick'}).id('minecraft:rail')
	event.shaped('8x powered_rail', ['A A', 'CBC', 'A A'], {A: ['iron_nugget', 'oreganized:lead_nugget'], B: 'stick', C: 'gold_nugget'}).id('minecraft:powered_rail')
	event.shaped('8x powered_rail', ['A A', 'CBC', 'A A'], {A: ['iron_nugget', 'oreganized:lead_nugget'], B: 'stick', C: 'copper_ingot'})
	event.shaped('8x detector_rail', ['ACA', 'ABA', 'ADA'], {A: ['iron_nugget', 'oreganized:lead_nugget'], B: 'stick', C: 'stone_pressure_plate', D: 'redstone'}).id('minecraft:detector_rail')
	event.shaped('8x activator_rail', ['ACA', 'ABA', 'ACA'], {A: ['iron_nugget', 'oreganized:lead_nugget'], B: 'stick', C: 'redstone'}).id('minecraft:activator_rail')
	event.shaped('8x caverns_and_chasms:spiked_rail', ['D D', 'ABA', 'DCD'], {A: 'oreganized:silver_nugget', B: 'stick', C: 'redstone', D: ['iron_nugget', 'oreganized:lead_nugget']}).id('caverns_and_chasms:spiked_rail')
	event.shaped('8x create:controller_rail', ['A A', 'CBC', 'ADA'], {A: ['iron_nugget', 'oreganized:lead_nugget'], B: 'stick', C: 'gold_nugget', D: 'create:electron_tube'}).id('create:crafting/kinetics/controller_rail')
	event.shaped('8x create:controller_rail', ['A A', 'CBC', 'ADA'], {A: ['iron_nugget', 'oreganized:lead_nugget'], B: 'stick', C: 'copper_ingot', D: 'create:electron_tube'})
	
	event.shaped('6x torch', ['B', 'A'], {A: 'stick', B: '#minecraft:coals'}).id('minecraft:torch')
	event.shaped('3x redstone_torch', ['B', 'A'], {A: 'stick', B: 'redstone'}).id('minecraft:redstone_torch')
	event.shaped('6x soul_torch', ['B', 'A', 'C'], {A: 'stick', B: '#minecraft:coals', C: '#minecraft:soul_fire_base_blocks'}).id('minecraft:soul_torch')
	event.shaped('6x caverns_and_chasms:cupric_torch', ['B', 'A', 'C'], {A: 'stick', B: '#minecraft:coals', C: 'additionaladditions:copper_patina'}).id('caverns_and_chasms:cupric_torch')
	event.shaped('6x endergetic:ender_torch', ['B', 'A', 'C'], {A: 'stick', B: '#minecraft:coals', C: '#endergetic:ender_fire_base_blocks'}).id('endergetic:ender_torch')
	event.shaped('caverns_and_chasms:cupric_candle', ['A', 'B', 'C'], {A: 'string', B: 'honeycomb', C: 'additionaladditions:copper_patina'}).id('caverns_and_chasms:cupric_candle')
	
	event.shaped('caverns_and_chasms:cupric_lantern', [' B ', 'BAB', ' B '], {A: 'caverns_and_chasms:cupric_torch', B: 'iron_nugget'}).id('caverns_and_chasms:cupric_lantern')
	event.shaped('supplementaries:brass_lantern', [' B ', 'BAB', ' B '], {A: 'caverns_and_chasms:cupric_torch', B: 'create:brass_nugget'}).id('supplementaries:brass_lantern')
	event.shaped('supplementaries:copper_lantern', [' B ', 'BAB', ' B '], {A: 'caverns_and_chasms:cupric_torch', B: 'create:copper_nugget'}).id('supplementaries:copper_lantern')
	event.shaped('endergetic:ender_lantern', [' B ', 'BAB', ' B '], {A: 'endergetic:ender_torch', B: 'iron_nugget'}).id('endergetic:ender_lantern')
	event.shaped('3x twigs:lamp', ['AAA', 'BBB', 'AAA'], {A: '#brewinandchewin:iron_or_lead', B: 'torch'}).id('twigs:lamp')
	event.shaped('3x twigs:soul_lamp', ['AAA', 'BBB', 'AAA'], {A: '#brewinandchewin:iron_or_lead', B: 'soul_torch'}).id('twigs:soul_lamp')
	event.shaped('3x twigs:crimson_shroomlamp', ['AAA', 'BBB', 'AAA'], {A: 'crimson_planks', B: 'shroomlight'}).id('twigs:crimson_shroomlamp')
	event.shaped('3x twigs:warped_shroomlamp', ['AAA', 'BBB', 'AAA'], {A: 'warped_planks', B: 'shroomlight'}).id('twigs:warped_shroomlamp')
	
	event.shaped('caverns_and_chasms:brazier', ['BAB', 'BBB', ' B '], {A: '#minecraft:coals', B: 'oreganized:silver_nugget'}).id('caverns_and_chasms:brazier')
	event.shaped('caverns_and_chasms:soul_brazier', ['BAB', 'BBB', ' B '], {A: '#minecraft:soul_fire_base_blocks', B: 'oreganized:silver_nugget'}).id('caverns_and_chasms:soul_brazier')
	event.shaped('caverns_and_chasms:cupric_brazier', ['BAB', 'BBB', ' B '], {A: 'additionaladditions:copper_patina', B: 'oreganized:silver_nugget'}).id('caverns_and_chasms:cupric_brazier')
	event.shaped('caverns_and_chasms:ender_brazier', ['BAB', 'BBB', ' B '], {A: '#endergetic:ender_fire_base_blocks', B: 'oreganized:silver_nugget'}).id('caverns_and_chasms:ender_brazier')
	
	event.shaped('4x minecraft:emerald_block', ['AA', 'AA'], {A: 'spelunkery:rough_lazurite_block'}).id('minecraft:lapis_block')
	event.shaped('4x caverns_and_chasms:lapis_bricks', ['AA', 'AA'], {A: 'minecraft:emerald_block'}).id('caverns_and_chasms:lapis_bricks')
	event.shaped('6x kubejs:lapis_slab', ['AAA'], {A: 'minecraft:emerald_block'})
	event.shaped('4x kubejs:lapis_stairs', ['A  ', 'AA ', 'AAA'], {A: 'minecraft:emerald_block'})
	event.shaped('6x kubejs:lapis_wall', ['AAA', 'AAA'], {A: 'minecraft:emerald_block'})
	event.shaped('6x kubejs:lazurite_slab', ['AAA'], {A: 'spelunkery:rough_lazurite_block'})
	event.shaped('4x kubejs:lazurite_stairs', ['A  ', 'AA ', 'AAA'], {A: 'spelunkery:rough_lazurite_block'})
	event.shaped('6x kubejs:lazurite_wall', ['AAA', 'AAA'], {A: 'spelunkery:rough_lazurite_block'})
	
	event.shaped('6x oreganized:polished_glance_slab', ['AAA'], {A: 'oreganized:polished_glance'})
	event.shaped('4x oreganized:polished_glance_stairs', ['A  ', 'AA ', 'AAA'], {A: 'oreganized:polished_glance'})
	
	event.shaped('4x kubejs:smooth_stone_stairs', ['A  ', 'AA ', 'AAA'], {A: 'smooth_stone'})
	event.shaped('6x kubejs:smooth_stone_wall', ['AAA', 'AAA'], {A: 'smooth_stone'})
	
	event.shaped('beehive', ['CCC', 'ABA', 'AAA'], {A: 'oak_planks', B: 'honeycomb', C: 'oak_slab'}).id('woodworks:oak_beehive')
	event.shaped('woodworks:spruce_beehive', ['CCC', 'ABA', 'AAA'], {A: 'spruce_planks', B: 'honeycomb', C: 'spruce_slab'}).id('woodworks:spruce_beehive')
	event.shaped('woodworks:birch_beehive', ['CCC', 'ABA', 'AAA'], {A: 'birch_planks', B: 'honeycomb', C: 'birch_slab'}).id('woodworks:birch_beehive')
	event.shaped('woodworks:jungle_beehive', ['CCC', 'ABA', 'AAA'], {A: 'jungle_planks', B: 'honeycomb', C: 'jungle_slab'}).id('woodworks:jungle_beehive')
	event.shaped('woodworks:acacia_beehive', ['CCC', 'ABA', 'AAA'], {A: 'acacia_planks', B: 'honeycomb', C: 'acacia_slab'}).id('woodworks:acacia_beehive')
	event.shaped('woodworks:dark_oak_beehive', ['CCC', 'ABA', 'AAA'], {A: 'dark_oak_planks', B: 'honeycomb', C: 'dark_oak_slab'}).id('woodworks:dark_oak_beehive')
	event.shaped('woodworks:mangrove_beehive', ['CCC', 'ABA', 'AAA'], {A: 'mangrove_planks', B: 'honeycomb', C: 'mangrove_slab'}).id('woodworks:mangrove_beehive')
	event.shaped('woodworks:crimson_beehive', ['CCC', 'ABA', 'AAA'], {A: 'crimson_planks', B: 'honeycomb', C: 'crimson_slab'}).id('woodworks:crimson_beehive')
	event.shaped('woodworks:warped_beehive', ['CCC', 'ABA', 'AAA'], {A: 'warped_planks', B: 'honeycomb', C: 'warped_slab'}).id('woodworks:warped_beehive')
	event.shaped('atmospheric:rosewood_beehive', ['CCC', 'ABA', 'AAA'], {A: 'atmospheric:rosewood_planks', B: 'honeycomb', C: 'atmospheric:rosewood_slab'}).id('atmospheric:rosewood_beehive')
	event.shaped('atmospheric:morado_beehive', ['CCC', 'ABA', 'AAA'], {A: 'atmospheric:morado_planks', B: 'honeycomb', C: 'atmospheric:morado_slab'}).id('atmospheric:morado_beehive')
	event.shaped('atmospheric:yucca_beehive', ['CCC', 'ABA', 'AAA'], {A: 'atmospheric:yucca_planks', B: 'honeycomb', C: 'atmospheric:yucca_slab'}).id('atmospheric:yucca_beehive')
	event.shaped('atmospheric:aspen_beehive', ['CCC', 'ABA', 'AAA'], {A: 'atmospheric:aspen_planks', B: 'honeycomb', C: 'atmospheric:aspen_slab'}).id('atmospheric:aspen_beehive')
	event.shaped('autumnity:maple_beehive', ['CCC', 'ABA', 'AAA'], {A: 'autumnity:maple_planks', B: 'honeycomb', C: 'autumnity:maple_slab'}).id('autumnity:maple_beehive')
	event.shaped('environmental:willow_beehive', ['CCC', 'ABA', 'AAA'], {A: 'environmental:willow_planks', B: 'honeycomb', C: 'environmental:willow_slab'}).id('environmental:willow_beehive')
	event.shaped('environmental:cherry_beehive', ['CCC', 'ABA', 'AAA'], {A: 'environmental:cherry_planks', B: 'honeycomb', C: 'environmental:cherry_slab'}).id('environmental:cherry_beehive')
	event.shaped('environmental:wisteria_beehive', ['CCC', 'ABA', 'AAA'], {A: 'environmental:wisteria_planks', B: 'honeycomb', C: 'environmental:wisteria_slab'}).id('environmental:wisteria_beehive')
	event.shaped('upgrade_aquatic:driftwood_beehive', ['CCC', 'ABA', 'AAA'], {A: 'upgrade_aquatic:driftwood_planks', B: 'honeycomb', C: 'upgrade_aquatic:driftwood_slab'}).id('upgrade_aquatic:driftwood_beehive')
	event.shaped('upgrade_aquatic:river_beehive', ['CCC', 'ABA', 'AAA'], {A: 'upgrade_aquatic:river_planks', B: 'honeycomb', C: 'upgrade_aquatic:river_slab'}).id('upgrade_aquatic:river_beehive')
	event.shaped('windswept:chestnut_beehive', ['CCC', 'ABA', 'AAA'], {A: 'windswept:chestnut_planks', B: 'honeycomb', C: 'windswept:chestnut_slab'}).id('windswept:chestnut_beehive')
	event.shaped('everycomp:abnww/quark/bamboo_beehive', ['CCC', 'ABA', 'AAA'], {A: 'quark:bamboo_planks', B: 'honeycomb', C: 'quark:bamboo_planks_slab'}).id('everycomp:abnww/quark/bamboo_beehive')
	event.shaped('everycomp:abnww/architects_palette/twisted_beehive', ['CCC', 'ABA', 'AAA'], {A: 'architects_palette:twisted_planks', B: 'honeycomb', C: 'architects_palette:twisted_slab'}).id('everycomp:abnww/architects_palette/twisted_beehive')
	event.shaped('everycomp:abnww/ecologics/azalea_beehive', ['CCC', 'ABA', 'AAA'], {A: 'ecologics:azalea_planks', B: 'honeycomb', C: 'ecologics:azalea_slab'}).id('everycomp:abnww/ecologics/azalea_beehive')
	event.shaped('everycomp:abnww/ecologics/coconut_beehive', ['CCC', 'ABA', 'AAA'], {A: 'ecologics:coconut_planks', B: 'honeycomb', C: 'ecologics:coconut_slab'}).id('everycomp:abnww/ecologics/coconut_beehive')
	event.shaped('everycomp:abnww/mynethersdelight/powdery_beehive', ['CCC', 'ABA', 'AAA'], {A: 'mynethersdelight:powdery_planks', B: 'honeycomb', C: 'mynethersdelight:powdery_slab'}).id('everycomp:abnww/mynethersdelight/powdery_beehive')
	
	event.shaped('everycomp:q/ecologics/azalea_bookshelf', ['AAA', 'BBB', 'AAA'], {A: 'ecologics:azalea_planks', B: 'book'})
	event.shaped('everycomp:q/ecologics/coconut_bookshelf', ['AAA', 'BBB', 'AAA'], {A: 'ecologics:coconut_planks', B: 'book'})
	event.shaped('everycomp:q/mynethersdelight/powdery_bookshelf', ['AAA', 'BBB', 'AAA'], {A: 'mynethersdelight:powdery_planks', B: 'book'})
	event.shaped('everycomp:q/architects_palette/twisted_bookshelf', ['AAA', 'BBB', 'AAA'], {A: 'architects_palette:twisted_planks', B: 'book'})
	event.shaped('quark:bamboo_bookshelf', ['AAA', 'BBB', 'AAA'], {A: 'quark:bamboo_planks', B: 'book'})
	
	event.shaped('another_furniture:spruce_drawer', ['AAA', 'BCB', 'AAA'], {A: 'spruce_planks', B: 'spruce_slab', C: 'stick'}).id('another_furniture:spruce_drawer')
	event.shaped('another_furniture:birch_drawer', ['AAA', 'BCB', 'AAA'], {A: 'birch_planks', B: 'birch_slab', C: 'stick'}).id('another_furniture:birch_drawer')
	event.shaped('another_furniture:jungle_drawer', ['AAA', 'BCB', 'AAA'], {A: 'jungle_planks', B: 'jungle_slab', C: 'stick'}).id('another_furniture:jungle_drawer')
	event.shaped('another_furniture:acacia_drawer', ['AAA', 'BCB', 'AAA'], {A: 'acacia_planks', B: 'acacia_slab', C: 'stick'}).id('another_furniture:acacia_drawer')
	event.shaped('another_furniture:dark_oak_drawer', ['AAA', 'BCB', 'AAA'], {A: 'dark_oak_planks', B: 'dark_oak_slab', C: 'stick'}).id('another_furniture:dark_oak_drawer')
	event.shaped('another_furniture:mangrove_drawer', ['AAA', 'BCB', 'AAA'], {A: 'mangrove_planks', B: 'mangrove_slab', C: 'stick'}).id('another_furniture:mangrove_drawer')
	event.shaped('another_furniture:crimson_drawer', ['AAA', 'BCB', 'AAA'], {A: 'crimson_planks', B: 'crimson_slab', C: 'stick'}).id('another_furniture:crimson_drawer')
	event.shaped('another_furniture:warped_drawer', ['AAA', 'BCB', 'AAA'], {A: 'warped_planks', B: 'warped_slab', C: 'stick'}).id('another_furniture:warped_drawer')
	
	event.shaped('music_disc_otherside', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: '#quark:runes_lootable'})
	event.shaped('kubejs:music_disc_shimmer', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'quark:glow_shroom'})
	event.shaped('kubejs:music_disc_frontier', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: ['hay_block', 'farmersdelight:rice_bale', 'farmersdelight:straw_bale', 'supplementaries:flax_block']})
	event.shaped('kubejs:music_disc_origin', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'sweet_berries'})
	event.shaped('kubejs:music_disc_eleven', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'music_disc_11'})
	event.shaped('kubejs:music_disc_fruitiger', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'kubejs:golden_strawberries'})
	event.shaped('kubejs:music_disc_redstone_baby', ['AAA', 'ABA', 'AAA'], {A: 'disc_fragment_5', B: 'spelunkery:cinnabar'})

// Smelting
	event.smelting('culturaldelights:smoked_eggplant', 'culturaldelights:eggplant')
	event.smelting('culturaldelights:smoked_cut_eggplant', 'culturaldelights:cut_eggplant')
	event.smelting('culturaldelights:smoked_white_eggplant', 'culturaldelights:white_eggplant')
	event.smelting('minecraft:glass', '#minecraft:sand').cookingTime(200).id('minecraft:glass')
	event.smelting('minecraft:glass', 'quark:dirty_glass').cookingTime(100).id('quark:tweaks/smelting/clean_glass')
	event.smelting('minecraft:glass', 'create:tiled_glass').cookingTime(40).id('create:smelting/glass_from_tiled_glass')
	event.smelting('minecraft:glass', 'create:framed_glass').cookingTime(40).id('create:smelting/glass_from_framed_glass')
	event.smelting('minecraft:glass', 'create:horizontal_framed_glass').cookingTime(40).id('create:smelting/glass_from_horizontal_framed_glass')
	event.smelting('minecraft:glass', 'create:vertical_framed_glass').cookingTime(40).id('create:smelting/glass_from_vertical_framed_glass')
	event.smelting('kubejs:charcoal_lump', 'ecologics:coconut_husk').cookingTime(200)
	event.smelting('kubejs:charcoal_lump', 'farmersdelight:tree_bark').cookingTime(200)
	event.smelting('gold_ingot', 'gilded_blackstone').cookingTime(200)
	event.smelting('kubejs:exolite', 'kubejs:cobbled_exolite').cookingTime(200)
	event.smelting('oreganized:lead_ingot', 'kubejs:nether_lead_ore').cookingTime(200)
	event.smelting('blackstone', 'kubejs:cobbled_blackstone').cookingTime(200)
	event.smelting('create:scorchia', 'create:scoria').cookingTime(200).id('create:crafting/palettes/scorchia')
	event.smelting('green_dye', 'aquaculture:algae').cookingTime(200)
	event.smelting('cyan_dye', 'additionaladditions:copper_patina').cookingTime(200)
	event.smelting('stone_bricks', 'paletteblocks:cobblestone_bricks').cookingTime(200).id('minecraft:stone_bricks')
	event.smelting('kubejs:cooked_fish', '#raspberry_flavoured:full_raw_fish').cookingTime(200)
	event.smelting('iron_ingot', 'create:iron_sheet').cookingTime(200)
	event.smelting('gold_ingot', 'create:golden_sheet').cookingTime(200)
	event.smelting('copper_ingot', 'create:copper_sheet').cookingTime(200)
	event.smelting('create:brass_ingot', 'create:brass_sheet').cookingTime(200)
	event.smelting('alloyed:steel_ingot', 'alloyed:steel_sheet').cookingTime(200)
	event.smelting('sob:cinder_bread', 'sob:cinder_dough').cookingTime(200)
	event.smelting('farmersdelight:sandy_shrub', 'grass').cookingTime(200)
	
// Smoking
	event.smoking('kubejs:cooked_fish', '#raspberry_flavoured:full_raw_fish').cookingTime(100)
	
// Blasting
	event.blasting('gold_ingot', 'gilded_blackstone').cookingTime(100)
	event.blasting('oreganized:lead_ingot', 'kubejs:nether_lead_ore').cookingTime(100)
	event.blasting('iron_ingot', 'create:iron_sheet').cookingTime(100)
	event.blasting('gold_ingot', 'create:golden_sheet').cookingTime(100)
	event.blasting('copper_ingot', 'create:copper_sheet').cookingTime(100)
	event.blasting('create:brass_ingot', 'create:brass_sheet').cookingTime(100)
	event.blasting('alloyed:steel_ingot', 'alloyed:steel_sheet').cookingTime(100)

// Firing
	event.custom({type: 'clayworks:baking', cookingtime: 100, experience: 0.1, ingredient: {tag: 'minecraft:sand'}, result: 'minecraft:glass'}).id('clayworks:glass_from_baking')
	event.custom({type: 'clayworks:baking', cookingtime: 50, ingredient: {item: 'quark:dirty_glass'}, result: 'minecraft:glass'}).id('clayworks:quark/clean_glass_from_baking')
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:tiled_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:framed_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:horizontal_framed_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 20, ingredient: {item: 'create:vertical_framed_glass'}, result: 'minecraft:glass'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'ecologics:coconut_husk'}, result: 'kubejs:charcoal_lump'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'farmersdelight:tree_bark'}, result: 'kubejs:charcoal_lump'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'kubejs:cobbled_exolite'}, result: 'kubejs:exolite'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'kubejs:cobbled_blackstone'}, result: 'minecraft:blackstone'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'create:scoria'}, result: 'create:scorchia'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'aquaculture:algae'}, result: 'minecraft:green_dye'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'additionaladditions:copper_patina'}, result: 'minecraft:cyan_dye'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'twigs:silt_ball'}, result: 'twigs:silt_brick'})
	event.custom({type: 'clayworks:baking', cookingtime: 100, ingredient: {item: 'minecraft:grass'}, result: 'farmersdelight:sandy_shrub'})

// Campfire
	event.campfireCooking('culturaldelights:smoked_eggplant', 'culturaldelights:eggplant').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_cut_eggplant', 'culturaldelights:cut_eggplant').cookingTime(600)
	event.campfireCooking('culturaldelights:smoked_white_eggplant', 'culturaldelights:white_eggplant').cookingTime(600)
	event.campfireCooking('kubejs:charcoal_lump', 'ecologics:coconut_husk').cookingTime(600)
	event.campfireCooking('kubejs:charcoal_lump', 'farmersdelight:tree_bark').cookingTime(600)
	event.campfireCooking('kubejs:cooked_fish', '#raspberry_flavoured:full_raw_fish').cookingTime(600)
	
// Smithing
	event.smithing('minecraft:recovery_compass', 'minecraft:compass', 'quark:soul_bead').id('minecraft:recovery_compass')
	event.smithing('create:copper_diving_helmet', 'copperized:copper_helmet', '#forge:glass').id('create:crafting/appliances/copper_diving_helmet')
	event.smithing('create:copper_diving_boots', 'copperized:copper_boots', 'create:andesite_alloy').id('create:crafting/appliances/copper_diving_boots')
	event.smithing('kubejs:rose_gold_horse_armor', 'minecraft:iron_horse_armor', 'additionaladditions:rose_gold_alloy')
	event.smithing('kubejs:steel_horse_armor', 'minecraft:iron_horse_armor', 'alloyed:steel_ingot')
	event.smithing('kubejs:electrum_horse_armor', 'minecraft:diamond_horse_armor', 'oreganized:electrum_ingot')
	event.smithing('kubejs:necromium_horse_armor', 'minecraft:diamond_horse_armor', 'caverns_and_chasms:necromium_ingot')
	event.smithing('kubejs:netherite_horse_armor', 'minecraft:diamond_horse_armor', 'minecraft:netherite_ingot')
	event.smithing('spelunkery:echo_fork', 'caverns_and_chasms:tuning_fork', 'minecraft:echo_shard').id('spelunkery:echo_fork')
	event.smithing('create:super_glue', 'kubejs:copper_brush', 'minecraft:slime_ball').id('create:crafting/kinetics/super_glue')
	event.smithing('kubejs:copper_brush_wax', 'kubejs:copper_brush', 'minecraft:honeycomb')
	event.smithing('suppsquared:heavy_key', 'supplementaries:key', '#forge:ingots/lead').id('suppsquared:heavy_key')
	
// Stonecutting
	event.stonecutting('4x iron_bars', 'iron_ingot').id('minecraft:iron_bars')
	event.stonecutting('4x caverns_and_chasms:copper_bars', 'copper_ingot')
	event.stonecutting('4x alloyed:steel_bars', 'alloyed:steel_ingot').id('alloyed:crafting/steel_bars')
	event.stonecutting('4x architects_palette:entwine_bars', 'architects_palette:entwine_rod').id('architects_palette:entwine_bars')
	event.stonecutting('4x architects_palette:sunmetal_bars', 'alloyed:bronze_ingot').id('architects_palette:sunmetal_bars')
	event.stonecutting('4x caverns_and_chasms:silver_bars', 'oreganized:silver_ingot').id('caverns_and_chasms:silver_bars')
	event.stonecutting('4x caverns_and_chasms:golden_bars', 'oreganized:lead_ingot').id('caverns_and_chasms:golden_bars')
	event.stonecutting('kubejs:chiseled_silt_bricks', 'twigs:silt_bricks')
	event.stonecutting('kubejs:chiseled_ash_bricks', 'supplementaries:ash_bricks')
	event.stonecutting('kubejs:trimmed_ash_bricks', 'supplementaries:ash_bricks')
	
// Sawing	
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'minecraft:pumpkin'}, result: 'minecraft:carved_pumpkin', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'minecraft:pumpkin'}, result: 'autumnity:large_pumpkin_slice', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'minecraft:pumpkin'}, result: 'autumnity:carved_large_pumpkin_slice', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'autumnity:large_pumpkin_slice'}, result: 'minecraft:pumpkin', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'autumnity:large_pumpkin_slice'}, result: 'minecraft:carved_pumpkin', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'autumnity:large_pumpkin_slice'}, result: 'autumnity:carved_large_pumpkin_slice', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'minecraft:carved_pumpkin'}, result: 'autumnity:carved_large_pumpkin_slice', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'autumnity:carved_large_pumpkin_slice'}, result: 'minecraft:carved_pumpkin', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'autumnity:sappy_maple_log'}, result: 'autumnity:sappy_maple_wood', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'autumnity:sappy_maple_wood'}, result: 'autumnity:sappy_maple_log', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'kubejs:latex_jungle_log'}, result: 'kubejs:latex_jungle_wood', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'kubejs:latex_jungle_log'}, result: 'kubejs:latex_jungle_wood', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'kubejs:latex_jungle_wood'}, result: 'kubejs:latex_jungle_log', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'kubejs:latex_rosewood_log'}, result: 'kubejs:latex_rosewood', count: 1})
	event.custom({type: 'woodworks:sawmill', ingredient: {item: 'kubejs:latex_rosewood'}, result: 'kubejs:latex_rosewood_log', count: 1})

// Cutting board
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:dripstone_block'}], tool: {tag: 'forge:tools/pickaxes'}, 
	result: [{item: 'minecraft:pointed_dripstone', count: 4}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'kubejs:exolite'}], tool: {tag: 'forge:tools/pickaxes'}, 
	result: [{item: 'kubejs:cobbled_exolite'}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'atmospheric:yucca_wood'}], tool: {tag: 'forge:tools/knives'}, sound: 'minecraft:item.axe.strip', 
	result: [{item: 'atmospheric:stripped_yucca_wood', count: 1}, {item: 'kubejs:cinnamon', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'atmospheric:yucca_log'}], tool: {tag: 'forge:tools/knives'}, sound: 'minecraft:item.axe.strip', 
	result: [{item: 'atmospheric:stripped_yucca_log', count: 1}, {item: 'kubejs:cinnamon', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'atmospheric:rosewood'}], tool: {tag: 'forge:tools/knives'}, sound: 'minecraft:item.axe.strip', 
	result: [{item: 'atmospheric:stripped_rosewood', count: 1}, {item: 'kubejs:cinnamon', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'atmospheric:rosewood_log'}], tool: {tag: 'forge:tools/knives'}, sound: 'minecraft:item.axe.strip', 
	result: [{item: 'atmospheric:stripped_rosewood_log', count: 1}, {item: 'kubejs:cinnamon', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'twigs:twig'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:stick', count: 2}, {item: 'minecraft:stick', count: 1, chance: 0.5}]})
//	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:amethyst_block'}], tool: {tag: 'forge:tools/pickaxes'}, 
//	result: [{item: 'minecraft:amethyst_shard', count: 1}]}).id('farmersdelight:cutting/amethyst_block')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'culturaldelights:corn_cob'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'culturaldelights:corn_kernels', count: 2}, {item: 'culturaldelights:corn_kernels', count: 1, chance: 0.15}, {item: 'farmersdelight:straw', count: 1, chance: 0.35}]}).id('culturaldelights:cutting/corn_kernels')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'culturaldelights:wild_corn'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'culturaldelights:corn_kernels', count: 2, chance: 0.5}, {item: 'minecraft:wheat_seeds', count: 2, chance: 0.25}, {item: 'farmersdelight:straw', count: 1, chance: 0.25}]}).id('culturaldelights:cutting/wild_corn')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'culturaldelights:wild_eggplants'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'culturaldelights:eggplant_seeds', count: 1}, {item: 'minecraft:light_gray_dye', count: 2, chance: 0.5}]}).id('culturaldelights:cutting/wild_eggplants')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'farmersrespite:wild_tea_bush'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'farmersrespite:tea_seeds', count: 1}, {item: 'minecraft:stick', count: 2, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'farmersrespite:wild_coffee_bush'}], tool: {tag: 'forge:tools/knives'},
	result: [{item: 'farmersrespite:coffee_beans', count: 1}, {item: 'minecraft:stick', count: 2, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:leather'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:rabbit_hide', count: 1}, {item: 'minecraft:rabbit_hide', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'kubejs:prickly_pear_pie'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'kubejs:prickly_pear_pie_slice', count: 4}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:big_dripleaf'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:small_dripleaf', count: 2}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:cobblestone'}], tool: {tag: 'forge:tools/pickaxes'}, 
	result: [{item: 'twigs:pebble', count: 9}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:nether_brick'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'create:cinder_flour', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:sculk'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:sculk_vein', count: 3}, {item: 'minecraft:sculk_vein', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'miners_delight:baked_squid'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'miners_delight:baked_tentacles', count: 3}, {item: 'miners_delight:baked_tentacles', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:grass_block'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}, {item: 'minecraft:wheat_seeds', count: 1, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:mycelium'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}, {item: 'minecraft:wheat_seeds', count: 1, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:podzol'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:coarse_dirt'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:rooted_dirt'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}, {item: 'minecraft:hanging_roots', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'caverns_and_chasms:rocky_dirt'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:dirt', count: 1}, {item: 'twigs:pebble', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:charcoal'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:black_dye', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'ecologics:surface_moss'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:green_dye', count: 1, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [[{item: 'minecraft:bone'}, {item: 'aquaculture:fish_bones'}]], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:bone_meal', count: 3}, {item: 'minecraft:bone_meal', count: 1, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'architects_palette:withered_bone'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:bone_meal', count: 3}, {item: 'minecraft:bone_meal', count: 2, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'ecologics:seashell'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:bone_meal', count: 1}, {item: 'minecraft:bone_meal', count: 1, chance: 0.2}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'kubejs:cloth_scrap'}], tool: {tag: 'forge:shears'}, 
	result: [{item: 'minecraft:string', count: 1, chance: 0.425}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{tag: 'raspberry_flavoured:saplings_with_twigs'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'twigs:twig', count: 2}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'mynethersdelight:powder_cannon'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:gunpowder', count: 1}]}).id('mynethersdelight:cutting/gunpowder_cane')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'quark:bamboo_block'}], tool: {tag: 'forge:tools/axes'}, sound: 'minecraft:item.axe.strip', 
	result: [{item: 'quark:stripped_bamboo_block', count: 1}, {item: 'farmersdelight:straw', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'supplementaries:quiver'}], tool: {tag: 'forge:shears'}, 
	result: [{item: 'minecraft:rabbit_hide', count: 3}, {item: 'kubejs:cloth_scrap', count: 1}]}).id('dolt_mod_how:cutting/quiver')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:wheat'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'kubejs:oats', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'spelunkery:rock_salt_block'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'spelunkery:rock_salt', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'spelunkery:rock_salt'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'spelunkery:salt', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:sugar_cane'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:paper', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'architects_palette:coarse_snow'}], tool: {tag: 'forge:tools/hoes'}, 
	result: [{item: 'minecraft:snow_block', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'architects_palette:bread_block'}], tool: {tag: 'forge:tools/axes'}, sound: 'minecraft:item.axe.strip', 
	result: [{item: 'architects_palette:crustless_bread_block', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:tin_can'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:iron_nugget', count: 4}, {item: 'minecraft:iron_nugget', count: 4, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [[{item: 'minecraft:dead_bush'}, {item: 'environmental:tall_dead_bush'}]], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:stick', count: 2}, {item: 'farmersdelight:straw', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:melon_slice'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:melon_seeds', count: 2}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'farmersdelight:pumpkin_slice'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:pumpkin_seeds', count: 2}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:apple'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'kubejs:apple_slices', count: 2}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'kubejs:pumpkin_pie'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'create_central_kitchen:pumpkin_pie_slice', count: 4}]}).id('create_central_kitchen:cutting/pumpkin_pie_slice')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'neapolitan:banana_bunch'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'neapolitan:banana', count: 2}, {item: 'neapolitan:banana', count: 2, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'neapolitan:banana_bundle'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'neapolitan:banana_bunch', count: 4}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'atmospheric:yucca_bundle'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'atmospheric:yucca_fruit', count: 4}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'atmospheric:roasted_yucca_bundle'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'atmospheric:roasted_yucca_fruit', count: 4}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'raspberry:pink_petals'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:pink_dye', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'raspberry:cheery_wildflowers'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:yellow_dye', count: 1}, {item: 'minecraft:white_dye', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'raspberry:moody_wildflowers'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:purple_dye', count: 1}, {item: 'minecraft:red_dye', count: 1, chance: 0.5}, {item: 'minecraft:blue_dye', count: 1, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'spelunkery:tangle_roots'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'minecraft:stick', count: 2}, {item: 'farmersdelight:straw', count: 1}, {item: 'spelunkery:salt', count: 1, chance: 0.15}]})
	
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'raspberry:deepslate_gravel'}], tool: {tag: 'forge:tools/shovels'}, 
	result: [{item: 'raspberry:deepslate_gravel', count: 1, chance: 0.95}, {item: 'minecraft:flint', count: 2, chance: 0.95}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'raspberry:blackstone_gravel'}], tool: {tag: 'forge:tools/shovels'}, 
	result: [{item: 'raspberry:blackstone_gravel', count: 1, chance: 0.95}, {item: 'minecraft:flint', count: 2, chance: 0.95}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:cobblestone'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:gravel', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:cobbled_deepslate'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'raspberry:deepslate_gravel', count: 1, chance: 0.9}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'kubejs:cobbled_blackstone'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'raspberry:blackstone_gravel', count: 1, chance: 0.9}]})
	
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:copper_ingot'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'create:copper_sheet', count: 1, chance: 0.8}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:gold_ingot'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'create:golden_sheet', count: 1, chance: 0.7}]})
	
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:stone_bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:cracked_stone_bricks', count: 1}]}).id('minecraft:cracked_stone_bricks')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:deepslate_bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:cracked_deepslate_bricks', count: 1}]}).id('minecraft:cracked_deepslate_bricks')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:deepslate_tiles'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:cracked_deepslate_tiles', count: 1}]}).id('minecraft:cracked_deepslate_tiles')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:nether_bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:cracked_nether_bricks', count: 1}]}).id('minecraft:cracked_nether_bricks')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:polished_blackstone_bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:cracked_polished_blackstone_bricks', count: 1}]}).id('minecraft:cracked_polished_blackstone_bricks')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'quark:midori_block'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'kubejs:cracked_midori_block', count: 1}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'architects_palette:algal_bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'architects_palette:cracked_algal_bricks', count: 1}]}).id('architects_palette:smelting/cracked_algal_bricks_from_algal_bricks_smelting')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'architects_palette:heavy_stone_bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'architects_palette:heavy_cracked_stone_bricks', count: 1}]}).id('architects_palette:smelting/heavy_cracked_stone_bricks_from_heavy_stone_bricks_smelting')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'architects_palette:basalt_tiles'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'architects_palette:cracked_basalt_tiles', count: 1}]}).id('architects_palette:smelting/cracked_basalt_tiles_from_basalt_tiles_smelting')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'architects_palette:moonshale_bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'architects_palette:cracked_moonshale_bricks', count: 1}]}).id('architects_palette:smelting/cracked_moonshale_bricks')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'twigs:cracked_bricks', count: 1}]}).id('twigs:cracked_bricks')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'twigs:polished_bloodstone_bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'twigs:cracked_polished_bloodstone_bricks', count: 1}]}).id('twigs:cracked_polished_bloodstone_bricks')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'twigs:silt_bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'twigs:cracked_silt_bricks', count: 1}]}).id('twigs:cracked_silt_bricks')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'paletteblocks:cobblestone_bricks'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'paletteblocks:cracked_cobblestone_bricks', count: 1}]}).id('paletteblocks:smelting/cracked_cobblestone_bricks')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:purpur_block'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'endergetic:cracked_purpur_block', count: 1}]}).id('endergetic:cracked_purpur_block')
	
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:cod'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:salmon'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'naturalist:bass'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.25}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'upgrade_aquatic:perch'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'upgrade_aquatic:pike'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 3}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.5}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'sullysmod:lanternfish'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'minecraft:glow_lichen', count: 1}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:brown_trout'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:carp'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.75}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:gar'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.25}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:tambaqui'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.5}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:red_grouper'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:tuna'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 3}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:capitaine'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.5}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:pollock'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:bayad'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:blackfish'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 2}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:atlantic_herring'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 1}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.5}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:boulti'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 1}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.5}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:synodontis'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 1}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.5}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:bluegill'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 1}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.5}, {item: 'minecraft:bone_meal', count: 1, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'aquaculture:goldfish'}], tool: {tag: 'forge:tools/knives'}, 
	result: [{item: 'aquaculture:fish_fillet_raw', count: 1}, {item: 'aquaculture:fish_fillet_raw', count: 1, chance: 0.5}, {item: 'minecraft:raw_gold', count: 1}]})
	
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:zombie_head'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'auditory:block.gourd.break', 
	result: [{item: 'minecraft:rotten_flesh', count: 2}, {item: 'minecraft:rotten_flesh', count: 3, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:skeleton_skull'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:bone'}, {item: 'minecraft:bone', count: 2, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:wither_skeleton_skull'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'architects_palette:withered_bone', count: 2}, {item: 'architects_palette:withered_bone', count: 3, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'supplementaries:enderman_head'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'auditory:block.gourd.break', 
	result: [{item: 'minecraft:ender_pearl'}, {item: 'minecraft:ender_pearl', chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'minecraft:creeper_head'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'auditory:block.gourd.break', 
	result: [{item: 'minecraft:gunpowder'}, {item: 'minecraft:gunpowder', count: 2, chance: 0.35}, {item: 'savage_and_ravage:creeper_spores', chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'caverns_and_chasms:deeper_head'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'kubejs:sound.stoneore.break', 
	result: [{item: 'minecraft:gunpowder', count: 2}, {item: 'minecraft:gunpowder', count: 2, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'caverns_and_chasms:peeper_head'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'minecraft:block.nether_gold_ore.break', 
	result: [{item: 'minecraft:gunpowder', count: 2}, {item: 'minecraft:gunpowder', count: 2, chance: 0.5}, {item: 'minecraft:gunpowder', count: 1, chance: 0.25}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'caverns_and_chasms:mime_head'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'minecraft:block.amethyst_block.break', 
	result: [{item: 'minecraft:amethyst_shard', count: 3}, {item: 'minecraft:amethyst_shard', count: 3, chance: 0.5}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'piglinproliferation:piglin_head'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'auditory:block.gourd.break', 
	result: [{item: 'minecraft:porkchop', count: 1}, {item: 'minecraft:bone', count: 2, chance: 0.15}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'piglinproliferation:piglin_alchemist_head'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'auditory:block.gourd.break', 
	result: [{item: 'minecraft:porkchop', count: 2}, {item: 'minecraft:bone', count: 2, chance: 0.15}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'piglinproliferation:piglin_brute_head'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'auditory:block.gourd.break', 
	result: [{item: 'minecraft:porkchop', count: 7}, {item: 'minecraft:bone', count: 4, chance: 0.15}]})
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'piglinproliferation:zombified_piglin_head'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'auditory:block.gourd.break', 
	result: [{item: 'minecraft:rotten_flesh', count: 2}, {item: 'minecraft:bone', count: 2, chance: 0.15}]})
	
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'spelunkery:cinnabar'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:redstone', count: 2}, {item: 'minecraft:redstone', chance: 0.25}, {item: 'spelunkery:cinnabar', chance: 0.25}]})
	
	event.custom({type: 'farmersdelight:cutting', ingredients: [[{tag: 'minecraft:music_discs'}, {item: 'etched:blank_music_disc'}]], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:disc_fragment_5', count: 3}, {item: 'minecraft:disc_fragment_5', count: 2, chance: 0.2}]})
	
	event.custom({type: 'farmersdelight:cutting', ingredients: [{item: 'kubejs:music_disc_exostep'}], tool: {item: 'another_furniture:furniture_hammer'}, 
	result: [{item: 'minecraft:disc_fragment_5', count: 3}, {item: 'minecraft:disc_fragment_5', count: 2, chance: 0.2}]}).id('kubejs:exostep_crushing_1')
	event.custom({type: 'farmersdelight:cutting', ingredients: [{tag: 'raspberry_flavoured:smithing_templates'}], tool: {item: 'another_furniture:furniture_hammer'}, sound: 'minecraft:block.amethyst_block.break',  
	result: [{item: 'minecraft:amethyst_shard', count: 3}]})
	
	event.recipes.farmersdelight.cutting('mynethersdelight:strider_slice', '#forge:tools/knives', ['2x mynethersdelight:minced_strider', Item.of('string').withChance(0.25)]).id('mynethersdelight:cutting/minced_strider')
	event.recipes.farmersdelight.cutting('mynethersdelight:powdery_block', '#forge:tools/knives', ['9x mynethersdelight:powder_cannon'])
	event.recipes.farmersdelight.cutting('raspberry:clovers', '#forge:tools/knives', [Item.of('green_dye').withChance(0.25)])
	
	event.recipes.farmersdelight.cutting('kubejs:dwarf_geode', 'another_furniture:furniture_hammer', ['4x spelunkery:raw_copper_nugget', Item.of('spelunkery:raw_zinc_nugget', 4).withChance(0.75), Item.of('spelunkery:raw_iron_nugget', 3).withChance(0.5), Item.of('spelunkery:raw_gold_nugget', 2).withChance(0.25)], 'kubejs:sound.stoneore.break')
	event.recipes.farmersdelight.cutting('kubejs:deepslate_dwarf_geode', 'another_furniture:furniture_hammer', ['4x spelunkery:raw_iron_nugget', Item.of('spelunkery:raw_lead_nugget', 4).withChance(0.75), Item.of('spelunkery:raw_magnetite_nugget', 2).withChance(0.25), Item.of('spelunkery:raw_silver_nugget', 2).withChance(0.15)], 'minecraft:block.deepslate.break')
	event.recipes.farmersdelight.cutting('kubejs:blackstone_dwarf_geode', 'another_furniture:furniture_hammer', ['4x spelunkery:raw_lead_nugget', Item.of('spelunkery:raw_gold_nugget', 2).withChance(0.75), Item.of('spelunkery:raw_magnetite_nugget', 2).withChance(0.5), Item.of('quartz', 3).withChance(0.25)], 'kubejs:sound.blackstone.break')
	
	function mushCapCutting(capItem, resultItem) {
		event.custom({type: 'farmersdelight:cutting', ingredients: [{item: capItem}], tool: {tag: 'forge:tools/hoes'}, result: [{item: resultItem, count: 1}]})
	}
	mushCapCutting('minecraft:brown_mushroom_block', 'minecraft:brown_mushroom')
	mushCapCutting('minecraft:red_mushroom_block', 'minecraft:red_mushroom')
	mushCapCutting('minecraft:nether_wart_block', 'minecraft:crimson_fungus')
	mushCapCutting('minecraft:warped_wart_block', 'minecraft:warped_fungus')
	mushCapCutting('kubejs:choral_cap', 'architects_palette:twisted_sapling')
	mushCapCutting('spelunkery:conk_fungus_block', 'spelunkery:conk_fungus')
	mushCapCutting('spelunkery:portabella_block', 'spelunkery:portabella')
	mushCapCutting('spelunkery:inkcap_mushroom_block', 'spelunkery:inkcap_mushroom')
	mushCapCutting('spelunkery:white_inkcap_mushroom_block', 'spelunkery:white_inkcap_mushroom')
	mushCapCutting('spelunkery:milly_bubcap_block', 'spelunkery:milly_bubcap')
	mushCapCutting('quark:glow_shroom_block', 'quark:glow_shroom')

// Cooking
	event.recipes.farmersdelight.cooking(['#raspberry_flavoured:cacti', '#raspberry_flavoured:cacti', '#raspberry_flavoured:cacti', 'sugar'], '2x kubejs:cactus_juice', 0, 200, 'minecraft:glass_bottle')
	event.recipes.farmersdelight.cooking(['melon_slice', 'melon_slice', 'melon_slice', 'melon_slice', 'sugar'], '2x farmersdelight:melon_juice', 0, 200, 'minecraft:glass_bottle').id('farmersdelight:melon_juice')
	event.recipes.farmersdelight.cooking(['cocoa_beans', 'create_confectionery:cocoa_butter', 'sugar'], '2x farmersdelight:hot_cocoa', 0, 200, 'minecraft:glass_bottle').id('farmersdelight:cooking/hot_cocoa')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{tag: 'raspberry_flavoured:apples'}, {tag: 'raspberry_flavoured:apples'}, {tag: 'raspberry_flavoured:apples'}, {item: 'kubejs:cinnamon'}], result: {item: 'farmersdelight:apple_cider', count: 2}}).id('farmersdelight:cooking/apple_cider')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:green_tea_leaves'}, {item: 'farmersrespite:green_tea_leaves'}], result: {item: 'farmersrespite:green_tea', count: 1}}).id('farmersrespite:brewing/green_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:yellow_tea_leaves'}, {item: 'farmersrespite:yellow_tea_leaves'}], result: {item: 'farmersrespite:yellow_tea', count: 1}}).id('farmersrespite:brewing/yellow_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:black_tea_leaves'}, {item: 'farmersrespite:black_tea_leaves'}], result: {item: 'farmersrespite:black_tea', count: 1}}).id('farmersrespite:brewing/black_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:dandelion'}, {item: 'minecraft:dandelion'}, {tag: 'farmersrespite:tea_leaves'}], result: {item: 'farmersrespite:dandelion_tea', count: 1}}).id('farmersrespite:brewing/dandelion_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:rose_hips'}, {item: 'farmersrespite:rose_hips'}], result: {item: 'farmersrespite:rose_hip_tea', count: 1}}).id('farmersrespite:brewing/rose_hip_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:coffee_berries'}, {item: 'minecraft:glow_berries'}], result: {item: 'farmersrespite:gamblers_tea', count: 1}}).id('farmersrespite:brewing/gamblers_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'minecraft:crimson_fungus'}, {item: 'minecraft:warped_fungus'}, {item: 'autumnity:snail_goo'}], result: {item: 'farmersrespite:purulent_tea', count: 2}}).id('farmersrespite:brewing/purulent_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:coffee_beans'}, {item: 'farmersrespite:coffee_beans'}], result: {item: 'farmersrespite:coffee', count: 1}}).id('farmersrespite:brewing/coffee')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'neapolitan:chocolate_bar'}, {item: 'farmersrespite:coffee_beans'}, {tag: 'forge:milk'}], result: {item: 'respiteful:mocha_coffee', count: 1}}).id('respiteful:brewing/mocha_coffee')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'environmental:cherries'}, {item: 'environmental:cherries'}, {item: 'farmersrespite:black_tea_leaves'}, {tag: 'forge:milk'}], result: {item: 'respiteful:adzuki_milk_tea', count: 1}}).id('respiteful:brewing/adzuki_milk_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 300, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'neapolitan:dried_vanilla_pods'}, {item: 'farmersrespite:yellow_tea_leaves'}, {tag: 'forge:milk'}], result: {item: 'respiteful:vanilla_milk_tea', count: 1}}).id('respiteful:brewing/vanilla_milk_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'neapolitan:mint_leaves'}, {item: 'farmersrespite:green_tea_leaves'}], result: {item: 'respiteful:mint_green_tea', count: 1}}).id('respiteful:brewing/mint_green_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{tag: 'minecraft:leaves'}, {tag: 'minecraft:leaves'}, {tag: 'forge:milk'}], result: {item: 'create:builders_tea', count: 1}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 400, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{tag: 'farmersrespite:tea_leaves'}, {tag: 'farmersrespite:tea_leaves'}, {tag: 'forge:milk'}], result: {item: 'create:builders_tea', count: 2}}).id('create_central_kitchen:brewing/builders_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:green_tea'}, {tag: 'forge:milk'}], result: {item: 'farmersrespite:long_green_tea', count: 1}}).id('farmersrespite:brewing/long_green_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:yellow_tea'}, {tag: 'forge:milk'}], result: {item: 'farmersrespite:long_yellow_tea', count: 1}}).id('farmersrespite:brewing/long_yellow_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:black_tea'}, {tag: 'forge:milk'}], result: {item: 'farmersrespite:long_black_tea', count: 1}}).id('farmersrespite:brewing/long_black_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:coffee'}, {tag: 'forge:milk'}], result: {item: 'farmersrespite:long_coffee', count: 1}}).id('farmersrespite:brewing/long_coffee')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:green_tea'}, {item: 'minecraft:honey_bottle'}], result: {item: 'farmersrespite:strong_green_tea', count: 1}}).id('farmersrespite:brewing/strong_green_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:yellow_tea'}, {item: 'minecraft:honey_bottle'}], result: {item: 'farmersrespite:strong_yellow_tea', count: 1}}).id('farmersrespite:brewing/strong_yellow_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:black_tea'}, {item: 'minecraft:honey_bottle'}], result: {item: 'farmersrespite:strong_black_tea', count: 1}}).id('farmersrespite:brewing/strong_black_tea')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:glass_bottle'}, ingredients: [{item: 'farmersrespite:coffee'}, {item: 'minecraft:honey_bottle'}], result: {item: 'farmersrespite:strong_coffee', count: 1}}).id('farmersrespite:brewing/strong_coffee')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'culturaldelights:regular_eggplants'}, {item: 'farmersdelight:tomato_sauce'}, {tag: 'forge:eggs'}, {item: 'farmersdelight:onion'}], result: {item: 'culturaldelights:fried_eggplant_pasta', count: 1}}).id('culturaldelights:cooking/fried_eggplant_pasta')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [[{tag: 'raspberry_flavoured:raw_fish'}, {item: 'aquaculture:fish_bones'}], [{tag: 'raspberry_flavoured:raw_fish'}, {item: 'aquaculture:fish_bones'}], {tag: 'raspberry_flavoured:cat_prey'}, {tag: 'forge:eggs'}], result: {item: 'kubejs:cat_food', count: 1}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'forge:raw_chicken'}, {tag: 'mynethersdelight:hot_spice'}, {item: 'farmersdelight:onion'}], result: {item: 'mynethersdelight:hot_wings', count: 2}}).id('mynethersdelight:cooking/hot_wings')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, ingredients: [{tag: 'forge:eggs'}, {tag: 'forge:eggs'}, {tag: 'mynethersdelight:hot_spice'}, {tag: 'forge:raw_pork'}], result: {item: 'mynethersdelight:deviled_egg', count: 2}}).id('mynethersdelight:cooking/deviled_egg')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, ingredients: [{item: 'miners_delight:bat_wing'}, {tag: 'farmersdelight:cabbage_roll_ingredients'}], result: {item: 'kubejs:bat_rolls'}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{item: 'miners_delight:tentacles'}, {item: 'miners_delight:tentacles'}, {tag: 'raspberry_flavoured:dough'}, {tag: 'forge:crops/onion'}, {item: 'cookscollection:cooking_oil'}], result: {item: 'kubejs:takoyaki'}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [[{tag: 'brewinandchewin:bone_or_withered_bone'}, {item: 'aquaculture:fish_bones'}], [{tag: 'raspberry_flavoured:cave_scrap_ingredients'}, {item: 'miners_delight:bat_wing'}, {item: 'aquaculture:algae'}]], result: {item: 'farmersdelight:bone_broth'}}).id('farmersdelight:cooking/bone_broth')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{item: 'culturaldelights:corn_dough'}, {item: 'farmersdelight:onion'}, {item: 'brewinandchewin:flaxen_cheese_wedge'}, {tag: 'forge:eggs'}, {item: 'cookscollection:cooking_oil'}], result: {item: 'kubejs:corn_fritters'}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'raspberry_flavoured:red_fish'}, {item: 'farmersdelight:tomato_sauce'}, {item: 'farmersdelight:onion'}], result: {item: 'farmersdelight:fish_stew'}}).id('farmersdelight:cooking/fish_stew')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'raspberry_flavoured:white_fish'}, {tag: 'forge:crops/cabbage'}, {item: 'farmersdelight:onion'}], result: {item: 'kubejs:white_fish_soup'}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{item: 'aquaculture:tambaqui'}, {item: 'farmersdelight:rice'}, {tag: 'forge:vegetables'}, {item: 'farmersdelight:pumpkin_slice'}, {item: 'cookscollection:cooking_oil'}], result: {item: 'kubejs:tambaqui_curry'}})
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'raspberry_flavoured:raw_fish'}, {item: 'environmental:dianthus'}, {item: 'minecraft:bone_meal'}, {tag: 'abnormals_delight:slabdish_ingredients'}, {tag: 'abnormals_delight:slabdish_ingredients'}], result: {item: 'abnormals_delight:slabdish'}}).id('abnormals_delight:environmental/cooking/slabdish')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [[{item: 'nethersdelight:hoglin_loin'}, {item: 'nethersdelight:hoglin_sirloin'}], {tag: 'farmersdelight:wheat_or_flour'}, {tag: 'forge:eggs'}, {item: 'mynethersdelight:bullet_pepper'}], result: {item: 'mynethersdelight:fried_hoglin_chop'}}).id('mynethersdelight:cooking/fried_hoglin_chop')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{tag: 'mynethersdelight:strider_meats'}, {tag: 'forge:pasta'}, {item: 'minecraft:crimson_fungus'}, {item: 'minecraft:crimson_fungus'}], result: {item: 'mynethersdelight:crimson_stroganoff'}}).id('mynethersdelight:cooking/crimson_stroganoff')
	event.custom({type: 'farmersdelight:cooking', cookingtime: 200, experience: 0, container: {item: 'minecraft:bowl'}, ingredients: [{item: 'kubejs:oats'}, {tag: 'raspberry_flavoured:berries'}, {tag: 'raspberry_flavoured:breakfast_condiments'}, {item: 'kubejs:cinnamon'}], result: {item: 'kubejs:mixed_oatmeal'}})
	event.recipes.farmersdelight.cooking(['#farmersdelight:wheat_or_flour', '#forge:eggs', '#forge:milk', 'sugar'], '2x kubejs:batter', 0, 100, 'minecraft:bowl')
	event.recipes.farmersdelight.cooking(['cookscollection:lemon', 'cookscollection:lemon', 'cookscollection:lemon', 'sugar'], '2x cookscollection:lemonade', 0, 200, 'minecraft:glass_bottle').id('cookscollection:lemonade')
	event.recipes.farmersdelight.cooking(['#raspberry_flavoured:raw_squid', '#forge:crops/rice', '#forge:crops/cabbage', 'farmersdelight:tomato_sauce', 'cookscollection:cooking_oil'], 'kubejs:squid_stir_fry', 0, 200, 'minecraft:bowl')
	event.recipes.farmersdelight.cooking(['#forge:crops/potato', '#forge:crops/potato', 'cookscollection:cooking_oil', 'mynethersdelight:hoglin_sausage', 'mynethersdelight:hoglin_sausage'], '2x mynethersdelight:sausage_and_potatoes', 0, 200, 'minecraft:bowl').id('mynethersdelight:cooking/sausage_and_potatoes')
	event.recipes.farmersdelight.cooking(['windswept:roasted_chestnuts', '#forge:raw_chicken', '#forge:crops/onion', 'brewinandchewin:flaxen_cheese_wedge'], 'windswept:chestnut_risotto', 0, 200, 'minecraft:bowl').id('windswept:cooking/chestnut_risotto')
	event.recipes.farmersdelight.cooking(['#mynethersdelight:hot_spice', '#forge:eggs', 'magma_cream', 'magma_cream'], 'mynethersdelight:hot_cream', 0, 200, 'minecraft:bucket').id('mynethersdelight:cooking/hotcream')
	
	event.recipes.farmersdelight.cooking(['brewinandchewin:flaxen_cheese_wedge', '#forge:pasta', '#forge:crops/tomato', '#forge:crops/cabbage', 'cookscollection:cooking_oil'], 'brewinandchewin:cheesy_pasta', 0, 200, 'minecraft:bowl').id('brewinandchewin:cooking/cheesy_pasta')
	event.recipes.farmersdelight.cooking(['farmersdelight:minced_beef', '#forge:pasta', 'farmersdelight:tomato_sauce', 'cookscollection:cooking_oil'], 'farmersdelight:pasta_with_meatballs', 0, 200, 'minecraft:bowl').id('farmersdelight:cooking/pasta_with_meatballs')
	event.recipes.farmersdelight.cooking(['#forge:raw_mutton', '#forge:pasta', 'farmersdelight:tomato_sauce', 'cookscollection:cooking_oil'], 'farmersdelight:pasta_with_mutton_chop', 0, 200, 'minecraft:bowl').id('farmersdelight:cooking/pasta_with_mutton_chop')
	event.recipes.farmersdelight.cooking(['#raspberry_flavoured:raw_fish', '#forge:pasta', ['ink_sac', '#raspberry_flavoured:raw_squid'], ['#forge:crops/tomato', '#forge:crops/beetroot'], 'cookscollection:cooking_oil'], 'farmersdelight:squid_ink_pasta', 0, 200, 'minecraft:bowl').id('farmersdelight:cooking/squid_ink_pasta')
	event.recipes.farmersdelight.cooking(['sullysmod:lanternfish', '#forge:pasta', ['glow_ink_sac', 'miners_delight:glow_squid'], 'glow_berries', 'cookscollection:cooking_oil'], 'kubejs:glow_ink_pasta', 0, 200, 'minecraft:bowl')
	event.recipes.farmersdelight.cooking(['#forge:raw_turkey', '#forge:pasta', '#forge:crops/cabbage', 'brewinandchewin:flaxen_cheese_wedge', 'cookscollection:cooking_oil'], 'kubejs:pasta_with_turkey', 0, 200, 'minecraft:bowl')
	event.recipes.farmersdelight.cooking(['aquaculture:tuna', '#forge:pasta', 'farmersdelight:tomato_sauce', 'cookscollection:cooking_oil'], 'kubejs:pasta_with_tuna', 0, 200, 'minecraft:bowl')

// Baking
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'neapolitan:chocolate_bar'}, {item: 'kubejs:batter'}
	], result: {item: 'cookscollection:chocolate_muffin'}}).id('cookscollection:chocolate_muffin')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'cookscollection:lemon'}, {item: 'minecraft:poppy'}, {item: 'kubejs:batter'}
	], result: {item: 'cookscollection:lemon_muffin'}}).id('cookscollection:lemon_muffin')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'farmersdelight:wheat_dough'}, {item: 'farmersdelight:wheat_dough'}, 
		{item: 'kubejs:oats'}, {item: 'supplementaries:flax_seeds'}, {item: 'supplementaries:flax_seeds'}
	], result: {item: 'cookscollection:rustic_loaf', count: 2}}).id('cookscollection:rustic_loaf')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'brewinandchewin:scarlet_cheese_wedge'}, {tag: 'forge:crops/beetroot'}, {item: 'farmersdelight:tomato_sauce'}, 
		{item: 'farmersdelight:raw_pasta'}, {tag: 'brewinandchewin:horror_lasagna_meats'}, {item: 'minecraft:bowl'}
	], result: {item: 'brewinandchewin:horror_lasagna'}}).id('brewinandchewin:cooking/horror_lasagna')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'minecraft:cod'}, {item: 'farmersrespite:black_tea_leaves'}, {item: 'minecraft:bowl'}, {tag: 'forge:crops/cabbage'}, {tag: 'forge:crops/rice'}
	], result: {item: 'farmersrespite:black_cod'}}).id('farmersrespite:black_cod')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'forge:raw_mutton'}, {tag: 'forge:crops/beetroot'}, {item: 'minecraft:bowl'}, {tag: 'forge:crops/tomato'}, {tag: 'forge:crops/rice'}
	], result: {item: 'farmersdelight:roasted_mutton_chops'}}).id('farmersdelight:roasted_mutton_chops')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'minecraft:beef'}, {tag: 'forge:crops/potato'}, {item: 'minecraft:bowl'}, {tag: 'forge:crops/onion'}, {tag: 'forge:crops/rice'}
	], result: {item: 'farmersdelight:steak_and_potatoes'}}).id('farmersdelight:steak_and_potatoes')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'forge:crops/tomato'}, {tag: 'forge:crops/onion'}, {item: 'minecraft:bowl'}, 
		{tag: 'culturaldelights:regular_eggplants'}, {tag: 'forge:vegetables'}, {item: 'cookscollection:cooking_oil'}
	], result: {item: 'farmersdelight:ratatouille'}}).id('farmersdelight:cooking/ratatouille')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'minecraft:salmon'}, {tag: 'forge:crops/cabbage'}, {item: 'minecraft:bowl'}, {item: 'minecraft:sweet_berries'}, {tag: 'forge:crops/onion'}
	], result: {item: 'farmersdelight:grilled_salmon'}}).id('farmersdelight:grilled_salmon')
	event.custom({type: 'cookscollection:baking', cooktime: 600, ingredients: [
		{tag: 'forge:crops/onion'}, {tag: 'forge:eggs'}, {tag: 'forge:bread/wheat'}, 
		{tag: 'forge:crops/carrot'}, {item: 'minecraft:chicken'}, {tag: 'forge:crops/potato'}, 
		{tag: 'forge:crops/carrot'}, {item: 'minecraft:bowl'}, {tag: 'forge:crops/potato'}
	], result: {item: 'farmersdelight:roast_chicken_block'}}).id('farmersdelight:roast_chicken')
	event.custom({type: 'cookscollection:baking', cooktime: 600, ingredients: [
		{item: 'minecraft:sweet_berries'}, {item: 'minecraft:honey_bottle'}, {item: 'minecraft:sweet_berries'}, 
		{item: 'minecraft:sweet_berries'}, {item: 'farmersdelight:ham'}, {item: 'minecraft:sweet_berries'}, 
		{tag: 'forge:crops/rice'}, {item: 'minecraft:bowl'}, {tag: 'forge:crops/rice'}
	], result: {item: 'farmersdelight:honey_glazed_ham_block'}}).id('farmersdelight:honey_glazed_ham')
	event.custom({type: 'cookscollection:baking', cooktime: 600, ingredients: [
		{tag: 'forge:crops/potato'}, {tag: 'forge:milk'}, {tag: 'forge:crops/potato'}, 
		{tag: 'forge:raw_mutton'}, {tag: 'forge:raw_mutton'}, {tag: 'forge:raw_mutton'}, 
		{tag: 'forge:crops/onion'}, {item: 'minecraft:bowl'}, {tag: 'forge:crops/onion'}
	], result: {item: 'farmersdelight:shepherds_pie_block'}}).id('farmersdelight:shepherds_pie')
	event.custom({type: 'cookscollection:baking', cooktime: 600, ingredients: [
		{tag: 'culturaldelights:regular_eggplants'}, {item: 'brewinandchewin:flaxen_cheese_wedge'}, {tag: 'culturaldelights:regular_eggplants'}, 
		{tag: 'forge:eggs'}, {item: 'farmersdelight:tomato_sauce'}, {tag: 'forge:bread/wheat'}, 
		{tag: 'forge:pasta'}, {item: 'minecraft:bowl'}, {tag: 'forge:pasta'}
	], result: {item: 'kubejs:eggplant_parmesan_block'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'sob:cinder_dough'}, {item: 'sob:cinder_dough'}, {tag: 'raspberry_flavoured:soul_blocks'}, {item: 'minecraft:crimson_fungus'}
	], result: {item: 'farmersrespite:nether_wart_sourdough', count: 2}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'culturaldelights:corn_dough'}, {item: 'culturaldelights:corn_dough'}, {item: 'minecraft:gunpowder'}, {item: 'savage_and_ravage:creeper_spores'}
	], result: {item: 'kubejs:sporedough', count: 2}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {tag: 'forge:fruits/strawberry'}, {item: 'minecraft:sugar'}
	], result: {item: 'neapolitan:strawberry_scones', count: 2}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'farmersdelight:wheat_dough'}, {tag: 'forge:fruits/banana'}, {item: 'minecraft:sugar'}
	], result: {item: 'neapolitan:banana_bread', count: 2}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'farmersdelight:wheat_dough'}, {item: 'autumnity:syrup_bottle'}, {item: 'farmersdelight:pumpkin_slice'}, {item: 'farmersdelight:pumpkin_slice'}
	], result: {item: 'autumnity:pumpkin_bread', count: 2}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'forge:raw_venison'}, {tag: 'forge:crops/carrot'}, {item: 'minecraft:bowl'},
		{tag: 'forge:fruits/cherry'}, {tag: 'forge:fruits/cherry'}
	], result: {item: 'abnormals_delight:seared_venison'}}).id('abnormals_delight:seared_venison')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'forge:raw_rabbit'}, {item: 'atmospheric:aloe_leaves'}, {item: 'minecraft:bowl'},
		{item: 'atmospheric:yucca_fruit'}, {item: 'atmospheric:yellow_blossoms'}, {tag: 'raspberry_flavoured:cacti'}
	], result: {item: 'abnormals_delight:dune_platter'}}).id('abnormals_delight:dune_platter')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'upgrade_aquatic:perch'}, {item: 'minecraft:red_mushroom'}, {item: 'minecraft:bowl'},
		{tag: 'forge:crops/rice'}, {tag: 'forge:crops/tomato'}
	], result: {item: 'abnormals_delight:perch_with_mushrooms'}}).id('abnormals_delight:perch_with_mushrooms')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'upgrade_aquatic:pike'}, {tag: 'forge:crops/beetroot'}, {item: 'minecraft:bowl'},
		{item: 'minecraft:kelp'}, {item: 'minecraft:kelp'}
	], result: {item: 'abnormals_delight:pike_with_beetroot'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'forge:raw_venison'}, {item: 'minecraft:kelp'}, {item: 'minecraft:bowl'},
		{tag: 'forge:vegetables'}, {item: 'minecraft:bamboo'}, {item: 'minecraft:bamboo'}
	], result: {item: 'abnormals_delight:venison_with_bamboo_shoots'}}).id('abnormals_delight:venison_with_bamboo_shoots')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'nethersdelight:hoglin_loin'}, {item: 'minecraft:warped_roots'}, {item: 'minecraft:bowl'},
		{item: 'minecraft:warped_fungus'}, {item: 'minecraft:warped_fungus'}
	], result: {item: 'mynethersdelight:blue_tenderloin_steak'}}).id('mynethersdelight:crafting/blue_tenderloin_steak')
	event.custom({type: 'cookscollection:baking', cooktime: 900, ingredients: [
		{item: 'farmersdelight:ham'}, {item: 'farmersdelight:nether_salad'}, {item: 'farmersdelight:ham'}, 
		{item: 'minecraft:crimson_roots'}, {item: 'nethersdelight:hoglin_hide'}, {item: 'minecraft:warped_roots'}, 
		{item: 'nethersdelight:hoglin_loin'}, {item: 'minecraft:bowl'}, {item: 'nethersdelight:hoglin_loin'}
	], result: {item: 'mynethersdelight:roast_stuffed_hoglin'}}).id('mynethersdelight:cooking/roast_stuffed_hoglin')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'mynethersdelight:strider_meats'}, {item: 'minecraft:crimson_fungus'}, {item: 'minecraft:bowl'},
		{item: 'minecraft:warped_fungus'}, {tag: 'raspberry_flavoured:edible_mushrooms'}
	], result: {item: 'mynethersdelight:strider_with_grilled_fungus'}}).id('mynethersdelight:cooking/strider_and_grilled_fungus')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'mynethersdelight:strider_meats'}, {tag: 'mynethersdelight:strider_meats'}, {item: 'minecraft:bowl'},
		{tag: 'mynethersdelight:strider_meats'}, {tag: 'mynethersdelight:strider_meats'}, {item: 'sob:cinder_dough'}
	], result: {item: 'mynethersdelight:striderloaf'}}).id('mynethersdelight:crafting/striderloaf')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'aquaculture:pollock'}, {tag: 'forge:crops/carrot'}, {item: 'minecraft:bowl'},
		{tag: 'forge:crops/cabbage'}, {tag: 'forge:vegetables'}
	], result: {item: 'kubejs:pollock_with_vegetables'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'culturaldelights:corn_dough'}, {item: 'culturaldelights:corn_dough'}, {item: 'culturaldelights:corn_dough'}
	], result: {item: 'culturaldelights:tortilla', count: 3}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'sob:cinder_dough'}, {item: 'sob:cinder_dough'}, {item: 'sob:cinder_dough'}
	], result: {item: 'sob:cinder_bread', count: 3}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'culturaldelights:corn_dough'}, {item: 'culturaldelights:corn_dough'}, {tag: 'culturaldelights:avocados'},
		{item: 'farmersdelight:tomato_sauce'}, {tag: 'forge:crops/onion'}
	], result: {item: 'culturaldelights:empanada', count: 2}}).id('culturaldelights:cooking/empanada')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'minecraft:potato'}, {item: 'minecraft:potato'},
		{item: 'spelunkery:salt'}, {item: 'cookscollection:cooking_oil'}
	], result: {item: 'cookscollection:fried_potato', count: 4}}).id('cookscollection:fried_potato')
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'farmersdelight:wheat_dough'},
		{tag: 'forge:milk'}, {item: 'minecraft:sugar'}
	], result: {item: 'create:sweet_roll', count: 2}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'farmersdelight:wheat_dough'},
		{tag: 'forge:milk'}, {item: 'minecraft:sugar'}, {item: 'kubejs:cinnamon'}
	], result: {item: 'kubejs:cinnamon_roll', count: 2}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'sob:cinder_dough'}, {item: 'sob:cinder_dough'},
		{tag: 'mynethersdelight:hot_spice'}, {item: 'minecraft:magma_cream'}
	], result: {item: 'sob:caldera_roll', count: 2}})
	
	// Cakes
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'minecraft:sweet_berries'}, {item: 'minecraft:sweet_berries'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'neapolitan:dried_vanilla_pods'}, {item: 'neapolitan:dried_vanilla_pods'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:vanilla_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'neapolitan:chocolate_bar'}, {item: 'neapolitan:chocolate_bar'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:chocolate_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'neapolitan:strawberries'}, {item: 'neapolitan:strawberries'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:strawberry_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'neapolitan:banana'}, {item: 'neapolitan:banana'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:banana_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'neapolitan:mint_leaves'}, {item: 'neapolitan:mint_leaves'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:mint_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'environmental:cherries'}, {item: 'environmental:cherries'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:cherry_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersrespite:green_tea_leaves'}, {item: 'farmersrespite:green_tea_leaves'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:green_tea_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersrespite:yellow_tea_leaves'}, {item: 'farmersrespite:yellow_tea_leaves'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:yellow_tea_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersrespite:black_tea_leaves'}, {item: 'farmersrespite:black_tea_leaves'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:black_tea_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersrespite:coffee_beans'}, {item: 'farmersrespite:coffee_beans'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:coffee_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'mynethersdelight:hot_cream'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'raspberry:magma_cake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'atmospheric:aloe_gel_bottle'}, {item: 'atmospheric:yucca_fruit'}, {item: 'kubejs:batter'}, {item: 'kubejs:batter'}
	], result: {item: 'atmospheric:yucca_gateau'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'autumnity:syrup_bottle'}, {item: 'cookscollection:lemon'}, {item: 'kubejs:batter'}
	], result: {item: 'autumnity:pancake', count: 4}})
	
	// Pies
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersdelight:pumpkin_slice'}, {item: 'farmersdelight:pumpkin_slice'}, 
		{item: 'farmersdelight:pumpkin_slice'}, {item: 'farmersdelight:pie_crust'}
	], result: {item: 'kubejs:pumpkin_pie'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'farmersrespite:rose_hips'}, {item: 'farmersrespite:rose_hips'}, 
		{item: 'farmersrespite:rose_hips'}, {item: 'minecraft:honey_bottle'},
		{item: 'farmersdelight:pie_crust'}
	], result: {item: 'farmersrespite:rose_hip_pie'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'raspberry_flavoured:apples'}, {tag: 'raspberry_flavoured:apples'}, 
		{tag: 'raspberry_flavoured:apples'}, {item: 'farmersdelight:pie_crust'}
	], result: {item: 'farmersdelight:apple_pie'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'environmental:cherries'}, {item: 'environmental:cherries'}, 
		{item: 'environmental:cherries'}, {item: 'environmental:cherries'},
		{item: 'environmental:cherries'}, {item: 'farmersdelight:pie_crust'}
	], result: {item: 'environmental:cherry_pie'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'environmental:truffle'}, {tag: 'raspberry_flavoured:edible_mushrooms'}, 
		{tag: 'raspberry_flavoured:edible_mushrooms'}, {tag: 'raspberry_flavoured:edible_mushrooms'},
		{item: 'farmersdelight:pie_crust'}
	], result: {item: 'environmental:truffle_pie'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'forge:milk'}, {item: 'minecraft:glow_berries'}, 
		{item: 'minecraft:glow_berries'}, {item: 'minecraft:glow_berries'}, 
		{item: 'minecraft:glow_berries'}, {item: 'farmersdelight:pie_crust'}
	], result: {item: 'farmersdelight:sweet_berry_cheesecake'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'neapolitan:chocolate_bar'}, {item: 'neapolitan:chocolate_bar'},
		{item: 'farmersdelight:pie_crust'}
	], result: {item: 'farmersdelight:chocolate_pie'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{item: 'kubejs:cinnamon'}, {item: 'kubejs:cinnamon'}, 
		{item: 'kubejs:cinnamon'}, {item: 'create_confectionery:cocoa_butter'},
		{item: 'farmersdelight:pie_crust'}
	], result: {item: 'kubejs:butterscotch_cinnamon_pie'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'raspberry_flavoured:prickly_pears'}, {tag: 'raspberry_flavoured:prickly_pears'}, 
		{tag: 'raspberry_flavoured:prickly_pears'}, {item: 'farmersdelight:pie_crust'}
	], result: {item: 'kubejs:prickly_pear_pie'}})
	event.custom({type: 'cookscollection:baking', cooktime: 200, ingredients: [
		{tag: 'brewinandchewin:bacon_or_mushroom'}, {tag: 'forge:crops/cabbage'}, 
		{tag: 'forge:eggs'}, {item: 'brewinandchewin:flaxen_cheese_wedge'}, 
		{item: 'farmersdelight:pie_crust'}
	], result: {item: 'brewinandchewin:quiche'}})
	event.custom({type: 'cookscollection:baking', cooktime: 300, ingredients: [
		{item: 'brewinandchewin:flaxen_cheese_wedge'}, {item: 'brewinandchewin:flaxen_cheese_wedge'}, {item: 'brewinandchewin:flaxen_cheese_wedge'}, 
		{tag: 'raspberry_flavoured:edible_mushrooms'}, {item: 'farmersdelight:tomato_sauce'}, {item: 'farmersdelight:minced_beef'}, 
		{item: 'farmersdelight:wheat_dough'}, {item: 'farmersdelight:wheat_dough'}, {item: 'farmersdelight:wheat_dough'}
	], result: {item: 'brewinandchewin:pizza'}})
	
	// Cookies
	event.custom({type: 'cookscollection:baking', cooktime: 100, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'neapolitan:chocolate_bar'}
	], result: {item: 'minecraft:cookie', count: 8}})
	event.custom({type: 'cookscollection:baking', cooktime: 100, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'farmersrespite:green_tea_leaves'}
	], result: {item: 'farmersrespite:green_tea_cookie', count: 8}})
	event.custom({type: 'cookscollection:baking', cooktime: 100, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'minecraft:sweet_berries'}
	], result: {item: 'farmersdelight:sweet_berry_cookie', count: 8}})
	event.custom({type: 'cookscollection:baking', cooktime: 100, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'minecraft:honey_bottle'}
	], result: {item: 'farmersdelight:honey_cookie', count: 8}})
	event.custom({type: 'cookscollection:baking', cooktime: 100, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'minecraft:sugar'}
	], result: {item: 'kubejs:sugar_cookie', count: 8}})
	event.custom({type: 'cookscollection:baking', cooktime: 100, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'kubejs:oats'}
	], result: {item: 'kubejs:oat_cookie', count: 8}})
	event.custom({type: 'cookscollection:baking', cooktime: 100, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'kubejs:cinnamon'}
	], result: {item: 'kubejs:cinnamon_cracker', count: 8}})
	event.custom({type: 'cookscollection:baking', cooktime: 100, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'environmental:cherries'}
	], result: {item: 'abnormals_delight:cherry_cookie', count: 8}})
	event.custom({type: 'cookscollection:baking', cooktime: 100, ingredients: [
		{item: 'farmersdelight:wheat_dough'}, {item: 'autumnity:syrup_bottle'}
	], result: {item: 'abnormals_delight:maple_cookie', count: 8}})

// Fermenting
	event.custom({type: 'brewinandchewin:fermenting', fermentingtime: 2400, experience: 0, temperature: 4, container: {item: 'minecraft:bowl'}, fluiditem: {tag: 'forge:milk'}, ingredients: [{item: 'minecraft:glow_berries'}, {item: 'minecraft:glow_berries'}, {item: 'minecraft:glow_berries'}, {item: 'minecraft:sugar'}], result: {item: 'berry_good:glowgurt', count: 3}}).id('berry_good:glowgurt')
	event.custom({type: 'brewinandchewin:fermenting', fermentingtime: 1200, experience: 0, temperature: 3, ingredients: [{tag: 'brewinandchewin:raw_meats'}, {tag: 'brewinandchewin:raw_meats'}, {tag: 'brewinandchewin:raw_meats'}, {item: 'spelunkery:salt'}], result: {item: 'brewinandchewin:jerky', count: 6}}).id('brewinandchewin:fermenting/jerky')
	event.custom({type: 'brewinandchewin:fermenting', fermentingtime: 3600, experience: 0, temperature: 2, container: {item: 'brewinandchewin:tankard'}, fluiditem: {item: 'atmospheric:aloe_gel_bottle'}, ingredients: [{item: 'autumnity:foul_berries'}, {item: 'autumnity:foul_berries'}, {item: 'neapolitan:mint_leaves'}, {item: 'mynethersdelight:bullet_pepper'}], result: {item: 'kubejs:foul_fernet', count: 2}})
	event.custom({type: 'brewinandchewin:fermenting', fermentingtime: 2400, experience: 0, temperature: 3, container: {item: 'minecraft:bowl'}, fluiditem: {item: 'cookscollection:cooking_oil'}, ingredients: [{item: 'aquaculture:atlantic_herring'}, {item: 'aquaculture:atlantic_herring'}, {tag: 'forge:crops/onion'}, {item: 'spelunkery:salt'}], result: {item: 'kubejs:rollmops'}})

// Grindstone polishing
	event.custom({type: 'sullysmod:grindstone_polishing', ingredients: [{item: 'spelunkery:rough_cinnabar'}], result: {item: 'spelunkery:cinnabar'}, experience: 0})
	event.custom({type: 'sullysmod:grindstone_polishing', ingredients: [{item: 'spelunkery:rough_diamond'}], result: {item: 'minecraft:diamond'}, experience: 0})
	event.custom({type: 'sullysmod:grindstone_polishing', ingredients: [{item: 'spelunkery:rough_cinnabar_shard'}], result: {item: 'spelunkery:cinnabar_shard'}, experience: 0})
	event.custom({type: 'sullysmod:grindstone_polishing', ingredients: [{item: 'spelunkery:rough_diamond_shard'}], result: {item: 'spelunkery:diamond_shard'}, experience: 0})
	
// Pressing
	event.recipes.create.pressing(['4x minecraft:disc_fragment_5', Item.of('minecraft:disc_fragment_5', 3).withChance(0.3)], '#minecraft:music_discs')
	event.recipes.create.pressing(['4x minecraft:disc_fragment_5', Item.of('minecraft:disc_fragment_5', 3).withChance(0.3)], 'kubejs:music_disc_exostep').id('kubejs:exostep_crushing_2')
	event.recipes.create.pressing(['4x amethyst_shard'], '#raspberry_flavoured:smithing_templates')
	event.recipes.create.pressing(['kubejs:oats', Item.of('kubejs:oats').withChance(0.5)], 'wheat')
	event.recipes.create.pressing(['3x rotten_flesh', Item.of('rotten_flesh',4).withChance(0.65)], 'zombie_head')
	event.recipes.create.pressing(['2x bone', Item.of('bone',3).withChance(0.65)], 'skeleton_skull')
	event.recipes.create.pressing(['3x architects_palette:withered_bone', Item.of('architects_palette:withered_bone',4).withChance(0.65)], 'wither_skeleton_skull')
	event.recipes.create.pressing(['ender_pearl', Item.of('ender_pearl',3).withChance(0.65)], 'supplementaries:enderman_head')
	event.recipes.create.pressing(['3x gunpowder', Item.of('savage_and_ravage:creeper_spores',2).withChance(0.65)], 'creeper_head')
	event.recipes.create.pressing(['2x gunpowder', Item.of('gunpowder',4).withChance(0.65)], 'caverns_and_chasms:deeper_head')
	event.recipes.create.pressing(['3x gunpowder', Item.of('gunpowder',4).withChance(0.65)], 'caverns_and_chasms:peeper_head')
	event.recipes.create.pressing(['4x amethyst_shard', Item.of('amethyst_shard',4).withChance(0.65)], 'caverns_and_chasms:mime_head')
	event.recipes.create.pressing(['2x porkchop', Item.of('bone',2).withChance(0.3)], 'piglinproliferation:piglin_head')
	event.recipes.create.pressing(['3x porkchop', Item.of('bone',2).withChance(0.3)], 'piglinproliferation:piglin_alchemist_head')
	event.recipes.create.pressing(['9x porkchop', Item.of('bone',4).withChance(0.3)], 'piglinproliferation:piglin_brute_head')
	event.recipes.create.pressing(['4x rotten_flesh', Item.of('bone',2).withChance(0.3)], 'piglinproliferation:zombified_piglin_head')

// Compacting
	event.recipes.create.compacting(['12x supplementaries:candy'], ['paper', 'create_confectionery:cocoa_butter', 'sugar'])
	event.recipes.create.compacting(['16x architects_palette:hazard_block'], ['4x black_concrete_powder', '4x yellow_concrete_powder', Fluid.of('minecraft:water',1000)])
	event.recipes.create.compacting(['kubejs:oat_bar'], ['kubejs:oats', 'neapolitan:banana', 'sugar'])
	event.recipes.create.compacting(['quark:slime_in_a_bucket'], ['bucket', 'slime_block', Fluid.of('minecraft:water',1000)])
	event.recipes.create.compacting([Item.of('minecraft:rabbit_hide'), Fluid.of('minecraft:water',250)], '#raspberry_flavoured:cacti')
	event.recipes.create.compacting(['paper'], '2x neapolitan:banana_frond')
	event.recipes.create.compacting(['8x chain'], ['3x alloyed:steel_nugget'])
	event.recipes.create.compacting(['4x chain'], ['3x iron_nugget'])
	event.recipes.create.compacting(['2x chain'], ['3x oreganized:lead_nugget'])
	event.recipes.create.compacting(['4x mynethersdelight:hoglin_sausage'], ['bone_meal', 'nethersdelight:hoglin_loin', Fluid.of('minecraft:water',250)])
	event.recipes.create.compacting(['4x kubejs:rubber'], [Fluid.of('kubejs:latex',250), 'create:zinc_ingot', 'gunpowder']).heated()
	event.recipes.create.compacting(['spelunkery:salt', Item.of('spelunkery:salt').withChance(0.25)], ['4x pointed_dripstone', Fluid.of('minecraft:water',500)]).heated().id('spelunkery:mixing/salt')
	event.recipes.create.compacting(['leather'], ['rotten_flesh', '2x spelunkery:salt']).heated()
	event.recipes.create.compacting(['2x farmersrespite:nether_wart_sourdough'], ['2x sob:cinder_dough', '#raspberry_flavoured:soul_blocks', 'crimson_fungus']).heated()
	event.recipes.create.compacting(['2x kubejs:sporedough'], ['2x culturaldelights:corn_dough', 'gunpowder', 'savage_and_ravage:creeper_spores']).heated()
	event.recipes.create.compacting(['2x neapolitan:strawberry_scones'], ['farmersdelight:wheat_dough', 'neapolitan:strawberries', 'sugar']).heated()
	event.recipes.create.compacting(['2x neapolitan:banana_bread'], ['2x farmersdelight:wheat_dough', 'neapolitan:banana', 'sugar']).heated()
	event.recipes.create.compacting(['4x autumnity:pancake'], [Fluid.of('create_central_kitchen:syrup',250), Fluid.of('kubejs:batter',250), 'cookscollection:lemon']).heated()
	event.recipes.create.compacting(['2x autumnity:pumpkin_bread'], ['2x farmersdelight:wheat_dough', '2x farmersdelight:pumpkin_slice', Fluid.of('create_central_kitchen:syrup',250)]).heated()
	event.recipes.create.compacting(['2x culturaldelights:empanada'], ['2x culturaldelights:corn_dough', '#culturaldelights:avocados', '#forge:crops/onion', Fluid.of('create_central_kitchen:tomato_sauce',250)]).heated()
	event.recipes.create.compacting(['cookscollection:chocolate_muffin'], ['neapolitan:chocolate_bar', Fluid.of('kubejs:batter',250)]).heated()
	event.recipes.create.compacting(['cookscollection:chocolate_muffin'], [Fluid.of('create:chocolate',250), Fluid.of('kubejs:batter',250)]).heated()
	event.recipes.create.compacting(['cookscollection:lemon_muffin'], ['cookscollection:lemon', 'poppy', Fluid.of('kubejs:batter',250)]).heated()
	event.recipes.create.compacting(['2x farmersdelight:pie_crust'], ['3x #farmersdelight:wheat_or_flour', 'sugar', 'spelunkery:salt'])
	event.recipes.create.compacting(['2x create_confectionery:cocoa_butter'], ['cocoa_beans', Fluid.of('minecraft:milk',250)])
	event.recipes.create.compacting([Fluid.of('kubejs:cooking_oil',250)], ['sunflower'])
	event.recipes.create.compacting([Fluid.of('kubejs:cooking_oil',250)], ['4x supplementaries:flax_seeds'])
	event.recipes.create.compacting(['farmersdelight:organic_compost'], ['dirt', 'rotten_flesh', 'farmersdelight:straw', '2x bone_meal'])
	event.recipes.create.compacting(['farmersdelight:organic_compost'], ['dirt', 'bone_meal', 'farmersdelight:tree_bark', '2x supplementaries:ash'])
	event.recipes.create.compacting(['farmersdelight:organic_compost'], ['dirt', 'farmersdelight:straw', 'bone_meal', '2x farmersdelight:tree_bark'])
	
	// Cakes
	event.recipes.create.compacting(['raspberry:cake'], [
		'2x sweet_berries', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:vanilla_cake'], [
		'2x neapolitan:dried_vanilla_pods', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:chocolate_cake'], [
		'2x neapolitan:chocolate_bar', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:chocolate_cake'], [
		Fluid.of('create:chocolate',500), Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:strawberry_cake'], [
		'2x neapolitan:strawberries', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:banana_cake'], [
		'2x neapolitan:banana', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:mint_cake'], [
		'2x neapolitan:mint_leaves', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:cherry_cake'], [
		'2x environmental:cherries', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:green_tea_cake'], [
		'2x farmersrespite:green_tea_leaves', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:green_tea_cake'], [
		Fluid.of('create_central_kitchen:green_tea',500), Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:yellow_tea_cake'], [
		'2x farmersrespite:yellow_tea_leaves', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:yellow_tea_cake'], [
		Fluid.of('create_central_kitchen:yellow_tea',500), Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:black_tea_cake'], [
		'2x farmersrespite:black_tea_leaves', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:black_tea_cake'], [
		Fluid.of('create_central_kitchen:black_tea',500), Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:coffee_cake'], [
		'2x farmersrespite:coffee_beans', Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:coffee_cake'], [
		Fluid.of('create_central_kitchen:coffee',500), Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['raspberry:magma_cake'], [
		'2x #mynethersdelight:hot_spice', '2x magma_cream', Fluid.of('minecraft:lava',500), Fluid.of('kubejs:batter',500)
	]).heated()
	event.recipes.create.compacting(['atmospheric:yucca_gateau'], [
		'atmospheric:yucca_fruit', Fluid.of('create_central_kitchen:aloe_gel',250), Fluid.of('kubejs:batter',500)
	]).heated()
	
	// Pies
	event.recipes.create.compacting(['kubejs:pumpkin_pie'], [
		'3x farmersdelight:pumpkin_slice', 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['farmersdelight:apple_pie'], [
		'3x #raspberry_flavoured:apples', 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['farmersdelight:chocolate_pie'], [
		'2x neapolitan:chocolate_bar', 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['farmersdelight:chocolate_pie'], [
		Fluid.of('create:chocolate',500), 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['farmersdelight:sweet_berry_cheesecake'], [
		'4x glow_berries', Fluid.of('minecraft:milk',250), 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['farmersrespite:rose_hip_pie'], [
		'3x farmersrespite:rose_hips', Fluid.of('create:honey',250), 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['kubejs:butterscotch_cinnamon_pie'], [
		'3x kubejs:cinnamon', 'create_confectionery:cocoa_butter', 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['kubejs:prickly_pear_pie'], [
		'3x #raspberry_flavoured:prickly_pears', 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['environmental:cherry_pie'], [
		'5x environmental:cherries', 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['environmental:truffle_pie'], [
		'environmental:truffle', '3x #raspberry_flavoured:edible_mushrooms', 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['brewinandchewin:quiche'], [
		'#brewinandchewin:bacon_or_mushroom', '#forge:crops/cabbage', Fluid.of('kubejs:flaxen_cheese',250), '#forge:eggs', 'farmersdelight:pie_crust'
	]).heated()
	event.recipes.create.compacting(['brewinandchewin:pizza'], [
		Fluid.of('kubejs:flaxen_cheese',750), Fluid.of('create_central_kitchen:tomato_sauce',250), 
		'#raspberry_flavoured:edible_mushrooms', 'farmersdelight:minced_beef', '3x farmersdelight:wheat_dough'
	]).heated()
	
	// Cookies
	event.recipes.create.compacting(['8x cookie'], ['farmersdelight:wheat_dough', 'neapolitan:chocolate_bar']).heated()
	event.recipes.create.compacting(['8x cookie'], ['farmersdelight:wheat_dough', Fluid.of('create:chocolate',250)]).heated()
	event.recipes.create.compacting(['8x farmersrespite:green_tea_cookie'], ['farmersdelight:wheat_dough', 'farmersrespite:green_tea_leaves']).heated()
	event.recipes.create.compacting(['8x farmersrespite:green_tea_cookie'], ['farmersdelight:wheat_dough', Fluid.of('create_central_kitchen:green_tea',250)]).heated()
	event.recipes.create.compacting(['8x farmersdelight:honey_cookie'], ['farmersdelight:wheat_dough', Fluid.of('create:honey',250)]).heated()
	event.recipes.create.compacting(['8x farmersdelight:sweet_berry_cookie'], ['farmersdelight:wheat_dough', 'sweet_berries']).heated()
	event.recipes.create.compacting(['8x kubejs:sugar_cookie'], ['farmersdelight:wheat_dough', 'sugar']).heated()
	event.recipes.create.compacting(['8x kubejs:oat_cookie'], ['farmersdelight:wheat_dough', 'kubejs:oats']).heated()
	event.recipes.create.compacting(['8x kubejs:cinnamon_cracker'], ['farmersdelight:wheat_dough', 'kubejs:cinnamon']).heated()
	event.recipes.create.compacting(['8x abnormals_delight:cherry_cookie'], ['farmersdelight:wheat_dough', 'environmental:cherries']).heated()
	event.recipes.create.compacting(['8x abnormals_delight:maple_cookie'], ['farmersdelight:wheat_dough', Fluid.of('create_central_kitchen:syrup',250)]).heated()

// Mixing
	noWhiteAllColours.forEach(colour => {
		event.recipes.create.mixing('8x minecraft:'+colour+'_wool', ['minecraft:'+colour+'_dye', '8x white_wool'])
		event.recipes.create.mixing('8x minecraft:'+colour+'_carpet', ['minecraft:'+colour+'_dye', '8x white_carpet'])
    })
	allColours.forEach(colour => {
		event.recipes.create.mixing('8x kubejs:'+colour+'_cloth_scrap_block', ['minecraft:'+colour+'_dye', '8x kubejs:cloth_scrap_block'])
		event.recipes.create.mixing('8x kubejs:'+colour+'_cloth_scrap_carpet', ['minecraft:'+colour+'_dye', '8x kubejs:cloth_scrap_carpet'])
		event.recipes.create.mixing('8x kubejs:'+colour+'_canvas_rug', ['minecraft:'+colour+'_dye', '8x farmersdelight:canvas_rug'])
    })
	event.recipes.create.mixing('2x additionaladditions:rose_gold_alloy', ['4x copper_ingot', '4x gold_ingot']).heated()
	event.recipes.create.mixing('3x alloyed:steel_ingot', ['3x iron_ingot', '3x oreganized:lead_nugget', 'blaze_powder']).heated().id('alloyed:mixing/steel_ingot')
	event.recipes.create.mixing('2x architects_palette:algal_blend', ['clay_ball', 'kelp'])
	event.recipes.create.mixing('4x architects_palette:algal_blend', ['2x clay_ball', 'aquaculture:algae'])
	event.recipes.create.mixing('culturaldelights:corn_dough', ['kubejs:corn_flour', Fluid.of('minecraft:water',250)])
	event.recipes.create.mixing(Fluid.of('create_central_kitchen:melon_juice',500), ['melon_slice', 'melon_slice', 'melon_slice', 'melon_slice', 'sugar']).heated().id('create_central_kitchen:mixing/melon_juice')
	event.recipes.create.mixing(Fluid.of('create_central_kitchen:apple_cider',500), ['3x #raspberry_flavoured:apples', 'kubejs:cinnamon']).heated().id('create_central_kitchen:mixing/apple_cider')
	event.recipes.create.mixing(Fluid.of('create_central_kitchen:hot_cocoa',500), ['cocoa_beans', 'create_confectionery:cocoa_butter', 'sugar']).heated().id('create_central_kitchen:mixing/hot_cocoa')
	event.recipes.create.mixing('8x architects_palette:wardstone_brick', ['4x spelunkery:rough_lazurite_block', '2x warped_fungus']).heated()
	event.recipes.create.mixing('4x architects_palette:entwine_rod', ['upgrade_aquatic:prismarine_rod', '2x additionaladditions:copper_patina']).heated()
	event.recipes.create.mixing('2x architects_palette:gilded_sandstone', ['2x sandstone', ['spelunkery:raw_gold_nugget', 'gold_nugget'], ['spelunkery:raw_gold_nugget', 'gold_nugget']])
	event.recipes.create.mixing('caverns_and_chasms:necromium_ingot', ['3x netherite_scrap', '3x oreganized:silver_ingot']).superheated().id('caverns_and_chasms:necromium_ingot')
	event.recipes.create.mixing('12x create:andesite_alloy', ['#raspberry_flavoured:sturdy_stone', 'create:zinc_ingot']).id('create:mixing/andesite_alloy_from_zinc')
	event.recipes.create.mixing('3x caverns_and_chasms:sanguine_plating', ['5x rotten_flesh', '2x oreganized:silver_ingot', '2x ghast_tear']).heated().id('caverns_and_chasms:sanguine_plating')
	event.recipes.create.mixing('12x fire_charge', ['gunpowder', '#minecraft:coals']).heated()
	event.recipes.create.mixing('8x kubejs:cobbled_exolite', ['4x #forge:cobblestone', '4x #minecraft:soul_fire_base_blocks', 'ender_pearl']).heated()
	event.recipes.create.mixing('3x ender_eye', ['3x ender_pearl', 'gold_ingot', 'fire_charge'])
	event.recipes.create.mixing('3x kubejs:spirited_exopearl', ['3x ender_pearl', 'quark:soul_bead'])
	event.recipes.create.mixing(Fluid.of('spelunkery:portal_fluid',250), ['3x create:powdered_obsidian', 'ender_pearl', Fluid.of('oreganized:molten_lead',250)]).superheated()
	event.recipes.create.mixing(Fluid.of('oreganized:molten_lead',125), [['kubejs:lead_ore', 'kubejs:nether_lead_ore']]).heated()
	event.recipes.create.mixing(Fluid.of('oreganized:molten_lead',250), ['oreganized:deepslate_lead_ore']).heated()
	event.recipes.create.mixing(Fluid.of('create_central_kitchen:purulent_tea',500), ['crimson_fungus', 'warped_fungus', 'autumnity:snail_goo']).heated().id('create_central_kitchen:mixing/purulent_tea')
	event.recipes.create.mixing(Fluid.of('kubejs:ink',250), ['black_dye', Fluid.of('minecraft:water',250)])
	event.recipes.create.mixing('8x alloyed:bronze_ingot', ['3x copper_ingot', '2x create:zinc_ingot', 'oreganized:lead_ingot']).heated().id('alloyed:mixing/bronze_ingot')
	event.recipes.create.mixing(Fluid.of('kubejs:batter',1000), ['2x #farmersdelight:wheat_or_flour', '#forge:eggs', 'sugar', Fluid.of('minecraft:milk',250)])
	
	event.recipes.create.mixing('2x slime_ball', ['autumnity:snail_goo', 'lime_dye', 'create:wheat_flour'])
	event.recipes.create.mixing('2x slime_ball', [Fluid.of('create:honey',250), 'lime_dye', 'create:wheat_flour'])
	event.recipes.create.mixing('2x slime_ball', [Fluid.of('create_central_kitchen:sap',250), 'lime_dye', 'create:wheat_flour'])
	event.recipes.create.mixing('2x slime_ball', [Fluid.of('create_central_kitchen:mulberry_jam',250), 'lime_dye', 'create:wheat_flour'])
	event.recipes.create.mixing('2x slime_ball', [Fluid.of('kubejs:latex',250), 'lime_dye', 'create:wheat_flour'])
	event.recipes.create.mixing('2x slime_ball', [Fluid.of('create_central_kitchen:aloe_gel',250), 'create:wheat_flour'])
	
// Milling
	event.recipes.create.milling(['2x farmersrespite:coffee_beans', 'minecraft:red_dye'], 'farmersrespite:coffee_berries').id('create_central_kitchen:milling/coffee_berries')
	event.recipes.create.milling(['2x kubejs:corn_flour', Item.of('kubejs:corn_flour',1).withChance(0.25), Item.of('farmersdelight:straw').withChance(0.2)], 'culturaldelights:corn_cob')
	event.recipes.create.milling('kubejs:corn_flour', 'culturaldelights:corn_kernels')
	event.recipes.create.milling(['kubejs:corn_flour', Item.of('minecraft:wheat_seeds').withChance(0.5), Item.of('farmersdelight:straw').withChance(0.35)], 'culturaldelights:wild_corn')
	event.recipes.create.milling(['culturaldelights:eggplant_seeds', 'light_gray_dye'], 'culturaldelights:wild_eggplants')
	event.recipes.create.milling(['farmersrespite:coffee_beans', 'black_dye'], 'farmersrespite:wild_coffee_bush')
	event.recipes.create.milling(['2x bone_meal', Item.of('minecraft:bone_meal',1).withChance(0.2)], 'ecologics:seashell')
	event.recipes.create.milling(['sugar', 'red_dye', Item.of('minecraft:beetroot_seeds').withChance(0.1)], 'beetroot').id('create:milling/beetroot')
	event.recipes.create.milling(['black_dye', Item.of('minecraft:black_dye').withChance(0.35)], 'spelunkery:inkcap_mushroom')
	event.recipes.create.milling(['white_dye', Item.of('minecraft:white_dye').withChance(0.35)], 'spelunkery:white_inkcap_mushroom')
	event.recipes.create.milling(['create:cinder_flour'], 'nether_brick')
	event.recipes.create.milling(['4x sculk_vein'], 'sculk')
	event.recipes.create.milling(['4x blue_dye', Item.of('blue_dye',2).withChance(0.5)], '#raspberry_flavoured:just_lapis_blocks').id('create:milling/lapis_lazuli')
	event.recipes.create.milling(['2x blue_dye', Item.of('spelunkery:raw_gold_nugget').withChance(0.75)], '#raspberry_flavoured:gilded_lazurite_blocks')
	event.recipes.create.milling(['flint', Item.of('twigs:pebble').withChance(0.5)], 'gravel').id('create:milling/gravel')
	event.recipes.create.milling(['black_dye', Item.of('supplementaries:ash').withChance(0.75)], 'charcoal').id('create:milling/charcoal')
	event.recipes.create.milling(['3x bone_meal', Item.of('minecraft:bone_meal',3).withChance(0.25), Item.of('minecraft:white_dye').withChance(0.25)], 'bone').id('create:milling/bone')
	event.recipes.create.milling(['3x bone_meal', Item.of('minecraft:bone_meal',3).withChance(0.25), Item.of('minecraft:white_dye').withChance(0.25)], 'aquaculture:fish_bones')
	event.recipes.create.milling(['3x bone_meal', Item.of('minecraft:bone_meal',4).withChance(0.25), Item.of('minecraft:black_dye').withChance(0.25)], 'architects_palette:withered_bone')
	event.recipes.create.milling([Item.of('minecraft:string').withChance(0.685)], 'kubejs:cloth_scrap')
	event.recipes.create.milling([Item.of('minecraft:bone_meal').withChance(0.2)], 'calcite').id('create:milling/calcite')
	event.recipes.create.milling(['kubejs:cobbled_exolite'], 'kubejs:exolite')
	event.recipes.create.milling(['end_stone'], 'kubejs:cobbled_exolite')
	event.recipes.create.milling(['2x redstone', Item.of('minecraft:redstone',2).withChance(0.375), Item.of('spelunkery:cinnabar').withChance(0.5)], 'spelunkery:cinnabar')
	event.recipes.create.milling(['gunpowder', Item.of('minecraft:gunpowder',1).withChance(0.5)], 'mynethersdelight:powder_cannon')
	event.recipes.create.milling(['prismarine_shard'], 'prismarine')
	event.recipes.create.milling(['prismarine_crystals', Item.of('minecraft:prismarine_crystals').withChance(0.5)], 'prismarine_shard')
	event.recipes.create.milling(['raspberry:deepslate_gravel'], 'cobbled_deepslate')
	event.recipes.create.milling(['raspberry:blackstone_gravel'], 'kubejs:cobbled_blackstone')
	event.recipes.create.milling(['2x flint', Item.of('minecraft:gray_dye').withChance(0.5)], 'raspberry:deepslate_gravel')
	event.recipes.create.milling(['2x flint', Item.of('minecraft:black_dye').withChance(0.5)], 'raspberry:blackstone_gravel')
	event.recipes.create.milling(['farmersdelight:rice', 'farmersdelight:straw', Item.of('farmersdelight:rice').withChance(0.5)], 'farmersdelight:rice_panicle')
	event.recipes.create.milling(['culturaldelights:eggplant_seeds', Item.of('minecraft:purple_dye').withChance(0.15)], '#culturaldelights:all_eggplants')
	event.recipes.create.milling(['5x iron_nugget', Item.of('minecraft:iron_nugget',5).withChance(0.5)], 'aquaculture:tin_can')
	event.recipes.create.milling(['spelunkery:salt'], 'spelunkery:rock_salt')
	event.recipes.create.milling(['spelunkery:rock_salt'], 'spelunkery:rock_salt_block')
	event.recipes.create.milling(['pointed_dripstone', Item.of('pointed_dripstone').withChance(0.25), 'clay_ball'], 'dripstone_block').id('create:milling/dripstone_block')
	event.recipes.create.milling(['3x farmersdelight:tree_bark'], '#raspberry_flavoured:regular_logs')
	event.recipes.create.milling(['2x farmersdelight:tree_bark', 'kubejs:cinnamon'], '#raspberry_flavoured:cinnamon_logs')
	event.recipes.create.milling(['2x pink_dye'], 'raspberry:pink_petals').id('raspberry:milling/pink_dye_from_pink_petals')
	event.recipes.create.milling(['yellow_dye', 'white_dye', Item.of('orange_dye').withChance(0.25)], 'raspberry:cheery_wildflowers').id('raspberry:milling/yellow_dye_from_wildflowers')
	event.recipes.create.milling(['purple_dye', 'red_dye', Item.of('blue_dye').withChance(0.5)], 'raspberry:moody_wildflowers').id('raspberry:milling/purple_dye_from_wildflowers')
	event.recipes.create.milling([Item.of('green_dye').withChance(0.5)], 'raspberry:clovers')
	event.recipes.create.milling(['2x stick', Item.of('spelunkery:salt').withChance(0.5)], 'spelunkery:tangle_roots')
	
	event.recipes.create.milling(['4x spelunkery:raw_copper_nugget', Item.of('spelunkery:raw_zinc_nugget', 4).withChance(0.75), Item.of('spelunkery:raw_iron_nugget', 3).withChance(0.5), Item.of('spelunkery:raw_gold_nugget', 2).withChance(0.25)], 'kubejs:dwarf_geode')
	event.recipes.create.milling(['4x spelunkery:raw_iron_nugget', Item.of('spelunkery:raw_lead_nugget', 4).withChance(0.75), Item.of('spelunkery:raw_magnetite_nugget', 2).withChance(0.25), Item.of('spelunkery:raw_silver_nugget', 2).withChance(0.15)], 'kubejs:deepslate_dwarf_geode')
	event.recipes.create.milling(['4x spelunkery:raw_lead_nugget', Item.of('spelunkery:raw_gold_nugget', 2).withChance(0.75), Item.of('spelunkery:raw_magnetite_nugget', 2).withChance(0.5), Item.of('quartz', 3).withChance(0.25)], 'kubejs:blackstone_dwarf_geode')

// Crushing
	event.recipes.create.crushing(['2x spelunkery:rough_cinnabar', Item.of('redstone').withChance(0.5), Item.of('twigs:pebble',4).withChance(0.12)], 'redstone_ore').id('create:crushing/redstone_ore')
	event.recipes.create.crushing(['create:crushed_raw_lead', Item.of('create:crushed_raw_lead').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'kubejs:lead_ore').id('create:crushing/lead_ore')
	event.recipes.create.crushing(['spelunkery:rough_diamond', Item.of('spelunkery:rough_diamond').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'diamond_ore').id('create:crushing/diamond_ore')
	event.recipes.create.crushing(['create:crushed_raw_copper', Item.of('create:crushed_raw_copper'), Item.of('twigs:pebble',4).withChance(0.12)], 'copper_ore').id('create:crushing/copper_ore')
	event.recipes.create.crushing(['create:crushed_raw_silver', Item.of('create:crushed_raw_silver'), Item.of('twigs:pebble',4).withChance(0.12)], 'oreganized:silver_ore').id('create:crushing/silver_ore')
	event.recipes.create.crushing(['coal', Item.of('coal').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'coal_ore').id('create:crushing/coal_ore')
	event.recipes.create.crushing(['create:crushed_raw_iron', Item.of('create:crushed_raw_iron').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'iron_ore').id('create:crushing/iron_ore')
	event.recipes.create.crushing(['create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'gold_ore').id('create:crushing/gold_ore')
	event.recipes.create.crushing(['create:crushed_raw_zinc', Item.of('create:crushed_raw_zinc').withChance(0.75), Item.of('twigs:pebble',4).withChance(0.12)], 'create:zinc_ore').id('create:crushing/zinc_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_copper', Item.of('create:crushed_raw_copper').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_copper_ore').id('create:crushing/deepslate_copper_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_iron', Item.of('create:crushed_raw_iron').withChance(0.25), Item.of('spelunkery:raw_magnetite_nugget',2).withChance(0.15), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_iron_ore').id('create:crushing/deepslate_iron_ore')
	event.recipes.create.crushing(['3x spelunkery:rough_cinnabar', Item.of('minecraft:redstone').withChance(0.5), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_redstone_ore').id('create:crushing/deepslate_redstone_ore')
	event.recipes.create.crushing(['2x spelunkery:rough_diamond', Item.of('spelunkery:rough_diamond').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_diamond_ore').id('create:crushing/deepslate_diamond_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_lead', Item.of('create:crushed_raw_lead').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'oreganized:deepslate_lead_ore').id('create:crushing/deepslate_lead_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_zinc', Item.of('create:crushed_raw_zinc').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'create:deepslate_zinc_ore').id('create:crushing/deepslate_zinc_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_gold', Item.of('create:crushed_raw_gold').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_gold_ore').id('create:crushing/deepslate_gold_ore')
	event.recipes.create.crushing(['2x create:crushed_raw_silver', Item.of('create:crushed_raw_silver').withChance(0.25), Item.of('cobbled_deepslate').withChance(0.12)], 'oreganized:deepslate_silver_ore').id('create:crushing/deepslate_silver_ore')
	event.recipes.create.crushing(['2x coal', Item.of('coal',2).withChance(0.5), Item.of('cobbled_deepslate').withChance(0.12)], 'deepslate_coal_ore').id('create:crushing/deepslate_coal_ore')
	event.recipes.create.crushing(['2x quartz', Item.of('quartz',2).withChance(0.12), Item.of('netherrack').withChance(0.12)], 'nether_quartz_ore').id('create:crushing/nether_quartz_ore')
	event.recipes.create.crushing(['18x spelunkery:raw_gold_nugget', Item.of('netherrack').withChance(0.125)], 'nether_gold_ore').id('create:crushing/nether_gold_ore')
	event.recipes.create.crushing(['18x spelunkery:raw_lead_nugget', Item.of('netherrack').withChance(0.125)], 'kubejs:nether_lead_ore')
	event.recipes.create.crushing(['9x create:crushed_raw_copper'], 'raw_copper_block').id('create:crushing/raw_copper_block')
	event.recipes.create.crushing(['9x create:crushed_raw_iron'], 'raw_iron_block').id('create:crushing/raw_iron_block')
	event.recipes.create.crushing(['9x create:crushed_raw_gold'], 'raw_gold_block').id('create:crushing/raw_gold_block')
	event.recipes.create.crushing(['9x create:crushed_raw_zinc'], 'create:raw_zinc_block').id('create:crushing/raw_zinc_block')
	event.recipes.create.crushing(['9x create:crushed_raw_silver'], 'oreganized:raw_silver_block').id('create:crushing/raw_silver_block')
	event.recipes.create.crushing(['9x create:crushed_raw_lead'], 'oreganized:raw_lead_block').id('create:crushing/raw_lead_block')
	event.recipes.create.crushing(['create:crushed_raw_copper'], 'raw_copper').id('create:crushing/raw_copper')
	event.recipes.create.crushing(['create:crushed_raw_iron'], 'raw_iron').id('create:crushing/raw_iron')
	event.recipes.create.crushing(['create:crushed_raw_gold'], 'raw_gold').id('create:crushing/raw_gold')
	event.recipes.create.crushing(['create:crushed_raw_zinc'], 'create:raw_zinc').id('create:crushing/raw_zinc')
	event.recipes.create.crushing(['create:crushed_raw_silver'], 'oreganized:raw_silver').id('create:crushing/raw_silver_ore')
	event.recipes.create.crushing(['create:crushed_raw_lead'], 'oreganized:raw_lead').id('create:crushing/raw_lead_ore')
	event.recipes.create.crushing(['gravel', Item.of('twigs:pebble',2).withChance(0.5)], 'cobblestone')
	event.recipes.create.crushing(['18x spelunkery:raw_gold_nugget', Item.of('kubejs:cobbled_blackstone').withChance(0.125)], 'gilded_blackstone')
	event.recipes.create.crushing(['spelunkery:raw_gold_nugget', Item.of('minecraft:sandstone').withChance(0.5)], 'architects_palette:gilded_sandstone')
	event.recipes.create.crushing(['spelunkery:raw_gold_nugget', Item.of('minecraft:sandstone').withChance(0.5)], 'architects_palette:gilded_sandstone_stairs')
	event.recipes.create.crushing(['spelunkery:raw_gold_nugget', Item.of('minecraft:sandstone').withChance(0.5)], 'architects_palette:gilded_sandstone_pillar')
	event.recipes.create.crushing(['spelunkery:raw_gold_nugget', Item.of('minecraft:sandstone').withChance(0.5)], 'architects_palette:chiseled_gilded_sandstone')
	event.recipes.create.crushing(['5x blue_dye', Item.of('blue_dye',2).withChance(0.8)], '#raspberry_flavoured:just_lapis_blocks')
	event.recipes.create.crushing(['3x blue_dye', Item.of('spelunkery:raw_gold_nugget',2).withChance(0.75)], '#raspberry_flavoured:gilded_lazurite_blocks')
	event.recipes.create.crushing(['sand', Item.of('minecraft:flint').withChance(0.15), Item.of('minecraft:clay_ball').withChance(0.05), Item.of('twigs:pebble').withChance(0.2)], 'gravel').id('create:crushing/gravel')
	event.recipes.create.crushing(['sand', Item.of('minecraft:gray_dye').withChance(0.5), Item.of('minecraft:flint',2).withChance(0.175), Item.of('minecraft:clay_ball').withChance(0.075)], 'raspberry:deepslate_gravel')
	event.recipes.create.crushing(['sand', Item.of('minecraft:black_dye').withChance(0.5), Item.of('minecraft:flint',2).withChance(0.175), Item.of('minecraft:clay_ball').withChance(0.075)], 'raspberry:blackstone_gravel')
	event.recipes.create.crushing(['3x redstone', Item.of('minecraft:redstone',2).withChance(0.375), Item.of('spelunkery:cinnabar').withChance(0.5)], 'spelunkery:cinnabar').id('spelunkery:crushing/polished_cinnabar')
	event.recipes.create.crushing(['prismarine_shard', Item.of('minecraft:prismarine_shard').withChance(0.5)], 'prismarine')
	event.recipes.create.crushing(['prismarine_crystals', Item.of('minecraft:prismarine_crystals',2).withChance(0.5)], 'prismarine_shard')
	event.recipes.create.crushing(['amethyst_shard', Item.of('minecraft:amethyst_shard').withChance(0.15)], 'amethyst_block')
	event.recipes.create.crushing([Item.of('minecraft:string').withChance(0.9)], 'kubejs:cloth_scrap')
	event.recipes.create.crushing([Item.of('minecraft:flint').withChance(0.35), Item.of('spelunkery:raw_copper_nugget').withChance(0.1), Item.of('spelunkery:raw_zinc_nugget').withChance(0.05), Item.of('spelunkery:raw_lead_nugget').withChance(0.025), Item.of('spelunkery:raw_iron_nugget').withChance(0.01), Item.of('spelunkery:raw_gold_nugget').withChance(0.005), Item.of('spelunkery:raw_silver_nugget').withChance(0.001)], '#raspberry_flavoured:tuff')
	event.recipes.create.crushing(['raspberry:deepslate_gravel', Item.of('minecraft:flint',2).withChance(0.5)], 'cobbled_deepslate')
	event.recipes.create.crushing(['raspberry:blackstone_gravel', Item.of('minecraft:flint',2).withChance(0.5)], 'kubejs:cobbled_blackstone')
	event.recipes.create.crushing(['7x kubejs:stardust'], 'nether_star').processingTime(1000)
	event.recipes.create.crushing(['2x spelunkery:salt'], 'spelunkery:rock_salt').id('spelunkery:crushing/salt')
	event.recipes.create.crushing(['3x farmersdelight:tree_bark', Item.of('farmersdelight:tree_bark',2).withChance(0.5)], '#raspberry_flavoured:regular_logs')
	event.recipes.create.crushing(['2x farmersdelight:tree_bark', Item.of('farmersdelight:tree_bark',2).withChance(0.5), 'kubejs:cinnamon'], '#raspberry_flavoured:cinnamon_logs')
	
	event.recipes.create.crushing(['red_dye', Item.of('spelunkery:raw_iron_nugget').withChance(0.4)], '#create:stone_types/crimsite').id('create:crushing/crimsite_recycling')
	event.recipes.create.crushing(['yellow_dye', Item.of('spelunkery:raw_gold_nugget').withChance(0.2)], '#create:stone_types/ochrum').id('create:crushing/ochrum_recycling')
	event.recipes.create.crushing(['light_blue_dye', Item.of('spelunkery:raw_zinc_nugget').withChance(0.8)], '#create:stone_types/asurine').id('create:crushing/asurine_recycling')
	event.recipes.create.crushing(['additionaladditions:copper_patina', 'spelunkery:raw_copper_nugget'], '#create:stone_types/veridium').id('create:crushing/veridium_recycling')
	event.recipes.create.crushing(['purple_dye', Item.of('spelunkery:raw_lead_nugget').withChance(0.6)], '#oreganized:stone_types/glance').id('oreganized:create/crushing/glance_recycling')
	
	event.recipes.create.crushing(['5x spelunkery:raw_copper_nugget', Item.of('spelunkery:raw_zinc_nugget', 5).withChance(0.75), Item.of('spelunkery:raw_iron_nugget', 4).withChance(0.5), Item.of('spelunkery:raw_gold_nugget', 3).withChance(0.25)], 'kubejs:dwarf_geode')
	event.recipes.create.crushing(['5x spelunkery:raw_iron_nugget', Item.of('spelunkery:raw_lead_nugget', 5).withChance(0.75), Item.of('spelunkery:raw_magnetite_nugget', 2).withChance(0.35), Item.of('spelunkery:raw_silver_nugget', 2).withChance(0.25)], 'kubejs:deepslate_dwarf_geode')
	event.recipes.create.crushing(['5x spelunkery:raw_lead_nugget', Item.of('spelunkery:raw_gold_nugget', 3).withChance(0.75), Item.of('spelunkery:raw_magnetite_nugget', 3).withChance(0.65), Item.of('quartz', 4).withChance(0.25)], 'kubejs:blackstone_dwarf_geode')
	
// Splashing
	event.recipes.create.splashing([Item.of('minecraft:flint').withChance(0.25), Item.of('spelunkery:raw_zinc_nugget').withChance(0.8)], 'gravel').id('create:splashing/gravel')
	event.recipes.create.splashing([Item.of('minecraft:flint',2).withChance(0.25), Item.of('spelunkery:raw_iron_nugget').withChance(0.4)], 'raspberry:deepslate_gravel')
	event.recipes.create.splashing([Item.of('minecraft:flint',2).withChance(0.25), Item.of('spelunkery:raw_lead_nugget').withChance(0.6)], 'raspberry:blackstone_gravel')
	event.recipes.create.splashing(['9x create:copper_nugget', Item.of('additionaladditions:copper_patina').withChance(0.875)], 'create:crushed_raw_copper').id('create:splashing/crushed_raw_copper')
	event.recipes.create.splashing(['9x iron_nugget', Item.of('spelunkery:rough_cinnabar_shard').withChance(0.5)], 'create:crushed_raw_iron').id('create:splashing/crushed_raw_iron')
	event.recipes.create.splashing(['9x oreganized:silver_nugget', Item.of('minecraft:glowstone_dust',5).withChance(0.75)], 'create:crushed_raw_silver').id('oreganized:create/splashing/crushed_silver_ore')
	event.recipes.create.splashing(['9x oreganized:lead_nugget', Item.of('minecraft:quartz').withChance(0.75)], 'create:crushed_raw_lead').id('oreganized:create/splashing/crushed_lead_ore')
	event.recipes.create.splashing('culturaldelights:corn_dough', 'kubejs:corn_flour')
	event.recipes.create.splashing('kubejs:cloth_scrap_block', '#raspberry_flavoured:cloth_blocks')
	event.recipes.create.splashing(['spelunkery:raw_copper_nugget', Item.of('spelunkery:raw_copper_nugget').withChance(0.25)], 'additionaladditions:patina_block')
	event.recipes.create.splashing('clay', 'sand').id('create:splashing/sand')
	event.recipes.create.splashing('clay', 'red_sand')
	event.recipes.create.splashing(['clay', Item.of('atmospheric:aloe_kernels').withChance(0.05)], 'atmospheric:arid_sand').id('create:compat/atmospheric/splashing/arid_sand')
	event.recipes.create.splashing(['clay', Item.of('atmospheric:aloe_kernels').withChance(0.05)], 'atmospheric:red_arid_sand')
	
// Haunting
	event.recipes.create.haunting(['architects_palette:twisted_log'], '#raspberry_flavoured:logs')
	event.recipes.create.haunting(['architects_palette:stripped_twisted_log'], '#raspberry_flavoured:stripped_logs')
	event.recipes.create.haunting(['architects_palette:twisted_wood'], '#raspberry_flavoured:wood')
	event.recipes.create.haunting(['architects_palette:stripped_twisted_wood'], '#raspberry_flavoured:stripped_wood')
	event.recipes.create.haunting(['kubejs:spoiled_carrot'], 'carrot')
	event.recipes.create.haunting(['crimson_fungus'], 'red_mushroom')
	event.recipes.create.haunting(['warped_fungus'], 'brown_mushroom')
	event.recipes.create.haunting(['kubejs:music_disc_dog'], 'music_disc_cat')
	event.recipes.create.haunting(['kubejs:cobbled_blackstone'], 'cobbled_deepslate')
	event.recipes.create.haunting(['soul_soil'], '#minecraft:dirt')
	event.recipes.create.haunting(['purpur_block'], 'quark:midori_block')
	event.recipes.create.haunting(['purpur_slab'], 'quark:midori_block_slab')
	event.recipes.create.haunting(['purpur_stairs'], 'quark:midori_block_stairs')
	event.recipes.create.haunting(['purpur_pillar'], 'quark:midori_pillar')
	event.recipes.create.haunting(['quark:purpur_chest'], 'atmospheric:kousa_chest')
	event.recipes.create.haunting(['quark:purpur_trapped_chest'], 'atmospheric:kousa_trapped_chest')
	event.recipes.create.haunting(['soul_sand'], '#minecraft:sand')
	event.recipes.create.haunting(['create:haunted_bell'], 'create:peculiar_bell')
	event.recipes.create.haunting(['farmersdelight:rotten_tomato'], 'farmersdelight:tomato')
	event.recipes.create.haunting(['nether_brick'], 'brick')
	event.recipes.create.haunting(['kubejs:music_disc_droopy2'], 'kubejs:music_disc_droopy1')
	event.recipes.create.haunting(['poisonous_potato'], 'potato')
	event.recipes.create.haunting(['mynethersdelight:zoglin_trophy'], 'mynethersdelight:hoglin_trophy')
	event.recipes.create.haunting(['twigs:petrified_lichen'], 'glow_lichen')
	event.recipes.create.haunting(['kubejs:music_disc_savour'], 'kubejs:music_disc_origin')
	event.recipes.create.haunting(['architects_palette:craterstone'], 'cobblestone')
	event.recipes.create.haunting(['architects_palette:moonshale'], 'stone')
	event.recipes.create.haunting(['architects_palette:moonshale_bricks'], 'stone_bricks')
	event.recipes.create.haunting(['architects_palette:hadaline'], 'architects_palette:abyssaline')
	event.recipes.create.haunting(['architects_palette:hadaline_pillar'], 'architects_palette:abyssaline_pillar')
	event.recipes.create.haunting(['architects_palette:hadaline_tiles'], 'architects_palette:abyssaline_tiles')
	event.recipes.create.haunting(['architects_palette:hadaline_plating'], 'architects_palette:abyssaline_plating')
	event.recipes.create.haunting(['architects_palette:hadaline_lamp'], 'architects_palette:abyssaline_lamp')
	event.recipes.create.haunting(['architects_palette:hadaline_bricks'], 'architects_palette:abyssaline_bricks')
	event.recipes.create.haunting(['architects_palette:chiseled_hadaline_bricks'], 'architects_palette:chiseled_abyssaline_bricks')
	event.recipes.create.haunting(['architects_palette:moonstone'], 'architects_palette:sunstone')
	event.recipes.create.haunting(['architects_palette:unobtanium'], '#raspberry_flavoured:expensive_ingots')
	event.recipes.create.haunting(['architects_palette:twisted_sapling'], '#raspberry_flavoured:glowing_mushrooms')
	event.recipes.create.haunting(['architects_palette:entrails'], 'architects_palette:rotten_flesh_block')
	event.recipes.create.haunting(['architects_palette:onyx'], 'granite')
	event.recipes.create.haunting(['architects_palette:nebulite'], 'diorite')
	event.recipes.create.haunting(['architects_palette:esoterrack'], 'andesite')
	
// Filling
	event.recipes.create.filling('map', [Fluid.of('kubejs:ink',10), 'paper'])
	event.recipes.create.filling('spelunkery:portal_fluid_bottle', [Fluid.of('spelunkery:portal_fluid',250), 'glass_bottle'])
	event.recipes.create.filling('crying_obsidian', [Fluid.of('spelunkery:portal_fluid',250), 'obsidian'])
	event.recipes.create.filling('kubejs:latex_bottle', [Fluid.of('kubejs:latex',250), 'minecraft:glass_bottle'])
	event.recipes.create.filling('kubejs:latex_jungle_log', [Fluid.of('kubejs:latex',250), 'minecraft:stripped_jungle_log'])
	event.recipes.create.filling('kubejs:latex_jungle_wood', [Fluid.of('kubejs:latex',250), 'minecraft:stripped_jungle_wood'])
	event.recipes.create.filling('kubejs:latex_rosewood_log', [Fluid.of('kubejs:latex',250), 'atmospheric:stripped_rosewood_log'])
	event.recipes.create.filling('kubejs:latex_rosewood', [Fluid.of('kubejs:latex',250), 'atmospheric:stripped_rosewood'])
	event.recipes.create.filling('kubejs:batter', [Fluid.of('kubejs:batter',250), 'bowl'])
	event.recipes.create.filling('cookscollection:cooking_oil', [Fluid.of('kubejs:cooking_oil',250), 'glass_bottle'])
	
// Emptying
	event.recipes.create.emptying([Fluid.of('kubejs:ink',1000), 'minecraft:glass_bottle'], 'supplementaries:antique_ink')
	event.recipes.create.emptying([Fluid.of('kubejs:ink',250)], 'ink_sac')
	event.recipes.create.emptying([Fluid.of('spelunkery:portal_fluid',250), 'minecraft:obsidian'], 'crying_obsidian')
	event.recipes.create.emptying([Fluid.of('spelunkery:portal_fluid',250), 'minecraft:glass_bottle'], 'spelunkery:portal_fluid_bottle')
	event.recipes.create.emptying([Fluid.of('spelunkery:portal_fluid',1000), 'minecraft:bucket'], 'spelunkery:portal_fluid_bucket')
	event.recipes.create.emptying([Fluid.of('kubejs:latex',250), 'minecraft:glass_bottle'], 'kubejs:latex_bottle')
	event.recipes.create.emptying([Fluid.of('kubejs:latex',250), 'minecraft:stripped_jungle_log'], 'kubejs:latex_jungle_log')
	event.recipes.create.emptying([Fluid.of('kubejs:latex',250), 'minecraft:stripped_jungle_wood'], 'kubejs:latex_jungle_wood')
	event.recipes.create.emptying([Fluid.of('kubejs:latex',250), 'atmospheric:stripped_rosewood_log'], 'kubejs:latex_rosewood_log')
	event.recipes.create.emptying([Fluid.of('kubejs:latex',250), 'atmospheric:stripped_rosewood'], 'kubejs:latex_rosewood')
	event.recipes.create.emptying([Fluid.of('minecraft:milk',250), 'minecraft:glass_bottle'], 'neapolitan:milk_bottle').id('create:emptying/compat/neapolitan/milk_bottle')
	event.recipes.create.emptying([Fluid.of('minecraft:milk',250), 'ecologics:coconut_husk'], 'ecologics:coconut_slice')
	event.recipes.create.emptying([Fluid.of('kubejs:batter',250), 'bowl'], 'kubejs:batter')
	event.recipes.create.emptying([Fluid.of('kubejs:cooking_oil',250), 'glass_bottle'], 'cookscollection:cooking_oil')
	
// Deploying
	event.recipes.create.deploying('2x farmersdelight:cod_roll', ['farmersdelight:cooked_rice', '#raspberry_flavoured:white_fish'])
	event.recipes.create.deploying('2x farmersdelight:salmon_roll', ['farmersdelight:cooked_rice', '#raspberry_flavoured:red_fish'])
	event.recipes.create.deploying('2x culturaldelights:pufferfish_roll', ['farmersdelight:cooked_rice', '#raspberry_flavoured:exotic_fish'])
	
// Sequenced assembly
	event.recipes.createSequencedAssembly([
		Item.of('create:redstone_link',2),
	],'create:brass_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','minecraft:echo_shard']),
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','create:electron_tube']),
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','minecraft:redstone_torch']),
		event.recipes.createDeploying('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link','create:brass_sheet']),
		event.recipes.createPressing('kubejs:incomplete_redstone_link',['kubejs:incomplete_redstone_link'])
	]).transitionalItem('kubejs:incomplete_redstone_link').loops(1).id('kubejs:redstone_link_assembly')
	
	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:beef_burrito'),
	],'culturaldelights:tortilla',[
		event.recipes.createDeploying('kubejs:incomplete_beef_burrito',['kubejs:incomplete_beef_burrito','#forge:cooked_beef']),
		event.recipes.createDeploying('kubejs:incomplete_beef_burrito',['kubejs:incomplete_beef_burrito','#culturaldelights:avocados']),
		event.recipes.createDeploying('kubejs:incomplete_beef_burrito',['kubejs:incomplete_beef_burrito','farmersdelight:cooked_rice'])
	]).transitionalItem('kubejs:incomplete_beef_burrito').loops(1).id('kubejs:beef_burrito_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:chicken_taco'),
	],'culturaldelights:tortilla',[
		event.recipes.createDeploying('kubejs:incomplete_chicken_taco',['kubejs:incomplete_chicken_taco','#forge:cooked_chicken']),
		event.recipes.createDeploying('kubejs:incomplete_chicken_taco',['kubejs:incomplete_chicken_taco','#forge:crops/cabbage']),
		event.recipes.createDeploying('kubejs:incomplete_chicken_taco',['kubejs:incomplete_chicken_taco','#forge:crops/onion'])
	]).transitionalItem('kubejs:incomplete_chicken_taco').loops(1).id('kubejs:chicken_taco_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:eggplant_burger'),
	],'#forge:bread/wheat',[
		event.recipes.createDeploying('kubejs:incomplete_eggplant_burger',['kubejs:incomplete_eggplant_burger','#culturaldelights:smoked_regular_eggplants']),
		event.recipes.createDeploying('kubejs:incomplete_eggplant_burger',['kubejs:incomplete_eggplant_burger','#forge:salad_ingredients']),
		event.recipes.createDeploying('kubejs:incomplete_eggplant_burger',['kubejs:incomplete_eggplant_burger','farmersdelight:tomato'])
	]).transitionalItem('kubejs:incomplete_eggplant_burger').loops(1).id('kubejs:eggplant_burger_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:fish_taco'),
	],'culturaldelights:tortilla',[
		event.recipes.createDeploying('kubejs:incomplete_fish_taco',['kubejs:incomplete_fish_taco','#forge:cooked_fishes']),
		event.recipes.createDeploying('kubejs:incomplete_fish_taco',['kubejs:incomplete_fish_taco','#forge:crops/cabbage']),
		event.recipes.createDeploying('kubejs:incomplete_fish_taco',['kubejs:incomplete_fish_taco','farmersdelight:tomato'])
	]).transitionalItem('kubejs:incomplete_fish_taco').loops(1).id('kubejs:fish_taco_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:pork_wrap'),
	],'culturaldelights:tortilla',[
		event.recipes.createDeploying('kubejs:incomplete_pork_wrap',['kubejs:incomplete_pork_wrap','#forge:cooked_pork']),
		event.recipes.createDeploying('kubejs:incomplete_pork_wrap',['kubejs:incomplete_pork_wrap','#forge:crops/cabbage']),
		event.recipes.createDeploying('kubejs:incomplete_pork_wrap',['kubejs:incomplete_pork_wrap','#raspberry_flavoured:apples'])
	]).transitionalItem('kubejs:incomplete_pork_wrap').loops(1).id('kubejs:pork_wrap_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:mutton_sandwich'),
	],'#forge:bread/wheat',[
		event.recipes.createDeploying('kubejs:incomplete_mutton_sandwich',['kubejs:incomplete_mutton_sandwich','#forge:cooked_mutton']),
		event.recipes.createDeploying('kubejs:incomplete_mutton_sandwich',['kubejs:incomplete_mutton_sandwich','minecraft:beetroot']),
		event.recipes.createDeploying('kubejs:incomplete_mutton_sandwich',['kubejs:incomplete_mutton_sandwich','incubation:fried_egg'])
	]).transitionalItem('kubejs:incomplete_mutton_sandwich').loops(1).id('kubejs:mutton_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('brewinandchewin:ham_and_cheese_sandwich', 2),
	],'#forge:bread/wheat',[
		event.recipes.createDeploying('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich','farmersdelight:smoked_ham']),
		event.recipes.createFilling('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich',Fluid.of('kubejs:flaxen_cheese',250)]),
		event.recipes.createDeploying('kubejs:incomplete_ham_and_cheese_sandwich',['kubejs:incomplete_ham_and_cheese_sandwich','#forge:bread/wheat'])
	]).transitionalItem('kubejs:incomplete_ham_and_cheese_sandwich').loops(1).id('kubejs:ham_and_cheese_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersdelight:stuffed_potato'),
	],'minecraft:baked_potato',[
		event.recipes.createDeploying('kubejs:incomplete_stuffed_potato',['kubejs:incomplete_stuffed_potato','#forge:cooked_beef']),
		event.recipes.createFilling('kubejs:incomplete_stuffed_potato',['kubejs:incomplete_stuffed_potato',Fluid.of('minecraft:milk',250)])
	]).transitionalItem('kubejs:incomplete_stuffed_potato').loops(1).id('kubejs:stuffed_potato_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersdelight:melon_popsicle'),
	],'minecraft:stick',[
		event.recipes.createDeploying('kubejs:incomplete_melon_popsicle',['kubejs:incomplete_melon_popsicle','minecraft:melon_slice']),
		event.recipes.createDeploying('kubejs:incomplete_melon_popsicle',['kubejs:incomplete_melon_popsicle','neapolitan:ice_cubes'])
	]).transitionalItem('kubejs:incomplete_melon_popsicle').loops(1).id('kubejs:melon_popsicle_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('farmersdelight:barbecue_stick'),
	],'minecraft:stick',[
		event.recipes.createDeploying('kubejs:incomplete_meat_skewer',['kubejs:incomplete_meat_skewer','#farmersdelight:barbecue_meats']),
		event.recipes.createDeploying('kubejs:incomplete_meat_skewer',['kubejs:incomplete_meat_skewer','#forge:crops/onion']),
		event.recipes.createDeploying('kubejs:incomplete_meat_skewer',['kubejs:incomplete_meat_skewer','#forge:crops/tomato'])
	]).transitionalItem('kubejs:incomplete_meat_skewer').loops(1).id('kubejs:meat_skewer_assembly')
	
	event.recipes.createSequencedAssembly([
		Item.of('miners_delight:improvised_barbecue_stick', 2),
	],'minecraft:stick',[
		event.recipes.createDeploying('kubejs:incomplete_deepskewer',['kubejs:incomplete_deepskewer','miners_delight:baked_tentacles']),
		event.recipes.createDeploying('kubejs:incomplete_deepskewer',['kubejs:incomplete_deepskewer','miners_delight:smoked_bat_wing']),
		event.recipes.createDeploying('kubejs:incomplete_deepskewer',['kubejs:incomplete_deepskewer','minecraft:stick']),
		event.recipes.createDeploying('kubejs:incomplete_deepskewer',['kubejs:incomplete_deepskewer','miners_delight:smoked_bat_wing']),
		event.recipes.createDeploying('kubejs:incomplete_deepskewer',['kubejs:incomplete_deepskewer','minecraft:brown_mushroom'])
	]).transitionalItem('kubejs:incomplete_deepskewer').loops(1).id('kubejs:deepskewer_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:egg_roll', 4),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_egg_roll',['kubejs:incomplete_egg_roll','incubation:fried_egg']),
		event.recipes.createDeploying('kubejs:incomplete_egg_roll',['kubejs:incomplete_egg_roll','incubation:fried_egg']),
		event.recipes.createDeploying('kubejs:incomplete_egg_roll',['kubejs:incomplete_egg_roll','incubation:fried_egg']),
		event.recipes.createDeploying('kubejs:incomplete_egg_roll',['kubejs:incomplete_egg_roll','minecraft:dried_kelp'])
	]).transitionalItem('kubejs:incomplete_egg_roll').loops(1).id('kubejs:egg_roll_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:tropical_roll', 2),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_tropical_roll',['kubejs:incomplete_tropical_roll','#raspberry_flavoured:aquarium_fish']),
		event.recipes.createDeploying('kubejs:incomplete_tropical_roll',['kubejs:incomplete_tropical_roll','#raspberry_flavoured:aquarium_fish']),
		event.recipes.createDeploying('kubejs:incomplete_tropical_roll',['kubejs:incomplete_tropical_roll','minecraft:dried_kelp'])
	]).transitionalItem('kubejs:incomplete_tropical_roll').loops(1).id('kubejs:tropical_roll_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:calamari_roll', 2),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_calamari_roll',['kubejs:incomplete_calamari_roll','miners_delight:tentacles']),
		event.recipes.createDeploying('kubejs:incomplete_calamari_roll',['kubejs:incomplete_calamari_roll','miners_delight:tentacles']),
		event.recipes.createDeploying('kubejs:incomplete_calamari_roll',['kubejs:incomplete_calamari_roll','minecraft:dried_kelp'])
	]).transitionalItem('kubejs:incomplete_calamari_roll').loops(1).id('kubejs:calamari_roll_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('culturaldelights:rice_ball', 5),
	],'farmersdelight:cooked_rice',[
		event.recipes.createDeploying('kubejs:incomplete_rice_ball',['kubejs:incomplete_rice_ball','minecraft:dried_kelp']),
		event.recipes.createDeploying('kubejs:incomplete_rice_ball',['kubejs:incomplete_rice_ball','minecraft:sweet_berries']),
		event.recipes.createDeploying('kubejs:incomplete_rice_ball',['kubejs:incomplete_rice_ball','#raspberry_flavoured:raw_fish']),
		event.recipes.createDeploying('kubejs:incomplete_rice_ball',['kubejs:incomplete_rice_ball','spelunkery:salt'])
	]).transitionalItem('kubejs:incomplete_rice_ball').loops(1).id('kubejs:rice_ball_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:kipper_sandwich'),
	],'#forge:bread/wheat',[
		event.recipes.createDeploying('kubejs:incomplete_kipper_sandwich',['kubejs:incomplete_kipper_sandwich','brewinandchewin:kippers']),
		event.recipes.createDeploying('kubejs:incomplete_kipper_sandwich',['kubejs:incomplete_kipper_sandwich','#culturaldelights:avocados']),
		event.recipes.createDeploying('kubejs:incomplete_kipper_sandwich',['kubejs:incomplete_kipper_sandwich','incubation:fried_egg'])
	]).transitionalItem('kubejs:incomplete_kipper_sandwich').loops(1).id('kubejs:kipper_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:smore'),
	],'kubejs:cinnamon_cracker',[
		event.recipes.createDeploying('kubejs:incomplete_smore',['kubejs:incomplete_smore','create_confectionery:marshmallow']),
		event.recipes.createDeploying('kubejs:incomplete_smore',['kubejs:incomplete_smore','kubejs:cinnamon_cracker'])
	]).transitionalItem('kubejs:incomplete_smore').loops(1).id('kubejs:smore_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:neapolitan_ice_cream_sandwich'),
	],'kubejs:cinnamon_cracker',[
		event.recipes.createFilling('kubejs:incomplete_neapolitan_ice_cream_sandwich',['kubejs:incomplete_neapolitan_ice_cream_sandwich',Fluid.of('create_central_kitchen:vanilla_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_neapolitan_ice_cream_sandwich',['kubejs:incomplete_neapolitan_ice_cream_sandwich',Fluid.of('create_central_kitchen:chocolate_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_neapolitan_ice_cream_sandwich',['kubejs:incomplete_neapolitan_ice_cream_sandwich',Fluid.of('create_central_kitchen:strawberry_ice_cream',250)]),
		event.recipes.createDeploying('kubejs:incomplete_neapolitan_ice_cream_sandwich',['kubejs:incomplete_neapolitan_ice_cream_sandwich','kubejs:cinnamon_cracker'])
	]).transitionalItem('kubejs:incomplete_neapolitan_ice_cream_sandwich').loops(1).id('kubejs:neapolitan_ice_cream_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('kubejs:respiteful_ice_cream_sandwich'),
	],'kubejs:cinnamon_cracker',[
		event.recipes.createFilling('kubejs:incomplete_respiteful_ice_cream_sandwich',['kubejs:incomplete_respiteful_ice_cream_sandwich',Fluid.of('create_central_kitchen:green_tea_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_respiteful_ice_cream_sandwich',['kubejs:incomplete_respiteful_ice_cream_sandwich',Fluid.of('create_central_kitchen:black_tea_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_respiteful_ice_cream_sandwich',['kubejs:incomplete_respiteful_ice_cream_sandwich',Fluid.of('create_central_kitchen:yellow_tea_ice_cream',250)]),
		event.recipes.createDeploying('kubejs:incomplete_respiteful_ice_cream_sandwich',['kubejs:incomplete_respiteful_ice_cream_sandwich','kubejs:cinnamon_cracker'])
	]).transitionalItem('kubejs:incomplete_respiteful_ice_cream_sandwich').loops(1).id('kubejs:respiteful_ice_cream_sandwich_assembly')
	
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:prismatic_ice_cream_sandwich'),
	],'kubejs:cinnamon_cracker',[
		event.recipes.createFilling('kubejs:incomplete_prismatic_ice_cream_sandwich',['kubejs:incomplete_prismatic_ice_cream_sandwich',Fluid.of('create_central_kitchen:banana_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_prismatic_ice_cream_sandwich',['kubejs:incomplete_prismatic_ice_cream_sandwich',Fluid.of('create_central_kitchen:adzuki_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_prismatic_ice_cream_sandwich',['kubejs:incomplete_prismatic_ice_cream_sandwich',Fluid.of('create_central_kitchen:mint_ice_cream',250)]),
		event.recipes.createDeploying('kubejs:incomplete_prismatic_ice_cream_sandwich',['kubejs:incomplete_prismatic_ice_cream_sandwich','kubejs:cinnamon_cracker'])
	]).transitionalItem('kubejs:incomplete_prismatic_ice_cream_sandwich').loops(1).id('kubejs:prismatic_ice_cream_sandwich_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('respiteful:respiteful_ice_cream'),
	],'respiteful:green_tea_ice_cream',[
		event.recipes.createFilling('kubejs:incomplete_respiteful_ice_cream',['kubejs:incomplete_respiteful_ice_cream',Fluid.of('create_central_kitchen:black_tea_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_respiteful_ice_cream',['kubejs:incomplete_respiteful_ice_cream',Fluid.of('create_central_kitchen:yellow_tea_ice_cream',250)])
	]).transitionalItem('kubejs:incomplete_respiteful_ice_cream').loops(1).id('kubejs:respiteful_ice_cream_assembly')
	
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:prismatic_ice_cream'),
	],'neapolitan:banana_ice_cream',[
		event.recipes.createFilling('kubejs:incomplete_prismatic_ice_cream',['kubejs:incomplete_prismatic_ice_cream',Fluid.of('create_central_kitchen:adzuki_ice_cream',250)]),
		event.recipes.createFilling('kubejs:incomplete_prismatic_ice_cream',['kubejs:incomplete_prismatic_ice_cream',Fluid.of('create_central_kitchen:mint_ice_cream',250)])
	]).transitionalItem('kubejs:incomplete_prismatic_ice_cream').loops(1).id('kubejs:prismatic_ice_cream_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('create_confectionery:marshmallow_on_a_stick'),
	],'minecraft:stick',[
		event.recipes.createDeploying('kubejs:incomplete_marshmallow_stick',['kubejs:incomplete_marshmallow_stick','create_confectionery:marshmallow']),
		event.recipes.createDeploying('kubejs:incomplete_marshmallow_stick',['kubejs:incomplete_marshmallow_stick','create_confectionery:marshmallow'])
	]).transitionalItem('kubejs:incomplete_marshmallow_stick').loops(1).id('kubejs:marshmallow_stick_assembly')

	event.recipes.createSequencedAssembly([
		Item.of('create:blaze_cake'),
	],'create:cinder_flour',[
		event.recipes.createDeploying('kubejs:incomplete_blaze_tart',['kubejs:incomplete_blaze_tart','minecraft:sugar']),
		event.recipes.createDeploying('kubejs:incomplete_blaze_tart',['kubejs:incomplete_blaze_tart','#forge:eggs']),
		event.recipes.createDeploying('kubejs:incomplete_blaze_tart',['kubejs:incomplete_blaze_tart','create:cinder_flour']),
		event.recipes.createFilling('kubejs:incomplete_blaze_tart',['kubejs:incomplete_blaze_tart',Fluid.of('minecraft:lava',250)])
	]).transitionalItem('kubejs:incomplete_blaze_tart').loops(1).id('create:filling/blaze_cake')

	event.recipes.createSequencedAssembly([
		Item.of('create:track', 4),
	],'create:andesite_alloy',[
		event.recipes.createDeploying('create:incomplete_track',['create:incomplete_track',['iron_nugget', 'create:zinc_nugget', 'oreganized:lead_nugget']]),
		event.recipes.createDeploying('create:incomplete_track',['create:incomplete_track',['iron_nugget', 'create:zinc_nugget', 'oreganized:lead_nugget']]),
		event.recipes.createDeploying('create:incomplete_track',['create:incomplete_track','create:andesite_alloy'])
	]).transitionalItem('create:incomplete_track').loops(1).id('create:sequenced_assembly/track')

	event.recipes.createSequencedAssembly([
		Item.of('endergetic:bolloom_balloon', 2),
	],'string',[
		event.recipes.createFilling('kubejs:incomplete_balloon',['kubejs:incomplete_balloon',Fluid.of('kubejs:latex',250)]),
		event.recipes.createPressing('kubejs:incomplete_balloon',['kubejs:incomplete_balloon']),
		event.recipes.createPressing('kubejs:incomplete_balloon',['kubejs:incomplete_balloon'])
	]).transitionalItem('kubejs:incomplete_balloon').loops(1).id('endergetic:bolloom_balloon')
	
// Mechanical crafting
	event.recipes.create.mechanical_crafting(
	'create:schematicannon', [
	'EAE',
	'EAE',
	'BDB',
	'CCC'
	], {
	A: '#forge:storage_blocks/steel', B: '#minecraft:logs', C: 'smooth_stone', D: 'dispenser', E: '#forge:ingots/steel'
	}).id('create:crafting/schematics/schematicannon')
	
	event.recipes.create.mechanical_crafting(
	'create:extendo_grip', [
	' B ',
	' C ',
	'DDD',
	' A '
	], {
	A: 'additionaladditions:rose_gold_alloy', B: 'create:precision_mechanism', C: 'create:cogwheel', D: 'stick'
	}).id('create:mechanical_crafting/extendo_grip')
	event.recipes.create.mechanical_crafting(
	'quark:echorang', [
	'CBBA',
	'   B',
	'   B',
	'   C'
	], {
	A: 'kubejs:spirited_exopearl', B: 'create:sturdy_sheet', C: 'echo_shard'
	}).id('quark:tools/smithing/echorang_smithing')
	event.recipes.create.mechanical_crafting(
	'spelunkery:item_magnet', [
	'B C',
	'A A',
	'A A',
	'AAA'
	], {
	A: 'spelunkery:magnetite_chunk', B: 'spelunkery:cinnabar', C: 'oreganized:lead_ingot'
	}).id('spelunkery:item_magnet')
	event.recipes.create.mechanical_crafting(
	'trident', [
	'  AA',
	'  BA',
	' B  ',
	'B   '
	], {
	A: 'upgrade_aquatic:thrasher_tooth', B: 'upgrade_aquatic:prismarine_rod'
	}).id('upgrade_aquatic:trident')
	
	
	event.recipes.create.mechanical_crafting(
	'savage_and_ravage:griefer_helmet', [
	'AAA',
	'A A'
	], {
	A: 'savage_and_ravage:blast_proof_plating'
	}).id('savage_and_ravage:griefer_helmet')
	event.recipes.create.mechanical_crafting(
	'savage_and_ravage:griefer_chestplate', [
	'A A',
	'AAA',
	'AAA'
	], {
	A: 'savage_and_ravage:blast_proof_plating'
	}).id('savage_and_ravage:griefer_chestplate')
	event.recipes.create.mechanical_crafting(
	'savage_and_ravage:griefer_leggings', [
	'AAA',
	'A A',
	'A A'
	], {
	A: 'savage_and_ravage:blast_proof_plating'
	}).id('savage_and_ravage:griefer_leggings')
	event.recipes.create.mechanical_crafting(
	'savage_and_ravage:griefer_boots', [
	'A A',
	'A A'
	], {
	A: 'savage_and_ravage:blast_proof_plating'
	}).id('savage_and_ravage:griefer_boots')	
	event.recipes.create.mechanical_crafting(
	'caverns_and_chasms:sanguine_helmet', [
	'AAA',
	'A A'
	], {
	A: 'caverns_and_chasms:sanguine_plating'
	}).id('caverns_and_chasms:sanguine_helmet')
	event.recipes.create.mechanical_crafting(
	'caverns_and_chasms:sanguine_chestplate', [
	'A A',
	'AAA',
	'AAA'
	], {
	A: 'caverns_and_chasms:sanguine_plating'
	}).id('caverns_and_chasms:sanguine_chestplate')
	event.recipes.create.mechanical_crafting(
	'caverns_and_chasms:sanguine_leggings', [
	'AAA',
	'A A',
	'A A'
	], {
	A: 'caverns_and_chasms:sanguine_plating'
	}).id('caverns_and_chasms:sanguine_leggings')
	event.recipes.create.mechanical_crafting(
	'caverns_and_chasms:sanguine_boots', [
	'A A',
	'A A'
	], {
	A: 'caverns_and_chasms:sanguine_plating'
	}).id('caverns_and_chasms:sanguine_boots')
	event.recipes.create.mechanical_crafting(
	'diamond_helmet', [
	'AAA',
	'A A'
	], {
	A: 'diamond'
	}).id('minecraft:diamond_helmet')
	event.recipes.create.mechanical_crafting(
	'diamond_chestplate', [
	'A A',
	'AAA',
	'AAA'
	], {
	A: 'diamond'
	}).id('minecraft:diamond_chestplate')
	event.recipes.create.mechanical_crafting(
	'diamond_leggings', [
	'AAA',
	'A A',
	'A A'
	], {
	A: 'diamond'
	}).id('minecraft:diamond_leggings')
	event.recipes.create.mechanical_crafting(
	'diamond_boots', [
	'A A',
	'A A'
	], {
	A: 'diamond'
	}).id('minecraft:diamond_boots')
	event.recipes.create.mechanical_crafting(
	'diamond_horse_armor', [
	'  A',
	'ABA',
	'AAA'
	], {
	A: 'diamond', B: 'kubejs:cloth_scrap'
	})
	event.recipes.create.mechanical_crafting(
	'create:copper_backtank', [
	'CDC',
	'ABA',
	'A A',
	' A '
	], {
	A: '#forge:ingots/copper', B: '#forge:storage_blocks/copper', C: 'create:andesite_alloy', D: 'create:shaft'
	}).id('create:crafting/appliances/copper_backtank')

// Replace recipe inputs
	event.replaceInput({ not: [{type: 'farmersdelight:cutting'}, {type: 'create:compacting'}, {id: 'twigs:gravel_bricks'}], input: 'minecraft:gravel' }, 'minecraft:gravel', '#forge:gravel')
	event.replaceInput({ input: 'oreganized:lead_ore' }, 'oreganized:lead_ore', 'kubejs:lead_ore')
	event.replaceInput({ input: 'nethersdelight:blackstone_furnace' }, 'nethersdelight:blackstone_furnace', 'quark:blackstone_furnace')
	event.replaceInput({ input: 'neapolitan:adzuki_beans' }, 'neapolitan:adzuki_beans', 'environmental:cherries')
	event.replaceInput({ input: 'neapolitan:roasted_adzuki_beans' }, 'neapolitan:roasted_adzuki_beans', 'environmental:cherries')
	event.replaceInput({ input: 'minecraft:jukebox' }, 'minecraft:jukebox', 'etched:album_jukebox')
	event.replaceInput({ input: 'minecraft:nether_wart' }, 'minecraft:nether_wart', 'minecraft:crimson_fungus')
	event.replaceInput({ input: 'upgrade_aquatic:mulberry' }, 'upgrade_aquatic:mulberry', 'minecraft:sweet_berries')
	event.replaceInput({ input: 'architects_palette:sunmetal_brick' }, 'architects_palette:sunmetal_brick', 'alloyed:bronze_ingot')
	event.replaceInput({ input: 'minecraft:bread' }, 'minecraft:bread', '#forge:bread/wheat')
	event.replaceInput({ output: 'create:steam_engine' }, 'minecraft:copper_block', 'copperandtuffbackport:chiseled_copper')
	event.replaceInput({ output: 'minecraft:copper_ingot' }, 'minecraft:copper_block', 'copperandtuffbackport:chiseled_copper')
	event.replaceInput({ output: 'minecraft:copper_ingot' }, 'minecraft:waxed_copper_block', 'copperandtuffbackport:waxed_chiseled_copper')
	event.replaceInput({ output: 'minecraft:shears' }, 'minecraft:iron_ingot', 'minecraft:copper_ingot')
	event.replaceInput({ output: 'oreganized:exposer' }, '#forge:ingots/silver', 'oreganized:silver_nugget')
	event.replaceInput({ output: 'mynethersdelight:waxed_hoglin_trophy' }, 'minecraft:crimson_fungus', 'minecraft:honeycomb')
	event.replaceInput({ output: 'caverns_and_chasms:depth_gauge' }, '#forge:ingots/silver', 'oreganized:lead_ingot')
	event.replaceInput({ output: 'caverns_and_chasms:depth_gauge' }, 'minecraft:redstone', 'spelunkery:cinnabar')
	event.replaceInput({ output: 'caverns_and_chasms:barometer' }, 'minecraft:redstone', 'spelunkery:cinnabar')
	event.replaceInput({ output: 'architects_palette:myonite_slab' }, 'architects_palette:myonite', 'kubejs:exolite')
	event.replaceInput({ output: 'architects_palette:myonite_stairs' }, 'architects_palette:myonite', 'kubejs:exolite')
	event.replaceInput({ output: 'architects_palette:myonite_wall' }, 'architects_palette:myonite', 'kubejs:exolite')
	event.replaceInput({ output: 'architects_palette:myonite_brick_slab' }, 'architects_palette:myonite_bricks', 'kubejs:cobbled_exolite')
	event.replaceInput({ output: 'architects_palette:myonite_brick_stairs' }, 'architects_palette:myonite_bricks', 'kubejs:cobbled_exolite')
	event.replaceInput({ output: 'architects_palette:myonite_brick_wall' }, 'architects_palette:myonite_bricks', 'kubejs:cobbled_exolite')
	event.replaceInput({ output: 'caverns_and_chasms:large_arrow' }, 'oreganized:silver_ingot', 'oreganized:lead_ingot')
	event.replaceInput({ output: 'create:steam_whistle' }, 'create:golden_sheet', 'alloyed:bronze_ingot')
	event.replaceInput({ output: 'caverns_and_chasms:sugilite' }, 'caverns_and_chasms:spinel', 'minecraft:amethyst_shard')
	event.replaceInput({ output: 'another_furniture:service_bell' }, 'minecraft:iron_nugget', 'alloyed:bronze_nugget')
	event.replaceInput({ output: 'another_furniture:service_bell' }, 'minecraft:iron_ingot', 'alloyed:bronze_ingot')
	event.replaceInput({ id: 'minecraft:crossbow' }, 'minecraft:tripwire_hook', 'minecraft:string')
	event.replaceInput({ id: 'minecraft:crossbow' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'quark:building/crafting/dirt_bricks' }, 'paletteblocks:cobblestone_bricks', 'minecraft:dirt')
	event.replaceInput({ id: 'twigs:cut_amethyst' }, 'twigs:polished_amethyst', 'minecraft:amethyst_block')
	event.replaceInput({ id: 'minecraft:compass' }, 'minecraft:redstone', 'spelunkery:cinnabar')
	event.replaceInput({ id: 'minecraft:clock' }, 'minecraft:redstone', 'spelunkery:cinnabar')
	event.replaceInput({ id: 'minecraft:iron_helmet' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'minecraft:iron_chestplate' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'minecraft:iron_leggings' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'minecraft:iron_boots' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'domesticationinnovation:wayward_lantern' }, 'minecraft:iron_ingot', 'create:iron_sheet')
	event.replaceInput({ id: 'minecraft:golden_helmet' }, 'minecraft:gold_ingot', 'create:golden_sheet')
	event.replaceInput({ id: 'minecraft:golden_chestplate' }, 'minecraft:gold_ingot', 'create:golden_sheet')
	event.replaceInput({ id: 'minecraft:golden_leggings' }, 'minecraft:gold_ingot', 'create:golden_sheet')
	event.replaceInput({ id: 'minecraft:golden_boots' }, 'minecraft:gold_ingot', 'create:golden_sheet')
	event.replaceInput({ id: 'copperized:copper_helmet' }, 'minecraft:copper_ingot', 'create:copper_sheet')
	event.replaceInput({ id: 'copperized:copper_chestplate' }, 'minecraft:copper_ingot', 'create:copper_sheet')
	event.replaceInput({ id: 'copperized:copper_leggings' }, 'minecraft:copper_ingot', 'create:copper_sheet')
	event.replaceInput({ id: 'copperized:copper_boots' }, 'minecraft:copper_ingot', 'create:copper_sheet')
	event.replaceInput({ id: 'supplementaries:hourglass' }, 'minecraft:gold_ingot', 'create:golden_sheet')
	event.replaceInput({ id: 'supplementaries:faucet' }, 'minecraft:iron_ingot', 'minecraft:copper_ingot')
	event.replaceInput({ id: 'create:crafting/kinetics/goggles' }, 'minecraft:string', '#minecraft:leather_cuts')
	event.replaceInput({ id: 'twigs:rocky_dirt' }, 'twigs:pebble', 'minecraft:cobblestone')
	event.replaceInput({ id: 'everycomp:q/culturaldelights/avocado_hedge' }, '#minecraft:oak_logs', '#minecraft:jungle_logs')
	event.replaceInput({ id: 'quark:building/crafting/azalea_hedge_oak' }, '#minecraft:oak_logs', '#ecologics:azalea_logs')
	event.replaceInput({ id: 'everycomp:q/ecologics/coconut_hedge' }, '#minecraft:oak_logs', '#ecologics:coconut_logs')
	event.replaceInput({ id: 'everycomp:q/architects_palette/twisted_hedge' }, '#minecraft:oak_logs', '#architects_palette:twisted_logs')
	event.replaceInput({ id: 'mynethersdelight:hoglin_trophy_cure' }, 'minecraft:ghast_tear', 'minecraft:golden_apple')
	event.replaceInput({ id: 'architects_palette:cerebral_tiles' }, 'architects_palette:cerebral_block', 'architects_palette:mushy_myonite_bricks')
	event.replaceInput({ id: 'quark:tweaks/crafting/utility/misc/chest_minecart' }, 'minecraft:iron_ingot', '#brewinandchewin:iron_or_lead')
	event.replaceInput({ id: 'quark:tweaks/crafting/utility/misc/furnace_minecart' }, 'minecraft:iron_ingot', '#brewinandchewin:iron_or_lead')
	event.replaceInput({ id: 'quark:tweaks/crafting/utility/misc/tnt_minecart' }, 'minecraft:iron_ingot', '#brewinandchewin:iron_or_lead')
	event.replaceInput({ id: 'quark:tweaks/crafting/utility/misc/hopper_minecart' }, 'minecraft:iron_ingot', '#brewinandchewin:iron_or_lead')
	event.replaceInput({ id: 'quark:building/crafting/furnaces/deepslate_minecart_tweaked' }, 'minecraft:iron_ingot', '#brewinandchewin:iron_or_lead')
	event.replaceInput({ id: 'quark:building/crafting/furnaces/blackstone_minecart_tweaked' }, 'minecraft:iron_ingot', '#brewinandchewin:iron_or_lead')
	event.replaceInput({ id: 'naturalist:teddy_bear' }, '#minecraft:wool', ['#minecraft:wool', '#raspberry_flavoured:cloth_blocks'])
	event.replaceInput({ id: 'create:crafting/kinetics/nozzle' }, '#minecraft:wool', ['#minecraft:wool', '#raspberry_flavoured:cloth_blocks'])
	event.replaceInput({ id: 'create:crafting/kinetics/white_sail' }, '#minecraft:wool', ['#minecraft:wool', '#raspberry_flavoured:cloth_blocks'])
	event.replaceInput({ id: 'create:crafting/kinetics/filter' }, '#minecraft:wool', ['#minecraft:wool', '#raspberry_flavoured:cloth_blocks'])
	event.replaceInput({ id: 'create:crafting/kinetics/attribute_filter' }, '#minecraft:wool', ['#minecraft:wool', '#raspberry_flavoured:cloth_blocks'])
	event.replaceInput({ id: 'supplementaries:cage' }, 'minecraft:iron_bars', ['minecraft:iron_bars', 'caverns_and_chasms:golden_bars'])
	event.replaceInput({ id: 'create_central_kitchen:crafting/sappy_maple_log_from_sap_bucket' }, 'autumnity:maple_log', 'autumnity:stripped_maple_log')
	event.replaceInput({ id: 'create_central_kitchen:crafting/sappy_maple_wood_from_sap_bucket' }, 'autumnity:maple_wood', 'autumnity:stripped_maple_wood')
	event.replaceInput({ id: 'create_central_kitchen:filling/sappy_maple_log' }, 'autumnity:maple_log', 'autumnity:stripped_maple_log')
	event.replaceInput({ id: 'create_central_kitchen:filling/sappy_maple_wood' }, 'autumnity:maple_wood', 'autumnity:stripped_maple_wood')
	event.replaceInput({ id: 'create:crafting/logistics/brass_funnel' }, 'minecraft:dried_kelp', 'kubejs:rubber')
	event.replaceInput({ id: 'create:crafting/logistics/brass_tunnel' }, 'minecraft:dried_kelp', 'kubejs:rubber')
	event.replaceInput({ id: 'miningmaster:crafting/shaped/gem_forge' }, 'minecraft:blackstone', 'minecraft:polished_blackstone')
	event.replaceInput({ id: 'quark:building/crafting/blackstone_bricks' }, 'minecraft:blackstone', 'kubejs:cobbled_blackstone')
	event.replaceInput({ id: 'quark:building/crafting/blackstone_bricks' }, 'paletteblocks:cobblestone_bricks', 'kubejs:cobbled_blackstone')
	event.replaceInput({ id: 'minecraft:beacon' }, 'minecraft:glass', '#quark:framed_glasses')
	event.replaceInput({ id: 'quark:oddities/crafting/encased_pipe' }, 'minecraft:glass', '#quark:framed_glasses')
	event.replaceInput({ id: 'create:mechanical_crafting/crushing_wheel' }, '#forge:stone', 'create:shaft')
	event.replaceInput({ id: 'create:mechanical_crafting/crushing_wheel' }, '#minecraft:planks', '#forge:ingots/steel')
	event.replaceInput({ id: 'farmersdelight:apple_pie' }, 'minecraft:apple', '#raspberry_flavoured:apples')
	event.replaceInput({ id: 'farmersdelight:horse_feed' }, 'minecraft:apple', '#raspberry_flavoured:apples')
	event.replaceInput({ id: 'cookscollection:oven' }, 'minecraft:stone_bricks', ['stone_bricks', 'paletteblocks:cobblestone_bricks'])
	event.replaceInput({ id: 'quark:tools/crafting/trowel' }, 'minecraft:iron_ingot', 'additionaladditions:rose_gold_alloy')
	event.replaceInput({ id: 'quark:automation/crafting/redstone_randomizer' }, 'minecraft:prismarine_crystals', 'additionaladditions:rose_gold_alloy')
	event.replaceInput({ id: 'create:crafting/kinetics/crafter_slot_cover' }, '#forge:nuggets/brass', '#forge:nuggets/zinc')
	
	event.replaceInput({ input: 'minecraft:cake' }, 'minecraft:cake', 'raspberry:cake')
	event.replaceInput({ input: 'neapolitan:vanilla_cake' }, 'neapolitan:vanilla_cake', 'raspberry:vanilla_cake')
	event.replaceInput({ input: 'neapolitan:chocolate_cake' }, 'neapolitan:chocolate_cake', 'raspberry:chocolate_cake')
	event.replaceInput({ input: 'neapolitan:strawberry_cake' }, 'neapolitan:strawberry_cake', 'raspberry:strawberry_cake')
	event.replaceInput({ input: 'neapolitan:banana_cake' }, 'neapolitan:banana_cake', 'raspberry:banana_cake')
	event.replaceInput({ input: 'neapolitan:mint_cake' }, 'neapolitan:mint_cake', 'raspberry:mint_cake')
	event.replaceInput({ input: 'neapolitan:adzuki_cake' }, 'neapolitan:adzuki_cake', 'raspberry:cherry_cake')
	event.replaceInput({ input: 'respiteful:green_tea_cake' }, 'respiteful:green_tea_cake', 'raspberry:green_tea_cake')
	event.replaceInput({ input: 'respiteful:yellow_tea_cake' }, 'respiteful:yellow_tea_cake', 'raspberry:yellow_tea_cake')
	event.replaceInput({ input: 'respiteful:black_tea_cake' }, 'respiteful:black_tea_cake', 'raspberry:black_tea_cake')
	event.replaceInput({ input: 'farmersrespite:coffee_cake' }, 'farmersrespite:coffee_cake', 'raspberry:coffee_cake')
	event.replaceInput({ input: 'mynethersdelight:magma_cake' }, 'mynethersdelight:magma_cake', 'raspberry:magma_cake')

// Replace recipe outputs
	event.replaceOutput({ id: 'minecraft:copper_block' }, 'minecraft:copper_block', 'copperandtuffbackport:chiseled_copper')
	event.replaceOutput({ id: 'alloyed:crafting/bronze/bronze_block' }, 'alloyed:bronze_block', 'kubejs:bronze_block')
	event.replaceOutput({ id: 'minecraft:light_gray_dye_from_oxeye_daisy' }, 'minecraft:light_gray_dye', 'minecraft:white_dye')
	event.replaceOutput({ id: 'minecraft:light_gray_dye_from_white_tulip' }, 'minecraft:light_gray_dye', 'minecraft:white_dye')
	event.replaceOutput({ id: 'minecraft:light_gray_dye_from_azure_bluet' }, 'minecraft:light_gray_dye', 'minecraft:white_dye')
	event.replaceOutput({ id: 'create:copper_bars_from_ingots_copper_stonecutting' }, 'create:copper_bars', 'caverns_and_chasms:copper_bars')
	
	event.replaceOutput({ output: 'minecraft:cake' }, 'minecraft:cake', 'raspberry:cake')
	event.replaceOutput({ output: 'neapolitan:vanilla_cake' }, 'neapolitan:vanilla_cake', 'raspberry:vanilla_cake')
	event.replaceOutput({ output: 'neapolitan:chocolate_cake' }, 'neapolitan:chocolate_cake', 'raspberry:chocolate_cake')
	event.replaceOutput({ output: 'neapolitan:strawberry_cake' }, 'neapolitan:strawberry_cake', 'raspberry:strawberry_cake')
	event.replaceOutput({ output: 'neapolitan:banana_cake' }, 'neapolitan:banana_cake', 'raspberry:banana_cake')
	event.replaceOutput({ output: 'neapolitan:mint_cake' }, 'neapolitan:mint_cake', 'raspberry:mint_cake')
	event.replaceOutput({ output: 'neapolitan:adzuki_cake' }, 'neapolitan:adzuki_cake', 'raspberry:cherry_cake')
	event.replaceOutput({ output: 'respiteful:green_tea_cake' }, 'respiteful:green_tea_cake', 'raspberry:green_tea_cake')
	event.replaceOutput({ output: 'respiteful:yellow_tea_cake' }, 'respiteful:yellow_tea_cake', 'raspberry:yellow_tea_cake')
	event.replaceOutput({ output: 'respiteful:black_tea_cake' }, 'respiteful:black_tea_cake', 'raspberry:black_tea_cake')
	event.replaceOutput({ output: 'farmersrespite:coffee_cake' }, 'farmersrespite:coffee_cake', 'raspberry:coffee_cake')
	event.replaceOutput({ output: 'mynethersdelight:magma_cake' }, 'mynethersdelight:magma_cake', 'raspberry:magma_cake')
	
// You thought warping was removed?
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:the_nether', ingredient: [{item: 'minecraft:music_disc_pigstep'}], result: {item: 'kubejs:music_disc_exostep'}}).id('kubejs:exostep')
	event.custom({type: 'architects_palette:warping', dimension: 'minecraft:overworld', ingredient: [{item: 'minecraft:music_disc_pigstep'}], result: {item: 'kubejs:music_disc_exostep'}}).id('kubejs:exostep_2')
})