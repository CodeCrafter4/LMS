import  { clerkClient } from '@clerk/express';

//Middleware (protect Educator Route )

export const protecteEducator = async (req, res, next) => {
    try {
        const userId = req.auth.userId
        const response = await clerkClient.users.getUser(userId)
        if (response.publicMetadata.role !== 'educator') {
            return res.json({success:false, message: 'Unautorized Access'})
        } else {

            next()
        }
        
    } catch (err) { 
        return res.json({success: false, message: err.message})
    }
}

