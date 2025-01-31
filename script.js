function onesDigit(n) {
  // your code here
	let lastDigit = parseInt(n/10);
	
	return lastDigit;
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
