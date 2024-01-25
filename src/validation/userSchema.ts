import * as Yup from "yup";

export const signupPayload = Yup.object({
  query: Yup.object({
    email: Yup.string().email().required(),
    username: Yup.string().required(),
    password: Yup.string().required(),
  }),
});
