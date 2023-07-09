onEvent('recipes', event => {
	const recipes = [
		{BEE:BEES.ALUMINUM, OUTPUT:{MAIN:{ITEM:IE_ITEM.RAW_ALUMINUM, 	CHANCE: 40},FLUID:{FLUID:FLUIDS.PB_HONEY, AMOUNT: 50}}, KEY:'aluminum'},
		{BEE:BEES.TIN, 		OUTPUT:{MAIN:{ITEM:MEK_ITEM.RAW_TIN, 		CHANCE: 40},FLUID:{FLUID:FLUIDS.PB_HONEY, AMOUNT: 50}}, KEY:'tin'}
	]
	event.remove({id : 'productivebees:centrifuge/ingots/honeycomb_aluminium_dust'})
	event.remove({id : 'productivebees:centrifuge/ingots/honeycomb_tin_dust'})
	recipes.forEach(recipe=>{
		event.custom({ 
			type: RECIPE_TYPE.PB_CENTRIFUGE,
			ingredient:  {
				type: 'forge:nbt',
				item: 'productivebees:configurable_honeycomb',
				nbt: {
					EntityTag: {
						type: recipe.BEE
					}
				}
			},
			outputs: [
				{
					item: {
						item : recipe.OUTPUT.MAIN.ITEM
					},
					chance: recipe.OUTPUT.MAIN.CHANCE
				},
				{
					item: {
						tag: TAGS.WAX
					}
				},
				{
					fluid: {
						fluid: recipe.OUTPUT.FLUID.FLUID
					},
					amount: recipe.OUTPUT.FLUID.AMOUNT
				}
			]
		}).id(`productivebees:centrifuge/${recipe.KEY}`)
	})
})