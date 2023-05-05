onEvent('recipes', event => {
	const BLANK={
		RED: 'tconstruct:blank_red_sand_cast',
		WHITE:'tconstruct:blank_sand_cast'
	}
	const recipes=[
		{ MATERIAL : BLANK.RED, 	PATTERN : 'forge:gears', OUTPUT : 'kubejs:small_gear_red_sand_cast', 	KEY : 'red_sand_casts/small_gear'},
		{ MATERIAL : BLANK.WHITE,	PATTERN : 'forge:gears', OUTPUT : 'kubejs:small_gear_sand_cast', 		KEY : 'sand_casts/small_gear'},
		
		{ MATERIAL : BLANK.RED, 	PATTERN : 'forge:rods', OUTPUT : 'kubejs:small_rod_red_sand_cast', 		KEY : 'red_sand_casts/small_rod'},
		{ MATERIAL : BLANK.WHITE,	PATTERN : 'forge:rods', OUTPUT : 'kubejs:small_rod_sand_cast', 			KEY : 'sand_casts/small_rod'},
		
		{ MATERIAL : BLANK.RED, 	PATTERN : 'forge:plates', OUTPUT : 'kubejs:small_plate_red_sand_cast', 		KEY : 'red_sand_casts/small_plate'},
		{ MATERIAL : BLANK.WHITE,	PATTERN : 'forge:plates', OUTPUT : 'kubejs:small_plate_sand_cast', 			KEY : 'sand_casts/small_plate'}
	]
	recipes.forEach(recipe=>{
		event.custom({
			type: 'tconstruct:molding_table',
			material: {
				item: recipe.MATERIAL
			},
			pattern: {
				tag: recipe.PATTERN
			},
			result: {
				item: recipe.OUTPUT
			}
		}).id(`tconstruct:smeltery/casts/`${recipe.KEY}`)
	})
})
onEvent('item.tags', event => {
	event.add('tconstruct:casts/single_use/small_plate',	'kubejs:small_plate_red_sand_cast').add('kubejs:small_plate_sand_cast')
	event.add('tconstruct:casts/single_use/small_gear',		'kubejs:small_gear_red_sand_cast').add('kubejs:small_gear_sand_cast')
	event.add('tconstruct:casts/single_use/small_rod',		'kubejs:small_rod_red_sand_cast').add('kubejs:small_rod_sand_cast')
})
