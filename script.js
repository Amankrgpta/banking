let balance = 1000;

document.getElementById('depositButton').addEventListener('click', function() {
    const depositAmount = parseFloat(document.getElementById('deposit').value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
        document.getElementById('deposit').value = '';
    } else {
        alert('Please enter a valid deposit amount.');
    }
});

document.getElementById('withdrawButton').addEventListener('click', function() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw').value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        updateBalance();
        document.getElementById('withdraw').value = '';
    } else {
        alert('Please enter a valid withdrawal amount or ensure you have sufficient funds.');
    }
});

function updateBalance() {
    document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
}
