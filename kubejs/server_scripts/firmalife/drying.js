onEvent('recipes', event => {
	const recipes=[
		{INPUT : TFC_ITEM.WINGED_KELP, 	OUTPUT : { NAME : TFC_ITEM.KELP_STRING, COUNT: 4}, KEY:  'kelp_string/winged_kelp'},
		{INPUT : TFC_ITEM.LEAFY_KELP, 	OUTPUT : { NAME : TFC_ITEM.KELP_STRING, COUNT: 2}, KEY:  'kelp_string/leafy_kelp'}			
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.FL_DRYING,
			ingredient: { 
				item: recipe.INPUT 
			},
			result: { 
				item: recipe.OUTPUT.NAME,
				count: recipe.OUTPUT.COUNT
			},
		}).id(`firmalife:drying/${recipe.KEY}`)
	})
})