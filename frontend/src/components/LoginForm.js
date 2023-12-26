import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


const LoginForm = () => {

  const formik = useFormik({
    initialValues: {
      EmpID: '',
      password: '',
    },
    validationSchema: Yup.object({
      EmpID: Yup.number().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      axios.post('http://yourserver.com/login', values)
        .then(response => {
          // Handle the response from the server
          console.log(response.data);
        })
        .catch(error => {
          // Handle errors
          console.error(error);
        });
    },
  });


  return (
    <>
      <div className="md:w-2/3   h-screen bg-background " >

        <div className="shadow md:ml-64 rounded-2xl  mt-10 md:mt-40 bg-white h-[32rem] w-[34rem] bg-opacity-50 ">

          <h1 className="font-bold p-4 m-4 ml-40 mt-8">Please Enter your details</h1>
          <label className="ml-16 mt-10 font-semibold">Employee ID</label>
          <input className="p-4 m-2 ml-16 rounded-3xl w-96" type='number' {...formik.getFieldProps('EmpID')}/>

          {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

          <label className="ml-16 mt-5 font-semibold">Password</label>
          <input className="p-4 m-2 ml-16 rounded-3xl w-96" type='password' {...formik.getFieldProps('password')}/>

          {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}

          <h1 className="ml-80 p-4 font-bold cursor-pointer hover:text-slate-200">Forget Password?</h1>
          <button className="ml-16 bg-blue-950 w-96 rounded-3xl p-4 m-2 text-white" type="submit">Login</button>

        </div>
      </div>
    </>
  )
}
export default LoginForm;