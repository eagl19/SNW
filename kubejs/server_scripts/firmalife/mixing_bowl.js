onEvent('recipes', event => {
	const recipes = [
		{INGREDIENTS : [{ tag  : TAGS.TFC_GRAVELS },{ tag  : TAGS.SANDS },	{ item : MC_ITEM.CLAY_BALL }	], FLUID : {NAME : FLUIDS.MC_WATER, AMOUNT : 1000}, OUTPUT : TC_ITEM.GROUT, 	KEY : 'grout'},
		{INGREDIENTS : [{ item : DYES.YELLOW },		{ item : DYES.RED }										], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.ORANGE, 		KEY : 'orange/red_yellow'},
		{INGREDIENTS : [{ item : DYES.BLUE },		{ item : DYES.RED },	{ item : DYES.PINK }			], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.MAGENTA, 		KEY : 'magenta/blue_red_pink'},
		{INGREDIENTS : [{ item : DYES.PURPLE },		{ item : DYES.PINK }									], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.MAGENTA, 		KEY : 'magenta/purple_pink'},
		{INGREDIENTS : [{ item : DYES.WHITE },		{ item : DYES.BLUE }									], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.LIGHT_BLUE, 	KEY : 'light_blue/white_blue'},
		{INGREDIENTS : [{ item : DYES.WHITE },		{ item : DYES.GREEN }									], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.LIME, 		KEY : 'lime/white_green'},
		{INGREDIENTS : [{ item : DYES.WHITE },		{ item : DYES.RED }										], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.PINK, 		KEY : 'pink/white_red'},
		{INGREDIENTS : [{ item : DYES.WHITE },		{ item : DYES.BLACK }									], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.GRAY, 		KEY : 'gray/white_black'},
		{INGREDIENTS : [{ item : DYES.WHITE },		{ item : DYES.GRAY }									], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.LIGHT_GRAY, 	KEY : 'light_gray/white_gray'},
		{INGREDIENTS : [{ item : DYES.WHITE },		{ item : DYES.WHITE },	{ item : DYES.BLACK }			], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.LIGHT_GRAY, 	KEY : 'light_gray/white_white_black'},
		{INGREDIENTS : [{ item : DYES.GREEN },		{ item : DYES.BLUE }									], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.CYAN, 		KEY : 'cyan/green_blue'},
		{INGREDIENTS : [{ item : DYES.RED },		{ item : DYES.BLUE }									], FLUID : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, OUTPUT : DYES.PURPLE, 		KEY : 'purple/red_blue'}
	]
	recipes.forEach(recipe=>{
		event.custom({ 
			type: 'firmalife:mixing_bowl',
			ingredients: recipe.INGREDIENTS,
			fluid_ingredient: {
				ingredient: recipe.FLUID.NAME,
				amount: recipe.FLUID.AMOUNT
			},
			output_item: {
				item : recipe.OUTPUT
			}
		}).id(`firmalife:mixing_bowl/${recipe.KEY}`)
	})
})