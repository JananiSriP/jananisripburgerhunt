// Add event listener to the form
document.getElementById('signupForm').addEventListener('submit', function (event) {
  // Prevent form submission
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  const message = document.getElementById('message').value;

  // Display the submitted details above the form
  document.getElementById('detailsDisplay').style.display = 'block';
  document.getElementById('displayName').textContent = name;
  document.getElementById('displayEmail').textContent = email;
  document.getElementById('displayPhone').textContent = phone;
  document.getElementById('displayDate').textContent = date;
  document.getElementById('displayTime').textContent = time;
  document.getElementById('displayMessage').textContent = message;

  // Clear the form inputs
  document.getElementById('signupForm').reset();
});
function handleSubmit(event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const message = document.getElementById("message").value;

  // Display values in popup
  document.getElementById("popupName").innerText = name;
  document.getElementById("popupEmail").innerText = email;
  document.getElementById("popupPhone").innerText = phone;
  document.getElementById("popupDate").innerText = date;
  document.getElementById("popupTime").innerText = time;
  document.getElementById("popupMessage").innerText = message;

  // Show popup
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  // Hide popup
  document.getElementById("popup").classList.add("hidden");
}
document.addEventListener("DOMContentLoaded", () => {
  const buyNowButton = document.querySelector('.buy-now');
  const modal = document.getElementById('productModal');
  const closeModal = document.querySelector('.close');

  // Show the modal when "Buy Now" is clicked
  buyNowButton.addEventListener('click', () => {
    modal.style.display = 'flex';
  });

  // Hide the modal when the close button is clicked
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Hide the modal when clicking outside the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
