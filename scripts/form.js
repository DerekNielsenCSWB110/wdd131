// Provided Product Array
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

// Populate product <select>
const productSelect = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.textContent = product.name;   // what the user sees
    option.value = product.id;           // stored value
    productSelect.appendChild(option);
});

// Update Last Modified Date in Footer
document.addEventListener("DOMContentLoaded", () => {
    const lastMod = document.getElementById("lastModified");
    if (lastMod) {
        lastMod.textContent = "Last Modification: " + document.lastModified;
    }
});
