// A function to take F and convert to C. (Temperature)

// C = (°F - 32) × 5/9; 

function FahrenheitToCelsius(temp){
    let celsius= (temp-32)*5/9;
    console.log(`${temp}° Fahrenheit is ${celsius.toFixed(2)}° Celsius`)
}

FahrenheitToCelsius(100);