// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import axios from 'axios';

// function Signup() {
//     // State for toggling password visibility
//     const [show, setShow] = useState(false);
//     const [ch, setch] = useState(false);

//     const showPassword = () => {
//         setShow(prevState => !prevState);
//     }

//     const chPassword = () => {
//         setch(prevState => !prevState);
//     }

//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm();

//     // Watching the password fields for validation
//     const password = watch('Password', '');

//     // Validate that confirm password matches password
//     const validatePasswordMatch = (value) => {
//         return value === password || "Passwords do not match";
//     }

//     // const onSubmit = (data) => console.log(data);
//     const onSubmit = (data) => {
       
//         const UserInfo = {
//             Fullname : data.Fullname,
//             email: data.Email,
//             password:data.Password,
//             ConfirmPassword:data.ConfirmPassword
//         };
//         // console.log(UserInfo);

//         axios.post('http://localhost:3000/user/signup',UserInfo)
//         .then((response) => {
//             console.log(response.data)
//             alert("signup successfull")
//         })
//         .catch((error) => {
//             console.log(error)
//         })
        
//     }

//     return (
//         <>
//             <div className='flex h-screen items-center justify-center'>
//                 <form 
//                     onSubmit={handleSubmit(onSubmit)}
//                     className='border border-gray-700 px-6 py-2 rounded space-y-3 w-[400px] pb-4'
//                 >
//                     <h1 className='text-2xl text-center mt-2'>Chat
//                         <span className='text-yellow-800 font-bold'>App</span>
//                     </h1>
//                     <h2 className='text-xl text-gray-700 font-bold'>Signup</h2>
//                     <br />
//                     {/* Fullname */}
//                     <label className="input input-bordered flex items-center gap-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                         </svg>
//                         <input 
//                             type="text" 
//                             className="grow" 
//                             placeholder="Fullname"
//                             {...register("Fullname", { required: "Fullname is required" })} 
//                         />
//                     </label>
//                     {errors.Fullname && <span className='text-red-500 text-sm'>{errors.Fullname.message}</span>}

//                     {/* Email */}
//                     <label className="input input-bordered flex items-center gap-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                             <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                         </svg>
//                         <input 
//                             type="email" 
//                             className="grow" 
//                             placeholder="Email"
//                             {...register("Email", { required: "Email is required" })} 
//                         />
//                     </label>
//                     {errors.Email && <span className='text-red-500 text-sm'>{errors.Email.message}</span>}

//                     {/* Password */}
//                     <label className="input input-bordered flex items-center gap-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path
//                                 fillRule="evenodd"
//                                 d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                                 clipRule="evenodd" />
//                         </svg>
//                         <input 
//                             type={show ? "text" : "password"} 
//                             className="grow" 
//                             placeholder="Password"
//                             {...register("Password", { required: "Password is required" })} 
//                         />
//                         <button
//                             type='button'
//                             onClick={showPassword}
//                         >{show ? "Hide" : "Show"}</button>
//                     </label>
//                     {errors.Password && <span className='text-red-500 text-sm'>{errors.Password.message}</span>}

//                     {/* Confirm Password */}
//                     <label className="input input-bordered flex items-center gap-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path
//                                 fillRule="evenodd"
//                                 d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                                 clipRule="evenodd" />
//                         </svg>
//                         <input 
//                             type={ch ? "text" : "password"} 
//                             className="grow" 
//                             placeholder="Confirm Password"
//                             {...register("ConfirmPassword", { 
//                                 required: "Confirm Password is required", 
//                                 validate: validatePasswordMatch 
//                             })} 
//                         />
//                         <button
//                             type='button'
//                             onClick={chPassword}
//                         >{ch ? "Hide" : "Show"}</button>
//                     </label>
//                     {errors.ConfirmPassword && <span className='text-red-500 text-sm'>{errors.ConfirmPassword.message}</span>}

//                     {/* Text and Signup Button */}
//                     <div className='flex justify-between'>
//                         <p>Already have an account?
//                             <span className='text-orange-600 underline cursor-pointer ml-1'>Login</span>
//                         </p>
//                         <input 
//                             type='submit' 
//                             value='Signup' 
//                             className='py-1 text-white bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-400'
//                         />
//                     </div>
//                 </form>
//             </div>
//         </>
//     )
// }

// export default Signup;


// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import axios from 'axios';

// function Signup() {
//     // State for toggling password visibility
//     const [show, setShow] = useState(false);
//     const [ch, setch] = useState(false);

//     const showPassword = () => {
//         setShow(prevState => !prevState);
//     }

//     const chPassword = () => {
//         setch(prevState => !prevState);
//     }

//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm();

//     // Watching the password fields for validation
//     const password = watch('password', '');

//     // Validate that confirm password matches password
//     const validatePasswordMatch = (value) => {
//         return value === password || "Passwords do not match";
//     }

//     const onSubmit = async (data) => {
//         const UserInfo = {
//             fullname: data.fullname,
//             email: data.email,
//             password: data.password,
//             confirmPassword: data.confirmPassword
//         };

//         try {
//             const response = await axios.post('http://localhost:3000/user/signup', UserInfo);
//             console.log("Response data:", response.data);
//             if(response.data) {
//                 alert("Signup successful");
//             }
//             localStorage.setItem("ChatApp",JSON.stringify(response.data))
//         } catch (error) {
//             // Improved error handling
//             if (error.response) {
//                 // Server responded with a status other than 200 range
//                 // console.error("Error response:", error.response.data);
//                 // alert(`Error: ${error.response.data.message || 'Signup failed'}`);
//                 alert("Error: "+error.response.data.error)
//             } else if (error.request) {
//                 // Request was made but no response was received
//                 console.error("No response received:", error.request);
//                 alert("No response from server. Please try again later.");
//             } else {
//                 // Something else happened while setting up the request
//                 console.error("Error setting up request:", error.message);
//                 alert(`Error: ${error.message}`);
//             }
//         }
//     }

//     return (
//         <>
//             <div className='flex h-screen items-center justify-center'>
//                 <form 
//                     onSubmit={handleSubmit(onSubmit)}
//                     className='border border-gray-700 px-6 py-2 rounded space-y-3 w-[400px] pb-4'
//                 >
//                     <h1 className='text-2xl text-center mt-2'>Chat
//                         <span className='text-yellow-800 font-bold'>App</span>
//                     </h1>
//                     <h2 className='text-xl text-gray-700 font-bold'>Signup</h2>
//                     <br />
//                     {/* Fullname */}
//                     <label className="input input-bordered flex items-center gap-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                         </svg>
//                         <input 
//                             type="text" 
//                             className="grow" 
//                             placeholder="Fullname"
//                             {...register("fullname", { required: "Fullname is required" })} 
//                         />
//                     </label>
//                     {errors.fullname && <span className='text-red-500 text-sm'>{errors.fullname.message}</span>}

//                     {/* Email */}
//                     <label className="input input-bordered flex items-center gap-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                             <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//                         </svg>
//                         <input 
//                             type="email" 
//                             className="grow" 
//                             placeholder="Email"
//                             {...register("email", { required: "Email is required" })} 
//                         />
//                     </label>
//                     {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}

//                     {/* Password */}
//                     <label className="input input-bordered flex items-center gap-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path
//                                 fillRule="evenodd"
//                                 d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                                 clipRule="evenodd" />
//                         </svg>
//                         <input 
//                             type={show ? "text" : "password"} 
//                             className="grow" 
//                             placeholder="Password"
//                             {...register("password", { required: "Password is required" })} 
//                         />
//                         <button
//                             type='button'
//                             onClick={showPassword}
//                         >{show ? "Hide" : "Show"}</button>
//                     </label>
//                     {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}

//                     {/* Confirm Password */}
//                     <label className="input input-bordered flex items-center gap-2">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 16 16"
//                             fill="currentColor"
//                             className="h-4 w-4 opacity-70">
//                             <path
//                                 fillRule="evenodd"
//                                 d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                                 clipRule="evenodd" />
//                         </svg>
//                         <input 
//                             type={ch ? "text" : "password"} 
//                             className="grow" 
//                             placeholder="Confirm Password"
//                             {...register("confirmPassword", { 
//                                 required: "Confirm Password is required", 
//                                 validate: validatePasswordMatch 
//                             })} 
//                         />
//                         <button
//                             type='button'
//                             onClick={chPassword}
//                         >{ch ? "Hide" : "Show"}</button>
//                     </label>
//                     {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>}

//                     {/* Text and Signup Button */}
//                     <div className='flex justify-between'>
//                         <p>Already have an account?
//                             <span className='text-orange-600 underline cursor-pointer ml-1'>Login</span>
//                         </p>
//                         <input 
//                             type='submit' 
//                             value='Signup' 
//                             className='py-1 text-white bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-400'
//                         />
//                     </div>
//                 </form>
//             </div>
//         </>
//     );
// }

// export default Signup;



// import React, { useState } from 'react';
// import { useForm } from "react-hook-form";
// import axios from 'axios';

// function Signup() {
//     // State for toggling password visibility
//     const [show, setShow] = useState(false);
//     const [ch, setch] = useState(false);

//     const showPassword = () => setShow(prevState => !prevState);
//     const chPassword = () => setch(prevState => !prevState);

//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm();

//     // Watching the password fields for validation
//     const password = watch('password', '');

//     // Validate that confirm password matches password
//     const validatePasswordMatch = (value) => {
//         return value === password || "Passwords do not match";
//     };

//     const onSubmit = async (data) => {
//         const UserInfo = {
//             fullname: data.fullname,
//             email: data.email,
//             password: data.password,
//             confirmPassword: data.confirmPassword
//         };

//         try {
//             const response = await axios.post('http://localhost:3000/user/signup', UserInfo);
//             console.log("Response data:", response.data);
//             alert("Signup successful");
//             localStorage.setItem("ChatApp", JSON.stringify(response.data));
//         } catch (error) {
//             // Improved error handling
//             if (error.response) {
//                 alert("Error: " + error.response.data.message );
//             } else if (error.request) {
//                 alert("No response from server. Please try again later.");
//             } else {
//                 alert(`Error: ${error.message}`);
//             }
//         }
//     };

//     return (
//         <div className='flex h-screen items-center justify-center'>
//             <form 
//                 onSubmit={handleSubmit(onSubmit)}
//                 className='border border-gray-700 px-6 py-2 rounded space-y-3 w-[400px] pb-4'
//             >
//                 <h1 className='text-2xl text-center mt-2'>Chat
//                     <span className='text-yellow-800 font-bold'>App</span>
//                 </h1>
//                 <h2 className='text-xl text-gray-700 font-bold'>Signup</h2>
//                 <br />
//                 {/* Fullname */}
//                 <label className="input input-bordered flex items-center gap-2">
//                     <input 
//                         type="text" 
//                         className="grow" 
//                         placeholder="Fullname"
//                         {...register("fullname", { required: "Fullname is required" })} 
//                     />
//                 </label>
//                 {errors.fullname && <span className='text-red-500 text-sm'>{errors.fullname.message}</span>}

//                 {/* Email */}
//                 <label className="input input-bordered flex items-center gap-2">
//                     <input 
//                         type="email" 
//                         className="grow" 
//                         placeholder="Email"
//                         {...register("email", { required: "Email is required" })} 
//                     />
//                 </label>
//                 {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}

//                 {/* Password */}
//                 <label className="input input-bordered flex items-center gap-2">
//                     <input 
//                         type={show ? "text" : "password"} 
//                         className="grow" 
//                         placeholder="Password"
//                         {...register("password", { required: "Password is required" })} 
//                     />
//                     <button
//                         type='button'
//                         onClick={showPassword}
//                     >{show ? "Hide" : "Show"}</button>
//                 </label>
//                 {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}

//                 {/* Confirm Password */}
//                 <label className="input input-bordered flex items-center gap-2">
//                     <input 
//                         type={ch ? "text" : "password"} 
//                         className="grow" 
//                         placeholder="Confirm Password"
//                         {...register("confirmPassword", { 
//                             required: "Confirm Password is required", 
//                             validate: validatePasswordMatch 
//                         })} 
//                     />
//                     <button
//                         type='button'
//                         onClick={chPassword}
//                     >{ch ? "Hide" : "Show"}</button>
//                 </label>
//                 {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>}

//                 {/* Text and Signup Button */}
//                 <div className='flex justify-between'>
//                     <p>Already have an account?
//                         <span className='text-orange-600 underline cursor-pointer ml-1'>Login</span>
//                     </p>
//                     <input 
//                         type='submit' 
//                         value='Signup' 
//                         className='py-1 text-white bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-400'
//                     />
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Signup;



















import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

function Signup() {
    // State for toggling password visibility
    const [show, setShow] = useState(false);
    const [ch, setCh] = useState(false);

    const showPassword = () => setShow(prevState => !prevState);
    const chPassword = () => setCh(prevState => !prevState);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    // Watching the password fields for validation
    const password = watch('password', '');

    // Validate that confirm password matches password
    const validatePasswordMatch = (value) => {
        return value === password || "Passwords do not match";
    };

    const onSubmit = async (data) => {
        console.log("Form Data:", data); // Debugging line to check form data

        const UserInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword
        };

        try {
            const response = await axios.post('http://localhost:3000/user/signup', UserInfo);
            console.log("Response data:", response.data); // Debugging line to check response data
            alert("Signup successful");
            localStorage.setItem("ChatApp", JSON.stringify(response.data));
        } catch (error) {
            console.error("Error details:", error); // Detailed error logging
            if (error.response) {
                // Server responded with a status other than 200 range
                alert("Error: " + (error.response.data.message || 'An error occurred'));
            } else if (error.request) {
                // Request was made but no response was received
                alert("No response from server. Please try again later.");
            } else {
                // Something else happened while setting up the request
                alert(`Error: ${error.message}`);
            }
        }
    };

    return (
        <div className='flex h-screen items-center justify-center'>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='border border-gray-700 px-6 py-2 rounded space-y-3 w-[400px] pb-4'
            >
                <h1 className='text-2xl text-center mt-2'>Chat
                    <span className='text-yellow-800 font-bold'>App</span>
                </h1>
                <h2 className='text-xl text-gray-700 font-bold'>Signup</h2>
                <br />
                {/* Fullname */}
                <label className="input input-bordered flex items-center gap-2">
                    <input 
                        type="text" 
                        className="grow" 
                        placeholder="Fullname"
                        {...register("fullname", { required: "Fullname is required" })} 
                    />
                </label>
                {errors.fullname && <span className='text-red-500 text-sm'>{errors.fullname.message}</span>}

                {/* Email */}
                <label className="input input-bordered flex items-center gap-2">
                    <input 
                        type="email" 
                        className="grow" 
                        placeholder="Email"
                        {...register("email", { required: "Email is required" })} 
                    />
                </label>
                {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}

                {/* Password */}
                <label className="input input-bordered flex items-center gap-2">
                    <input 
                        type={show ? "text" : "password"} 
                        className="grow" 
                        placeholder="Password"
                        {...register("password", { required: "Password is required" })} 
                    />
                    <button
                        type='button'
                        onClick={showPassword}
                    >{show ? "Hide" : "Show"}</button>
                </label>
                {errors.password && <span className='text-red-500 text-sm'>{errors.password.message}</span>}

                {/* Confirm Password */}
                <label className="input input-bordered flex items-center gap-2">
                    <input 
                        type={ch ? "text" : "password"} 
                        className="grow" 
                        placeholder="Confirm Password"
                        {...register("confirmPassword", { 
                            required: "Confirm Password is required", 
                            validate: validatePasswordMatch 
                        })} 
                    />
                    <button
                        type='button'
                        onClick={chPassword}
                    >{ch ? "Hide" : "Show"}</button>
                </label>
                {errors.confirmPassword && <span className='text-red-500 text-sm'>{errors.confirmPassword.message}</span>}

                {/* Text and Signup Button */}
                <div className='flex justify-between'>
                    <p>Already have an account?
                        <span className='text-orange-600 underline cursor-pointer ml-1'>Login</span>
                    </p>
                    <input 
                        type='submit' 
                        value='Signup' 
                        className='py-1 text-white bg-green-500 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-400'
                    />
                </div>
            </form>
        </div>
    );
}

export default Signup;
