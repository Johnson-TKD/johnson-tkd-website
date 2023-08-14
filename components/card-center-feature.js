'use client'

import { GoogleMap, Marker } from '@react-google-maps/api';


const CardCenterFeature = ({ title, description, location, backgroundColor, color, sectionId }) => {

	return (

		<section 
			{
				...{
					className : 'px-8 space-y-4 text-center mb-24 py-24',
					style : {
						backgroundColor,
						color
					},
					id : sectionId
				}
			}
		>
			<div className="flex flex-col gap-y-4 max-w-screen-lg m-auto w-full md:w-8/12">
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
				{ location &&
					<GoogleMap
						center={{
							lat : location?.lat,
							lng : location?.lon
						}}
						zoom={ 15 }
						mapContainerClassName='w-full h-96'
					>
						<Marker 
							position={{
								lat : location?.lat,
								lng : location?.lon
							}}
						/>
					</GoogleMap>
				}
			</div>
		</section>

	);

};

export default CardCenterFeature;