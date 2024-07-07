# Wk1-Code-Challenge
# Grade Calculator

This project is a simple web-based Grade Calculator. Users can enter student marks to calculate and display the corresponding grade based on predefined criteria.

## Project Structure

/project-root
├── index.html
├── index.js

### Files

1. **index.html**
    - The main HTML file that provides the structure and layout of the web page.
    - Contains an input field for student marks.
    - Includes a button to trigger the grade calculation.
    - Links to the external CSS and JavaScript files.

2. **index.js**
    - Contains the JavaScript code for the Grade Calculator.
    - Retrieves user input from the HTML form.
    - Validates the input and checks the marks against the grading criteria.
    - Calculates the grade based on the entered marks.
    - Displays the result on the web page.


### How to Use

1. Open the `index.html` file in a web browser.
2. Enter the student's marks in the input field.
3. Click the "Calculate Grade" button.
4. The result, indicating the student's grade, will be displayed on the web page.

### Example

1. Enter `85` for the student's marks.
2. Click "Calculate Grade".
3. The calculated result will be displayed on the page, showing the grade as "A".

### Grading Criteria

- Marks > 79: Grade A
- Marks >= 60 and <= 79: Grade B
- Marks >= 50 and <= 59: Grade C
- Marks >= 40 and <= 49: Grade D
- Marks < 40: Grade E

### Note

- Ensure the input value is a number between 0 and 100.
- The calculator will display an error message for invalid inputs.

# Speed Detector

This project is a simple web-based Speed Detector. Users can enter the speed of a car to check if it is within the speed limit or calculate the number of demerit points if it exceeds the limit.

## Project Structure

/project-root
├── index.html
├── index.js

### Files

1. **index.html**
    - The main HTML file that provides the structure and layout of the web page.
    - Contains an input field for the car's speed.
    - Includes a button to trigger the speed check.
    - Links to the external CSS and JavaScript files.

2. **index.js**
    - Contains the JavaScript code for the Speed Detector.
    - Retrieves user input from the HTML form.
    - Validates the input and checks the speed against the speed limit.
    - Calculates demerit points if the speed exceeds the limit.
    - Displays the result on the web page.

### How to Use

1. Open the `index.html` file in a web browser.
2. Enter the speed of the car in the input field.
3. Click the "Check Speed" button.
4. The result, indicating whether the speed is "Ok" or showing the total number of demerit points, will be displayed on the web page.

### Example

1. Enter `80` for the car's speed.
2. Click "Check Speed".
3. The calculated result will be displayed on the page, showing the total number of demerit points if applicable.

### Note

- Ensure the input value is a positive number.
- The speed limit is set to 70 km/h.
- For every 5 km/h above the speed limit, one demerit point is added.

# Net Salary Calculator

This project is a simple web-based Net Salary Calculator. Users can enter their basic salary and benefits to calculate their net salary after deductions for taxes, NHIF, and NSSF.

## Project Structure

/project-root
├── index.html
├── index.js
└── style.css

### Files

1. **index.html**
    - The main HTML file that provides the structure and layout of the web page.
    - Contains input fields for the basic salary and benefits.
    - Includes a button to trigger the salary calculation.
    - Links to the external CSS and JavaScript files.

2. **index.js**
    - Contains the JavaScript code for the Net Salary Calculator.
    - Retrieves user input from the HTML form.
    - Validates the input and performs the necessary calculations for gross salary, tax (payee), NHIF, and NSSF deductions.
    - Displays the calculated net salary and deductions on the web page.

3. **style.css**
    - Contains the CSS styles for the web page.
    - Styles the body, container, input fields, button, and results to create a clean and user-friendly interface.

### How to Use

1. Open the `index.html` file in a web browser.
2. Enter your basic salary and benefits in the respective input fields.
3. Click the "Calculate Net Salary" button.
4. The results, including the gross salary, payee (tax), NHIF deduction, NSSF deduction, and net salary, will be displayed on the web page.

### Example

1. Enter `50000` for the basic salary.
2. Enter `10000` for the benefits.
3. Click "Calculate Net Salary".
4. The calculated results will be displayed on the page.

### Note

- Ensure all input values are positive numbers.
- The calculations are based on predefined tax rates, NHIF rate, and NSSF rate as constants in the `index.js` file.

