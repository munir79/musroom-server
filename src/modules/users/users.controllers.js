import { UserService } from "./users.service.js"


const CreateUsersControllers=async(req, res, next)=>{

   try{
     const payLoad=req.body;
    const result =await UserService.createUserIntoDb(payLoad);

    res.status(201).json({
        success:true,
        message:"User created Sucessfully",
        data:result
    })
   }
   catch(err){
    next(err)
   }
}


const loginControllers=async(req, res, next)=>{
    try{
    const payLoad=req.body;
    const user=await UserService.loginUser(payLoad);
    res.status(200).json({
        success:true,
        message:"Log in successfullly",
        data:user
    })
    }
    catch(err){
        next(err)
    }
}


export const UserControllers={CreateUsersControllers,loginControllers}