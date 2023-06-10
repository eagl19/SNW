onEvent('recipes', event => {
	const recipes=[
		{PATTERN : [" AAA ","ABCBA","ACDCA","ABCBA"," AAA "], PUTTERN_KEY: {A : {item : SHEETS.CONSTANTAN},				C : {item : RODS.MITHRIL}, 
																			B : {item : GREATE_RODS.ALNICO},			D : {item : CREATE_ITEMS.COPPER_MACHINE}}, 	RESULT : { NAME: CREATE_ITEMS.FLYWHEEL, 		COUNT : 1}, KEY: 'flywheel'},
		{PATTERN : [" AAA ","ABCBA","ACDCA","ABCBA"," AAA "], PUTTERN_KEY: {A : {item : DOUBLE_INGOTS.OSMIRIDIUM},		C : {item : RODS.PEWTER}, 
																			B : {item : GREATE_RODS.BERYLLIUM_COPPER},	D : {item : CREATE_ITEMS.FLYWHEEL}}, 		RESULT : { NAME: CREATE_ITEMS.CRUSHING_WHEEL, 	COUNT : 2}, KEY: 'crushing_wheel'}
	]
	event.remove({output : CREATE_ITEMS.FLYWHEEL})
	recipes.forEach(recipe=>{
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