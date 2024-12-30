import { useState } from "react";
// import './Under.css';

const Under = () => {
    const [bus, setBus] = useState(
        {
            length: 147,
            height: 87,
            width: 95

        }
    )
    const [frame, setFrame] = useState(
        {
            width: 5,
            height: 10,
            length: 180,
            location: {
                left: 23,
                right: 23
            }
        }
    )
}