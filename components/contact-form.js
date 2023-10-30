'use client'

import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Check } from './svgs';

const ContactForm = ({ 
	title, 
	subheading, 
	description, 
	sectionId, 
	backgroundColor
}) => {

	const [ isSubmitted, setIsSubmitted ] = useState( false );

	const form = useRef();

	const {
		setFieldValue,
		setFieldError,
		values,
		errors,
		validateForm,
		resetForm,
	} = useFormik({
		initialValues : {
			name : '',
			email : '',
			phone : '',
			subject : '',
			message : ''
		},
		validationSchema : Yup.object({
			name : Yup.string().label( 'Name' ).nullable().required(),
			email : Yup.string().email().label( 'Email' ).required(),
			phone : Yup.string().label( 'Phone' ).nullable().required(),
			subject : Yup.string().label( 'Subject' ).nullable().required(),
			message : Yup.string().label( 'Message' ).nullable().required()
		})

	});

	const sendEmail = (e) => {
		e.preventDefault();

		validateForm( values );

		if ( errors.length > 0 ) return;

		emailjs.sendForm(
			process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, 
			process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID, 
			form.current, 
			process.env.NEXT_PUBLIC_EMAIL_API_KEY
		)
			.then(( result ) => {

				console.log( result.text );

			}, ( error ) => {

				console.log( error.text );

			});

		resetForm();

		setIsSubmitted( true );

	};

	return(

		<section
			{
				...{
					className : 'mb-24 py-24',
					style : {
						backgroundColor
					},
					id : sectionId
				}
			}
		>
			<div className="w-full px-8 max-w-screen-lg m-auto flex flex-col gap-y-8">
				<div className="flex flex-col gap-y-4">
					<div className="flex flex-col gap-y-2">
						{ subheading &&
							<h2 className="font-montserrat text-md font-bold">
								{ subheading }
							</h2>
						}
						{ title &&
						<h2 className="font-montserrat text-4xl font-bold">
							{ title }
						</h2>
						}
					</div>
					{ description &&
					<p className="font-lora w-full lg:w-1/2">
						{ description }
					</p>
					}
				</div>
				<div className="relative">
					<div 
						{
							...{
								className : 'absolute flex flex-col items-center gap-y-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat text-2xl text-center ' + ( isSubmitted ? 'opacity-1' : ' opacity-0 select-none pointer-events-none' ),
								"aria-hidden" : ! isSubmitted,
							}
						}
					>
						<div
							{
								...{
									className : 'bg-green rounded-full p-2'
								}
							}
						>
							<Check
								{
									...{
										className : 'h-12 w-12'
									}
								}
							/>
						</div>
						<p>
							Your form has been successfully submitted.
						</p>
					</div>
					<form 
						{
							...{
								onSubmit : sendEmail,
								className : 'font-lora flex flex-wrap gap-4 transition-all duration-300 ' + ( isSubmitted ? 'opacity-0 select-none pointer-events-none	' : '' ),
								"aria-hidden" : isSubmitted,
								ref : form
							}
						}
					>
						<div className="w-full md:w-[calc(50%-8px)]">
							<div className="flex flex-col">
								<label htmlFor="name">Name*</label>
								<input 
									{
										...{
											type : 'text',
											id : 'name',
											name : 'name',
											className : 'border py-1 px-2 mt-2',
											value : values?.name,
											onChange : event => {

												setFieldValue( 'name', event.target.value, false );
												setFieldError( 'name', null );
												
											}
										}
									}
								/>
							</div>
							{ errors.name &&
							<p className="mt-1 text-sm text-[red]">
								{ errors?.name }
							</p>
							}
						</div>
						<div className="w-full md:w-[calc(50%-8px)]">
							<div className="flex flex-col">
								<label
									{
										...{
											htmlFor : 'email'
										}
									}
								>
									Email Address*
								</label>
								<input
									{
										...{
											type : 'email',
											id : 'email',
											name : 'email',
											className : 'border py-1 px-2 mt-2',
											value : values?.email,
											onChange : event => {

												setFieldValue( 'email', event.target.value, false);
												setFieldError( 'email', null );
												
											}
										}
									}
								/>
							</div>
							{ errors.email &&
							<p className="mt-1 text-sm text-[red]">
								{ errors?.email }
							</p>
							}
						</div>
						<div className="w-full md:w-[calc(50%-8px)]">
							<div className="flex flex-col">
								<label htmlFor="phone">
									Phone*
								</label>
								<input
									{
										...{
											type : 'tel',
											id : 'phone',
											name : 'phone',
											className : 'border py-1 px-2 mt-2',
											value : values?.phone,
											onChange : event => {

												setFieldValue( 'phone', event.target.value, false );
												setFieldError( 'phone', null );
												
											}
										}
									}
								/>
							</div>
							{ errors.phone &&
							<p className="mt-1 text-sm text-[red]">
								{ errors?.phone }
							</p>
							}
						</div>
						<div className="w-full md:w-[calc(50%-8px)]">
							<div className="flex flex-col">
								<label htmlFor="subject">
									Subject*
								</label>
								<input 
									{
										...{
											type : 'text',
											id : 'subject',
											name : 'subject',
											value : values?.subject,
											className : 'border py-1 px-2 mt-2',
											onChange : event => {

												setFieldValue( 'subject', event.target.value, false );
												setFieldError( 'subject', null );
												
											}									
										}
									}
								/>
							</div>
							{ errors.subject &&
							<p className="mt-1 text-sm text-[red]">
								{ errors?.subject }
							</p>
							}
						</div>
						<div className="w-full">
							<div className="flex flex-col">
								<label htmlFor="message">
									Message*
								</label>
								<textarea
									{
										...{
											id : 'message',
											name : 'message',
											type : 'text',
											className : 'border h-32 px-2 mt-2',
											value : values?.message,
											onChange : event => {

												setFieldValue( 'message', event.target.value, false );
												setFieldError( 'message', null );
												
											}									
										}
									}
								></textarea>
							</div>
							{ errors.message &&
							<p className="mt-1 text-sm text-[red]">
								{ errors?.message }
							</p>
							}
						</div>
						<button type="submit" className='w-full md:w-4/12 md:ml-auto font-lora text-md border-2 rounded-full px-8 py-2 hover:bg-black hover:text-white transition-all duration-300'>Submit</button>
					</form>
				</div>

			</div>
		</section>
	);

};

export default ContactForm;