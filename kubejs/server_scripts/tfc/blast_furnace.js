onEvent('recipes', event => {
	const recipes = [
		{INPUT : { FLUID : FLUIDS.ZINC, AMOUNT : 1}, OUTPUT : {FLUID : FLUIDS.ANDESITE_ALLOY, AMOUNT : 1}, FLUX : FLUXS.ANDESITE, KEY : 'andesite_alloy'}
	]
	recipes.forEach(recipe=>{		
		event.custom({ 
			type: 'tfc:blast_furnace',
			fluid: { 
				ingredient: recipe.INPUT.FLUID,
				amount: recipe.INPUT.AMOUNT
			},
			result:{ 
				fluid: recipe.OUTPUT.FLUID,
				amount: recipe.OUTPUT.AMOUNT
			},
			catalyst:{
				item :recipe.FLUX
			}				
		}).id(`${recipe.OUTPUT.FLUID.slice(0,recipe.OUTPUT.FLUID.indexOf(':'))}:blast_furnace/${recipe.KEY}`)
	})
})