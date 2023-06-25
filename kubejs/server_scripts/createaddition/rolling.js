onEvent('recipes', event => {
	const recipes=[
		{INPUT : INGOTS.COPPER, 	OUTPUT : { NAME : WIRES.R_COPPER,			COUNT: 2}, KEY:  'rosia/copper_wire'},
		{INPUT : INGOTS.C_ZINC, 	OUTPUT : { NAME : CREATE_ITEMS.ZINC_HANDLE, COUNT: 1}, KEY:  'create_sa/zinc_handle'},
		{INPUT : SHEETS.C_GOLDEN, 	OUTPUT : { NAME : WIRES.CA_GOLD_WIRE,		COUNT: 2}, KEY:  'createaddition/gold_wire'}	
	]
	event.remove({output : WIRES.R_COPPER, type: RECIPE_TYPE.TFC_ANVIL})
	event.remove({output : CREATE_ITEMS.ZINC_HANDLE})
	event.remove({output : WIRES.CA_GOLD_WIRE})
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