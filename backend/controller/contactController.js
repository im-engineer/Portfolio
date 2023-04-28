import mongoose from "mongoose";
import Contact from "../model/contactModel";
import { SendEmail } from "../middleware/sendMail";
mongoose.set("bufferCommands", false); // disable command buffering
mongoose.set("connectTimeoutMS", 30000); // set connection timeout to 30 seconds
mongoose.set("socketTimeoutMS", 45000); // set socket timeout to 45 seconds


//-------------------------->>>>>> Contact to Admin <<<<<<--------------------------
export const contact = async (req, res) => {
  try {
    const contactDetails = new Contact({
      fullname:req.body.fullname,
      email: req.body.email,
      textarea: req.body.textarea,
    });
    const contactData = await contactDetails.save();
    const emailDetails = await SendEmail(
      req.body.email,
      "awasthisameer150@gmail.com",
      `Welcome `,
      `Users Details :
    fullname:${contactData.fullname},
    email:${contactData.email},
    message:${contactData.textarea}`
    );
    console.log("🚀 ~ file: contactController.js:24 ~ contact ~ emailDetails:", emailDetails)
    if(contactData){
    res.send({
      status: true,
      message: "message sent",
      result: contactData,
      data:emailDetails
    })};
  } catch (e) {
    res.send({
      status: false,
      message: "again u make a mistake",
      result: `error: ${e}`,
    });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.send({
      status: true,
      message: "Contacts retrieved successfully",
      data: contacts
    });
  } catch (error) {
    res.send({
      status: false,
      message: "Error retrieving contacts",
      error: error
    });
  }
}