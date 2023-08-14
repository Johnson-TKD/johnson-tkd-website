"use client"

const CardSocialFeed = ({ title, description }) => {

	return (

		<section className="w-full px-8 max-w-screen-lg m-auto pb-24 flex flex-col items-center justify-center space-y-4 text-center">
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
			<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fjohnsontkd%2F&tabs=timeline&width=1240px&height=500px&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="500" height="500" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" data-adapt-container-width="true"/>
		</section>

	);

};

export default CardSocialFeed;