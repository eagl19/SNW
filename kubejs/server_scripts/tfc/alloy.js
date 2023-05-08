onEvent('recipes', event => {
	const recipes=[
		{CONTENTS : [{metal : 'tfc:black_steel', min : 0.5, max: 0.55},{metal : 'tfc:steel', min : 0.2, max: 0.25},{metal : 'tfc_metallum:solder', min : 0.1, max: 0.15},{metal : 'tfc_metallum:tungsten', min : 0.1, max: 0.15}], KEY : 'tfc_metallum:tungsten_steel'}
	]
	recipes.forEach(recipe=>{
		event.custom({
			type:'tfc:alloy',
			result: recipe.KEY,
			contents: recipe.CONTENTS
		}).id(`${recipe.KEY.slice(recipe.KEY.indexOf(':'))}:alloy/${recipe.KEY.slice(recipe.KEY.lastIndexOf(':')+1)}`)
	})
})