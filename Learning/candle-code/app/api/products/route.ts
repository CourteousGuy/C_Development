import axios from 'axios';

export async function GET({ productId='' }) {

    const response = await fetch(`http://localhost:3001/products/${productId}`)

    if (!response.ok) {
        console.error('Failed to fetch data from the API')
        throw new Error('Failed to fetch data')
    }

    const result = await response.json()
    return Response.json(result);
}