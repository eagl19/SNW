onEvent('recipes', event => {
	const recipes = [
		{BEE: BEES.CUPID, RESULT:[{ITEM:PB_ITEM.HONEYCOMB.MILKY,CHANCE:100}],POLLEN_CHANCE: 5, KEY:'honeycomb_milky/cupid_bee'}
	]
	recipes.forEach(recipe=>{
		let RESULTS=[]
		recipe.RESULT.forEach(res=>{
			if (res.ITEM){
				RESULTS.push({item:{item: res.ITEM },chance: res.CHANCE })
			} else {
				RESULTS.push({item:{type:'forge:nbt', item: 'productivebees:configurable_honeycomb', nbt: { EntityTag:{ type: recipe.BEE }}},chance: res.CHANCE})
			}
		})
		if (recipe.POLLEN_CHANCE>0){
			RESULTS.push({item: {tag: 'forge:pollen'}, chance: recipe.POLLEN_CHANCE})
		}
		event.custom({ 
			type: RECIPE_TYPE.PB_ADVANCED_BEEHIVE,
			ingredient: recipe.BEE,
			results: RESULTS
		}).id(`productivebees:advanced_beehive/${recipe.KEY}`)
	})
})