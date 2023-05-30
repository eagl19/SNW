onEvent('recipes', event => {
	const recipes=[
		{INPUT: ORES.PRECIOUS.BITUMINUOS_COAL, 	OUTPUT: IE_ITEM.COKE, 	CREOSOTE: 500, 	TIME: 1800, 	KEY:'coke/bituminous_coal'},
		{INPUT: ORES.PRECIOUS.LIGNITE, 			OUTPUT: IE_ITEM.COKE, 	CREOSOTE: 500, 	TIME: 1800, 	KEY:'coke/lignite'},
		{INPUT: MC_ITEM.CHARCOAL, 				OUTPUT: MC_ITEM.COAL, 	CREOSOTE: 250, 	TIME: 900, 		KEY:'coal/charcoal'},
		{INPUT: IE_ITEM.COKE, 					OUTPUT: ED_ITEMS.COKE, 	CREOSOTE: 750, 	TIME: 2700, 	KEY:'coke/coke'},
		{INPUT: BLOCKS.CHARCOAL, 				OUTPUT: BLOCKS.COAL, 	CREOSOTE: 2500, TIME: 1800, 	KEY:'coal_block/block_charcoal'}
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.IE_COKE_OVEN,
			result: {
				item: recipe.OUTPUT
			},
			input: {
				item: recipe.INPUT
			},
			creosote: recipe.CREOSOTE,
			time: recipe.TIME
		}).id(`immersiveengineering:cokeoven/${recipe.KEY}`)
	})
})