onEvent('recipes', event => {
	const recipes = [
		{INPUT: NUGGETS.ALUMINUM, 		OUTPUT: INGOTS.ALUMINUM, 		KEY:'aluminum/nugget'},
		{INPUT: NUGGETS.COPPER, 		OUTPUT: INGOTS.COPPER, 			KEY:'copper/nugget'},
		{INPUT: NUGGETS.GOLD, 			OUTPUT: INGOTS.GOLD, 			KEY:'gold/nugget'},
		{INPUT: NUGGETS.WROUGHT_IRON, 	OUTPUT: INGOTS.WROUGHT_IRON, 	KEY:'wrought_iron/nugget'},
		{INPUT: NUGGETS.LEAD, 			OUTPUT: INGOTS.LEAD, 			KEY:'lead/nugget'},
		{INPUT: NUGGETS.NICKEL, 		OUTPUT: INGOTS.NICKEL,			KEY:'nickel/nugget'},
		{INPUT: NUGGETS.SILVER, 		OUTPUT: INGOTS.SILVER, 			KEY:'silver/nugget'},
		{INPUT: NUGGETS.TIN, 			OUTPUT: INGOTS.TIN, 			KEY:'tin/nugget'},
		{INPUT: NUGGETS.ZINC, 			OUTPUT: INGOTS.ZINC,			KEY:'zinc/nugget'},
		{INPUT: NUGGETS.BISMUTH, 		OUTPUT: INGOTS.BISMUTH, 		KEY:'bismuth/nugget'},
		{INPUT: NUGGETS.BERYLLIUM, 		OUTPUT: INGOTS.BERYLLIUM, 		KEY:'beryllium/nugget'},
		{INPUT: NUGGETS.COBALT, 		OUTPUT: INGOTS.COBALT, 			KEY:'cobalt/nugget'},
		{INPUT: NUGGETS.BORON, 			OUTPUT: INGOTS.BORON, 			KEY:'boron/nugget'},
		{INPUT: NUGGETS.THORIUM, 		OUTPUT: INGOTS.THORIUM, 		KEY:'thorium/nugget'},
		{INPUT: NUGGETS.IRIDIUM, 		OUTPUT: INGOTS.IRIDIUM, 		KEY:'iridium/nugget'},
		{INPUT: NUGGETS.TITANIUM, 		OUTPUT: INGOTS.TITANIUM, 		KEY:'titanium/nugget'},
		{INPUT: NUGGETS.ANTIMONY, 		OUTPUT: INGOTS.ANTIMONY, 		KEY:'antimony/nugget'},
		{INPUT: NUGGETS.TUNGSTEN, 		OUTPUT: INGOTS.TUNGSTEN, 		KEY:'tungsten/nugget'},
		{INPUT: NUGGETS.CHROMIUM, 		OUTPUT: INGOTS.CHROMIUM, 		KEY:'chromium/nugget'},
		{INPUT: NUGGETS.URANIUM, 		OUTPUT: INGOTS.URANIUM, 		KEY:'uranium/nugget'},
		{INPUT: NUGGETS.PLATINUM, 		OUTPUT: INGOTS.PLATINUM, 		KEY:'platinum/nugget'},
		{INPUT: NUGGETS.OSMIUM, 		OUTPUT: INGOTS.OSMIUM,		 	KEY:'osmium/nugget'},
		
		{INPUT: INGOTS.ALUMINUM, 		OUTPUT: BLOCKS.ALUMINUM, 		KEY:'aluminum/ingot'},
		{INPUT: INGOTS.COPPER, 			OUTPUT: BLOCKS.COPPER, 			KEY:'copper/ingot'},
		{INPUT: INGOTS.GOLD, 			OUTPUT: BLOCKS.GOLD, 			KEY:'gold/ingot'},
		{INPUT: INGOTS.WROUGHT_IRON, 	OUTPUT: BLOCKS.WROUGHT_IRON, 	KEY:'wrought_iron/ingot'},
		{INPUT: INGOTS.LEAD, 			OUTPUT: BLOCKS.LEAD, 			KEY:'lead/ingot'},
		{INPUT: INGOTS.NICKEL, 			OUTPUT: BLOCKS.NICKEL,			KEY:'nickel/ingot'},
		{INPUT: INGOTS.SILVER, 			OUTPUT: BLOCKS.SILVER, 			KEY:'silver/ingot'},
		{INPUT: INGOTS.TIN, 			OUTPUT: BLOCKS.TIN, 			KEY:'tin/ingot'},
		{INPUT: INGOTS.ZINC, 			OUTPUT: BLOCKS.ZINC,			KEY:'zinc/ingot'},
		{INPUT: INGOTS.BISMUTH, 		OUTPUT: BLOCKS.BISMUTH, 		KEY:'bismuth/ingot'},
		{INPUT: INGOTS.BERYLLIUM, 		OUTPUT: BLOCKS.BERYLLIUM, 		KEY:'beryllium/ingot'},
		{INPUT: INGOTS.COBALT, 			OUTPUT: BLOCKS.COBALT, 			KEY:'cobalt/ingot'},
		{INPUT: INGOTS.BORON, 			OUTPUT: BLOCKS.BORON, 			KEY:'boron/ingot'},
		{INPUT: INGOTS.THORIUM, 		OUTPUT: BLOCKS.THORIUM, 		KEY:'thorium/ingot'},
		{INPUT: INGOTS.IRIDIUM, 		OUTPUT: BLOCKS.IRIDIUM, 		KEY:'iridium/ingot'},
		{INPUT: INGOTS.TITANIUM, 		OUTPUT: BLOCKS.TITANIUM, 		KEY:'titanium/ingot'},
		{INPUT: INGOTS.ANTIMONY, 		OUTPUT: BLOCKS.ANTIMONY, 		KEY:'antimony/ingot'},
		{INPUT: INGOTS.TUNGSTEN, 		OUTPUT: BLOCKS.TUNGSTEN, 		KEY:'tungsten/ingot'},
		{INPUT: INGOTS.CHROMIUM, 		OUTPUT: BLOCKS.CHROMIUM, 		KEY:'chromium/ingot'},
		{INPUT: INGOTS.URANIUM, 		OUTPUT: BLOCKS.URANIUM, 		KEY:'uranium/ingot'},
		{INPUT: INGOTS.PLATINUM, 		OUTPUT: BLOCKS.PLATINUM, 		KEY:'platinum/ingot'},
		{INPUT: INGOTS.OSMIUM, 			OUTPUT: BLOCKS.OSMIUM,		 	KEY:'osmium/ingot'}
		
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: 'create:compacting',
			ingredients:[
				{item: recipe.INPUT},
				{item: recipe.INPUT},
				{item: recipe.INPUT},
				{item: recipe.INPUT},
				{item: recipe.INPUT},
				{item: recipe.INPUT},
				{item: recipe.INPUT},
				{item: recipe.INPUT},
				{item: recipe.INPUT},
				{item: recipe.INPUT},
				{
					fluid: 'minecraft:lava',
					nbt:{},
					amount: 1
				}
			],
			results:[
				{ item: recipe.OUTPUT }
			],
		}).id(`create:compacting/${recipe.KEY}`)
	})
})