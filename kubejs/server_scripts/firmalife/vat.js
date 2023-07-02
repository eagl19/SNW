onEvent('recipes', event => {
	const recipes = [
		{INPUT:	TFC_ITEM.RAW_HONEY, FLUID:{NAME: FLUIDS.SUGAR, AMOUNT: 500}, OUTPUT: PB_ITEM.HONEY_TREAT, KEY:'honey_treat'}
	]
	recipes.forEach(recipe=>{
		event.custom({ 
			type: RECIPE_TYPE.FL_VAT,
			input_item:{
				ingredient: {
					item: recipe.INPUT,
				}
			},
			input_fluid: {
				ingredient: recipe.FLUID.NAME,
				amount: recipe.FLUID.AMOUNT
			},
			output_item: {
				item : recipe.OUTPUT
			}
		}).id(`firmalife:vat/${recipe.KEY}`)
	})
})