import React from 'react'
import './Footer.css'
import ScrollArrow from './FooterButton'

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'.9rem'
        }}>
            <p className="copyright"> © Copyright 2020 by GO Lee </p>
            <ScrollArrow />
        </div>
    )
}

export default Footer
