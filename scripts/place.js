
const today = new Date();
document.querySelector("#current-year").innerHTML = today.getFullYear();
document.querySelector("#last-modified").textContent =  document.lastModified;

const temperature = 30;
const windSpeed = 12;


// 4. Calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}


// 5. Check whether wind chill conditions are met
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    document.querySelector("#chill").textContent = `${windChill.toFixed(1)} °C`;
} else {
    document.querySelector("#chill").textContent = "N/A";
}