'use client'

import Header from '../components/header';
import HtmlHead from '@/components/head';
import { getData, contentRender } from '@/functions/content-render';
import Footer from '@/components/footer';
import { ContextProvider } from '@/components/context-provider'

export default async function Home() {

    const data = await getData();

    return (
        
        <ContextProvider>
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
        </ContextProvider>
    )
}
