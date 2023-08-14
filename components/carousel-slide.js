import Link from "next/link";

const CarouselSlide = ({ url, title, description, link }) => {

	return ( 

		<div
			{
				...{
					className : 'relative h-[400px] md:h-[630px] bg-cover w-full',
					style : {
						backgroundImage : 'url(' + url + ')'
					}
				}
			}
		>
			<div className="relative z-20 max-w-screen-lg m-auto w-full h-full flex flex-col items-center justify-center text-white gap-y-4 px-8 text-center">
				{ title &&
				<h2 className="font-montserrat text-4xl md:text-6xl font-bold whitespace-break-spaces">
					{ title }
				</h2>
				}
				{ description &&
				<p className="font-lora text-xl md:text-2xl">
					{ description }
				</p>
				}
				{ link &&
				<Link 
					{
						...{
							href : ( link?.url || '/' ),
							target : ( link?.linkTarget ? '_blank' : '_parent' ),
							className : 'font-lora text-md border-2 rounded-full px-8 py-2 hover:bg-white hover:text-black transition-all duration-300'
						}
					}
				>
					{ link?.cta }
				</Link>
				}
			</div>
			<div className="z-10 absolute top-0 left-0 w-full h-full bg-black opacity-50 mix-blend-multiply"/>
		</div>

	)

};

export default CarouselSlide;