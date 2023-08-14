'use client'

import Image from "next/image";
import Link from "next/link";

const Footer = ({ data }) => {

	return (

		<footer className="w-full bg-black">
			<div className="flex flex-col px-8 max-w-screen-lg m-auto text-center py-12 gap-y-8">
				{ data?.footer?.items?.[ 0 ]?.fields?.trademark &&
				<p className="text-white font-lora">
					{ data?.footer?.items?.[ 0 ]?.fields?.trademark }
				</p>
				}
				{ data?.footer?.items?.[ 0 ]?.fields?.socialLinks &&
				<ul className="w-full flex justify-center gap-x-6 px-8 max-w-screen-lg m-auto">
					{
						data?.footer?.items?.[ 0 ]?.fields?.socialLinks.map( ( link, key ) => {

							return (

								<li key={ key }>
									<Link
										{
											...{
												href : link?.fields?.url
											}
										}
									>
										<Image 
											{
												...{
													src : 'http://' + link?.fields?.iconImage?.fields?.file?.url.slice( 2 ),
													alt : '',
													width : 48,
													height: 48,
													className : 'w-12 h-12'
												}
											}
										/>
									</Link>
								</li>

							);

						})
					}
				</ul>
				}
			</div>
		</footer>

	);

}

export default Footer;