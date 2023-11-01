import Header from '../components/header';
import HtmlHead from '@/components/head';
import { contentRender } from '@/functions/content-render';
import Footer from '@/components/footer';
import { getData } from '@/functions/helper';

export default async function Home() {

    let data = await getData();

    return (
        
            <main>
                <HtmlHead />
                <Header
                    {
                        ...{
                            data
                        }
                    }
                />
                { data?.fields?.sections &&

                    data?.fields?.sections.map( ( section, key ) => {

                        return ( 

                            contentRender( section, key )

                        )

                    })

                }
                <Footer
                    {
                        ...{
                            data
                        }
                    }
                />
            </main>

    )
}
