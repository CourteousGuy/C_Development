const PATH = 'http://localhost:3001/'

export async function GET() {
    const response = await fetch(PATH)

    if (!response.ok) {
        console.error('Failed to fetch data from the API')
        throw new Error('Failed to fetch data')
    }

    const result = await response.json()
    return Response.json(result);
}

export async function POST(dataPath: string, data: any) {
    const headers: Headers = new Headers()
    headers.set('Content-Type', 'application/json')
    // We also need to set the `Accept` header to `application/json`
    // to tell the server that we expect JSON in response
    headers.set('Accept', 'application/json')

    const request = new Request(`${PATH}${dataPath}`, {
        // We need to set the `method` to `POST` and assign the headers
        method: 'POST',
        headers: headers,
        // Convert the user object to JSON and pass it as the body
        body: JSON.stringify(data)
    })
    const response = await fetch(request)

    if (!response.ok) {
        console.error('Failed to fetch data from the API')
        throw new Error('Failed to fetch data')
    }

    const result = await response.json()
    return Response.json(result);
}