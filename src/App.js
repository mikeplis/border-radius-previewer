import React from 'react';
import './App.css';

function Box({ topLeft, topRight, bottomRight, bottomLeft, style }) {
    return (
        <div
            style={{
                backgroundColor: 'lightblue',
                border: '10px solid dodgerblue',
                width: '300px',
                height: '300px',
                borderTopLeftRadius: topLeft,
                borderTopRightRadius: topRight,
                borderBottomRightRadius: bottomRight,
                borderBottomLeftRadius: bottomLeft,
                ...style
            }}
        />
    );
}

function App() {
    const [topLeft, setTopLeft] = React.useState('0');
    const [topRight, setTopRight] = React.useState('0');
    const [bottomRight, setBottomRight] = React.useState('0');
    const [bottomLeft, setBottomLeft] = React.useState('0');

    const borderRadiusRule = `border-radius: ${topLeft} ${topRight} ${bottomRight} ${bottomLeft}`;

    return (
        <div style={{ margin: '1rem' }}>
            <h1>Border Radius Previewer</h1>
            <div
                style={{
                    display: 'grid',
                    /* prettier-ignore */
                    gridTemplateAreas: `
                        'topLeft . topRight'
                        '. box .'
                        'bottomLeft . bottomRight'
                    `
                }}
            >
                <label style={{ gridArea: 'topLeft' }}>
                    Top Left <input value={topLeft} onChange={e => setTopLeft(e.target.value)} />
                </label>

                <label style={{ gridArea: 'topRight' }}>
                    Top Right <input value={topRight} onChange={e => setTopRight(e.target.value)} />
                </label>

                <Box
                    style={{ gridArea: 'box' }}
                    topLeft={topLeft}
                    topRight={topRight}
                    bottomRight={bottomRight}
                    bottomLeft={bottomLeft}
                />
                <label style={{ gridArea: 'bottomLeft' }}>
                    Bottom Left{' '}
                    <input value={bottomLeft} onChange={e => setBottomLeft(e.target.value)} />
                </label>

                <label style={{ gridArea: 'bottomRight' }}>
                    Bottom Right{' '}
                    <input value={bottomRight} onChange={e => setBottomRight(e.target.value)} />
                </label>
            </div>
            <button
                onClick={() => {
                    navigator.clipboard.writeText(borderRadiusRule);
                }}
            >
                Copy to clipboard
            </button>
        </div>
    );
}

export default App;
