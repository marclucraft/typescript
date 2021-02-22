const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];
carsByMake.push(['f150'], ['corolla'], ['camaro']);

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with methods
carMakers.map(car => {
	return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2022-05-13');
importantDates.push(new Date());
importantDates.push(100);
