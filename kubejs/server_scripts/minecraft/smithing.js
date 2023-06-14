onEvent('recipes', event => {
	const recipes=[
		{BASE: CREATE_ITEMS.ANDESITE_MACHINE, 	ADDITION: BLOCKS.TITANIUM, 					RESULT: CREATE_ITEMS.PRESS, 					KEY: 'create/mechanical_press'},
		{BASE: CREATE_ITEMS.ANDESITE_MACHINE, 	ADDITION: CREATE_ITEMS.WHISK, 				RESULT: CREATE_ITEMS.MIXER, 					KEY: 'create/mechanical_mixer'},
		{BASE: CREATE_ITEMS.ANDESITE_MACHINE, 	ADDITION: IE_ITEM.ROCKCUTTER, 				RESULT: CREATE_ITEMS.SAW, 						KEY: 'create/mechanical_saw'},
		{BASE: CREATE_ITEMS.ANDESITE_MACHINE, 	ADDITION: CREATE_ITEMS.FLUID_TANK, 			RESULT: CREATE_ITEMS.SPOUT, 					KEY: 'create/spout'},
		{BASE: CREATE_ITEMS.BRASS_CASING, 		ADDITION: CREATE_ITEMS.FLUID_TANK, 			RESULT: CREATE_ITEMS.DRAIN,						KEY: 'create/item_drain'},
		{BASE: CREATE_ITEMS.BRASS_MACHINE, 		ADDITION: CREATE_ITEMS.BRASS_HAND, 			RESULT: CREATE_ITEMS.DEPLOYER, 					KEY: 'create/deployer'},
		{BASE: TC_ITEM.SEARED_MELTER, 			ADDITION: CREATE_ITEMS.MIXER, 				RESULT: TC_ITEM.SCORCHED_ALLOYER, 				KEY: 'tconstruct/scorched_alloyer'},
		{BASE: CREATE_ITEMS.MECHANICAL_CRAFTER,	ADDITION: IE_ITEM.ROCKCUTTER, 				RESULT: MC_ITEM.STONECUTTER, 					KEY: 'minecraft/stonecutter'},
		{BASE: CREATE_ITEMS.BRASS_MACHINE, 		ADDITION: CREATE_ITEMS.PRECISION_MECHANISM, RESULT: CREATE_ITEMS.ROTATION_SPEED_CONTROLLER,	KEY: 'create/rotation_speed_controller'},
		{BASE: CREATE_ITEMS.FLUID_PIPER, 		ADDITION: GREATE_PLATES.SOLDER,				RESULT: CREATE_ITEMS.FLUID_VALVE,				KEY: 'create/fluid_valve'},
		{BASE: CREATE_ITEMS.FLUID_VALVE, 		ADDITION: CREATE_ITEMS.ELECTRON_TUBE,		RESULT: CREATE_ITEMS.SMART_FLUID_PIPE,			KEY: 'create/smart_fluid_pipe'}
	]
	event.remove({output : CREATE_ITEMS.PRESS})
	event.remove({output : CREATE_ITEMS.MIXER})
	event.remove({output : CREATE_ITEMS.SAW})
	event.remove({output : CREATE_ITEMS.SPOUT})
	event.remove({output : CREATE_ITEMS.DRAIN})
	event.remove({output : CREATE_ITEMS.DEPLOYER})
	event.remove({output : TC_ITEM.SCORCHED_ALLOYER})
	event.remove({output : MC_ITEM.STONECUTTER})
	event.remove({output : CREATE_ITEMS.ROTATION_SPEED_CONTROLLER})
	recipes.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.MC_SMITHING,
			base: { 
				item: recipe.BASE 
			},
			addition: { 
				item: recipe.ADDITION 
			},
			result: { 
				item: recipe.RESULT 
			}
		}).id(`minecraft:smithing/${recipe.KEY}`)
	})
})