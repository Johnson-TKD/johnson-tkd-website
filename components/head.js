const { default: Head } = require("next/head");

const HtmlHead = ({}) => {

    const googleEndpoint = `https://maps.googleapis.com/maps/api/js?key=${ process.env.NEXT_PUBLIC_GOOGLE_API_KEY }`

    return (

        <>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
            <link rel="shortcut icon" href="/favicon-16x16.png" type="image/x-icon"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png"/>
            <link rel="apple-touch-icon" sizes="57x57" href="/favicon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/favicon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="/favicon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="/favicon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="/favicon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="/favicon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="/favicon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png"/>
            { process.env.NEXT_PUBLIC_GOOGLE_API_KEY &&
                <script async src={ googleEndpoint }></script>
            }
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0" nonce="T8jF2iOs"></script>
        </>

    );

}

export default HtmlHead;