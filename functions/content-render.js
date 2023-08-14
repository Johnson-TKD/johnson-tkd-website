import Advertisement from "@/components/advertisement";
import CardCarousel from "@/components/card-carousel";
import CardCenterFeature from "@/components/card-center-feature";
import CardFeature from "@/components/card-feature";
import { createClient } from "contentful";

export const contentRender = ( section, key ) => {

    if ( section?.sys?.contentType?.sys?.id === 'carousel' ) {

        return (

			<CardCarousel key={ key }
				{
					...{
						...section.fields,
					}
				}
			/>

        );

    } 

	if ( section?.sys?.contentType?.sys?.id === 'feature' ) {

		return (

			<CardFeature 
				{
					...{
						...section.fields,
					}
				}
			/>

		);

	}

	if ( section?.sys?.contentType?.sys?.id === 'advertisement' ) {

		return (

			<Advertisement 
				{
					...{
						...section.fields,
					}
				}
			/>

		);

	}

	if ( section?.sys?.contentType?.sys?.id === 'centerFeature' ) {

		return (

			<CardCenterFeature 
				{
					...{
						...section.fields
					}
				}
			/>

		);

	}

}

export async function getData() {
  
    let data;
      
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    });
  
    try {
  
		const { total, items } = await client.getEntries({
			content_type : 'page',
			include : 10,
			[ 'fields.slug' ] : '/',
		});
  
		const header = await client.getEntries({
			content_type : 'header',
			include : 10,
		});

		const footer = await client.getEntries({
			content_type : 'footer',
			include : 10,
		});
	
		data = items?.[ 0 ] || null;
	
		data.header = header;

		data.footer = footer;
  
    } catch ( error ) {
  
		console.log( error );
	
		return {

			notFound: true

		}
  
    }
  
    return data;
  
  }