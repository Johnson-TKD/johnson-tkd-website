'use client'

import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/logo.png';

const Footer = ({ data }) => {

	const year = new Date().getFullYear();

	return (

		<footer
			{
				...{
					className : 'w-full space-y-6 w-full bg-black py-24 font-montserrat text-white'
				}
			}
		>
			<div className="flex-col max-w-screen-lg px-8 lg:flex-row flex max-w-screen-lg m-auto w-full h-full">
				<div className="w-full lg:w-1/2 flex flex-col pb-8 lg:pb-0 space-y-5">
					<Link
						{
							...{
								href : '/',
								className : 'block flex items-center gap-x-4 text-black font-montserrat font-bold text-black text-xl',
							}
						}
					>
						<img 
							src = '/favicon-310x310.png'
							width = {85}
							height = {85}
							alt = ""
						/>
						<span className="w-full text-white">
						Johnson&apos;s&#013;<br/>Taekwon&#8209;do
						</span>
					</Link>
					{ data?.footer?.items[0]?.fields?.address &&
					<p className="font-montserrat leading-6 lg:w-full font-mediun">
						{ data?.footer?.items[0]?.fields?.address }
					</p>
					}
					{ data?.footer?.items[0]?.fields?.trademark &&
					<p className="font-montserrat leading-6 lg:w-full font-medium">
						{ '@ Copyright ' + data?.footer?.items[0]?.fields?.trademark +  ' ' + year }
					</p>
					}
				</div>
				<div className="w-full lg:w-1/2 flex flex-col lg:flex-row justify-around gap-y-8">
					<div>
						<p className="font-bold text-lg underline mb-4">Navigation</p>
						{ data?.footer?.items?.[ 0 ]?.fields?.navigationLinks.length > 0 &&
						<ul className="flex flex-col gap-y-2">
							{ data?.footer?.items?.[ 0 ]?.fields?.navigationLinks.map( ( link, key ) => (
								<li key={ key }>
									<a
										{
											...{
												href : ( link?.fields?.url || '/' ),
												className : 'font-medium hover:underline'
											}
										}
									>
										{ link?.fields?.cta }
									</a>
								</li>
							))}
						</ul>
						}
					</div>
					<div>
						<p className="font-bold text-lg underline mb-4">
							Social
						</p>
						{ data?.footer?.items?.[ 0 ]?.fields?.socialLinks.length > 0 &&
						<ul className="flex flex-col gap-y-2">
							{ data?.footer?.items?.[ 0 ]?.fields?.socialLinks.map( ( link, key ) => (
								<li key={ key }>
									<a
										{
											...{
												href : ( link?.fields?.url || '/' ),
												target : '_blank',
												className : 'font-medium hover:underline'
											}
										}
									>
										{ link?.fields?.cta }
									</a>
								</li>
							))}
						</ul>
						}
					</div>
				</div>
			</div>
		</footer>

	);

}

export default Footer;