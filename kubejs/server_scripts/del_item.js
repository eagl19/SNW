// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true



onEvent('recipes', event => {
	event.remove({output : TC_ITEM.GROUT, 														type : RECIPE_TYPE.MC_SHAPELESS})
	event.remove({output : TC_ITEM.SEARED_BRICK, 												type : RECIPE_TYPE.MC_SMELTING})	
	event.remove({id : /.*(ingot|stairs|wall|slab|large_gear|small_gear|glass_pane|ladder).*/,	type : RECIPE_TYPE.MC_SHAPED})
	event.remove({id : /.*(ingot|wool|button).*/,												type : RECIPE_TYPE.MC_SHAPELESS})
	event.remove({output :  /.*ingot.*/, 														type : RECIPE_TYPE.MC_SMELTING})	
	event.remove({input :  /.*ore.*/, 															type : RECIPE_TYPE.MC_SMELTING})	
	event.remove({output :  /.*ingot.*/, 														type : RECIPE_TYPE.MC_BLASTING})
	event.remove({output : ED_ITEMS.COKE, 														type : RECIPE_TYPE.MC_BLASTING})
	event.remove({output : IE_ITEM.COKE, 														type : RECIPE_TYPE.MC_SHAPELESS})
	event.remove({output :  /^tfc_metalwork:metal\/block.*/, 									type : RECIPE_TYPE.TFC_ANVIL})
	event.remove({output : CREATE_ITEMS.FLUID_PIPER,											type : RECIPE_TYPE.MC_SHAPED})
	event.remove({output : CREATE_ITEMS.PUMP,													type : RECIPE_TYPE.MC_SHAPELESS})
	event.remove({output : CREATE_ITEMS.COGWHEEL,												type : RECIPE_TYPE.MC_SHAPELESS})
	event.remove({output : CREATE_ITEMS.LARGE_COGWHEEL,											type : RECIPE_TYPE.MC_SHAPELESS})
	event.remove({output : CREATE_ITEMS.BRASS_HAND,												type : RECIPE_TYPE.MC_SHAPED})
	event.remove({output : CREATE_ITEMS.ELECTRON_TUBE,											type : RECIPE_TYPE.MC_SHAPED})
	event.remove({output : CREATE_ITEMS.SHAFT,													type : RECIPE_TYPE.MC_SHAPED})
	event.remove({input : TC_ITEM.SEARED_MELTER,												type : RECIPE_TYPE.TC_MELTING})
	event.remove({output :  /.*dye.*/,	 														type : RECIPE_TYPE.MC_SHAPELESS})
	event.remove({id : 'immersiveengineering:crafting/treated_wood_horizontal'})
	event.remove({id : 'immersiveengineering:crafting/stick_treated'})
})

onEvent('item.tags', event => {
	event.get('tfc:forge_fuel').add('electrodynamics:coalcoke')
	event.add('kubejs:white_dye_plant','tfc:plant/spanish_moss').add('tfc:plant/houstonia').add('tfc:plant/primrose').add('tfc:plant/trillium').add('tfc:plant/tulip_white').add('tfc:plant/oxeye_daisy').add('tfc:plant/snapdragon_white')
	event.add('kubejs:orange_dye_plant','tfc:plant/nasturtium').add('tfc:plant/canna').add('tfc:plant/butterfly_milkweed').add('tfc:plant/strelitzia').add('tfc:plant/water_canna').add('tfc:plant/tulip_orange')
	event.add('kubejs:magenta_dye_plant','tfc:plant/morning_glory').add('tfc:plant/pulsatilla').add('tfc:plant/athyrium_fern')
	event.add('kubejs:light_blue_dye_plant','tfc:plant/labrador_tea').add('tfc:plant/sapphire_tower')
	event.add('kubejs:yellow_dye_plant','tfc:plant/goldenrod').add('tfc:plant/dandelion').add('tfc:plant/meads_milkweed').add('tfc:plant/snapdragon_yellow').add('tfc:plant/calendula')
	event.add('kubejs:lime_dye_plant','tfc:plant/moss')
	event.add('kubejs:pink_dye_plant','tfc:plant/foxglove').add('tfc:plant/tulip_pink').add('tfc:plant/snapdragon_pink').add('tfc:plant/sacred_datura')
	event.add('kubejs:light_gray_dye_plant','tfc:plant/yucca')
	event.add('kubejs:purple_dye_plant','tfc:plant/black_orchid').add('tfc:plant/perovskia').add('tfc:plant/allium')
	event.add('kubejs:blue_dye_plant','tfc:plant/blue_orchid').add('tfc:plant/grape_hyacinth')
	event.add('kubejs:brown_dye_plant','tfc:plant/field_horsetail').add('tfc:plant/sargassum')
	event.add('kubejs:green_dye_plant','tfc:plant/barrel_cactus').add('tfc:plant/reindeer_lichen')
	event.add('kubejs:red_dye_plant','tfc:plant/snapdragon_red').add('tfc:plant/guzmania').add('tfc:plant/vriesea').add('tfc:plant/tropical_milkweed').add('tfc:plant/poppy').add('tfc:plant/tulip_red').add('tfc:plant/rose')
})