import { NextResponse } from "next/server"

export async function POST ( req, res ) {
	
	const { 
		name, 
		email, 
		phone, 
		subject
	} = await req.json();
	
	return NextResponse.json({ message: 'success', data: res });
	
}