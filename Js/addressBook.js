class AddressBook {

    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }


    get fullName() { return this._fullName; }
    set fullName(fullName) {
        let fullNamePattern = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
        if (fullNamePattern.test(fullName)) {
            this._fullName = fullName;
        }
        else
            throw 'Invalid Name';
    }
    get fullName() {
        return this._fullName;
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let words = address.split(" ");
        if (words.length > 1) {
            let addressRegex = RegExp('^[A-Za-z,.0-9]{3,}$');
            for (let word of words) {
                if (!addressRegex.test(word)) throw "Please enter atleast 3 letters";
                else this._address = address;;
            }
        }
        else throw "Please enter multiple words";
    }
    get mobileNumber() {
        return this._mobileNumber;
    }
    set mobileNumber(phone) {

        let phoneRegex1 = RegExp('^[1-9][0-9]{9}$');
        let phoneRegex2 = RegExp('^[0-9]{2}[1-9][0-9]{9}$');
        let phoneRegex3 = RegExp('^[+][0-9]{2}[1-9][0-9]{9}$');
        if (phoneRegex1.test(phone) || phoneRegex2.test(phone) || phoneRegex3.test(phone)) this._mobileNumber = phone;
        else throw "Phone number is Incorrect";

    }
    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }
    get state() {
        return this._state;
    }
    set state(value) {
        this._state = value;
    }
    get zip() {
        return this._zip;
    }
    set zip(value) {
        this._zip = value;
    }

    toString() {
        return "fullName " + this._fullName + "mobileNumber " + this._mobileNumber + "address " + this._address + " city " +
            this.city + "state " + this.state + "zip " + this.zip;
    }
}