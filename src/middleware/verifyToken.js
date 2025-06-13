import jwt from 'jsonwebtoken';
export const VerifyToken=async(req, res, next)=>{
    try{
    const authHeader=req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error( 'Unauthorized access - No token');
    }

    const token = authHeader.split(' ')[1];
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded; // এখানে আমরা user info রেখে দিচ্ছি
        next()



    }
    catch(err){
        next(err)
    }
}