onEvent('recipes', event => {
	const recipes=[
		{PUTTERN : ["AAA","ABA","ACA"], PUTTERN_KEY : { A : {item : TFC_ITEM.FIRE_BRICKS }, 		B : {item : TFC_ITEM.OVEN_TOP}, 	
														C : {item : TFC_ITEM.OVEN_BOTTOM }														},	OUTPUT : {item :  MC_ITEM.FURNACE, 			count : 1}, KEY : 'minecraft:furnace'},
		{PUTTERN : ["AAA","ABA","ACA"], PUTTERN_KEY : { A : {item : SHEETS.BLUE_STEEL }, 			B : {item : MC_ITEM.FURNACE}, 			
														C : {item : TFC_ITEM.FIRE_BRICKS }														},	OUTPUT : {item :  MC_ITEM.BLAST_FURNACE, 	count : 1}, KEY : 'minecraft:blast_furnace'},
		{PUTTERN : ["   "," A ","BBB"], PUTTERN_KEY : { A : {item : IE_ITEM.ROCKCUTTER },			B : {item : PLANKS.BIRCH }					},	OUTPUT : {item :  WOODCUTTER.BIRCH, 		count : 1}, KEY : 'corail_woodcutter:birch_woodcutter'},
		{PUTTERN : ["   "," A ","BBB"], PUTTERN_KEY : { A : {item : IE_ITEM.ROCKCUTTER },			B : {item : PLANKS.SPRUCE }					},	OUTPUT : {item :  WOODCUTTER.SPRUCE, 		count : 1}, KEY : 'corail_woodcutter:spruce_woodcutter'},
		{PUTTERN : ["   "," A ","BBB"], PUTTERN_KEY : { A : {item : IE_ITEM.ROCKCUTTER },			B : {item : PLANKS.OAK }					},	OUTPUT : {item :  WOODCUTTER.OAK,	 		count : 1}, KEY : 'corail_woodcutter:oak_woodcutter'},
		{PUTTERN : ["   "," A ","BBB"], PUTTERN_KEY : { A : {item : IE_ITEM.ROCKCUTTER },			B : {item : PLANKS.ACACIA }					},	OUTPUT : {item :  WOODCUTTER.ACACIA, 		count : 1}, KEY : 'corail_woodcutter:acacia_woodcutter'},
		{PUTTERN : ["ABA","B B","ABA"], PUTTERN_KEY : { A : {item : ORES.PRECIOUS.DIAMOND }, 		B : {item : SHEETS.BLACK_STEEL }			},	OUTPUT : {item :  IE_ITEM.ROCKCUTTER, 		count : 1},	KEY : "immersiveengineering:crafting/rockcutter"},
		{PUTTERN : ["ABA","CDC","EFE"], PUTTERN_KEY : { A : {item : CREATE_ITEMS.COGWHEEL },		B : {item : TFC_ITEM.HANDSTONE },			
														C : {item : CREATE_ITEMS.ANDESITE_CASING },	D : {item : TFC_ITEM.QUERN },				
														E : {item : HARDENED_ROCKS.BASALT },		F : {item : MC_ITEM.HOPPER }				}, 	OUTPUT : {item :  CREATE_ITEMS.MILLSTONE, 	count : 1},	KEY : "create:crafting/kinetics/millstone"},
		{PUTTERN : ["ABA","CDC"," E "], PUTTERN_KEY : { A : {item : CREATE_ITEMS.COGWHEEL },		B : {item : CREATE_ITEMS.LARGE_COGWHEEL },			
														C : {item : CREATE_ITEMS.ANDESITE_CASING },	D : {item : GREATE_RODS.TITANIUM },				
														E : {item : BLOCKS.TITANIUM },															}, 	OUTPUT : {item :  CREATE_ITEMS.PRESS, 		count : 1},	KEY : "create:crafting/kinetics/mechanical_press"},
														
	]
	recipes.forEach(recipe=>{
		event.recipes.minecraft.crafting_shaped({
			pattern: recipe.PUTTERN,
			key: recipe.PUTTERN_KEY,
			result: recipe.OUTPUT
		}).id(recipe.KEY)
	})
})