onEvent('recipes', event => {
	const recipes = [
		{INPUT: { NAME: NUGGETS.ALUMINUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.ALUMINUM, 		KEY:'aluminum/nugget'},
		{INPUT: { NAME: NUGGETS.COPPER, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.COPPER, 			KEY:'copper/nugget'},
		{INPUT: { NAME: NUGGETS.GOLD, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.GOLD, 			KEY:'gold/nugget'},
		{INPUT: { NAME: NUGGETS.WROUGHT_IRON, 	ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.WROUGHT_IRON, 	KEY:'wrought_iron/nugget'},
		{INPUT: { NAME: NUGGETS.LEAD, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.LEAD, 			KEY:'lead/nugget'},
		{INPUT: { NAME: NUGGETS.NICKEL, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.NICKEL,			KEY:'nickel/nugget'},
		{INPUT: { NAME: NUGGETS.SILVER, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.SILVER, 			KEY:'silver/nugget'},
		{INPUT: { NAME: NUGGETS.TIN, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.TIN, 			KEY:'tin/nugget'},
		{INPUT: { NAME: NUGGETS.ZINC, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.ZINC,			KEY:'zinc/nugget'},
		{INPUT: { NAME: NUGGETS.BISMUTH, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.BISMUTH, 		KEY:'bismuth/nugget'},
		{INPUT: { NAME: NUGGETS.BERYLLIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.BERYLLIUM, 		KEY:'beryllium/nugget'},
		{INPUT: { NAME: NUGGETS.COBALT, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.COBALT, 			KEY:'cobalt/nugget'},
		{INPUT: { NAME: NUGGETS.BORON, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.BORON, 			KEY:'boron/nugget'},
		{INPUT: { NAME: NUGGETS.THORIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.THORIUM, 		KEY:'thorium/nugget'},
		{INPUT: { NAME: NUGGETS.IRIDIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.IRIDIUM, 		KEY:'iridium/nugget'},
		{INPUT: { NAME: NUGGETS.TITANIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.TITANIUM, 		KEY:'titanium/nugget'},
		{INPUT: { NAME: NUGGETS.ANTIMONY, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.ANTIMONY, 		KEY:'antimony/nugget'},
		{INPUT: { NAME: NUGGETS.TUNGSTEN, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.TUNGSTEN, 		KEY:'tungsten/nugget'},
		{INPUT: { NAME: NUGGETS.CHROMIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.CHROMIUM, 		KEY:'chromium/nugget'},
		{INPUT: { NAME: NUGGETS.URANIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.URANIUM, 		KEY:'uranium/nugget'},
		{INPUT: { NAME: NUGGETS.PLATINUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.PLATINUM, 		KEY:'platinum/nugget'},
		{INPUT: { NAME: NUGGETS.OSMIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: INGOTS.OSMIUM,		 	KEY:'osmium/nugget'},
		
		{INPUT: { NAME: INGOTS.ALUMINUM, 		ICOUNT: 10,	FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.ALUMINUM, 		KEY:'aluminum/ingot'},
		{INPUT: { NAME: INGOTS.COPPER, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.COPPER, 			KEY:'copper/ingot'},
		{INPUT: { NAME: INGOTS.GOLD, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.GOLD, 			KEY:'gold/ingot'},
		{INPUT: { NAME: INGOTS.WROUGHT_IRON, 	ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.WROUGHT_IRON, 	KEY:'wrought_iron/ingot'},
		{INPUT: { NAME: INGOTS.LEAD, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.LEAD, 			KEY:'lead/ingot'},
		{INPUT: { NAME: INGOTS.NICKEL, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.NICKEL,			KEY:'nickel/ingot'},
		{INPUT: { NAME: INGOTS.SILVER, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.SILVER, 			KEY:'silver/ingot'},
		{INPUT: { NAME: INGOTS.TIN, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.TIN, 			KEY:'tin/ingot'},
		{INPUT: { NAME: INGOTS.ZINC, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.ZINC,			KEY:'zinc/ingot'},
		{INPUT: { NAME: INGOTS.BISMUTH, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.BISMUTH, 		KEY:'bismuth/ingot'},
		{INPUT: { NAME: INGOTS.BERYLLIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.BERYLLIUM, 		KEY:'beryllium/ingot'},
		{INPUT: { NAME: INGOTS.COBALT, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.COBALT, 			KEY:'cobalt/ingot'},
		{INPUT: { NAME: INGOTS.BORON, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.BORON, 			KEY:'boron/ingot'},
		{INPUT: { NAME: INGOTS.THORIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.THORIUM, 		KEY:'thorium/ingot'},
		{INPUT: { NAME: INGOTS.IRIDIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.IRIDIUM, 		KEY:'iridium/ingot'},
		{INPUT: { NAME: INGOTS.TITANIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.TITANIUM, 		KEY:'titanium/ingot'},
		{INPUT: { NAME: INGOTS.ANTIMONY, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.ANTIMONY, 		KEY:'antimony/ingot'},
		{INPUT: { NAME: INGOTS.TUNGSTEN, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.TUNGSTEN, 		KEY:'tungsten/ingot'},
		{INPUT: { NAME: INGOTS.CHROMIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.CHROMIUM, 		KEY:'chromium/ingot'},
		{INPUT: { NAME: INGOTS.URANIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.URANIUM, 		KEY:'uranium/ingot'},
		{INPUT: { NAME: INGOTS.PLATINUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.PLATINUM, 		KEY:'platinum/ingot'},
		{INPUT: { NAME: INGOTS.OSMIUM, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.OSMIUM,		 	KEY:'osmium/ingot'},
		
		{INPUT: { NAME: INGOTS.BRONZE, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.BRONZE,		 	KEY:'bronze/ingot'},
		{INPUT: { NAME: INGOTS.BISMUTH_BRONZE,	ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.BISMUTH_BRONZE, 	KEY:'bismuth_bronze/ingot'},
		{INPUT: { NAME: INGOTS.BLACK_BRONZE, 	ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.BLACK_BRONZE, 	KEY:'black_bronze/ingot'},
		{INPUT: { NAME: INGOTS.BRASS, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.BRASS,		 	KEY:'brass/ingot'},
		{INPUT: { NAME: INGOTS.ROSE_GOLD, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.ROSE_GOLD,	 	KEY:'rose_gold/ingot'},
		{INPUT: { NAME: INGOTS.STERLING_SILVER,	ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.STERLING_SILVER,	KEY:'sterling_silver/ingot'},
		{INPUT: { NAME: INGOTS.STEEL, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.STEEL,		 	KEY:'steel/ingot'},
		{INPUT: { NAME: INGOTS.BLACK_STEEL, 	ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.BLACK_STEEL,		KEY:'black_steel/ingot'},
		{INPUT: { NAME: INGOTS.BLUE_STEEL, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.BLUE_STEEL,		KEY:'blue_steel/ingot'},
		{INPUT: { NAME: INGOTS.RED_STEEL, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.RED_STEEL,	 	KEY:'red_steel/ingot'},
		{INPUT: { NAME: INGOTS.ALNICO, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.ALNICO,		 	KEY:'alnico/ingot'},
		{INPUT: { NAME: INGOTS.BERYLLIUM_COPPER,ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.BERYLLIUM_COPPER,KEY:'beryllium_copper/ingot'},
		{INPUT: { NAME: INGOTS.CONSTANTAN, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.CONSTANTAN,	 	KEY:'constantan/ingot'},
		{INPUT: { NAME: INGOTS.ELECTRUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.ELECTRUM,	 	KEY:'electrum/ingot'},
		{INPUT: { NAME: INGOTS.FERROBORON, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.FERROBORON,	 	KEY:'ferroboron/ingot'},
		{INPUT: { NAME: INGOTS.FLORENTINE_BRONZE,ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.FLORENTINE_BRONZE,KEY:'florentine_bronze/ingot'},
		{INPUT: { NAME: INGOTS.INVAR, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.INVAR,		 	KEY:'invar/ingot'},
		{INPUT: { NAME: INGOTS.MITHRIL, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.MITHRIL,		 	KEY:'mithril/ingot'},
		{INPUT: { NAME: INGOTS.NICKEL_SILVER, 	ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.NICKEL_SILVER, 	KEY:'nickel_silver/ingot'},
		{INPUT: { NAME: INGOTS.OSMIRIDIUM, 		ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.OSMIRIDIUM,	 	KEY:'osmiridium/ingot'},
		{INPUT: { NAME: INGOTS.PEWTER, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.PEWTER,		 	KEY:'pewter/ingot'},
		{INPUT: { NAME: INGOTS.SOLDER, 			ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.SOLDER,		 	KEY:'solder/ingot'},
		{INPUT: { NAME: INGOTS.TUNGSTEN_STEEL, 	ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.TUNGSTEN_STEEL, 	KEY:'tungsten_steel/ingot'},
		{INPUT: { NAME: INGOTS.STAINLESS_STEEL, ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.STAINLESS_STEEL,	KEY:'stainless_steel/ingot'},
		{INPUT: { NAME: INGOTS.ANDESITE_ALLOY, 	ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.ANDESITE_ALLOY,	KEY:'andesite_alloy/ingot'},
		
		
		{INPUT: { NAME: CREATE_ITEMS.ANDESITE_ALLOY, ICOUNT: 10, FLUID: FLUIDS.MC_LAVA, FCOUNT: 1},	OUTPUT: BLOCKS.C_ANDESITE_ALLOY,	KEY:'andesite_alloy_block'},
		
		{INPUT: { NAME: DUSTS.CHARCOAL, 		ICOUNT: 9, 	FLUID: FLUIDS.MC_WATER, FCOUNT: 10},	OUTPUT: BLOCKS.CHARCOAL,	KEY:'block_charcoal'},
		{INPUT: { NAME: DUSTS.COAL, 			ICOUNT: 9, 	FLUID: FLUIDS.MC_WATER, FCOUNT: 10},	OUTPUT: BLOCKS.COAL,		KEY:'coal_block'},	
		
		{INGREDIENTS:[{ item : CREATE_ITEMS.DOUGH },{ item : DYES.LIME },{ item : TFC_ITEM.GLUE },{fluid : FLUIDS.SPRING, nbt:{}, amount: 50}],	OUTPUT: MC_ITEM.SLIME_BALL,			KEY:'slime_ball'},
		{INGREDIENTS:[{ item : CREATE_ITEMS.DOUGH },{ item : DYES.RED  },{ item : TFC_ITEM.GLUE },{fluid : FLUIDS.SPRING, nbt:{}, amount: 50}],	OUTPUT: TC_ITEM.BLOOD_SLIME_BALL,	KEY:'blood_slime_ball'}
		
	]
	recipes.forEach(recipe=>{
		let INGREDIENTS=null
		if(recipe.INGREDIENTS){
			INGREDIENTS=recipe.INGREDIENTS
		}else{
			INGREDIENTS=Array(recipe.INPUT.ICOUNT).fill(Id_or_tag_to_item(recipe.INPUT.NAME))
			INGREDIENTS.push({ fluid: recipe.INPUT.FLUID, nbt:{}, amount: recipe.INPUT.FCOUNT})		
		}
		event.custom({
			type: RECIPE_TYPE.C_COMPACTING,
			ingredients: INGREDIENTS,
			results:[
				{ item: recipe.OUTPUT }
			],
		}).id(`create:compacting/${recipe.KEY}`)
	})
})