// Read URL parameters
const params = new URLSearchParams(window.location.search);

function display(id, value) {
    document.getElementById(id).textContent = value || "None";
}

// STANDARD FIELDS
display("sProduct", params.get("product"));
display("sRating", params.get("rating"));
display("sInstall", params.get("install"));
display("sReview", params.get("reviewText"));
display("sUser", params.get("user"));

// FEATURES (checkbox array)
const features = params.getAll("features");
display("sFeatures", features.join(", "));

// LOCAL STORAGE REVIEW COUNTER
let count = Number(localStorage.getItem("reviewCount")) || 0;
count++;
localStorage.setItem("reviewCount", count);

document.getElementById("reviewCount").textContent = count;
