import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import "./editdata.css";

const PersonalDetails = () => {
    const schemaForm = yup.object({
      dob: yup.date().required("DOB is required"),
      gender: yup.string().required("Gender is required"),
      socialSecurityNumber: yup
        .string()
        .matches(/^[0-9]+$/, "Social Security Number must contain only numbers"),
    });
   
   
     const initialFormValues = {
       dob: "",
       gender: "",
       maritalStatus: "",
       socialSecurityNumber: "",
       social: "",
       kids: "0"
     };
   
   const id = localStorage.getItem("userId");
   const token = localStorage.getItem("token");
   
   const formik = useFormik({
     initialValues: initialFormValues,
     validationSchema: schemaForm,
     onSubmit: (values) => {
       handleSubmit(values);
     },
   });
   
   const handleSubmit = async (values) => {
     console.log(values);
     let response = await axios.put(
       `http://localhost:3002/personaldetails/protected/${id}`,
       values,
       {
         headers: {
           Authorization: `Bearer ${token}`,  
         },
       }
     );
     if (response.data.status) {
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
                 DOB <span className="asterisk">*</span>{" "}
               </label>
               <br />
               <input
                 type="date"
                 name="dob"
                 value={formik.values.dob}
                 onChange={formik.handleChange}
                 className="basicdetail-input input"
               />
               {formik.errors.dob && formik.touched.dob && (
                 <p className="error-message">{formik.errors.dob}</p>
               )}
             </div>
   
             <div className="form-fields">
               <label>
                 Gender <span className="asterisk">*</span>
               </label>
               <br />
   
               <select
                 name="gender"
                 value={formik.values.gender}
                 onChange={formik.handleChange}
                 className="basicdetail-input"
               >
                 <option value="" label="Select a gender" />
                 <option value="male" label="Male" />
                 <option value="female" label="Female" />
                 <option value="other" label="Other" />
               </select>
               {formik.touched.gender && formik.errors.gender && (
                 <p className="error-message">{formik.errors.gender}</p>
               )}
             </div>
           </div>
   
           <div className="inputs-horizontal">
             <div className="form-fields">
               <label>Marital Status</label>
               <br />
               <select
                 name="maritalStatus"
                 value={formik.values.maritalStatus}
                 onChange={formik.handleChange}
                 className="basicdetail-input"
               >
                 <option value="" label="Select marital status" />
                 <option value="single" label="Single" />
                 <option value="married" label="Married" />
                 <option value="divorced" label="Divorced" />
               </select>
               {formik.touched.maritalStatus && formik.errors.maritalStatus && (
                 <p>{formik.errors.maritalStatus}</p>
               )}
             </div>
   
             <div className="form-fields">
               <label>Social Security (Numbers Only)</label>
               <br />
               <input
                 type="text"
                 name="socialSecurityNumber"
                 value={formik.values.socialSecurityNumber}
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
               <label>Social</label>
               <br />
               <input
                 type="text"
                 name="social"
                 value={formik.values.social}
                 onChange={formik.handleChange}
                 className="basicdetail-input"
               />
               {formik.errors.social && formik.touched.social && (
                 <p>{formik.errors.social}</p>
               )}
             </div>
   
             <div className="form-fields">
               <label>Kids (if any):</label>
               <br />
               <input
                 type="number"
                 name="kids"
                 value={formik.values.kids}
                 onChange={formik.handleChange}
                 className="basicdetail-input"
               />
               {formik.touched.kids && formik.errors.kids && (
                 <p>{formik.errors.kids}</p>
               )}
             </div>
           </div>
           <button className="update-basicdetails" type="submit">
             <span className="update-btn-p">Update</span>
           </button>
         </form>
       </div>
     );
   };
   
   export default PersonalDetails;