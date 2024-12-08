document.getElementById("calculateBtn").addEventListener("click", function() {
    const mortgageAmount = parseFloat(document.getElementById("mortgageAmount").value);
    const mortgageTerm = parseFloat(document.getElementById("mortgageTerm").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100;
    const mortgageType = document.querySelector('input[name="mortgageType"]:checked').id;

    let monthlyRepayment;
    let totalRepayment;

    // If repayment type is selected
    if (mortgageType === "repayment") {
        const monthlyInterestRate = interestRate / 12;
        const numberOfPayments = mortgageTerm * 12;
        monthlyRepayment = mortgageAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
        totalRepayment = monthlyRepayment * numberOfPayments;
    } 
    // If interest-only type is selected
    else if (mortgageType === "interestOnly") {
        const monthlyInterestRate = interestRate / 12;
        monthlyRepayment = mortgageAmount * monthlyInterestRate;
        totalRepayment = monthlyRepayment * mortgageTerm * 12 + mortgageAmount; // Interest payments over term plus principal
    }

    document.getElementById("monthlyRepayments").textContent = monthlyRepayment.toFixed(2);
    document.getElementById("totalRepayments").textContent = totalRepayment.toFixed(2);
});
