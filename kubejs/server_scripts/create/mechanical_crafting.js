onEvent('recipes', event => {
	const recipes=[
		{PATTERN : [" AAA ","ABCBA","ACDCA","ABCBA"," AAA "], 	PUTTERN_KEY: {A : {item : SHEETS.CONSTANTAN},				C : {item : RODS.MITHRIL}, 
																			  B : {item : GREATE_RODS.ALNICO},				D : {item : CREATE_ITEMS.COPPER_MACHINE}}, 	RESULT : { NAME: CREATE_ITEMS.FLYWHEEL, 		COUNT : 1}, KEY: 'flywheel'},
		{PATTERN : [" AAA ","ABCBA","ACDCA","ABCBA"," AAA "], 	PUTTERN_KEY: {A : {item : DOUBLE_INGOTS.OSMIRIDIUM},		C : {item : RODS.PEWTER}, 
																			  B : {item : GREATE_RODS.BERYLLIUM_COPPER},	D : {item : CREATE_ITEMS.FLYWHEEL}}, 		RESULT : { NAME: CREATE_ITEMS.CRUSHING_WHEEL, 	COUNT : 2}, KEY: 'crushing_wheel'},
		{PATTERN : ["A A"," B ","A A"], 						PUTTERN_KEY: {A : {item : SHEETS.C_IRON},					B : {item : TFC_ITEM.BRASS_MECHANISM}}, 	RESULT : { NAME: CREATE_ITEMS.PROPELLER, 		COUNT : 1}, KEY: 'propeller'},
		{PATTERN : ["AAA","ABA","AAA"], 						PUTTERN_KEY: {A : {item : SHEETS.C_IRON},					B : {item : MC_ITEM.BARREL}}, 				RESULT : { NAME: CREATE_ITEMS.ITEM_VAULT, 		COUNT : 1}, KEY: 'item_vault'},
		{PATTERN : ["AAAAAAA","AFBEBFA","ABCDCBA","AEDEDEA",
					"ABCDCBA","AFBEBFA","AAAAAAA"], 			PUTTERN_KEY: {A : {item : CREATE_ITEMS.RAILWAY_CASING},		B : {item : CREATE_ITEMS.BRASS_MACHINE},
																			  C : {item : ROSIA_ITEM.PURPLE_STEEL_ROD},		D : {item : ROSIA_ITEM.PURPLE_STEEL_COIL},	
																			  E : {item : CREATE_ITEMS.FAN_COMPONENT}, 		F : {item : CREATE_ITEMS.HYDRAULIC_ENGINE}},RESULT : { NAME: CREATE_ITEMS.ENCASED_FAN, 		COUNT : 1}, KEY: 'encased_fan'},
		{PATTERN : ["ABCD ","B  H ","E    ","F    ","GGGGG"],	PUTTERN_KEY: {A : {item : SHEETS.C_GOLDEN},					B : {item : SHEETS.C_BRASS},
																			  C : {item : CREATE_ITEMS.ANDESITE_MACHINE},	D : {item : CREATE_ITEMS.ANDESITE_CASING},
																			  E : {item : CREATE_ITEMS.BRASS_MACHINE},		F : {item : CREATE_ITEMS.PRECISION_MECHANISM},
																			  G : {item : CREATE_ITEMS.BRASS_CASING},	 	H : {item : CREATE_ITEMS.DEPLOYER}		}, 	RESULT : { NAME: CREATE_ITEMS.MECHANICAL_ARM, 	COUNT : 1}, KEY: 'mechanical_arm'},
		{PATTERN : [" A "," B ","CCC","CCC"," D "], 			PUTTERN_KEY: {A : {item : INGOTS.C_BRASS},					B : {item : CREATE_ITEMS.PRECISION_MECHANISM},
																			  C : {item : IE_ITEM.STICK},					D : {item : CREATE_ITEMS.BRASS_HAND}	}, 	RESULT : { NAME: CREATE_ITEMS.EXTENDO_GRIP, 	COUNT : 1}, KEY: 'extendo_grip'},
		{PATTERN : ["AA"," B"," B"], 							PUTTERN_KEY: {A : {item : INGOTS.M_COPPER},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.HOE.CREATE.COPPER, 		COUNT : 1}, KEY: 'create_sa/copper_hoe'},
		{PATTERN : ["A","B","B"], 								PUTTERN_KEY: {A : {item : INGOTS.M_COPPER},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.SHOVEL.CREATE.COPPER, 	COUNT : 1}, KEY: 'create_sa/copper_shovel'},
		{PATTERN : ["A","A","B"],	 							PUTTERN_KEY: {A : {item : INGOTS.M_COPPER},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.SWORD.CREATE.COPPER, 	COUNT : 1}, KEY: 'create_sa/copper_sword'},
		{PATTERN : ["AA","AB"," B"], 							PUTTERN_KEY: {A : {item : INGOTS.M_COPPER},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.AXE.CREATE.COPPER, 		COUNT : 1}, KEY: 'create_sa/copper_axe'},
		{PATTERN : ["AAA"," B "," B "],							PUTTERN_KEY: {A : {item : INGOTS.M_COPPER},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.PICKAXE.CREATE.COPPER,	COUNT : 1}, KEY: 'create_sa/copper_pickaxe'},
		{PATTERN : ["AAA","A A"],								PUTTERN_KEY: {A : {item : INGOTS.M_COPPER}}, 															RESULT : { NAME: TOOLS.HELMET.CREATE.COPPER,	COUNT : 1}, KEY: 'create_sa/copper_helmet'},
		{PATTERN : ["A A","AAA","AAA"],							PUTTERN_KEY: {A : {item : INGOTS.M_COPPER}}, 															RESULT : { NAME: TOOLS.CHESTPLATE.CREATE.COPPER,COUNT : 1}, KEY: 'create_sa/copper_chestplate'},
		{PATTERN : ["AAA","A A","A A"],							PUTTERN_KEY: {A : {item : INGOTS.M_COPPER}}, 															RESULT : { NAME: TOOLS.LEGGINS.CREATE.COPPER,	COUNT : 1}, KEY: 'create_sa/copper_leggings'},
		{PATTERN : ["A A","A A"],								PUTTERN_KEY: {A : {item : INGOTS.M_COPPER}}, 															RESULT : { NAME: TOOLS.BOOTS.CREATE.COPPER,		COUNT : 1}, KEY: 'create_sa/copper_boots'},
		{PATTERN : ["AA"," B"," B"], 							PUTTERN_KEY: {A : {item : INGOTS.C_ZINC},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.HOE.CREATE.ZINC, 		COUNT : 1}, KEY: 'create_sa/zinc_hoe'},
		{PATTERN : ["A","B","B"], 								PUTTERN_KEY: {A : {item : INGOTS.C_ZINC},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.SHOVEL.CREATE.ZINC, 		COUNT : 1}, KEY: 'create_sa/zinc_shovel'},
		{PATTERN : ["A","A","B"],	 							PUTTERN_KEY: {A : {item : INGOTS.C_ZINC},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.SWORD.CREATE.ZINC, 		COUNT : 1}, KEY: 'create_sa/zinc_sword'},
		{PATTERN : ["AA","AB"," B"], 							PUTTERN_KEY: {A : {item : INGOTS.C_ZINC},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.AXE.CREATE.ZINC, 		COUNT : 1}, KEY: 'create_sa/zinc_axe'},
		{PATTERN : ["AAA"," B "," B "],							PUTTERN_KEY: {A : {item : INGOTS.C_ZINC},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.PICKAXE.CREATE.ZINC,		COUNT : 1}, KEY: 'create_sa/zinc_pickaxe'},
		{PATTERN : ["AAA","A A"],								PUTTERN_KEY: {A : {item : INGOTS.C_ZINC}}, 																RESULT : { NAME: TOOLS.HELMET.CREATE.ZINC,		COUNT : 1}, KEY: 'create_sa/zinc_helmet'},
		{PATTERN : ["A A","AAA","AAA"],							PUTTERN_KEY: {A : {item : INGOTS.C_ZINC}}, 																RESULT : { NAME: TOOLS.CHESTPLATE.CREATE.ZINC,	COUNT : 1}, KEY: 'create_sa/zinc_chestplate'},
		{PATTERN : ["AAA","A A","A A"],							PUTTERN_KEY: {A : {item : INGOTS.C_ZINC}}, 																RESULT : { NAME: TOOLS.LEGGINS.CREATE.ZINC,		COUNT : 1}, KEY: 'create_sa/zinc_leggings'},
		{PATTERN : ["A A","A A"],								PUTTERN_KEY: {A : {item : INGOTS.C_ZINC}}, 																RESULT : { NAME: TOOLS.BOOTS.CREATE.ZINC,		COUNT : 1}, KEY: 'create_sa/zinc_boots'},
		{PATTERN : ["AA"," B"," B"], 							PUTTERN_KEY: {A : {item : INGOTS.C_BRASS},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.HOE.CREATE.BRASS, 		COUNT : 1}, KEY: 'create_sa/brass_hoe'},
		{PATTERN : ["A","B","B"], 								PUTTERN_KEY: {A : {item : INGOTS.C_BRASS},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.SHOVEL.CREATE.BRASS, 	COUNT : 1}, KEY: 'create_sa/brass_shovel'},
		{PATTERN : ["A","A","B"],	 							PUTTERN_KEY: {A : {item : INGOTS.C_BRASS},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.SWORD.CREATE.BRASS, 		COUNT : 1}, KEY: 'create_sa/brass_sword'},
		{PATTERN : ["AA","AB"," B"], 							PUTTERN_KEY: {A : {item : INGOTS.C_BRASS},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.AXE.CREATE.BRASS, 		COUNT : 1}, KEY: 'create_sa/brass_axe'},
		{PATTERN : ["AAA"," B "," B "],							PUTTERN_KEY: {A : {item : INGOTS.C_BRASS},					B : {item : IE_ITEM.STICK}}, 				RESULT : { NAME: TOOLS.PICKAXE.CREATE.BRASS,	COUNT : 1}, KEY: 'create_sa/brass_pickaxe'},
		{PATTERN : ["AAA","A A"],								PUTTERN_KEY: {A : {item : INGOTS.C_BRASS}}, 															RESULT : { NAME: TOOLS.HELMET.CREATE.BRASS,		COUNT : 1}, KEY: 'create_sa/brass_helmet'},
		{PATTERN : ["A A","AAA","AAA"],							PUTTERN_KEY: {A : {item : INGOTS.C_BRASS}}, 															RESULT : { NAME: TOOLS.CHESTPLATE.CREATE.BRASS,	COUNT : 1}, KEY: 'create_sa/brass_chestplate'},
		{PATTERN : ["AAA","A A","A A"],							PUTTERN_KEY: {A : {item : INGOTS.C_BRASS}}, 															RESULT : { NAME: TOOLS.LEGGINS.CREATE.BRASS,	COUNT : 1}, KEY: 'create_sa/brass_leggings'},
		{PATTERN : ["A A","A A"],								PUTTERN_KEY: {A : {item : INGOTS.C_BRASS}}, 															RESULT : { NAME: TOOLS.BOOTS.CREATE.BRASS,		COUNT : 1}, KEY: 'create_sa/brass_boots'},
		{PATTERN : ["ABA","BCB","ABA"],							PUTTERN_KEY: {A : {item : INGOTS.C_ZINC}, 					B : {item : CREATE_ITEMS.ANDESITE_ALLOY},
																			  C : {item : CREATE_ITEMS.PROPELLER}}, 													RESULT : { NAME: CREATE_ITEMS.FAN_COMPONENT,	COUNT : 1}, KEY: 'fan_component'},
		{PATTERN : ["ABA","BCB","ABA"],							PUTTERN_KEY: {A : {item : INGOTS.C_BRASS}, 					B : {item : CREATE_ITEMS.ANDESITE_ALLOY},
																			  C : {item : TOOLS.PICKAXE.CREATE.BRASS}}, 												RESULT : { NAME: CREATE_ITEMS.BRASS_DRILL_HEAD,	COUNT : 1}, KEY: 'brass_drill_head'},
		{PATTERN : [" A ","BCB"," D "],							PUTTERN_KEY: {A : {item : INGOTS.C_BRASS}, 					B : {item : CREATE_ITEMS.COGWHEEL},
																			  C : {item : CREATE_ITEMS.CA_STEAM_ENGINE},	D : {item : CREATE_ITEMS.BRASS_DRILL_HEAD}},RESULT : { NAME: CREATE_ITEMS.PORTABLE_DRILL,	COUNT : 1}, KEY: 'portable_drill'},
		{PATTERN : ["  A  "," BCB "," DDD ", " DDD ","  E  "],	PUTTERN_KEY: {A : {item : INGOTS.C_ZINC}, 					B : {item : CREATE_ITEMS.COGWHEEL},
																			  C : {item : CREATE_ITEMS.HEAT_ENGINE},		D : {item : CREATE_ITEMS.MINECART_COUPLING},
																			  E : {item : CREATE_ITEMS.WHISK}														},	RESULT : { NAME: CREATE_ITEMS.GRAPPLIN_WISK,	COUNT : 1}, KEY: 'grapplin_whisk'},
		{PATTERN : [" A ","BCB"," D "],							PUTTERN_KEY: {A : {item : INGOTS.M_COPPER}, 				B : {item : CREATE_ITEMS.COGWHEEL},
																			  C : {item : CREATE_ITEMS.HYDRAULIC_ENGINE},	D : {item : CREATE_ITEMS.COPPER_MAGNET}},	RESULT : { NAME: CREATE_ITEMS.BLOCK_PICKER,		COUNT : 1}, KEY: 'block_picker'},
		{PATTERN : [" A "," A ","BCB"," D "],					PUTTERN_KEY: {A : {item : CREATE_ITEMS.POLISHED_ROZE_QUARTZ},B : {item : SHEETS.C_IRON},
																			  C : {item : INGOTS.M_GOLD},					D : {item : CREATE_ITEMS.ZINC_HANDLE}},		RESULT : { NAME: TOOLS.SWORD.CREATE.ROZE_QUARTZ,COUNT : 1}, KEY: 'create_sa/rose_quartz_sword'},
		{PATTERN : [" B ","ACA","AD "," D "],					PUTTERN_KEY: {A : {item : CREATE_ITEMS.POLISHED_ROZE_QUARTZ},B : {item : SHEETS.C_IRON},
																			  C : {item : INGOTS.M_GOLD},					D : {item : CREATE_ITEMS.ZINC_HANDLE}},		RESULT : { NAME: TOOLS.AXE.CREATE.ROZE_QUARTZ,	COUNT : 1}, KEY: 'create_sa/rose_quartz_axe'},
		{PATTERN : [" A ","BCB"," D "," D "],					PUTTERN_KEY: {A : {item : CREATE_ITEMS.POLISHED_ROZE_QUARTZ},B : {item : SHEETS.C_IRON},
																			  C : {item : INGOTS.M_GOLD},					D : {item : CREATE_ITEMS.ZINC_HANDLE}},		RESULT : { NAME: TOOLS.SHOVEL.CREATE.ROZE_QUARTZ,COUNT : 1},KEY: 'create_sa/rose_quartz_shovel'},
		{PATTERN : [" B ","ACA","ADA"," D "],					PUTTERN_KEY: {A : {item : CREATE_ITEMS.POLISHED_ROZE_QUARTZ},B : {item : SHEETS.C_IRON},
																			  C : {item : INGOTS.M_GOLD},					D : {item : CREATE_ITEMS.ZINC_HANDLE}},		RESULT : { NAME: TOOLS.PICKAXE.CREATE.ROZE_QUARTZ,COUNT :1},KEY: 'create_sa/rose_quartz_pickaxe'},
		{PATTERN : [" A ","ABA"," A "], 						PUTTERN_KEY: {A : {item : INGOTS.C_BRASS},					B : {item : CREATE_ITEMS.LINKED_CONTROLLER}},RESULT :{ NAME: CREATE_ITEMS.DRONE_CONTROLLER,	COUNT : 1}, KEY: 'drone_controller'},
		{PATTERN : ["AABAA","CADAC","EAFAE"],					PUTTERN_KEY: {A : {item : INGOTS.M_COPPER}, 				B : {item : CREATE_ITEMS.COGWHEEL},
																			  C : {item : CREATE_ITEMS.FLUID_TANK},			D : {item : CREATE_ITEMS.HYDRAULIC_ENGINE},
																			  E : {item : BLOCKS.M_COPPER}, 				F : {item : CREATE_ITEMS.ANDESITE_ALLOY}},	RESULT : { NAME: TOOLS.CHESTPLATE.EXOSKELETON.COPPER,COUNT : 1}, KEY: 'copper_exoskeleton_chestplate'},
		{PATTERN : ["ABCBA","AADAA","EFAFE"],					PUTTERN_KEY: {A : {item : CREATE_ITEMS.ANDESITE_ALLOY}, 	B : {item : CREATE_ITEMS.SHAFT},
																			  C : {item : CREATE_ITEMS.BELT},				D : {item : CREATE_ITEMS.HEAT_ENGINE},
																			  E : {item : BLOCKS.C_ANDESITE_ALLOY}, 		F : {item : INGOTS.C_ZINC}},				RESULT : { NAME: TOOLS.CHESTPLATE.EXOSKELETON.ANDESITE,COUNT : 1}, KEY: 'andesite_exoskeleton_chestplate'},
		{PATTERN : ["AABAA","CADAC","EACAE"],					PUTTERN_KEY: {A : {item : INGOTS.C_BRASS}, 					B : {item : CREATE_ITEMS.FLYWHEEL},
																			  C : {item : CREATE_ITEMS.ANDESITE_ALLOY},		D : {item : CREATE_ITEMS.CA_STEAM_ENGINE},
																			  E : {item : BLOCKS.C_BRASS}															},	RESULT : { NAME: TOOLS.CHESTPLATE.EXOSKELETON.BRASS,COUNT : 1}, KEY: 'brass_exoskeleton_chestplate'},
		{PATTERN : ["AABAA","CADAC","EAFAE"],					PUTTERN_KEY: {A : {item : INGOTS.M_COPPER}, 				B : {item : CREATE_ITEMS.COGWHEEL},
																			  C : {item : CREATE_ITEMS.FLUID_TANK},			D : {item : CREATE_ITEMS.HYDRAULIC_ENGINE},
																			  E : {item : CREATE_ITEMS.ENCASED_FAN}, 		F : {item : CREATE_ITEMS.ANDESITE_ALLOY}},	RESULT : { NAME: TOOLS.CHESTPLATE.JETPACK.COPPER,	COUNT : 1}, KEY: 'copper_jetpack_chestplate'},
		{PATTERN : ["ABCBA","AADAA","EFAFE"],					PUTTERN_KEY: {A : {item : CREATE_ITEMS.ANDESITE_ALLOY}, 	B : {item : CREATE_ITEMS.SHAFT},
																			  C : {item : CREATE_ITEMS.BELT},				D : {item : CREATE_ITEMS.HEAT_ENGINE},
																			  E : {item : CREATE_ITEMS.ENCASED_FAN}, 		F : {item : INGOTS.C_ZINC}},				RESULT : { NAME: TOOLS.CHESTPLATE.JETPACK.ANDESITE,	COUNT : 1}, KEY: 'andesite_jetpack_chestplate'},
		{PATTERN : ["AABAA","CADAC","EACAE"],					PUTTERN_KEY: {A : {item : INGOTS.C_BRASS}, 					B : {item : CREATE_ITEMS.FLYWHEEL},
																			  C : {item : CREATE_ITEMS.ANDESITE_ALLOY},		D : {item : CREATE_ITEMS.CA_STEAM_ENGINE},
																			  E : {item : CREATE_ITEMS.ENCASED_FAN}													},	RESULT : { NAME: TOOLS.CHESTPLATE.JETPACK.BRASS,	COUNT : 1}, KEY: 'brass_jetpack_chestplate'},
		{PATTERN : ["A","B","A"],								PUTTERN_KEY: {A : {item : SHEETS.C_IRON},					B : {item : RODS.CA_IRON}				},	RESULT : { NAME: CREATE_ITEMS.SPOOL,				COUNT : 1}, KEY: 'spool'},
		{PATTERN : ["A","B","C"],								PUTTERN_KEY: {A : {item : SHEETS.C_ZINC}, 					B : {item : SHEETS.C_COPPER}, 
																			  C : {item : MC_ITEM.REDSTONE_TORCH}													},	RESULT : { NAME: CREATE_ITEMS.CAPACITOR,			COUNT : 1}, KEY: 'capacitor'},
		{PATTERN : ["AB","BC"],									PUTTERN_KEY: {A : {item : RODS.CA_COPPER}, 					B : {item : CREATE_ITEMS.ANDESITE_ALLOY},
																			  C : {item : MC_ITEM.SLIME_BALL}														},	RESULT : { NAME: CREATE_ITEMS.CONNECTOR,			COUNT : 1}, KEY: 'connector'},
		{PATTERN : ["AAAAA","ABCBA","ACDCA","ACECA","AAAAA"],	PUTTERN_KEY: {A : {item : CREATE_ITEMS.BRASS_CASING}, 		B : {item : CREATE_ITEMS.CONNECTOR},
																			  C : {item : CREATE_ITEMS.CAPACITOR},			D : {item : ROSIA_ITEM.NICKEL_IRON_BATTERY},
																			  E : {item : WIRES.CA_GOLD_WIRE}														},	RESULT : { NAME: CREATE_ITEMS.MODULAR_ACCUMULATOR,	COUNT : 1}, KEY: 'modular_accumulator'}
	]
	
	recipes.forEach(recipe=>{
		event.remove({output : recipe.RESULT.NAME})
		event.custom({
			type: RECIPE_TYPE.C_MACHANICAL_CRAFTING,
			pattern: recipe.PATTERN,
			key: recipe.PUTTERN_KEY,
			result: { 
				item: recipe.RESULT.NAME,
				count: recipe.RESULT.COUNT
			}
		}).id(`create:mechanical_crafting/${recipe.KEY}`)
	})
})