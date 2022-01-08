import * as jwt from 'jsonwebtoken'
import { IUser } from '../models/userModels/user.types';

export const generateAccessToken = (user: IUser) => jwt.sign({ user }, process.env.JSON_SECRET, { expiresIn: '1800s' });


export const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader
    console.log(req.headers)
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JSON_SECRET as string, (err: any, user: any) => {
        console.log(err)

        if (err) return res.sendStatus(403)

        req.user = user

        next()
    })
}
