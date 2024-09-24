import { ErrorMessage,Field, Formik,Form  } from 'formik'
import {Link} from 'react-router-dom'
import * as Yup from 'yup';

import './index.css'

const SignUpForm = () => {
    const initialValues = {
        username:"",
        email:"",
        password:"",
        role:"user",
        createdBy:"user",
        permissions: {
            products:{ R:0, W:0, D:0 },
            orders:{ R:0, W:0, D:0 },
            employee:{ R:0, W:0, D:0 },
            productcategory:{ R:0, W:0, D:0 },
            productsubcategory:{ R:0, W:0, D:0 }
        }
    }

    const onSubmit = async (values:any) => {
        const url = 'http://localhost:5000/register'
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
    }

    const validationSchema = Yup.object({
        username: Yup.string()
        .required('*Username is required'),

        email: Yup.string()
          .email('*Invalid email address')
          .matches(
            /^[a-zA-Z0-9_]+@gmail\.com$/,
            '*Email must only contain letters, numbers before  @gmail.com'
          )
          .matches(
            /^[a-zA-Z0-9_]{2,}@gmail\.com$/,
            '*Email must have at least 2 characters before @gmail.com',
          )
          .required('*Email is required'),
        password: Yup.string()
          .min(6, '*Password must be at least 6 characters long')
          .required('*Password is required'),
        confirmpassword: Yup.string()
          .oneOf([Yup.ref('password')], '*Passwords must match')
          .required('*Confirm Password is required'),
      });

    return(
        <>
        <nav>
            <Link to="/"><img className='logo' src="https://cdn.dribbble.com/users/3615144/screenshots/7076764/media/b3efbee1a944c1b2dc127ecd6d653faa.png?resize=800x600&vertical=center" alt="logo"/></Link>
        </nav>
        <div className="sign-up-container">
        <img className='login-img' src="https://static-assets-web.flixcart.com/pegasus/images/7d491778-LoginAndRegistration.svg" alt="login" />
        <Formik validationSchema={validationSchema} initialValues={initialValues} onSubmit={onSubmit} >
            <Form  className="sign-up-form">
                <label className="input-label" htmlFor="username">
                    USERNAME
                </label>
                <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="username"
                    className="input-filed"
                />
                <ErrorMessage component="div" className="error-message" name="username"/>

                <label className="input-label" htmlFor="email">
                    EMAIL
                </label>
                <Field 
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="input-filed"
                />
                <ErrorMessage component="div" className="error-message" name="email"/>

                <label className="input-label" htmlFor="password">
                    PASSWORD
                </label>
                <Field 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    className="input-filed"
                />
                <ErrorMessage component="div" className="error-message" name="password" />

                <label className="input-label" htmlFor="confirmpassword">
                    CONFIRM PASSWORD
                </label>
                <Field 
                    type="password"
                    id="password"
                    name="confirmpassword"
                    placeholder="confirmpassword"
                    className="input-filed"
                />
                <ErrorMessage component="div" className="error-message" name="confirmpassword" />

                <button type="submit" className="button">Sign Up</button>
                <div className='membership'>
                    <p>Already have an account?<Link to="/login">Login</Link></p>
                </div>
            </Form>
        </Formik>
        </div>
        </>
    )
}

export default SignUpForm