import * as Yup from "yup";

// Regex source: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html
// const phoneRegex = RegExp(
//   /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
// );


//Taken from: https://stackoverflow.com/questions/42618872/regex-for-website-or-url-validation/42619368
const urlRegex = RegExp(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/);

export const updateContact = Yup.object().shape({
  homeAddress: Yup.string(),
  homeCity: Yup.string(),
  homeState: Yup.string(),
  homeZip: Yup.string(),
  homePhone: Yup.string(),
  homeEmail: Yup.string().email("Invalid Email"),

  businessAddress: Yup.string(),
  businessCity: Yup.string(),
  businessState: Yup.string(),
  businessZip: Yup.string(),
  businessPhone: Yup.string(),
  businessEmail: Yup.string().email("Invalid Email"),

  linkedIn: Yup.string().matches(urlRegex, "Invalid URL"),
  facebook: Yup.string().matches(urlRegex, "Invalid URL"),
  instagram: Yup.string().matches(urlRegex, "Invalid URL"),
  twitter: Yup.string().matches(urlRegex, "Invalid URL"),
  slack: Yup.string().matches(urlRegex, "Invalid URL"),
  discord: Yup.string().matches(urlRegex, "Invalid URL"),
});
