
onEvent('item.registry', event => {
	event.create('kubejs:andesite_dust').texture('kubejs:item/andesite_dust');
	event.create('kubejs:lime').texture('kubejs:item/lime');
	event.create('kubejs:chalk').texture('kubejs:item/chalk');
	event.create('kubejs:glass_powder').texture('kubejs:item/glass_powder');
	event.create('kubejs:raw_glass_powder').texture('kubejs:item/glass_powder');
	event.create('kubejs:kelp_string').texture('kubejs:item/kelp_string');
	event.create('kubejs:crushed_bismuthinite_ore').texture('kubejs:item/crushed/bismuthinite_ore');
	event.create('kubejs:crushed_bertrandite_ore').texture('kubejs:item/crushed/bertrandite_ore');
	event.create('kubejs:crushed_cobaltite_ore').texture('kubejs:item/crushed/cobaltite_ore');
	event.create('kubejs:crushed_kernite_ore').texture('kubejs:item/crushed/kernite_ore');
	event.create('kubejs:crushed_monazite_ore').texture('kubejs:item/crushed/monazite_ore');
	event.create('kubejs:crushed_native_iridium_ore').texture('kubejs:item/crushed/native_iridium_ore');
	event.create('kubejs:crushed_rutile_ore').texture('kubejs:item/crushed/rutile_ore');
	event.create('kubejs:crushed_stibnite_ore').texture('kubejs:item/crushed/stibnite_ore');
	event.create('kubejs:crushed_wolframite_ore').texture('kubejs:item/crushed/wolframite_ore');
	event.create('kubejs:crushed_chromite_ore').texture('kubejs:item/crushed/chromite_ore');
	event.create('kubejs:crushed_wrought_iron_ore').texture('kubejs:item/crushed_wrought_iron_ore');
	event.create('kubejs:bismuth_nugget').texture('kubejs:item/nugget/bismuth');
	event.create('kubejs:beryllium_nugget').texture('kubejs:item/nugget/beryllium');
	event.create('kubejs:boron_nugget').texture('kubejs:item/nugget/boron');
	event.create('kubejs:thorium_nugget').texture('kubejs:item/nugget/thorium');
	event.create('kubejs:iridium_nugget').texture('kubejs:item/nugget/iridium');
	event.create('kubejs:titanium_nugget').texture('kubejs:item/nugget/titanium');
	event.create('kubejs:antimony_nugget').texture('kubejs:item/nugget/antimony');
	event.create('kubejs:tungsten_nugget').texture('kubejs:item/nugget/tungsten');
	event.create('kubejs:platinum_nugget').texture('kubejs:item/nugget/platinum');
	event.create('kubejs:chromium_nugget').texture('kubejs:item/nugget/chromium');
	event.create('kubejs:wrought_iron_nugget').texture('kubejs:item/wrought_iron_nugget');
	event.create('kubejs:small_plate_cast').texture('kubejs:item//cast/small_plate');
	event.create('kubejs:small_gear_cast').texture('kubejs:item/cast/small_gear');
	event.create('kubejs:small_rod_cast').texture('kubejs:item/cast/small_rod');
	event.create('kubejs:small_plate_red_sand_cast').texture('kubejs:item/red_sand_cast/small_plate');
	event.create('kubejs:small_gear_red_sand_cast').texture('kubejs:item/red_sand_cast/small_gear');
	event.create('kubejs:small_rod_red_sand_cast').texture('kubejs:item/red_sand_cast/small_rod');
	event.create('kubejs:small_plate_sand_cast').texture('kubejs:item/sand_cast/small_plate');
	event.create('kubejs:small_gear_sand_cast').texture('kubejs:item/sand_cast/small_gear');
	event.create('kubejs:small_rod_sand_cast').texture('kubejs:item/sand_cast/small_rod');
	event.create('kubejs:textolite').texture('kubejs:item/textolite');
	event.create('kubejs:kelp_cloth').texture('kubejs:item/kelp_cloth');
	event.create('kubejs:pine_dust').texture('kubejs:item/pine_dust');
	event.create('kubejs:creosote_cloth').texture('kubejs:item/creosote_cloth');
	event.create('kubejs:incomplete_medium_filling_tank').texture('kubejs:item/incomplete_medium_filling_tank');
	event.create('kubejs:incomplete_large_filling_tank').texture('kubejs:item/incomplete_large_filling_tank');
	event.create('kubejs:incomplete_small_fueling_tank').texture('kubejs:item/incomplete_small_fueling_tank');
	event.create('kubejs:incomplete_medium_fueling_tank').texture('kubejs:item/incomplete_medium_fueling_tank');
	event.create('kubejs:incomplete_large_fueling_tank').texture('kubejs:item/incomplete_large_fueling_tank');
	event.create('kubejs:coalcoke').texture('kubejs:item/ed/coalcoke');
	event.create('kubejs:ceramicwet').texture('kubejs:item/ed/ceramicwet');
	event.create('kubejs:ceramicplate').texture('kubejs:item/ed/ceramicplate');
})

onEvent('block.registry', event => {
	event.create('kubejs:incomplete_mechanical_crafter')
		.material('metal')
		.hardness(5.0)
		.tagBlock('minecraft:needs_iron_tool')
		.lightLevel(0);
	event.create('kubejs:andesite_machine')
		.material('metal')
		.hardness(5.0)
		.tagBlock('minecraft:needs_iron_tool')
		.lightLevel(0);
	event.create('kubejs:brass_machine')
		.material('metal')
		.hardness(5.0)
		.tagBlock('minecraft:needs_iron_tool')
		.lightLevel(0);
	event.create('kubejs:copper_machine')
		.material('metal')
		.hardness(5.0)
		.tagBlock('minecraft:needs_iron_tool')
		.lightLevel(0);
})

onEvent('fluid.registry', event => {
	event.create('kubejs:oleoresin')
		.thinTexture(0xB38935)
		.bucketColor(0xFFD278)
		.luminosity(8)
		.noBlock();
	event.create('kubejs:liquid_coal')
		.stillTexture('kubejs:fluid/liquid_coal')
		.bucketColor(0x9F0000)
		.luminosity(8)
		.noBlock();
	event.create('kubejs:liquid_coke')
		.stillTexture('kubejs:fluid/liquid_coke')
		.bucketColor(0xF71C1C)
		.luminosity(8)
		.noBlock();
	event.create('kubejs:liquid_blazing_coal')
		.stillTexture('kubejs:fluid/liquid_blazing_coal')
		.bucketColor(0xFE0040)
		.luminosity(8)
		.noBlock();
	event.create('kubejs:liquid_blazing_coke')
		.stillTexture('kubejs:fluid/liquid_blazing_coke')
		.bucketColor(0xFA0000)
		.luminosity(8)
		.noBlock();
})