'use client'

import { useAppContext } from "@/functions/hooks";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.png";
import { Location, Menu, Times } from "./svgs";

const Header = ({ data }) => {

	const { state : { menu }, dispatch } = useAppContext();

	const actions = {
		open : () => dispatch({
			type : 'menu',
			active : true
		}),
		close : () => dispatch({
			type : 'menu',
			active : false
		})
	};

    return (

		<header>
			<nav
				{
					...{
						className : 'z-10 top-0 left-0 w-full flex flex-col items-center justify-between shadow bg-white font-montserrat'
					}
				}
			>
				<div className="w-full flex justify-between px-8 max-w-screen-lg m-auto">
					<div className="flex items-center gap-x-8 py-4">
						<Image 
							src={ Logo.src }
							width={85}
							height={85}
							alt=""
						/>
						<Link
							{
								...{
									href : '/',
									className : 'text-black font-montserrat font-bold text-black text-2xl',
								}
							}
						>
							Johnson&apos;s&#013;Taekwon&#8209;do
						</Link>
					</div>
					<div className="flex items-center gap-x-8">
						{ data?.header?.items?.[ 0 ]?.fields?.address && 
						<div className="flex items-center gap-x-2">
							<Location className="w-10 h-10" />
							<address className="not-italic font-montserrat font-normal w-60">
								{ data?.header?.items?.[ 0 ]?.fields?.address }
							</address>
						</div>
						}
						<button
							{
								...{
									type : 'button',
									onClick : actions.open,
								}
							}
						>
							<Menu
								{
									...{
										className : 'w-8 h-8 fill-black'
									}
								}
							/>
						</button>
					</div>
				</div>
				<div className="bg-black w-full">
					<ul className="px-8 text-md max-w-screen-lg	m-auto">
					{ data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.length > 0 &&
					<div className="flex items-center space-x-8 py-4 font-lora font-bold">
						{
							data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.map( ({ text, ...rest }, key ) => (
								<li key={ key }>
									<Link 
									{
										...{
											className : 'text-white',
											href : rest?.fields?.url
										}
									}
									>
										{ rest?.fields?.cta }
									</Link>
								</li>
							))
						}
					</div>
					}
					</ul>
				</div>
			</nav>
			{ data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.length > 0 &&
			<button
				{
					...{
						type : 'button',
						className : 'z-10 fixed top-0 left-0 w-full h-full bg-black transform duration-300 ' + ( menu?.active ? 'opacity-20 visible' : 'opacity-0 invisible' ),
						onClick : actions.close
					}
				}
			/>
			}
			{ data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.length > 0 &&
			<div
				{
					...{
						className : 'z-20 fixed top-0 w-full h-screen bg-white shadow transform duration-300 md:w-1/4 ' + ( menu?.active ? 'right-0' : '-right-full' )
					}
				}
			>
				<button
					{
						...{
							type : 'button',
							onClick : actions.close,
							className : 'absolute top-6 right-8'
						}
					}
				>
					<Times
						{
							...{
								className : 'w-8 h-8 fill-brand-1'
							}
						}
					/>
				</button>
				<div className="h-full p-12">
					<div className="h-full overflow-scroll space-y-6">
						{
							data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.map( ({ text, ...rest }, key ) => (
								<Link key={ key }
								{
									...{
										className : 'block text-brand-1',
										href : rest?.fields?.url
									}
								}
								>
									{ rest?.fields?.cta }
								</Link>
							))
						}
					</div>
				</div>
			</div>
			}
		</header>


    );

}

export default Header;