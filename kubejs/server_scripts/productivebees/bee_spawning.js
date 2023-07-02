onEvent('recipes', event => {
	const recipes = [
		{INGREDIENTS : PB_ITEM.NEST.STONE, 			RESULTS : [{bee : BEES.DIGGER},		{bee : BEES.MASON}], 						KEY : 'stone_nest'},
		{INGREDIENTS : PB_ITEM.NEST.SUGAR_CANE, 	RESULTS : [{bee : BEES.REED},		{bee : BEES.MASON}], 						KEY : 'sugar_cane_nest'},
		{INGREDIENTS : PB_ITEM.NEST.COARSE_DIRT, 	RESULTS : [{bee : BEES.CHOCOLATE},	{bee : BEES.LEAFCUTTER},{bee : BEES.AHSY}],	KEY : 'sugar_cane_nest'},
		{INGREDIENTS : PB_ITEM.NEST.SAND, 			RESULTS : [{bee : BEES.CHOCOLATE},	{bee : BEES.AHSY}], 						KEY : 'sand_nest'},
		{INGREDIENTS : PB_ITEM.NEST.GRAVEL, 		RESULTS : [{bee : BEES.DIGGER},		{bee : BEES.CHOCOLATE},	{bee : BEES.AHSY}],	KEY : 'gravel_nest'}
	]
	recipes.forEach(recipe=>{
		event.custom({ 
			type: RECIPE_TYPE.PB_SPAWNING,
			ingredient: {
				item: recipe.INGREDIENTS
			},
			results: recipe.RESULTS
		}).id(`productivebees:bee_spawning/${recipe.KEY}`)
	})
})