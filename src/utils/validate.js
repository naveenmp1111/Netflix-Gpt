export const checkValidData=(email,password,name)=>{
    const checkEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const checkPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const checkName=/([a-zA-Z0-9_\s]+)/.test(name)

    // if( !checkName)return 'Invalid name'
    if( !checkEmail)return 'Invalid email'
    if( !checkPassword)return 'Invalid Password'
    

    return null
}

