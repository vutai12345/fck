// priority: 0

JEIEvents.information(event => {
	event.addItem('#raspberry_flavoured:campfires', 
	['Campfire kindling can be lit by sneaking and right-clicking on one while holding twigs in both hands, or by using a fire striker. Standing in close proximity of a lit campfire will grant the Comfort effect.'])
	
	event.addItem('#minecraft:beds', 
	['A bed to sleep your troubles away. Sets your spawn point when right-clicked. Sleeping will not skip the night instantly.'])
	
	event.addItem('#upgrade_aquatic:bedrolls', 
	['A cheaper, makeshift bed. Does not set your spawn point. Sleeping will not skip the night instantly.'])
	
	event.addItem(['kubejs:bone_knife', 'kubejs:copper_knife', 'kubejs:rose_gold_knife', 'alloyed:steel_knife', 'oreganized:electrum_knife', 'abnormals_delight:necromium_knife'], 
	['Knives are lightweight melee weapons. They can harvest Straw from grasses, and guarentee secondary drops from animals. They will also occasionally cause certain mobs to drop their heads.'])
	
	event.addItem('#forge:tools/hoes', 
	['Hoes will allow you to obtain seeds from foliage such as grass. They can also rake through leaves quicker than other tools.'])
	
	event.addItem(['minecraft:leather_helmet','minecraft:leather_chestplate','minecraft:leather_leggings','minecraft:leather_boots'], 
	['Leather armour will reduce fall damage.'])
	
	event.addItem(['minecraft:stone_pickaxe','minecraft:stone_shovel','minecraft:stone_hoe','minecraft:stone_axe','minecraft:stone_sword','kubejs:copper_knife','minecraft:shears','another_furniture:furniture_hammer','supplementaries:wrench'], 
	['Copper tools are the second tool tier after wood. They will visually oxidise as their durability dwindles, though this has no effect on their functionality or effectiveness and is purely aesthetic.'])
	
	event.addItem(['copperized:copper_helmet','copperized:copper_chestplate','copperized:copper_leggings','copperized:copper_boots'], 
	['Copper armour will grant immunity to lightning damage and the Aftershock status effect when struck by lightning while worn, with an extra level added to the effect for the amount of armour pieces equipped.'])
	
	event.addItem(['minecraft:chainmail_helmet','minecraft:chainmail_chestplate','minecraft:chainmail_leggings','minecraft:chainmail_boots'], 
	['Chainmail armour is now craftable and will cause attackers to take damage when they come in contact with the wearer.'])
	
	event.addItem('#forge:tools/gold', 
	['Golden tools are fragile but harvest blocks the quickest out of any tool and increase drops from blocks like ores, and from mobs.'])
	
	event.addItem(['minecraft:golden_helmet','minecraft:golden_chestplate','minecraft:golden_leggings','minecraft:golden_boots'], 
	['Golden armour is fragile, but will lightly protect the wearer against fire damage.'])
	
	event.addItem(['alloyed:steel_pickaxe','alloyed:steel_shovel','alloyed:steel_hoe','alloyed:steel_axe','alloyed:steel_sword','alloyed:steel_knife'], 
	['Steel tools are a bit slow and heavy, but are highly durable and will knock targets further away.'])
	
	event.addItem(['alloyed:steel_helmet','alloyed:steel_chestplate','alloyed:steel_leggings','alloyed:steel_boots'], 
	['Steel armour will lightly protect the wearer against projectile damage and getting knocked back.'])
	
	event.addItem(['additionaladditions:rose_gold_shovel','additionaladditions:rose_gold_pickaxe','additionaladditions:rose_gold_axe','additionaladditions:rose_gold_hoe','additionaladditions:rose_gold_sword','kubejs:rose_gold_knife'], 
	['Rose gold tools are quick, with a delicate touch - most blocks harvested with them will drop exactly as they are. They also deal magic damage to targets, piercing through armour.'])
	
	event.addItem(['additionaladditions:rose_gold_helmet','additionaladditions:rose_gold_chestplate','additionaladditions:rose_gold_leggings','additionaladditions:rose_gold_boots'], 
	['Rose gold armour will protect the wearer against magic damage.'])
	
	event.addItem(['oreganized:electrum_pickaxe','oreganized:electrum_shovel','oreganized:electrum_hoe','oreganized:electrum_axe','oreganized:electrum_sword','oreganized:electrum_knife'], 
	['Electrum tools harvest blocks very quickly and will deal more damage while sprinting.'])
	
	event.addItem(['oreganized:electrum_helmet','oreganized:electrum_chestplate','oreganized:electrum_leggings','oreganized:electrum_boots'], 
	['Electrum armour will increase the wearer\'s movement speed.'])
	
	event.addItem(['caverns_and_chasms:necromium_pickaxe','caverns_and_chasms:necromium_shovel','caverns_and_chasms:necromium_hoe','caverns_and_chasms:necromium_axe','caverns_and_chasms:necromium_sword','abnormals_delight:necromium_knife'], 
	['Necromium tools will cause struck targets to be slowed.'])
	
	event.addItem(['caverns_and_chasms:necromium_helmet','caverns_and_chasms:necromium_chestplate','caverns_and_chasms:necromium_leggings','caverns_and_chasms:necromium_boots'], 
	['Necromium armour will weaken nearby mobs.'])
	
	event.addItem(['minecraft:netherite_pickaxe','minecraft:netherite_shovel','minecraft:netherite_hoe','minecraft:netherite_axe','minecraft:netherite_sword','farmersdelight:netherite_knife'], 
	['Netherite tools are extremely durable and won\'t burn up when thrown into fire or lava. They will set targets on fire, and automatically smelt mined blocks.'])
	
	event.addItem(['minecraft:netherite_helmet','minecraft:netherite_chestplate','minecraft:netherite_leggings','minecraft:netherite_boots'], 
	['Netherite armour will provide light knockback resistance and good protection against fire damage, and won\'t burn up when thrown into fire or lava.'])
	
	event.addItem('minecraft:turtle_helmet', 
	['Turtle shell helmets will have their durability continously drain while underwater, but as long as they have any durability, they will provide you with oxygen.'])
	
	event.addItem(['minecraft:shears','alloyed:steel_shears','ecologics:crab_claw'], 
	['Shears will allow you to gather wool from Sheep, as they won\'t yield any when killed. Yes, that crab claw is a pair of shears.'])
	
	event.addItem(['#farmersrespite:tea_leaves','farmersrespite:wild_tea_bush','farmersrespite:tea_seeds'], 
	['Tea is rarely found in swamps. Harvesting tea in different stages of its growth will yield different coloured leaves.'])
	
	event.addItem(['farmersrespite:coffee_beans','farmersrespite:coffee_berries','farmersrespite:wild_coffee_bush'], 
	['Coffee is found in basalt deltas. In the overworld, coffee needs crops around it to grow and will cause those crops to wither away. It will grow by itself if planted in the Nether.'])
	
	event.addItem(['minecraft:wheat_seeds','minecraft:wheat', 'minecraft:hay_block'], 
	['Wheat is grown with wheat seeds, which can be found found by mowing through grass using a hoe.'])
	
	event.addItem(['minecraft:pumpkin_seeds','minecraft:pumpkin','minecraft:carved_pumpkin','farmersdelight:pumpkin_slice','autumnity:large_pumpkin_slice','autumnity:carved_large_pumpkin_slice'], 
	['Pumpkins can be found in most grassy biomes, typically in grouped patches. You\'ll need a knife to cut them up into slices. You can also carve them with shears.'])
	
	event.addItem(['minecraft:melon_seeds','minecraft:melon','minecraft:melon_slice'], 
	['Watermelons can be found in jungles, rainforests and similar biomes. You\'ll need a knife to cut them up into slices.'])
	
	event.addItem(['minecraft:beetroot_seeds', 'farmersdelight:beetroot_crate'], 
	['Beetroot can be commonly found as a wild plant in beach coasts.'])
	
	event.addItem(['farmersdelight:tomato_seeds', 'farmersdelight:tomato_crate'], 
	['Tomatoes can be commonly found as a wild plant in arid lands, such as savannas and deserts.'])
	
	event.addItem(['farmersdelight:cabbage_seeds', 'farmersdelight:cabbage_crate'], 
	['Cabbages can be commonly found as a wild plant in beach coasts.'])
	
	event.addItem(['farmersdelight:rice','farmersdelight:rice_bag','farmersdelight:wild_rice','farmersdelight:rice_panicle','farmersdelight:rice_bale'], 
	['After it\'s grown, rice plants will drop rice panicles when harvested normally, which you\'ll have to cut up - but if harvested with a knife, they\'ll drop rice directly.'])
	
	event.addItem(['minecraft:sweet_berries','berry_good:sweet_berry_pips', 'quark:berry_sack'], 
	['Sweet berries are most commonly found growing in taigas. Foxes love them.'])
	
	event.addItem(['minecraft:glow_berries','berry_good:glow_berry_pips', 'quark:glowberry_sack'], 
	['Glow berries are found underground in lush caves. They quell your hunger and the darkness!'])
	
	event.addItem(['autumnity:foul_berries','autumnity:foul_berry_pips', 'autumnity:foul_berry_basket'], 
	['Foul berries can be found growing in maple forests. Turkeys love them for some reason.'])
	
	event.addItem(['neapolitan:strawberries','neapolitan:strawberry_basket','neapolitan:white_strawberries','neapolitan:white_strawberry_basket','neapolitan:strawberry_pips'], 
	['Strawberries are found in patches around plains biomes. Growing strawberry bushes at very high altitudes will yield pineberries. Strawberry bushes will make various mobs like Bees, Spiders and Creepers invisible when they walk through them.'])
	
	event.addItem(['neapolitan:mint_leaves','neapolitan:mint_sprout', 'neapolitan:mint_basket'], 
	['Mint is typically found on windswept hills and some other cold biomes.'])
	
	event.addItem(['neapolitan:banana','neapolitan:banana_bunch','neapolitan:banana_bundle','neapolitan:banana_crate','neapolitan:banana_stalk','neapolitan:banana_frond'], 
	['Bananas are found in jungles and tropical beaches, hanging off of thick banana stalks with fronds on them.'])
	
	event.addItem(['neapolitan:vanilla_pods', 'neapolitan:dried_vanilla_pods', 'neapolitan:vanilla_pod_block', 'neapolitan:dried_vanilla_pod_block'], 
	['Vanilla is found in savanna biomes. You might wanna use some shears when harvesting vanilla pods.'])
	
	event.addItem(['supplementaries:flax','supplementaries:flax_seeds', 'supplementaries:flax_block'], 
	['Flax can be found in the wild in most biomes, and is used to make things like sacks, doormats and rope, or can be cut/ground into string. Flax seeds are also an alternative to sunflowers as a source of cooking oil.'])
	
	event.addItem(['culturaldelights:eggplant_seeds','culturaldelights:eggplant','culturaldelights:eggplant_crate','culturaldelights:wild_eggplants'], 
	['Eggplants are found somewhat sparsely in jungles.'])
	
	event.addItem(['culturaldelights:corn_kernels','culturaldelights:corn_cob','culturaldelights:corn_cob_crate','culturaldelights:wild_corn'], 
	['Corn can be found scattered around in all plains-like biomes.'])
	
	event.addItem(['#culturaldelights:avocados','culturaldelights:avocado_crate','culturaldelights:avocado_pit','culturaldelights:avocado_sapling','culturaldelights:fruiting_avocado_leaves'], 
	['Avocados can be found growing on avocado trees in jungles.'])
	
	event.addItem(['cookscollection:lemon','cookscollection:lemon_crate','cookscollection:lemon_sapling','cookscollection:fruiting_lemon_leaves'], 
	['Lemons can be found growing on lemon trees in savannas.'])
	
	event.addItem(['environmental:truffle','environmental:buried_truffle','environmental:truffle_crate'], 
	['After feeding a Pig a golden carrot, it will lead you to some buried truffles, which you can dig to obtain... well, truffles.'])
	
	event.addItem(['#minecraft:coal_ores','minecraft:coal','minecraft:coal_block','spelunkery:coal_lump'], 
	['Coal can be found commonly on high altitudes.'])
	
	event.addItem(['#minecraft:iron_ores','minecraft:raw_iron','minecraft:raw_iron_block','minecraft:iron_ingot','minecraft:iron_block','spelunkery:raw_iron_nugget','minecraft:iron_nugget'], 
	['Iron can be found near - but not directly at - deepslate level.'])
	
	event.addItem(['#minecraft:copper_ores','minecraft:raw_copper','minecraft:raw_copper_block','minecraft:copper_ingot','copperandtuffbackport:chiseled_copper','copperandtuffbackport:waxed_chiseled_copper','spelunkery:raw_copper_nugget','create:copper_nugget'], 
	['Copper can be found very commonly both over and underground, though it\'s less common in lower altitudes.'])
	
	event.addItem(['#minecraft:gold_ores','minecraft:gilded_blackstone','minecraft:raw_gold','minecraft:raw_gold_block','minecraft:gold_ingot','minecraft:gold_block','spelunkery:raw_gold_nugget','minecraft:gold_nugget'], 
	['Gold is most commonly found near the top of the deepslate layer and also in the Nether.'])
	
	event.addItem(['#minecraft:redstone_ores','spelunkery:rough_cinnabar','spelunkery:cinnabar','spelunkery:rough_cinnabar_block','spelunkery:cinnabar_block','spelunkery:rough_cinnabar_shard','spelunkery:cinnabar_shard'], 
	['Cinnabar is found near the lower half of the world and can be seen more frequently as you go further and further down.'])
	
	event.addItem(['minecraft:redstone', 'minecraft:redstone_block'], 
	['Redstone dust can be obtained by crushing cinnabar.'])
	
	event.addItem(['#minecraft:diamond_ores','spelunkery:rough_diamond','spelunkery:rough_diamond_block','minecraft:diamond','minecraft:diamond_block','spelunkery:rough_diamond_shard','spelunkery:diamond_shard'], 
	['Diamonds are most common near the very bottom of the world.'])
	
	event.addItem(['minecraft:ancient_debris', 'minecraft:netherite_scrap'], 
	['Ancient debris is found in small chunks near the bottom of the Nether. Ancient scraps will drop from Piglin brutes, and occasionally from Wildfires.'])
	
	event.addItem(['#forge:ores/zinc','create:raw_zinc','create:raw_zinc_block','create:zinc_ingot','create:zinc_block','spelunkery:raw_zinc_nugget','create:zinc_nugget'], 
	['Zinc is found scattered around at pretty much any altitude underground.'])
	
	event.addItem(['#forge:ores/lead','oreganized:raw_lead','oreganized:raw_lead_block','oreganized:lead_ingot','oreganized:lead_block','spelunkery:raw_lead_nugget','oreganized:lead_nugget'], 
	['Lead is found somewhat frequently around deepslate level, but it can be found much higher up near the surface in savanna biomes. You can also find lead in the Nether.'])
	
	event.addItem(['#forge:ores/silver','oreganized:raw_silver','oreganized:raw_silver_block','oreganized:silver_ingot','oreganized:silver_block','spelunkery:raw_silver_nugget','oreganized:silver_nugget'], 
	['Silver is found very rarely right between the stone and deepslate layers underground.'])
	
	event.addItem(['oreganized:silver_ore', '#forge:ores_in_ground/deepslate'], 
	['Deepslate ores yield extra drops and are blast resistant. Both stone and deepslate silver ores are blast resistant.'])
	
	event.addItem(['spelunkery:magnetite', 'spelunkery:magnetite_chunk', 'spelunkery:raw_magnetite_nugget'], 
	['Magnetite can be found near large iron veins deep underground. Deepslate iron ore will occasionally drop magnetite nuggets, and small magnetite geodes covered with obsidian will spawn around the Nether.'])
	
	event.addItem(['spelunkery:salt', 'spelunkery:salt_block', 'spelunkery:rock_salt', 'spelunkery:rock_salt_block'], 
	['Rock salt can be found in mountainous biomes and crushed into salt, which is used as a cooking ingredient and will prevent undead mobs from walking over it when placed in a line. Placing dripstone below pointed dripstone with rock salt and water above it will eventually turn the dripstone into rock salt.'])
	
	event.addItem('minecraft:compass', 
	['Compasses point towards the world\'s spawn point. If used on a lodestone, they will point towards the specific lodestone to which they were assigned. Right-clicking with a compass in hand will briefly display your latitude and longitude.'])
	
	event.addItem('minecraft:recovery_compass', 
	['Recovery compasses point towards your last death point. You will also not lose them upon death.'])
	
	event.addItem('spelunkery:magnetic_compass', 
	['Magnetic compasses always point towards north, unless there\'s interference being caused by nearby magnetite, in which case they will glow and point towards that magnetite chunk. Right-clicking with a magnetic compass in hand will briefly display your latitude and longitude, however if there\'s interference, it will display the coordinates of the interference\'s source instead.'])
	
	event.addItem('minecraft:clock', 
	['Clocks show the time of day. Right-clicking with a clock in hand will briefly display the time of day in numerical form and the day number.'])
	
	event.addItem('caverns_and_chasms:barometer', 
	['Barometers show the weather. Right-clicking with a barometer in hand will briefly display the current weather conditions.'])
	
	event.addItem('minecraft:spyglass',
	['Spyglasses allow you to zoom your view towards wherever you\'re looking. Using the scroll wheel will allow you to adjust the zoom amount. When zooming in on a block or entity, its name and/or stats will be displayed in the upper left corner of the screen. Through the use of a keybind (Z by default), you can instantly use your spyglass from anywhere inside your inventory.'])
	
	event.addItem('caverns_and_chasms:depth_gauge',
	['Depth gauges show how deep you are in the world. Right-clicking with a depth gauge in hand will briefly display your altitude.'])
	
	event.addItem('map_atlases:atlas', 
	['Atlases allow you to easily map out your surroundings. Putting an atlas and empty maps together in a crafting table or a cartography table will put the maps inside the atlas, ready to be used. When you have an atlas in your hotbar, it\'ll display a minimap in the corner (upper right by default) of your screen.'])
	
	event.addItem(['farmersdelight:roast_chicken_block','farmersdelight:stuffed_pumpkin_block','farmersdelight:honey_glazed_ham_block','farmersdelight:shepherds_pie_block','farmersdelight:rice_roll_medley_block','kubejs:eggplant_parmesan_block','miners_delight:stuffed_squid','brewinandchewin:fiery_fondue_pot','mynethersdelight:roast_stuffed_hoglin','mynethersdelight:ghasta_with_cream','mynethersdelight:striderloaf'], 
	['These foods are all feasts - meaning, you can place them down and then take portions out of them with bowls.'])
	
	event.addItem(['farmersdelight:organic_compost','farmersdelight:rich_soil'], 
	['Organic compost can be made out of a variety of waste material, or can occasionally be obtained from a full composter. By placing down some organic compost and letting it sit for a while, you\'ll be able to get your hands on rich soil, which doesn\'t require water to grow crops, but grows crops faster than normal if water is provided.'])
	
	event.addItem('minecraft:rabbit_hide', 
	['Leather can be cut into scraps with shears on a cutting board. As they\'re used in the same recipes as regular leather, they\'ll allow you to save a bunch of leather.'])
	
	event.addItem('nethersdelight:hoglin_hide', 
	['Some thick hide skinned off of a Hoglin, which can be made into a trophy or cut into a bunch of leather. You\'ll need something lighter than a sword to get this off a Hoglin...'])
	
	event.addItem(['#create:sandpaper', 'minecraft:grindstone', 'spelunkery:rough_cinnabar', 'spelunkery:rough_diamond'], 
	['Sand paper and grindstones will allow you to polish rough gems. Sand paper can be used by looking at rough gems on the floor or by holding them in your offhand and holding right-click, while grindstones can simply be right-clicked with a rough gem in hand.'])
	
	event.addItem('spelunkery:item_magnet', 
	['When activated with a right-click, an item magnet will attract all items nearby towards you.'])
	
	event.addItem('spelunkery:echo_fork', 
	['Echo forks will temporarily add a glowing outline to mobs around you in a large radius, allowing them to be seen through walls.'])
	
	event.addItem('quark:trowel', 
	['Trowels will select and place a random block from your hotbar with every use. Perfect for adding some variation to your builds.'])
	
	event.addItem('quark:echorang', 
	['When thrown, echorangs will fly far away, only stopping and flying back after reaching their maximum distance, hitting a block, or a mob. Hitting a block with a thrown echorang will destroy the block and the echorang will bring its drops to you. Killing a mob with a thrown echorang will have it bring the mob\'s drops with it as it flies back to you. They\'ll also continue flying further when they fly near sculk shriekers.'])
	
	event.addItem('oreganized:silver_mirror', 
	['Silver mirrors will glow whenever an undead mob is nearby, and will deal big damage to undead mobs specifically.'])
	
	event.addItem('minecraft:anvil', 
	['Anvils allow you to repair equipment using materials. They\'ll also let you rename items and combine enchantments.'])
	
	event.addItem('savage_and_ravage:wand_of_freezing', 
	['The Wand of Freezing is one of three ancient relics. It summons damaging and freezing ice blocks above your foes. It can be rarely found in skeleton fortresses.'])
	
	event.addItem('savage_and_ravage:mask_of_dishonesty', 
	['The Mask of Dishonesty is one of three ancient relics. When worn and sneaking, it will allow you to go fully invisible to mobs and players, even if you\'re wearing armour or holding an item. It can be rarely found in desert pyramids.'])
	
	event.addItem('savage_and_ravage:conch_of_conjuring', 
	['The Conch of Conjuring is one of three ancient relics. It summons vicious fangs that come out of the ground and deal damage in a straight line in front of you. It can be rarely found in jungle temples.'])
	
	event.addItem('minecraft:heart_of_the_sea',
	['Hearts of the sea are ancient artifacts found rarely in buried treasure chests. A heart of the sea, along with some nautilus shells, can be used to craft a conduit.'])
	
	event.addItem('minecraft:composter', 
	['Composters will allow you to recycle various biological material into some bone meal, or even occasionally some organic compost. This process can be automated by placing a hopper on top of and under the composter.'])
	
	event.addItem('minecraft:ender_eye', 
	['Awoken exopearls will fly in the direction of various ruined structures, such as shipwrecks, ruined Nether portals and Piglin bastion remnants.'])
	
	event.addItem('kubejs:spirited_exopearl', 
	['Spirited exopearls will fly in the direction of various structures containing spawners, such as dungeons, mineshafts, Nether fortresses, and...?'])
	
	event.addItem('heartstone:heartstone',
	['Binding exopearls come in pairs and will allow you to easily locate and/or keep track of another player. Simply hand someone one of the two binding exopearls and this will bind you and them together, creating a particle trail leading towards each other whenever one of you two right-clicks with the item in hand.'])
	
	event.addItem('spelunkery:portal_fluid_bottle', 
	['A bottle of dimensional tears, obtained from either crying obsidian, by killing a witch or looting her hut, or made in a super-heated mixer. Using this bottle on a valid obsidian portal frame will open a portal to the Nether - fire won\'t do the trick here! Drinking a bottle of dimensional tears also teleports you to your last set spawn point.'])
	
	event.addItem('spelunkery:portal_fluid_bucket',
	['A bucket of dimensional tears can be emptied into a cauldron then jumped into, which will also teleport you to your last spawn point and use up 1/3rd of the tears.'])
	
	event.addItem('vc_gliders:paraglider_wood', 
	['Paragliders will let you descend much slower and avoid fall damage when you activate them by pressing the jump key while mid-air.'])
	
	event.addItem(['kubejs:cloth_scrap', '#raspberry_flavoured:cloth_blocks'], 
	['Cloth scraps drop from all mobs wearing clothes, like Zombies, Piglins and Witches, and can also be found in various loot chests.'])
	
	event.addItem('quark:soul_bead', 
	['Soul beads can be acquired by killing Vexes or Wraiths, by destroying spawners, or by bartering with Piglin Alchemists.'])
	
	event.addItem('kubejs:copper_brush', 
	['Brushes will let you brush various animals for some drops, such as feathers from Chickens, or string from Sheep. After being brushed, animals can\'t be brushed again until some time has passed. Brushes can also be made into glue brushes and wax brushes.'])
	
	event.addItem('kubejs:copper_brush_wax',
	['Wax brushes are very similar to glue brushes - though instead of gluing blocks, they will allow you to bulk wax blocks, creating an area to wax when right-clicked, which can be confirmed by right-clicking again or discarded by right-clicking while sneaking.'])
	
	event.addItem(['autumnity:sap_bottle', 'create_central_kitchen:sap_bucket', 'autumnity:sappy_maple_log', 'autumnity:sappy_maple_wood'],
	['Sap can be gathered from sappy maple logs using glass bottles. Some maple logs will turn into sappy maple logs when stripped. Sap is used to make syrup.'])
	
	event.addItem(['kubejs:latex_bottle', 'kubejs:latex_bucket', 'kubejs:latex_jungle_log', 'kubejs:latex_jungle_wood', 'kubejs:latex_rosewood_log', 'kubejs:latex_rosewood'],
	['Latex can be gathered from latex jungle or rosewood logs using glass bottles. Some jungle or rosewood logs will turn into latex jungle or rosewood logs when stripped. Latex is used to make rubber and balloons.'])
	
	event.addItem(['kubejs:rubber', 'kubejs:rubber_block', 'kubejs:rubber_tire'],
	['Rubber is used in making various movement-related components, and blocks made of rubber are bouncy not only for players and mobs, but for projectiles as well. In certain recipes, rubber can be substituted with dried kelp as a cheaper but less efficient alternative.'])
	
	event.addItem(['create:copper_sheet', 'create:golden_sheet'],
	['Copper and gold ingots can be pressed into sheets using a hammer on a cutting board, though this has a chance to fail and not return a sheet - so this method is good when you\'re in a pinch, but otherwise - use a mechanical press!'])
	
	event.addItem('savage_and_ravage:creeper_spores', 
	['Creeper spores drop from Creepers when they\'re killed by explosions. They can be used in various recipes, or thrown to create a small spore cloud that spawns Creepies which will fight for you.'])
	
	event.addItem('naturalist:glow_goop', 
	['Glow goop drops from Fireflies and can also be obtained by smelting glow berries. Up to 3 glow goop can be placed in one spot, which will provide an invisible light source - as long as you\'re not holding glow goop in your hand, that is.'])
	
	event.addItem(['aquaculture:tackle_box', 'aquaculture:iron_fishing_rod'], 
	['Tackle boxes will let you customize reinforced fishing rods, allowing you to attach hooks, baits, fishing lines and bobbers to them. Reinforced fishing rods do not require any of these to be attached in order to work, but they will provide some neat utilities.'])
	
	event.addItem('#raspberry_flavoured:hooks', 
	['Hooks can be equipped to reinforced fishing rods in a tackle box. Each hook will have a unique effect on your fishing experience.'])
	
	event.addItem('aquaculture:gold_hook', 
	['Magnetite hooks will increase the chances of catching treasure, but also the chances of catching junk.'])
	
	event.addItem('aquaculture:light_hook', 
	['Copper hooks are light, and will allow you to cast your fishing line further.'])
	
	event.addItem('aquaculture:heavy_hook', 
	['Steel hooks are heavy, and will allow you to cast your fishing line shorter and more precisely.'])
	
	event.addItem('aquaculture:double_hook', 
	['Double hooks are the result of copper and steel hooks cancelling each other out, and they will simply allow you to catch two things at once, on occasion.'])
	
	event.addItem('aquaculture:redstone_hook', 
	['Zinc hooks will increase the amount of time you have to reel your rod once you get a bite.'])
	
	event.addItem(['aquaculture:worm', 'raspberry:wormy_dirt'], 
	['Worms are used as bait for fishing, and can be attached to reinforced fishing rods in a tackle box. They\'ll decrease the amount of time it takes to catch something. Worms can be obtained by feeding corn kernels to a chicken, duck or turkey, which will make them search for wormy dirt. Worms will also occasionally pop out of composters.'])
	
	event.addItem(['naturalist:bear_fur', 'environmental:yak_hair'], 
	['Brown Bears and Yaks can be sheared for their fur or hair, though beware: this will make them hostile towards you!'])
	
	event.addItem('kubejs:stardust', 
	['Stardust is a powerful crafting ingredient obtained by crushing Nether Stars. It is a universal repair material, meaning it can be used to repair any item with durability. Stardust is also required to forge Everlasting Tablets.'])
	
	event.addItem('minecraft:echo_shard', 
	['Echo shards can be obtained by harvesting sculk sensors, or found in ancient city chests.'])
	
	event.addItem('domesticationinnovation:wayward_lantern', 
	['Wayward lanterns allow pets that have unloaded from the world to teleport to them, so that you won\'t lose your pets if you\'ve ventured out far into the world. They also make good street lights!'])
	
	event.addItem('domesticationinnovation:collar_tag', 
	['Collar tags can be used to rename pets, but they can also have unique enchantments applied to them which will grant your pets various benefits.'])
	
	event.addItem('domesticationinnovation:deed_of_ownership', 
	['Using a deed of ownership on a pet will bind it to the deed, and when that deed is passed over to another player, they can right-click the pet with the deed to transfer its ownership to them.'])
	
	event.addItem('kubejs:dwarf_geode', 
	['Dwarf geodes can be found in loot chests or underground urns, and occasionally drop from Deepers.'])
	
	event.addItem('kubejs:deepslate_dwarf_geode', 
	['Deepslate dwarf geodes can be found in loot chests or underground urns, and occasionally drop from Peepers.'])
	
	event.addItem('kubejs:blackstone_dwarf_geode', 
	['Blackstone dwarf geodes can be found in loot chests, and occasionally drop from Magma Cubes.'])

// Liquid to stone interactions	
	// Stone & deepslate
	event.addItem(['minecraft:water_bucket', 'minecraft:lava_bucket', 'minecraft:cobblestone', 'minecraft:stone', 'minecraft:cobbled_deepslate', 'minecraft:deepslate'],
	['Lava flowing on or next to water will create stone. In deeper parts of the world, this same interaction will create deepslate instead of stone.'])
	
	// Blackstone
	event.addItem(['minecraft:blue_ice', 'minecraft:lava_bucket', 'minecraft:netherrack', 'kubejs:cobbled_blackstone', 'minecraft:blackstone'],
	['Lava flowing next to blue ice over netherrack will create blackstone.'])
	
	// Basalt
	event.addItem(['minecraft:blue_ice', 'minecraft:lava_bucket', 'minecraft:soul_soil', 'minecraft:smooth_basalt'],
	['Lava flowing next to blue ice over soul soil will create basalt.'])
	
	// Granite
	event.addItem(['minecraft:water_bucket', 'minecraft:lava_bucket', 'minecraft:red_sand', 'minecraft:granite'],
	['Lava flowing next to water over red sand will create granite.'])
	
	// Diorite
	event.addItem(['minecraft:water_bucket', 'minecraft:lava_bucket', 'minecraft:calcite', 'minecraft:diorite'],
	['Lava flowing next to water over calcite will create diorite.'])
	
	// Andesite
	event.addItem(['minecraft:water_bucket', 'minecraft:lava_bucket', 'minecraft:gravel', 'minecraft:andesite'],
	['Lava flowing next to water over gravel will create andesite.'])
	
	// Dripstone
	event.addItem(['minecraft:water_bucket', 'minecraft:lava_bucket', 'minecraft:packed_mud', 'minecraft:dripstone_block'],
	['Lava flowing next to water over packed mud will create dripstone.'])
	
	// Calcite
	event.addItem(['minecraft:water_bucket', 'minecraft:lava_bucket', 'minecraft:bone_block', 'minecraft:calcite'],
	['Lava flowing next to water over bone blocks will create calcite.'])
	
	// Tuff
	event.addItem(['minecraft:water_bucket', 'minecraft:lava_bucket', 'raspberry:deepslate_gravel', 'minecraft:tuff'],
	['Lava flowing next to water over deepslate gravel will create tuff.'])
	
	// Crimsite
	event.addItem(['kubejs:scarlet_cheese_bucket', 'minecraft:lava_bucket', 'create:crimsite'],
	['Lava flowing next to liquid scarlet cheese will create crimsite.'])
	
	// Ochrum
	event.addItem(['create:honey_bucket', 'minecraft:lava_bucket', 'create:ochrum'],
	['Lava flowing next to liquid honey will create ochrum.'])
	
	// Asurine
	event.addItem(['minecraft:water_bucket', 'minecraft:lava_bucket', 'minecraft:emerald_block', 'create:asurine'],
	['Lava flowing next to water over lapis lazuli will create asurine.'])
	
	// Veridium
	event.addItem(['minecraft:water_bucket', 'minecraft:lava_bucket', 'additionaladditions:patina_block', 'create:veridium'],
	['Lava flowing next to water over patina blocks will create veridium.'])
	
	// Limestone
	event.addItem(['kubejs:batter_bucket', 'minecraft:lava_bucket', 'create:limestone'],
	['Lava flowing next to batter will create limestone.'])
	
	// Scoria
	event.addItem(['create:chocolate_bucket', 'minecraft:lava_bucket', 'create:scoria'],
	['Lava flowing next to liquid chocolate will create scoria.'])
	
	// Glance
	event.addItem(['oreganized:molten_lead_bucket', 'minecraft:lava_bucket', 'oreganized:glance'],
	['Lava flowing next to molten lead will create glance.'])
	
	// Exolite
	event.addItem(['minecraft:blue_ice', 'minecraft:lava_bucket', 'architects_palette:ender_pearl_block', 'kubejs:cobbled_exolite', 'kubejs:exolite'],
	['Lava flowing next to blue ice over exopearl blocks will create exolite.'])

// Music discs
	event.addItem('#minecraft:creeper_drop_music_discs', 
	['Dropped by a creeper when killed by a skeleton.'])
	
	event.addItem(['minecraft:music_disc_13','minecraft:music_disc_cat','minecraft:music_disc_wait'],
	['These discs can also be found in dungeon chests.'])
	
	event.addItem('sullysmod:music_disc_scour', 
	['Found in dungeon chests and jungle temples.'])
	
	event.addItem('minecraft:music_disc_ward',
	['Can also be found in zombie catacombs, skeleton fortresses or Nether dungeons.'])
	
	event.addItem('minecraft:music_disc_mellohi', 
	['Can also be found in zombie catacombs or skeleton fortresses.'])
	
	event.addItem(['minecraft:music_disc_far','minecraft:music_disc_strad'],
	['These can also be found in shipwrecks or buried treasure chests.'])
	
	event.addItem(['minecraft:music_disc_blocks','minecraft:music_disc_mall'], 
	['These can also be found in abandoned mineshafts.'])
	
	event.addItem(['minecraft:music_disc_stal','minecraft:music_disc_11'], 
	['Can also be found in ancient cities.'])
	
	event.addItem('minecraft:music_disc_otherside',
	['Found in ancient cities, or crafted with any coloured rune and disc fragments.'])
	
	event.addItem('minecraft:music_disc_pigstep',
	['Found in the Nether inside piglin bastion remnants. Emanates a strange energy near Nether portals...'])
	
	event.addItem('oreganized:music_disc_structure', 
	['Found in Nether dungeons, or crafted with crushed lead and disc fragments. Or...?'])
	
	event.addItem('berry_good:music_disc_fox', 
	['Foxes can very rarely be found holding this disc in their mouths.'])
	
	event.addItem('ecologics:music_disc_coconut', 
	['Found in buried treasure chests and loot bags.'])
	
	event.addItem('environmental:music_disc_slabrave', 
	['Can be obtained by feeding any of the discs that drop from creepers to a slabfish.'])
	
	event.addItem('neapolitan:music_disc_hullabaloo', 
	['Can be obtained by getting a group of chimpanzees to kill a piglin brute by shooting it with a bananarrow.'])
	
	event.addItem('kubejs:music_disc_death',
	['Dropped by a chicken, duck or turkey when killed by a skeleton.'])
	
	event.addItem('kubejs:music_disc_droopy1',
	['Has a very small chance to be dropped by mobs that can drop their heads, or can be made by crafting one of said heads with disc fragments.'])
	
	event.addItem('kubejs:music_disc_exostep',
	['Found in the §korectudrp sEdxou ortfses, §ror obtained by throwing a §kpsPteig cisd &rthrough a §kehetNr ltorpa.'])
	
	event.addItem('trickytrialspaintingsplusmusic:music_disc_precipice',
	['Found in desert pyramid & jungle temple loot, or inside loot bags.'])
	
	event.addItem('trickytrialspaintingsplusmusic:music_disc_creator', 
	['Found in abandoned mineshaft loot, or inside loot bags.'])
	
	event.addItem('trickytrialspaintingsplusmusic:music_disc_relic', 
	['Found in underwater ruins.'])

// Forge stuff
	event.addItem('miningmaster:gem_forge', 
	['Forges are used to create enchanted tablets or modify various weapons. No, there isn\'t another block called a Fabric.'])
	
	event.addItem('#raspberry_flavoured:all_enchanted_tablets', 
	['Enchanted tablets can apply enchantments to equipment using smithing tables. All of them are made by infusing a blank tablet with ingredients in a forge. Hovering over an enchanted tablet and holding Shift will show a description for their enchantments.'])
	
	event.addItem('#quark:runes', 
	['Runes can be made and/or coloured in forges. They can be applied at an anvil to change the colour of the enchantment glint effect on enchanted items.'])
	
	event.addItem('clash:spear',
	['Electrum spears deal less damage, but can be charged to deal damage to mobs from further away and allow the wielder to dash in the direction they\'re moving when beginning the charge.'])
	
	event.addItem('clash:swept_axe',
	['Netherite broad axes deal less single-target damage and will not function as tools, but will perform a wide sweep attack that deals their full damage to every target caught in the attack.'])
	
	event.addItem('clash:greatblade', 
	['Necromium claymores will not function as tools, but can be charged by holding right-click to unleash a big swipe attack, and striking with their hilt will cause targets to stagger and move backwards. They\'ll also cause mobs to drop their heads frequently.'])
	
	event.addItem('mace_backport:mace',
	['Steel maces are heavy and won\'t deal a lot of damage upfront, but will deal increased damage depending on how many blocks the wielder has fallen before striking a target.'])
	
	event.addItem('kubejs:rose_gold_rapier',
	['Rose gold rapiers deal little damage, but can strike very quickly and will heal half a heart of health for every hit.'])
})