import Header from '../components/header';
import HtmlHead from '@/components/head';
import { contentRender } from '@/functions/content-render';
import Footer from '@/components/footer';
import { getData } from '@/functions/helper';

export default async function Home() {

    const data = JSON.stringify( await getData() );

    const parsedData = JSON.parse( data )

    return (
        
            <main>
                <HtmlHead />
                <Header
                    {
                        ...{
                            data : parsedData
                        }
                    }
                />
                { parsedData?.fields?.sections &&

                    parsedData?.fields?.sections.map( ( section, key ) => {

                        return ( 

                            contentRender( section, key )

                        )

                    })

                }
                <Footer
                    {
                        ...{
                            data : parsedData
                        }
                    }
                />
            </main>

    )
}
