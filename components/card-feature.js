'use client'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from '@contentful/rich-text-types'

const CardFeature = ({ heading, description, subheading, image, altText, alignment }) => {

	const options = {

        renderNode: {
            [BLOCKS.PARAGRAPH]: ( node, children ) => <p className="mb-4 font-lora"> { children }</p>,
        }

    };

	return (

		<section className="w-full px-8 max-w-screen-lg m-auto pb-24">
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
					<img 
						src={ image?.fields?.file?.url } 
						alt={ altText } 
						className="min-h-[400px] w-full block object-cover object-center rounded-xl"
					/>
				</div>
				}
			</div>
		</section>

	);

}

export default CardFeature;