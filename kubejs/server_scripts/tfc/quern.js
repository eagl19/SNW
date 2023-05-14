onEvent('recipes', event => {
	const recipes = [
		{INPUT : LOOSE_ROCKS.ANDESITE, OUTPUT : {ITEM : FLUXS.ANDESITE, COUNT : 2}, KEY : 'andesite_flux'}
	]
	recipes.forEach(recipe=>{
		event.custom({ 
			type: 'tfc:quern',
			ingredient: {
				 item:  recipe.INPUT
			},
			result:{ 
				item:recipe.OUTPUT.ITEM,
				count: recipe.OUTPUT.COUNT
			}
		}).id(`tfc:quern/${recipe.KEY}`)
	})
})