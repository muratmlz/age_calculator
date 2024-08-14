document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const dobInput = document.getElementById('dob');
    const result = document.getElementById('result');
    const ageDisplay = document.getElementById('age');

    calculateBtn.addEventListener('click', () => {
        const dob = new Date(dobInput.value);
        const today = new Date();

        if (dob.toString() === 'Invalid Date') {
            alert('Παρακαλώ εισάγετε μια έγκυρη ημερομηνία.');
            return;
        }

        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        ageDisplay.textContent = `${age} έτη`;
        result.style.display = 'block';
    });
});