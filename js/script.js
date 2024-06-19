document.addEventListener('DOMContentLoaded', function () {
    const celciusTextarea = document.getElementById('celcius-input');
    const fahrenheitTextarea = document.getElementById('fahrenheit-output');
    const conversionTextarea = document.getElementById('conversion-result');

    const convertButton = document.getElementById('convert-btn');
    const resetButton = document.getElementById('reset-btn');
    const reverseButton = document.getElementById('reverse-btn');

    // Function to convert Celsius to Fahrenheit
    function convertCelsiusToFahrenheit(celsius) {
        return (celsius * 1.8) + 32;
    }

    // Function to convert Fahrenheit to Celsius
    function convertFahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) / 1.8;
    }

    // Event listener for convert button
    convertButton.addEventListener('click', function () {
        const celsiusValue = parseFloat(celciusTextarea.value);
        if (isNaN(celsiusValue)) {
            alert('Please enter a valid number for Celsius.');
            return;
        }
        const fahrenheitValue = convertCelsiusToFahrenheit(celsiusValue);
        fahrenheitTextarea.value = fahrenheitValue.toFixed(2);
        conversionTextarea.value = `${celsiusValue} °C = ${fahrenheitValue.toFixed(2)} °F\nFormula: (${celsiusValue} °C * 1.8) + 32 = ${fahrenheitValue.toFixed(2)} °F`;
    });

    // Event listener for reset button
    resetButton.addEventListener('click', function () {
        celciusTextarea.value = '';
        fahrenheitTextarea.value = '';
        conversionTextarea.value = '';
    });

    // Event listener for reverse button
    reverseButton.addEventListener('click', function () {
        const fahrenheitValue = parseFloat(fahrenheitTextarea.value);
        if (isNaN(fahrenheitValue)) {
            alert('Please enter a valid number for Fahrenheit.');
            return;
        }
        const celsiusValue = convertFahrenheitToCelsius(fahrenheitValue);
        celciusTextarea.value = celsiusValue.toFixed(2);
        conversionTextarea.value = `${fahrenheitValue} °F = ${celsiusValue.toFixed(2)} °C\nFormula: (${fahrenheitValue} °F - 32) / 1.8 = ${celsiusValue.toFixed(2)} °C`;
    });
});
