import jwt from 'jsonwebtoken'

const validateJWT = (req, res, next)=>{
const token = req.header('x-access-token')
if(!token){
    res.status(401).json({message:'need to send a token in the request'})
}
try {
    const payload = jwt.verify(token, process.env.SECRET_JWT)
    req.id = payload.id,
    req.name= payload.name,
    req.role= payload.role
} catch  {
    res.status(401).json({message:'Invalid token- authentication failes'})
}
next()
}

export default validateJWT;