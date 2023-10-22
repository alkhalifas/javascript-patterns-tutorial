class User {
    constructor(email, id, access) {
        this.email = email;
        this.id = id;
        this.showAccess = access;
    }

    set accountInfo(value) {	//Setter method to change values of email and ID
        [this.email, this.id] = value.split(" ");
    }

    get accountInfo() {
        return `${this.email} ${this.id}`;
    }

    Clone() {}
}

class SimpleUser extends {

}