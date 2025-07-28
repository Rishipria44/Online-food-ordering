document.getElementById("orderForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const order = {
    name: document.getElementById("name").value,
    foodItem: document.getElementById("foodItem").value,
    quantity: document.getElementById("quantity").value,
    address: document.getElementById("address").value
  };

  const res = await fetch("http://localhost:5000/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
  });

  const data = await res.text();
  alert(data);
  document.getElementById("orderForm").reset();
});