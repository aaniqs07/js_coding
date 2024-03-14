class Login {
    constructor (Name1, Username, Password)
        this.Username = Username
        this.Password = Password
        this.Name1 = this.Name1
    }

    GetLogin() {
        return {Name1: this.Name1, Username: this.Username, Password: this.Password}
    }
    
module.exports = Login;