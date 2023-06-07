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
		{INPUT : { name : FLUIDS.OSMIUM, 		amount: 1000 }, OUTPUT : BLOCKS.OSMIUM, 		TIME : 836,  KEY : 'osmium'},

		{INPUT : { name : FLUIDS.BRONZE, 			amount: 1000 }, OUTPUT : BLOCKS.BRONZE, 			TIME : 264,  KEY : 'bronze'},
		{INPUT : { name : FLUIDS.BISMUTH_BRONZE,	amount: 1000 }, OUTPUT : BLOCKS.BISMUTH_BRONZE,		TIME : 272,  KEY : 'bismuth_bronze'},
		{INPUT : { name : FLUIDS.BLACK_BRONZE, 		amount: 1000 }, OUTPUT : BLOCKS.BLACK_BRONZE, 		TIME : 296,  KEY : 'black_bronze'},
		{INPUT : { name : FLUIDS.BRASS, 			amount: 1000 }, OUTPUT : BLOCKS.BRASS, 				TIME : 256,  KEY : 'brass'},
		{INPUT : { name : FLUIDS.ROSE_GOLD, 		amount: 1000 }, OUTPUT : BLOCKS.ROSE_GOLD, 			TIME : 264,  KEY : 'rose_gold'},
		{INPUT : { name : FLUIDS.STERLING_SILVER, 	amount: 1000 }, OUTPUT : BLOCKS.STERLING_SILVER, 	TIME : 260,  KEY : 'sterling_silver'},
		{INPUT : { name : FLUIDS.STEEL, 			amount: 1000 }, OUTPUT : BLOCKS.STEEL, 				TIME : 428,  KEY : 'steel'},
		{INPUT : { name : FLUIDS.BLACK_STEEL, 		amount: 1000 }, OUTPUT : BLOCKS.BLACK_STEEL, 		TIME : 412,  KEY : 'black_steel'},
		{INPUT : { name : FLUIDS.BLUE_STEEL, 		amount: 1000 }, OUTPUT : BLOCKS.BLUE_STEEL, 		TIME : 428,  KEY : 'blue_steel'},
		{INPUT : { name : FLUIDS.RED_STEEL, 		amount: 1000 }, OUTPUT : BLOCKS.RED_STEEL, 			TIME : 428,  KEY : 'red_steel'},
		{INPUT : { name : FLUIDS.ALNICO, 			amount: 1000 }, OUTPUT : BLOCKS.ALNICO, 			TIME : 416,  KEY : 'alnico'},
		{INPUT : { name : FLUIDS.BERYLLIUM_COPPER,	amount: 1000 }, OUTPUT : BLOCKS.BERYLLIUM_COPPER,	TIME : 416,  KEY : 'beryllium_copper'},
		{INPUT : { name : FLUIDS.CONSTANTAN, 		amount: 1000 }, OUTPUT : BLOCKS.CONSTANTAN, 		TIME : 164,  KEY : 'constantan'},
		{INPUT : { name : FLUIDS.ELECTRUM, 			amount: 1000 }, OUTPUT : BLOCKS.ELECTRUM, 			TIME : 164,  KEY : 'electrum'},
		{INPUT : { name : FLUIDS.FERROBORON, 		amount: 1000 }, OUTPUT : BLOCKS.FERROBORON, 		TIME : 1128, KEY : 'ferroboron'},
		{INPUT : { name : FLUIDS.FLORENTINE_BRONZE,	amount: 1000 }, OUTPUT : BLOCKS.FLORENTINE_BRONZE, 	TIME : 112,  KEY : 'florentine_bronze'},
		{INPUT : { name : FLUIDS.INVAR, 			amount: 1000 }, OUTPUT : BLOCKS.INVAR, 				TIME : 400,  KEY : 'invar'},
		{INPUT : { name : FLUIDS.MITHRIL, 			amount: 1000 }, OUTPUT : BLOCKS.MITHRIL, 			TIME : 260,  KEY : 'mithril'},
		{INPUT : { name : FLUIDS.NICKEL_SILVER, 	amount: 1000 }, OUTPUT : BLOCKS.NICKEL_SILVER, 		TIME : 400,  KEY : 'nickel_silver'},
		{INPUT : { name : FLUIDS.OSMIRIDIUM, 		amount: 1000 }, OUTPUT : BLOCKS.OSMIRIDIUM, 		TIME : 416,  KEY : 'osmiridium'},
		{INPUT : { name : FLUIDS.PEWTER, 			amount: 1000 }, OUTPUT : BLOCKS.PEWTER, 			TIME : 416,  KEY : 'pewter'},
		{INPUT : { name : FLUIDS.SOLDER, 			amount: 1000 }, OUTPUT : BLOCKS.SOLDER, 			TIME : 112,  KEY : 'solder'},
		{INPUT : { name : FLUIDS.TUNGSTEN_STEEL, 	amount: 1000 }, OUTPUT : BLOCKS.TUNGSTEN_STEEL, 	TIME : 3128, KEY : 'tungsten_steel'},
		{INPUT : { name : FLUIDS.STAINLESS_STEEL, 	amount: 1000 }, OUTPUT : BLOCKS.STAINLESS_STEEL, 	TIME : 428,  KEY : 'stainless_steel'}
		
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.TC_CASTING_BASIN,
			fluid: recipe.INPUT,
			result: { 
				item: recipe.OUTPUT
			},
			cooling_time: recipe.TIME
		}).id(`tconstruct:smeltery/casting/metal/${recipe.KEY}/block`)
	})
	const recipes_cast=[
		{CAST : CREATE_ITEMS.FLUID_TANK, 		CAST_CONSUMED : true, INPUT : { name : FLUIDS.TC_QUARTZ, 	amount: 1000 }, OUTPUT : TC_ITEM.FUEL_TANK, 		TIME : 237,  KEY : 'seared_fuel_tank'},
		{CAST : TFC_ITEM.FIRE_BRICKS, 			CAST_CONSUMED : true, INPUT : { name : FLUIDS.OBSIDIAN, 	amount: 1000 }, OUTPUT : IE_ITEM.COKE_BRICK, 		TIME : 133,  KEY : 'cokebrick'},
		{CAST : CREATE_ITEMS.ANDESITE_CASING, 	CAST_CONSUMED : true, INPUT : { name : FLUIDS.BRASS, 		amount: 1000 }, OUTPUT : CREATE_ITEMS.BRASS_CASING, TIME : 133,  KEY : 'brass_casing'}
	]	
	event.remove({output : TC_ITEM.FUEL_TANK, type : RECIPE_TYPE.MC_SHAPED})
	recipes_cast.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.TC_CASTING_BASIN,
			cast: { item : recipe.CAST },
			cast_consumed:  recipe.CAST_CONSUMED,
			fluid: recipe.INPUT,
			result: { 
				item: recipe.OUTPUT
			},
			cooling_time: recipe.TIME
		}).id(`tconstruct:casting_basin/${recipe.KEY}`)
	})
})