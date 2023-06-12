onEvent('recipes', event => {
	const recipes=[
		{FLUID : FLUIDS.LIQUID_COAL, 			AMOUNT: 50,DURATION: 150, TEMPERATURE: 2000, KEY: 'liquid_coal'},
		{FLUID : FLUIDS.LIQUID_COKE, 			AMOUNT: 50,DURATION: 150, TEMPERATURE: 2500, KEY: 'liquid_coke'},
		{FLUID : FLUIDS.LIQUID_BLAZING_COAL, 	AMOUNT: 50,DURATION: 150, TEMPERATURE: 3100, KEY: 'liquid_blazing_coal'},
		{FLUID : FLUIDS.LIQUID_BLAZING_COKE, 	AMOUNT: 50,DURATION: 150, TEMPERATURE: 3600, KEY: 'liquid_blazing_coke'}
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: 'tconstruct:melting_fuel',
			fluid: { 
				name:recipe.FLUID,
				amount: recipe.AMOUNT
			},
			duration: recipe.DURATION,
			temperature: recipe.TEMPERATURE
		}).id(`tconstruct:${recipe.KEY}`);
	})
})