const user = {
    email: "blabla@sbu.edu", //create and set email property
    IDnumber: "#12345",		//create and set the Idnumber property
    showAccess: true,

    set accountInfo(value) {	//Setter method to change values of email and ID
        [this.email, this.IDnumber] = value.split(" ");
    },

// defined method in the prototype
    get accountInfo() {
        return `${this.email} ${this.IDnumber}`;
    }
};

// a concrete prototype same as user
const simpeUser = Object.create(user);
// a concrete prototype with options
const premiumUser = Object.create(user, {
  ads: {
      value: false
    },
});

console.log(simpeUser.accountInfo);
console.log(simpeUser.ads);
console.log(premiumUser.accountInfo);
console.log(premiumUser.ads);
