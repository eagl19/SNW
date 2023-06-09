onEvent('recipes', event => {
	const recipes=[
		{INPUT : CREATE_ITEMS.ANDESITE_MACHINE, RESULT: CREATE_ITEMS.ANDESITE_TUNNEL,				COUNT: 1, KEY:'create/andesite_tunnel'},
		{INPUT : CREATE_ITEMS.ANDESITE_MACHINE, RESULT: CREATE_ITEMS.CHUTE, 						COUNT: 2, KEY:'create/chute'},
		{INPUT : CREATE_ITEMS.ANDESITE_MACHINE, RESULT: CREATE_ITEMS.GEARBOX, 						COUNT: 1, KEY:'create/gearbox'},
		{INPUT : CREATE_ITEMS.ANDESITE_MACHINE, RESULT: CREATE_ITEMS.CLUTCH, 						COUNT: 1, KEY:'create/clutch'},
		{INPUT : CREATE_ITEMS.ANDESITE_MACHINE, RESULT: CREATE_ITEMS.GEARSHIFT, 					COUNT: 1, KEY:'create/gearshift'},
		{INPUT : CREATE_ITEMS.ANDESITE_MACHINE, RESULT: CREATE_ITEMS.ENCASED_CHAIN_DRIVE, 			COUNT: 1, KEY:'create/encased_chain_drive'},
		{INPUT : CREATE_ITEMS.ANDESITE_MACHINE,	RESULT: CREATE_ITEMS.ANDESITE_FUNNEL, 				COUNT: 2, KEY:'create/andesite_funnel'},
		{INPUT : CREATE_ITEMS.ANDESITE_MACHINE, RESULT: CREATE_ITEMS.ROPE_PULLEY, 					COUNT: 1, KEY:'create/rope_pulley'},
		{INPUT : CREATE_ITEMS.ANDESITE_MACHINE, RESULT: CREATE_ITEMS.WEIGHTED_EJECTOR, 				COUNT: 1, KEY:'create/weighted_ejector'},
		
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.SMART_CHUTE, 					COUNT: 2, KEY:'create/smart_chute'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.BRASS_TUNNEL, 					COUNT: 1, KEY:'create/brass_tunnel'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.BRASS_FUNNEL, 					COUNT: 2, KEY:'create/brass_funnel'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.CONTENT_OBSERVER,				COUNT: 1, KEY:'create/content_observer'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.STOCKPILE_SWITCH, 				COUNT: 1, KEY:'create/stockpile_switch'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.DISPLAY_LINK, 					COUNT: 3, KEY:'create/display_link'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.DISPLAY_BOARD, 				COUNT: 3, KEY:'create/display_board'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.SEQUENCED_GEARSHIFT, 			COUNT: 1, KEY:'create/sequenced_gearshift'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.SPEEDOMETER, 					COUNT: 1, KEY:'create/speedometer'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.STRESSOMETER, 					COUNT: 1, KEY:'create/stressometer'},		
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.ELEVATOR_PULLEY, 				COUNT: 1, KEY:'create/elevator_pulley'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.PORTABLE_STORAGE_INTERFACE,	COUNT: 1, KEY:'create/portable_storage_interface'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.CONTRAPTION_CONTROLS, 			COUNT: 1, KEY:'create/contraption_controls'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.REDSTONE_CONTACT, 				COUNT: 2, KEY:'create/redstone_contact'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.ADJUSTABLE_CHAIN_GEARSHIFT,	COUNT: 1, KEY:'create/adjustable_chain_gearshift'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.MECHANICAL_HARVESTER,			COUNT: 1, KEY:'create/mechanical_harvester'},
		{INPUT : CREATE_ITEMS.BRASS_MACHINE, 	RESULT: CREATE_ITEMS.MECHANICAL_PLOUGH,				COUNT: 1, KEY:'create/mechanical_plough'},
		
		{INPUT : CREATE_ITEMS.COPPER_MACHINE, 	RESULT: CREATE_ITEMS.STEAM_WHISTLE,					COUNT: 1, KEY:'create/steam_whistle'},
		{INPUT : CREATE_ITEMS.COPPER_MACHINE, 	RESULT: CREATE_ITEMS.STICKER,						COUNT: 1, KEY:'create/sticker'},
		{INPUT : CREATE_ITEMS.COPPER_MACHINE, 	RESULT: CREATE_ITEMS.HOSE_PULLEY,					COUNT: 1, KEY:'create/hose_pulley'},
		{INPUT : CREATE_ITEMS.COPPER_MACHINE, 	RESULT: CREATE_ITEMS.PORTABLE_FLUID_INTERFACE,		COUNT: 1, KEY:'create/portable_fluid_interface'},
		
		{INPUT : CREATE_ITEMS.ANDESITE_CASING, 	RESULT: CREATE_ITEMS.LINEAR_CHASSIS,				COUNT: 3, KEY:'create/linear_chassis'},
		{INPUT : CREATE_ITEMS.ANDESITE_CASING, 	RESULT: CREATE_ITEMS.RADIAL_CHASSIS,				COUNT: 3, KEY:'create/radial_chassis'},
		{INPUT : CREATE_ITEMS.SHAFT, 			RESULT: CREATE_ITEMS.GANTRY_SHAFT,					COUNT: 1, KEY:'create/gantry_shaft'},		
		
		{INPUT : INGOTS.C_ZINC, 				RESULT: CREATE_ITEMS.COPYCAT_STEP, 					COUNT: 4, KEY:'create/copycat_step'},
		{INPUT : INGOTS.C_ZINC, 				RESULT: CREATE_ITEMS.COPYCAT_PANEL, 				COUNT: 4, KEY:'create/copycat_panel'},
		{INPUT : INGOTS.C_BRASS, 				RESULT: CREATE_ITEMS.BRASS_SCAFFOLDING, 			COUNT: 2, KEY:'create/brass_scaffolding'},
		{INPUT : INGOTS.C_BRASS, 				RESULT: CREATE_ITEMS.BRASS_BARS, 					COUNT: 4, KEY:'create/brass_bars'},
		{INPUT : INGOTS.C_BRASS, 				RESULT: CREATE_ITEMS.BRASS_LADDER, 					COUNT: 2, KEY:'create/brass_ladder'},
		{INPUT : INGOTS.M_COPPER, 				RESULT: CREATE_ITEMS.COPPER_SCAFFOLDING, 			COUNT: 2, KEY:'create/copper_scaffolding'},
		{INPUT : INGOTS.M_COPPER, 				RESULT: CREATE_ITEMS.COPPER_BARS, 					COUNT: 4, KEY:'create/copper_bars'},
		{INPUT : INGOTS.M_COPPER, 				RESULT: CREATE_ITEMS.COPPER_LADDER, 				COUNT: 2, KEY:'create/copper_ladder'},
		
		{INPUT : BLOCKS.ALUMINUM, 				RESULT: INGOTS.ALUMINUM, 							COUNT: 10, KEY:'ingot_from_block/aluminum'},
		{INPUT : BLOCKS.COPPER, 				RESULT: INGOTS.COPPER, 								COUNT: 10, KEY:'ingot_from_block/copper'},
		{INPUT : BLOCKS.GOLD, 					RESULT: INGOTS.GOLD, 								COUNT: 10, KEY:'ingot_from_block/gold'},
		{INPUT : BLOCKS.WROUGHT_IRON, 			RESULT: INGOTS.WROUGHT_IRON, 						COUNT: 10, KEY:'ingot_from_block/wrought_iron'},
		{INPUT : BLOCKS.LEAD, 					RESULT: INGOTS.LEAD, 								COUNT: 10, KEY:'ingot_from_block/lead'},
		{INPUT : BLOCKS.NICKEL, 				RESULT: INGOTS.NICKEL, 								COUNT: 10, KEY:'ingot_from_block/nickel'},
		{INPUT : BLOCKS.SILVER, 				RESULT: INGOTS.SILVER, 								COUNT: 10, KEY:'ingot_from_block/silver'},
		{INPUT : BLOCKS.TIN, 					RESULT: INGOTS.TIN, 								COUNT: 10, KEY:'ingot_from_block/tin'},
		{INPUT : BLOCKS.ZINC, 					RESULT: INGOTS.ZINC, 								COUNT: 10, KEY:'ingot_from_block/zinc'},
		{INPUT : BLOCKS.BISMUTH, 				RESULT: INGOTS.BISMUTH, 							COUNT: 10, KEY:'ingot_from_block/bismuth'},
		{INPUT : BLOCKS.BERYLLIUM, 				RESULT: INGOTS.BERYLLIUM, 							COUNT: 10, KEY:'ingot_from_block/beryllium'},
		{INPUT : BLOCKS.COBALT, 				RESULT: INGOTS.COBALT, 								COUNT: 10, KEY:'ingot_from_block/cobalt'},
		{INPUT : BLOCKS.BORON, 					RESULT: INGOTS.BORON, 								COUNT: 10, KEY:'ingot_from_block/boron'},
		{INPUT : BLOCKS.THORIUM, 				RESULT: INGOTS.THORIUM, 							COUNT: 10, KEY:'ingot_from_block/thorium'},
		{INPUT : BLOCKS.IRIDIUM, 				RESULT: INGOTS.IRIDIUM, 							COUNT: 10, KEY:'ingot_from_block/iridium'},
		{INPUT : BLOCKS.TITANIUM, 				RESULT: INGOTS.TITANIUM, 							COUNT: 10, KEY:'ingot_from_block/titanium'},
		{INPUT : BLOCKS.ANTIMONY, 				RESULT: INGOTS.ANTIMONY, 							COUNT: 10, KEY:'ingot_from_block/antimony'},
		{INPUT : BLOCKS.TUNGSTEN, 				RESULT: INGOTS.TUNGSTEN, 							COUNT: 10, KEY:'ingot_from_block/tungsten'},
		{INPUT : BLOCKS.CHROMIUM, 				RESULT: INGOTS.CHROMIUM, 							COUNT: 10, KEY:'ingot_from_block/chromium'},
		{INPUT : BLOCKS.URANIUM, 				RESULT: INGOTS.URANIUM, 							COUNT: 10, KEY:'ingot_from_block/uranium'},
		{INPUT : BLOCKS.PLATINUM, 				RESULT: INGOTS.PLATINUM, 							COUNT: 10, KEY:'ingot_from_block/platinum'},
		{INPUT : BLOCKS.OSMIUM, 				RESULT: INGOTS.OSMIUM, 								COUNT: 10, KEY:'ingot_from_block/osmium'},
		{INPUT : BLOCKS.BRONZE, 				RESULT: INGOTS.BRONZE, 								COUNT: 10, KEY:'ingot_from_block/bronze'},
		{INPUT : BLOCKS.BISMUTH_BRONZE, 		RESULT: INGOTS.BISMUTH_BRONZE, 						COUNT: 10, KEY:'ingot_from_block/bismuth_bronze'},
		{INPUT : BLOCKS.BLACK_BRONZE, 			RESULT: INGOTS.BLACK_BRONZE, 						COUNT: 10, KEY:'ingot_from_block/black_bronze'},
		{INPUT : BLOCKS.BRASS, 					RESULT: INGOTS.BRASS, 								COUNT: 10, KEY:'ingot_from_block/brass'},
		{INPUT : BLOCKS.ROSE_GOLD, 				RESULT: INGOTS.ROSE_GOLD, 							COUNT: 10, KEY:'ingot_from_block/rose_gold'},
		{INPUT : BLOCKS.STERLING_SILVER, 		RESULT: INGOTS.STERLING_SILVER, 					COUNT: 10, KEY:'ingot_from_block/sterling_silver'},
		{INPUT : BLOCKS.STEEL, 					RESULT: INGOTS.STEEL, 								COUNT: 10, KEY:'ingot_from_block/steel'},
		{INPUT : BLOCKS.BLACK_STEEL, 			RESULT: INGOTS.BLACK_STEEL, 						COUNT: 10, KEY:'ingot_from_block/black_steel'},
		{INPUT : BLOCKS.BLUE_STEEL, 			RESULT: INGOTS.BLUE_STEEL, 							COUNT: 10, KEY:'ingot_from_block/blue_steel'},
		{INPUT : BLOCKS.RED_STEEL, 				RESULT: INGOTS.RED_STEEL, 							COUNT: 10, KEY:'ingot_from_block/red_steel'},
		{INPUT : BLOCKS.ALNICO, 				RESULT: INGOTS.ALNICO, 								COUNT: 10, KEY:'ingot_from_block/alnico'},
		{INPUT : BLOCKS.BERYLLIUM_COPPER, 		RESULT: INGOTS.BERYLLIUM_COPPER, 					COUNT: 10, KEY:'ingot_from_block/beryllium_copper'},
		{INPUT : BLOCKS.CONSTANTAN, 			RESULT: INGOTS.CONSTANTAN, 							COUNT: 10, KEY:'ingot_from_block/constantan'},
		{INPUT : BLOCKS.ELECTRUM, 				RESULT: INGOTS.ELECTRUM, 							COUNT: 10, KEY:'ingot_from_block/electrum'},
		{INPUT : BLOCKS.FERROBORON, 			RESULT: INGOTS.FERROBORON, 							COUNT: 10, KEY:'ingot_from_block/ferroboron'},
		{INPUT : BLOCKS.FLORENTINE_BRONZE, 		RESULT: INGOTS.FLORENTINE_BRONZE, 					COUNT: 10, KEY:'ingot_from_block/florentine_bronze'},
		{INPUT : BLOCKS.INVAR, 					RESULT: INGOTS.INVAR, 								COUNT: 10, KEY:'ingot_from_block/invar'},
		{INPUT : BLOCKS.MITHRIL, 				RESULT: INGOTS.MITHRIL, 							COUNT: 10, KEY:'ingot_from_block/mithril'},
		{INPUT : BLOCKS.NICKEL_SILVER, 			RESULT: INGOTS.NICKEL_SILVER, 						COUNT: 10, KEY:'ingot_from_block/nickel_silver'},
		{INPUT : BLOCKS.OSMIRIDIUM, 			RESULT: INGOTS.OSMIRIDIUM, 							COUNT: 10, KEY:'ingot_from_block/osmiridium'},
		{INPUT : BLOCKS.PEWTER, 				RESULT: INGOTS.PEWTER, 								COUNT: 10, KEY:'ingot_from_block/pewter'},
		{INPUT : BLOCKS.SOLDER, 				RESULT: INGOTS.SOLDER, 								COUNT: 10, KEY:'ingot_from_block/solder'},
		{INPUT : BLOCKS.TUNGSTEN_STEEL, 		RESULT: INGOTS.TUNGSTEN_STEEL, 						COUNT: 10, KEY:'ingot_from_block/tungsten_steel'},
		{INPUT : BLOCKS.STAINLESS_STEEL, 		RESULT: INGOTS.STAINLESS_STEEL, 					COUNT: 10, KEY:'ingot_from_block/stainless_steel'},
		{INPUT : BLOCKS.ANDESITE_ALLOY, 		RESULT: INGOTS.ANDESITE_ALLOY, 						COUNT: 10, KEY:'ingot_from_block/andesite_alloy'},
		{INPUT : BLOCKS.C_ANDESITE_ALLOY, 		RESULT: CREATE_ITEMS.ANDESITE_ALLOY, 				COUNT: 10, KEY:'ingot_from_block/andesite_alloy'},
		{INPUT : BLOCKS.ANDESITE_ALLOY, 		RESULT: CREATE_ITEMS.ANDESITE_ALLOY, 				COUNT: 20, KEY:'create/andesite_alloy'}
	]
		
	recipes.forEach(recipe=>{
		event.remove({output : recipe.RESULT})
		event.custom({
			type: RECIPE_TYPE.MC_STONECUTTING,
			ingredient: { 
				item: recipe.INPUT 
			},
			result:  recipe.RESULT,
			count: recipe.COUNT			
		}).id(`minecraft:stonecutting/${recipe.KEY}`)
	})
})