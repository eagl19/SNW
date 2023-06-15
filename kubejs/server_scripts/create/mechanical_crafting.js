onEvent('recipes', event => {
	const recipes=[
		{PATTERN : [" AAA ","ABCBA","ACDCA","ABCBA"," AAA "], 	PUTTERN_KEY: {A : {item : SHEETS.CONSTANTAN},				C : {item : RODS.MITHRIL}, 
																			  B : {item : GREATE_RODS.ALNICO},				D : {item : CREATE_ITEMS.COPPER_MACHINE}}, 	RESULT : { NAME: CREATE_ITEMS.FLYWHEEL, 		COUNT : 1}, KEY: 'flywheel'},
		{PATTERN : [" AAA ","ABCBA","ACDCA","ABCBA"," AAA "], 	PUTTERN_KEY: {A : {item : DOUBLE_INGOTS.OSMIRIDIUM},		C : {item : RODS.PEWTER}, 
																			  B : {item : GREATE_RODS.BERYLLIUM_COPPER},	D : {item : CREATE_ITEMS.FLYWHEEL}}, 		RESULT : { NAME: CREATE_ITEMS.CRUSHING_WHEEL, 	COUNT : 2}, KEY: 'crushing_wheel'},
		{PATTERN : ["A A"," B ","A A"], 						PUTTERN_KEY: {A : {item : SHEETS.C_IRON},					B : {item : TFC_ITEM.BRASS_MECHANISM}}, 	RESULT : { NAME: CREATE_ITEMS.PROPELLER, 		COUNT : 1}, KEY: 'propeller'},
		{PATTERN : ["AAA","ABA","AAA"], 						PUTTERN_KEY: {A : {item : SHEETS.C_IRON},					B : {item : MC_ITEM.BARREL}}, 				RESULT : { NAME: CREATE_ITEMS.ITEM_VAULT, 		COUNT : 1}, KEY: 'item_vault'}
	]
	
	recipes.forEach(recipe=>{
		event.remove({output : recipe.RESULT.NAME})
		event.custom({
			type: RECIPE_TYPE.C_MACHANICAL_CRAFTING,
			pattern: recipe.PATTERN,
			key: recipe.PUTTERN_KEY,
			result: { 
				item: recipe.RESULT.NAME,
				count: recipe.RESULT.COUNT
			}
		}).id(`create:mechanical_crafting/${recipe.KEY}`)
	})
})