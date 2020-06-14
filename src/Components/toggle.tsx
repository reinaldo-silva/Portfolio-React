import React, {Fragment} from 'react'
import {FiMenu} from 'react-icons/fi'

interface clickProps {
    click: () => void;
}

const Toggle: React.FC<clickProps> = (props) => {
    return(
        <Fragment>
            <button id="toggle" onClick={props.click}><FiMenu className="slideIcon iconeMenu"/></button>
        </Fragment>
    )
}

export default Toggle;