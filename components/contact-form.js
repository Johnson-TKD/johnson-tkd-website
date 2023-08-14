'use client'

import * as Yup from 'yup';
import { useFormik } from 'formik';

const ContactForm = ({ title, subheading, description, sectionId, backgroundColor }) => {

	const {
		handleSubmit,
		setFieldValue,
		setFieldError,
		values,
		errors
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
		}),
		onSubmit : ( values ) => {
			console.log( values )
		}
	});

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
				<form onSubmit={ handleSubmit } className="font-lora flex flex-wrap gap-4">
					<div className="w-full md:w-[calc(50%-8px)]">
						<div className="flex flex-col">
							<label htmlFor="name">Name*</label>
							<input 
								{
									...{
										type : 'text',
										id : 'name',
										className : 'border py-1 px-2 mt-2',
										value : values?.name,
										onChange : event => {

											setFieldValue( 'name', event.target.value );
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
							<label htmlFor="email">Email Address*</label>
							<input
								{
									...{
										type : 'email',
										id : 'email',
										className : 'border py-1 px-2 mt-2',
										value : values?.email,
										onChange : event => {

											setFieldValue( 'email', event.target.value );
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
							<label htmlFor="phone">Phone*</label>
							<input
								{
									...{
										type : 'tel',
										id : 'phone',
										className : 'border py-1 px-2 mt-2',
										value : values?.phone,
										onChange : event => {

											setFieldValue( 'phone', event.target.value );
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
							<label htmlFor="subject">Subject*</label>
							<input 
								{
									...{
										type : 'text',
										id : 'subject',
										value : values?.subject,
										className : 'border py-1 px-2 mt-2',
										onChange : event => {

											setFieldValue( 'subject', event.target.value );
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
							<label htmlFor="message">Message*</label>
							<textarea
								{
									...{
										id : 'message',
										name : 'message',
										type : 'text',
										className : 'border h-32 px-2 mt-2',
										value : values?.message,
										onChange : event => {

											setFieldValue( 'message', event.target.value );
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
					<button type="submit" className='ml-auto font-lora text-md border-2 rounded-full px-8 py-2 hover:bg-black hover:text-white transition-all duration-300'>Submit</button>
				</form>
			</div>
		</section>
	);

};

export default ContactForm;