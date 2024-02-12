import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "./editdata.css";

const BasicDetails = () => {
    let schemaForm = yup.object({
      firstName: yup
        .string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maxinum 15 characters")
        .required("Required!"),
      lastName: yup
        .string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maxinum 15 characters")
        .required("Required!"),
      email: yup.string().email("invalid user format").required("Required!"),
      address: yup
        .string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maxinum 15 characters")
        .required("Required!"),
      city: yup
        .string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maxinum 15 characters")
        .required("Required!"),
      state: yup
        .string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maxinum 15 characters")
        .required("Required!"),
      zipCode: yup
        .string()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, "Must be at least 10 digits")
        .required("A phone number is required"),
    });
  
    let initialFormValues = {
      firstName: "",
      lastName: "",
      email: "",
      socialSecurityNumber: "",
      address: "",
      address2: "",
      phoneNo: "",
      city: "", // Initial value for the dropdown
      state: "",
      zipCode: "",
    };
  
    const id = localStorage.getItem("userId");
    // const token = localStorage.getItem("token");
  
    const formik = useFormik({
      initialValues: initialFormValues,
      validationSchema: schemaForm,
      onSubmit: (values) => {
        handleSubmit(values);
      },
    });
    const handleSubmit = async (values) => {
      let response = await axios.put(
        `http://localhost:3002/basicdetails/protected/${id}`,
        values
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        console.log(response.data.message);
        toast.error(response.data.message);
      }
    };
  
  
  
  
    return (
      <div>
        <form onSubmit={formik.handleSubmit} className="chngeinfo-form">
          <div className="inputs-horizontal">
            <div className="form-fields">
              <label>
                First Name <span className="asterisk">*</span>
              </label>
              <br />
              <input
                type="text"
                name="firstName"
                values={formik.values.firstName}
                onChange={formik.handleChange}
                className="basicdetail-input"
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p className="error-message">{formik.errors.firstName}</p>
              )}
            </div>
  
            <div className="form-fields">
              <label>
                Last Name <span className="asterisk">*</span>{" "}
              </label>
              <br />
              <input
                type="text"
                name="lastName"
                values={formik.values.lastName}
                onChange={formik.handleChange}
                className="basicdetail-input "
              />
              {formik.errors.lastName && formik.touched.lastName && (
                <p className="error-message">{formik.errors.lastName}</p>
              )}
            </div>
          </div>
  
          <div className="inputs-horizontal">
            <div className="form-fields">
              <label>
                Enter E-mail <span className="asterisk">*</span>{" "}
              </label>
              <br />
              <input
                type="email"
                name="email"
                values={formik.values.email}
                onChange={formik.handleChange}
                className="basicdetail-input"
              />
              {formik.errors.email && formik.touched.email && (
                <p className="error-message">{formik.errors.email}</p>
              )}
            </div>
  
            <div className="form-fields">
              <label>Social Security (Numbers Only)</label>
              <br />
              <input
                type="text"
                name="socialSecurityNumber"
                values={formik.values.socialSecurityNumber}
                onChange={formik.handleChange}
                className="basicdetail-input"
              />
              {formik.errors.socialSecurityNumber &&
                formik.touched.socialSecurityNumber && (
                  <p className="error-message">
                    {formik.errors.socialSecurityNumber}
                  </p>
                )}
            </div>
          </div>
  
          <div className="inputs-horizontal">
            <div className="form-fields">
              <label>Mobile Number</label>
              <br />
              <input
                type="number"
                name="phoneNo"
                values={formik.values.phoneNo}
                onChange={formik.handleChange}
                className="basicdetail-input"
              />
              {formik.errors.phoneNo && formik.touched.phoneNo && (
                <p className="error-message">{formik.errors.phoneNo}</p>
              )}
            </div>
  
            <div className="form-fields">
              <label>
                Address One <span className="asterisk">*</span>{" "}
              </label>
              <br />
              <input
                type="text"
                name="address"
                values={formik.values.address}
                onChange={formik.handleChange}
                className="basicdetail-input"
              />
              {formik.errors.address && formik.touched.address && (
                <p className="error-message">{formik.errors.address}</p>
              )}
            </div>
          </div>
  
          <div className="inputs-horizontal">
            <div className="form-fields">
              <label>
                Address Two <span className="asterisk">*</span>{" "}
              </label>
              <br />
              <input
                type="text"
                name="address2"
                values={formik.values.address2}
                onChange={formik.handleChange}
                className="basicdetail-input "
              />
              {formik.errors.address2 && formik.touched.address2 && (
                <p className="error-message">{formik.errors.address2}</p>
              )}
            </div>
            <div className="form-fields">
              <label>
                City <span className="asterisk">*</span>
              </label>
              <br />
              <input
                type="text"
                name="city"
                values={formik.values.city}
                onChange={formik.handleChange}
                className="basicdetail-input "
              />
              {formik.errors.city && formik.touched.city && (
                <p className="error-message">{formik.errors.city}</p>
              )}
            </div>
          </div>
  
          <div className="inputs-horizontal">
            <div className="form-fields">
              <label>
                State <span className="asterisk">*</span>
              </label>
              <br />
              <input
                type="text"
                name="state"
                values={formik.values.state}
                onChange={formik.handleChange}
                className="basicdetail-input "
              />
              {formik.errors.state && formik.touched.state && (
                <p className="error-message">{formik.errors.state}</p>
              )}
            </div>
  
            <div className="form-fields">
              <label>
                Home Zip Code <span className="asterisk">*</span>
              </label>
              <br />
              <input
                type="number"
                name="zipCode"
                values={formik.values.zipCode}
                onChange={formik.handleChange}
                className="basicdetail-input "
              />
              {formik.errors.zipCode && formik.touched.zipCode && (
                <p className="error-message">{formik.errors.zipCode}</p>
              )}
            </div>
          </div>
          <button
            className="update-basicdetails"
            type="submit"
          >
            <span className="update-btn-p">Update</span>
          </button>
        </form>
      </div>
    );
  };
  export default BasicDetails;