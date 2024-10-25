// Data from API
const cartData = {
  original_total_price: 25000,
  items: [
    {
      id: 49839206859071,
      quantity: 1,
      title: "Asgaard sofa",
      price: 25000,
      presentment_price: 25000,
      line_price: 25000,
      image:
        "https://cdn.shopify.com/s/files/1/0883/2188/4479/files/Asgaardsofa3.png?v=1728384481",
    },
  ],
  currency: "INR",
};

// Render Cart Items
const renderCartItems = () => {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Clear existing items

  cartData.items.forEach((item) => {
    cartItemsContainer.innerHTML += `
            <tr>
                <td style="text-align: center;">
                    <img src="${item.image}" alt="${item.title}" width="70px">
                    ${item.title}
                </td>
                <td>Rs. ${item.presentment_price.toLocaleString()}</td>
                <td>
                    <input type="number" value="${
                      item.quantity
                    }" min="1" onchange="updateQuantity(${
      item.id
    }, this.value)">
                </td>
                <td>Rs. ${(
                  item.presentment_price * item.quantity
                ).toLocaleString()}</td>
            </tr>
        `;
  });

  document.getElementById(
    "subtotal"
  ).textContent = `Rs. ${cartData.original_total_price.toLocaleString()}`;
  document.getElementById(
    "total"
  ).textContent = `Rs. ${cartData.original_total_price.toLocaleString()}`;
};

// Update Quantity
const updateQuantity = (itemId, newQuantity) => {
  const item = cartData.items.find((item) => item.id === itemId);
  if (item) {
    item.quantity = parseInt(newQuantity);
    cartData.original_total_price = cartData.items.reduce(
      (total, item) => total + item.presentment_price * item.quantity,
      0
    );
    renderCartItems();
  }
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderCartItems();
});
