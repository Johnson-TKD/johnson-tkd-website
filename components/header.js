'use client'

import { useAppContext } from "@/functions/hooks";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.png";
import { Menu, Times } from "./svgs";
import { useEffect, useRef } from "react";
import Headroom from 'headroom.js'

const Header = ({ data }) => {

	const { state : { menu }, dispatch } = useAppContext();

	const modal = useRef( null );

	const header = useRef( null );

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

	useEffect( () => {

		const headroom = new Headroom( header?.current, {
			offset : 100,
			tolerance : 5
		});

		headroom.init();

		if ( ! menu?.active ) return;

		const modalEl = modal?.current;

		const focusableContent = [
			"a[href]",
			"area[href]",
			'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
			"select:not([disabled]):not([aria-hidden])",
			"textarea:not([disabled]):not([aria-hidden])",
			"button:not([disabled]):not([aria-hidden])",
			"iframe",
			"object",
			"embed",
			"[contenteditable]",
			'[tabindex]:not([tabindex^="-"])',
		  ];

		const focusableEls = modalEl.querySelectorAll( focusableContent );

		const firstFocusableEl = focusableEls[ 0 ];

		const lastFocusableEl = focusableEls[ focusableEls.length - 1 ];

		const handleTabKeyPress = (event) => {

			if ( event.key === 'Tab' ) {

				if ( event.shiftKey && document.activeElement === firstElement ) {

					event.preventDefault();

					lastFocusableEl.focus();

				} else if (

					!event.shiftKey &&
					document.activeElement === lastFocusableEl

				){

					event.preventDefault();

					firstFocusableEl.focus();
				}

			}

		};

		const handleEscapeKeyPress = ( event ) => {

			if ( event.key === 'Escape' ) {

				actions.open();

			}

		};

		modalEl.addEventListener( 'keydown', handleTabKeyPress );

		modalEl.addEventListener( 'keydown', handleEscapeKeyPress );

		return () => {

			modalEl.removeEventListener( 'keydown', handleTabKeyPress );

			modalEl.removeEventListener( 'keydown', handleEscapeKeyPress );
			
		};

	}, [ menu?.active ])

    return (

		<header className="pt-[100px] md:pt-[120px]">
			<nav
				{
					...{
						className : 'h-[100px] md:h-[120px] fixed z-30 top-0 left-0 w-full flex flex-col items-center justify-between shadow bg-white font-montserrat transition-all duration-500 ease-in-out',
						ref : header
					}
				}
			>
				<div className="w-full px-8 max-w-screen-lg m-auto grid grid-cols-12">
					<div className="col-span-6 lg:col-span-3 flex items-center gap-x-4 py-4 text-black font-montserrat font-bold text-black text-xl">
						<a
							{
								...{
									href : '/',
									tabIndex : ( menu?.active ? 0 : -1 )
								}
							}
						>
							<Image 
								{
									...{
										src : Logo.src,
										width : 85,
										height : 85,
										alt : '',
										className : 'w-[65px] md:w-[85px] h-[65px] md:h-[85px]'
									}
								}
							/>
						</a>
					</div>
					<ul className="col-span-6 relative text-md hidden lg:flex justify-center items-center">
					{ data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.length > 0 &&
						<div className="w-full flex justify-center items-center space-x-8 py-2 font-montserrat font-medium text-md">
							{
								data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.map( ({ text, ...rest }, key ) => (
									<li key={ key }>
										<a 
											{
												...{
													className : 'text-black hover:underline',
													href : rest?.fields?.url,
													target : '_self',
													tabIndex : ( menu?.active ? 0 : -1 )
												}
											}
										>
											{ rest?.fields?.cta }
										</a>
									</li>
								))
							}
						</div>
					}
					</ul>
					<div className="col-span-6 lg:col-span-3 flex items-center justify-end gap-x-8">
						<Link className="hidden lg:flex font-montserrat font-medium text-md border-2 rounded-full px-8 py-2 hover:bg-black hover:text-white transition-all duration-300" href='#contact-us'>
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
			<>
				<button
					{
						...{
							type : 'button',
							className : 'z-10 fixed top-0 left-0 w-full h-full bg-black transform duration-300 ' + ( menu?.active ? 'opacity-20 visible' : 'opacity-0 invisible' ),
							onClick : actions.close,
							tabIndex : ( menu?.active ? 0 : -1 )
						}
					}
				/>
				<div
					{
						...{
							className : 'z-40 fixed top-0 w-full h-screen bg-white shadow transform duration-300 md:w-5/12 ' + ( menu?.active ? 'right-0' : '-right-full' ),
							ref : modal
						}
					}
				>
					<button
						{
							...{
								type : 'button',
								onClick : actions.close,
								className : 'absolute top-6 right-8',
								tabIndex : ( menu?.active ? 0 : -1 )
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
										className : 'col-span-6 lg:col-span-3 flex items-center gap-x-4 pb-8 text-black font-montserrat font-bold text-black text-xl',
										onClick : actions.close
									}
								}
							>
								<Image 
									{
										...{
											src : Logo.src,
											width : 85,
											height : 85,
											alt : ''
										}
									}
								/>
							</Link>
							<ul className="flex flex-col items-center gap-y-4">
							{ data?.header?.items?.[ 0 ]?.fields?.navigationLinks?.map( ({ text, ...rest }, key ) => (
								<li key={ key }>
									<a
										{
											...{
												className : 'block text-black font-bold text-xl text-center hover:underline font-montserrat',
												href : rest?.fields?.url,
												onClick : actions.close,
												tabIndex : ( menu?.active ? 0 : -1 )
											}
										}
									>
										{ rest?.fields?.cta }
									</a>
								</li>
							))}
								<li>
									<Link 
										{
											...{
												className : 'flex font-lora text-md border-2 rounded-full px-8 py-2 mt-4 hover:bg-black hover:text-white transition-all duration-300',
												href : '/',
												tabIndex : ( menu?.active ? 0 : -1 )
											}
										}
									>
										Start Today
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</>
			}
		</header>


    );

}

export default Header;