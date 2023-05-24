// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
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
	event.remove({id : 'immersiveengineering:crafting/treated_wood_horizontal'})
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})