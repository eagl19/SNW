onEvent('recipes', event => {
	const CASTS={
		NUGGET: 	{ SINGLE : 'tconstruct:casts/single_use/nugget', 	MULTI : 'tconstruct:casts/multi_use/nugget' },
		INGOT: 		{ SINGLE : 'tconstruct:casts/single_use/ingot', 	MULTI : 'tconstruct:casts/multi_use/ingot' },		
		GEAR: 		{ SINGLE : 'tconstruct:casts/single_use/small_gear', 	MULTI : 'tconstruct:casts/multi_use/small_gear' },			
		ROD: 		{ SINGLE : 'tconstruct:casts/single_use/small_rod', 	MULTI : 'tconstruct:casts/multi_use/small_rod' },			
		PLATE: 		{ SINGLE : 'tconstruct:casts/single_use/small_plate', 	MULTI : 'tconstruct:casts/multi_use/small_plate' },			
		GREATE_PLATE: 	{ SINGLE : 'tconstruct:casts/single_use/plate', 	MULTI : 'tconstruct:casts/multi_use/plate' },	
		GREATE_GEAR: 	{ SINGLE : 'tconstruct:casts/single_use/gear', 		MULTI : 'tconstruct:casts/multi_use/gear' },	
		GREATE_ROD:	{ SINGLE : 'tconstruct:casts/single_use/rod', 		MULTI : 'tconstruct:casts/multi_use/rod' },
		TOOL_HANDLE: 	{ SINGLE : 'tconstruct:casts/multi_use/tool_handle', 	MULTI : 'tconstruct:casts/multi_use/tool_handle' },
		TOUGH_HANDLE: 	{ SINGLE : 'tconstruct:casts/multi_use/tough_handle', 	MULTI : 'tconstruct:casts/multi_use/tough_handle' },
		BOW_LIMB: 	{ SINGLE : 'tconstruct:casts/multi_use/bow_limb', 	MULTI : 'tconstruct:casts/multi_use/bow_limb' },
		BOW_GRIP: 	{ SINGLE : 'tconstruct:casts/multi_use/bow_grip', 	MULTI : 'tconstruct:casts/multi_use/bow_grip' },
		PICK_HEAD: 	{ SINGLE : 'tconstruct:casts/multi_use/pick_head', 	MULTI : 'tconstruct:casts/multi_use/pick_head' },
		SMALL_AXE_HEAD: { SINGLE : 'tconstruct:casts/multi_use/small_axe_head', MULTI : 'tconstruct:casts/multi_use/small_axe_head' },
		SMALL_BLADE: 	{ SINGLE : 'tconstruct:casts/multi_use/small_blade', 	MULTI : 'tconstruct:casts/multi_use/small_blade' },
		HAMMER_HEAD: 	{ SINGLE : 'tconstruct:casts/multi_use/hammer_head', 	MULTI : 'tconstruct:casts/multi_use/hammer_head' },
		BROAD_BLADE: 	{ SINGLE : 'tconstruct:casts/multi_use/broad_blade', 	MULTI : 'tconstruct:casts/multi_use/broad_blade' },
		BROAD_AXE_HEAD: { SINGLE : 'tconstruct:casts/multi_use/broad_axe_head', MULTI : 'tconstruct:casts/multi_use/broad_axe_head' },
		TOOL_BINDING: 	{ SINGLE : 'tconstruct:casts/multi_use/tool_binding', 	MULTI : 'tconstruct:casts/multi_use/tool_binding' },
		ROUND_PLATE: 	{ SINGLE : 'tconstruct:casts/multi_use/round_plate', 	MULTI : 'tconstruct:casts/multi_use/round_plate' },
		LARGE_PLATE: 	{ SINGLE : 'tconstruct:casts/multi_use/large_plate', 	MULTI : 'tconstruct:casts/multi_use/large_plate' },
		GEM: 		{ SINGLE : 'tconstruct:casts/multi_use/gem', 		MULTI : 'tconstruct:casts/multi_use/gem' },
		REPAIR_KIT: 	{ SINGLE : 'tconstruct:casts/multi_use/repair_kit', 	MULTI : 'tconstruct:casts/multi_use/repair_kit' },
		WIRE: 		{ SINGLE : 'tconstruct:casts/multi_use/wire', 		MULTI : 'tconstruct:casts/multi_use/wire' }
	}
	const cast_recipes=[
		{ ITEM : '#forge:nuggets', 		CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:nugget_cast', 		TIME: 824, KEY: 'nuggets' },
		{ ITEM : '#forge:ingots', 		CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:ingot_cast', 		TIME: 824, KEY: 'ingots'},
		{ ITEM : '#forge:gears', 		CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'kubejs:small_gear_cast', 		TIME: 824, KEY: 'small_gears'},
		{ ITEM : '#forge:rods', 		CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'kubejs:small_rod_cast', 		TIME: 824, KEY: 'small_rods'},
		{ ITEM : '#forge:plates', 		CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'kubejs:small_plate_cast',		TIME: 824, KEY: 'small_plates'},
		{ ITEM : '#forge:large_plates', 	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:plate_cast', 		TIME: 824, KEY: 'plates'},
		{ ITEM : '#forge:large_gears', 		CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:gear_cast', 		TIME: 824, KEY: 'gears'},
		{ ITEM : '#forge:large_rods', 		CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:rod_cast', 		TIME: 824, KEY: 'rods'},
		{ ITEM : 'tconstruct:tool_handle', 	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:tool_handle_cast', 	TIME: 824, KEY: 'tool_handle'},
		{ ITEM : 'tconstruct:tough_handle',	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:tough_handle_cast', 	TIME: 824, KEY: 'tough_handle'},
		{ ITEM : 'tconstruct:bow_limb',		CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:bow_limb_cast', 	TIME: 824, KEY: 'bow_limb'},
		{ ITEM : 'tconstruct:bow_grip',		CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:bow_grip_cast', 	TIME: 824, KEY: 'bow_grip'},
		{ ITEM : 'tconstruct:pick_head',	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:pick_head_cast', 	TIME: 824, KEY: 'pick_head'},
		{ ITEM : 'tconstruct:small_axe_head',	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:small_axe_head_cast', 	TIME: 824, KEY: 'small_axe_head'},
		{ ITEM : 'tconstruct:hammer_head',	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:hammer_head_cast', 	TIME: 824, KEY: 'hammer_head'},
		{ ITEM : 'tconstruct:broad_blade',	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:broad_blade_cast', 	TIME: 824, KEY: 'broad_blade'},
		{ ITEM : 'tconstruct:broad_axe_head',	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:broad_axe_head_cast', 	TIME: 824, KEY: 'broad_axe_head'},
		{ ITEM : 'tconstruct:tool_binding',	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:tool_binding_cast', 	TIME: 824, KEY: 'tool_binding'},
		{ ITEM : 'tconstruct:round_plate',	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:round_plate_cast', 	TIME: 824, KEY: 'round_plate'},
		{ ITEM : 'tconstruct:large_plate',	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:large_plate_cast', 	TIME: 824, KEY: 'large_plate'},
		{ ITEM : '#forge:gems',			CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:gem_cast', 		TIME: 824, KEY: 'gems'},
		{ ITEM : 'tconstruct:repair_kit',	CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:repair_kit_cast', 	TIME: 824, KEY: 'repair_kit'},
		{ ITEM : '#forge:wires',		CONSUMED : true, FLUID:{NAME : FLUIDS.TUNGSTEN_STEEL, COUNT : 100}, OUTPUT : 'tconstruct:wire_cast', 		TIME: 824, KEY: 'wires'}
	]
	cast_recipes.forEach(recipe=>{
		let CAST=null
		if (recipe.ITEM.startsWith("#")){
			CAST = {tag: recipe.ITEM.slice(1) }
		} else {
			CAST = {item : recipe.ITEM, type : 'tconstruct:material' } 
		}
		event.custom({
			type: 'tconstruct:casting_table',
			cast: CAST,
			cast_consumed: recipe.CONSUMED,
			switch_slots: true,
			fluid: {
				name: recipe.FLUID.NAME,
				amount: recipe.FLUID.COUNT
			},
			result: { 
				item: recipe.OUTPUT
			},
			cooling_time: recipe.TIME
		}).id(`tconstruct:smeltery/casts/gold_casts/${recipe.KEY}`)
	})
	const recipes=[
		{ INPUT : { FLUID:FLUIDS.ALUMINUM,	COUNT : 10 }, OUTPUT : NUGGETS.ALUMINUM,	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 53,  KEY : 'aluminum/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.COPPER,	COUNT : 10 }, OUTPUT : NUGGETS.COPPER,		CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 75,  KEY : 'copper/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.GOLD,	 	COUNT : 10 }, OUTPUT : NUGGETS.GOLD, 		CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 25,  KEY : 'gold/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.WROUGHT_IRON, 	COUNT : 10 }, OUTPUT : NUGGETS.WROUGHT_IRON, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 106, KEY : 'wrought_iron/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.LEAD, 		COUNT : 10 }, OUTPUT : NUGGETS.LEAD, 		CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 36,  KEY : 'lead/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.NICKEL, 	COUNT : 10 }, OUTPUT : NUGGETS.NICKEL, 		CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 54,  KEY : 'nickel/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.SILVER, 	COUNT : 10 }, OUTPUT : NUGGETS.SILVER, 		CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 35,  KEY : 'silver/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.TIN, 		COUNT : 10 }, OUTPUT : NUGGETS.TIN, 		CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 99,  KEY : 'tin/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.ZINC, 		COUNT : 10 }, OUTPUT : NUGGETS.ZINC, 		CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 81,  KEY : 'zinc/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.BISMUTH, 	COUNT : 10 }, OUTPUT : NUGGETS.BISMUTH, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 117, KEY : 'bismuth/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.BERYLLIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.BERYLLIUM, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 83,  KEY : 'beryllium/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.COBALT, 	COUNT : 10 }, OUTPUT : NUGGETS.COBALT, 		CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 145, KEY : 'cobalt/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.BORON, 	COUNT : 10 }, OUTPUT : NUGGETS.BORON, 		CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 167, KEY : 'boron/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.THORIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.THORIUM, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 141, KEY : 'thorium/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.IRIDIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.IRIDIUM, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 172, KEY : 'iridium/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.TITANIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.TITANIUM, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 137, KEY : 'titanium/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.ANTIMONY, 	COUNT : 10 }, OUTPUT : NUGGETS.ANTIMONY, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 61,  KEY : 'antimony/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.TUNGSTEN, 	COUNT : 10 }, OUTPUT : NUGGETS.TUNGSTEN, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 412, KEY : 'tungsten/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.CHROMIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.CHROMIUM, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 87,  KEY : 'chromium/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.URANIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.URANIUM, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 76,  KEY : 'uranium/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.PLATINUM, 	COUNT : 10 }, OUTPUT : NUGGETS.PLATINUM, 	CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 120, KEY : 'platinum/nugget_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.OSMIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.OSMIUM, 		CONSUMED : true, 	TYPE : CASTS.NUGGET, TIME : 209, KEY : 'osmium/nugget_sand_cast'},
		
		{ INPUT : { FLUID:FLUIDS.ALUMINUM, 	COUNT : 10 }, OUTPUT : NUGGETS.ALUMINUM, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 53,  KEY : 'aluminum/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.COPPER,	COUNT : 10 }, OUTPUT : NUGGETS.COPPER,		CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 75,  KEY : 'copper/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.GOLD,	 	COUNT : 10 }, OUTPUT : NUGGETS.GOLD, 		CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 25,  KEY : 'gold/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.WROUGHT_IRON, 	COUNT : 10 }, OUTPUT : NUGGETS.WROUGHT_IRON, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 106, KEY : 'wrought_iron/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.LEAD, 		COUNT : 10 }, OUTPUT : NUGGETS.LEAD, 		CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 36,  KEY : 'lead/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.NICKEL, 	COUNT : 10 }, OUTPUT : NUGGETS.NICKEL, 		CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 54,  KEY : 'nickel/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.SILVER, 	COUNT : 10 }, OUTPUT : NUGGETS.SILVER, 		CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 35,  KEY : 'silver/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.TIN, 		COUNT : 10 }, OUTPUT : NUGGETS.TIN, 		CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 99,  KEY : 'tin/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.ZINC, 		COUNT : 10 }, OUTPUT : NUGGETS.ZINC, 		CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 81,  KEY : 'zinc/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.BISMUTH, 	COUNT : 10 }, OUTPUT : NUGGETS.BISMUTH, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 117, KEY : 'bismuth/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.BERYLLIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.BERYLLIUM, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 83,  KEY : 'beryllium/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.COBALT, 	COUNT : 10 }, OUTPUT : NUGGETS.COBALT, 		CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 145, KEY : 'cobalt/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.BORON, 	COUNT : 10 }, OUTPUT : NUGGETS.BORON, 		CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 167, KEY : 'boron/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.THORIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.THORIUM, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 141, KEY : 'thorium/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.IRIDIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.IRIDIUM, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 172, KEY : 'iridium/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.TITANIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.TITANIUM, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 137, KEY : 'titanium/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.ANTIMONY, 	COUNT : 10 }, OUTPUT : NUGGETS.ANTIMONY, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 61,  KEY : 'antimony/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.TUNGSTEN, 	COUNT : 10 }, OUTPUT : NUGGETS.TUNGSTEN, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 412, KEY : 'tungsten/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.CHROMIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.CHROMIUM, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 87,  KEY : 'chromium/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.URANIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.URANIUM, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 76,  KEY : 'uranium/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.PLATINUM, 	COUNT : 10 }, OUTPUT : NUGGETS.PLATINUM, 	CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 120, KEY : 'platinum/nugget_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.OSMIUM, 	COUNT : 10 }, OUTPUT : NUGGETS.OSMIUM, 		CONSUMED : false, 	TYPE : CASTS.NUGGET, TIME : 209, KEY : 'osmium/nugget_gold_cast'},
		
		{ INPUT : { FLUID:FLUIDS.ALUMINUM,	COUNT : 100 }, OUTPUT : INGOTS.ALUMINUM,	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 106,  KEY : 'aluminum/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.COPPER,	COUNT : 100 }, OUTPUT : INGOTS.COPPER,		CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 150,  KEY : 'copper/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.GOLD,	 	COUNT : 100 }, OUTPUT : INGOTS.GOLD, 		CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 50,  KEY : 'gold/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.WROUGHT_IRON, 	COUNT : 100 }, OUTPUT : INGOTS.WROUGHT_IRON, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 212, KEY : 'wrought_iron/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.LEAD, 		COUNT : 100 }, OUTPUT : INGOTS.LEAD, 		CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 72,  KEY : 'lead/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.NICKEL, 	COUNT : 100 }, OUTPUT : INGOTS.NICKEL, 		CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 108,  KEY : 'nickel/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.SILVER, 	COUNT : 100 }, OUTPUT : INGOTS.SILVER, 		CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 70,  KEY : 'silver/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.TIN, 		COUNT : 100 }, OUTPUT : INGOTS.TIN, 		CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 198,  KEY : 'tin/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.ZINC, 		COUNT : 100 }, OUTPUT : INGOTS.ZINC, 		CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 162,  KEY : 'zinc/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.BISMUTH, 	COUNT : 100 }, OUTPUT : INGOTS.BISMUTH, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 234, KEY : 'bismuth/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.BERYLLIUM, 	COUNT : 100 }, OUTPUT : INGOTS.BERYLLIUM, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 166,  KEY : 'beryllium/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.COBALT, 	COUNT : 100 }, OUTPUT : INGOTS.COBALT, 		CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 290, KEY : 'cobalt/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.BORON, 	COUNT : 100 }, OUTPUT : INGOTS.BORON, 		CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 334, KEY : 'boron/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.THORIUM, 	COUNT : 100 }, OUTPUT : INGOTS.THORIUM, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 282, KEY : 'thorium/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.IRIDIUM, 	COUNT : 100 }, OUTPUT : INGOTS.IRIDIUM, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 344, KEY : 'iridium/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.TITANIUM, 	COUNT : 100 }, OUTPUT : INGOTS.TITANIUM, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 274, KEY : 'titanium/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.ANTIMONY, 	COUNT : 100 }, OUTPUT : INGOTS.ANTIMONY, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 122,  KEY : 'antimony/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.TUNGSTEN, 	COUNT : 100 }, OUTPUT : INGOTS.TUNGSTEN, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 824, KEY : 'tungsten/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.CHROMIUM, 	COUNT : 100 }, OUTPUT : INGOTS.CHROMIUM, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 174,  KEY : 'chromium/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.URANIUM, 	COUNT : 100 }, OUTPUT : INGOTS.URANIUM, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 152,  KEY : 'uranium/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.PLATINUM, 	COUNT : 100 }, OUTPUT : INGOTS.PLATINUM, 	CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 240, KEY : 'platinum/ingot_sand_cast'},
		{ INPUT : { FLUID:FLUIDS.OSMIUM, 	COUNT : 100 }, OUTPUT : INGOTS.OSMIUM, 		CONSUMED : true, 	TYPE : CASTS.INGOT,  TIME : 418, KEY : 'osmium/ingot_sand_cast'},
		
		{ INPUT : { FLUID:FLUIDS.ALUMINUM, 	COUNT : 100 }, OUTPUT : INGOTS.ALUMINUM, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 106,  KEY : 'aluminum/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.COPPER,	COUNT : 100 }, OUTPUT : INGOTS.COPPER,		CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 150,  KEY : 'copper/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.GOLD,	 	COUNT : 100 }, OUTPUT : INGOTS.GOLD, 		CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 50,  KEY : 'gold/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.WROUGHT_IRON, 	COUNT : 100 }, OUTPUT : INGOTS.WROUGHT_IRON, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 212, KEY : 'wrought_iron/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.LEAD, 		COUNT : 100 }, OUTPUT : INGOTS.LEAD, 		CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 72,  KEY : 'lead/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.NICKEL, 	COUNT : 100 }, OUTPUT : INGOTS.NICKEL, 		CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 108,  KEY : 'nickel/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.SILVER, 	COUNT : 100 }, OUTPUT : INGOTS.SILVER, 		CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 70,  KEY : 'silver/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.TIN, 		COUNT : 100 }, OUTPUT : INGOTS.TIN, 		CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 198,  KEY : 'tin/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.ZINC, 		COUNT : 100 }, OUTPUT : INGOTS.ZINC, 		CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 162,  KEY : 'zinc/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.BISMUTH, 	COUNT : 100 }, OUTPUT : INGOTS.BISMUTH, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 234, KEY : 'bismuth/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.BERYLLIUM, 	COUNT : 100 }, OUTPUT : INGOTS.BERYLLIUM, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 166,  KEY : 'beryllium/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.COBALT, 	COUNT : 100 }, OUTPUT : INGOTS.COBALT, 		CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 290, KEY : 'cobalt/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.BORON, 	COUNT : 100 }, OUTPUT : INGOTS.BORON, 		CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 334, KEY : 'boron/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.THORIUM, 	COUNT : 100 }, OUTPUT : INGOTS.THORIUM, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 282, KEY : 'thorium/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.IRIDIUM, 	COUNT : 100 }, OUTPUT : INGOTS.IRIDIUM, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 344, KEY : 'iridium/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.TITANIUM, 	COUNT : 100 }, OUTPUT : INGOTS.TITANIUM, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 274, KEY : 'titanium/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.ANTIMONY, 	COUNT : 100 }, OUTPUT : INGOTS.ANTIMONY, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 122,  KEY : 'antimony/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.TUNGSTEN, 	COUNT : 100 }, OUTPUT : INGOTS.TUNGSTEN, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 824, KEY : 'tungsten/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.CHROMIUM, 	COUNT : 100 }, OUTPUT : INGOTS.CHROMIUM, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 174,  KEY : 'chromium/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.URANIUM, 	COUNT : 100 }, OUTPUT : INGOTS.URANIUM, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 152,  KEY : 'uranium/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.PLATINUM, 	COUNT : 100 }, OUTPUT : INGOTS.PLATINUM, 	CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 240, KEY : 'platinum/ingot_gold_cast'},
		{ INPUT : { FLUID:FLUIDS.OSMIUM, 	COUNT : 100 }, OUTPUT : INGOTS.OSMIUM, 		CONSUMED : false, 	TYPE : CASTS.INGOT,  TIME : 418, KEY : 'osmium/ingot_gold_cast'}
	]
	recipes.forEach(recipe=>{
		event.custom({ 
			type: 'tconstruct:casting_table',
			cast: { 
				tag: recipe.CONSUMED ? recipe.TYPE.SINGLE : recipe.TYPE.MULTI
			},
			cast_consumed: recipe.CONSUMED,
			fluid: { 
				name: recipe.INPUT.FLUID,
				amount: recipe.INPUT.COUNT
			},
			result: { 
				item: recipe.OUTPUT
			},
			cooling_time: recipe.TIME
		}).id(`tconstruct:smeltery/casting/metal/${recipe.KEY}`)
	})
})
onEvent('item.tags', event => {
	event.add('tconstruct:casts/multi_use/small_plate',	'kubejs:small_plate_cast')
	event.add('tconstruct:casts/multi_use/small_gear',	'kubejs:small_gear_cast')
	event.add('tconstruct:casts/multi_use/small_rod',	'kubejs:small_rod_cast')
})
