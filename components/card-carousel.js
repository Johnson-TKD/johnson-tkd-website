"use client"
import Carousel from 'react-multi-carousel';
import CarouselSlide from './carousel-slide';

const CardCarousel = ({ items, title }) => {
    console.log( items )

    return (

        <>
			{ items &&
            <Carousel 
				additionalTransfrom={ 0 }
				showDots={ true }
				containerClass="relative"
				dotListClass="flex w-full absolute left-1/2 bottom-4 gap-x-4"
				autoPlaySpeed={ 3000 }
				centerMode={ false }
				infinite={ true }
				draggable = { true }
				focusOnSelect={ false }
				keyBoardControl
				minimumTouchDrag={ 80 }
				pauseOnHover
				renderArrowsWhenDisabled={ false }
				renderButtonGroupOutside={ false }
				renderDotsOutside={ false }
				responsive={{
					desktop: {
						breakpoint : {
							max : 3000,
							min : 1024
						},
						items : 1,
						partialVisibilityGutter: 0
					},
					tablet : {
						breakpoint : {
							max : 1024,
							min : 768
						},
						items : 1,
						partialVisibilityGutter: 0
					},
					mobile : {
						breakpoint : {
							max : 768,
							min : 0
						},
						items : 1,
						partialVisibilityGutter: 50
					}
				}}
			>
				{items?.map( ( item, key ) => {

					return (

						<CarouselSlide key={ key } 
							{
								...{
									url : item?.fields?.image?.fields?.file?.url,
									title : item?.fields?.title,
									description: item?.fields?.description?.content?.[0]?.content?.[0]?.value
								}
							}
						/>

					);
				})}
			</Carousel>
			}
        </>

    );

}

export default CardCarousel;