
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
        
            <form onSubmit={handleSubmit}>
                    <h2>Dagens vejr!</h2>
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


