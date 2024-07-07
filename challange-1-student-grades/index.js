function calculateGrade() {
    const userInput = prompt("Enter student marks (between 0 and 100):");
    const marks = parseFloat(userInput);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input. Please enter a valid mark between 0 and 100.");
        return;
    }

    const grade =
        marks > 79 ? "A" :
        marks >= 60 ? "B" :
        marks >= 50 ? "C" :
        marks >= 40 ? "D" :
        "E";

    alert(`Student grade: ${grade}`);
}
