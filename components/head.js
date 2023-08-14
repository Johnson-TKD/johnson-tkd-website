const { default: Head } = require("next/head");

const HtmlHead = ({}) => {

    const googleEndpoint = `https://maps.googleapis.com/maps/api/js?key=${ process.env.NEXT_PUBLIC_GOOGLE_API_KEY }`

    return (

        <>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
            { process.env.NEXT_PUBLIC_GOOGLE_API_KEY &&
                <script async src={ googleEndpoint }></script>
            }
        </>

    );

}

export default HtmlHead;