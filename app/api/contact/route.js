import {NextResponse} from 'next/server'
import {mailOptions, transporter} from '@/config/nodemailer'

export async function POST(request) {
    return new NextResponse(console.log(new Headers(request.body)))
    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: request.body.subject,
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({error})
    }

}