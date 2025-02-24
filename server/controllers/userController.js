
import Course from "../models/Course.js"
import Purchase from "../models/purchase.js"
import User from "../models/User.js"
import Stripe from "stripe"



export const getUserData = async (req, res) => {
    try {
        const userId = req.auth.userId
        const user = await User.findById(userId)
        if (!user) {
            return res.json({success:false, message: 'User not found' })
        }
        res.json({success: true, data: user })
    } catch (error) {
        res.json({success: false, message: error.message })
    }
}


//User enrolled coursses with lecture links

export const UserEnrolledCourses = async (req, res) => {
    try {
        const userId = req.auth.userId
        const userData = await User.findById(userId).populate('enrolledCourses')

        res.json({ success: true, enrolledCourses: userData.enrolledCourses });
       
    } catch (error) {
        res.json({success: false, message: error.message })
    }
}

//purchase Courses

export const purchasedCourse = async (req, res) => {

    try {
        const { courseId } = req.body
        const {orgin} = req.headers
        const userId = req.auth.userId
        const userData = await User.findById(userId)
        const courseData = await Course.findById(courseId)
        
        if (!userData || !courseData) {
            return res.json({ success: false, message: 'User not found' })
        }

        const purchaseData ={
            courseId: courseData._id,
            userId,
            amount: (courseData.coursePrice - courseData. discount * courseData. coursePrice /100).toFixed(2),
           
        }

        const newPurchase = await Purchase.create(purchaseData)


        //Stripe Gatway Initialize
        const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
        const currency = process.env.CURRENCY.toLowerCase()

        //create line items to for Stripe

        const line_items = [
            {
                price_data: {
                    currency,
                    product_data: {
                        name: courseData.courseTitle,
                    },
                    unit_amount: Math.floor(newPurchase.amount) * 100,
                },
                quantity: 1,
            },
        ];
        const session = await stripeInstance.checkout.sessions.create({
          
            success_url: `${orgin}/loading/my-enrollments`,
            cancel_url: `${orgin}/`,
            line_items :line_items,
            mode: 'payment',
            metadata: { purchaseId: newPurchase._id.toString() },

        })
        res.json({ success: true, session_url: session.url })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}