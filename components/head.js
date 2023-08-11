const { default: Head } = require("next/head");

const HtmlHead = ({}) => {

    return (

        <>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;700&family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet" />
        </>

    );

}

export default HtmlHead;