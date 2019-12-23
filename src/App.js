import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import MidContent from './components/MidContent'
import { MainContent, contents } from './components/MainContent'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mainContent: contents.ABOUT_ME
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(content) {
    this.setState({
      mainContent: content
    })
  }

  render() {
    return (
      <div>
        <Navbar handleClick={this.handleClick} />
        <MidContent />
        <MainContent content={this.state.mainContent} />
      </div >
    )
  }
}
