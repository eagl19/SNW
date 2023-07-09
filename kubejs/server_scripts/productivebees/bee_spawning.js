onEvent('recipes', event => {
	const recipes = [
		{INGREDIENTS : PB_ITEM.NEST.STONE, 			RESULTS : [{bee : BEES.DIGGER},		{bee : BEES.MASON}], 						KEY : 'stone_nest'},
		{INGREDIENTS : PB_ITEM.NEST.SUGAR_CANE, 	RESULTS : [{bee : BEES.REED},		{bee : BEES.MASON}], 						KEY : 'sugar_cane_nest'},
		{INGREDIENTS : PB_ITEM.NEST.COARSE_DIRT, 	RESULTS : [{bee : BEES.CHOCOLATE},	{bee : BEES.LEAFCUTTER},{bee : BEES.AHSY}],	KEY : 'sugar_cane_nest'},
		{INGREDIENTS : PB_ITEM.NEST.SAND, 			RESULTS : [{bee : BEES.CHOCOLATE},	{bee : BEES.AHSY}], 						KEY : 'sand_nest'},
		{INGREDIENTS : PB_ITEM.NEST.GRAVEL, 		RESULTS : [{bee : BEES.DIGGER},		{bee : BEES.CHOCOLATE},	{bee : BEES.AHSY}],	KEY : 'gravel_nest'}
	]
	event.remove({id : 'productivebees:bee_spawning/mason_stone_nest'})
	event.remove({id : 'productivebees:bee_spawning/digger_stone_nest'})
	event.remove({id : 'productivebees:bee_spawning/reed_sugar_cane_nest'})
	event.remove({id : 'productivebees:bee_spawning/mason_sugar_cane_nest'})
	event.remove({id : 'productivebees:bee_spawning/ashy_mining_coarse_dirt_nest'})
	event.remove({id : 'productivebees:bee_spawning/chocolate_mining_coarse_dirt_nest'})
	event.remove({id : 'productivebees:bee_spawning/leafcutter_coarse_dirt_nest'})
	event.remove({id : 'productivebees:bee_spawning/chocolate_mining_sand_nest'})
	event.remove({id : 'productivebees:bee_spawning/ashy_mining_sand_nest'})
	event.remove({id : 'productivebees:bee_spawning/ashy_mining_gravel_nest'})
	event.remove({id : 'productivebees:bee_spawning/chocolate_mining_gravel_nest'})
	event.remove({id : 'productivebees:bee_spawning/digger_gravel_nest'})	
	
	recipes.forEach(recipe=>{
		if (recipe.BIOMES){
			event.custom({ 
				type: RECIPE_TYPE.PB_SPAWNING,
				ingredient: {
					item: recipe.INGREDIENTS
				},
				results: recipe.RESULTS,
				biomes: recipe.BIOMES
			}).id(`productivebees:bee_spawning/${recipe.KEY}`)
		}else{
			event.custom({ 
				type: RECIPE_TYPE.PB_SPAWNING,
				ingredient: {
					item: recipe.INGREDIENTS
				},
				results: recipe.RESULTS
			}).id(`productivebees:bee_spawning/${recipe.KEY}`)
		}
	})
})