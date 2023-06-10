onEvent('recipes', event => {
	const recipes=[
		{INPUT : LUMBERS.PINE, 	RESULTS: [ {item: DUSTS.PINE, count: 8}], TIME : 50, KEY:'pine_dust'}
		
	]
	recipes.forEach(recipe=>{
		event.custom(CUTTING(recipe)).id(`create:cutting/${recipe.KEY}`)
	})
})
function CUTTING(recipe){
	return {
		type: RECIPE_TYPE.C_CUTTING,
		ingredients: [ 
				Id_or_tag_to_item(recipe.INPUT)
			],
		results: recipe.RESULTS, 
		processingTime:recipe.TIME
	}
}