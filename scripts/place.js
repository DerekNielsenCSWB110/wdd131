// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// LAST MODIFIED
document.getElementById("last-modified").textContent = document.lastModified;

// WIND CHILL CALCULATION
function calculateWindChill(tempC, windKmh) {
    // Wind chill formula (Celsius)
    return (
        13.12 +
        0.6215 * tempC -
        11.37 * Math.pow(windKmh, 0.16) +
        0.3965 * tempC * Math.pow(windKmh, 0.16)
    );
}

// STATIC VALUES (from your HTML)
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);

const windchillEl = document.getElementById("windchill");

// VALIDATION (same rules required in WDD131)
if (temp <= 10 && wind > 4.8) {
    const wc = calculateWindChill(temp, wind);
    windchillEl.textContent = wc.toFixed(1) + " °C";
} else {
    windchillEl.textContent = "N/A";
}
