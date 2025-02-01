const PrimaryContact = require("../models/PrimaryContact");
const SecondaryContact = require("../models/SecondaryContact");

exports.identifyContact = async (req, res) => {
  const { email, phoneNumber } = req.body;

  try {
    let primaryContact = await PrimaryContact.findOne({ $or: [{ email }, { phoneNumber }] });

    if (!primaryContact) {
      const newPrimary = new PrimaryContact({ email, phoneNumber, isPrimary: true });
      await newPrimary.save();
      return res.json({ contact: { _id: newPrimary._id, emails: [email], phoneNumbers: [phoneNumber], secondaryContactIds: [] } });
    }

    res.json({
      contact: {
        _id: primaryContact._id,
        emails: [primaryContact.email],
        phoneNumbers: [primaryContact.phoneNumber],
        secondaryContactIds: primaryContact.secondaryContactIds,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};