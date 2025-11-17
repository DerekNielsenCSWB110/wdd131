// getdates.js
// Dynamically display the current year and the date the document was last modified.

// Get and display the current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get and display the document's last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
