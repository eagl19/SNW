onEvent('recipes', event => {
	const recipes=[
		{INPUT: IE_ITEM.TEXTOLITE, 	FLUID: FLUIDS.REDSTONE_ACID, AMOUNT: 250, RESULT: IE_ITEM.CIRCUIT_BOARD, KEY: 'immersiveengineering/circuit_board'}		
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.C_FILLING,
			ingredients:[ 
				{ 
					item: recipe.INPUT 
				},
				{
					fluid:recipe.FLUID,
					nbt:{},
					amount:recipe.AMOUNT
				}
			],
			results: [ 
				{ 
					item: recipe.RESULT 
				}
			]
		}).id(`create:filling/${recipe.KEY}`)
	})
})