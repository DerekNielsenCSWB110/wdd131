const temples = [
  { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005-08-07", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
  { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888-05-21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
  { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015-06-07", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
  { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020-05-02", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
  { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974-11-19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
  { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986-01-10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
  { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983-12-02", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
  { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980-10-27", area: 103000, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-temple-wallpaper.jpg" },
  { templeName: "London England", location: "London, England", dedicated: "1958-09-07", area: 9800, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/400x250/london-temple-wallpaper.jpg" },
  { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019-03-10", area: 41010, imageUrl: "https://www.churchofjesuschrist.org/media/image/rome-italy-temple-d58ee47?lang=eng" },
  { templeName: "Paris France", location: "Paris, France", dedicated: "2017-05-21", area: 44175, imageUrl: "https://churchofjesuschristtemples.org/paris-france-temple/photographs/paris-france-temple-50.jpeg" },
  { templeName: "Sydney Australia", location: "Sydney, Australia", dedicated: "1984-09-20", area: 30067, imageUrl: "https://churchofjesuschristtemples.org/sydney-australia-temple/photographs/sydney-australia-temple-06.jpeg" }
];

function displayTemples(array) {
  const gallery = document.getElementById("temple-cards");
  gallery.innerHTML = "";

  array.forEach(temple => {
    const card = document.createElement("section");
    card.className = "card";
    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${new Date(temple.dedicated).toLocaleDateString()}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    gallery.appendChild(card);
  });
}

function filterTemples(filter) {
  let filtered = temples;
  if (filter === "old") filtered = temples.filter(t => new Date(t.dedicated) < new Date("1900-01-01"));
  if (filter === "new") filtered = temples.filter(t => new Date(t.dedicated) > new Date("2000-01-01"));
  if (filter === "large") filtered = temples.filter(t => t.area > 90000);
  if (filter === "small") filtered = temples.filter(t => t.area < 10000);
  displayTemples(filtered);
}

function setupFilters() {
  document.querySelectorAll("#nav-links a").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      filterTemples(link.dataset.filter);
    });
  });
}

function setupHamburger() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-links");
  hamburger.addEventListener("click", () => navMenu.classList.toggle("show"));
}

document.addEventListener("DOMContentLoaded", () => {
  displayTemples(temples);
  setupFilters();
  setupHamburger();
});
