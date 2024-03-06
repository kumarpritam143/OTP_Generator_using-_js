function generateOTP() {
    let OTP = "";
    let digits = "123456789";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 9)]; // Adjusted to generate digits 1-9
    }
    return OTP;
  }

  function generateAndDisplayNumericOTP() {
    const generatedOTP = generateOTP();
    const displayElement = document.getElementById('otp-display');
    displayElement.innerText = `${generatedOTP} is your one-time password`;
  }