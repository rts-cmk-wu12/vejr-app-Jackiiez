
import React, { useState } from 'react';
import { Link } from 'react-router';

function CityInput() {
    const [by, setBy] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (by) {
            window.location.href = `/vejr/${by}`; 
        }
    };

    return (
        <div className="city-input-section">
            <h2>Søg på en by!</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={by}
                    onChange={(e) => setBy(e.target.value)}
                    placeholder="e.g., Hillerød"
                    required
                />
              <Link to={`/vejr/${by}`}>
                    <button type="button">Søg!</button>
                </Link>
            </form>
        </div>
    );
}

export default CityInput;


