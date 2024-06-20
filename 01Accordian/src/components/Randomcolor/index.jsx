import { useState } from "react"

export default function Randomcolor() {
    const [color, setColor] = useState('#000')
    const [typeOfColor, setTypeOfColor] = useState('hex')

    function randomValues(length) {
        return Math.floor(Math.random() * length)
    }

    function handleHexRandom() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
        let hexCol = '#';

        for (let i = 0; i < 6; i++) {
            hexCol += hex[randomValues(hex.length)];
        }
        setColor(hexCol);
    }

    function handleRGBRandom() {
        let r = randomValues(256);
        let g = randomValues(256);
        let b = randomValues(256);

        setColor(`rgb${r}, ${g}, ${b}`)
    }

    return (
        <div style={{
            width: '90vw',
            height: '90vh',
            background: color,
        }}
            className='container'>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? handleHexRandom : handleRGBRandom}>Generate Random Color</button>
            <div style={{
                display: 'flex',
                flexdirection: 'coloum',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px'
            }}>
                <h3>{typeOfColor==="rgb" ? "RGB COLOR" : "HEX COLOR"}</h3>
                <br />
                <h1>{color}</h1>
            </div>
        </div>
    )
}