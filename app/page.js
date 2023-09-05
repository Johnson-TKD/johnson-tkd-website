import Header from '../components/header';
import HtmlHead from '@/components/head';
import { getData, contentRender } from '@/functions/content-render';
import Footer from '@/components/footer';

export default async function Home() {

  const data = await getData();

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
