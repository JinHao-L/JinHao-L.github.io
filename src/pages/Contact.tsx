import SectionHeader from 'components/SectionHeader';
import React, { useState } from 'react';
import Section, { SectionProps } from '../components/Section';
import { useFormik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import emailjs from 'emailjs-com';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Please enter a valid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const Contact: React.FC<SectionProps> = ({ id, style, className, nextId }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (
    formData: any,
    {
      setSubmitting,
      setErrors,
    }: FormikHelpers<{
      name: string;
      email: string;
      message: string;
    }>,
  ) => {
    setSubmitting(true);
    return emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SVC_ID || '',
        'template_k5j5k1h',
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then((result) => {
        console.log(result);
        setSubmitting(false);
        setSubmitted(true);
        console.log(result.text);
      })
      .catch((error) => {
        setSubmitting(false);
        setErrors({ message: error.text });
        console.log(error.text);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Section
      id={id}
      style={style}
      className={className}
      nextId={nextId}
      minHeight={'calc(100vh - 130px)'}
    >
      <SectionHeader>Contact Me</SectionHeader>
      <div className="container flex flex-col items-center justify-center flex-1 px-10 pt-10 m-auto lg:px-40 xl:px-64 2xl:px-96">
        <div className="w-full px-6 py-8 text-black bg-gray-300 rounded shadow-md opacity-90">
          <h1 className="mb-8 text-3xl text-center">Leave me a message! 📬</h1>
          <form onSubmit={formik.handleSubmit} noValidate>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              id="name"
              className="block w-full p-3 mt-1 border rounded border-grey-light"
              placeholder="Your preferred form of address"
              {...formik.getFieldProps('name')}
            />
            <div className="p-1 mb-2 text-sm leading-none text-red-500 ">
              {formik?.touched?.name && formik?.errors?.name && <div>{formik.errors.name}</div>}
            </div>

            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              className="block w-full p-3 border rounded border-grey-light"
              placeholder="Your email"
              {...formik.getFieldProps('email')}
            />
            <div className="p-1 mt-1 mb-2 text-sm leading-none text-red-500">
              {formik?.touched?.email && formik?.errors?.email && <div>{formik.errors.email}</div>}
            </div>

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="block w-full p-3 mt-1 border rounded border-grey-light"
              placeholder="Leave me a message"
              cols={40}
              rows={5}
              {...formik.getFieldProps('message')}
            />
            <div className="p-1 mb-2 text-sm leading-none text-red-500">
              {formik?.touched?.message && formik?.errors?.message && (
                <div>{formik.errors.message}</div>
              )}
            </div>

            <button
              disabled={submitted || formik.isSubmitting}
              type="submit"
              className="flex flex-row justify-center w-full py-3 my-1 text-xl text-center text-white bg-green-600 rounded place-items-center disabled:opacity-50 disabled:bg-green-600 hover:bg-green-500 focus:outline-none"
            >
              {formik.isSubmitting && (
                <svg
                  className="w-5 h-5 mr-3 text-white animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}{' '}
              Send 🚀
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
