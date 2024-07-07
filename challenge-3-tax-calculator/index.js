function calculateNetSalary() {
    // Get user input for basic salary and benefits
    const basicSalary = parseFloat(document.getElementById('basicSalary').value);
    const benefits = parseFloat(document.getElementById('benefits').value);

    // Validate input
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        alert("Please enter valid positive numbers for salary and benefits.");
        return;
    }

    // Constants
    const KRA_TAX_RATES = [
        { min: 0, max: 24000, rate: 0.1 },
        { min: 24000, max: 100000, rate: 0.25 },
        { min: 100000, max: 5612000, rate: 0.3 },
        { min: 5612000, max: 8000000, rate: 0.325 },
        { min: 8000000, rate: 0.35 }
    ];
    const NHIF_RATE = 2.75 / 100;
    const NSSF_RATE = 6 / 100;

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate payee (tax)
    let payee = 0;
    let remainingSalary = grossSalary;
    for (const rate of KRA_TAX_RATES) {
        if (remainingSalary > rate.min) {
            const taxableAmount = Math.min(remainingSalary, rate.max ? rate.max : remainingSalary) - rate.min;
            payee += taxableAmount * rate.rate;
        }
    }

    // Calculate NHIF and NSSF deductions
    const nhifDeduction = grossSalary * NHIF_RATE;
    const nssfDeduction = grossSalary * NSSF_RATE;

    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;

    // Display results
    document.getElementById('results').innerHTML = `
        <p>Gross Salary: ${grossSalary.toFixed(2)}</p>
        <p>Payee (Tax): ${payee.toFixed(2)}</p>
        <p>NHIF Deduction: ${nhifDeduction.toFixed(2)}</p>
        <p>NSSF Deduction: ${nssfDeduction.toFixed(2)}</p>
        <p><strong>Net Salary: ${netSalary.toFixed(2)}</strong></p>
    `;
}
