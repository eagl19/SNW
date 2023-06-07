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
														C : {item : CREATE_ITEMS.ELECTRON_TUBE },	D : {item : CREATE_ITEMS.ANDESITE_MACHINE}	},	OUTPUT : {item :  CREATE_ITEMS.BRASS_MACHINE, 		count : 1}, KEY : 'create:crafting/kinetics/brass_machine'}
														
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
	recipes.forEach(recipe=>{
		event.recipes.minecraft.crafting_shaped({
			pattern: recipe.PUTTERN,
			key: recipe.PUTTERN_KEY,
			result: recipe.OUTPUT
		}).id(recipe.KEY)
	})
})