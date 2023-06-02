onEvent('recipes', event => {
	const recipes=[
		{INGREDIENTS : [ {item : INGOTS.M_IRON} ],	RESULTS: [{item : SHEETS.C_IRON}], 		KEY : 'iron_ingot'},
		{INGREDIENTS : [ {item : INGOTS.C_BRASS} ],	RESULTS: [{item : SHEETS.C_BRASS}], 	KEY : 'brass_ingot'},
		{INGREDIENTS : [ {item : INGOTS.M_GOLD} ],	RESULTS: [{item : SHEETS.C_GOLDEN}], 	KEY : 'gold_ingot'}
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.C_PRESSING,
			ingredients: recipe.INGREDIENTS,
			results: recipe.RESULTS			
		}).id(`create:pressing/${recipe.KEY}`)
	})
})