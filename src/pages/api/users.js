import dbConnect from "../../utils/dbConnect"
import Usersmodel from '../../models/users'
import { bcrypto } from '../../utils/password'

const users = async (req, res) => {
    const { method } = req
    
    switch(method) {
        case 'GET':
            dbConnect()
            res.status(200).json({ success: true })
            break
        case 'POST':
            // pegar os dados que vem no req
            const {
                name,
                email,
                password,
            } = req.body

            // conectar no banco
            await dbConnect()

            // criptografar a senha (install lib dcript)
            const passwordCrypto = await bcrypto(password)
            // salver no banco
            const user = new Usersmodel({
                name,
                email,
                password: passwordCrypto,
            })
            user.save()
            res.status(200).json({ success: true })

            // respnder sucesso!
    }
}

export default users