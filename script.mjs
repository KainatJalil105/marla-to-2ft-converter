function convertMarlaToSquareFeet() {
    // Get the value of Marla input
    var marla = parseFloat(document.getElementById("marla").value);
    
    // Conversion factor: 1 Marla is equal to 225 square feet
    var squareFeet = marla * 225;
    
    // Display the result on the screen
    document.getElementById("result").innerHTML = marla + " Marla = " + squareFeet + " Square Feet.";
}