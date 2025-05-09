const BaseModel = require("./base.model");

class User extends BaseModel {
    constructor({ name, email, phone, gender, dob, password }) {
        super('users'); // Pass the table name to the BaseModel
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.gender = gender;
        this.dob = dob;
        // Removed the username property as it's not in the constructor parameters
    }

    // Add these methods to fix the controller usage
    static findOne(criteria) {
        const userModel = new User({});
        return new Promise((resolve, reject) => {
            userModel.find(criteria)
                .then(results => {
                    resolve(results.length > 0 ? results[0] : null);
                })
                .catch(err => reject(err));
        });
    }
}

module.exports = User;
