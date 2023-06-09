onEvent('recipes', event => {
	const TEXTURE={
		TFC_BURLAP: 	"tfc:block/burlap",
		TFC_CHARCOAL:	"tfc:block/charcoal_pile"
	}
	const recipes=[
		{INPUT : TFC_ITEM.KELP_STRING,		COUNT : 12,	OUTPUT : { NAME : TFC_ITEM.KELP_CLOTH, 	COUNT: 1}, STEP : 12, IN_PROGRESS_TEXTURE : TEXTURE.TFC_BURLAP, 	KEY:  'kelp_cloth/kelp_string'},
		{INPUT : TFC_ITEM.CREOSOTE_CLOTH,  	COUNT : 4 ,	OUTPUT : { NAME : CREATE_ITEMS.BELT, 	COUNT: 1}, STEP : 12, IN_PROGRESS_TEXTURE : TEXTURE.TFC_CHARCOAL,	KEY:  'belt_connector/creosote_cloth'}		
	]
	event.remove({output : CREATE_ITEMS.BELT})
	recipes.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.TFC_LOOM,
			ingredient: { 
				item: recipe.INPUT 
			},
			input_count: recipe.COUNT,
			result: { 
				item: recipe.OUTPUT.NAME,
				count: recipe.OUTPUT.COUNT
			},
			steps_required: recipe.STEP,
			in_progress_texture: recipe.IN_PROGRESS_TEXTURE
		}).id(`tfc:loom/${recipe.KEY}`)
	})
})