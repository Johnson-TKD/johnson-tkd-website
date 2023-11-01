import Advertisement from "@/components/advertisement";
import CardCarousel from "@/components/card-carousel";
import CardCenterFeature from "@/components/card-center-feature";
import CardFeature from "@/components/card-feature";
import CardSocialFeed from "@/components/card-social-feed";
import ContactForm from "@/components/contact-form";
import Schedule from "@/components/schedule";
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

			<CardFeature key={ key }
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

			<Advertisement key={ key }
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

			<CardCenterFeature key={ key }
				{
					...{
						...section.fields
					}
				}
			/>

		);

	}

	if ( section?.sys?.contentType?.sys?.id === 'socialMediaSection') {

		return (

			<CardSocialFeed key={ key }
				{
					...{
						...section.fields
					}
				}
			/>

		)

	}

	if ( section?.sys?.contentType?.sys?.id === 'schedule') {

		return (

			<Schedule key={ key }
				{
					...{
						...section.fields
					}
				}
			/>

		)

	}

	if ( section?.sys?.contentType?.sys?.id === 'contactForm') {

		return (

			<ContactForm key={ key }
				{
					...{
						...section.fields
					}
				}
			/>

		)

	}

}