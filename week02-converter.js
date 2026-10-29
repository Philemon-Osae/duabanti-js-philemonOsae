const CEDI_TO_DOLLAR_RATE = 0.085;
// Conversion rates: USD per GHS and miles per kilometer.
const KM_TO_MILES_RATE = 0.621371;

function cedisToDollars(cedis) {
    return cedis*CEDI_TO_DOLLAR_RATE;
}

function kmToMiles(km) {
    return km * KM_TO_MILES_RATE; //converts kilometers to miles using the conversion rate
}

function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;  // converts from celsius to fahrenheit
}

const dollars = cedisToDollars(100);
console.log(`100 GHS = ${dollars.toFixed(2)} USD`); // 100 GHS = 8.50 USD

const miles = kmToMiles(10);
console.log(`10 km = ${miles.toFixed(2)} miles`); // 10 km = 6.21 miles

const fahrenheit = celsiusToFahrenheit(25);
console.log(`25°C = ${fahrenheit.toFixed(2)}°F`);  // 25°C = 77.00°F
