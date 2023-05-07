onEvent('recipes', event => {
	const recipes=[
		{INPUT : [	{name : FLUIDS.COPPER, 			amount : 9  }, {name : FLUIDS.TIN, 				amount : 1   }	], OUTPUT : {fluid : FLUIDS.BRONZE, 			amount : 10  }, TEMPERATURE : 950,  KEY : 'bronze' },
		{INPUT : [	{name : FLUIDS.BISMUTH,			amount : 15 }, {name : FLUIDS.BRASS, 			amount : 85  }	], OUTPUT : {fluid : FLUIDS.BISMUTH_BRONZE, 	amount : 100 }, TEMPERATURE : 985,  KEY : 'bismuth_bronze' },
		{INPUT : [	{name : FLUIDS.SILVER, 			amount : 35 }, {name : FLUIDS.ROSE_GOLD, 		amount : 155 }	], OUTPUT : {fluid : FLUIDS.BLACK_BRONZE, 		amount : 190 }, TEMPERATURE : 1070, KEY : 'black_bronze' },
		{INPUT : [	{name : FLUIDS.COPPER, 			amount : 90 }, {name : FLUIDS.ZINC, 			amount : 10  }	], OUTPUT : {fluid : FLUIDS.BRASS, 				amount : 100 }, TEMPERATURE : 930,  KEY : 'brass' },
		{INPUT : [	{name : FLUIDS.COPPER, 			amount : 45 }, {name : FLUIDS.GOLD, 			amount : 155 }	], OUTPUT : {fluid : FLUIDS.ROSE_GOLD, 			amount : 200 }, TEMPERATURE : 960,  KEY : 'rose_gold' },
		{INPUT : [	{name : FLUIDS.COPPER, 			amount : 30 }, {name : FLUIDS.SILVER, 			amount : 70  }	], OUTPUT : {fluid : FLUIDS.STERLING_SILVER, 	amount : 100 }, TEMPERATURE : 950,  KEY : 'sterling_silver' },
		{INPUT : [	{name : FLUIDS.STEEL, 			amount : 60 }, {name : FLUIDS.NICKEL, 			amount : 20  }, 
					{name : FLUIDS.BLACK_BRONZE, 	amount : 20 }													], OUTPUT : {fluid : FLUIDS.BLACK_STEEL, 		amount : 100 }, TEMPERATURE : 1485, KEY : 'black_steel' },
		{INPUT : [	{name : FLUIDS.STEEL, 			amount : 45 }, {name : FLUIDS.BLACK_STEEL,		amount : 105 }, 
					{name : FLUIDS.BISMUTH_BRONZE, 	amount : 25 }, {name : FLUIDS.STERLING_SILVER,	amount : 25  }	], OUTPUT : {fluid : FLUIDS.BLUE_STEEL, 		amount : 100 }, TEMPERATURE : 1540, KEY : 'blue_steel' },
		{INPUT : [	{name : FLUIDS.STEEL, 			amount : 45 }, {name : FLUIDS.BLACK_STEEL,		amount : 105 }, 
					{name : FLUIDS.BRASS, 			amount : 25 }, {name : FLUIDS.ROSE_GOLD,		amount : 25  }	], OUTPUT : {fluid : FLUIDS.RED_STEEL, 			amount : 100 }, TEMPERATURE : 1540, KEY : 'red_steel' },
		{INPUT : [	{name : FLUIDS.ALUMINUM, 		amount : 50 }, {name : FLUIDS.COBALT, 			amount : 30  }, 
					{name : FLUIDS.NICKEL, 			amount : 30 }													], OUTPUT : {fluid : FLUIDS.ALNICO, 			amount : 110 }, TEMPERATURE : 1500, KEY : 'alnico' },
		{INPUT : [	{name : FLUIDS.COPPER, 			amount : 40 }, {name : FLUIDS.BERYLLIUM, 		amount : 40  }, 
					{name : FLUIDS.ALUMINUM, 		amount : 20 }													], OUTPUT : {fluid : FLUIDS.BERYLLIUM_COPPER, 	amount : 110 }, TEMPERATURE : 1500, KEY : 'beryllium_copper' },
		{INPUT : [	{name : FLUIDS.COPPER, 			amount : 50 }, {name : FLUIDS.NICKEL, 			amount : 50  }	], OUTPUT : {fluid : FLUIDS.CONSTANTAN, 		amount : 100 }, TEMPERATURE : 1200, KEY : 'constantan' },
		{INPUT : [	{name : FLUIDS.SILVER, 			amount : 50 }, {name : FLUIDS.GOLD, 			amount : 50  }	], OUTPUT : {fluid : FLUIDS.ELECTRUM, 			amount : 100 }, TEMPERATURE : 1200, KEY : 'electrum' },
		{INPUT : [	{name : FLUIDS.STEEL, 			amount : 50 }, {name : FLUIDS.BORON, 			amount : 50  }	], OUTPUT : {fluid : FLUIDS.FERROBORON, 		amount : 100 }, TEMPERATURE : 3000, KEY : 'ferroboron' },
		{INPUT : [	{name : FLUIDS.MITHRIL, 		amount : 85 }, {name : FLUIDS.ALUMINUM, 		amount : 15  }	], OUTPUT : {fluid : FLUIDS.FLORENTINE_BRONZE, 	amount : 100 }, TEMPERATURE : 400,  KEY : 'florentine_bronze' },
		{INPUT : [	{name : FLUIDS.WROUGHT_IRON, 	amount : 65 }, {name : FLUIDS.NICKEL, 			amount : 35  }	], OUTPUT : {fluid : FLUIDS.INVAR, 				amount : 100 }, TEMPERATURE : 1450, KEY : 'invar' },
		{INPUT : [	{name : FLUIDS.COPPER, 			amount : 90 }, {name : FLUIDS.ANTIMONY, 		amount : 10  }	], OUTPUT : {fluid : FLUIDS.MITHRIL, 			amount : 100 }, TEMPERATURE : 940,  KEY : 'mithril' },
		{INPUT : [	{name : FLUIDS.BRASS, 			amount : 80 }, {name : FLUIDS.NICKEL, 			amount : 20  }	], OUTPUT : {fluid : FLUIDS.NICKEL_SILVER, 		amount : 100 }, TEMPERATURE : 1450, KEY : 'nickel_silver' },
		{INPUT : [	{name : FLUIDS.OSMIUM, 			amount : 70 }, {name : FLUIDS.IRIDIUM, 			amount : 30  }	], OUTPUT : {fluid : FLUIDS.OSMIRIDIUM, 		amount : 100 }, TEMPERATURE : 1500, KEY : 'osmiridium' },
		{INPUT : [	{name : FLUIDS.LEAD, 			amount : 30 }, {name : FLUIDS.ANTIMONY, 		amount : 70  }	], OUTPUT : {fluid : FLUIDS.PEWTER, 			amount : 100 }, TEMPERATURE : 1500, KEY : 'pewter' },
		{INPUT : [	{name : FLUIDS.ANTIMONY, 		amount : 50 }, {name : FLUIDS.BISMUTH, 			amount : 30  },
					{name : FLUIDS.TIN, 			amount : 30 }													], OUTPUT : {fluid : FLUIDS.SOLDER, 			amount : 110 }, TEMPERATURE : 400,  KEY : 'solder' }
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: 'tconstruct:alloy',
			inputs: recipe.INPUT,
			result: recipe.OUTPUT,
			temperature: recipe.TEMPERATURE
		}).id(`tconstruct:smeltery/alloys/molten_${recipe.KEY}`)
	})
})