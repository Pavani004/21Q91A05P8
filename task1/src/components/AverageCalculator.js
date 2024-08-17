// src/AverageCalculator.js
import React, { useState } from 'react';

const WINDOW_SIZE = 10; // Set window size to 10

const AverageCalculator = () => {
    const [numberID, setNumberID] = useState('p'); // Default to 'p' for prime
    const [windowPrevState, setWindowPrevState] = useState([]);
    const [windowCurrState, setWindowCurrState] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const [avg, setAvg] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null); // New state for error messages

    const fetchNumbers = async () => {
        setErrorMessage(null); // Clear previous errors
        try {
            const response = await fetch(`http://localhost:9876/numbers/${numberID}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            // Update previous state
            setWindowPrevState(windowCurrState);

            // Handle new numbers and maintain window size
            const allNumbers = [...windowCurrState, ...data.numbers];
            const uniqueNumbers = Array.from(new Set(allNumbers)); // Avoid duplicates

            // Trim to the window size
            const newWindowCurrState = uniqueNumbers.slice(-WINDOW_SIZE);

            // Calculate the average
            const average = newWindowCurrState.length
                ? (newWindowCurrState.reduce((acc, num) => acc + num, 0) / newWindowCurrState.length).toFixed(2)
                : 0;

            // Update the state
            setWindowCurrState(newWindowCurrState);
            setNumbers(data.numbers);
            setAvg(parseFloat(average));

        } catch (error) {
            console.error('Failed to fetch numbers:', error);
            setErrorMessage('Failed to fetch numbers. Please try again later.'); // Set error message
        }
    };

    const handleChange = (event) => {
        setNumberID(event.target.value);
    };

    return (
        <div>
            <label>
                Enter Number Type (p, e, r, f):
                <input
                    type="text"
                    value={numberID}
                    onChange={handleChange}
                    maxLength="1" // Ensure only single character is entered
                    placeholder="Enter p, e, r, or f"
                />
            </label>
            <button onClick={fetchNumbers}>Get Numbers</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
            <div>
                <h2>Previous Window State:</h2>
                <pre>{JSON.stringify(windowPrevState, null, 2)}</pre>
                <h2>Current Window State:</h2>
                <pre>{JSON.stringify(windowCurrState, null, 2)}</pre>
                <h2>Numbers:</h2>
                <pre>{JSON.stringify(numbers, null, 2)}</pre>
                <h2>Average:</h2>
                <pre>{avg !== null ? avg.toFixed(2) : 'N/A'}</pre>
            </div>
        </div>
    );
};

export default AverageCalculator;
