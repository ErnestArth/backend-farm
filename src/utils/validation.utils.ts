export const passwordsMatch = (
    password: string,
    repeatPassword: string
  ) => {
    return password == repeatPassword
};


export const generateVerificationCode = (length = 6) => {
  const digits = '0123456789';
  let verificationCode = '';

  for (let i = 0; i < length; i++) {
    verificationCode += digits[Math.floor(Math.random() * digits.length)];
  }

  return verificationCode;
}