onEvent('recipes', event => {
	const recipes=[
		{INPUT : COBBLE_ROCKS.ANDESITE, 	OUTPUT : RAW_ROCKS.ANDESITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/andesite'},
		{INPUT : COBBLE_ROCKS.BASALT, 		OUTPUT : RAW_ROCKS.BASALT, 			TIME : 150, EXP : 0.1, KEY : 'raw/basalt'},
		{INPUT : COBBLE_ROCKS.CHALK, 		OUTPUT : RAW_ROCKS.CHALK, 			TIME : 150, EXP : 0.1, KEY : 'raw/chalk'},
		{INPUT : COBBLE_ROCKS.CHERT, 		OUTPUT : RAW_ROCKS.CHERT, 			TIME : 150, EXP : 0.1, KEY : 'raw/chert'},
		{INPUT : COBBLE_ROCKS.CLAYSTONE, 	OUTPUT : RAW_ROCKS.CLAYSTONE, 		TIME : 150, EXP : 0.1, KEY : 'raw/claystone'},
		{INPUT : COBBLE_ROCKS.CONGLOMERATE, OUTPUT : RAW_ROCKS.CONGLOMERATE, 	TIME : 150, EXP : 0.1, KEY : 'raw/conglomerate'},
		{INPUT : COBBLE_ROCKS.DACITE, 		OUTPUT : RAW_ROCKS.DACITE, 			TIME : 150, EXP : 0.1, KEY : 'raw/dacite'},
		{INPUT : COBBLE_ROCKS.DIORITE, 		OUTPUT : RAW_ROCKS.DIORITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/diorite'},
		{INPUT : COBBLE_ROCKS.DOLOMITE, 	OUTPUT : RAW_ROCKS.DOLOMITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/dolomite'},
		{INPUT : COBBLE_ROCKS.GABRO, 		OUTPUT : RAW_ROCKS.GABRO, 			TIME : 150, EXP : 0.1, KEY : 'raw/gabbro'},
		{INPUT : COBBLE_ROCKS.GNEISS, 		OUTPUT : RAW_ROCKS.GNEISS, 			TIME : 150, EXP : 0.1, KEY : 'raw/gneiss'},
		{INPUT : COBBLE_ROCKS.GRANITE, 		OUTPUT : RAW_ROCKS.GRANITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/granite'},
		{INPUT : COBBLE_ROCKS.LIMESTONE, 	OUTPUT : RAW_ROCKS.LIMESTONE, 		TIME : 150, EXP : 0.1, KEY : 'raw/limestone'},
		{INPUT : COBBLE_ROCKS.MARBLE, 		OUTPUT : RAW_ROCKS.MARBLE, 			TIME : 150, EXP : 0.1, KEY : 'raw/marble'},
		{INPUT : COBBLE_ROCKS.PHYLLITE, 	OUTPUT : RAW_ROCKS.PHYLLITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/phyllite'},
		{INPUT : COBBLE_ROCKS.QUARTZITE, 	OUTPUT : RAW_ROCKS.QUARTZITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/quartzite'},
		{INPUT : COBBLE_ROCKS.RHYOLITE, 	OUTPUT : RAW_ROCKS.RHYOLITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/rhyolite'},
		{INPUT : COBBLE_ROCKS.SCHIST, 		OUTPUT : RAW_ROCKS.SCHIST, 			TIME : 150, EXP : 0.1, KEY : 'raw/schist'},
		{INPUT : COBBLE_ROCKS.SHALE, 		OUTPUT : RAW_ROCKS.SHALE, 			TIME : 150, EXP : 0.1, KEY : 'raw/shale'},
		{INPUT : COBBLE_ROCKS.SLATE, 		OUTPUT : RAW_ROCKS.SLATE, 			TIME : 150, EXP : 0.1, KEY : 'raw/slate'}
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: 'minecraft:smelting',
			ingredient: { 
				item: recipe.INPUT 
			},
			result: recipe.OUTPUT,
			cookingtime: recipe.TIME,
			experience: recipe.EXP
		}).id(`minecraft:smelting/${recipe.KEY}`)
	})
})