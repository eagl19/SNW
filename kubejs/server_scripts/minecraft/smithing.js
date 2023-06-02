onEvent('recipes', event => {
	const recipes=[
		{BASE: CREATE_ITEMS.ANDESITE_MACHINE, ADDITION: BLOCKS.TITANIUM, 	RESULT: CREATE_ITEMS.PRESS, KEY: 'create/mechanical_press'},
		{BASE: CREATE_ITEMS.ANDESITE_MACHINE, ADDITION: CREATE_ITEMS.WHISK, RESULT: CREATE_ITEMS.MIXER, KEY: 'create/mechanical_mixer'}
	]
	event.remove({output : CREATE_ITEMS.PRESS})
	event.remove({output : CREATE_ITEMS.MIXER})
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