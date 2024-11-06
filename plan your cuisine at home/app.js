// Mock menu data
const menuData = [
  { name: "Spaghetti Carbonara", price: "$12", description: "Classic Italian pasta." },
  { name: "Margherita Pizza", price: "$10", description: "Fresh tomato and mozzarella." },
  { name: "Caesar Salad", price: "$8", description: "Crisp romaine with Caesar dressing." }
];

// Load menu items dynamically
function loadMenu() {
  const menuContainer = document.getElementById('menu-items');
  menuData.forEach(item => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      menuItem.innerHTML = `<h3>${item.name}</h3><p>${item.description}</p><p>${item.price}</p>`;
      menuContainer.appendChild(menuItem);
  });
}

// Save reservation to localStorage
function saveReservation(name, phone) {
  const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  reservations.push({ name, phone, date: new Date().toLocaleString() });
  localStorage.setItem('reservations', JSON.stringify(reservations));
  displayReservations();
}

// Display reservations
function displayReservations() {
  const reservationList = document.getElementById('reservation-list');
  reservationList.innerHTML = ''; // Clear existing reservations
  const reservations = JSON.parse(localStorage.getItem('reservations')) || [];
  reservations.forEach(res => {
      const reservationItem = document.createElement('div');
      reservationItem.classList.add('reservation-item');
      reservationItem.innerHTML = `<strong>${res.name}</strong> - ${res.phone} <em>${res.date}</em>`;
      reservationList.appendChild(reservationItem);
  });
}

// Handle reservation form submit
document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('res-name').value;
  const phone = document.getElementById('res-phone').value;
  saveReservation(name, phone);
  alert("Reservation submitted successfully!");
  document.getElementById('reservation-form').reset();
});

// Save review to localStorage
function saveReview(name, review) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push({ name, review, date: new Date().toLocaleString() });
  localStorage.setItem('reviews', JSON.stringify(reviews));
  displayReviews();
}

// Display reviews
function displayReviews() {
  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = ''; // Clear existing reviews
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.forEach(rev => {
      const reviewItem = document.createElement('div');
      reviewItem.classList.add('review-item');
      reviewItem.innerHTML = `<strong>${rev.name}</strong> <em>${rev.date}</em><p>${rev.review}</p>`;
      reviewList.appendChild(reviewItem);
  });
}

// Handle review form submit
document.getElementById('review-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('reviewer-name').value;
  const review = document.getElementById('review-text').value;
  saveReview(name, review);
  alert("Review submitted successfully!");
  document.getElementById('review-form').reset();
});

// Load menu, reservations, and reviews on page load
document.addEventListener('DOMContentLoaded', () => {
  loadMenu();
  displayReservations();
  displayReviews();
});
