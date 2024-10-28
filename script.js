function calculateAge() {
    // Get the day, month, and year values from the input
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value) - 1; // JS months are 0-based
    const year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        document.getElementById("result").innerText = "Please enter a valid date.";
        return;
    }

    // Create a Date object for the entered birth date
    const birthDate = new Date(year, month, day);
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById("result").innerText = `Your age is: ${age} years`;
}
