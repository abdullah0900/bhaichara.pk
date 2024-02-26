import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'Abdullah Younas',
        email : 'Abdullahyounas540@gmail.com',
        password : bcrypt.hashSync('11111111',18),
        isAdmin : true
    }
    
    
]
export default Users