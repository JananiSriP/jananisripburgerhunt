// Array of menu items
const menuItems = [
  "Pepperoni Pizza",
  "Margherita Pizza",
  "BBQ Chicken Pizza",
  "Garlic Bread",
  "Cheesy Sticks",
  "Family Meal Deal",
  "Chocolate Lava Cake",
  "Coca-Cola"
];

// Function to search through menu items
function searchMenu() {
  const query = document.getElementById("search").value.toLowerCase(); // Get search input and convert to lowercase
  const results = document.getElementById("results"); // Get the results container
  results.innerHTML = ""; // Clear previous search results

  // Filter menu items based on search query
  const filteredItems = menuItems.filter(item => item.toLowerCase().includes(query));

  // If there are filtered items, display them, otherwise show "No items found"
  if (filteredItems.length > 0) {
    filteredItems.forEach(item => {
      const li = document.createElement("li"); // Create a new list item
      li.textContent = item; // Set the text to the menu item
      results.appendChild(li); // Append the list item to the results
    });
  } else {
    results.innerHTML = "<li>No items found</li>"; // Display message if no results are found
  }
}