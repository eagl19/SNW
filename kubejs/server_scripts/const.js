
const CRUSHED_ORES={
	ALUMINUM: 		'create:crushed_aluminum_ore',
	COPPER:			'create:crushed_copper_ore',
	GOLD:			'create:crushed_gold_ore',
	WROUGHT_IRON:	'kubejs:crushed_wrought_iron_ore',
	LEAD:			'create:crushed_lead_ore',
	NICKEL:			'create:crushed_nickel_ore',
	SILVER:			'create:crushed_silver_ore',
	TIN:			'create:crushed_tin_ore',
	ZINC:			'create:crushed_zinc_ore',
	BISMUTHINITE:	'kubejs:crushed_bismuthinite_ore',
	BERTRANDITE:	'kubejs:crushed_bertrandite_ore',
	COBALTITE:		'kubejs:crushed_cobaltite_ore',
	KERNITE:		'kubejs:crushed_kernite_ore',
	MONAZITE:		'kubejs:crushed_monazite_ore',
	IRIDIUM:		'kubejs:crushed_native_iridium_ore',
	RUTILE:			'kubejs:crushed_rutile_ore',
	STIBNITE:		'kubejs:crushed_stibnite_ore',
	WOLFRAMITE:		'kubejs:crushed_wolframite_ore',
	CHROMITE:		'kubejs:crushed_chromite_ore',
	URANIUM:		'create:crushed_uranium_ore',
	PLATINUM:		'create:crushed_platinum_ore',
	OSMIUM:			'create:crushed_osmium_ore'
}
const ORES={
	NORMAL:{
		ALUMINUM: 		'tfc_ie_addon:ore/normal_aluminum',
		LEAD:			'tfc_ie_addon:ore/normal_lead',
		URANIUM:		'tfc_ie_addon:ore/normal_uranium',
		BAUXITE: 		'tfc_metallum:ore/normal_bauxite',
		COPPER:			'tfc:ore/normal_native_copper',
		MALACHITE:		'tfc:ore/normal_malachite',
		TETRAHEDRITE:	'tfc:ore/normal_tetrahedrite',
		GOLD:			'tfc:ore/normal_native_gold',
		MAGNETITE:		'tfc:ore/normal_magnetite',
		HEMATITE:		'tfc:ore/normal_hematite',
		LIMONITE:		'tfc:ore/normal_limonite',
		GALENA: 		'tfc_metallum:ore/normal_galena',
		GARNIERITE:		'tfc:ore/normal_garnierite',
		SILVER:			'tfc:ore/normal_native_silver',
		CASSITERITE:	'tfc:ore/normal_cassiterite',
		SPHALERITE:		'tfc:ore/normal_sphalerite',
		BISMUTHINITE:	'tfc:ore/normal_bismuthinite',		
		BERTRANDITE: 	'tfc_metallum:ore/normal_bertrandite',
		COBALTITE: 		'tfc_metallum:ore/normal_cobaltite',
		KERNITE: 		'tfc_metallum:ore/normal_kernite',
		MONAZITE: 		'tfc_metallum:ore/normal_monazite',
		IRIDIUM: 		'tfc_metallum:ore/normal_native_iridium',
		RUTILE: 		'tfc_metallum:ore/normal_rutile',
		STIBNITE: 		'tfc_metallum:ore/normal_stibnite',
		WOLFRAMITE: 	'tfc_metallum:ore/normal_wolframite',
		CHROMITE: 		'firmalife:ore/normal_chromite',
		URANINITE: 		'tfc_metallum:ore/normal_uraninite',
		PLATINUM: 		'tfc_metallum:ore/normal_native_platinum',
		OSMIUM: 		'tfc_metallum:ore/normal_native_osmium',
	},
	POOR:{
		ALUMINUM: 		'tfc_ie_addon:ore/poor_aluminum',
		LEAD:			'tfc_ie_addon:ore/poor_lead',
		URANIUM:		'tfc_ie_addon:ore/poor_uranium',
		BAUXITE: 		'tfc_metallum:ore/poor_bauxite',
		COPPER:			'tfc:ore/poor_native_copper',
		MALACHITE:		'tfc:ore/poor_malachite',
		TETRAHEDRITE:	'tfc:ore/poor_tetrahedrite',
		GOLD:			'tfc:ore/poor_native_gold',
		MAGNETITE:		'tfc:ore/poor_magnetite',
		HEMATITE:		'tfc:ore/poor_hematite',
		LIMONITE:		'tfc:ore/poor_limonite',
		GALENA: 		'tfc_metallum:ore/poor_galena',
		GARNIERITE:		'tfc:ore/poor_garnierite',
		SILVER:			'tfc:ore/poor_native_silver',
		CASSITERITE:	'tfc:ore/poor_cassiterite',
		SPHALERITE:		'tfc:ore/poor_sphalerite',
		BISMUTHINITE:	'tfc:ore/poor_bismuthinite',		
		BERTRANDITE: 	'tfc_metallum:ore/poor_bertrandite',
		COBALTITE: 		'tfc_metallum:ore/poor_cobaltite',
		KERNITE: 		'tfc_metallum:ore/poor_kernite',
		MONAZITE: 		'tfc_metallum:ore/poor_monazite',
		IRIDIUM: 		'tfc_metallum:ore/poor_native_iridium',
		RUTILE: 		'tfc_metallum:ore/poor_rutile',
		STIBNITE: 		'tfc_metallum:ore/poor_stibnite',
		WOLFRAMITE: 	'tfc_metallum:ore/poor_wolframite',
		CHROMITE: 		'firmalife:ore/poor_chromite',
		URANINITE: 		'tfc_metallum:ore/poor_uraninite',
		PLATINUM: 		'tfc_metallum:ore/poor_native_platinum',
		OSMIUM: 		'tfc_metallum:ore/poor_native_osmium',
	},
	RICH:{
		ALUMINUM: 		'tfc_ie_addon:ore/rich_aluminum',
		LEAD:			'tfc_ie_addon:ore/rich_lead',
		URANIUM:		'tfc_ie_addon:ore/rich_uranium',
		BAUXITE: 		'tfc_metallum:ore/rich_bauxite',
		COPPER:			'tfc:ore/rich_native_copper',
		MALACHITE:		'tfc:ore/rich_malachite',
		TETRAHEDRITE:	'tfc:ore/rich_tetrahedrite',
		GOLD:			'tfc:ore/rich_native_gold',
		MAGNETITE:		'tfc:ore/rich_magnetite',
		HEMATITE:		'tfc:ore/rich_hematite',
		LIMONITE:		'tfc:ore/rich_limonite',
		GALENA: 		'tfc_metallum:ore/rich_galena',
		GARNIERITE:		'tfc:ore/rich_garnierite',
		SILVER:			'tfc:ore/rich_native_silver',
		CASSITERITE:	'tfc:ore/rich_cassiterite',
		SPHALERITE:		'tfc:ore/rich_sphalerite',
		BISMUTHINITE:	'tfc:ore/rich_bismuthinite',		
		BERTRANDITE: 	'tfc_metallum:ore/rich_bertrandite',
		COBALTITE: 		'tfc_metallum:ore/rich_cobaltite',
		KERNITE: 		'tfc_metallum:ore/rich_kernite',
		MONAZITE: 		'tfc_metallum:ore/rich_monazite',
		IRIDIUM: 		'tfc_metallum:ore/rich_native_iridium',
		RUTILE: 		'tfc_metallum:ore/rich_rutile',
		STIBNITE: 		'tfc_metallum:ore/rich_stibnite',
		WOLFRAMITE: 	'tfc_metallum:ore/rich_wolframite',
		CHROMITE: 		'firmalife:ore/rich_chromite',
		URANINITE: 		'tfc_metallum:ore/rich_uraninite',
		PLATINUM: 		'tfc_metallum:ore/rich_native_platinum',
		OSMIUM: 		'tfc_metallum:ore/rich_native_osmium',
	},
	SMALL:{
		ALUMINUM: 		'tfc_ie_addon:ore/small_aluminum',
		LEAD:			'tfc_ie_addon:ore/small_lead',
		URANIUM:		'tfc_ie_addon:ore/small_uranium',
		BAUXITE: 		'tfc_metallum:ore/small_bauxite',
		COPPER:			'tfc:ore/small_native_copper',
		MALACHITE:		'tfc:ore/small_malachite',
		TETRAHEDRITE:	'tfc:ore/small_tetrahedrite',
		GOLD:			'tfc:ore/small_native_gold',
		MAGNETITE:		'tfc:ore/small_magnetite',
		HEMATITE:		'tfc:ore/small_hematite',
		LIMONITE:		'tfc:ore/small_limonite',
		GALENA: 		'tfc_metallum:ore/small_galena',
		GARNIERITE:		'tfc:ore/small_garnierite',
		SILVER:			'tfc:ore/small_native_silver',
		CASSITERITE:	'tfc:ore/small_cassiterite',
		SPHALERITE:		'tfc:ore/small_sphalerite',
		BISMUTHINITE:	'tfc:ore/small_bismuthinite',		
		BERTRANDITE: 	'tfc_metallum:ore/small_bertrandite',
		COBALTITE: 		'tfc_metallum:ore/small_cobaltite',
		KERNITE: 		'tfc_metallum:ore/small_kernite',
		MONAZITE: 		'tfc_metallum:ore/small_monazite',
		IRIDIUM: 		'tfc_metallum:ore/small_native_iridium',
		RUTILE: 		'tfc_metallum:ore/small_rutile',
		STIBNITE: 		'tfc_metallum:ore/small_stibnite',
		WOLFRAMITE: 	'tfc_metallum:ore/small_wolframite',
		CHROMITE: 		'firmalife:ore/small_chromite',
		URANINITE: 		'tfc_metallum:ore/small_uraninite',
		PLATINUM: 		'tfc_metallum:ore/small_native_platinum',
		OSMIUM: 		'tfc_metallum:ore/small_native_osmium',
	}
}
const FLUIDS={
	ALUMINUM: 		'tfc_metallum:metal/aluminum',
	COPPER:			'tfc:metal/copper',
	GOLD:			'tfc:metal/gold',
	WROUGHT_IRON:	'tfc:metal/wrought_iron',
	LEAD:			'tfc_metallum:metal/lead',
	NICKEL:			'tfc:metal/nickel',
	SILVER:			'tfc:metal/silver',
	TIN:			'tfc:metal/tin',
	ZINC:			'tfc:metal/zinc',
	BISMUTH:		'tfc:metal/bismuth',
	BERYLLIUM:		'tfc_metallum:metal/beryllium',
	COBALT:			'tfc_metallum:metal/cobalt',
	BORON:			'tfc_metallum:metal/boron',
	THORIUM:		'tfc_metallum:metal/thorium',
	IRIDIUM:		'tfc_metallum:metal/iridium',
	TITANIUM:		'tfc_metallum:metal/titanium',
	ANTIMONY:		'tfc_metallum:metal/antimony',
	TUNGSTEN:		'tfc_metallum:metal/tungsten',
	CHROMIUM:		'firmalife:metal/chromium',
	URANIUM:		'tfc_metallum:metal/uranium',
	PLATINUM:		'tfc_metallum:metal/platinum',
	OSMIUM:			'tfc_metallum:metal/osmium',
	BRONZE:				'tfc:metal/bronze',
	BISMUTH_BRONZE:		'tfc:metal/bismuth_bronze',
	BLACK_BRONZE:		'tfc:metal/black_bronze',
	BRASS:				'tfc:metal/brass',
	ROSE_GOLD:			'tfc:metal/rose_gold',
	STERLING_SILVER:	'tfc:metal/sterling_silver',
	STEEL:				'tfc:metal/steel',
	BLACK_STEEL:		'tfc:metal/black_steel',
	BLUE_STEEL:			'tfc:metal/blue_steel',
	RED_STEEL:			'tfc:metal/red_steel',
	ALNICO:				'tfc_metallum:metal/alnico',
	BERYLLIUM_COPPER:	'tfc_metallum:metal/beryllium_copper',
	CONSTANTAN:			'tfc_metallum:metal/constantan',
	ELECTRUM:			'tfc_metallum:metal/electrum',
	FERROBORON:			'tfc_metallum:metal/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metallum:metal/florentine_bronze',
	INVAR:				'tfc_metallum:metal/invar',
	MITHRIL:			'tfc_metallum:metal/mithril',
	NICKEL_SILVER:		'tfc_metallum:metal/nickel_silver',
	OSMIRIDIUM:			'tfc_metallum:metal/osmiridium',
	PEWTER:				'tfc_metallum:metal/pewter',
	SOLDER:				'tfc_metallum:metal/solder',
	TUNGSTEN_STEEL:		'tfc_metallum:metal/tungsten_steel'
}
const NUGGETS={
	ALUMINUM: 		'immersiveengineering:nugget_aluminum',
	COPPER:			'create:copper_nugget',
	GOLD:			'minecraft:gold_nugget',
	WROUGHT_IRON:	'kubejs:wrought_iron_nugget',
	LEAD:			'immersiveengineering:nugget_lead',
	NICKEL:			'immersiveengineering:nugget_nickel',
	SILVER:			'immersiveengineering:nugget_silver',
	TIN:			'mekanism:nugget_tin',
	ZINC:			'create:zinc_nugget',
	BISMUTH:		'kubejs:bismuth_nugget',
	BERYLLIUM:		'kubejs:beryllium_nugget',
	COBALT:			'tconstruct:cobalt_nugget',
	BORON:			'kubejs:boron_nugget',
	THORIUM:		'kubejs:thorium_nugget',
	IRIDIUM:		'kubejs:iridium_nugget',
	TITANIUM:		'kubejs:titanium_nugget',
	ANTIMONY:		'kubejs:antimony_nugget',
	TUNGSTEN:		'kubejs:tungsten_nugget',
	CHROMIUM:		'kubejs:chromium_nugget',
	URANIUM:		'immersiveengineering:nugget_uranium',
	PLATINUM:		'kubejs:platinum_nugget',
	OSMIUM:			'mekanism:nugget_osmium'
}
const INGOTS={
	ALUMINUM: 		'tfc_metallum:metal/ingot/aluminum',
	COPPER:			'tfc:metal/ingot/copper',
	GOLD:			'tfc:metal/ingot/gold',
	WROUGHT_IRON:	'tfc:metal/ingot/wrought_iron',
	LEAD:			'tfc_metallum:metal/ingot/lead',
	NICKEL:			'tfc:metal/ingot/nickel',
	SILVER:			'tfc:metal/ingot/silver',
	TIN:			'tfc:metal/ingot/tin',
	ZINC:			'tfc:metal/ingot/zinc',
	BISMUTH:		'tfc:metal/ingot/bismuth',
	BERYLLIUM:		'tfc_metallum:metal/ingot/beryllium',
	COBALT:			'tfc_metallum:metal/ingot/cobalt',
	BORON:			'tfc_metallum:metal/ingot/boron',
	THORIUM:		'tfc_metallum:metal/ingot/thorium',
	IRIDIUM:		'tfc_metallum:metal/ingot/iridium',
	TITANIUM:		'tfc_metallum:metal/ingot/titanium',
	ANTIMONY:		'tfc_metallum:metal/ingot/antimony',
	TUNGSTEN:		'tfc_metallum:metal/ingot/tungsten',
	CHROMIUM:		'firmalife:metal/ingot/chromium',
	URANIUM:		'tfc_metallum:metal/ingot/uranium',
	PLATINUM:		'tfc_metallum:metal/ingot/platinum',
	OSMIUM:			'tfc_metallum:metal/ingot/osmium',
	BRONZE:				'tfc:metal/ingot/bronze',
	BISMUTH_BRONZE:		'tfc:metal/ingot/bismuth_bronze',
	BLACK_BRONZE:		'tfc:metal/ingot/black_bronze',
	BRASS:				'tfc:metal/ingot/brass',
	ROSE_GOLD:			'tfc:metal/ingot/rose_gold',
	STERLING_SILVER:	'tfc:metal/ingot/sterling_silver',
	STEEL:				'tfc:metal/ingot/steel',
	BLACK_STEEL:		'tfc:metal/ingot/black_steel',
	BLUE_STEEL:			'tfc:metal/ingot/blue_steel',
	RED_STEEL:			'tfc:metal/ingot/red_steel',
	ALNICO:				'tfc_metallum:metal/ingot/alnico',
	BERYLLIUM_COPPER:	'tfc_metallum:metal/ingot/beryllium_copper',
	CONSTANTAN:			'tfc_metallum:metal/ingot/constantan',
	ELECTRUM:			'tfc_metallum:metal/ingot/electrum',
	FERROBORON:			'tfc_metallum:metal/ingot/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metallum:metal/ingot/florentine_bronze',
	INVAR:				'tfc_metallum:metal/ingot/invar',
	MITHRIL:			'tfc_metallum:metal/ingot/mithril',
	NICKEL_SILVER:		'tfc_metallum:metal/ingot/nickel_silver',
	OSMIRIDIUM:			'tfc_metallum:metal/ingot/osmiridium',
	PEWTER:				'tfc_metallum:metal/ingot/pewter',
	SOLDER:				'tfc_metallum:metal/ingot/solder',
	TUNGSTEN_STEEL:		'tfc_metallum:metal/ingot/tungsten_steel'
}
const DUSTS={
	ALUMINUM: 		'tfc_metalwork:metal/dust/aluminum',
	COPPER:			'tfc_metalwork:metal/dust/copper',
	GOLD:			'tfc_metalwork:metal/dust/gold',
	WROUGHT_IRON:	'tfc_metalwork:metal/dust/wrought_iron',
	LEAD:			'tfc_metalwork:metal/dust/lead',
	NICKEL:			'tfc_metalwork:metal/dust/nickel',
	SILVER:			'tfc_metalwork:metal/dust/silver',
	TIN:			'tfc_metalwork:metal/dust/tin',
	ZINC:			'tfc_metalwork:metal/dust/zinc',
	BISMUTH:		'tfc_metalwork:metal/dust/bismuth',
	BERYLLIUM:		'tfc_metalwork:metal/dust/beryllium',
	COBALT:			'tfc_metalwork:metal/dust/cobalt',
	BORON:			'tfc_metalwork:metal/dust/boron',
	THORIUM:		'tfc_metalwork:metal/dust/thorium',
	IRIDIUM:		'tfc_metalwork:metal/dust/iridium',
	TITANIUM:		'tfc_metalwork:metal/dust/titanium',
	ANTIMONY:		'tfc_metalwork:metal/dust/antimony',
	TUNGSTEN:		'tfc_metalwork:metal/dust/tungsten',
	CHROMIUM:		'tfc_metalwork:metal/dust/chromium',
	URANIUM:		'tfc_metalwork:metal/dust/uranium',
	PLATINUM:		'tfc_metalwork:metal/dust/platinum',
	OSMIUM:			'tfc_metalwork:metal/dust/osmium'
}
const BLOCKS={
	ALUMINUM: 		'tfc_metalwork:metal/block/aluminum',
	COPPER:			'tfc_metalwork:metal/block/copper',
	GOLD:			'tfc_metalwork:metal/block/gold',
	WROUGHT_IRON:	'tfc_metalwork:metal/block/wrought_iron',
	LEAD:			'tfc_metalwork:metal/block/lead',
	NICKEL:			'tfc_metalwork:metal/block/nickel',
	SILVER:			'tfc_metalwork:metal/block/silver',
	TIN:			'tfc_metalwork:metal/block/tin',
	ZINC:			'tfc_metalwork:metal/block/zinc',
	BISMUTH:		'tfc_metalwork:metal/block/bismuth',
	BERYLLIUM:		'tfc_metalwork:metal/block/beryllium',
	COBALT:			'tfc_metalwork:metal/block/cobalt',
	BORON:			'tfc_metalwork:metal/block/boron',
	THORIUM:		'tfc_metalwork:metal/block/thorium',
	IRIDIUM:		'tfc_metalwork:metal/block/iridium',
	TITANIUM:		'tfc_metalwork:metal/block/titanium',
	ANTIMONY:		'tfc_metalwork:metal/block/antimony',
	TUNGSTEN:		'tfc_metalwork:metal/block/tungsten',
	CHROMIUM:		'tfc_metalwork:metal/block/chromium',
	URANIUM:		'tfc_metalwork:metal/block/uranium',
	PLATINUM:		'tfc_metalwork:metal/block/platinum',
	OSMIUM:			'tfc_metalwork:metal/block/osmium',
	BRONZE:				'tfc_metalwork:metal/block/bronze',
	BISMUTH_BRONZE:		'tfc_metalwork:metal/block/bismuth_bronze',
	BLACK_BRONZE:		'tfc_metalwork:metal/block/black_bronze',
	BRASS:				'tfc_metalwork:metal/block/brass',
	ROSE_GOLD:			'tfc_metalwork:metal/block/rose_gold',
	STERLING_SILVER:	'tfc_metalwork:metal/block/sterling_silver',
	STEEL:				'tfc_metalwork:metal/block/steel',
	BLACK_STEEL:		'tfc_metalwork:metal/block/black_steel',
	BLUE_STEEL:			'tfc_metalwork:metal/block/blue_steel',
	RED_STEEL:			'tfc_metalwork:metal/block/red_steel',
	ALNICO:				'tfc_metalwork:metal/block/alnico',
	BERYLLIUM_COPPER:	'tfc_metalwork:metal/block/beryllium_copper',
	CONSTANTAN:			'tfc_metalwork:metal/block/constantan',
	ELECTRUM:			'tfc_metalwork:metal/block/electrum',
	FERROBORON:			'tfc_metalwork:metal/block/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metalwork:metal/block/florentine_bronze',
	INVAR:				'tfc_metalwork:metal/block/invar',
	MITHRIL:			'tfc_metalwork:metal/block/mithril',
	NICKEL_SILVER:		'tfc_metalwork:metal/block/nickel_silver',
	OSMIRIDIUM:			'tfc_metalwork:metal/block/osmiridium',
	PEWTER:				'tfc_metalwork:metal/block/pewter',
	SOLDER:				'tfc_metalwork:metal/block/solder',
	TUNGSTEN_STEEL:		'tfc_metalwork:metal/block/tungsten_steel'
}
const GEARS={
	ALUMINUM: 		'tfc_metalwork:metal/small_gear/aluminum',
	COPPER:			'tfc_metalwork:metal/small_gear/copper',
	GOLD:			'tfc_metalwork:metal/small_gear/gold',
	WROUGHT_IRON:	'tfc_metalwork:metal/small_gear/wrought_iron',
	LEAD:			'tfc_metalwork:metal/small_gear/lead',
	NICKEL:			'tfc_metalwork:metal/small_gear/nickel',
	SILVER:			'tfc_metalwork:metal/small_gear/silver',
	TIN:			'tfc_metalwork:metal/small_gear/tin',
	ZINC:			'tfc_metalwork:metal/small_gear/zinc',
	BISMUTH:		'tfc_metalwork:metal/small_gear/bismuth',
	BERYLLIUM:		'tfc_metalwork:metal/small_gear/beryllium',
	COBALT:			'tfc_metalwork:metal/small_gear/cobalt',
	BORON:			'tfc_metalwork:metal/small_gear/boron',
	THORIUM:		'tfc_metalwork:metal/small_gear/thorium',
	IRIDIUM:		'tfc_metalwork:metal/small_gear/iridium',
	TITANIUM:		'tfc_metalwork:metal/small_gear/titanium',
	ANTIMONY:		'tfc_metalwork:metal/small_gear/antimony',
	TUNGSTEN:		'tfc_metalwork:metal/small_gear/tungsten',
	CHROMIUM:		'tfc_metalwork:metal/small_gear/chromium',
	URANIUM:		'tfc_metalwork:metal/small_gear/uranium',
	PLATINUM:		'tfc_metalwork:metal/small_gear/platinum',
	OSMIUM:			'tfc_metalwork:metal/small_gear/osmium',
	BRONZE:				'tfc_metalwork:metal/small_gear/bronze',
	BISMUTH_BRONZE:		'tfc_metalwork:metal/small_gear/bismuth_bronze',
	BLACK_BRONZE:		'tfc_metalwork:metal/small_gear/black_bronze',
	BRASS:				'tfc_metalwork:metal/small_gear/brass',
	ROSE_GOLD:			'tfc_metalwork:metal/small_gear/rose_gold',
	STERLING_SILVER:	'tfc_metalwork:metal/small_gear/sterling_silver',
	STEEL:				'tfc_metalwork:metal/small_gear/steel',
	BLACK_STEEL:		'tfc_metalwork:metal/small_gear/black_steel',
	BLUE_STEEL:			'tfc_metalwork:metal/small_gear/blue_steel',
	RED_STEEL:			'tfc_metalwork:metal/small_gear/red_steel',
	ALNICO:				'tfc_metalwork:metal/small_gear/alnico',
	BERYLLIUM_COPPER:	'tfc_metalwork:metal/small_gear/beryllium_copper',
	CONSTANTAN:			'tfc_metalwork:metal/small_gear/constantan',
	ELECTRUM:			'tfc_metalwork:metal/small_gear/electrum',
	FERROBORON:			'tfc_metalwork:metal/small_gear/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metalwork:metal/small_gear/florentine_bronze',
	INVAR:				'tfc_metalwork:metal/small_gear/invar',
	MITHRIL:			'tfc_metalwork:metal/small_gear/mithril',
	NICKEL_SILVER:		'tfc_metalwork:metal/small_gear/nickel_silver',
	OSMIRIDIUM:			'tfc_metalwork:metal/small_gear/osmiridium',
	PEWTER:				'tfc_metalwork:metal/small_gear/pewter',
	SOLDER:				'tfc_metalwork:metal/small_gear/solder',
	TUNGSTEN_STEEL:		'tfc_metalwork:metal/small_gear/tungsten_steel'
}
const RODS={
	ALUMINUM: 		'tfc_metallum:metal/rod/aluminum',
	COPPER:			'tfc:metal/rod/copper',
	GOLD:			'tfc:metal/rod/gold',
	WROUGHT_IRON:	'tfc:metal/rod/wrought_iron',
	LEAD:			'tfc_metallum:metal/rod/lead',
	NICKEL:			'tfc:metal/rod/nickel',
	SILVER:			'tfc:metal/rod/silver',
	TIN:			'tfc:metal/rod/tin',
	ZINC:			'tfc:metal/rod/zinc',
	BISMUTH:		'tfc:metal/rod/bismuth',
	BERYLLIUM:		'tfc_metallum:metal/rod/beryllium',
	COBALT:			'tfc_metallum:metal/rod/cobalt',
	BORON:			'tfc_metallum:metal/rod/boron',
	THORIUM:		'tfc_metallum:metal/rod/thorium',
	IRIDIUM:		'tfc_metallum:metal/rod/iridium',
	TITANIUM:		'tfc_metallum:metal/rod/titanium',
	ANTIMONY:		'tfc_metallum:metal/rod/antimony',
	TUNGSTEN:		'tfc_metallum:metal/rod/tungsten',
	CHROMIUM:		'firmalife:metal/rod/chromium',
	URANIUM:		'tfc_metallum:metal/rod/uranium',
	PLATINUM:		'tfc_metallum:metal/rod/platinum',
	OSMIUM:			'tfc_metallum:metal/rod/osmium',
	BRONZE:				'tfc:metal/rod/bronze',
	BISMUTH_BRONZE:		'tfc:metal/rod/bismuth_bronze',
	BLACK_BRONZE:		'tfc:metal/rod/black_bronze',
	BRASS:				'tfc:metal/rod/brass',
	ROSE_GOLD:			'tfc:metal/rod/rose_gold',
	STERLING_SILVER:	'tfc:metal/rod/sterling_silver',
	STEEL:				'tfc:metal/rod/steel',
	BLACK_STEEL:		'tfc:metal/rod/black_steel',
	BLUE_STEEL:			'tfc:metal/rod/blue_steel',
	RED_STEEL:			'tfc:metal/rod/red_steel',
	ALNICO:				'tfc_metallum:metal/rod/alnico',
	BERYLLIUM_COPPER:	'tfc_metallum:metal/rod/beryllium_copper',
	CONSTANTAN:			'tfc_metallum:metal/rod/constantan',
	ELECTRUM:			'tfc_metallum:metal/rod/electrum',
	FERROBORON:			'tfc_metallum:metal/rod/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metallum:metal/rod/florentine_bronze',
	INVAR:				'tfc_metallum:metal/rod/invar',
	MITHRIL:			'tfc_metallum:metal/rod/mithril',
	NICKEL_SILVER:		'tfc_metallum:metal/rod/nickel_silver',
	OSMIRIDIUM:			'tfc_metallum:metal/rod/osmiridium',
	PEWTER:				'tfc_metallum:metal/rod/pewter',
	SOLDER:				'tfc_metallum:metal/rod/solder',
	TUNGSTEN_STEEL:		'tfc_metallum:metal/rod/tungsten_steel'
}
const PLATES={
	ALUMINUM: 		'tfc_metalwork:metal/plate/aluminum',
	COPPER:			'tfc_metalwork:metal/plate/copper',
	GOLD:			'tfc_metalwork:metal/plate/gold',
	WROUGHT_IRON:	'tfc_metalwork:metal/plate/wrought_iron',
	LEAD:			'tfc_metalwork:metal/plate/lead',
	NICKEL:			'tfc_metalwork:metal/plate/nickel',
	SILVER:			'tfc_metalwork:metal/plate/silver',
	TIN:			'tfc_metalwork:metal/plate/tin',
	ZINC:			'tfc_metalwork:metal/plate/zinc',
	BISMUTH:		'tfc_metalwork:metal/plate/bismuth',
	BERYLLIUM:		'tfc_metalwork:metal/plate/beryllium',
	COBALT:			'tfc_metalwork:metal/plate/cobalt',
	BORON:			'tfc_metalwork:metal/plate/boron',
	THORIUM:		'tfc_metalwork:metal/plate/thorium',
	IRIDIUM:		'tfc_metalwork:metal/plate/iridium',
	TITANIUM:		'tfc_metalwork:metal/plate/titanium',
	ANTIMONY:		'tfc_metalwork:metal/plate/antimony',
	TUNGSTEN:		'tfc_metalwork:metal/plate/tungsten',
	CHROMIUM:		'tfc_metalwork:metal/plate/chromium',
	URANIUM:		'tfc_metalwork:metal/plate/uranium',
	PLATINUM:		'tfc_metalwork:metal/plate/platinum',
	OSMIUM:			'tfc_metalwork:metal/plate/osmium',
	BRONZE:				'tfc_metalwork:metal/plate/bronze',
	BISMUTH_BRONZE:		'tfc_metalwork:metal/plate/bismuth_bronze',
	BLACK_BRONZE:		'tfc_metalwork:metal/plate/black_bronze',
	BRASS:				'tfc_metalwork:metal/plate/brass',
	ROSE_GOLD:			'tfc_metalwork:metal/plate/rose_gold',
	STERLING_SILVER:	'tfc_metalwork:metal/plate/sterling_silver',
	STEEL:				'tfc_metalwork:metal/plate/steel',
	BLACK_STEEL:		'tfc_metalwork:metal/plate/black_steel',
	BLUE_STEEL:			'tfc_metalwork:metal/plate/blue_steel',
	RED_STEEL:			'tfc_metalwork:metal/plate/red_steel',
	ALNICO:				'tfc_metalwork:metal/plate/alnico',
	BERYLLIUM_COPPER:	'tfc_metalwork:metal/plate/beryllium_copper',
	CONSTANTAN:			'tfc_metalwork:metal/plate/constantan',
	ELECTRUM:			'tfc_metalwork:metal/plate/electrum',
	FERROBORON:			'tfc_metalwork:metal/plate/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metalwork:metal/plate/florentine_bronze',
	INVAR:				'tfc_metalwork:metal/plate/invar',
	MITHRIL:			'tfc_metalwork:metal/plate/mithril',
	NICKEL_SILVER:		'tfc_metalwork:metal/plate/nickel_silver',
	OSMIRIDIUM:			'tfc_metalwork:metal/plate/osmiridium',
	PEWTER:				'tfc_metalwork:metal/plate/pewter',
	SOLDER:				'tfc_metalwork:metal/plate/solder',
	TUNGSTEN_STEEL:		'tfc_metalwork:metal/plate/tungsten_steel'
}
const GREATE_PLATES={
	ALUMINUM: 		'tfc_metalwork:metal/large_plate/aluminum',
	COPPER:			'tfc_metalwork:metal/large_plate/copper',
	GOLD:			'tfc_metalwork:metal/large_plate/gold',
	WROUGHT_IRON:	'tfc_metalwork:metal/large_plate/wrought_iron',
	LEAD:			'tfc_metalwork:metal/large_plate/lead',
	NICKEL:			'tfc_metalwork:metal/large_plate/nickel',
	SILVER:			'tfc_metalwork:metal/large_plate/silver',
	TIN:			'tfc_metalwork:metal/large_plate/tin',
	ZINC:			'tfc_metalwork:metal/large_plate/zinc',
	BISMUTH:		'tfc_metalwork:metal/large_plate/bismuth',
	BERYLLIUM:		'tfc_metalwork:metal/large_plate/beryllium',
	COBALT:			'tfc_metalwork:metal/large_plate/cobalt',
	BORON:			'tfc_metalwork:metal/large_plate/boron',
	THORIUM:		'tfc_metalwork:metal/large_plate/thorium',
	IRIDIUM:		'tfc_metalwork:metal/large_plate/iridium',
	TITANIUM:		'tfc_metalwork:metal/large_plate/titanium',
	ANTIMONY:		'tfc_metalwork:metal/large_plate/antimony',
	TUNGSTEN:		'tfc_metalwork:metal/large_plate/tungsten',
	CHROMIUM:		'tfc_metalwork:metal/large_plate/chromium',
	URANIUM:		'tfc_metalwork:metal/large_plate/uranium',
	PLATINUM:		'tfc_metalwork:metal/large_plate/platinum',
	OSMIUM:			'tfc_metalwork:metal/large_plate/osmium',
	BRONZE:				'tfc_metalwork:metal/large_plate/bronze',
	BISMUTH_BRONZE:		'tfc_metalwork:metal/large_plate/bismuth_bronze',
	BLACK_BRONZE:		'tfc_metalwork:metal/large_plate/black_bronze',
	BRASS:				'tfc_metalwork:metal/large_plate/brass',
	ROSE_GOLD:			'tfc_metalwork:metal/large_plate/rose_gold',
	STERLING_SILVER:	'tfc_metalwork:metal/large_plate/sterling_silver',
	STEEL:				'tfc_metalwork:metal/large_plate/steel',
	BLACK_STEEL:		'tfc_metalwork:metal/large_plate/black_steel',
	BLUE_STEEL:			'tfc_metalwork:metal/large_plate/blue_steel',
	RED_STEEL:			'tfc_metalwork:metal/large_plate/red_steel',
	ALNICO:				'tfc_metalwork:metal/large_plate/alnico',
	BERYLLIUM_COPPER:	'tfc_metalwork:metal/large_plate/beryllium_copper',
	CONSTANTAN:			'tfc_metalwork:metal/large_plate/constantan',
	ELECTRUM:			'tfc_metalwork:metal/large_plate/electrum',
	FERROBORON:			'tfc_metalwork:metal/large_plate/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metalwork:metal/large_plate/florentine_bronze',
	INVAR:				'tfc_metalwork:metal/large_plate/invar',
	MITHRIL:			'tfc_metalwork:metal/large_plate/mithril',
	NICKEL_SILVER:		'tfc_metalwork:metal/large_plate/nickel_silver',
	OSMIRIDIUM:			'tfc_metalwork:metal/large_plate/osmiridium',
	PEWTER:				'tfc_metalwork:metal/large_plate/pewter',
	SOLDER:				'tfc_metalwork:metal/large_plate/solder',
	TUNGSTEN_STEEL:		'tfc_metalwork:metal/large_plate/tungsten_steel'
}
const GREATE_GEARS={
	ALUMINUM: 		'tfc_metalwork:metal/large_gear/aluminum',
	COPPER:			'tfc_metalwork:metal/large_gear/copper',
	GOLD:			'tfc_metalwork:metal/large_gear/gold',
	WROUGHT_IRON:	'tfc_metalwork:metal/large_gear/wrought_iron',
	LEAD:			'tfc_metalwork:metal/large_gear/lead',
	NICKEL:			'tfc_metalwork:metal/large_gear/nickel',
	SILVER:			'tfc_metalwork:metal/large_gear/silver',
	TIN:			'tfc_metalwork:metal/large_gear/tin',
	ZINC:			'tfc_metalwork:metal/large_gear/zinc',
	BISMUTH:		'tfc_metalwork:metal/large_gear/bismuth',
	BERYLLIUM:		'tfc_metalwork:metal/large_gear/beryllium',
	COBALT:			'tfc_metalwork:metal/large_gear/cobalt',
	BORON:			'tfc_metalwork:metal/large_gear/boron',
	THORIUM:		'tfc_metalwork:metal/large_gear/thorium',
	IRIDIUM:		'tfc_metalwork:metal/large_gear/iridium',
	TITANIUM:		'tfc_metalwork:metal/large_gear/titanium',
	ANTIMONY:		'tfc_metalwork:metal/large_gear/antimony',
	TUNGSTEN:		'tfc_metalwork:metal/large_gear/tungsten',
	CHROMIUM:		'tfc_metalwork:metal/large_gear/chromium',
	URANIUM:		'tfc_metalwork:metal/large_gear/uranium',
	PLATINUM:		'tfc_metalwork:metal/large_gear/platinum',
	OSMIUM:			'tfc_metalwork:metal/large_gear/osmium',
	BRONZE:				'tfc_metalwork:metal/large_gear/bronze',
	BISMUTH_BRONZE:		'tfc_metalwork:metal/large_gear/bismuth_bronze',
	BLACK_BRONZE:		'tfc_metalwork:metal/large_gear/black_bronze',
	BRASS:				'tfc_metalwork:metal/large_gear/brass',
	ROSE_GOLD:			'tfc_metalwork:metal/large_gear/rose_gold',
	STERLING_SILVER:	'tfc_metalwork:metal/large_gear/sterling_silver',
	STEEL:				'tfc_metalwork:metal/large_gear/steel',
	BLACK_STEEL:		'tfc_metalwork:metal/large_gear/black_steel',
	BLUE_STEEL:			'tfc_metalwork:metal/large_gear/blue_steel',
	RED_STEEL:			'tfc_metalwork:metal/large_gear/red_steel',
	ALNICO:				'tfc_metalwork:metal/large_gear/alnico',
	BERYLLIUM_COPPER:	'tfc_metalwork:metal/large_gear/beryllium_copper',
	CONSTANTAN:			'tfc_metalwork:metal/large_gear/constantan',
	ELECTRUM:			'tfc_metalwork:metal/large_gear/electrum',
	FERROBORON:			'tfc_metalwork:metal/large_gear/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metalwork:metal/large_gear/florentine_bronze',
	INVAR:				'tfc_metalwork:metal/large_gear/invar',
	MITHRIL:			'tfc_metalwork:metal/large_gear/mithril',
	NICKEL_SILVER:		'tfc_metalwork:metal/large_gear/nickel_silver',
	OSMIRIDIUM:			'tfc_metalwork:metal/large_gear/osmiridium',
	PEWTER:				'tfc_metalwork:metal/large_gear/pewter',
	SOLDER:				'tfc_metalwork:metal/large_gear/solder',
	TUNGSTEN_STEEL:		'tfc_metalwork:metal/large_gear/tungsten_steel'
}
const GREATE_RODS={
	ALUMINUM: 		'tfc_metalwork:metal/large_rod/aluminum',
	COPPER:			'tfc_metalwork:metal/large_rod/copper',
	GOLD:			'tfc_metalwork:metal/large_rod/gold',
	WROUGHT_IRON:	'tfc_metalwork:metal/large_rod/wrought_iron',
	LEAD:			'tfc_metalwork:metal/large_rod/lead',
	NICKEL:			'tfc_metalwork:metal/large_rod/nickel',
	SILVER:			'tfc_metalwork:metal/large_rod/silver',
	TIN:			'tfc_metalwork:metal/large_rod/tin',
	ZINC:			'tfc_metalwork:metal/large_rod/zinc',
	BISMUTH:		'tfc_metalwork:metal/large_rod/bismuth',
	BERYLLIUM:		'tfc_metalwork:metal/large_rod/beryllium',
	COBALT:			'tfc_metalwork:metal/large_rod/cobalt',
	BORON:			'tfc_metalwork:metal/large_rod/boron',
	THORIUM:		'tfc_metalwork:metal/large_rod/thorium',
	IRIDIUM:		'tfc_metalwork:metal/large_rod/iridium',
	TITANIUM:		'tfc_metalwork:metal/large_rod/titanium',
	ANTIMONY:		'tfc_metalwork:metal/large_rod/antimony',
	TUNGSTEN:		'tfc_metalwork:metal/large_rod/tungsten',
	CHROMIUM:		'tfc_metalwork:metal/large_rod/chromium',
	URANIUM:		'tfc_metalwork:metal/large_rod/uranium',
	PLATINUM:		'tfc_metalwork:metal/large_rod/platinum',
	OSMIUM:			'tfc_metalwork:metal/large_rod/osmium',
	BRONZE:				'tfc_metalwork:metal/large_rod/bronze',
	BISMUTH_BRONZE:		'tfc_metalwork:metal/large_rod/bismuth_bronze',
	BLACK_BRONZE:		'tfc_metalwork:metal/large_rod/black_bronze',
	BRASS:				'tfc_metalwork:metal/large_rod/brass',
	ROSE_GOLD:			'tfc_metalwork:metal/large_rod/rose_gold',
	STERLING_SILVER:	'tfc_metalwork:metal/large_rod/sterling_silver',
	STEEL:				'tfc_metalwork:metal/large_rod/steel',
	BLACK_STEEL:		'tfc_metalwork:metal/large_rod/black_steel',
	BLUE_STEEL:			'tfc_metalwork:metal/large_rod/blue_steel',
	RED_STEEL:			'tfc_metalwork:metal/large_rod/red_steel',
	ALNICO:				'tfc_metalwork:metal/large_rod/alnico',
	BERYLLIUM_COPPER:	'tfc_metalwork:metal/large_rod/beryllium_copper',
	CONSTANTAN:			'tfc_metalwork:metal/large_rod/constantan',
	ELECTRUM:			'tfc_metalwork:metal/large_rod/electrum',
	FERROBORON:			'tfc_metalwork:metal/large_rod/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metalwork:metal/large_rod/florentine_bronze',
	INVAR:				'tfc_metalwork:metal/large_rod/invar',
	MITHRIL:			'tfc_metalwork:metal/large_rod/mithril',
	NICKEL_SILVER:		'tfc_metalwork:metal/large_rod/nickel_silver',
	OSMIRIDIUM:			'tfc_metalwork:metal/large_rod/osmiridium',
	PEWTER:				'tfc_metalwork:metal/large_rod/pewter',
	SOLDER:				'tfc_metalwork:metal/large_rod/solder',
	TUNGSTEN_STEEL:		'tfc_metalwork:metal/large_rod/tungsten_steel'
}
const DOUBLE_INGOTS={
	ALUMINUM: 		'tfc_metallum:metal/double_ingot/aluminum',
	COPPER:			'tfc:metal/double_ingot/copper',
	GOLD:			'tfc:metal/double_ingot/gold',
	WROUGHT_IRON:	'tfc:metal/double_ingot/wrought_iron',
	LEAD:			'tfc_metallum:metal/double_ingot/lead',
	NICKEL:			'tfc:metal/double_ingot/nickel',
	SILVER:			'tfc:metal/double_ingot/silver',
	TIN:			'tfc:metal/double_ingot/tin',
	ZINC:			'tfc:metal/double_ingot/zinc',
	BISMUTH:		'tfc:metal/double_ingot/bismuth',
	BERYLLIUM:		'tfc_metallum:metal/double_ingot/beryllium',
	COBALT:			'tfc_metallum:metal/double_ingot/cobalt',
	BORON:			'tfc_metallum:metal/double_ingot/boron',
	THORIUM:		'tfc_metallum:metal/double_ingot/thorium',
	IRIDIUM:		'tfc_metallum:metal/double_ingot/iridium',
	TITANIUM:		'tfc_metallum:metal/double_ingot/titanium',
	ANTIMONY:		'tfc_metallum:metal/double_ingot/antimony',
	TUNGSTEN:		'tfc_metallum:metal/double_ingot/tungsten',
	CHROMIUM:		'firmalife:metal/double_ingot/chromium',
	URANIUM:		'tfc_metallum:metal/double_ingot/uranium',
	PLATINUM:		'tfc_metallum:metal/double_ingot/platinum',
	OSMIUM:			'tfc_metallum:metal/double_ingot/osmium',
	BRONZE:				'tfc:metal/double_ingot/bronze',
	BISMUTH_BRONZE:		'tfc:metal/double_ingot/bismuth_bronze',
	BLACK_BRONZE:		'tfc:metal/double_ingot/black_bronze',
	BRASS:				'tfc:metal/double_ingot/brass',
	ROSE_GOLD:			'tfc:metal/double_ingot/rose_gold',
	STERLING_SILVER:	'tfc:metal/double_ingot/sterling_silver',
	STEEL:				'tfc:metal/double_ingot/steel',
	BLACK_STEEL:		'tfc:metal/double_ingot/black_steel',
	BLUE_STEEL:			'tfc:metal/double_ingot/blue_steel',
	RED_STEEL:			'tfc:metal/double_ingot/red_steel',
	ALNICO:				'tfc_metallum:metal/double_ingot/alnico',
	BERYLLIUM_COPPER:	'tfc_metallum:metal/double_ingot/beryllium_copper',
	CONSTANTAN:			'tfc_metallum:metal/double_ingot/constantan',
	ELECTRUM:			'tfc_metallum:metal/double_ingot/electrum',
	FERROBORON:			'tfc_metallum:metal/double_ingot/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metallum:metal/double_ingot/florentine_bronze',
	INVAR:				'tfc_metallum:metal/double_ingot/invar',
	MITHRIL:			'tfc_metallum:metal/double_ingot/mithril',
	NICKEL_SILVER:		'tfc_metallum:metal/double_ingot/nickel_silver',
	OSMIRIDIUM:			'tfc_metallum:metal/double_ingot/osmiridium',
	PEWTER:				'tfc_metallum:metal/double_ingot/pewter',
	SOLDER:				'tfc_metallum:metal/double_ingot/solder',
	TUNGSTEN_STEEL:		'tfc_metallum:metal/double_ingot/tungsten_steel'
}
const DOUBLE_SHEETS={
	ALUMINUM: 		'tfc_metallum:metal/double_sheet/aluminum',
	COPPER:			'tfc:metal/double_sheet/copper',
	GOLD:			'tfc:metal/double_sheet/gold',
	WROUGHT_IRON:	'tfc:metal/double_sheet/wrought_iron',
	LEAD:			'tfc_metallum:metal/double_sheet/lead',
	NICKEL:			'tfc:metal/double_sheet/nickel',
	SILVER:			'tfc:metal/double_sheet/silver',
	TIN:			'tfc:metal/double_sheet/tin',
	ZINC:			'tfc:metal/double_sheet/zinc',
	BISMUTH:		'tfc:metal/double_sheet/bismuth',
	BERYLLIUM:		'tfc_metallum:metal/double_sheet/beryllium',
	COBALT:			'tfc_metallum:metal/double_sheet/cobalt',
	BORON:			'tfc_metallum:metal/double_sheet/boron',
	THORIUM:		'tfc_metallum:metal/double_sheet/thorium',
	IRIDIUM:		'tfc_metallum:metal/double_sheet/iridium',
	TITANIUM:		'tfc_metallum:metal/double_sheet/titanium',
	ANTIMONY:		'tfc_metallum:metal/double_sheet/antimony',
	TUNGSTEN:		'tfc_metallum:metal/double_sheet/tungsten',
	CHROMIUM:		'firmalife:metal/double_sheet/chromium',
	URANIUM:		'tfc_metallum:metal/double_sheet/uranium',
	PLATINUM:		'tfc_metallum:metal/double_sheet/platinum',
	OSMIUM:			'tfc_metallum:metal/double_sheet/osmium',
	BRONZE:				'tfc:metal/double_sheet/bronze',
	BISMUTH_BRONZE:		'tfc:metal/double_sheet/bismuth_bronze',
	BLACK_BRONZE:		'tfc:metal/double_sheet/black_bronze',
	BRASS:				'tfc:metal/double_sheet/brass',
	ROSE_GOLD:			'tfc:metal/double_sheet/rose_gold',
	STERLING_SILVER:	'tfc:metal/double_sheet/sterling_silver',
	STEEL:				'tfc:metal/double_sheet/steel',
	BLACK_STEEL:		'tfc:metal/double_sheet/black_steel',
	BLUE_STEEL:			'tfc:metal/double_sheet/blue_steel',
	RED_STEEL:			'tfc:metal/double_sheet/red_steel',
	ALNICO:				'tfc_metallum:metal/double_sheet/alnico',
	BERYLLIUM_COPPER:	'tfc_metallum:metal/double_sheet/beryllium_copper',
	CONSTANTAN:			'tfc_metallum:metal/double_sheet/constantan',
	ELECTRUM:			'tfc_metallum:metal/double_sheet/electrum',
	FERROBORON:			'tfc_metallum:metal/double_sheet/ferroboron',
	FLORENTINE_BRONZE:	'tfc_metallum:metal/double_sheet/florentine_bronze',
	INVAR:				'tfc_metallum:metal/double_sheet/invar',
	MITHRIL:			'tfc_metallum:metal/double_sheet/mithril',
	NICKEL_SILVER:		'tfc_metallum:metal/double_sheet/nickel_silver',
	OSMIRIDIUM:			'tfc_metallum:metal/double_sheet/osmiridium',
	PEWTER:				'tfc_metallum:metal/double_sheet/pewter',
	SOLDER:				'tfc_metallum:metal/double_sheet/solder',
	TUNGSTEN_STEEL:		'tfc_metallum:metal/double_sheet/tungsten_steel'
}
