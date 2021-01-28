import * as Yup from "yup";

//Taken from: https://stackoverflow.com/questions/16569397/regex-to-find-credit-card-numbers-with-embedded-spaces
const cardRegex = RegExp(
  /^((4\d{3})|(5[1-5]\d{2})|(6011)|(34\d{1})|(37\d{1}))-?\s?\d{4}-?\s?\d{4}-?\s?\d{4}|3[4,7][\d\s-]{15}$/
);

//Taken from: https://gist.github.com/collins-lagat/714089e0b0cda8c83d9491af7276454c
const expDate = RegExp(/^(0[1-9]|1[0-2])\/([0-9]{2})$/);

export const updateBillingSchema = Yup.object().shape({
  cardName: Yup.string().required("Card Name is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State required"),
  zip: Yup.string().required("Zip is required"),
  cardNumber: Yup.string()
    .matches(cardRegex, "Invalid Card Number")
    .required("Card Number is required"),
  cardExpiration: Yup.string()
    .matches(expDate, "Invalid Expiration Date")
    .required("Card Expiration is required"),
});

export const updatePasswordSchema = Yup.object().shape({
  password: Yup.string().required("Password field is requred"),
  confirmPassword: Yup.string()
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password must match"
      ),
    })
    .required("Confirm Password is required"),
});
