 function calculateLovePercentage(name1, name2) {
    // The JavaScript algorithm provided previously goes here.
    // Combine the names with "LOVE" in the middle
    const combinedString = name1.toUpperCase() + "LOVE" + name2.toUpperCase();
    
    // Create an array to store the count of each letter
    const letterCounts = [];
    
    // A set to keep track of counted letters
    const countedLetters = new Set();
    
    // Count the occurrences of each letter and add to the letterCounts array
    for (let char of combinedString) {
      if (!countedLetters.has(char)) {
        const count = combinedString.split(char).length - 1;
        letterCounts.push(count);
        countedLetters.add(char);
      }
    }
    
    // Reduce the letterCounts array until it has only 2 digits
    while (letterCounts.length > 2) {
      const tempArray = [];
      for (let i = 0, j = letterCounts.length - 1; i <= j; i++, j--) {
        if (i === j) {
          // If it's the middle element in an array with odd length
          tempArray.push(letterCounts[i]);
        } else {
          // Sum the first and last, second and second-last, etc.
          tempArray.push((letterCounts[i] + letterCounts[j]) % 10);
        }
      }
      letterCounts.splice(0, letterCounts.length, ...tempArray); // Replace the contents of letterCounts with tempArray
    }
    
    // Combine the last two digits to get the percentage
    return parseInt(letterCounts.join('')) + "%";
  }
  
  // New function to handle the button click
  function calculate() {
      const name1 = document.getElementById('name1').value;
      const name2 = document.getElementById('name2').value;
      const result = calculateLovePercentage(name1, name2);
      document.getElementById('result').textContent = `${result}`;
  }
  

  // toggle paragraph.. 
  function toggleText() {
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("toggleButton");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.textContent = "Show Less";
    } else {
        moreText.style.display = "none";
        btnText.textContent = "Show More";
    }
}
