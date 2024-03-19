const Login = require('./Loginclasspractice1.js')

const newLogin = new Login('Aaniq', 'Aaniq123', 'Paswword123')
const newLogin1 = new Login('Usman', 'Usman123', 'Pasword123')
const newLogin2 = new Login('Antor', 'Antor123', 'Paswword123')

console.log(newLogin2.getLogin().password);



console.log('Before adding new sign ups to NewSignUp ARRAY')
console.log(newSignup) //Will equal to empty array

//ADDING TO ARRAY

const signupLogin = new Login (name1, username, password)

signupLogin.GetNewSignup('Hammas', 'Hammas123', 'Hammaspassword1')
signupLogin.GetNewSignup('Waseem', 'Waseem123', 'waseempassword1')
signupLogin.GetNewSignup('Zayan', 'Zayan123', 'zayanpassword1')
signupLogin.GetNewSignup('Burhan', 'Burhan123', 'Burhanpassword1')

console.log(signupLogin.GetNewSignup());
console.log(signupLogin.GetNewSignup()[2]);


for (let i = 1; i < GetNewSignup.length; i++){
    console.log(signupLogin.GetNewSignup()[i]);

}