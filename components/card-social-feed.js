"use client"

const CardSocialFeed = ({ title, description, backgroundColor, sectionId }) => {

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
				<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjohnsontkd%2F&tabs=timeline&width=1240px&height=500px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="500" height="500" scrolling="no" frameBorder="0" allowFullScreen={ true } allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" data-adapt-container-width="true"/>				
			</div>

		</section>

	);

};

export default CardSocialFeed;