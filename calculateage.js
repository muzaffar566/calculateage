function calculateAge(birthYear, currentYear) {
    // Try to convert inputs to numbers
    const birth = Number(birthYear);
    const current = Number(currentYear);
  
    // Check for invalid numbers
    if (isNaN(birth) || isNaN(current)) {
      return "Invalid input. Please enter valid years.";
    }
  
    const age = current - birth;
  
    // Handle negative ages
    if (age < 0) {
      return "Current year must be greater than or equal to birth year.";
    }
  
    return `You are ${age} years old.`;
  }
  