import * as React from 'react';

import BurgerImage from './BurgerImage';
import { isBurgerMenuOpen, sprinkles } from '../styles/sprinkles.css';
import { assignInlineVars, setElementVars } from '@vanilla-extract/dynamic';
import { fallbackVar } from '@vanilla-extract/css';

type Props = {
    children: React.ReactNode;
};

enum VisibilityOptions {
    HIDDEN = 'none',
    VISIBLE = 'block',
}

const BurgerButton: React.FC<Props> = ({ children }) => {
    let isMenuOpen: boolean = false;

    function burgerToggle() {
        const menu = document.getElementById('menu');

        isMenuOpen = !isMenuOpen;

        setElementVars(menu!, {
            [isBurgerMenuOpen]: isMenuOpen ? VisibilityOptions.VISIBLE : VisibilityOptions.HIDDEN,
        });
    }

    return (
        <>
            <div className={wrapperStyle}>
                <button id="burger-button" className={buttonStyle} aria-label="Menu Button" onClick={burgerToggle}>
                    <BurgerImage />
                </button>
            </div>
            <div
                id="menu"
                className={menuStyle}
                style={assignInlineVars({ [isBurgerMenuOpen]: VisibilityOptions.HIDDEN })}
            >
                {children}
            </div>
        </>
    );
};

const wrapperStyle = sprinkles({
    display: { default: 'block', desktop: 'none' },
    marginLeft: 'auto',
    marginY: 'auto',
});

const buttonStyle = sprinkles({
    background: 'primary',
    borderColor: { default: 'secondary', hover: 'tertiary' },
    borderRadius: '0.25rem',
    borderWidth: '1px',
    paddingX: '2.5',
    paddingY: '2',
});

const menuStyle = sprinkles({
    marginBottom: { default: '4', desktop: 'auto' },
    marginY: { desktop: 'auto' },
    display: {
        default: isBurgerMenuOpen,
        desktop: 'flex',
    },
    flexGrow: '1',
    justifyContent: 'flex-end',
    width: { default: '100%', desktop: 'auto' },
});

export default BurgerButton;
