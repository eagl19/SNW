console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	event.create('andesite_dust').texture('tfc:item/powder/flux')
	event.create('kelp_string').texture('firmalife:item/pineapple_yarn')
	event.create('incomplete_mechanical_crafter').texture('create:block/crafter_topunderside')
	event.create('crushed_bismuthinite_ore').texture('kubejs:item/crushed/bismuthinite_ore')
	event.create('crushed_bertrandite_ore').texture('kubejs:item/crushed/bertrandite_ore')
	event.create('crushed_cobaltite_ore').texture('kubejs:item/crushed/cobaltite_ore')
	event.create('crushed_kernite_ore').texture('kubejs:item/crushed/kernite_ore')
	event.create('crushed_monazite_ore').texture('kubejs:item/crushed/monazite_ore')
	event.create('crushed_native_iridium_ore').texture('kubejs:item/crushed/native_iridium_ore')
	event.create('crushed_rutile_ore').texture('kubejs:item/crushed/rutile_ore')
	event.create('crushed_stibnite_ore').texture('kubejs:item/crushed/stibnite_ore')
	event.create('crushed_wolframite_ore').texture('kubejs:item/crushed/wolframite_ore')
	event.create('crushed_chromite_ore').texture('kubejs:item/crushed/chromite_ore')
	event.create('crushed_wrought_iron_ore').texture('create:item/crushed_iron_ore')
	event.create('bismuth_nugget').texture('kubejs:item/nugget/bismuth')
	event.create('beryllium_nugget').texture('kubejs:item/nugget/beryllium')
	event.create('boron_nugget').texture('kubejs:item/nugget/boron')
	event.create('thorium_nugget').texture('kubejs:item/nugget/thorium')
	event.create('iridium_nugget').texture('kubejs:item/nugget/iridium')
	event.create('titanium_nugget').texture('kubejs:item/nugget/titanium')
	event.create('antimony_nugget').texture('kubejs:item/nugget/antimony')
	event.create('tungsten_nugget').texture('kubejs:item/nugget/tungsten')
	event.create('platinum_nugget').texture('kubejs:item/nugget/platinum')
	event.create('chromium_nugget').texture('kubejs:item/nugget/chromium')
	event.create('wrought_iron_nugget').texture('immersiveengineering:item/metal_nugget_iron')
	event.create('small_plate_cast').texture('kubejs:item//cast/small_plate')
	event.create('small_gear_cast').texture('kubejs:item/cast/small_gear')
	event.create('small_rod_cast').texture('kubejs:item/cast/small_rod')
	event.create('greate_plate_red_sand_cast').texture('kubejs:item/red_sand_cast/small_plate')
	event.create('greate_gear_red_sand_cast').texture('kubejs:item/red_sand_cast/small_gear')
	event.create('greate_rod_red_sand_cast').texture('kubejs:item/red_sand_cast/small_rod')
	event.create('greate_plate_sand_cast').texture('kubejs:item/sand_cast/small_plate')
	event.create('greate_gear_sand_cast').texture('kubejs:item/sand_cast/small_gear')
	event.create('greate_rod_sand_cast').texture('kubejs:item/sand_cast/small_rod')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})