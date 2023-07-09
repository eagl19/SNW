onEvent('recipes', event => {
	const recipes = [
		{SOURCE: BEES.BLUE_BANDED, 		RESULT: BEES.MINECRAFT, 	ITEM:{item: TFC_ITEM.RAW_HONEY}, 			KEY:'bee/blue_banded_bee'},
		{SOURCE: BEES.GREEN_CARPENTER, 	RESULT: BEES.MINECRAFT, 	ITEM:{item: TFC_ITEM.RAW_HONEY}, 			KEY:'bee/green_carpenter_bee'},
		{SOURCE: BEES.YELLOW_CARPENTER,	RESULT: BEES.MINECRAFT, 	ITEM:{item: TFC_ITEM.RAW_HONEY},			KEY:'bee/yellow_black_carpenter_bee'},
		{SOURCE: BEES.BUMBLE, 			RESULT: BEES.MINECRAFT, 	ITEM:{item: TFC_ITEM.RAW_HONEY}, 			KEY:'bee/bumble_bee'},
		{SOURCE: BEES.MINECRAFT, 		RESULT: BEES.CRYSTALLINE, 	ITEM:{item: ORES.PRECIOUS.CERTUS_QUARTZ}, 	KEY:'crystalline/bee'}
	]
	recipes.forEach(recipe=>{
		event.custom({ 
			type: RECIPE_TYPE.PB_CONVERSION,
			source: recipe.SOURCE,
			result: recipe.RESULT,
			item: recipe.ITEM
		}).id(`productivebees:bee_conversion/${recipe.KEY}`)
	})
})