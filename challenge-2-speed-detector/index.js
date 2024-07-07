function detectSpeed() {
    const userInput = prompt("Enter the speed of the car (in km/h):");
    const speed = parseFloat(userInput);

    if (isNaN(speed) || speed < 0) {
        alert("Invalid input. Please enter a valid speed.");
        return;
    }

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        alert("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        alert(`Total demerit points: ${demeritPoints}`);
    }
}
