"use client"

import { useEffect, useState } from 'react';
import { FacebookEmbed } from 'react-social-media-embed';

const CardSocialFeed = ({ title, description, backgroundColor, sectionId, facebookPost }) => {

	const [ isMounted, setIsMounted ] = useState( false );

	useEffect( () => {

		setIsMounted( true )

	}, [])

	return (

		<section
			{
				...{
					className : 'mb-24 ',
					style : {
						backgroundColor
					},
					id : sectionId
				}
			}
		>
			<div className="w-full px-8 max-w-screen-lg m-auto py-24 flex flex-col items-center justify-center space-y-4 text-center">
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
				{ isMounted && facebookPost &&
					<div className="flex justify-center">
						<FacebookEmbed
						url={ facebookPost }
						width={350} />
					</div>
				}
				</div>	
		</section>

	);

};

export default CardSocialFeed;