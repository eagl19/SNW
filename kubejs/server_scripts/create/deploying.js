onEvent('recipes', event => {
	const recipes=[
		{INGREDIENTS : [ {item : CREATE_ITEMS.SHAFT}, 			{item : GEARS.STAINLESS_STEEL} ],				RESULTS: [{item : CREATE_ITEMS.COGWHEEL}], 			KEY : 'cogwheel'},
		{INGREDIENTS : [ {item : CREATE_ITEMS.SHAFT}, 			{item : GREATE_GEARS.STAINLESS_STEEL} ],		RESULTS: [{item : CREATE_ITEMS.LARGE_COGWHEEL}], 	KEY : 'large_cogwheel'},
		{INGREDIENTS : [ {item : CREATE_ITEMS.ANDESITE_CASING}, {item : INGOTS.C_BRASS} ],						RESULTS: [{item : CREATE_ITEMS.BRASS_CASING}], 		KEY : 'brass_casing'},
		{INGREDIENTS : [ {item : CREATE_ITEMS.ANDESITE_CASING}, {item : INGOTS.M_COPPER} ],						RESULTS: [{item : CREATE_ITEMS.COPPER_CASING}], 	KEY : 'copper_casing'},
		{INGREDIENTS : [ {item : SHEETS.C_IRON}, 				{item : CREATE_ITEMS.POLISHED_ROZE_QUARTZ} ],	RESULTS: [{item : CREATE_ITEMS.ELECTRON_TUBE}], 	KEY : 'electron_tube'},
		{INGREDIENTS : [ {item : CREATE_ITEMS.BRASS_MACHINE}, 	{item : CREATE_ITEMS.BRASS_DRILL_HEAD} ],		RESULTS: [{item : CREATE_ITEMS.MECHANICAL_DRILL}], 	KEY : 'mechanical_drill'},
		{INGREDIENTS : [ {item : CREATE_ITEMS.BRASS_MACHINE}, 	{item : CREATE_ITEMS.STURDY_SHEET} ],			RESULTS: [{item : CREATE_ITEMS.RAILWAY_CASING}], 	KEY : 'railway_casing'}
	]
	event.remove({output : CREATE_ITEMS.MECHANICAL_DRILL})
	recipes.forEach(recipe=>{
		event.custom(DEPLOYING(recipe)).id(`create:deploying/${recipe.KEY}`)
	})
})
function DEPLOYING(recipe){
	return {
		type: RECIPE_TYPE.C_DEPLOIYNG,
		ingredients: recipe.INGREDIENTS,
		results: recipe.RESULTS
	}
}