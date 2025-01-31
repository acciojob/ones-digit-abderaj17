function onesDigit(n) {
  // your code here
	let lastDigit = n%10;
	
	return lastDigit;  
	
}
 
// Do not change the code below 

const n = prompt("Enter Number:");
alert(onesDigit(n));
