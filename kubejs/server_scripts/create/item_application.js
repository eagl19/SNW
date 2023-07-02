onEvent('recipes', event => {
	const recipes = [
		{INGREDIENTS : [{ item : WOODS.ACACIA},			{ tag : TAGS.STONE_JAVELIN_HEAD}], 			OUTPUT : PB_ITEM.NEST.ACACIA, 		KEY : 'acacia_wood_nest'},
		{INGREDIENTS : [{ item : WOODS.OAK},			{ tag : TAGS.STONE_JAVELIN_HEAD}], 			OUTPUT : PB_ITEM.NEST.OAK, 			KEY : 'oak_wood_nest'},
		{INGREDIENTS : [{ item : WOODS.SPRUCE},			{ tag : TAGS.STONE_JAVELIN_HEAD}],		 	OUTPUT : PB_ITEM.NEST.SPRUCE, 		KEY : 'spruce_wood_nest'},
		{INGREDIENTS : [{ item : WOODS.BLACKWOOD},		{ tag : TAGS.STONE_JAVELIN_HEAD}], 			OUTPUT : PB_ITEM.NEST.DARK_OAK, 	KEY : 'dark_oak_wood_nest'},
		{INGREDIENTS : [{ item : WOODS.BIRCH},			{ tag : TAGS.STONE_JAVELIN_HEAD}], 			OUTPUT : PB_ITEM.NEST.BIRCH, 		KEY : 'birch_wood_nest'},
		{INGREDIENTS : [{ item : WOODS.KAPOK},			{ tag : TAGS.STONE_JAVELIN_HEAD}],			OUTPUT : PB_ITEM.NEST.JUNGLE, 		KEY : 'jungle_wood_nest'},
		{INGREDIENTS : [{ item : MC_ITEM.STONE},		{ item : TFC_ITEM.WROUGHT_IRON_JAVELIN}], 	OUTPUT : PB_ITEM.NEST.STONE, 		KEY : 'stone_nest'},
		{INGREDIENTS : [{ item : MC_ITEM.COARSE_DIRT},	{ tag : TAGS.STONE_JAVELIN_HEAD}],			OUTPUT : PB_ITEM.NEST.COARSE_DIRT,	KEY : 'coarse_dirt_nest'},
		{INGREDIENTS : [{ tag  : TAGS.SANDS},			{ tag : TAGS.STONE_JAVELIN_HEAD}],			OUTPUT : PB_ITEM.NEST.SAND,			KEY : 'sand_nest'},
		{INGREDIENTS : [{ item : BLOCKS.SNOW},			{ tag : TAGS.STONE_JAVELIN_HEAD}],			OUTPUT : PB_ITEM.NEST.SNOW, 		KEY : 'snow_nest'},
		{INGREDIENTS : [{ tag  : TAGS.TFC_GRAVELS},		{ tag : TAGS.STONE_JAVELIN_HEAD}],			OUTPUT : PB_ITEM.NEST.GRAVEL, 		KEY : 'gravel_nest'},
		{INGREDIENTS : [{ item : BLOCKS.SLIME},			{ tag : TAGS.STONE_JAVELIN_HEAD}],			OUTPUT : PB_ITEM.NEST.SLIMY, 		KEY : 'slimy_nest'},
		{INGREDIENTS : [{ item : MC_ITEM.SUGAR_CANE},	{ item : TFC_ITEM.KELP_STRING}],			OUTPUT : PB_ITEM.NEST.SUGAR_CANE, 	KEY : 'm_sugar_cane_nest'},
		{INGREDIENTS : [{ item : TFC_ITEM.SUGAR_CANE},	{ item : TFC_ITEM.KELP_STRING}],			OUTPUT : PB_ITEM.NEST.SUGAR_CANE, 	KEY : 'sugar_cane_nest'}
	]
	recipes.forEach(recipe=>{
		event.custom({ 
			type: RECIPE_TYPE.C_ITEM_APPLICATION,
			ingredients: recipe.INGREDIENTS,
			results: [
			{
				item: recipe.OUTPUT
			}
			]
		}).id(`create:item_application/${recipe.KEY}`)
	})
})