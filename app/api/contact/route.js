import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields." }),
        { status: 400 }
      );
    }

    // Create reusable transporter using custom SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. "mail.yourdomain.com"
      port: process.env.SMTP_PORT || 465,
      secure: true, // true for 465, false for 587 or STARTTLS
      auth: {
        user: process.env.SMTP_USER, // e.g. "contact@yourdomain.com"
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER, // fallback
      replyTo: email,
      subject: `📬 New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Message:</strong></p>
          <div style="background:#f9f9f9;padding:10px;border-radius:6px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending mail:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Failed to send message. Please try again later.",
      }),
      { status: 500 }
    );
  }
}
