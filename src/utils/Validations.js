export function validateNameLast(value) {
    const re = /^[A-Za-z ]+$/;
    return re.test(value);
  }
export function validatePhone(phone) {
    const re = 	/^\d{10}$/;
    return re.test(phone);
  }