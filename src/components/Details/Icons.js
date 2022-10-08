import React, {useState, useEffect} from 'react';
import { GiCookingPot, GiSteak  } from "react-icons/gi"
import { TbSoup } from "react-icons/tb"

export default function Icons(props) {

    const icons=[
        GiCookingPot,
        TbSoup,
        GiSteak
    ];

    const [currentIconIndex, setCurrentIconIndex] = useState(Math.floor(Math.random() * icons.length))
    const changeIcon = () => {
        const randomNumber = 0
        setCurrentIconIndex(randomNumber);
        }
        
        useEffect(() => changeIcon(), [])

        return(
            {currentIconIndex}
        )

}