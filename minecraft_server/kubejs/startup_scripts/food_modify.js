// priority: 0

ItemEvents.modification(event => {
	event.modify('minecraft:beetroot', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('nethersdelight:hoglin_sirloin', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5)
        }
    })
	event.modify('minecraft:cooked_beef', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5)
        }
    })
	event.modify('minecraft:cooked_porkchop', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5)
        }
    })
	event.modify('minecraft:cooked_cod', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5)
        }
    })
	event.modify('minecraft:cooked_salmon', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.6)
        }
    })
	event.modify('minecraft:cooked_chicken', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.5)
        }
    })
	event.modify('minecraft:baked_potato', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.4)
        }
    })
	event.modify('minecraft:rabbit', item => {
        item.foodProperties = food => {
            food.hunger(2)
        }
    })
	event.modify('minecraft:cooked_rabbit', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.4).fastToEat()
        }
    })
	event.modify('minecraft:cooked_mutton', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5)
        }
    })
	event.modify('windswept:cooked_goat', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.65)
        }
    })
	event.modify('environmental:cooked_venison', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5)
        }
    })
	event.modify('environmental:duck', item => {
        item.foodProperties = food => {
            food.hunger(2)
        }
    })
	event.modify('environmental:cooked_duck', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.5)
        }
    })
	event.modify('berry_good:sweet_berry_mince', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.25)
        }
    })
	event.modify('berry_good:sweet_berry_meatballs', item => {
        item.foodProperties = food => {
            food.hunger(7).saturation(0.6)
        }
    })
	event.modify('buzzier_bees:honey_apple', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5)
        }
    })
	event.modify('buzzier_bees:honey_bread', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.6)
        }
    })
	event.modify('upgrade_aquatic:mulberry_bread', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5).effect('windswept:thorns', 500, 1, 100)
        }
    })
	event.modify('quark:cooked_crab_leg', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.6)
        }
    })
	event.modify('farmersdelight:beef_patty', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.5)
        }
    })
	event.modify('farmersdelight:cooked_bacon', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.5)
        }
    })
	event.modify('farmersdelight:cooked_cod_slice', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.5)
        }
    })
	event.modify('farmersdelight:cooked_salmon_slice', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.6)
        }
    })
	event.modify('farmersdelight:cooked_chicken_cuts', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.6)
        }
    })
	event.modify('farmersdelight:cooked_mutton_chops', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.5)
        }
    })
	event.modify('farmersdelight:ham', item => {
        item.foodProperties = food => {
            food.hunger(4)
        }
    })
	event.modify('farmersdelight:smoked_ham', item => {
        item.foodProperties = food => {
            food.hunger(8)
        }
    })
	event.modify('abnormals_delight:duck_fillet', item => {
        item.foodProperties = food => {
            food.hunger(1)
        }
    })
	event.modify('abnormals_delight:cooked_duck_fillet', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.6)
        }
    })
	event.modify('abnormals_delight:cooked_venison_shanks', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.5)
        }
    })
	event.modify('upgrade_aquatic:cooked_pike', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.5)
        }
    })
	event.modify('abnormals_delight:cooked_pike_slice', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.5)
        }
    })
	event.modify('upgrade_aquatic:cooked_lionfish', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.6)
        }
    })
	event.modify('upgrade_aquatic:cooked_perch', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.55)
        }
    })
	event.modify('minecraft:carrot', item => {
        item.foodProperties = food => {
            food.hunger(2)
        }
    })
	event.modify('minecraft:apple', item => {
        item.foodProperties = food => {
            food.hunger(3)
        }
    })
	event.modify('minecraft:bread', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5)
        }
    })
	event.modify('culturaldelights:tortilla', item => {
        item.foodProperties = food => {
            food.hunger(3)
        }
    })
	event.modify('culturaldelights:tortilla_chips', item => {
        item.foodProperties = food => {
            food.hunger(1).saturation(0.5)
        }
    })
	event.modify('atmospheric:roasted_yucca_fruit', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.4)
        }
    })
	event.modify('neapolitan:roasted_adzuki_beans', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.1).removeEffect('neapolitan:harmony').effect('neapolitan:harmony', 80, 0, 100).fastToEat()
        }
    })
	event.modify('culturaldelights:avocado', item => {
        item.foodProperties = food => {
            food.hunger(3)
        }
    })
	event.modify('culturaldelights:cut_avocado', item => {
        item.foodProperties = food => {
            food.hunger(1)
        }
    })
	event.modify('minecraft:honey_bottle', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.4).effect('neapolitan:sugar_rush', 600, 0, 1)
        }
    })
	event.modify('minecraft:honeycomb', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.1).effect('neapolitan:sugar_rush', 200, 0, 0.75)
        }
    })
	event.modify('upgrade_aquatic:mulberry', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.5).fastToEat()
        }
    })
	event.modify('upgrade_aquatic:mulberry_jam_bottle', item => {
        item.foodProperties = food => {
            food.saturation(0.35).effect('windswept:thorns', 1000, 1, 0.75).effect('neapolitan:sugar_rush', 600, 0, 1)
        }
    })
	event.modify('farmersdelight:pumpkin_slice', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.7).fastToEat()
        }
    })
	event.modify('minecraft:melon_slice', item => {
        item.foodProperties = food => {
            food.effect('atmospheric:spitting', 140, 0, 0.5).fastToEat()
        }
    })
	event.modify('farmersdelight:melon_popsicle', item => {
        item.foodProperties = food => {
            food.effect('atmospheric:spitting', 180, 0, 0.4).fastToEat()
        }
    })
	event.modify('minecraft:sweet_berries', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('minecraft:glow_berries', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('windswept:goat_shanks', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.65).fastToEat()
        }
    })
	event.modify('windswept:cooked_goat_shanks', item => {
        item.foodProperties = food => {
            food.fastToEat().hunger(2).saturation(0.65)
        }
    })
	event.modify('neapolitan:vanilla_fudge', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('brewinandchewin:cocoa_fudge', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('neapolitan:strawberries', item => {
        item.foodProperties = food => {
            food.hunger(2).fastToEat()
        }
    })
	event.modify('neapolitan:white_strawberries', item => {
        item.foodProperties = food => {
            food.hunger(3).fastToEat()
        }
    })
	event.modify('neapolitan:chocolate_strawberries', item => {
        item.foodProperties = food => {
            food.hunger(6)
        }
    })
	event.modify('neapolitan:strawberry_bean_bonbons', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('neapolitan:strawberry_scones', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('atmospheric:aloe_leaves', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('upgrade_aquatic:boiled_blue_pickerelweed', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('upgrade_aquatic:boiled_purple_pickerelweed', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('autumnity:foul_berries', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('brewinandchewin:kimchi', item => {
        item.foodProperties = food => {
            food.hunger(3).fastToEat().effect('mynethersdelight:b_pungent', 400, 0, 1)
        }
    })
	event.modify('ecologics:coconut_slice', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('ecologics:cooked_prickly_pear', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.5).fastToEat()
        }
    })
	event.modify('ecologics:prickly_pear', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.5)
        }
    })
	event.modify('create_confectionery:marshmallow', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('create_confectionery:candy_cane', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('create_confectionery:honey_candy', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('neapolitan:dried_vanilla_pods', item => {
        item.foodProperties = food => {
            food.fastToEat()
        }
    })
	event.modify('windswept:chestnuts', item => {
        item.foodProperties = food => {
            food.hunger(1).fastToEat()
        }
    })
	event.modify('windswept:roasted_chestnuts', item => {
        item.foodProperties = food => {
            food.hunger(3).fastToEat()
        }
    })
	event.modify('berry_good:glowgurt', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.7).fastToEat()
        }
    })
	event.modify('atmospheric:passionfruit_sorbet', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.45).removeEffect('slowness')
        }
    })
	event.modify('create_confectionery:marshmallow_on_a_stick', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.2)
        }
    })
	event.modify('create_confectionery:caramelized_marshmellow_on_a_stick', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.4)
        }
    })
	event.modify('minecraft:golden_carrot', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.75).effect('night_vision', 1200, 0, 100).alwaysEdible()
        }
    })
	event.modify('minecraft:golden_apple', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.6).removeEffect('absorption').removeEffect('regeneration').effect('regeneration', 300, 0, 1).effect('absorption', 400, 0, 1)
        }
    })
	event.modify('minecraft:enchanted_golden_apple', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:panacea', 600, 0, 100)
        }
    })
	event.modify('brewinandchewin:pizza_slice', item => {
        item.foodProperties = food => {
            food.hunger(8).saturation(0.6)
        }
    })
	event.modify('incubation:fried_egg', item => {
        item.foodProperties = food => {
            food.hunger(2).fastToEat()
        }
    })
	event.modify('brewinandchewin:ham_and_cheese_sandwich', item => {
        item.foodProperties = food => {
            food.hunger(10).saturation(0.75).effect('kubejs:satiation', 2400, 0, 1)
        }
    })
	event.modify('brewinandchewin:kippers', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.4)
        }
    })
	event.modify('farmersrespite:nether_wart_sourdough', item => {
        item.foodProperties = food => {
            food.hunger(5)
        }
    })
	event.modify('minecraft:cookie', item => {
        item.foodProperties = food => {
            food.effect('neapolitan:sugar_rush', 300, 0, 0.35)
        }
    })
	event.modify('culturaldelights:hearty_salad', item => {
        item.foodProperties = food => {
            food.hunger(9).saturation(0.7).removeEffect('farmersdelight:nourishment').effect('regeneration', 100, 0, 100).effect('kubejs:satiation', 300, 0, 1)
        }
    })
	event.modify('create:sweet_roll', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.65).effect('farmersdelight:comfort', 1800, 0, 100)
        }
    })
	event.modify('miners_delight:baked_squid', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.6)
        }
    })
	event.modify('abnormals_delight:maple_glazed_bacon', item => {
        item.foodProperties = food => {
            food.hunger(7).saturation(0.8).removeEffect('resistance').effect('resistance', 300, 0, 100)
        }
    })
	event.modify('culturaldelights:eggplant_burger', item => {
        item.foodProperties = food => {
            food.hunger(9).saturation(0.7)
        }
    })
	event.modify('culturaldelights:smoked_eggplant', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.4)
        }
    })
	event.modify('culturaldelights:smoked_cut_eggplant', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.4)
        }
    })
	event.modify('windswept:wild_berries', item => {
        item.foodProperties = food => {
            food.hunger(1).saturation(0.1).fastToEat()
        }
    })
	event.modify('windswept:wild_berry_juice', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.3).removeEffect('regeneration').effect('upgrade_aquatic:vibing', 1200, 0, 100)
        }
    })
	event.modify('farmersdelight:bone_broth', item => {
        item.foodProperties = food => {
            food.hunger(5)
        }
    })
	event.modify('farmersdelight:nether_salad', item => {
        item.foodProperties = food => {
            food.hunger(4)
        }
    })
	event.modify('minecraft:rabbit_stew', item => {
        item.foodProperties = food => {
            food.hunger(12)
        }
    })
	event.modify('minecraft:glistering_melon_slice', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.65).effect('atmospheric:spitting', 140, 1, 0.5).alwaysEdible()
        }
    })
	event.modify('farmersdelight:hot_cocoa', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100).alwaysEdible()
        }
    })
	event.modify('create_confectionery:hot_chocolate_bottle', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100)
        }
    })
	event.modify('create_confectionery:soothing_hot_chocolate', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 3000, 0, 100)
        }
    })
	event.modify('farmersrespite:green_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100)
        }
    })
	event.modify('farmersrespite:yellow_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100)
        }
    })
	event.modify('farmersrespite:black_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100)
        }
    })
	event.modify('farmersrespite:coffee', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 2400, 0, 100)
        }
    })
	event.modify('farmersrespite:long_green_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 3600, 0, 100)
        }
    })
	event.modify('farmersrespite:long_yellow_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 3600, 0, 100)
        }
    })
	event.modify('farmersrespite:long_black_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 3600, 0, 100)
        }
    })
	event.modify('farmersrespite:long_coffee', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 3600, 0, 100)
        }
    })
	event.modify('farmersrespite:strong_green_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 1200, 0, 100)
        }
    })
	event.modify('farmersrespite:strong_yellow_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 1200, 0, 100)
        }
    })
	event.modify('farmersrespite:strong_black_tea', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 1200, 0, 100)
        }
    })
	event.modify('farmersrespite:strong_coffee', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:cold_resistance', 1200, 0, 100)
        }
    })
	event.modify('respiteful:mint_green_tea', item => {
        item.foodProperties = food => {
            food.alwaysEdible()
        }
    })
	event.modify('respiteful:vanilla_milk_tea', item => {
        item.foodProperties = food => {
            food.alwaysEdible()
        }
    })
	event.modify('respiteful:adzuki_milk_tea', item => {
        item.foodProperties = food => {
            food.alwaysEdible()
        }
    })
	event.modify('respiteful:mocha_coffee', item => {
        item.foodProperties = food => {
            food.alwaysEdible()
        }
    })
	event.modify('ecologics:tropical_stew', item => {
        item.foodProperties = food => {
            food.effect('farmersdelight:comfort', 3600, 0, 100)
        }
    })
	event.modify('culturaldelights:pufferfish_roll', item => {
        item.foodProperties = food => {
            food.effect('water_breathing', 1200, 0, 100).effect('upgrade_aquatic:repellence', 1200, 0, 100)
        }
    })
	event.modify('spelunkery:button_mushroom', item => {
        item.foodProperties = food => {
            food.hunger(1).saturation(0.6).removeEffect('haste')
        }
    })
	event.modify('spelunkery:crimini', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.65).effect('nausea', 300, 0, 0.1)
        }
    })
	event.modify('spelunkery:portabella', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.7).removeEffect('haste').effect('nausea', 300, 0, 0.1)
        }
    })
	event.modify('mynethersdelight:hot_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('fire_resistance').effect('cofh_core:slimed', 900, 0, 100)
        }
    })
	event.modify('mynethersdelight:hot_cream_cone', item => {
        item.foodProperties = food => {
            food.removeEffect('fire_resistance').effect('cofh_core:slimed', 300, 0, 100)
        }
    })
	event.modify('abnormals_delight:escargot', item => {
        item.foodProperties = food => {
            food.effect('cofh_core:slimed', 600, 0, 100)
        }
    })
	event.modify('create:chocolate_glazed_berries', item => {
        item.foodProperties = food => {
            food.hunger(5).effect('neapolitan:sugar_rush', 800, 2, 100)
        }
    })
	event.modify('create_confectionery:chocolate_glazed_marshmallow', item => {
        item.foodProperties = food => {
            food.hunger(3).effect('neapolitan:sugar_rush', 800, 2, 100)
        }
    })
	event.modify('create_confectionery:bar_of_white_chocolate', item => {
        item.foodProperties = food => {
            food.hunger(4)
        }
    })
	event.modify('create_confectionery:white_chocolate_glazed_berries', item => {
        item.foodProperties = food => {
            food.hunger(5)
        }
    })
	event.modify('create_confectionery:white_chocolate_glazed_marshmallow', item => {
        item.foodProperties = food => {
            food.hunger(3)
        }
    })
	event.modify('farmersrespite:green_tea_cookie', item => {
        item.foodProperties = food => {
            food.fastToEat().removeEffect('respiteful:vitality').effect('respiteful:vitality', 300, 0, 0.35)
        }
    })
	event.modify('farmersdelight:sweet_berry_cookie', item => {
        item.foodProperties = food => {
            food.effect('windswept:thorns', 600, 0, 0.5)
        }
    })
	event.modify('farmersdelight:honey_cookie', item => {
        item.foodProperties = food => {
            food.effect('farmersdelight:comfort', 300, 0, 0.35)
        }
    })
	event.modify('abnormals_delight:cherry_cookie', item => {
        item.foodProperties = food => {
            food.effect('neapolitan:harmony', 160, 0, 0.4)
        }
    })
	event.modify('abnormals_delight:maple_cookie', item => {
        item.foodProperties = food => {
            food.effect('resistance', 240, 0, 0.35)
        }
    })
	event.modify('abnormals_delight:vanilla_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:chocolate_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:banana_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:mint_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:strawberry_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:adzuki_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('abnormals_delight:yucca_gateau_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('farmersdelight:cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('farmersrespite:coffee_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('respiteful:green_tea_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('respiteful:yellow_tea_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('respiteful:black_tea_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('create_central_kitchen:honey_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('neapolitan:mint_candies', item => {
        item.foodProperties = food => {
            food.hunger(2).removeEffect('neapolitan:berserking').effect('neapolitan:berserking', 300, 0, 100)
        }
    })
	event.modify('farmersrespite:rose_hip_pie_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('regeneration').effect('brewinandchewin:sweet_heart', 600, 0, 100)
        }
    })
	event.modify('farmersrespite:rose_hip_tea', item => {
        item.foodProperties = food => {
            food.removeEffect('regeneration').effect('brewinandchewin:sweet_heart', 600, 0, 100)
        }
    })
	event.modify('farmersrespite:strong_rose_hip_tea', item => {
        item.foodProperties = food => {
            food.removeEffect('regeneration').effect('brewinandchewin:sweet_heart', 600, 1, 100)
        }
    })
	event.modify('farmersrespite:long_rose_hip_tea', item => {
        item.foodProperties = food => {
            food.removeEffect('regeneration').effect('brewinandchewin:sweet_heart', 900, 0, 100)
        }
    })
	event.modify('nethersdelight:strider_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('fire_resistance').effect('poison', 400, 0, 70)
        }
    })
	event.modify('nethersdelight:ground_strider', item => {
        item.foodProperties = food => {
            food.removeEffect('fire_resistance')
        }
    })
	event.modify('atmospheric:passionfruit_tart', item => {
        item.foodProperties = food => {
            food.hunger(5).saturation(0.4).effect('farmersdelight:comfort', 1200, 0, 100).effect('atmospheric:spitting', 400, 0, 100)
        }
    })
	event.modify('neapolitan:chocolate_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').effect('cofh_core:chilled', 100, 0, 70)
        }
    })
	event.modify('neapolitan:strawberry_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').effect('cofh_core:chilled', 100, 0, 70)
        }
    })
	event.modify('neapolitan:vanilla_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').removeEffect('neapolitan:vanilla_scent').effect('cofh_core:chilled', 100, 0, 100).effect('neapolitan:vanilla_scent', 400, 0, 100)
        }
    })
	event.modify('neapolitan:banana_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').effect('cofh_core:chilled', 100, 0, 70)
        }
    })
	event.modify('neapolitan:mint_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').effect('cofh_core:chilled', 100, 0, 70)
        }
    })
	event.modify('neapolitan:adzuki_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').effect('cofh_core:chilled', 100, 0, 70)
        }
    })
	event.modify('neapolitan:neapolitan_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').removeEffect('neapolitan:vanilla_scent').effect('cofh_core:chilled', 140, 0, 100).effect('neapolitan:vanilla_scent', 200, 0, 100)
        }
    })
	event.modify('respiteful:green_tea_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').effect('cofh_core:chilled', 100, 0, 70)
        }
    })
	event.modify('respiteful:yellow_tea_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').effect('cofh_core:chilled', 100, 0, 70)
        }
    })
	event.modify('respiteful:black_tea_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').removeEffect('respiteful:maturity').effect('cofh_core:chilled', 100, 0, 100).effect('respiteful:maturity', 600, 1, 100)
        }
    })
	event.modify('respiteful:coffee_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').effect('cofh_core:chilled', 100, 0, 70)
        }
    })
	event.modify('respiteful:respiteful_ice_cream', item => {
        item.foodProperties = food => {
            food.removeEffect('slowness').removeEffect('respiteful:maturity').effect('cofh_core:chilled', 140, 0, 100).effect('respiteful:maturity', 900, 0, 100)
        }
    })
	event.modify('sob:propelpearl_caviar', item => {
        item.foodProperties = food => {
            food.saturation(0.5).removeEffect('fire_resistance').effect('regeneration', 100, 0, 100).effect('fire_resistance', 300, 0, 100)
        }
    })
	event.modify('sob:cinder_bread', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.5).removeEffect('hunger').effect('weakness', 300, 0, 100)
        }
    })
	event.modify('sob:caldera_roll', item => {
        item.foodProperties = food => {
            food.hunger(6).saturation(0.65).removeEffect('hunger').removeEffect('fire_resistance').effect('mynethersdelight:b_pungent', 300, 1, 100).effect('weakness', 300, 0, 100)
        }
    })
	event.modify('neapolitan:strawberry_banana_smoothie', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.6).removeEffect('neapolitan:agility').effect('neapolitan:agility', 200, 0, 100).fastToEat()
        }
    })
	event.modify('sob:mulberry_smoothie', item => {
        item.foodProperties = food => {
            food.hunger(2).removeEffect('regeneration').effect('upgrade_aquatic:vibing', 200, 0, 100).fastToEat()
        }
    })
	event.modify('sob:aloe_tea', item => {
        item.foodProperties = food => {
            food.hunger(0).removeEffect('atmospheric:relief').removeEffect('respiteful:vitality').effect('atmospheric:relief', 1200, 0, 100).effect('respiteful:vitality', 1200, 0, 100)
        }
    })
	event.modify('sob:exotic_fruit_salad', item => {
        item.foodProperties = food => {
            food.saturation(0.5).removeEffect('atmospheric:spitting').effect('atmospheric:spitting', 140, 0, 100).effect('glowing', 300, 0, 100).effect('upgrade_aquatic:vibing', 200, 0, 100)
        }
    })
	event.modify('sob:nether_nectar', item => {
        item.foodProperties = food => {
            food.hunger(0).removeEffect('fire_resistance').removeEffect('respiteful:tenacity').effect('fire_resistance', 300, 0, 100).effect('respiteful:tenacity', 1200, 0, 100)
        }
    })
	event.modify('sob:sweet_berry_smoothie', item => {
        item.foodProperties = food => {
            food.hunger(2).removeEffect('resistance').effect('windswept:thorns', 400, 0, 100).fastToEat()
        }
    })
	event.modify('sob:vanilla_passion_soda', item => {
        item.foodProperties = food => {
            food.hunger(0)
        }
    })
	event.modify('sob:saffron_tisane', item => {
        item.foodProperties = food => {
            food.hunger(0).removeEffect('environmental:serenity').removeEffect('autumnity:extension').effect('buzzier_bees:sunny', 600, 0, 100).effect('autumnity:extension', 600, 0, 100)
        }
    })
	event.modify('naturalist:cooked_bass', item => {
        item.foodProperties = food => {
            food.hunger(4)
		}
    })
	event.modify('sob:passionfruit_smoothie', item => {
        item.foodProperties = food => {
            food.hunger(2).fastToEat()
        }
    })
	event.modify('sob:glow_berry_smoothie', item => {
        item.foodProperties = food => {
            food.hunger(2).removeEffect('night_vision').fastToEat()
        }
    })
	event.modify('sob:cherry_smoothie', item => {
        item.foodProperties = food => {
            food.hunger(2).removeEffect('environmental:serenity').effect('neapolitan:harmony', 200, 0, 100).fastToEat()
        }
    })
	event.modify('sob:carrot_smoothie', item => {
        item.foodProperties = food => {
            food.hunger(2).removeEffect('night_vision').effect('kubejs:satiation', 200, 0, 1).fastToEat()
        }
    })
	event.modify('sob:maple_bread', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.5).effect('resistance', 200, 0, 100)
        }
    })
	event.modify('sob:cinder_dough', item => {
        item.foodProperties = food => {
            food.hunger(1).saturation(0.1).effect('hunger', 900, 0, 100).effect('nausea', 300, 0, 100)
        }
    })
	event.modify('sob:duck_sandwich', item => {
        item.foodProperties = food => {
            food.hunger(10)
        }
    })
	event.modify('sob:exquisite_mushroom_soup', item => {
        item.foodProperties = food => {
            food.removeEffect('health_boost').effect('health_boost', 2400, 0, 100).effect('farmersdelight:comfort', 2400, 0, 100)
        }
    })
	event.modify('culturaldelights:avocado_toast', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.7).effect('kubejs:satiation', 300, 0, 1)
        }
    })
	event.modify('abnormals_delight:pickerelweed_juice', item => {
        item.foodProperties = food => {
            food.removeEffect('water_breathing').effect('water_breathing', 600, 0, 100)
        }
    })
	event.modify('abnormals_delight:passion_aloe_nectar', item => {
        item.foodProperties = food => {
            food.removeEffect('atmospheric:relief').effect('atmospheric:relief', 600, 0, 100).effect('atmospheric:spitting', 200, 0, 100)
        }
    })
	event.modify('abnormals_delight:cherry_cream_soda', item => {
        item.foodProperties = food => {
            food.removeEffect('slow_falling').effect('neapolitan:harmony', 700, 0, 100).effect('neapolitan:vanilla_scent', 400, 0, 100)
        }
    })
	event.modify('ecologics:crab_meat', item => {
        item.foodProperties = food => {
            food.hunger(4)
        }
    })
	event.modify('ecologics:tropical_stew', item => {
        item.foodProperties = food => {
            food.hunger(9)
        }
    })
	event.modify('culturaldelights:creamed_corn', item => {
        item.foodProperties = food => {
            food.effect('farmersdelight:comfort', 600, 0, 100)
        }
    })
	event.modify('createaddition:cake_base', item => {
        item.foodProperties = food => {
            food.hunger(2).saturation(0.9)
        }
    })
	event.modify('farmersdelight:apple_cider', item => {
        item.foodProperties = food => {
            food.removeEffect('absorption').effect('absorption', 2400, 0, 100)
        }
    })
	event.modify('abnormals_delight:seared_venison', item => {
        item.foodProperties = food => {
            food.effect('neapolitan:harmony', 1000, 0, 100)
        }
    })
	event.modify('brewinandchewin:flaxen_cheese_wedge', item => {
        item.foodProperties = food => {
            food.hunger(3)
        }
    })
	event.modify('culturaldelights:fried_eggplant_pasta', item => {
        item.foodProperties = food => {
            food.saturation(0.7)
        }
    })
	event.modify('farmersdelight:chocolate_pie_slice', item => {
        item.foodProperties = food => {
            food.effect('neapolitan:sugar_rush', 1200, 0, 100)
        }
    })
	event.modify('create_central_kitchen:cherry_pie_slice', item => {
        item.foodProperties = food => {
            food.effect('neapolitan:harmony', 600, 0, 100)
        }
    })
	event.modify('create_central_kitchen:mulberry_pie_slice', item => {
        item.foodProperties = food => {
            food.effect('upgrade_aquatic:vibing', 600, 0, 100)
        }
    })
	event.modify('abnormals_delight:dune_platter', item => {
        item.foodProperties = food => {
            food.hunger(11).effect('jump_boost', 500, 1, 100)
        }
    })
	event.modify('farmersrespite:blazing_chili', item => {
        item.foodProperties = food => {
            food.hunger(12)
        }
    })
	event.modify('farmersrespite:black_cod', item => {
        item.foodProperties = food => {
            food.hunger(12)
        }
    })
	event.modify('minecraft:sugar_cane', item => {
        item.foodProperties = food => {
            food.hunger(1).saturation(0.45).effect('neapolitan:sugar_rush', 100, 0, 0.5)
        }
    })
	event.modify('ecologics:surface_moss', item => {
        item.foodProperties = food => {
			food.alwaysEdible()
		}
    })
	event.modify('culturaldelights:corn_dough', item => {
        item.foodProperties = food => {
            food.effect('hunger', 600, 0, 0.3)
        }
    })
	event.modify('sullysmod:cave_chum_bucket', item => {
        item.foodProperties = food => {
            food.hunger(9).removeEffect('glowing').effect('glowing', 1200, 0, 1)
        }
    })
	event.modify('sullysmod:lanternfish_roll', item => {
        item.foodProperties = food => {
            food.removeEffect('glowing').effect('glowing', 700, 0, 1)
        }
    })
	event.modify('brewinandchewin:rice_wine', item => {
        item.foodProperties = food => {
            food.removeEffect('brewinandchewin:satisfaction').effect('farmersdelight:comfort', 2400, 0, 1)
        }
    })
	event.modify('brewinandchewin:pale_jane', item => {
        item.foodProperties = food => {
            food.removeEffect('brewinandchewin:satisfaction').effect('farmersdelight:comfort', 3600, 0, 1)
        }
    })
	event.modify('brewinandchewin:kimchi', item => {
        item.foodProperties = food => {
            food.removeEffect('brewinandchewin:satisfaction')
        }
    })
	event.modify('create:blaze_cake', item => {
        item.foodProperties = food => {
            food.hunger(7).saturation(0.65)
        }
    })
	event.modify('farmersdelight:horse_feed', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.4)
        }
    })
	event.modify('culturaldelights:popcorn', item => {
        item.foodProperties = food => {
            food.hunger(1).saturation(0.5)
        }
    })
	event.modify('farmersdelight:fruit_salad', item => {
        item.foodProperties = food => {
            food.effect('atmospheric:spitting', 160, 0, 0.4)
        }
    })
	event.modify('farmersdelight:melon_juice', item => {
        item.foodProperties = food => {
            food.effect('atmospheric:spitting', 160, 0, 0.4)
        }
    })
	event.modify('brewinandchewin:saccharine_rum', item => {
        item.foodProperties = food => {
            food.effect('atmospheric:spitting', 100, 0, 1)
        }
    })
	event.modify('farmersdelight:sweet_berry_cheesecake_slice', item => {
        item.foodProperties = food => {
            food.effect('glowing', 1200, 0, 1)
        }
    })
	event.modify('farmersdelight:glow_berry_custard', item => {
        item.foodProperties = food => {
            food.removeEffect('glowing').effect('glowing', 1200, 0, 1)
        }
    })
	event.modify('mynethersdelight:magma_cake_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	event.modify('mynethersdelight:plate_of_cold_striderloaf', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.65).removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 600, 0, 1).effect('autumnity:foul_taste', 500, 0, 1).effect('nausea', 200, 0, 0.35)
        }
    })
	event.modify('mynethersdelight:hot_wings', item => {
        item.foodProperties = food => {
            food.hunger(4).saturation(0.7)
        }
    })
	event.modify('mynethersdelight:hot_wings_bucket', item => {
        item.foodProperties = food => {
            food.hunger(16).saturation(0.7)
        }
    })
	event.modify('abnormals_delight:perch_with_mushrooms', item => {
        item.foodProperties = food => {
            food.hunger(11).saturation(0.7).removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 4800, 0, 1)
        }
    })
	event.modify('abnormals_delight:pike_with_beetroot', item => {
        item.foodProperties = food => {
            food.hunger(12).saturation(0.7).removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 4800, 0, 1)
        }
    })
	event.modify('abnormals_delight:venison_with_bamboo_shoots', item => {
        item.foodProperties = food => {
            food.hunger(12).saturation(0.7).removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 6000, 0, 1)
        }
    })
	event.modify('aquaculture:goldfish', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.7).effect('water_breathing', 600, 0, 1).effect('dolphins_grace', 300, 0, 1).alwaysEdible()
        }
    })
	event.modify('farmersdelight:ratatouille', item => {
        item.foodProperties = food => {
            food.hunger(11)
        }
    })
	event.modify('farmersdelight:mixed_salad', item => {
        item.foodProperties = food => {
            food.hunger(7)
        }
    })
	event.modify('mynethersdelight:sausage_and_potatoes', item => {
        item.foodProperties = food => {
            food.hunger(8)
        }
    })
	event.modify('mynethersdelight:ghast_salad', item => {
        item.foodProperties = food => {
            food.effect('weakness', 1200, 0, 1)
        }
    })
	event.modify('brewinandchewin:pickled_pickles', item => {
        item.foodProperties = food => {
            food.hunger(5).removeEffect('luck').effect('glowing', 1200, 0, 1)
        }
    })
	event.modify('autumnity:syrup_bottle', item => {
        item.foodProperties = food => {
            food.effect('resistance', 400, 0, 0.25).effect('neapolitan:sugar_rush', 600, 0, 1)
        }
    })
	event.modify('farmersdelight:apple_pie_slice', item => {
        item.foodProperties = food => {
            food.effect('absorption', 2100, 0, 1)
        }
    })
	event.modify('create_central_kitchen:truffle_pie_slice', item => {
        item.foodProperties = food => {
            food.removeEffect('health_boost').effect('health_boost', 2400, 0, 1)
        }
    })
	event.modify('cookscollection:lemon', item => {
        item.foodProperties = food => {
            food.hunger(2).effect('environmental:panic', 200, 0, 0.3)
        }
    })
	event.modify('cookscollection:lemon_muffin', item => {
        item.foodProperties = food => {
            food.effect('environmental:panic', 2400, 0, 1)
        }
    })
	event.modify('cookscollection:lemonade', item => {
        item.foodProperties = food => {
            food.removeEffect('speed').effect('environmental:panic', 1200, 0, 1).alwaysEdible()
        }
    })
	event.modify('cookscollection:rustic_loaf_slice', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.4)
        }
    })
	event.modify('cookscollection:fried_potato', item => {
        item.foodProperties = food => {
            food.hunger(3).saturation(0.5)
        }
    })
	event.modify('cookscollection:chocolate_muffin', item => {
        item.foodProperties = food => {
            food.effect('neapolitan:sugar_rush', 1200, 0, 1)
        }
    })
	event.modify('cookscollection:fish_and_chips', item => {
        item.foodProperties = food => {
            food.hunger(14).saturation(0.7).removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 3600, 0, 1)
        }
    })
	event.modify('cookscollection:cooking_oil', item => {
        item.foodProperties = food => {
            food.alwaysEdible()
        }
    })
	
// Raw foods
	event.modify([
	'minecraft:porkchop', 
	'minecraft:beef', 
	'minecraft:rabbit', 
	'minecraft:mutton', 
	'farmersdelight:bacon', 
	'farmersdelight:mutton_chops', 
	'environmental:venison', 
	'nethersdelight:hoglin_loin', 
	'farmersdelight:ham', 
	'farmersdelight:pie_crust', 
	'abnormals_delight:venison_shanks', 
	'berry_good:sweet_berry_mince', 
	'miners_delight:bat_wing', 
	'miners_delight:squid', 
	'miners_delight:tentacles', 
	'mynethersdelight:hoglin_sausage',
	'aquaculture:fish_fillet_raw',
	'minecraft:cod', 
	'minecraft:salmon', 
	'naturalist:bass', 
	'environmental:koi', 
	'sullysmod:lanternfish', 
	'minecraft:tropical_fish', 
	'aquaculture:brown_trout', 
	'aquaculture:carp', 
	'aquaculture:gar', 
	'aquaculture:tambaqui', 
	'aquaculture:red_grouper', 
	'aquaculture:tuna', 
	'aquaculture:blackfish', 
	'aquaculture:atlantic_herring', 
	'aquaculture:pollock', 
	'aquaculture:bayad', 
	'aquaculture:boulti', 
	'aquaculture:capitaine', 
	'aquaculture:synodontis', 
	'aquaculture:bluegill'
	], item => {
        item.foodProperties = food => {
            food.effect('hunger', 600, 0, 0.3)
        }
    })
	
// Foul taste
	event.modify('minecraft:rotten_flesh', item => {
        item.foodProperties = food => {
            food.hunger(3).effect('autumnity:foul_taste', 400, 0, 1)
        }
    })
	event.modify('miners_delight:bat_wing', item => {
        item.foodProperties = food => {
            food.effect('autumnity:foul_taste', 200, 0, 1)
        }
    })
	event.modify('minecraft:spider_eye', item => {
        item.foodProperties = food => {
            food.effect('autumnity:foul_taste', 600, 0, 1)
        }
    })
	event.modify('neapolitan:chocolate_spider_eye', item => {
        item.foodProperties = food => {
            food.effect('autumnity:foul_taste', 600, 1, 1)
        }
    })
	event.modify('mynethersdelight:ghasta', item => {
        item.foodProperties = food => {
            food.effect('autumnity:foul_taste', 300, 0, 1)
        }
    })
	event.modify('minecraft:poisonous_potato', item => {
        item.foodProperties = food => {
            food.effect('autumnity:foul_taste', 200, 0, 1)
        }
    })
	event.modify('farmersrespite:coffee_berries', item => {
        item.foodProperties = food => {
            food.effect('autumnity:foul_taste', 400, 0, 1)
        }
    })
	event.modify('farmersdelight:nether_salad', item => {
        item.foodProperties = food => {
            food.effect('autumnity:foul_taste', 120, 0, 1)
        }
    })
	event.modify('farmersdelight:dog_food', item => {
        item.foodProperties = food => {
            food.effect('autumnity:foul_taste', 600, 0, 1)
        }
    })
	event.modify('abnormals_delight:slabdish', item => {
        item.foodProperties = food => {
            food.effect('autumnity:foul_taste', 600, 0, 1)
        }
    })
	
// Modify alcoholic beverages
	event.modify('brewinandchewin:beer', item => {
        item.foodProperties = food => {
            food.effect('strength', 1800, 0, 1)
        }
    })
	event.modify('brewinandchewin:strongroot_ale', item => {
        item.foodProperties = food => {
            food.effect('strength', 2400, 0, 1)
        }
    })
	event.modify('brewinandchewin:steel_toe_stout', item => {
        item.foodProperties = food => {
            food.effect('strength', 3000, 0, 1)
        }
    })
	event.modify('brewinandchewin:vodka', item => {
        item.foodProperties = food => {
            food.effect('quark:resilience', 2400, 0, 1)
        }
    })
	event.modify('brewinandchewin:salty_folly', item => {
        item.foodProperties = food => {
            food.effect('quark:resilience', 3000, 0, 1)
        }
    })
	event.modify('brewinandchewin:bloody_mary', item => {
        item.foodProperties = food => {
            food.effect('quark:resilience', 3000, 0, 1)
        }
    })
	event.modify('brewinandchewin:red_rum', item => {
        item.foodProperties = food => {
            food.effect('quark:resilience', 3600, 0, 1)
        }
    })
	event.modify('brewinandchewin:egg_grog', item => {
        item.foodProperties = food => {
            food.removeEffect('absorption').effect('farmersdelight:comfort', 1200, 0, 1).effect('cofh_core:cold_resistance', 3000, 0, 1)
        }
    })
	event.modify('brewinandchewin:kombucha', item => {
        item.foodProperties = food => {
            food.removeEffect('haste').removeEffect('brewinandchewin:satisfaction').effect('windswept:thorns', 2400, 1, 1).effect('respiteful:maturity', 2400, 0, 1)
        }
    })
	
// Remove speed from pie slices
	event.modify([
	'farmersrespite:rose_hip_pie_slice',
	'farmersdelight:apple_pie_slice',
	'farmersdelight:sweet_berry_cheesecake_slice',
	'farmersdelight:chocolate_pie_slice',
	'create_central_kitchen:pumpkin_pie_slice',
	'create_central_kitchen:cherry_pie_slice',
	'create_central_kitchen:truffle_pie_slice'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('speed')
        }
    })
	
// Replacing nourishment with satiation	
	// 6 minute foods
	event.modify([
	'brewinandchewin:fiery_fondue',
	'brewinandchewin:horror_lasagna',
	'mynethersdelight:hot_wings_bucket'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 7200, 0, 1)
        }
    })
	
	// 5.5 minute foods
	event.modify([
	'farmersdelight:squid_ink_pasta'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 6600, 0, 1)
        }
    })
	
	// 5 minute foods
	event.modify([
	'windswept:chestnut_risotto',
	'windswept:chestnut_chicken_platter',
	'sob:exquisite_mushroom_soup',
	'farmersdelight:roasted_mutton_chops',
	'farmersdelight:vegetable_noodles',
	'farmersdelight:roast_chicken',
	'farmersdelight:stuffed_pumpkin',
	'farmersdelight:honey_glazed_ham',
	'farmersdelight:shepherds_pie',
	'culturaldelights:fried_eggplant_pasta',
	'brewinandchewin:cheesy_pasta',
	'abnormals_delight:dune_platter',
	'abnormals_delight:seared_venison',
	'abnormals_delight:duck_noodles',
	'miners_delight:bowl_of_stuffed_squid'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 6000, 0, 1)
        }
    })
	
	// 4 minute foods
	event.modify([
	'farmersdelight:pasta_with_meatballs',
	'farmersdelight:pasta_with_mutton_chop',
	'brewinandchewin:vegetable_omelet',
	'brewinandchewin:scarlet_pierogies',
	'mynethersdelight:plate_of_stuffed_hoglin_snout'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 4800, 0, 1)
        }
    })
	
	// 3.5 minute foods
	event.modify([
	'farmersrespite:black_cod',
	'farmersrespite:tea_curry'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 4200, 0, 1)
        }
    })
	
	// 3 minute foods
	event.modify([
	'farmersdelight:mushroom_rice',
	'farmersdelight:steak_and_potatoes',
	'farmersdelight:grilled_salmon',
	'mynethersdelight:breakfast_sampler',
	'mynethersdelight:fried_hoglin_chop',
	'mynethersdelight:spicy_curry',
	'mynethersdelight:plate_of_stuffed_hoglin_ham',
	'mynethersdelight:plate_of_stuffed_hoglin'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 3600, 0, 1)
        }
    })
	
	// 2 minute foods
	event.modify([
	'farmersdelight:bacon_and_eggs',
	'farmersdelight:ratatouille',
	'mynethersdelight:bleeding_tartar',
	'mynethersdelight:strider_with_grilled_fungus',
	'mynethersdelight:blue_tenderloin_steak',
	'mynethersdelight:plate_of_ghasta_with_cream',
	'brewinandchewin:quiche_slice'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 2400, 0, 1)
        }
    })
	
	// 1.5 minute foods
	event.modify([
	'mynethersdelight:hot_wings',
	'mynethersdelight:sausage_and_potatoes'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 1800, 0, 1)
        }
    })
	
	// 1 minute foods
	event.modify([
	'mynethersdelight:plate_of_striderloaf',
	'mynethersdelight:chilidog'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 1200, 0, 1)
        }
    })
	
	// 45 second foods
	event.modify([
	'culturaldelights:beef_burrito',
	'farmersdelight:hamburger',
	'culturaldelights:pork_wrap',
	'farmersdelight:bacon_sandwich'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 900, 0, 1)
        }
    })
	
	// 30 second foods
	event.modify([
	'farmersdelight:egg_sandwich',
	'farmersdelight:chicken_sandwich',
	'farmersdelight:mutton_wrap',
	'culturaldelights:mutton_sandwich',
	'culturaldelights:eggplant_burger',
	'culturaldelights:chicken_taco',
	'culturaldelights:fish_taco',
	'culturaldelights:empanada',
	'mynethersdelight:hotdog'
	], item => {
        item.foodProperties = food => {
            food.removeEffect('farmersdelight:comfort').removeEffect('farmersdelight:nourishment').effect('kubejs:satiation', 600, 0, 1)
        }
    })
})