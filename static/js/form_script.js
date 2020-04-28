const registerform = document.forms['register-form'];
const email = registerform['email'];
const password = registerform['password'];
const rePassword = registerform['re-password'];
const mobileNumber = registerform['mobileNumber'];
const errorDiv = document.getElementById('error');

function message(msg, e) {
  e.preventDefault();
  errorDiv.innerText = msg;
  errorDiv.style.color = 'red';
}

registerform.addEventListener('submit', (e) => {
  if (!validateEmail(email.value)) {
    message('Enter Valid Email', e);
    return false;
  }
  if (password.value.length < 6) {
    message('Password must be atleast of 6 characters', e);
    return false;
  }
  if (password.value !== rePassword.value) {
    message("Password don't Match", e);
    return false;
  }
  if (!validateNumber(mobileNumber.value)) {
    message('Enter valid Mobile Number',e);
    return false;
  }
});

function validateEmail(email) {
  const re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
function validateNumber(phoneNumber) {
  const re = /^\d{10}$/;
  return re.test(phoneNumber);
}
