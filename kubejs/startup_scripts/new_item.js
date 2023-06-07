console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('kubejs:andesite_dust').texture('tfc:item/powder/flux');
	event.create('kubejs:kelp_string').texture('firmalife:item/pineapple_yarn');
	event.create('kubejs:incomplete_mechanical_crafter').texture('create:block/crafter_topunderside');
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
	event.create('kubejs:crushed_wrought_iron_ore').texture('create:item/crushed_iron_ore');
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
	event.create('kubejs:wrought_iron_nugget').texture('immersiveengineering:item/metal_nugget_iron');
	event.create('kubejs:small_plate_cast').texture('kubejs:item//cast/small_plate');
	event.create('kubejs:small_gear_cast').texture('kubejs:item/cast/small_gear');
	event.create('kubejs:small_rod_cast').texture('kubejs:item/cast/small_rod');
	event.create('kubejs:small_plate_red_sand_cast').texture('kubejs:item/red_sand_cast/small_plate');
	event.create('kubejs:small_gear_red_sand_cast').texture('kubejs:item/red_sand_cast/small_gear');
	event.create('kubejs:small_rod_red_sand_cast').texture('kubejs:item/red_sand_cast/small_rod');
	event.create('kubejs:small_plate_sand_cast').texture('kubejs:item/sand_cast/small_plate');
	event.create('kubejs:small_gear_sand_cast').texture('kubejs:item/sand_cast/small_gear');
	event.create('kubejs:small_rod_sand_cast').texture('kubejs:item/sand_cast/small_rod');
})

onEvent('block.registry', event => {
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
})
