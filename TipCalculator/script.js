const billAmount = document.getElementById("bill-amount");
const tax = document.getElementById("tax");
const tip = document.getElementById("tip");
const noOfPeople = document.getElementById("no-of-people");
const individualShare = document.getElementById("each-share");
const total = document.getElementById("total");

const calculate = () => {
  const billAmt = Number(billAmount.value);
  const people = Number(noOfPeople.value);

  const taxAmt = billAmt * 0.12;
  const tipAmt = billAmt * 0.05;
  const totalAmt = billAmt + taxAmt + tipAmt;
  const eachShare = totalAmt / people;

  tax.innerText = taxAmt;
  tip.innerText = tipAmt;
  total.innerText = totalAmt;
  individualShare.innerText = eachShare;
}