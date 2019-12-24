import React from 'react'
import './AboutMe.scss'
import { Container, Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const AboutMe = () => {
    return (
        <Container className="main-content-body">
            {header()}
            {effectphrase()}
            {text()}
        </Container>
    )
}

const header = () => {
    return (
        <Container id="my-photos-header">
            <Row>
                <Col />
                <Col>
                    <Image src="./assets/me.jpg" roundedCircle fluid />
                </Col>
                <Col>
                    <Image src="./assets/me2.jpg" roundedCircle fluid />
                </Col>
                <Col>
                    <Image src="./assets/me3.jpg" roundedCircle fluid />
                </Col>
                <Col />
            </Row>
        </Container>
    )
}

const effectphrase = () => {
    return (
        <Container id="effect-phrase">
            <h1><q>Tutte le strade portano al circo</q></h1>
        </Container>
    )
}

const text = () => {
    return (
        <Container id="text">
            <Row>
                <Col className="col-md-10">
                    <p>
                        The phrase above is one of the frequent-non-sense-out-of-context catch phrases people put on their social media, and it's the one I put on mine. I saw it for the first time
                        in <a href="https://store.playstation.com/pt-br/product/UP9000-NPUA80719_00-RAIN000000000001" target="_blank" rel="noopener noreferrer">Rain</a>, an awesome <i>art game</i> released in 2013.
                        The context of this phrase was reaching a circus through some multiple paths that you had to choose which to follow (but then, <q><i>all of the paths lead to the circus</i></q>), but I try to think this phrase as <q>follow your objectives, you'll get there</q> or <q>life is too short, why bothering with this</q>, and that's how I try to see life.
                    </p>
                    <p>
                        But who the hell is <q>I</q>? My full name is <b>João Victor de Sá Ferraz Coutinho</b>, born on 01/18/1998 at a cold city from the interior of Pernambuco, Brazil.
                        I define myself as a very <b>chill</b>, <b>focused</b> and <b>charismatic</b> person. The things I love to do include:
                        <ul>
                            <li><b>Playing games</b> I have a special affection for <i>art games</i>, like <a href="https://thatgamecompany.com/journey/" target="_blank" rel="noopener noreferrer">Journey</a>, <a href="https://nomada.studio/" target="_blank" rel="noopener noreferrer">Gris</a> and <a href="https://abzugame.com/" target="_blank" rel="noopener noreferrer">Abzû</a>, but I also enjoy some casual <a href="https://br.leagueoflegends.com/pt/" target="_blank" rel="noopener noreferrer">League of Legends</a> (best
                            Ashe/Sivir/mid Morgana from my neighbourhood) and <a href="https://br.leagueoflegends.com/pt/featured/events/teamfight-tactics" target="_blank" rel="noopener noreferrer">Teamfight Tactics</a>, and some dramatic AAAs (<a href="https://www.thelastofus.playstation.com/" target="_blank" rel="noopener noreferrer">The Last Of Us</a>, <a href="https://www.quanticdream.com/en/beyond-two-souls" target="_blank" rel="noopener noreferrer">Beyond: Two Souls</a>...).
                            </li>
                            <li><b>Watching series, cartoons and animes</b> <i>El Psy Congroo.</i>/<i>For the Honor of Grayskull!</i></li>
                            <li><b>Listening to music</b> From indie to pop, from lo-fi to funk, I like them all (except for hard metal, really sorry).</li>
                            <li><b>Meeting friends</b> Drinking beer and talking to friends after a tiring week is indescribable.</li>
                            <li><b>Coding</b> I do magic with Java and OOs, but functional and scripting programming will be in my heart for eternity. Also, it's always enjoyful solving a problem with a clean and concise code (and some good automatized tests).</li>
                        </ul>
                    </p>
                    <p>
                        The last item is specially important because I don't code only for fun, but professionally as well. Currently I'm undergraduating <b>Computer Science</b> at <b>Federal University of Pernambuco (UFPE)</b>,
                        with good knowledge and contributions of mine in <b>game development</b>, <b>software enginnering</b>, <b>computer graphics</b>, <b>artificial intelligence</b> and <b>mathematical logic and computation</b>,
                        areas that I have fascination. I plan to finish the course in late 2020.
                    </p>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default AboutMe