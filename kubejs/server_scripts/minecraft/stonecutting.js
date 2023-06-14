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
		{INPUT : CREATE_ITEMS.COPPER_MACHINE, 	RESULT: CREATE_ITEMS.PORTABLE_FLUID_INTERFACE,		COUNT: 1, KEY:'create/portable_fluid_interface'}
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