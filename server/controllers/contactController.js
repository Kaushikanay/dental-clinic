import Contact from "../models/Contact.js";
import { Resend } from "resend";

/*
|--------------------------------------------------------------------------
| RESEND CONFIGURATION
|--------------------------------------------------------------------------
*/

const resend = new Resend(process.env.RESEND_API_KEY);

/*
|--------------------------------------------------------------------------
| HTML ESCAPE
|--------------------------------------------------------------------------
*/

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

/*
|--------------------------------------------------------------------------
| SUBMIT CONTACT
|--------------------------------------------------------------------------
*/

const submitContact = async (req, res, next) => {
  try {
    const { name, phone, email, subject, message } = req.body;

    /*
    |--------------------------------------------------------------------------
    | REQUIRED FIELDS
    |--------------------------------------------------------------------------
    */

    if (!name || !phone || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    /*
    |--------------------------------------------------------------------------
    | CLEAN DATA
    |--------------------------------------------------------------------------
    */

    const cleanData = {
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    };

    /*
    |--------------------------------------------------------------------------
    | EMAIL VALIDATION
    |--------------------------------------------------------------------------
    */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanData.email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    /*
    |--------------------------------------------------------------------------
    | PHONE VALIDATION
    |--------------------------------------------------------------------------
    */

    const cleanPhone = cleanData.phone.replace(/\s|-/g, "");

    if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid Indian phone number.",
      });
    }

    /*
    |--------------------------------------------------------------------------
    | SAVE TO MONGODB
    |--------------------------------------------------------------------------
    */

    const contact = await Contact.create(cleanData);

    /*
    |--------------------------------------------------------------------------
    | PREPARE SAFE EMAIL DATA
    |--------------------------------------------------------------------------
    */

    const emailData = {
      name: escapeHtml(cleanData.name),
      phone: escapeHtml(cleanData.phone),
      email: escapeHtml(cleanData.email),
      subject: escapeHtml(cleanData.subject),
      message: escapeHtml(cleanData.message).replace(/\n/g, "<br />"),
    };

    /*
    |--------------------------------------------------------------------------
    | SEND EMAIL WITH RESEND
    |--------------------------------------------------------------------------
    */

    const { data, error } = await resend.emails.send({
      from: "The SmileMax Dental Clinic <onboarding@resend.dev>",

      to: [process.env.ADMIN_EMAIL || "dsmilemax@gmail.com"],

      replyTo: cleanData.email,

      subject: `New Contact Form Submission - ${cleanData.subject}`,

      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>New Contact Form Submission</title>
</head>

<body
  style="
    margin: 0;
    padding: 0;
    background-color: #f4f1f6;
    font-family: Arial, Helvetica, sans-serif;
    color: #33213d;
  "
>
  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="
      background-color: #f4f1f6;
      padding: 40px 15px;
    "
  >
    <tr>
      <td align="center">

        <!-- Main Container -->
        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            max-width: 680px;
            background-color: #ffffff;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(40, 18, 56, 0.10);
          "
        >

          <!-- Header -->
          <tr>
            <td
              style="
                background-color: #281238;
                padding: 32px 36px;
              "
            >
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>

                  <td>
                    <div
                      style="
                        color: #ffffff;
                        font-size: 26px;
                        font-weight: 700;
                        line-height: 1.3;
                      "
                    >
                      The SmileMax
                    </div>

                    <div
                      style="
                        margin-top: 5px;
                        color: #ff8a5c;
                        font-size: 13px;
                        font-weight: 600;
                        letter-spacing: 1.5px;
                        text-transform: uppercase;
                      "
                    >
                      Dental Clinic
                    </div>
                  </td>

                  <td
                    align="right"
                    valign="middle"
                  >
                    <div
                      style="
                        display: inline-block;
                        padding: 9px 14px;
                        border-radius: 30px;
                        background-color: #3b214b;
                        color: #ff8a5c;
                        font-size: 12px;
                        font-weight: 700;
                        letter-spacing: 0.5px;
                      "
                    >
                      NEW ENQUIRY
                    </div>
                  </td>

                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td
              style="
                padding: 34px 36px 20px;
              "
            >
              <div
                style="
                  font-size: 24px;
                  font-weight: 700;
                  color: #281238;
                  margin-bottom: 8px;
                "
              >
                New Contact Form Submission
              </div>

              <div
                style="
                  font-size: 14px;
                  line-height: 1.7;
                  color: #77717c;
                "
              >
                A new enquiry has been submitted
                through
                <strong style="color: #33213d;">
                  The SmileMax Dental Clinic
                </strong>
                website.
              </div>
            </td>
          </tr>

          <!-- Orange Divider -->
          <tr>
            <td style="padding: 0 36px;">
              <div
                style="
                  height: 3px;
                  width: 55px;
                  background-color: #ff6b35;
                  border-radius: 10px;
                "
              ></div>
            </td>
          </tr>

          <!-- Contact Details -->
          <tr>
            <td
              style="
                padding: 28px 36px 10px;
              "
            >
              <div
                style="
                  font-size: 17px;
                  font-weight: 700;
                  color: #281238;
                  margin-bottom: 16px;
                "
              >
                Contact Details
              </div>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >

                <!-- Name -->
                <tr>
                  <td
                    style="
                      padding: 14px 16px;
                      background-color: #faf8fb;
                      border: 1px solid #eee7f1;
                      border-radius: 10px;
                    "
                  >
                    <div
                      style="
                        color: #8a818f;
                        font-size: 11px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.8px;
                        margin-bottom: 5px;
                      "
                    >
                      Name
                    </div>

                    <div
                      style="
                        color: #33213d;
                        font-size: 15px;
                        font-weight: 600;
                      "
                    >
                      ${emailData.name}
                    </div>
                  </td>
                </tr>

                <tr>
                  <td style="height: 10px;"></td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td
                    style="
                      padding: 14px 16px;
                      background-color: #faf8fb;
                      border: 1px solid #eee7f1;
                      border-radius: 10px;
                    "
                  >
                    <div
                      style="
                        color: #8a818f;
                        font-size: 11px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.8px;
                        margin-bottom: 5px;
                      "
                    >
                      Phone
                    </div>

                    <a
                      href="tel:${cleanPhone}"
                      style="
                        color: #281238;
                        font-size: 15px;
                        font-weight: 600;
                        text-decoration: none;
                      "
                    >
                      ${emailData.phone}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="height: 10px;"></td>
                </tr>

                <!-- Email -->
                <tr>
                  <td
                    style="
                      padding: 14px 16px;
                      background-color: #faf8fb;
                      border: 1px solid #eee7f1;
                      border-radius: 10px;
                    "
                  >
                    <div
                      style="
                        color: #8a818f;
                        font-size: 11px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.8px;
                        margin-bottom: 5px;
                      "
                    >
                      Email Address
                    </div>

                    <a
                      href="mailto:${cleanData.email}"
                      style="
                        color: #281238;
                        font-size: 15px;
                        font-weight: 600;
                        text-decoration: none;
                      "
                    >
                      ${emailData.email}
                    </a>
                  </td>
                </tr>

                <tr>
                  <td style="height: 10px;"></td>
                </tr>

                <!-- Subject -->
                <tr>
                  <td
                    style="
                      padding: 14px 16px;
                      background-color: #faf8fb;
                      border: 1px solid #eee7f1;
                      border-radius: 10px;
                    "
                  >
                    <div
                      style="
                        color: #8a818f;
                        font-size: 11px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 0.8px;
                        margin-bottom: 5px;
                      "
                    >
                      Subject
                    </div>

                    <div
                      style="
                        color: #33213d;
                        font-size: 15px;
                        font-weight: 600;
                      "
                    >
                      ${emailData.subject}
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td
              style="
                padding: 28px 36px;
              "
            >
              <div
                style="
                  font-size: 17px;
                  font-weight: 700;
                  color: #281238;
                  margin-bottom: 14px;
                "
              >
                Message
              </div>

              <div
                style="
                  background-color: #faf7fb;
                  border-left: 4px solid #ff6b35;
                  border-radius: 10px;
                  padding: 20px;
                  color: #4d4253;
                  font-size: 14px;
                  line-height: 1.8;
                "
              >
                ${emailData.message}
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td
              align="center"
              style="
                padding: 5px 36px 32px;
              "
            >
              <a
                href="mailto:${cleanData.email}?subject=Re:%20${encodeURIComponent(
                  cleanData.subject,
                )}"
                style="
                  display: inline-block;
                  background-color: #ff6b35;
                  color: #ffffff;
                  text-decoration: none;
                  font-size: 14px;
                  font-weight: 700;
                  padding: 13px 25px;
                  border-radius: 8px;
                "
              >
                Reply to Customer
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td
              style="
                background-color: #281238;
                padding: 24px 36px;
              "
            >
              <div
                style="
                  color: #ffffff;
                  font-size: 14px;
                  font-weight: 700;
                  margin-bottom: 8px;
                "
              >
                The SmileMax Dental Clinic
              </div>

              <div
                style="
                  color: #c9becf;
                  font-size: 12px;
                  line-height: 1.7;
                "
              >
                Juran Chhapra Main Road,
                Above Satyanarayan Nursing Home,
                Muzaffarpur, Bihar 842001
              </div>

              <div
                style="
                  margin-top: 14px;
                  padding-top: 14px;
                  border-top: 1px solid rgba(255, 255, 255, 0.12);
                  color: #a99daf;
                  font-size: 11px;
                "
              >
                This email was automatically generated
                from The SmileMax Dental Clinic website
                contact form.
              </div>
            </td>
          </tr>

        </table>

        <!-- Bottom Text -->
        <div
          style="
            max-width: 680px;
            margin-top: 18px;
            text-align: center;
            color: #968d9b;
            font-size: 11px;
            line-height: 1.6;
          "
        >
          © 2026 The SmileMax Dental Clinic.
          All rights reserved.
        </div>

      </td>
    </tr>
  </table>
</body>
</html>
        `,
    });

    /*
    |--------------------------------------------------------------------------
    | RESEND ERROR
    |--------------------------------------------------------------------------
    */

    if (error) {
      console.error("Resend email error:", error);

      return res.status(500).json({
        success: false,
        message:
          "Your message was saved, but we could not send the email notification. Please try again later.",
        data: {
          id: contact._id,
        },
      });
    }

    /*
    |--------------------------------------------------------------------------
    | SUCCESS RESPONSE
    |--------------------------------------------------------------------------
    */

    console.log("Contact email sent successfully:", data?.id);

    return res.status(201).json({
      success: true,
      message:
        "Your message has been submitted successfully. Our team will contact you soon.",
      data: {
        id: contact._id,
        emailId: data?.id,
      },
    });
  } catch (error) {
    next(error);
  }
};

export { submitContact };
