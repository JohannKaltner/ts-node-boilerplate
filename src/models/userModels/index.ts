import connection from '../../config/connection'
import { IUser } from "./user.types";

const user = function (user: IUser) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.street = user.street;
    this.number = user.number;
    this.city = user.city;
    this.district = user.district;
    this.state = user.state;
    this.birthDate = user.birthDate;
    this.gender = user.gender;
    this.createdAt = `${new Date}`
    this.updatedAt = `${new Date}`
    this.password = user.password;
    this.phone = user.phone;
    this.facebook_id = user.facebook_id;
}



user.authenticate = function (email: IUser["email"], password: IUser['password'], result: any) {
    connection.query(`Select * from users WHERE email = ? AND password = ?`, [email, password], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("success:", res)
            result(null, res);
        }
    });
};


user.create = function (newUser: IUser, result) {
    connection.query("INSERT INTO users set ?", newUser, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

export default user