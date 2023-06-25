onEvent('recipes', event => {
	const recipes=[
		{
			INPUT : CREATE_ITEMS.BRASS_MACHINE, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.MECHANICAL_CRAFTER,
			SEQUENCES : [
				{TYPE : 'cutting' },
				{TYPE : 'deploying', INPUT : `#${TAGS.TFC_WORCKBENCHES}`},
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.ELECTRON_TUBE},
				{TYPE : 'deploying', INPUT : `#${TAGS.TFC_WORCKBENCHES}`},
				{TYPE : 'deploying', INPUT : MC_ITEM.SLIME_BALL},
				{TYPE : 'pressing' }
			],
			RESULTS : [
				{item : CREATE_ITEMS.MECHANICAL_CRAFTER, 	chance : 480},
				{item : CREATE_ITEMS.BRASS_MACHINE, 		chance : 20	},
				{item : CREATE_ITEMS.ANDESITE_MACHINE, 		chance : 10	},
				{item : CREATE_ITEMS.BRASS_CASING, 			chance : 10	},
				{item : CREATE_ITEMS.ANDESITE_CASING, 		chance : 5	},
				{item : CREATE_ITEMS.ANDESITE_ALLOY, 		chance : 2	},
				{item : CREATE_ITEMS.COGWHEEL, 				chance : 3	}
			],
			LOOP : 2,
			KEY: 'mechanical_crafter'
		},
		{
			INPUT : GREATE_PLATES.ROSE_GOLD, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.PRECISION_MECHANISM,
			SEQUENCES : [
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.COGWHEEL},
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.LARGE_COGWHEEL},
				{TYPE : 'deploying', INPUT : NUGGETS.COBALT}
			],
			RESULTS : [
				{item : CREATE_ITEMS.PRECISION_MECHANISM, 	chance : 480},
				{item : GREATE_PLATES.ROSE_GOLD, 			chance : 20	},
				{item : CREATE_ITEMS.COGWHEEL, 				chance : 5	},
				{item : CREATE_ITEMS.LARGE_COGWHEEL, 		chance : 5	},
				{item : NUGGETS.COBALT, 					chance : 5	}
			],
			LOOP : 5,
			KEY: 'precision_mechanism'
		},
		{
			INPUT : DUSTS.C_OBSIDIAN, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.UNPROCESSED_OBSIDIAN_SHEET,
			SEQUENCES : [
				{TYPE : 'rolling'},
				{TYPE : 'filling', 		INPUT : FLUIDS.LIQUID_BLAZING_COKE, AMOUNT: 500},
				{TYPE : 'filling', 		INPUT : FLUIDS.MC_LAVA, 			AMOUNT: 500},
				{TYPE : 'pressing'},
				{TYPE : 'pressing'},
				{TYPE : 'filling', 		INPUT : FLUIDS.MC_WATER, 			AMOUNT: 1000}
			],
			RESULTS : [
				{item : CREATE_ITEMS.STURDY_SHEET, 	chance : 100}
			],
			LOOP : 1,
			KEY: 'sturdy_sheet'
		},
		{
			INPUT : DUSTS.SALT, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.RAW_GLASS_POWDER,
			SEQUENCES : [
				{TYPE : 'pressing'},
				{TYPE : 'filling', 			INPUT : FLUIDS.LIMEWATER, AMOUNT: 100},				
				{TYPE : 'deploying', 		INPUT : `#${TAGS.GLASS_MATERIALS}`},
				{TYPE : 'deploying', 		INPUT : SANDS.WHITE},
				{TYPE : 'pressing'}				
			],
			RESULTS : [
				{item : DUSTS.GLASS_POWDER, 	chance : 100}
			],
			LOOP : 10,
			KEY: 'glass_powder'
		},
		{
			INPUT : TFC_ITEM.SMOOTH_BASALT_SLAB, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.TRACK,
			SEQUENCES : [
				{TYPE : 'rolling'},
				{TYPE : 'deploying', 		INPUT : RODS.CA_IRON},
				{TYPE : 'deploying', 		INPUT : RODS.CA_IRON},
				{TYPE : 'pressing'}
			],
			RESULTS : [
				{item : CREATE_ITEMS.TRACK, 	chance : 100}
			],
			LOOP : 1,
			KEY: 'track'
		},
		{
			INPUT : SHEETS.C_COPPER, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.HYDRAULIC_ENGINE,
			SEQUENCES : [
				{TYPE : 'rolling'},
				{TYPE : 'filling', 		INPUT : FLUIDS.MC_WATER, 			AMOUNT: 500},
				{TYPE : 'pressing'},
				{TYPE : 'pressing'}
			],
			RESULTS : [
				{item : CREATE_ITEMS.HYDRAULIC_ENGINE, 	chance : 200},
				{item : SHEETS.C_COPPER, 				chance : 20},
				{item : INGOTS.M_COPPER, 				chance : 10}
			],
			LOOP : 10,
			KEY: 'hydraulic_engine'
		},
		{
			INPUT : SHEETS.C_BRASS, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.CA_STEAM_ENGINE,
			SEQUENCES : [
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.COGWHEEL},
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.LARGE_COGWHEEL},
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.PROPELLER},
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.ANDESITE_ALLOY}
			],
			RESULTS : [
				{item : CREATE_ITEMS.CA_STEAM_ENGINE, 	chance : 400},
				{item : SHEETS.C_BRASS, 				chance : 20},
				{item : INGOTS.C_BRASS, 				chance : 10},
				{item : CREATE_ITEMS.PROPELLER, 		chance : 10},
				{item : CREATE_ITEMS.ANDESITE_ALLOY, 	chance : 10}
			],
			LOOP : 5,
			KEY: 'steam_engine'
		},
		{
			INPUT : CREATE_ITEMS.ANDESITE_ALLOY, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.HEAT_ENGINE,
			SEQUENCES : [
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.COGWHEEL},
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.LARGE_COGWHEEL},
				{TYPE : 'deploying', INPUT : NUGGETS.THORIUM},
				{TYPE : 'deploying', INPUT : NUGGETS.COBALT}
			],
			RESULTS : [
				{item : CREATE_ITEMS.HEAT_ENGINE, 		chance : 400},
				{item : CREATE_ITEMS.ANDESITE_ALLOY, 	chance : 20},
				{item : NUGGETS.THORIUM, 				chance : 10},
				{item : NUGGETS.COBALT, 				chance : 10}
			],
			LOOP : 5,
			KEY: 'heat_engine'
		},
		{
			INPUT : CREATE_ITEMS.SMALL_FILLING_TANK, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.MEDIUM_FILLING_TANK,
			SEQUENCES : [
				{TYPE : 'deploying', INPUT : SHEETS.C_COPPER}
			],
			RESULTS : [
				{item : CREATE_ITEMS.MEDIUM_FILLING_TANK, 	chance : 400},
				{item : SHEETS.C_COPPER, 					chance : 20}
			],
			LOOP : 4,
			KEY: 'medium_filling_tank'
		},
		{
			INPUT : CREATE_ITEMS.MEDIUM_FILLING_TANK, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.LARGE_FILLING_TANK,
			SEQUENCES : [
				{TYPE : 'deploying', INPUT : SHEETS.C_COPPER}
			],
			RESULTS : [
				{item : CREATE_ITEMS.LARGE_FILLING_TANK, 	chance : 400},
				{item : SHEETS.C_COPPER, 					chance : 20}
			],
			LOOP : 8,
			KEY: 'large_filling_tank'
		},
		{
			INPUT : CREATE_ITEMS.SMALL_FILLING_TANK, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.SMALL_FUELING_TANK,
			SEQUENCES : [
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.STURDY_SHEET}
			],
			RESULTS : [
				{item : CREATE_ITEMS.SMALL_FUELING_TANK, 	chance : 400},
				{item : CREATE_ITEMS.STURDY_SHEET, 			chance : 20}
			],
			LOOP : 4,
			KEY: 'small_fueling_tank'
		},
		{
			INPUT : CREATE_ITEMS.SMALL_FUELING_TANK, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.MEDIUM_FUELING_TANK,
			SEQUENCES : [
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.STURDY_SHEET}
			],
			RESULTS : [
				{item : CREATE_ITEMS.MEDIUM_FUELING_TANK, 	chance : 400},
				{item : CREATE_ITEMS.STURDY_SHEET, 			chance : 20}
			],
			LOOP : 8,
			KEY: 'medium_fueling_tank'
		},
		{
			INPUT : CREATE_ITEMS.MEDIUM_FUELING_TANK, 
			INCOMPLETE : CREATE_ITEMS.INCOMPLECT.LARGE_FUELING_TANK,
			SEQUENCES : [
				{TYPE : 'deploying', INPUT : CREATE_ITEMS.STURDY_SHEET}
			],
			RESULTS : [
				{item : CREATE_ITEMS.LARGE_FUELING_TANK, 	chance : 400},
				{item : CREATE_ITEMS.STURDY_SHEET, 			chance : 20}
			],
			LOOP : 12,
			KEY: 'large_fueling_tank'
		}
	]
	event.remove({output : CREATE_ITEMS.MECHANICAL_CRAFTER})
	event.remove({output : CREATE_ITEMS.PRECISION_MECHANISM})
	event.remove({output : CREATE_ITEMS.STURDY_SHEET})
	event.remove({output : CREATE_ITEMS.TRACK})
	event.remove({output : CREATE_ITEMS.HYDRAULIC_ENGINE})
	event.remove({output : CREATE_ITEMS.CA_STEAM_ENGINE})
	event.remove({output : CREATE_ITEMS.HEAT_ENGINE})
	event.remove({output : CREATE_ITEMS.MEDIUM_FILLING_TANK})
	event.remove({output : CREATE_ITEMS.LARGE_FILLING_TANK})
	event.remove({output : CREATE_ITEMS.SMALL_FUELING_TANK})
	event.remove({output : CREATE_ITEMS.MEDIUM_FUELING_TANK})
	event.remove({output : CREATE_ITEMS.LARGE_FUELING_TANK})
	recipes.forEach(recipe=>{
		let SEQUENCE=[]
		recipe.SEQUENCES.forEach(sequence=>{
			switch(sequence.TYPE) {
				case 'deploying' :
					SEQUENCE.push(DEPLOYING({INGREDIENTS : [{item : recipe.INCOMPLETE}, Id_or_tag_to_item(sequence.INPUT)],RESULTS : [{item : recipe.INCOMPLETE}]}));
					break;
				case 'cutting' :
					SEQUENCE.push(CUTTING({INPUT : recipe.INCOMPLETE, RESULTS : [{item : recipe.INCOMPLETE}], TIME : 50	}));
					break;
				case 'pressing' :
					SEQUENCE.push(PRESSING({ INGREDIENTS : [{item : recipe.INCOMPLETE}], RESULTS : [{item : recipe.INCOMPLETE}]}));
					break;
				case 'rolling' :
					SEQUENCE.push(ROLLING({ INPUT : recipe.INCOMPLETE, OUTPUT : {NAME : recipe.INCOMPLETE, COUNT: 1}}));
					break;
				case 'filling' :
					SEQUENCE.push(FILLING({ INPUT : recipe.INCOMPLETE, FLUID : sequence.INPUT, AMOUNT: sequence.AMOUNT, RESULT: recipe.INCOMPLETE}));
					break;
				
			}
		})
		event.custom({
			type: RECIPE_TYPE.C_SEQUENCED_ASSEMBLY,
			ingredient: Id_or_tag_to_item(recipe.INPUT),
			transitionalItem: {
				item: recipe.INCOMPLETE
			},
			sequence: SEQUENCE,			
			results: recipe.RESULTS,
			loops:recipe.LOOP
		}).id(`create:sequenced_assembly/${recipe.KEY}`)
	})
	
})

