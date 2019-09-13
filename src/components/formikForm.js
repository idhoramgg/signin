import React from 'react'
import {Formik} from 'formik'

function FormikForm () {
    return(
        <div>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{firstName:"",lastName:"",email:"",password:""}}
                onSubmit={values => {
                    console.log(values)
                }}
            >
             {({handleChange,handleSubmit,values})=>(
              <form onSubmit={handleSubmit}>
                  <input
                  type="text"
                  name="firstName"
                  value={values} 
                  />
              </form>   
            )}   
            </Formik>
        </div>
    )
}

export default FormikForm