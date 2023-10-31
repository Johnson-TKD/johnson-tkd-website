'use client'

import Header from '../components/header';
import HtmlHead from '@/components/head';
import { getData, contentRender } from '@/functions/content-render';
import Footer from '@/components/footer';
import { ContextProvider } from '@/components/context-provider'
import { useEffect, useState } from 'react';

export default function Home() {

    const [ data, setData ] = useState( null );

    const fetchData = async () => {

        setData( await getData() );

    }

    useEffect( () => {

        fetchData();

    }, [])

    return (
        
        <ContextProvider>
            <main>
                <HtmlHead />
                { data &&
                <>
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
                </>
                }
            </main>
        </ContextProvider>

    )
}
