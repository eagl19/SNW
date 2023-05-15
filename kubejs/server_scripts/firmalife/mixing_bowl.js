onEvent('recipes', event => {
	const recipes = [
		{INGREDIENTS : [{ tag : TAGS.TFC_GRAVELS },{ tag : TAGS.SANDS },{ item : MC_ITEM.CLAY_BALL }], FLUID : {NAME : FLUIDS.MC_WATER, AMOUNT : 1000}, OUTPUT : TC_ITEM.GROUT, KEY : 'grout'}
	]
	recipes.forEach(recipe=>{
		event.custom({ 
			type: 'firmalife:mixing_bowl',
			ingredients: recipe.INGREDIENTS,
			fluid_ingredient: {
				ingredient: recipe.FLUID.NAME,
				amount: recipe.FLUID.AMOUNT
			},
			output_item: {
				item : recipe.OUTPUT
			}
		}).id(`firmalife:mixing_bowl/${recipe.KEY}`)
	})
})