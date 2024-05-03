const BASE_URL = 'http://localhost:3500/api/';

async function callApi(endpoint, body) {
    const url = `${BASE_URL}${endpoint}`;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : undefined,
    };
    try {
        const response = await fetch(url, requestOptions);

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`API call failed: ${error.message}`);
    }
}
export default callApi;
