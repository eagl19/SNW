onEvent('recipes', event => {
	const recipes=[
		{OUTPUT : { fluid : FLUIDS.ALUMINUM, 		amount : 100 }, TEMPERATURE : 660, 	KEY : 'aluminum'},
		{OUTPUT : { fluid : FLUIDS.BRONZE, 			amount : 100 }, TEMPERATURE : 950, 	KEY : 'bronze'},
		{OUTPUT : { fluid : FLUIDS.COBALT, 			amount : 100 }, TEMPERATURE : 1500, KEY : 'cobalt'},
		{OUTPUT : { fluid : FLUIDS.CONSTANTAN, 		amount : 100 }, TEMPERATURE : 1200, KEY : 'constantan'},
		{OUTPUT : { fluid : FLUIDS.COPPER, 			amount : 100 }, TEMPERATURE : 1080, KEY : 'copper'},
		{OUTPUT : { fluid : FLUIDS.ELECTRUM, 		amount : 100 }, TEMPERATURE : 1200, KEY : 'electrum'},
		{OUTPUT : { fluid : FLUIDS.GOLD, 			amount : 100 }, TEMPERATURE : 1060, KEY : 'gold'},
		{OUTPUT : { fluid : FLUIDS.INVAR, 			amount : 100 }, TEMPERATURE : 1450, KEY : 'invar'},
		{OUTPUT : { fluid : FLUIDS.LEAD, 			amount : 100 }, TEMPERATURE : 328,  KEY : 'lead'},
		{OUTPUT : { fluid : FLUIDS.OSMIUM, 			amount : 100 }, TEMPERATURE : 3025, KEY : 'osmium'},
		{OUTPUT : { fluid : FLUIDS.PLATINUM, 		amount : 100 }, TEMPERATURE : 1730, KEY : 'platinum'},
		{OUTPUT : { fluid : FLUIDS.ROSE_GOLD, 		amount : 100 }, TEMPERATURE : 960,  KEY : 'rose_gold'},
		{OUTPUT : { fluid : FLUIDS.SILVER, 			amount : 100 }, TEMPERATURE : 961,  KEY : 'silver'},
		{OUTPUT : { fluid : FLUIDS.STEEL, 			amount : 100 }, TEMPERATURE : 1540, KEY : 'steel'},
		{OUTPUT : { fluid : FLUIDS.TUNGSTEN_STEEL, 	amount : 100 }, TEMPERATURE : 3690, KEY : 'tungsten_steel'}
	]
	recipes.forEach(recipe=>{		
		event.custom({
			type 		: 'tconstruct:material_melting',
			input 		: `tconstruct:${recipe.KEY}`,
			temperature : recipe.TEMPERATURE,
			result 		: recipe.OUTPUT			
		}).id(`tconstruct:tools/materials/melting/${recipe.KEY}`)
	})
})