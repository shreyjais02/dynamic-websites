let amountEl = document.getElementById("billAmount");
let percentageEl = document.getElementById("percentageTip");
let tipEl = document.getElementById("tipAmount");
let totalEl = document.getElementById("totalAmount");
let errorEl = document.getElementById("errorMessage");

function calculateTip() {
    let billAmountValue = amountEl.value;
    let percentageTipValue = percentageEl.value;
    if (billAmountValue === "" || percentageTipValue === "") {
        errorEl.textContent = "Please Enter a Valid Input.";
        tipEl.value = "";
        totalEl.value = "";
    } else {
        errorEl.textContent = "";
        let billAmount = parseFloat(billAmountValue);
        let percentageTip = parseFloat(percentageTipValue);

        let calculatedTip = (percentageTip / 100) * billAmount;
        let totalAmount = billAmount + calculatedTip;
        tipEl.value = calculatedTip;
        totalEl.value = totalAmount;
    }
}