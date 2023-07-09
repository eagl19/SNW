onEvent('recipes', event => {
	const recipes=[
		{INPUT: ORES.PRECIOUS.DIAMOND, 	OUTPUT: TFC_ITEM.GEMS.DIAMOND, 		KEY:'diamond'},
		{INPUT: ORES.PRECIOUS.EMERALD, 	OUTPUT: TFC_ITEM.GEMS.EMERALD, 		KEY:'emerald'},
		{INPUT: ORES.PRECIOUS.LAPIS, 	OUTPUT: TFC_ITEM.GEMS.LAPIS,		KEY:'lapis_lazuli'},
		{INPUT: ORES.PRECIOUS.AMETHYST,	OUTPUT: TFC_ITEM.GEMS.AMETHYST, 	KEY:'amethyst'},
		{INPUT: ORES.PRECIOUS.OPAL, 	OUTPUT: TFC_ITEM.GEMS.OPAL, 		KEY:'opal'},
		{INPUT: ORES.PRECIOUS.PYRITE, 	OUTPUT: TFC_ITEM.GEMS.PYRITE, 		KEY:'pyrite'},
		{INPUT: ORES.PRECIOUS.RUBY, 	OUTPUT: TFC_ITEM.GEMS.RUBY, 		KEY:'ruby'},
		{INPUT: ORES.PRECIOUS.SAPPHIRE, OUTPUT: TFC_ITEM.GEMS.SAPPHIRE, 	KEY:'sapphire'},
		{INPUT: ORES.PRECIOUS.TOPAZ, 	OUTPUT: TFC_ITEM.GEMS.TOPAZ, 		KEY:'topaz'}
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: RECIPE_TYPE.C_SANDPAPER_POLISHING,
			ingredients: [{ 
				item: recipe.INPUT 
			}],
			results:[ { 
				item: recipe.OUTPUT
			}],
		}).id(`create:sandpaper_polishing/${recipe.KEY}`)
	})
})