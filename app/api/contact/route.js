const mail = require('mandrill-api/mandrill');

const apiKey = process.env.NEXT_PUBLIC_MANDRILL_API_KEY;

const mandrillClient = new mail.Mandrill( apiKey );

import { NextResponse } from "next/server"

export async function POST ( req, res ) {
	
	const { 
		name, 
		email, 
		phone, 
		subject
	} = await req.json();

	const message = {
		to: [{ email: 'lester.ws.yiu@gmail.com', name: 'Recipient Name' }],
		from: { email, name },
		subject,
		text: 'test',
		html: `<p>${ 'test' }</p>`,
	  };

	try {
		const data = await new Promise( ( resolve, reject ) => {

			mandrillClient.messages.send(
				{
					message
				},
				( response ) => resolve( response ),
				( error ) => reject( error )
			)

		});

		res.json( data );

	} catch( error ) {

		console.log( error )

	}

	console.log( name )
	
	return NextResponse.json({ message: 'success', data: res });
	
}