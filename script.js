// Get elements from the DOM
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

// Initialize count value
let count = 0;

// Function to update the display
function updateDisplay() {
  countDisplay.textContent = count;
  if (count === 0) {
    countDisplay.style.color = '#00796b'; // neutral color
  } else if (count > 0) {
    countDisplay.style.color = 'green';
  } else {
    countDisplay.style.color = 'red';
  }
}

// Increment button
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

// Decrement button (won’t go below zero)
decrementBtn.addEventListener('click', () => {
  if (count > 0) {
    count--;
    updateDisplay();
  } else {
    alert("Count cannot go below zero!");
  }
});

// Reset button
resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

// Initial display update
updateDisplay();
