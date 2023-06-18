onEvent('recipes', event => {
	const recipes=[
		{ITEM_BASE :{ NAME : ORES.PRECIOUS.CERTUS_QUARTZ, 	COUNT : 1 }, 	FLUID_BASE : {NAME: FLUIDS.MC_WATER,  AMOUNT: 250 }, ITEM_ADDITIONS : { NAME: MC_ITEM.REDSTONE,	COUNT : 8},	RESULTS: [ {item: CREATE_ITEMS.ROSE_QUARTZ}], 			KEY:'rose_quartz'},
		{ITEM_BASE :{ NAME : CREATE_ITEMS.ROSE_QUARTZ,		COUNT : 1 },	FLUID_BASE : {NAME: FLUIDS.MC_WATER,  AMOUNT: 10  }, ITEM_ADDITIONS : { NAME: `#${TAGS.SANDS}`,	COUNT : 4},	RESULTS: [ {item: CREATE_ITEMS.POLISHED_ROZE_QUARTZ}], 	KEY:'polished_rose_quartz'},
		
		{ITEM_BASE :{ NAME : DUSTS.PINE,		COUNT : 10}, FLUID_BASE : {NAME: FLUIDS.MC_WATER,  		AMOUNT: 1000}, RESULTS: [ {fluid: FLUIDS.OLEORESIN, 			amount: 1000}], KEY:'oleoresin'},
		{ITEM_BASE :{ NAME : MC_ITEM.REDSTONE, 	COUNT : 1 }, FLUID_BASE : {NAME: FLUIDS.VINEGAR,		AMOUNT: 500 }, RESULTS: [ {fluid: FLUIDS.REDSTONE_ACID, 		amount: 500 }], KEY:'redstone_acid'},
		{ITEM_BASE :{ NAME : DUSTS.COAL, 		COUNT : 1 }, FLUID_BASE : {NAME: FLUIDS.CREOSOTE,		AMOUNT: 100 }, RESULTS: [ {fluid: FLUIDS.LIQUID_COAL, 			amount: 100 }], KEY:'liquid_coal'},
		{ITEM_BASE :{ NAME : DUSTS.COAL, 		COUNT : 1 }, FLUID_BASE : {NAME: FLUIDS.BLAZING_BLOOD,	AMOUNT: 100 }, RESULTS: [ {fluid: FLUIDS.LIQUID_BLAZING_COAL, 	amount: 100 }], KEY:'liquid_blazing_coal'},
		{ITEM_BASE :{ NAME : DUSTS.COKE, 		COUNT : 1 }, FLUID_BASE : {NAME: FLUIDS.CREOSOTE,		AMOUNT: 100 }, RESULTS: [ {fluid: FLUIDS.LIQUID_COKE, 			amount: 100 }], KEY:'liquid_coke'},
		{ITEM_BASE :{ NAME : DUSTS.COKE, 		COUNT : 1 }, FLUID_BASE : {NAME: FLUIDS.BLAZING_BLOOD,	AMOUNT: 100 }, RESULTS: [ {fluid: FLUIDS.LIQUID_BLAZING_COKE, 	amount: 100 }], KEY:'liquid_blazing_coke'},
		
		{ITEM_BASE :{ NAME : `#${TAGS.TFC_FLOUR}`, 	COUNT : 1 }, FLUID_BASE : {NAME: FLUIDS.MC_WATER,	AMOUNT: 1000 }, RESULTS: [ {item: CREATE_ITEMS.DOUGH, count: 1		}], KEY:'dough'},
		
		{INGREDIENTS : [{ item : DYES.YELLOW },	{ item : DYES.RED }								], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item: DYES.ORANGE, 	count: 2 }], KEY : 'orange/red_yellow'},
		{INGREDIENTS : [{ item : DYES.BLUE },	{ item : DYES.RED },	{ item : DYES.PINK }	], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item:DYES.MAGENTA, 	count: 3 }], KEY : 'magenta/blue_red_pink'},
		{INGREDIENTS : [{ item : DYES.PURPLE },	{ item : DYES.PINK }							], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item: DYES.MAGENTA, 	count: 2 }], KEY : 'magenta/purple_pink'},
		{INGREDIENTS : [{ item : DYES.WHITE },	{ item : DYES.BLUE }							], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item:DYES.LIGHT_BLUE, 	count: 2 }], KEY : 'light_blue/white_blue'},
		{INGREDIENTS : [{ item : DYES.WHITE },	{ item : DYES.GREEN }							], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item:DYES.LIME, 		count: 2 }], KEY : 'lime/white_green'},
		{INGREDIENTS : [{ item : DYES.WHITE },	{ item : DYES.RED }								], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item:DYES.PINK, 		count: 2 }], KEY : 'pink/white_red'},
		{INGREDIENTS : [{ item : DYES.WHITE },	{ item : DYES.BLACK }							], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item:DYES.GRAY, 		count: 2 }], KEY : 'gray/white_black'},
		{INGREDIENTS : [{ item : DYES.WHITE },	{ item : DYES.GRAY }							], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item:DYES.LIGHT_GRAY, 	count: 2 }], KEY : 'light_gray/white_gray'},
		{INGREDIENTS : [{ item : DYES.WHITE },	{ item : DYES.WHITE },	{ item : DYES.BLACK }	], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item:DYES.LIGHT_GRAY, 	count: 3 }], KEY : 'light_gray/white_white_black'},
		{INGREDIENTS : [{ item : DYES.GREEN },	{ item : DYES.BLUE }							], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item:DYES.CYAN, 		count: 2 }], KEY : 'cyan/green_blue'},
		{INGREDIENTS : [{ item : DYES.RED },	{ item : DYES.BLUE }							], FLUID_BASE : {NAME : FLUIDS.SPRING, 	AMOUNT : 100 }, RESULTS : [{ item:DYES.PURPLE, 		count: 2 }], KEY : 'purple/red_blue'},
		
		{ITEM_BASE :{ NAME : FLUXS.FLUX, 		COUNT : 1 }, FLUID_BASE : {NAME: FLUIDS.MC_WATER,		AMOUNT: 500 }, RESULTS: [ {fluid: FLUIDS.LIMEWATER, 			amount: 500 }], KEY:'limewater'},
		
		
	]
	event.remove({output : CREATE_ITEMS.ROSE_QUARTZ})
	event.remove({output : CREATE_ITEMS.POLISHED_ROZE_QUARTZ})
	event.remove({output : CREATE_ITEMS.DOUGH})
	recipes.forEach(recipe=>{
		let INGREDIENTS=null
		if(recipe.INGREDIENTS){
			INGREDIENTS=recipe.INGREDIENTS;
			INGREDIENTS.push({ fluid: recipe.FLUID_BASE.NAME, nbt:{}, amount: recipe.FLUID_BASE.AMOUNT});
		}else{
			INGREDIENTS=Array(recipe.ITEM_BASE.COUNT).fill(Id_or_tag_to_item(recipe.ITEM_BASE.NAME));
			INGREDIENTS.push({ fluid: recipe.FLUID_BASE.NAME, nbt:{}, amount: recipe.FLUID_BASE.AMOUNT});
			if (recipe.ITEM_ADDITIONS){
				const INGREDIENTS_ADDITION=Id_or_tag_to_item(recipe.ITEM_ADDITIONS.NAME);
				for (let i = 0; i < recipe.ITEM_ADDITIONS.COUNT; i++) {
					INGREDIENTS.push(INGREDIENTS_ADDITION);
				}
			}
		}
		event.custom({
			type: RECIPE_TYPE.C_MIXING,
			ingredients: INGREDIENTS,
			results: recipe.RESULTS 
		}).id(`create:mixing/${recipe.KEY}`)
	})
})