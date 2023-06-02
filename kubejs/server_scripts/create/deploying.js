onEvent('recipes', event => {
	const recipes=[
		{INGREDIENTS : [ {item : CREATE_ITEMS.SHAFT}, {item : GEARS.STAINLESS_STEEL} ],			RESULTS: [{item : CREATE_ITEMS.COGWHEEL}], 			KEY : 'cogwheel'},
		{INGREDIENTS : [ {item : CREATE_ITEMS.SHAFT}, {item : GREATE_GEARS.STAINLESS_STEEL} ],	RESULTS: [{item : CREATE_ITEMS.LARGE_COGWHEEL}], 	KEY : 'large_cogwheel'}
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.C_DEPLOIYNG,
			ingredients: recipe.INGREDIENTS,
			results: recipe.RESULTS			
		}).id(`create:deploying/${recipe.KEY}`)
	})
})