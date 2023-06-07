onEvent('recipes', event => {
	const recipes=[
		{ITEM_BASE :{ NAME : ORES.PRECIOUS.CERTUS_QUARTZ, 	COUNT : 1 }, 	FLUID_BASE : {NAME: FLUIDS.MC_WATER,  AMOUNT: 250 }, ITEM_ADDITIONS : { NAME: MC_ITEM.REDSTONE, 	COUNT : 8} , RESULTS: [ {item: CREATE_ITEMS.ROSE_QUARTZ}], 			KEY:'rose_quartz'},
		{ITEM_BASE :{ NAME : CREATE_ITEMS.ROSE_QUARTZ,		COUNT : 1 },	FLUID_BASE : {NAME: FLUIDS.MC_WATER,  AMOUNT: 10  }, ITEM_ADDITIONS : { NAME: `#${TAGS.SANDS}`, 	COUNT : 4} , RESULTS: [ {item: CREATE_ITEMS.POLISHED_ROZE_QUARTZ}], KEY:'polished_rose_quartz'},
		{ITEM_BASE :{ NAME : MC_ITEM.CLAY,					COUNT : 4 },	FLUID_BASE : {NAME: FLUIDS.MC_WATER,  AMOUNT: 500 }, ITEM_ADDITIONS : { NAME: `#${TAGS.SANDS}`, 	COUNT : 4} , RESULTS: [ {item: ED_ITEMS.CERAMICWET}],				KEY:'ceramicwet'}
	]
	event.remove({output : CREATE_ITEMS.ROSE_QUARTZ})
	event.remove({output : CREATE_ITEMS.POLISHED_ROZE_QUARTZ})
	recipes.forEach(recipe=>{
		
		const INGREDIENTS=Array(recipe.ITEM_BASE.COUNT).fill(Id_or_tag_to_item(recipe.ITEM_BASE.NAME));
		const INGREDIENTS_ADDITION=Id_or_tag_to_item(recipe.ITEM_ADDITIONS.NAME);
		INGREDIENTS.push({ fluid: recipe.FLUID_BASE.NAME, nbt:{}, amount: recipe.FLUID_BASE.AMOUNT});
		for (let i = 0; i < recipe.ITEM_ADDITIONS.COUNT; i++) {
			INGREDIENTS.push(INGREDIENTS_ADDITION);
		}
		event.custom({
			type: RECIPE_TYPE.C_MIXING,
			ingredients: INGREDIENTS,
			results: recipe.RESULTS 
		}).id(`create:mixing/${recipe.KEY}`)
	})
})