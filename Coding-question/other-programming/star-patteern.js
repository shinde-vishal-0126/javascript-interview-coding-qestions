function rightTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = ""; // Initialize an empty string
        for (let j = 1; j <= i; j++) { 
            str += "*"; // Append '*' manually
        }
        console.log(str); // Print the row
    }
}

rightTriangle(6);



function leftTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let str = ""; // Initialize empty string
        
        // Print spaces
        for (let j = 1; j <= rows - i; j++) {
            str += " ";
        }

        // Print stars
        for (let k = 1; k <= i; k++) {
            str += "*";
        }

        console.log(str); // Print the row
    }
}

leftTriangle(6);
