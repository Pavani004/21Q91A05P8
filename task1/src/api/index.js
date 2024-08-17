
export const fetchNumbers = async (numberid) => {
    try {
        // Validate the numberid
        const validIds = ['p', 'f', 'e', 'r'];
        if (!validIds.includes(numberid)) {
            throw new Error('Invalid number ID');
        }

        // Fetch numbers from the third-party API
        const response = await fetch(`http://28.244.56.144/test/${numberid}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzODcxMDE2LCJpYXQiOjE3MjM4NzA3MTYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjU4YzZmODgzLTBhNjYtNGQxZS04Y2ZmLWQxYmI1NjNiYWM0OSIsInN1YiI6InRwYXZhbmkyMDA0QGdtYWlsLmNvbSJ9LCJjb21wYW55TmFtZSI6ImdvTWFydCIsImNsaWVudElEIjoiNThjNmY4ODMtMGE2Ni00ZDFlLThjZmYtZDFiYjU2M2JhYzQ5IiwiY2xpZW50U2VjcmV0IjoidFF6b1NHQnV5QklZdmZWVSIsIm93bmVyTmFtZSI6IlBhdmFuaSIsIm93bmVyRW1haWwiOiJ0cGF2YW5pMjAwNEBnbWFpbC5jb20iLCJyb2xsTm8iOiIyMVE5MUEwNVA4In0.3MXJ6f-k7w7pbk4Nms8wQYVj1Psfa0jkKsOusxVqV9w`, // Replace with your actual access token
            },
            timeout: 500, // Ensure the request times out if it takes too long
        });

        // Check if the response is OK
        if (!response.ok) {
            throw new Error('Failed to fetch numbers');
        }

        // Parse and return the JSON data
        const data = await response.json();
        return data.numbers; // Return the numbers array
    } catch (error) {
        console.error('Error fetching numbers:', error);
        throw error; // Rethrow the error to be handled by the calling code
    }
};
