const items = document.getElementsByClassName('item');
const totalPriceElement = document.getElementById('total-price');

let totalPrice = 0;

function updateTotalPrice() {
  totalPriceElement.innerText = totalPrice.toFixed(2);
}

Array.from(items).forEach(item => {
  const btnMinus = item.querySelector('.btn-minus');
  const btnPlus = item.querySelector('.btn-plus');
  const btnDelete = item.querySelector('.btn-delete');
  const btnLike = item.querySelector('.btn-like');
  const quantityElement = item.querySelector('.quantity');

  let quantity = 1;
  let liked = false;

  btnMinus.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      totalPrice -= 10; // Replace with the actual price of the item
      updateTotalPrice();
      quantityElement.innerText = quantity;
    }
  });

  btnPlus.addEventListener('click', () => {
    quantity++;
    totalPrice += 10; // Replace with the actual price of the item
    updateTotalPrice();
    quantityElement.innerText = quantity;
  });

  btnDelete.addEventListener('click', () => {
    item.style.display = 'none'; // Hide the item from the cart
    if (liked) {
      // You can add additional functionality to handle liked items removal
    }
    totalPrice -= quantity * 10; // Replace with the actual price of the item
    updateTotalPrice();
  });

  btnLike.addEventListener('click', () => {
    liked = !liked;
    if (liked) {
      btnLike.style.color = 'red';
      // Add functionality to handle liked items
    } else {
      btnLike.style.color = 'black';
      // Add functionality to handle unliked items
    }
  });
});
