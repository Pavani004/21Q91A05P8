
import React from 'react';
import AverageCalculator from './components/AverageCalculator'; // Import the AverageCalculator component

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Average Calculator Application</h1>
            </header>
            <main>
                <AverageCalculator /> {/* Render the AverageCalculator component */}
            </main>
        </div>
    );
};

export default App;
