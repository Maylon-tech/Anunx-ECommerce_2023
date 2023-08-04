import bcrypt from 'bcrypt'

const bcrypto = async pwd => {
    const salt = await bcrypt.genSalt()

    const password = await bcrypt.hash(pwd, salt)

    return password
}

export {
    bcrypto,
}