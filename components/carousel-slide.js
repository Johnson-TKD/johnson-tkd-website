const CarouselSlide = ({ url, title, description }) => {

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
			<div className="w-full h-full flex flex-col items-center justify-center text-white gap-y-4">
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
			</div>
		</div>

	)

};

export default CarouselSlide;