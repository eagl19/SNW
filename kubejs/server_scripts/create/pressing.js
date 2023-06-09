onEvent('recipes', event => {
	const recipes=[
		{INGREDIENTS : [ {item : INGOTS.M_IRON} ],	RESULTS: [{item : SHEETS.C_IRON}], 		KEY : 'iron_ingot'},
		{INGREDIENTS : [ {item : INGOTS.C_BRASS} ],	RESULTS: [{item : SHEETS.C_BRASS}], 	KEY : 'brass_ingot'},
		{INGREDIENTS : [ {item : INGOTS.M_GOLD} ],	RESULTS: [{item : SHEETS.C_GOLDEN}], 	KEY : 'gold_ingot'},
		{INGREDIENTS : [ {item : INGOTS.M_COPPER}],	RESULTS: [{item : SHEETS.C_COPPER}], 	KEY : 'copper_ingot'},
		{INGREDIENTS : [ {item : INGOTS.C_ZINC}],	RESULTS: [{item : SHEETS.C_ZINC}], 		KEY : 'zinc_ingot'}
	]
	recipes.forEach(recipe=>{
		event.custom(PRESSING(recipe)).id(`create:pressing/${recipe.KEY}`)
	})
})

function PRESSING(recipe){
	return {
		type: RECIPE_TYPE.C_PRESSING,
		ingredients: recipe.INGREDIENTS,
		results: recipe.RESULTS	
	}
}