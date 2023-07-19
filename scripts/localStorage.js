const orderDisplay = document.getElementById("orderCount");

if (orderDisplay !== null) {
    const localOrderCount = parseInt(window.localStorage.getItem("orderTally1"));
    orderDisplay.textContent = localOrderCount;
}