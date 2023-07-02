const asyncHandler = require("express-async-handler");

//@desc Get all contacts
//@route GET/api/contacts
//@access public
const getContacts = asyncHandler( async (req, res) => {
  // res.send("get all contacts");
  res.status(200).json({ message: "Get all contacts" });
});

//@desc Create contacts
//@route POST/api/contacts
//@access public
const createContact = asyncHandler( async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {   /*<--if any feild is null*/
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  res.status(200).json({ message: "Create contact" });
});

//@desc Get contact
//@route GET/api/contacts
//@access public
const getContact = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Get contact for ${req.params.id}` });
});

//@desc Update contacts
//@route PUT/api/contacts
//@access public
const updateContact = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

//@desc Delete contacts
//@route DELETE/api/contacts
//@access public
const deleteContact = asyncHandler( async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
