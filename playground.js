const jwt = require('jsonwebtoken')

const user = {
    id: '20',
    name: 'João',
    username: 'joao@gmail.com',
    password: '1234567'
}

const secret = 'fosdfjidsiojfsdiojfsdjioji'
// with the expiresIn, you can set a time to the token expire.
const token = jwt.sign({ id: user.id, username: user.name }, secret, { expiresIn: 20 })

console.log(token)

// const geratedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJKb8OjbyIsImlhdCI6MTY4ODA3NjYwNH0.6HAJTW6LI70uc-0iofIcpUDwzvA_RyhbVVH4rphCH2k'

// const validUser = jwt.verify(geratedToken, secret)

console.log(validUser)