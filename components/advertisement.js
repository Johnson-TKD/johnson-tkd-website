'use client'

import Link from "next/link";

const Advertisement = ({ 
	title, 
	description, 
	link, 
	image, 
	sectionId 
}) => {
	
	return (

		<section
			{
				...{
					className : 'w-full bg-no-repeat bg-cover bg-center relative ',
					style : {
						backgroundImage : 'url(' + image?.fields?.file?.url
					},
					id : sectionId
				}
			}
		>
			<div className="relative z-20 px-8 max-w-screen-lg m-auto space-y-4 text-center mb-24 py-24 text-white">
				{ title &&
					<h2 className="font-montserrat text-4xl font-bold">
						{ title }
					</h2>
				}
				{ description &&
					<p className="font-lora">
						{ description }
					</p>
				}
				{ link &&
					<Link 
						{
							...{
								href : ( link?.fields?.url ? link?.fields?.url : '/' ),
								className : 'inline-block font-montserrat font-medium text-md border-2 rounded-full px-8 py-2 hover:bg-white hover:text-black transition-all duration-300',
								target : ( link?.fields?.linkTarget ? '_blank' : '_parent' )
							}
						}
					>
						{ link?.fields?.cta }
					</Link>
				}
			</div>
			<div className="z-10 absolute top-0 left-0 w-full h-full bg-black opacity-50 mix-blend-multiply"/>
		</section>

	);

}

export default Advertisement;