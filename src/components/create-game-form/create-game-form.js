import React, { useState } from 'react';

function CreateGameForm(props) {
    const {players} = props

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleDelete(index) {
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <PlayerSelector players={players}                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default CreateGameForm;

const PlayerSelector= ({ players }) => {
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const handleSelect = (player) => {
        if (selectedPlayers.length < 4) {
            setSelectedPlayers([...selectedPlayers, player]);
        }
    };

    const handleRemove = (player) => {
        setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
    };

    return (
        <div>
            <h3>Select Four Players:</h3>
            <form>
                {players.map(player => (
                    <div key={player.id}>
                        <input
                            type="checkbox"
                            id={`player-${player.id}`}
                            checked={selectedPlayers.some(p => p.id === player.id)}
                            onChange={() => handleSelect(player)}
                        />
                        <label htmlFor={`player-${player.id}`}>{player.name}</label>
                        {selectedPlayers.some(p => p.id === player.id) && (
                            <button onClick={() => handleRemove(player)}>Remove</button>
                        )}
                    </div>
                ))}
            </form>
            <div>
                <h4>Selected Players:</h4>
                <ul>
                    {selectedPlayers.map(player => (
                        <li key={player.id}>{player.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


