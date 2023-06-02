onEvent('recipes', event => {
	const recipes=[
		{INPUT: [ IE_ITEM.COKE, 		IE_ITEM.COKE ], 		OUTPUT: { ITEM : ED_ITEMS.COKE, 	COUNT : 1 },  	TIME: 200, 	KEY:'coke/coke'},
		{INPUT: [ INGOTS.WROUGHT_IRON, 	INGOTS.WROUGHT_IRON ], 	OUTPUT: { ITEM : INGOTS.M_IRON, 	COUNT : 1 },  	TIME: 200, 	KEY:'iron'},
		{INPUT: [ INGOTS.BRASS, 		INGOTS.BRASS ], 		OUTPUT: { ITEM : INGOTS.C_BRASS, 	COUNT : 1 },  	TIME: 200, 	KEY:'brass'},
		{INPUT: [ INGOTS.GOLD, 			INGOTS.GOLD ], 			OUTPUT: { ITEM : INGOTS.M_GOLD, 	COUNT : 1 },  	TIME: 200, 	KEY:'gold'}
		
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