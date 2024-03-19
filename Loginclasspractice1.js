
newSignup = []


class Login {
    constructor (name1, username, password) {
        console.log('RAMADAN')
        this.username = username
        this.password = password
        this.name1 = name1
    }
    getLogin() {
        return {name1: this.name1, username: this.username, password: this.password}
    }
       
    
    Signup(name1, username, password){
        
        newSignup.push(name1, username, password)
    }

    GetNewSignup(){
        return newSignup
    }
}
   
    
module.exports = Login;