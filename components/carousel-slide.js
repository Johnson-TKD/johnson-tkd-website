import Link from "next/link";

const CarouselSlide = ({ url, title, description, link }) => {
	console.log( link )

	return ( 

		<div
			{
				...{
					className : 'h-[400px] md:h-[630px] bg-cover w-full',
					style : {
						backgroundImage : 'url(' + url + ')'
					}
				}
			}
		>
			<div className="max-w-screen-2xl m-auto w-full h-full flex flex-col items-center justify-center text-white gap-y-4 px-8 text-center">
				{ title &&
				<h2 className="font-montserrat text-6xl font-bold">
					{ title }
				</h2>
				}
				{ description &&
				<p className="font-lora text-2xl">
					{ description }
				</p>
				}
				{ link &&
				<Link 
					{
						...{
							href : ( link?.url || '/' ),
							target : ( link?.linkTarget ? '_blank' : '_parent' ),
							className : 'font-lora text-md border-2 px-8 py-2 hover:bg-white hover:text-black transition-all duration-300'
						}
					}
				>
					{ link?.cta }
				</Link>
				}
			</div>
		</div>

	)

};

export default CarouselSlide;