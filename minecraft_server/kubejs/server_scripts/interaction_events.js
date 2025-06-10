// priority: 0

// setting brushable mobs
const featherBrushables = ['minecraft:chicken', 'environmental:duck', 'autumnity:turkey', 'ecologics:penguin']
const stringBrushables = ['minecraft:sheep', 'minecraft:goat']
const friendBrushables = ['minecraft:wolf', 'minecraft:cat']

ItemEvents.entityInteracted('kubejs:copper_brush', function (event) {
// brushing featheries
    if (featherBrushables.includes(event.target.type)) {
		event.player.swing(event.hand, true)
  
		const now = new Date().getTime()
		const last = event.target.persistentData.lastBrushed ?? 0
		
		if (event.target.isBaby()) return
		if ((now - last) < 18e4) return
  
		event.target.persistentData.lastBrushed = now
		
		if (!event.player.isCreative()) {
			event.player.damageHeldItem(event.hand, 1)
        }
		
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
        event.level.spawnParticles('supplementaries:feather', true, event.target.x, event.target.y+0.75, event.target.z, 0.2, 0, 0.2, 3, 0.05)
        event.level.spawnParticles('minecraft:poof', true, event.target.x, event.target.y+0.75, event.target.z, 0.2, 0, 0.2, 3, 0.05)
		let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:feather')
			itemEntity.y = event.target.y + 0.5
			itemEntity.x = event.target.x
			itemEntity.z = event.target.z
			itemEntity.motionY = 0.3
			itemEntity.spawn()
	}
	
// brushing stringies
    if (stringBrushables.includes(event.target.type)) {
		event.player.swing(event.hand, true)
  
		const now = new Date().getTime()
		const last = event.target.persistentData.lastBrushed ?? 0
		
		if (event.target.nbt.Sheared == 1 || event.target.isBaby()) return
		if ((now - last) < 18e4) return
  
		event.target.persistentData.lastBrushed = now
		
		if (!event.player.isCreative()) {
			event.player.damageHeldItem(event.hand, 1)
        }
		
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
        event.level.spawnParticles('minecraft:poof', true, event.target.x, event.target.y+0.75, event.target.z, 0.2, 0, 0.2, 3, 0.05)
		let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('minecraft:string')
			itemEntity.y = event.target.y + 0.5
			itemEntity.x = event.target.x
			itemEntity.z = event.target.z
			itemEntity.motionY = 0.3
			itemEntity.spawn()
	}
	
// brushing yaks
    if (event.target.type === 'environmental:yak') {
		event.player.swing(event.hand, true)
  
		const now = new Date().getTime()
		const last = event.target.persistentData.lastBrushed ?? 0
		
		if (event.target.nbt.Sheared == 1 || event.target.isBaby()) return
		if ((now - last) < 18e4) return
  
		event.target.persistentData.lastBrushed = now
		
		if (!event.player.isCreative()) {
			event.player.damageHeldItem(event.hand, 1)
        }
		
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
        event.level.spawnParticles('minecraft:poof', true, event.target.x, event.target.y+0.75, event.target.z, 0.25, 0, 0.25, 3, 0.05)
		let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('environmental:yak_hair')
			itemEntity.y = event.target.y + 0.65
			itemEntity.x = event.target.x
			itemEntity.z = event.target.z
			itemEntity.motionY = 0.3
			itemEntity.spawn()
	}
	
    // brushing friends
        if (friendBrushables.includes(event.target.type)) {
            event.player.swing(event.hand, true)
      
            const now = new Date().getTime()
            const last = event.target.persistentData.lastBrushed ?? 0
            
            let playerUUID = event.player.getStringUuid()
            if (!event.target.nbt.Owner === playerUUID) return
            if ((now - last) < 18e4) return
      
            event.target.persistentData.lastBrushed = now
            
            if (!event.player.isCreative()) {
                event.player.damageHeldItem(event.hand, 1)
            }
            
            event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
            event.level.spawnParticles('minecraft:poof', true, event.target.x, event.target.y+0.75, event.target.z, 0.2, 0, 0.2, 3, 0.05)
            event.level.spawnParticles('minecraft:heart', true, event.target.x, event.target.y+0.75, event.target.z, 0.2, 0, 0.2, 3, 0.05)
            event.target.mergeNbt({CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ActiveEffects: [{ShowParticles: 1, Id: 10, Duration: 200, Ambient: 0, "forge:id": "minecraft:regeneration", Amplifier: 0}]})
        }
})

// shearing bears
ItemEvents.entityInteracted(event => {
    if (event.item.hasTag('raspberry_flavoured:shears') && event.target.type == "naturalist:bear") {
        event.player.swing(event.hand, true)
        if (event.target.nbt.Sheared == 0 && !event.target.isBaby()) {
            // damage item, shear sound, set bear to sheared and make it angry
            event.player.damageHeldItem(event.hand, 1)
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.sheep.shear', 'players', 1, 1)
			event.target.mergeNbt({Sheared:1})
            if (!event.player.isCreative()) {
				event.target.mergeNbt({AngerTime:600})
				event.target.setTarget(event.player)
			}
			
			// minimum and maximum amount of fur drops
			let furMax = 3
			let furMin = 1
			
			// spawn fur
			let itemEntity = event.level.createEntity("item")
			itemEntity.item = ('naturalist:bear_fur')
			itemEntity.y = event.target.y + 0.5
			itemEntity.x = event.target.x
			itemEntity.z = event.target.z
			itemEntity.item.count = Math.floor(Math.random() * (furMax - furMin + 1) + furMin)
			itemEntity.motionY = 0.36
			itemEntity.spawn()
        }
    }
})

// taming ocelots
ItemEvents.entityInteracted(event => {
    if (event.item.id === 'kubejs:cat_food' && event.target.type === 'minecraft:ocelot') {
		event.player.swing(event.hand, true)

        if (event.target.nbt.Trusting == 1) {
		    if (!event.player.isCreative()) {
                event.item.count --
                event.player.giveInHand('minecraft:bowl')
            }

            const catVars = [
                "minecraft:white",
                "minecraft:black",
                "minecraft:red",
                "minecraft:siamese",
                "minecraft:british_shorthair",
                "minecraft:calico",
                "minecraft:persian",
                "minecraft:ragdoll",
                "minecraft:tabby",
                "minecraft:all_black",
                "minecraft:jellie",
                "moremobvariants:doug",
                "moremobvariants:gray_tabby",
                "moremobvariants:tortoiseshell"
            ]
            const random = Math.floor(Math.random() * catVars.length)

            let ocelotData = event.target.nbt
            delete ocelotData.UUID

            event.server.runCommandSilent(`particle minecraft:heart ${event.target.x} ${event.target.y} ${event.target.z} 0.5 0.25 0.5 0.125 5 force`)

            let cat = event.player.level.getBlock(event.target.x, event.target.y, event.target.z).createEntity("cat")
            cat.mergeNbt(ocelotData)
            cat.mergeNbt({Owner: event.player.stringUuid})
            cat.mergeNbt({VariantID: catVars[random]})
            cat.mergeNbt({ActiveEffects: [{"forge:id": "minecraft:speed", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 1, Amplifier: 0}, {"forge:id": "minecraft:regeneration", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 10, Amplifier: 0}, {"forge:id": "minecraft:resistance", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 11, Amplifier: 0}]})
            cat.spawn()
            event.target.discard()
        }
    }
})

// feeding cat food
ItemEvents.entityInteracted(event => {
    if (event.item.id === 'kubejs:cat_food') {
        if (event.target.type === 'minecraft:cat') {
		event.player.swing(event.hand, true)
        if (!event.player.isCreative()) {
            event.item.count --
            event.player.giveInHand('minecraft:bowl')
        }
		event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'entity.generic.eat', 'players', 1, 1)
        event.server.runCommandSilent(`particle farmersdelight:star ${event.target.x} ${event.target.y+0.5} ${event.target.z} 0.2 0 0.2 0.05 4 force`)
        event.target.mergeNbt({ActiveEffects: [{"forge:id": "minecraft:speed", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 1, Amplifier: 0}, {"forge:id": "minecraft:regeneration", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 10, Amplifier: 0}, {"forge:id": "minecraft:resistance", Ambient: 0, CurativeItems: [{id: "minecraft:milk_bucket", Count: 1}], ShowIcon: 1, ShowParticles: 1, Duration: 6000, Id: 11, Amplifier: 0}]})
        }
    }
})

// oxidizing copper golems
ItemEvents.entityInteracted(event => {
    if (event.item.id === "additionaladditions:copper_patina" && event.target.type == "caverns_and_chasms:copper_golem") {
        event.player.swing(event.hand, true)
        if (event.target.nbt.Oxidation == 0 && event.target.nbt.Waxed == 0) {
            if (!event.player.isCreative()) {
				event.item.count --
			}
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_patina.apply', 'players', 1, 1)
			event.target.mergeNbt({Oxidation:1,OxidationTime:350000})
        } else if (event.target.nbt.Oxidation == 1 && event.target.nbt.Waxed == 0) {
            if (!event.player.isCreative()) {
				event.item.count --
			}
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_patina.apply', 'players', 1, 1)
			event.target.mergeNbt({Oxidation:2,OxidationTime:350000})
        } else if (event.target.nbt.Oxidation == 2 && event.target.nbt.Waxed == 0) {
            if (!event.player.isCreative()) {
				event.item.count --
			}
			event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'kubejs:copper_patina.apply', 'players', 1, 1)
            let golemData = event.target.nbt
            delete golemData.UUID

            let golem = event.player.level.getBlock(event.target.x, event.target.y, event.target.z).createEntity("caverns_and_chasms:oxidized_copper_golem")
            golem.mergeNbt(golemData)
            golem.spawn()
            event.target.discard()
        }
    }
})

// reattach snow golem pumpkin
ItemEvents.entityInteracted(event => {
    if (event.target.type === 'minecraft:snow_golem') {
        if (event.item.id === "minecraft:carved_pumpkin") {
            event.player.swing(event.hand, true)
            if (event.target.nbt.Pumpkin == 0) {
                event.level.playSound(null, event.target.x, event.target.y, event.target.z, 'auditory:block.gourd.hit', 'players', 1, 1)
                event.target.mergeNbt({Pumpkin:1})
                if (!event.player.isCreative()) {
                    event.item.count --
                }
            }
        }
    }
})

// loot bag item interaction
ItemEvents.rightClicked(event => {
    if (event.item.id === 'kubejs:loot_bag') {
	// remove one loot bag if the player isnt in creative
		if (!event.player.isCreative()) {
		event.item.count --
		}
		// swing arm, play the bundle sound and spawn loot
		event.player.swing(event.hand, true)
		event.level.playSound(null, event.player.x, event.player.y, event.player.z, 'item.bundle.drop_contents', 'players', 1, 1)
		event.server.runCommandSilent(`execute as ${event.entity.username} run loot spawn ${event.player.x} ${event.player.y+0.2} ${event.player.z} loot additionaladditions:mysterious_bundle`)
    }
})

// recovery compass item interaction
ItemEvents.rightClicked(event => {
    if (event.item.id === 'minecraft:recovery_compass') {
		event.player.swing(event.hand, true)
        // "event.player.x.toFixed(3)" and "event.player.z.toFixed(3)" are the player's X and Z coords cut off at 3 decimals, like how caverns and chasms does it
		event.player.displayClientMessage('Latitude: ' + event.player.x.toFixed(3) + ', Longitude: ' + event.player.z.toFixed(3), true)
    }
})

// soap & brush interactions
BlockEvents.rightClicked(event => {
    // set which block turns into what
    global.soapingMap = {
        'quark:dirty_glass': 'minecraft:glass',
        'quark:dirty_glass_pane': 'minecraft:glass_pane'
    }
    global.brushingMap = {
        'quark:dirty_glass': 'minecraft:glass',
        'quark:dirty_glass_pane': 'minecraft:glass_pane'
    }
    Object.keys(global.soapingMap).forEach((value) => {
        if (event.item.id === 'supplementaries:soap') {
            if (event.block.id === value) {
                event.server.schedule(2, callback => {
                    event.player.stopUsingItem()
                })
                // remove the soap from the player's hand
                if (!event.player.isCreative()) {
                event.item.count --
                }
                // swing hand, damage item, play sounds and transform block
                event.player.swing(event.hand, true)
				event.server.runCommandSilent(`particle supplementaries:suds ${event.block.x} ${event.block.y+0.5} ${event.block.z} 0.5 0.25 0.5 0.01 15 force`)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'item.honeycomb.wax_on', 'players', 1, 1)
                event.block.set(global.soapingMap[event.block.id])
            }  
        }
    })
    Object.keys(global.brushingMap).forEach((value) => {
        if (event.item.id === 'kubejs:copper_brush') {
            if (event.block.id === value) {
                // damage brush
                if (!event.player.isCreative()) {
                event.player.damageHeldItem(event.hand, 1)
                }
                // swing hand, damage item, play sounds and transform block
                event.player.swing(event.hand, true)
				event.server.runCommandSilent(`particle wax_off ${event.block.x} ${event.block.y+0.5} ${event.block.z} 0.5 0.25 0.5 0.01 15 force`)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'kubejs:copper_brush.brush', 'players', 1, 1)
                event.block.set(global.brushingMap[event.block.id])
            }  
        }
    })
})

// custom right click on block with water bottle interactions
BlockEvents.rightClicked(event => {
    // set which block turns into what
    global.wateringMap = {
        'minecraft:sand': 'minecraft:clay',
        'minecraft:red_sand': 'minecraft:clay',
        'atmospheric:arid_sand': 'minecraft:clay',
        'atmospheric:red_arid_sand': 'minecraft:clay'
    }
    Object.keys(global.wateringMap).forEach((value) => {
        if (event.item.id === 'minecraft:potion' && event.item.nbt.Potion == 'minecraft:water') {
            if (event.block.id === value) {
                event.server.schedule(2, callback => {
                    event.player.stopUsingItem()
                })
                // remove the water from the player's hand and give back an empty bottle if theyre not in creative
                if (!event.player.isCreative()) {
                event.item.count --
                event.player.giveInHand('minecraft:glass_bottle')
                }
                // swing hand, damage item, play sounds and transform block
                event.player.swing(event.hand, true)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'item.bottle.empty', 'players', 1, 1)
                event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'entity.generic.splash', 'players', 1, 1)
                event.block.set(global.wateringMap[event.block.id])
            }  
        }
    })
    if (event.item.id === 'minecraft:potion' && event.item.nbt.Potion == 'minecraft:water') {
        if (event.block.hasTag('raspberry_flavoured:all_wood_logs') && !event.block.hasTag('raspberry_flavoured:driftwood')) {
            let props = event.block.getProperties()
            event.server.schedule(2, callback => {
                event.player.stopUsingItem()
            })
            if (!event.player.isCreative()) {
            event.item.count --
            event.player.giveInHand('minecraft:glass_bottle')
            }
            event.player.swing(event.hand, true)
            event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'item.bottle.empty', 'players', 1, 1)
            event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'entity.generic.splash', 'players', 1, 1)
            if (event.block.hasTag('raspberry_flavoured:logs')) {
                event.block.set('upgrade_aquatic:driftwood_log', props)
            }
            if (event.block.hasTag('raspberry_flavoured:wood')) {
                event.block.set('upgrade_aquatic:driftwood', props)
            }
            if (event.block.hasTag('raspberry_flavoured:stripped_logs')) {
                event.block.set('upgrade_aquatic:stripped_driftwood_log', props)
            }
            if (event.block.hasTag('raspberry_flavoured:stripped_wood')) {
                event.block.set('upgrade_aquatic:stripped_driftwood', props)
            }
        } 
    }
})

// latex wood stripping
BlockEvents.rightClicked([
    'minecraft:jungle_log',
    'minecraft:jungle_wood',
    'atmospheric:rosewood_log',
    'atmospheric:rosewood'
], event => {
    if (event.item.hasTag('forge:tools/axes')) {
        let props = event.block.getProperties()
        let latexChance = Math.floor(Math.random() * (4 - 1 + 1) + 1)
        if (latexChance === 4) {
            event.server.schedule(1, callback => {
                if (event.block.id === 'minecraft:jungle_log') {
                    event.block.set('kubejs:latex_jungle_log', props)
                }
                if (event.block.id === 'minecraft:jungle_wood') {
                    event.block.set('kubejs:latex_jungle_wood', props)
                }
                if (event.block.id === 'atmospheric:rosewood_log') {
                    event.block.set('kubejs:latex_rosewood_log', props)
                }
                if (event.block.id === 'atmospheric:rosewood') {
                    event.block.set('kubejs:latex_rosewood', props)
                }
            })
        }
    }
})

// latex wood bottling
BlockEvents.rightClicked([
    'kubejs:latex_jungle_log',
    'kubejs:latex_jungle_wood',
    'kubejs:latex_rosewood_log',
    'kubejs:latex_rosewood'
], event => {
    if (event.item.id === 'minecraft:glass_bottle') {
        let props = event.block.getProperties()
        if (!event.player.isCreative()) {
            event.item.count --
        }
        event.player.swing(event.hand, true)
        event.player.giveInHand('kubejs:latex_bottle')
        event.level.playSound(null, event.block.x, event.block.y, event.block.z, 'item.bottle.fill', 'players', 1, 1)
        if (event.block.id === 'kubejs:latex_jungle_log') {
            event.block.set('minecraft:stripped_jungle_log', props)
        }
        if (event.block.id === 'kubejs:latex_jungle_wood') {
            event.block.set('minecraft:stripped_jungle_wood', props)
        }
        if (event.block.id === 'kubejs:latex_rosewood_log') {
            event.block.set('atmospheric:stripped_rosewood_log', props)
        }
        if (event.block.id === 'kubejs:latex_rosewood') {
            event.block.set('atmospheric:stripped_rosewood', props)
        }
    }
})

// bee disc interaction
BlockEvents.rightClicked(event => {
    if (event.block.hasTag('minecraft:beehives')) {
        if (event.item.hasTag('forge:shears')) {
            let honeyLevel = event.level.getBlock(event.block.x, event.block.y, event.block.z).properties.get("honey_level")
            if (honeyLevel == 5) {
                let discChanceFirst = Math.floor(Math.random() * (200 - 1 + 1) + 1)
                let discChanceSecond = Math.floor(Math.random() * (200 - 1 + 1) + 1)
                if (discChanceFirst == discChanceSecond) {
                    let itemEntity = event.level.createEntity("item")
                    itemEntity.item = ('windswept:music_disc_bumblebee')
                    itemEntity.y = event.block.y + 1
                    itemEntity.x = event.block.x
                    itemEntity.z = event.block.z
                    itemEntity.item.count = 1
                    itemEntity.motionY = 0.36
                    itemEntity.spawn()
                }
            }
        }
    }
})

// right click on water interaction (WIP)
ItemEvents.rightClicked(event => {
    // check held item
    if (event.item.id === 'minecraft:barrier') {
        // check player looking at water
        if (event.player.rayTrace().block.id === 'minecraft:water') {
            // subtract held item if not in creative, play bottle fill sound, give result item
            if (!event.player.isCreative()) {
                event.item.count --
            }
            event.player.swing(event.hand, true)
            event.server.runCommandSilent(`playsound minecraft:item.bottle.fill block @p ${event.player.rayTrace().block.x} ${event.player.rayTrace().block.y} ${event.player.rayTrace().block.z}`)
            event.player.giveInHand('minecraft:structure_void')
        } 
    }
})

// cancel interactions
BlockEvents.rightClicked(event => {
    if (event.item.id === 'spelunkery:portal_fluid_bottle') {
        if (event.block.id === 'minecraft:cauldron' || event.block.id === 'spelunkery:portal_cauldron') {
            event.cancel()
        }  
    }
    if (event.item.id === 'minecraft:music_disc_11') {
        if (event.block.id === 'oreganized:molten_lead_cauldron') {
            event.cancel()
        }  
    }
})


// splash/lingering pots cooldown
ItemEvents.rightClicked('minecraft:splash_potion', event => {
    event.player.addItemCooldown('minecraft:splash_potion', 200)
})

ItemEvents.rightClicked('minecraft:lingering_potion', event => {
    event.player.addItemCooldown('minecraft:lingering_potion', 300)
})


// snow/ashballs cooldown
ItemEvents.rightClicked('minecraft:snowball', event => {
    event.player.addItemCooldown('minecraft:snowball', 5)
})

ItemEvents.rightClicked('raspberry:ashball', event => {
    event.player.addItemCooldown('raspberry:ashball', 5)
})

// cancel custom exopearl throwing if structure isnt found
const $Registry = Java.loadClass('net.minecraft.core.Registry')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')        
ItemEvents.rightClicked("kubejs:spirited_exopearl", event => {
    const {level,player} = event
    let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'raspberry_flavoured:spirited_exopearl_located')
    let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
    if (foundPos == null) {
        event.cancel()
    }
})

// creeper spores advancement
ItemEvents.rightClicked('savage_and_ravage:creeper_spores', event => {
    event.server.runCommandSilent(`advancement grant ${event.player.username} only raspberryflavoured:creeper_spores_use`)
})

// message in a bottle
ItemEvents.rightClicked('aquaculture:message_in_a_bottle', event => {
    event.player.swing(event.hand, true)
    event.server.runCommandSilent(`particle minecraft:item glass_bottle ${event.player.x} ${event.player.y+1} ${event.player.z} 0.1 0.1 0.1 0.1 20 force`)
    if (!event.player.isCreative()) {
        event.server.schedule(1, callback => {
            event.player.giveInHand('quark:clear_shard')
        })
    }
})