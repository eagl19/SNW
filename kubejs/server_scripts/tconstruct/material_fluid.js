onEvent('recipes', event => {
	const recipes=[
		{INPUT : { name : FLUIDS.ALUMINUM, 			amount : 100 }, TEMPERATURE : 660, 	KEY : 'aluminum'},
		{INPUT : { name : FLUIDS.BRONZE, 			amount : 100 }, TEMPERATURE : 950, 	KEY : 'bronze'},
		{INPUT : { name : FLUIDS.COBALT, 			amount : 100 }, TEMPERATURE : 1500, KEY : 'cobalt'},
		{INPUT : { name : FLUIDS.CONSTANTAN, 		amount : 100 }, TEMPERATURE : 1200, KEY : 'constantan'},
		{INPUT : { name : FLUIDS.COPPER, 			amount : 100 }, TEMPERATURE : 1080, KEY : 'copper'},
		{INPUT : { name : FLUIDS.ELECTRUM, 			amount : 100 }, TEMPERATURE : 1200, KEY : 'electrum'},
		{INPUT : { name : FLUIDS.GOLD, 				amount : 100 }, TEMPERATURE : 1060, KEY : 'gold'},
		{INPUT : { name : FLUIDS.INVAR, 			amount : 100 }, TEMPERATURE : 1450, KEY : 'invar'},
		{INPUT : { name : FLUIDS.LEAD, 				amount : 100 }, TEMPERATURE : 328,  KEY : 'lead'},
		{INPUT : { name : FLUIDS.OSMIUM, 			amount : 100 }, TEMPERATURE : 3025, KEY : 'osmium'},
		{INPUT : { name : FLUIDS.PLATINUM, 			amount : 100 }, TEMPERATURE : 1730, KEY : 'platinum'},
		{INPUT : { name : FLUIDS.ROSE_GOLD, 		amount : 100 }, TEMPERATURE : 960,  KEY : 'rose_gold'},
		{INPUT : { name : FLUIDS.SILVER, 			amount : 100 }, TEMPERATURE : 961,  KEY : 'silver'},
		{INPUT : { name : FLUIDS.STEEL, 			amount : 100 }, TEMPERATURE : 1540, KEY : 'steel'},
		{INPUT : { name : FLUIDS.TUNGSTEN_STEEL, 	amount : 100 }, TEMPERATURE : 3690, KEY : 'tungsten_steel'}
	]
	recipes.forEach(recipe=>{		
		event.custom({
			type 		: 'tconstruct:material_fluid',
			fluid 		:recipe.INPUT,
			temperature : recipe.TEMPERATURE,
			output 		: `tconstruct:${recipe.KEY}`			
		}).id(`tconstruct:tools/materials/casting/${recipe.KEY}`)
	})
})