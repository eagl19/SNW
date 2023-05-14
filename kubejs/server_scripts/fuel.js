onEvent('recipes', event => {
	event.custom({
		type: 'tconstruct:melting_fuel',
        fluid: { 
			name:'minecraft:water',
			amount: 50
		},
        duration: 150,
        temperature: 3000
    }).id('My_fuel');
})