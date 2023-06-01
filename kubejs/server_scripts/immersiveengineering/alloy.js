onEvent('recipes', event => {
	const recipes=[
		{INPUT: [ IE_ITEM.COKE, IE_ITEM.COKE ], OUTPUT: { ITEM : ED_ITEMS.COKE, COUNT : 1 },  	TIME: 200, 	KEY:'coke/coke'}
		
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.IE_ALLOY,
			time: recipe.TIME,
			result: {
				count: recipe.OUTPUT.COUNT,
				base_ingredient: {
					item: recipe.OUTPUT.ITEM
				}
			},
			input0: {
				item: recipe.INPUT[0]
			},
			input1: {
				item: recipe.INPUT[1]
			},
		}).id(`immersiveengineering:alloysmelter/${recipe.KEY}`)
	})
})