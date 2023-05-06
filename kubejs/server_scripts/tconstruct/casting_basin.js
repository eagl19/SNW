onEvent('recipes', event => {
	const recipes=[
		{INPUT : { name : FLUIDS.ALUMINUM, 		amount: 1000 }, OUTPUT : BLOCKS.ALUMINUM, 		TIME : 212,  KEY : 'aluminum'},
		{INPUT : { name : FLUIDS.COPPER, 		amount: 1000 }, OUTPUT : BLOCKS.COPPER, 		TIME : 300,  KEY : 'copper'},
		{INPUT : { name : FLUIDS.GOLD, 			amount: 1000 }, OUTPUT : BLOCKS.GOLD, 			TIME : 100,  KEY : 'gold'},
		{INPUT : { name : FLUIDS.WROUGHT_IRON, 	amount: 1000 }, OUTPUT : BLOCKS.WROUGHT_IRON, 	TIME : 424,  KEY : 'wrought_iron'},
		{INPUT : { name : FLUIDS.LEAD, 			amount: 1000 }, OUTPUT : BLOCKS.LEAD, 			TIME : 144,  KEY : 'lead'},
		{INPUT : { name : FLUIDS.NICKEL, 		amount: 1000 }, OUTPUT : BLOCKS.NICKEL, 		TIME : 216,  KEY : 'nickel'},
		{INPUT : { name : FLUIDS.SILVER, 		amount: 1000 }, OUTPUT : BLOCKS.SILVER, 		TIME : 140,  KEY : 'silver'},
		{INPUT : { name : FLUIDS.TIN, 			amount: 1000 }, OUTPUT : BLOCKS.TIN, 			TIME : 369,  KEY : 'tin'},
		{INPUT : { name : FLUIDS.ZINC,			amount: 1000 }, OUTPUT : BLOCKS.ZINC, 			TIME : 324,  KEY : 'zinc'},
		{INPUT : { name : FLUIDS.BISMUTH, 		amount: 1000 }, OUTPUT : BLOCKS.BISMUTH, 		TIME : 468,  KEY : 'bismuth'},
		{INPUT : { name : FLUIDS.BERYLLIUM, 	amount: 1000 }, OUTPUT : BLOCKS.BERYLLIUM, 		TIME : 332,  KEY : 'beryllium'},
		{INPUT : { name : FLUIDS.COBALT, 		amount: 1000 }, OUTPUT : BLOCKS.COBALT, 		TIME : 580,  KEY : 'cobalt'},
		{INPUT : { name : FLUIDS.BORON, 		amount: 1000 }, OUTPUT : BLOCKS.BORON, 			TIME : 668,  KEY : 'boron'},
		{INPUT : { name : FLUIDS.THORIUM, 		amount: 1000 }, OUTPUT : BLOCKS.THORIUM,	 	TIME : 564,  KEY : 'thorium'},
		{INPUT : { name : FLUIDS.IRIDIUM, 		amount: 1000 }, OUTPUT : BLOCKS.IRIDIUM, 		TIME : 688,  KEY : 'iridium'},
		{INPUT : { name : FLUIDS.TITANIUM, 		amount: 1000 }, OUTPUT : BLOCKS.TITANIUM, 		TIME : 548,  KEY : 'titanium'},
		{INPUT : { name : FLUIDS.ANTIMONY, 		amount: 1000 }, OUTPUT : BLOCKS.ANTIMONY, 		TIME : 244,  KEY : 'antimony'},
		{INPUT : { name : FLUIDS.TUNGSTEN, 		amount: 1000 }, OUTPUT : BLOCKS.TUNGSTEN, 		TIME : 1648, KEY : 'tungsten'},
		{INPUT : { name : FLUIDS.CHROMIUM, 		amount: 1000 }, OUTPUT : BLOCKS.CHROMIUM,	 	TIME : 348,  KEY : 'chromium'},
		{INPUT : { name : FLUIDS.URANIUM, 		amount: 1000 }, OUTPUT : BLOCKS.URANIUM, 		TIME : 304,  KEY : 'uranium'},
		{INPUT : { name : FLUIDS.PLATINUM, 		amount: 1000 }, OUTPUT : BLOCKS.PLATINUM, 		TIME : 480,  KEY : 'platinum'},
		{INPUT : { name : FLUIDS.OSMIUM, 		amount: 1000 }, OUTPUT : BLOCKS.OSMIUM, 		TIME : 836,  KEY : 'osmium'}
		
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: 'tconstruct:casting_basin',
			fluid: recipe.INPUT,
			result: { 
				item: recipe.OUTPUT
			},
			cooling_time: recipe.TIME
		}).id(`tconstruct:smeltery/casting/metal/${recipe.KEY}/block`)
	})
})