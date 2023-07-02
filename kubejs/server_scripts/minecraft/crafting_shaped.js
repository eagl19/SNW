onEvent('recipes', event => {
	
	const recipes=[
		{PUTTERN : ["AAA","ABA","ACA"], PUTTERN_KEY : { A : {item : TFC_ITEM.FIRE_BRICKS }, 		B : {item : TFC_ITEM.OVEN_TOP}, 	
														C : {item : TFC_ITEM.OVEN_BOTTOM }														},	OUTPUT : {item :  MC_ITEM.FURNACE, 					count : 1}, KEY : 'minecraft:furnace'},
		{PUTTERN : ["AAA","ABA","ACA"], PUTTERN_KEY : { A : {item : SHEETS.BLUE_STEEL }, 			B : {item : MC_ITEM.FURNACE}, 			
														C : {item : TFC_ITEM.FIRE_BRICKS }														},	OUTPUT : {item :  MC_ITEM.BLAST_FURNACE, 			count : 1}, KEY : 'minecraft:blast_furnace'},
		{PUTTERN : ["   "," A ","BBB"], PUTTERN_KEY : { A : {item : IE_ITEM.ROCKCUTTER },			B : {item : PLANKS.BIRCH }					},	OUTPUT : {item :  WOODCUTTER.BIRCH, 				count : 1}, KEY : 'corail_woodcutter:birch_woodcutter'},
		{PUTTERN : ["   "," A ","BBB"], PUTTERN_KEY : { A : {item : IE_ITEM.ROCKCUTTER },			B : {item : PLANKS.SPRUCE }					},	OUTPUT : {item :  WOODCUTTER.SPRUCE, 				count : 1}, KEY : 'corail_woodcutter:spruce_woodcutter'},
		{PUTTERN : ["   "," A ","BBB"], PUTTERN_KEY : { A : {item : IE_ITEM.ROCKCUTTER },			B : {item : PLANKS.OAK }					},	OUTPUT : {item :  WOODCUTTER.OAK,	 				count : 1}, KEY : 'corail_woodcutter:oak_woodcutter'},
		{PUTTERN : ["   "," A ","BBB"], PUTTERN_KEY : { A : {item : IE_ITEM.ROCKCUTTER },			B : {item : PLANKS.ACACIA }					},	OUTPUT : {item :  WOODCUTTER.ACACIA, 				count : 1}, KEY : 'corail_woodcutter:acacia_woodcutter'},
		{PUTTERN : ["ABA","B B","ABA"], PUTTERN_KEY : { A : {item : ORES.PRECIOUS.DIAMOND }, 		B : {item : SHEETS.BLACK_STEEL }			},	OUTPUT : {item :  IE_ITEM.ROCKCUTTER, 				count : 1},	KEY : "immersiveengineering:crafting/rockcutter"},
		{PUTTERN : ["ABA","CDC","EFE"], PUTTERN_KEY : { A : {item : CREATE_ITEMS.COGWHEEL },		B : {item : TFC_ITEM.HANDSTONE },			
														C : {item : CREATE_ITEMS.ANDESITE_CASING },	D : {item : TFC_ITEM.QUERN },				
														E : {item : HARDENED_ROCKS.BASALT },		F : {item : MC_ITEM.HOPPER }				}, 	OUTPUT : {item :  CREATE_ITEMS.MILLSTONE, 			count : 1},	KEY : "create:crafting/kinetics/millstone"},
		{PUTTERN : ["ABA","CDC","ACA"], PUTTERN_KEY : { A : {item : CREATE_ITEMS.COGWHEEL },		B : {item : CREATE_ITEMS.LARGE_COGWHEEL },			
														C : {item : CREATE_ITEMS.ANDESITE_CASING },	D : {item : GREATE_RODS.TITANIUM }			}, 	OUTPUT : {item :  CREATE_ITEMS.ANDESITE_MACHINE, 	count : 1},	KEY : "kubejs:crafting/kinetics/andesite_machine"},
		{PUTTERN : ["AAA","BCB","AAA"], PUTTERN_KEY : { A : {tag  : TAGS.TFC_LUMBER }, 				B : {item : CHAINS.COPPER}, 	
														C : {item : DOUBLE_SHEETS.COPPER }														},	OUTPUT : {item :  MC_ITEM.BARREL, 					count : 1}, KEY : 'minecraft:barrel'},
		{PUTTERN : ["AAA","ABA","AAA"], PUTTERN_KEY : { A : {item : SHEETS.COPPER },				B : {item : MC_ITEM.BARREL }				},	OUTPUT : {item :  CREATE_ITEMS.FLUID_TANK, 			count : 1}, KEY : 'create:crafting/kinetics/fluid_tank'},
		{PUTTERN : ["AAA","BCB","BBB"], PUTTERN_KEY : { A : {item : ORES.PRECIOUS.CERTUS_QUARTZ },	B : {item : TC_ITEM.SEARED_BRICK}, 	
														C : {item : TFC_ITEM.BLAST_FURNACE }													},	OUTPUT : {item :  TC_ITEM.SEARED_MELTER, 			count : 1}, KEY : 'tconstruct:smeltery/seared/melter'},
		{PUTTERN : ["   "," A "," B "], PUTTERN_KEY : { A : {item : TFC_ITEM.IE_HAMMER_HEAD },		B : {item : IE_ITEM.STICK },				}, 	OUTPUT : {item :  IE_ITEM.HAMMER, 					count : 1}, KEY : 'immersiveengineering:crafting/hammer'},
		{PUTTERN : ["ABA","BCB","ABA"], PUTTERN_KEY : { A : {item : CUT_BLOCKS.BORON },				B : {item : IE_ITEM.COKE_BRICK}, 	
														C : {item : TFC_ITEM.CRUCIBLE }															},	OUTPUT : {item :  IE_ITEM.ALLOY_BRICK, 				count : 1}, KEY : 'immersiveengineering:crafting/alloybrick'},
		{PUTTERN : ["ABC","DEF","GGG"], PUTTERN_KEY : { A : {item : TFC_ITEM.RED_STEEL_HAMMER },	B : {item : TFC_ITEM.FERROBORON_SAW}, 	
														C : {item : TFC_ITEM.BLUE_STEEL_HAMMER }, 	D : {item : TFC_ITEM.COBALT_CHISEL },
														E : {tag  : TAGS.TFC_WORCKBENCHES }, 		F : {item : TFC_ITEM.OSMIRIDIUM_SHEARS },
														G : {item : CREATE_ITEMS.ANDESITE_CASING }												},	OUTPUT : {item :  MC_ITEM.SMITHING_TABLE, 			count : 1}, KEY : 'minecraft:smithing_table'},
		{PUTTERN : ["   ","AAA","BCB"], PUTTERN_KEY : { A : {item : SHEETS.TITANIUM },				B : {item : CREATE_ITEMS.ANDESITE_CASING}, 	
														C : {item : BLOCKS.TUNGSTEN_STEEL }														},	OUTPUT : {item :  CREATE_ITEMS.DEPOT, 				count : 1}, KEY : 'create:crafting/kinetics/depot'},												
		{PUTTERN : ["A A","A A","BCB"], PUTTERN_KEY : { A : {item : CREATE_ITEMS.ANDESITE_ALLOY },	B : {item : CREATE_ITEMS.ANDESITE_CASING}, 	
														C : {item : CREATE_ITEMS.DEPOT }														},	OUTPUT : {item :  CREATE_ITEMS.BASIN, 				count : 1}, KEY : 'create:crafting/kinetics/basin'},
		{PUTTERN : ["ABC","BD "," E "], PUTTERN_KEY : { A : {item : SHEETS.C_BRASS },				B : {item : SHEETS.C_IRON}, 	
														C : {item : SHEETS.C_GOLDEN },				D : {item : CREATE_ITEMS.COGWHEEL},
														E : {item : RODS.PLATINUM}																},	OUTPUT : {item :  CREATE_ITEMS.WRENCH, 				count : 1}, KEY : 'create:crafting/kinetics/wrench'},
		{PUTTERN : [" A ","BAB","BBB"], PUTTERN_KEY : { A : {item : GREATE_RODS.TITANIUM },			B : {item : PLATES.TITANIUM }				},	OUTPUT : {item :  CREATE_ITEMS.WHISK, 				count : 1}, KEY : 'create:crafting/kinetics/whisk'},
		{PUTTERN : ["ABA","CDC","ABA"], PUTTERN_KEY : { A : {item : CREATE_ITEMS.BRASS_CASING },	B : {item : IE_ITEM.CIRCUIT_BOARD}, 	
														C : {item : CREATE_ITEMS.ELECTRON_TUBE },	D : {item : CREATE_ITEMS.ANDESITE_MACHINE}	},	OUTPUT : {item :  CREATE_ITEMS.BRASS_MACHINE, 		count : 1}, KEY : 'create:crafting/kinetics/brass_machine'},
		{PUTTERN : ["ABA","CDC","ABA"], PUTTERN_KEY : { A : {item : CREATE_ITEMS.COPPER_CASING },	B : {item : GEARS.NICKEL_SILVER}, 	
														C : {item : GREATE_GEARS.INVAR },			D : {item : CREATE_ITEMS.ANDESITE_MACHINE}	},	OUTPUT : {item :  CREATE_ITEMS.COPPER_MACHINE, 		count : 1}, KEY : 'create:crafting/kinetics/copper_machine'},
		{PUTTERN : ["ABA","CDC","ABA"], PUTTERN_KEY : { A : {item : CREATE_ITEMS.ANDESITE_CASING },	B : {item : GREATE_RODS.TITANIUM}, 	
														C : {item : CREATE_ITEMS.LARGE_COGWHEEL },	D : {item : CREATE_ITEMS.ANDESITE_MACHINE}	},	OUTPUT : {item :  CREATE_ITEMS.ROLLING_MILL, 		count : 1}, KEY : 'createaddition:crafting/rolling_mill'},
		{PUTTERN : ["AAA","ABA","AAA"], PUTTERN_KEY : { A : {item : WIRES.R_COPPER },				B : {item : IE_ITEM.STICK }					},	OUTPUT : {item :  ROSIA_ITEM.COPPER_COIL, 			count : 1}, KEY : 'rosia:crafting/copper_coil'},
		{PUTTERN : ["AAA","ABA","AAA"], PUTTERN_KEY : { A : {item : WIRES.R_PURPLE_STEEL },			B : {item : IE_ITEM.STICK }					},	OUTPUT : {item :  ROSIA_ITEM.PURPLE_STEEL_COIL, 	count : 1}, KEY : 'rosia:crafting/purple_steel_coil'},
		{PUTTERN : [" A ","BCB"," D "], PUTTERN_KEY : { A : {item : CREATE_ITEMS.COGWHEEL },		B : {item : SHEETS.C_GOLDEN}, 	
														C : {tag  : TAGS.B_WOODEN_CHESTS },			D : {item : TFC_ITEM.KELP_CLOTH}			},	OUTPUT : {item :  CREATE_ITEMS.BROWN_TOOLBOX, 		count : 1}, KEY : 'create:crafting/curiosities/brown_toolbox'},
		{PUTTERN : ["  A"," B ","A  "], PUTTERN_KEY : { A : {item : CREATE_ITEMS.ANDESITE_ALLOY },	B : {item : SHEETS.C_IRON }					},	OUTPUT : {item :  CREATE_ITEMS.MINECART_COUPLING, 	count : 1}, KEY : 'create:crafting/curiosities/minecart_coupling'},
		{PUTTERN : ["BBB","AAA"], 		PUTTERN_KEY : { A : {item : CREATE_ITEMS.ANDESITE_ALLOY },	B : {item : SHEETS.C_IRON }					},	OUTPUT : {item :  CREATE_ITEMS.METAL_GIRDER, 		count : 8}, KEY : 'create:crafting/kinetics/metal_girder'},
		{PUTTERN : ["AB","CA"], 		PUTTERN_KEY : { A : {item : MC_ITEM.SLIME_BALL },			B : {item : SHEETS.C_IRON },
														C : {item : NUGGETS.WROUGHT_IRON }														},	OUTPUT : {item :  CREATE_ITEMS.SUPER_GLUE, 			count : 1}, KEY : 'create:crafting/kinetics/super_glue'},
		{PUTTERN : ["A","B"], 			PUTTERN_KEY : { A : {item : BLOCKS.BRASS },					B : {item : SHEETS.C_BRASS }				},	OUTPUT : {item :  CREATE_ITEMS.PECULIAR_BELL, 		count : 1}, KEY : 'create:crafting/curiosities/peculiar_bell'},
		{PUTTERN : ["BBB"," A "], 		PUTTERN_KEY : { A : {item : CREATE_ITEMS.ANDESITE_ALLOY },	B : {item : SHEETS.C_COPPER }				},	OUTPUT : {item :  CREATE_ITEMS.COPPER_VALVE_HANDLE, count : 1}, KEY : 'create:crafting/kinetics/copper_valve_handle'},
		{PUTTERN : ["AB"], 				PUTTERN_KEY : { A : {item : MC_ITEM.ITEM_FRAME },			B : {item : SHEETS.C_BRASS }				},	OUTPUT : {item :  CREATE_ITEMS.PLACARD, 			count : 1}, KEY : 'create:crafting/kinetics/placard'},
		{PUTTERN : ["ABC","DDD"], 		PUTTERN_KEY : { A : {item : MC_ITEM.REDSTONE },				B : {item : SHEETS.C_BRASS },
														C : {item : MC_ITEM.REDSTONE_TORCH },		D : {tag  : TAGS.B_STONES }					},	OUTPUT : {item :  CREATE_ITEMS.PULSE_REPEATER, 		count : 1}, KEY : 'create:crafting/logistics/pulse_repeater'},
		{PUTTERN : ["  C","ABC","DDD"],	PUTTERN_KEY : { A : {item : MC_ITEM.REDSTONE },				B : {item : SHEETS.C_BRASS },
														C : {item : MC_ITEM.REDSTONE_TORCH },		D : {tag  : TAGS.B_STONES }					},	OUTPUT : {item :  CREATE_ITEMS.PULSE_EXTENDER, 		count : 1}, KEY : 'create:crafting/logistics/pulse_extender'},
		{PUTTERN : ["AB","C "],			PUTTERN_KEY : { A : {item : CREATE_ITEMS.POLISHED_ROZE_QUARTZ }, 
														B : {item : MC_ITEM.REDSTONE }, 			C : {item : SHEETS.C_BRASS }				},	OUTPUT : {item :  CREATE_ITEMS.ROSE_QUARTZ_LAMP, 	count : 1}, KEY : 'create:crafting/kinetics/rose_quartz_lamp'},
		{PUTTERN : ["ABA"], 			PUTTERN_KEY : { A : {item : NUGGETS.BRASS },				B : {item : TFC_ITEM.KELP_CLOTH }			},	OUTPUT : {item :  CREATE_ITEMS.FILTER, 				count : 1}, KEY : 'create:crafting/kinetics/filter'},
		{PUTTERN : ["ABA"], 			PUTTERN_KEY : { A : {item : NUGGETS.GOLD },					B : {item : TFC_ITEM.KELP_CLOTH }			},	OUTPUT : {item :  CREATE_ITEMS.ATTRIBUTE_FILTER, 	count : 1}, KEY : 'create:crafting/kinetics/attribute_filter'},
		{PUTTERN : ["A A","ABA","ACA"],	PUTTERN_KEY : { A : {item : INGOTS.M_GOLD },				B : {item : IE_ITEM.STICK },
														C : {item : CREATE_ITEMS.ELECTRON_TUBE }												},	OUTPUT : {item :  CREATE_ITEMS.CONTROLLER_RAIL, 	count : 1}, KEY : 'create:crafting/kinetics/controller_rail'},
		{PUTTERN : [" A ","BCB"],		PUTTERN_KEY : { A : {item : TFC_ITEM.KELP_STRING }, 
														B : {item : TC_ITEM.CLEAR_GLASS }, 			C : {item : SHEETS.C_GOLDEN }				},	OUTPUT : {item :  CREATE_ITEMS.GOGGLES, 			count : 1}, KEY : 'create:crafting/kinetics/goggles'},
		{PUTTERN : ["AAA","ABA","AAA"], PUTTERN_KEY : { A : {item : INGOTS.C_BRASS },				B : {item : INGOTS.NETHERITE }				},	OUTPUT : {item :  CREATE_ITEMS.BRASS_CUBE, 			count : 1}, KEY : 'create_sa:brass_cube_recipe'},
		{PUTTERN : ["AAA","ABA","AAA"], PUTTERN_KEY : { A : {item : INGOTS.M_COPPER },				B : {item : INGOTS.NETHERITE }				},	OUTPUT : {item :  CREATE_ITEMS.COPPER_MAGNET, 		count : 1}, KEY : 'create_sa:copper_magnet_recipe'},
		{PUTTERN : ["AB","BA"], 		PUTTERN_KEY : { A : {tag  : TAGS.M_DIRT },					B : {tag  : TAGS.TFC_GRAVELS }				},	OUTPUT : {item :  MC_ITEM.COARSE_DIRT, 				count : 4}, KEY : 'minecraft:coarse_dirt'}
	]
	event.remove({output : MC_ITEM.FURNACE})
	event.remove({output : MC_ITEM.BLAST_FURNACE})
	event.remove({output : WOODCUTTER.BIRCH})
	event.remove({output : WOODCUTTER.SPRUCE})
	event.remove({output : WOODCUTTER.OAK})
	event.remove({output : WOODCUTTER.ACACIA})
	event.remove({output : IE_ITEM.ROCKCUTTER})
	event.remove({output : CREATE_ITEMS.MILLSTONE})
	event.remove({output : MC_ITEM.BARREL})
	event.remove({output : CREATE_ITEMS.FLUID_TANK})
	event.remove({output : TC_ITEM.SEARED_MELTER})
	event.remove({output : IE_ITEM.HAMMER})
	event.remove({output : IE_ITEM.ALLOY_BRICK})
	event.remove({output : MC_ITEM.SMITHING_TABLE})
	event.remove({output : CREATE_ITEMS.DEPOT})
	event.remove({output : CREATE_ITEMS.BASIN})
	event.remove({output : CREATE_ITEMS.WRENCH})
	event.remove({output : CREATE_ITEMS.WHISK})
	event.remove({output : CREATE_ITEMS.ROLLING_MILL})
	event.remove({output : ROSIA_ITEM.COPPER_COIL})
	event.remove({output : ROSIA_ITEM.PURPLE_STEEL_COIL})
	event.remove({output : CREATE_ITEMS.BROWN_TOOLBOX})
	event.remove({output : CREATE_ITEMS.MINECART_COUPLING})
	event.remove({output : CREATE_ITEMS.METAL_GIRDER})
	event.remove({output : CREATE_ITEMS.SUPER_GLUE})
	event.remove({output : CREATE_ITEMS.PECULIAR_BELL})
	event.remove({output : CREATE_ITEMS.COPPER_VALVE_HANDLE})
	event.remove({output : CREATE_ITEMS.PLACARD})
	event.remove({output : CREATE_ITEMS.PULSE_REPEATER})
	event.remove({output : CREATE_ITEMS.PULSE_EXTENDER})
	event.remove({output : CREATE_ITEMS.ROSE_QUARTZ_LAMP})
	event.remove({output : CREATE_ITEMS.FILTER})
	event.remove({output : CREATE_ITEMS.ATTRIBUTE_FILTER})
	event.remove({output : CREATE_ITEMS.CONTROLLER_RAIL})
	event.remove({output : CREATE_ITEMS.GOGGLES})
	event.remove({output : CREATE_ITEMS.BRASS_CUBE})
	event.remove({output : CREATE_ITEMS.COPPER_MAGNET})
	recipes.forEach(recipe=>{
		event.recipes.minecraft.crafting_shaped({
			pattern: recipe.PUTTERN,
			key: recipe.PUTTERN_KEY,
			result: recipe.OUTPUT
		}).id(recipe.KEY)
	})
})