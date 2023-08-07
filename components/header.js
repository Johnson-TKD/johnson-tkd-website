import { useAppContext } from "@/functions/hooks";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/logo.png";
import { Menu, Times } from "./svgs";

const Header = () => {

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
console.log(menu.active)
    return (

		<header>
			<nav
				{
					...{
						className : 'z-10 fixed top-0 left-0 w-full flex flex-col items-center justify-between shadow bg-white font-montserrat'
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
							Johnson&apos;s Taekwon-do
						</Link>
					</div>
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
				<div className="bg-black w-full">
					<ul className="px-8 text-md max-w-screen-lg	m-auto">
					{/* { menu?.length > 0 &&
					<div className="flex items-center space-x-8 py-4 font-lora font-bold">
						{
							menu?.map( ({ text, ...rest }, key ) => (
								<li>
									<Link 
									{
										...{
											key,
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
					} */}
					</ul>
				</div>
			</nav>
			{/* { menu?.length > 0 &&
			<button
				{
					...{
						type : 'button',
						className : 'z-10 fixed top-0 left-0 w-full h-full bg-black transform duration-300 ' + ( state?.menu?.active ? 'opacity-20 visible' : 'opacity-0 invisible' ),
						onClick : actions.close
					}
				}
			/>
			} */}
			{/* { menu?.length > 0 &&
			<div
				{
					...{
						className : 'z-20 fixed top-0 w-full h-screen bg-white shadow transform duration-300 md:w-1/4 ' + ( state?.menu?.active ? 'right-0' : '-right-full' )
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
							menu?.map( ({ text, ...rest }, key ) => (
								<Link 
								{
									...{
										key,
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
			} */}
		</header>


    );

}

export default Header;