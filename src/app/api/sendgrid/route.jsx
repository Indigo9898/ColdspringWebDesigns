import { NextResponse } from 'next/server'

export async function POST(req, res){
    const body = await req.json()
    
  
    const nodemailer = require("nodemailer");
  
    let mailTransporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adyer1717@gmail.com",
        pass: "zpxhahtzggtsudvl",
      },
    });
  
    let mailDetails = {
      from: "adyer1717@gmail.com",
      to: "adyer1717@gmail.com",
      subject: "Portfolio Inquiry",
      text: body.email + ", " + body.phone + ", " + body.name + ", " + body.business + ", " + body.message
    }; 
  
    mailTransporter.sendMail(mailDetails, function (err, data) {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent successfully");
      }
    });

    return NextResponse.json({ body }, {status: 200})
  }
  