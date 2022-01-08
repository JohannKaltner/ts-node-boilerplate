import { generateAccessToken } from '../../middlewares/auth';
import user from '../../models/userModels'

export const authenticateUser = function (req, res) {
    const test = req.body;
    user.authenticate(test.email, test.password, function (err, user) {
        console.log(err, user)
        if (err) res.send(err);
        if (user && !user.error) {
            res.json({
                error: false,
                message: "Successfully submitted!!",
                token: generateAccessToken(user)
                // {
                //     firstName: user[0].firstName,
                //     lastName: user[0].lastName,
                //     other: {
                //         id: user[0].id,
                //         street: user[0].street,
                //         number: user[0].number,
                //         district: user[0].district,
                //         city: user[0].city,
                //         phone: user[0].phone,
                //         gender: user[0].gender,
                //         state: user[0].state
                //     }
                // },
            });
        } else {
            res.status(400)
            res.json({ error: true })
        }
    });
}