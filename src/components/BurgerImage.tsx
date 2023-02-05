import * as React from 'react';
import { sprinkles } from '../styles/sprinkles.css';

const BurgerImage: React.FC = () => {
    return (
        <>
            <div className={burgerBar} />
            <div className={burgerBar} />
            <div className={burgerBar} />
        </>
    );
};

const burgerBar = sprinkles({
    background: 'secondary',
    height: '1',
    marginY: '2',
    width: '10',
});

export default BurgerImage;
