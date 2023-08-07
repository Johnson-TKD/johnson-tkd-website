import { createClient } from 'contentful';
import Image from 'next/image'
import Header from '../src/components/header';
import HtmlHead from '@/src/components/head';

async function getData() {
  
  let data;
    
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {

    const { total, items } = await client.getEntries({
      content_type : 'page',
      include : 10,
      [ 'fields.slug' ] : '/'
    });

    const header = await client.getEntries({
      content_type : 'header',
      include : 10,
    });

    data = items?.[ 0 ] || null;

    data.header = header;

  } catch ( error ) {

    console.log( error );

    return {
      notFound: true
    }

  }

  return data;

}

export default async function Home() {

  const data = await getData();

  console.log( data )

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
    </main>
  )
}
