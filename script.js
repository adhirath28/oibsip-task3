
function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const resultDiv = document.getElementById('result');

    if (inputTemp === '') {
        resultDiv.textContent = 'Please enter a temperature.';
        resultDiv.style.opacity = 1;
        return;
    }

    const temperature = parseFloat(inputTemp);
    let result;

    if (inputUnit === 'Fahrenheit') {
        result = (temperature * 9/5) + 32;
        resultDiv.textContent = `${temperature}° Celsius is equal to ${result.toFixed(2)}° Fahrenheit.`;
    } else if (inputUnit === 'Celsius') {
        result = (temperature - 32) * 5/9;
        resultDiv.textContent = `${temperature}° Fahrenheit is equal to ${result.toFixed(2)}° Celsius.`;
    }

    // Trigger the fade-in animation for the result
    resultDiv.style.opacity = 0;
    setTimeout(() => {
        resultDiv.style.opacity = 1;
    }, 100);
}
