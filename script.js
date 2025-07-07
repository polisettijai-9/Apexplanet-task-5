document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const resort = document.getElementById("resort").value;
  const date = document.getElementById("date").value;
  const nights = document.getElementById("nights").value;

  if (name && resort && date && nights) {
    alert(`Thank you, ${name}! Your booking at "${resort}" on ${date} for ${nights} night(s) has been confirmed.`);
    this.reset();
  } else {
    alert("Please fill out all fields.");
  }
});
