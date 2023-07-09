onEvent('item.modification', event => {
	event.modify('tfc:ore/bituminous_coal', item => {
		item.burnTime = 2200
	})
	event.modify('tfc:ore/lignite', item => {
		item.burnTime = 2200
	})
	event.modify('kubejs:coalcoke', item => {
		item.burnTime = 2200
	})
})