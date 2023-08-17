// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, phoneNumber, departure, arrival, date, passengers } = req.body;

 

//     // Create a Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//     //   host: 'your-smtp-host',
//     //   port: 587,
//     service: 'gmail',
//       secure: false,
//       auth: {
//         user: 'fulstud@gmail.com',
//         pass: 'udtubejvvgmophch',
//       },
//     });

//     try {
//       // Send the email
//       await transporter.sendMail({
//         from: 'fulstud@gmail.com',
//         to: 'fulstud@gmail.com',
//         subject: 'Flight Booking Request',
//         text: `
//           Name: ${name}
//           Email: ${email}
//           Phone Number: ${phoneNumber}
//           Departure: ${departure}
//           Arrival: ${arrival}
//           Date: ${date}
//           Passengers: ${passengers}
//         `,
//       });

//       // Email sent successfully
//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       // An error occurred while sending the email
//       console.error('Error sending email:', error);
//       res.status(500).json({ message: 'Failed to send email' });
//     }
//   } else {
//     // Invalid HTTP method
//     res.status(405).end();
//   }
// }


export async function GET(request) {
  return new Response('Hello world')
}