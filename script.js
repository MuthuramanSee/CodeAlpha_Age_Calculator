document.getElementById('ageCalculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const dob = new Date(document.getElementById('dob').value);
    const now = new Date();

    let age = now.getFullYear() - dob.getFullYear();
    const monthDiff = now.getMonth() - dob.getMonth();
    const dayDiff = now.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    document.getElementById('age').textContent = age;
});
