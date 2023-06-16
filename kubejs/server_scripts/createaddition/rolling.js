onEvent('recipes', event => {
	const recipes=[
		{INPUT : INGOTS.COPPER, 	OUTPUT : { NAME : WIRES.R_COPPER, COUNT: 2}, KEY:  'rosia/copper_wire'}		
	]
	event.remove({output : WIRES.R_COPPER, type: RECIPE_TYPE.TFC_ANVIL})
	recipes.forEach(recipe=>{
		event.custom(ROLLING(recipe)).id(`createaddition:rolling/${recipe.KEY}`)
	})
})
function ROLLING(recipe){
	return {
		type: RECIPE_TYPE.CA_ROLLING,
		input: Id_or_tag_to_item(recipe.INPUT),
		result: { 
			item: recipe.OUTPUT.NAME,
			count: recipe.OUTPUT.COUNT
		}
	}
}