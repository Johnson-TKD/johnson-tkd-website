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
				<div className="w-full px-8 max-w-screen-lg m-auto grid grid-cols-12">
					<Link
						{
							...{
								href : '/',
								className : 'col-span-6 lg:col-span-3 flex items-center gap-x-4 py-4 text-black font-montserrat font-bold text-black text-xl',
							}
						}
					>
						<Image 
							src={ Logo.src }
							width={85}
							height={85}
							alt=""
						/>
						<span className="w-full">
						Johnson&apos;s&#013;<br/>Taekwon&#8209;do
						</span>
					</Link>
					<ul className="col-span-6 relative text-md hidden lg:flex justify-center items-center">
					{ data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.length > 0 &&
						<div className="w-full flex justify-center items-center space-x-8 py-2 font-montserrat font-bold text-sm">
							{
								data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.map( ({ text, ...rest }, key ) => (
									<li key={ key }>
										<Link 
										{
											...{
												className : 'text-black hover:underline',
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
					<div className="col-span-6 lg:col-span-3 flex items-center justify-end gap-x-8">
						<Link className="hidden lg:flex font-lora text-md border-2 rounded-full px-8 py-2 hover:bg-black hover:text-white transition-all duration-300" href='/'>
							Start Today
						</Link>
						<button
							{
								...{
									type : 'button',
									onClick : actions.open,
									className : 'flex lg:hidden'
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
						className : 'z-20 fixed top-0 w-full h-screen bg-white shadow transform duration-300 md:w-5/12 ' + ( menu?.active ? 'right-0' : '-right-full' )
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
								className : 'w-8 h-8 fill-black'
							}
						}
					/>
				</button>
				<div className="h-full p-12">
					<div className="h-full flex flex-col items-center justify-center">
						<Link
							{
								...{
									href : '/',
									className : 'col-span-6 lg:col-span-3 flex items-center gap-x-4 py-4 text-black font-montserrat font-bold text-black text-xl',
									onClick : actions.close
								}
							}
						>
							<Image 
								src={ Logo.src }
								width={85}
								height={85}
								alt=""
							/>
						</Link>
						<ul className="flex flex-col items-center gap-y-4">
						{
							data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.map( ({ text, ...rest }, key ) => (
								<li key={ key }>
									<Link
									{
										...{
											className : 'block text-black font-bold  text-lg hover:underline font-montserrat',
											href : rest?.fields?.url,
											onClick : actions.close
										}
									}
									>
										{ rest?.fields?.cta }
									</Link>
								</li>
							))
						}
							<li>
								<Link className="flex font-lora text-md border-2 rounded-full px-8 py-2 hover:bg-black hover:text-white transition-all duration-300" href='/'>
									Start Today
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			}
		</header>


    );

}

export default Header;