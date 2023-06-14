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
		}
	]
	event.remove({output : CREATE_ITEMS.MECHANICAL_CRAFTER})
	event.remove({output : CREATE_ITEMS.PRECISION_MECHANISM})
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