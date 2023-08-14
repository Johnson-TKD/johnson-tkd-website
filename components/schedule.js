"use client"

import CardSchedule from "./card-schedule";

const Schedule = ({ title, subheading, description, scheduleCards, backgroundColor }) => {

	return (

		<section
			{
				...{
					className : 'mb-24',
					style : {
						backgroundColor
					}
				}
			}
		>
			<div className="w-full px-8 max-w-screen-lg m-auto flex flex-col gap-y-8">
				<div className="flex flex-col gap-y-4">
					<div className="flex flex-col gap-y-2">
						{ subheading &&
							<h2 className="font-montserrat text-md font-bold">
								{ subheading }
							</h2>
						}
						{ title &&
						<h2 className="font-montserrat text-4xl font-bold">
							{ title }
						</h2>
						}
					</div>
					{ description &&
					<p className="font-lora">
						{ description }
					</p>
					}
				</div>
				{ scheduleCards &&

				<div className="flex flex-wrap gap-y-8">

					{ scheduleCards.map( ( schedule, key ) => {
						
						return (

							<CardSchedule key={ key }
								{
									...{
										...schedule.fields,
										className : ( key % 2 !== 0 ? 'lg:ml-8' : '' )
									}
								}
							/>

						);

					})}


				</div>

				}
			</div>
		</section>

	);

}

export default Schedule;