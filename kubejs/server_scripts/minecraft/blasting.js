onEvent('recipes', event => {
	const recipes=[
		{INPUT : CRUSHED_ORES.ALUMINUM, 	OUTPUT : {item : NUGGETS.ALUMINUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/aluminum_ore'},
		{INPUT : CRUSHED_ORES.COPPER, 		OUTPUT : {item : NUGGETS.COPPER, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/copper_ore'},
		{INPUT : CRUSHED_ORES.GOLD, 		OUTPUT : {item : NUGGETS.GOLD, 			count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/gold_ore'},
		{INPUT : CRUSHED_ORES.WROUGHT_IRON, OUTPUT : {item : NUGGETS.WROUGHT_IRON, 	count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/wrought_iron_ore'},
		{INPUT : CRUSHED_ORES.LEAD, 		OUTPUT : {item : NUGGETS.LEAD, 			count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/lead_ore'},
		{INPUT : CRUSHED_ORES.NICKEL, 		OUTPUT : {item : NUGGETS.NICKEL, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/nickel_ore'},
		{INPUT : CRUSHED_ORES.SILVER, 		OUTPUT : {item : NUGGETS.SILVER, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/silver_ore'},
		{INPUT : CRUSHED_ORES.TIN, 			OUTPUT : {item : NUGGETS.TIN, 			count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/tin_ore'},
		{INPUT : CRUSHED_ORES.ZINC, 		OUTPUT : {item : NUGGETS.ZINC, 			count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/zinc_ore'},
		{INPUT : CRUSHED_ORES.BISMUTHINITE, OUTPUT : {item : NUGGETS.BISMUTH, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/bismuthinite_ore'},
		{INPUT : CRUSHED_ORES.BERTRANDITE, 	OUTPUT : {item : NUGGETS.BERYLLIUM, 	count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/bertrandite_ore'},
		{INPUT : CRUSHED_ORES.COBALTITE, 	OUTPUT : {item : NUGGETS.COBALT, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/cobaltite_ore'},
		{INPUT : CRUSHED_ORES.KERNITE, 		OUTPUT : {item : NUGGETS.BORON, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/kernite_ore'},
		{INPUT : CRUSHED_ORES.MONAZITE, 	OUTPUT : {item : NUGGETS.THORIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/monazite_ore'},
		{INPUT : CRUSHED_ORES.IRIDIUM, 		OUTPUT : {item : NUGGETS.IRIDIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/iridium_ore'},
		{INPUT : CRUSHED_ORES.RUTILE, 		OUTPUT : {item : NUGGETS.TITANIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/rutile_ore'},
		{INPUT : CRUSHED_ORES.STIBNITE, 	OUTPUT : {item : NUGGETS.ANTIMONY, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/stibnite_ore'},
		{INPUT : CRUSHED_ORES.WOLFRAMITE, 	OUTPUT : {item : NUGGETS.TUNGSTEN, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/wolframite_ore'},
		{INPUT : CRUSHED_ORES.CHROMITE, 	OUTPUT : {item : NUGGETS.CHROMIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/chromite_ore'},
		{INPUT : CRUSHED_ORES.URANIUM, 		OUTPUT : {item : NUGGETS.URANIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/uranium_ore'},
		{INPUT : CRUSHED_ORES.PLATINUM, 	OUTPUT : {item : NUGGETS.PLATINUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/platinum_ore'},
		{INPUT : CRUSHED_ORES.OSMIUM, 		OUTPUT : {item : NUGGETS.OSMIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'crushed/osmium_ore'},
		
		{INPUT : DUSTS.ALUMINUM, 		OUTPUT : {item : NUGGETS.ALUMINUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/aluminum'},
		{INPUT : DUSTS.COPPER, 			OUTPUT : {item : NUGGETS.COPPER, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/copper'},
		{INPUT : DUSTS.GOLD, 			OUTPUT : {item : NUGGETS.GOLD, 			count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/gold'},
		{INPUT : DUSTS.WROUGHT_IRON, 	OUTPUT : {item : NUGGETS.WROUGHT_IRON, 	count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/wrought_iron'},
		{INPUT : DUSTS.LEAD, 			OUTPUT : {item : NUGGETS.LEAD, 			count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/lead'},
		{INPUT : DUSTS.NICKEL, 			OUTPUT : {item : NUGGETS.NICKEL, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/nickel'},
		{INPUT : DUSTS.SILVER, 			OUTPUT : {item : NUGGETS.SILVER, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/silver'},
		{INPUT : DUSTS.TIN, 			OUTPUT : {item : NUGGETS.TIN, 			count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/tin'},
		{INPUT : DUSTS.ZINC, 			OUTPUT : {item : NUGGETS.ZINC, 			count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/zinc'},
		{INPUT : DUSTS.BISMUTH, 		OUTPUT : {item : NUGGETS.BISMUTH, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/bismuth'},
		{INPUT : DUSTS.BERYLLIUM, 		OUTPUT : {item : NUGGETS.BERYLLIUM, 	count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/beryllium'},
		{INPUT : DUSTS.COBALT, 			OUTPUT : {item : NUGGETS.COBALT, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/cobalt'},
		{INPUT : DUSTS.BORON, 			OUTPUT : {item : NUGGETS.BORON, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/boron'},
		{INPUT : DUSTS.THORIUM, 		OUTPUT : {item : NUGGETS.THORIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/thorium'},
		{INPUT : DUSTS.IRIDIUM, 		OUTPUT : {item : NUGGETS.IRIDIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/iridium'},
		{INPUT : DUSTS.TITANIUM, 		OUTPUT : {item : NUGGETS.TITANIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/titanium'},
		{INPUT : DUSTS.ANTIMONY, 		OUTPUT : {item : NUGGETS.ANTIMONY, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/antimony'},
		{INPUT : DUSTS.TUNGSTEN, 		OUTPUT : {item : NUGGETS.TUNGSTEN, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/tungsten'},
		{INPUT : DUSTS.CHROMIUM, 		OUTPUT : {item : NUGGETS.CHROMIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/chromium'},
		{INPUT : DUSTS.URANIUM, 		OUTPUT : {item : NUGGETS.URANIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/uranium'},
		{INPUT : DUSTS.PLATINUM, 		OUTPUT : {item : NUGGETS.PLATINUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/platinum'},
		{INPUT : DUSTS.OSMIUM, 			OUTPUT : {item : NUGGETS.OSMIUM, 		count: 1 }, TIME : 100, EXP: 0.75, KEY: 'dust/osmium'}
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: 'minecraft:blasting',
			ingredient: { 
				item: recipe.INPUT 
			},
			result: recipe.OUTPUT,
			cookingtime: recipe.TIME,
			experience: recipe.EXP
		}).id(`minecraft:blasting/${recipe.KEY}`)
	})
})