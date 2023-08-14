'use client'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types'
import Image from "next/image";

const CardFeature = ({ heading, description, subheading, image, altText, alignment, sectionId  }) => {

	const options = {

        renderNode: {
            [BLOCKS.PARAGRAPH]: ( node, children ) => <p className="mb-4 font-lora"> { children }</p>,
        }

    };
	// console.log( image?.fields?.file?.url.slice( 2 ) )
	return (

		<section 
			{
				...{
					className : 'w-full px-8 max-w-screen-lg m-auto pb-24',
					id : sectionId
				}
			}
		>
			<div
				{
					...{
						className : 'flex flex-col gap-y-4 gap-x-12 ' + ( !alignment ? 'lg:flex-row-reverse' : 'lg:flex-row')
					}
				}
			>
				<div className="flex flex-col space-y-4 w-full lg:w-8/12">
					<div className="font-montserrat text-md font-bold">
					{ subheading &&
						<h2>
							{ subheading }
						</h2>
					}
					{ heading &&
						<p className="font-montserrat text-4xl font-bold">
							{ heading }
						</p>
					}
					</div>
					{ description &&
					<div>
						{
							documentToReactComponents( description, options )
						}
					</div>
					}
				</div>
				{ image?.fields?.file?.url &&
				<div className="w-full lg:w-4/12 rounded-xl border border-black">
					<Image 
						{
							...{
								src : 'http://' + image?.fields?.file?.url.slice( 2 ),
								width: 1200,
								height: 1200,
								alt : altText,
								className : 'min-h-[400px] w-full block object-cover object-center rounded-xl'
							}
						}
					/>
				</div>
				}
			</div>
		</section>

	);

}

export default CardFeature;