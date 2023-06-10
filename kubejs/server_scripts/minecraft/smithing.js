onEvent('recipes', event => {
	const recipes=[
		{BASE: CREATE_ITEMS.ANDESITE_MACHINE, 	ADDITION: BLOCKS.TITANIUM, 			RESULT: CREATE_ITEMS.PRESS, 		KEY: 'create/mechanical_press'},
		{BASE: CREATE_ITEMS.ANDESITE_MACHINE, 	ADDITION: CREATE_ITEMS.WHISK, 		RESULT: CREATE_ITEMS.MIXER, 		KEY: 'create/mechanical_mixer'},
		{BASE: CREATE_ITEMS.ANDESITE_MACHINE, 	ADDITION: IE_ITEM.ROCKCUTTER, 		RESULT: CREATE_ITEMS.SAW, 			KEY: 'create/mechanical_saw'},
		{BASE: CREATE_ITEMS.ANDESITE_MACHINE, 	ADDITION: CREATE_ITEMS.FLUID_TANK, 	RESULT: CREATE_ITEMS.SPOUT, 		KEY: 'create/spout'},
		{BASE: CREATE_ITEMS.BRASS_CASING, 		ADDITION: CREATE_ITEMS.FLUID_TANK, 	RESULT: CREATE_ITEMS.DRAIN,			KEY: 'create/item_drain'},
		{BASE: CREATE_ITEMS.BRASS_MACHINE, 		ADDITION: CREATE_ITEMS.BRASS_HAND, 	RESULT: CREATE_ITEMS.DEPLOYER, 		KEY: 'create/deployer'},
		{BASE: TC_ITEM.SEARED_MELTER, 			ADDITION: CREATE_ITEMS.MIXER, 		RESULT: TC_ITEM.SCORCHED_ALLOYER, 	KEY: 'tconstruct/scorched_alloyer'}
	]
	event.remove({output : CREATE_ITEMS.PRESS})
	event.remove({output : CREATE_ITEMS.MIXER})
	event.remove({output : CREATE_ITEMS.SAW})
	event.remove({output : CREATE_ITEMS.SPOUT})
	event.remove({output : CREATE_ITEMS.DRAIN})
	event.remove({output : CREATE_ITEMS.DEPLOYER})
	event.remove({output : TC_ITEM.SCORCHED_ALLOYER})
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