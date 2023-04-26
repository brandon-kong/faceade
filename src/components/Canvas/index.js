import React, { Component } from 'react';

// Element components

// Client components

import styles from '@/styles/components/Canvas/index.module.css'

export default class Canvas extends Component {
    constructor (props) {
        super();

        this.state = {
            
        }
    }

    render () {
        return (
            <div className={[styles.canvas, 'overflow-hidden h-auto w-full border-2 border-black'].join(' ')}>
                <canvas className={[styles['canvas-board'], 'w-full'].join(' ')} width="800" height="600" id="canvas"></canvas>
            </div>
        )
    }
}