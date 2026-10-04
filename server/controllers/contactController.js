import Contact from "../models/Contact.js";

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
        | RESPONSE
        |--------------------------------------------------------------------------
        */

    return res.status(201).json({
      success: true,
      message:
        "Your message has been submitted successfully. Our team will contact you soon.",
      data: {
        id: contact._id,
      },
    });
  } catch (error) {
    next(error);
  }
};

export { submitContact };
