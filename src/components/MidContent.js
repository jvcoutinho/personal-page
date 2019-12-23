import React from 'react'
import './MidContent.scss'
import Typewriter from 'typewriter-effect'
import { Button, Container } from 'react-bootstrap'

const MidContent = () => {
    let gameProgrammerText = buildMultiColorText('Game', ["#05e9e8", "#ff890b", "#dc80b1", "#e91313"]) + ' Programmer'

    return (
        <Container id="mid-content">
            <h1 className="display-4">Hi there, I'm João</h1>
            <Typewriter
                options={{
                    strings: [gameProgrammerText, 'Software Engineer'],
                    autoStart: true,
                    loop: true
                }} />
        </Container>
    )
}

const buildMultiColorText = (text, colors) => {
    let result = ''
    for (let i = 0; i < text.length; i++) {
        result += "<span style='color: " + colors[i % colors.length] + ";'>" + text[i] + "</span>"
    }
    return result
}

export default MidContent