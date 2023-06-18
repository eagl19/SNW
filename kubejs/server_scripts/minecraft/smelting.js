onEvent('recipes', event => {
	const recipes=[
		{INPUT : COBBLES.ANDESITE, 		OUTPUT : RAW_ROCKS.ANDESITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/andesite'},
		{INPUT : COBBLES.BASALT, 		OUTPUT : RAW_ROCKS.BASALT, 			TIME : 150, EXP : 0.1, KEY : 'raw/basalt'},
		{INPUT : COBBLES.CHALK, 		OUTPUT : RAW_ROCKS.CHALK, 			TIME : 150, EXP : 0.1, KEY : 'raw/chalk'},
		{INPUT : COBBLES.CHERT, 		OUTPUT : RAW_ROCKS.CHERT, 			TIME : 150, EXP : 0.1, KEY : 'raw/chert'},
		{INPUT : COBBLES.CLAYSTONE, 	OUTPUT : RAW_ROCKS.CLAYSTONE, 		TIME : 150, EXP : 0.1, KEY : 'raw/claystone'},
		{INPUT : COBBLES.CONGLOMERATE, 	OUTPUT : RAW_ROCKS.CONGLOMERATE, 	TIME : 150, EXP : 0.1, KEY : 'raw/conglomerate'},
		{INPUT : COBBLES.DACITE, 		OUTPUT : RAW_ROCKS.DACITE, 			TIME : 150, EXP : 0.1, KEY : 'raw/dacite'},
		{INPUT : COBBLES.DIORITE, 		OUTPUT : RAW_ROCKS.DIORITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/diorite'},
		{INPUT : COBBLES.DOLOMITE, 		OUTPUT : RAW_ROCKS.DOLOMITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/dolomite'},
		{INPUT : COBBLES.GABRO, 		OUTPUT : RAW_ROCKS.GABRO, 			TIME : 150, EXP : 0.1, KEY : 'raw/gabbro'},
		{INPUT : COBBLES.GNEISS, 		OUTPUT : RAW_ROCKS.GNEISS, 			TIME : 150, EXP : 0.1, KEY : 'raw/gneiss'},
		{INPUT : COBBLES.GRANITE, 		OUTPUT : RAW_ROCKS.GRANITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/granite'},
		{INPUT : COBBLES.LIMESTONE, 	OUTPUT : RAW_ROCKS.LIMESTONE, 		TIME : 150, EXP : 0.1, KEY : 'raw/limestone'},
		{INPUT : COBBLES.MARBLE, 		OUTPUT : RAW_ROCKS.MARBLE, 			TIME : 150, EXP : 0.1, KEY : 'raw/marble'},
		{INPUT : COBBLES.PHYLLITE, 		OUTPUT : RAW_ROCKS.PHYLLITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/phyllite'},
		{INPUT : COBBLES.QUARTZITE, 	OUTPUT : RAW_ROCKS.QUARTZITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/quartzite'},
		{INPUT : COBBLES.RHYOLITE, 		OUTPUT : RAW_ROCKS.RHYOLITE, 		TIME : 150, EXP : 0.1, KEY : 'raw/rhyolite'},
		{INPUT : COBBLES.SCHIST, 		OUTPUT : RAW_ROCKS.SCHIST, 			TIME : 150, EXP : 0.1, KEY : 'raw/schist'},
		{INPUT : COBBLES.SHALE, 		OUTPUT : RAW_ROCKS.SHALE, 			TIME : 150, EXP : 0.1, KEY : 'raw/shale'},
		{INPUT : COBBLES.SLATE, 		OUTPUT : RAW_ROCKS.SLATE, 			TIME : 150, EXP : 0.1, KEY : 'raw/slate'},
		
		{INPUT : RAW_ROCKS.CHALK, 		OUTPUT : DUSTS.CHALK, 				TIME : 150, EXP : 0.1, KEY : 'dust/chalk'},
		{INPUT : RAW_ROCKS.LIMESTONE, 	OUTPUT : DUSTS.LIME, 				TIME : 150, EXP : 0.1, KEY : 'dust/lime'}
		
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