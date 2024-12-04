import { object, string } from "yup";


export const validationSchema = object().shape({
    name: string().trim().lowercase().required("Name is required"),
    lastName: string().lowercase().trim().required("Last name is required"),
    mail: string().trim().lowercase().required("Email is required").email("Invalid email format"),
    textField: string().lowercase().trim().required("Text field is required")
});