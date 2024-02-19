function getTotalSeatById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const seatno = parseInt(elementValueText);
  return seatno;
}
function setTotalSeatById(elementId, seatno) {
  const element = document.getElementById(elementId);
  element.innerText = seatno;
}

function getTotalSelectedSeatById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const seatno = parseInt(elementValueText);
  return seatno;
}
function setTotalSelectedSeatById(elementId, seatno) {
  const element = document.getElementById(elementId);
  element.innerText = seatno;
}

const seats = document.querySelectorAll(".kbd");

function applyCoupon() {
  const couponInput = document.querySelector('input[name="coupon"]');

  const totalPrice = getTotalPriceById("totalPrice");
  let discountPrice = 0;
  const grandTotalElement = getGrandTotalPriceById("grandTotal");
  console.log(totalPrice);
  const couponValue = couponInput.value.trim();
  if (couponValue === "NEW15") {
    discountPrice = totalPrice * 0.15;
    const element = document.getElementById("applycupon");
    element.classList.add("hidden");
  } else if (couponValue === "Couple 20") {
    discountPrice = totalPrice * 0.2;
    const element = document.getElementById("applycupon");
    element.classList.add("hidden");
  } else {
    alert("Invalid Coupon ! Enter The Valid Coupon");
  }

  const grandTotal = totalPrice - discountPrice;
  const grandTotalPrice = parseInt(grandTotal).toFixed(2);
  setGrandTotalPriceById("grandTotal", grandTotalPrice);
}

const perSeatPrice = 550;
let selectedSeats = 0;
const selectedSeatcheck = [];

seats.forEach((seat) => {
  const seatId = seat.getAttribute("id");
  console.log(seatId);

  seat.addEventListener("click", () => {
    seat.classList.toggle("selected");
    seat.classList.add("selected");

    if (selectedSeats >= 4) {
      alert("You can only select up to 4 seats.");
      return;
    }

    if (seat.classList.contains("selected")) {
      const selectedSeat = seat.id;
      const totalSeat = getTotalSeatById("totalseat_number");

      const currentSeatNum = totalSeat - 1;
      setTotalSeatById("totalseat_number", currentSeatNum);

      const totalSelectedSeat = getTotalSelectedSeatById("selected_seat");
      console.log(totalSelectedSeat);
      const updatedSelectedSeat = totalSelectedSeat + 1;

      // Check if the seat is already selected

      if (selectedSeatcheck.includes(selectedSeat)) {
        alert("Seat is already selected. Please choose another seat.");
        seat.classList.remove("selected");
        updatedSelectedSeat = updatedSelectedSeat - 1;
        return;
      }
      setTotalSelectedSeatById("selected_seat", updatedSelectedSeat);
      selectedSeatcheck.push(selectedSeat);
      console.log(selectedSeatcheck);

      let totalPrice = getTotalPriceById("totalPrice");
      let currentTotalPrice = totalPrice;
      setBackgroundColorById(selectedSeat);
      selectSeat(selectedSeat);
      currentTotalPrice = currentTotalPrice + perSeatPrice;
      setTotalPriceById("totalPrice", currentTotalPrice);
      setGrandTotalPriceById("grandTotal", currentTotalPrice);

    } else {
      console.log("Deselected seat:", seat.id);
    }

    selectedSeats++;
  });
});

function appendPassengerRow(seat, seatClass, price) {
  // Create a new table row
  console.log("The Seat", seat);
  const newRow = document.createElement("tr");

  // Create and append table cells
  const seatCell = document.createElement("td");
  seatCell.textContent = seat.toUpperCase();
  newRow.appendChild(seatCell);

  const classCell = document.createElement("td");
  classCell.textContent = seatClass;
  newRow.appendChild(classCell);

  const priceCell = document.createElement("td");
  priceCell.textContent = price;
  newRow.appendChild(priceCell);

  // Append the new row to the table body
  const tableBody = document.querySelector("#passengersTable tbody");
  tableBody.appendChild(newRow);
}

function selectSeat(seatId) {
  const seat = seatId;
  const seatClass = "Economy";
  const price = 550;

  // Append a new row to the table with the passenger details
  appendPassengerRow(seat, seatClass, price);
}
