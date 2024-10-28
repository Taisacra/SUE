import styles from './Container.module.css'
import React from 'react';

function Container({ children, className }) {
    return (
        <div className={`${styles.container} ${className ? styles[className] : ''}`}> {/* Aplica a classe condicionalmente */}
            {children}
        </div>
    );
}

export default Container