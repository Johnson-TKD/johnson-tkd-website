const CardSchedule = ({ day, schedules, className }) => {

	return (

		<div className="w-full lg:w-1/2">
			<div
			{
				...{
					className : 'flex flex-col justify-center bg-white p-8 rounded-xl border border-black shadow-lg ' + className
				}
			}
			>
				<div className="mb-4">
					{ day &&
					<h3 className="font-montserrat font-bold text-xl">
						{ day }
					</h3>
					}
					<p className="font-lora">Available Classes:</p>
				</div>
				{ schedules &&

				<div className="flex flex-col gap-y-4">
					{ schedules.map( ( schedule, key ) => {

						return (

							<div className="flex items-center gap-x-4" key={ key }>
								<div 
									{
										...{
											className : 'block h-7 w-7 rounded-full bg-' + ( schedule?.fields?.color?.[ 0 ] )
										}
									}
								/>
								<p className="font-lora w-[calc(100%-28px)]">
									{ schedule?.fields?.text }
								</p>
							</div>

						);

					})}
				</div>

				}
			</div>
		</div>

	);

}

export default CardSchedule;