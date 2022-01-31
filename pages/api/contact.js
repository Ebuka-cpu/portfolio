// import nodemailer from "nodemailer"

// export default async function handler(req, res) {
//   const {name, phone, email, subject, message} = req.body
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: "ebukafelixanyaegbu@gmail.com", // generated ethereal user
//       pass: "xbetmhlbhbpmakhe", // generated ethereal password
//     },
//   });

//     // send mail with defined transport object
//   try {
//     const info = await transporter.sendMail({
//       from: email,
//       to: 'ebukafelixanyaegbu@gmail.com',
//       subject: `contact form submission from ${name}`,
//       html: `<p>You have a new form submission</p><br>
//       <p><strong>Name:</strong> ${name}</p></br>
//       <p><strong>Email:</strong> ${email}</p></br>
//       <p><strong>Phone:</strong> ${phone}</p></br>
//       <p><strong>Subject:</strong> ${subject}</p></br>
//       <p><strong>Message:</strong>${message }</p></br> `
//     })
//     console.log("message sent", info.messageId)
//   } catch (err) {
//     console.log(err)
//   }
// }



// // export default async (req, res) => {
// //   const {name, phone, email, subject, message} = req.body
// //   const transporter = nodemailer.createTransport({
// //     host: "smtp.gmail.com",
// //     port: 465,
// //     secure: true, // true for 465, false for other ports
// //     auth: {
// //       user: "ebukafelixanyaegbu@gmail.com", // generated ethereal user
// //       pass: "xbetmhlbhbpmakhe", // generated ethereal password
// //     },
// //   });

// //     // send mail with defined transport object
// //   try {
// //     const info = await transporter.sendMail({
// //       from: email,
// //       to: 'ebukafelixanyaegbu@gmail.com',
// //       subject: `contact form submission from ${name}`,
// //       html: `<p>You have a new form submission</p><br>
// //       <p><strong>Name:</strong> ${name}</p></br>
// //       <p><strong>Email:</strong> ${email}</p></br>
// //       <p><strong>Phone:</strong> ${phone}</p></br>
// //       <p><strong>Subject:</strong> ${subject}</p></br>
// //       <p><strong>Message:</strong>${message }</p></br> `
// //     })
// //     console.log("message sent", info.messageId)
// //   } catch (err) {
// //     console.log(err)
// //   }

// //   // // send mail with defined transport object
// //   // let info = await  transporter.sendMail({
// //   //   from: '"Fred Foo 👻" <foo@example.com>', // sender address
// //   //   to: "bar@example.com, baz@example.com", // list of receivers
// //   //   subject: "Hello ✔", // Subject line
// //   //   text: "Hello world?", // plain text body
// //   //   html: "<b>Hello world?</b>", // html body
// //   // });

// // //   console.log("Message sent: %s", info.messageId);
// // //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

// // //   // Preview only available when sending through an Ethereal account
// // //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
// // //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// // // }

// // // main().catch(console.error);
// // //   res.status(200).json(req.body)
// // //   console.log(req.body)
// //  }


