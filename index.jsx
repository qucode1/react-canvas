import React from 'react'
import ReactDOM from 'react-dom'

{/*class comps*/}

class Clock extends React.Component{
  constructor(props) {
    super(props),
    this.state = {
      date: new Date()
    }
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  render() {
    return (<h1>{this.state.date.toLocaleTimeString()}</h1>)
  }
  tick() {
      this.setState({date: new Date()})
  }

}

class Toggle extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState ({
      isToggleOn: !this.state.isToggleOn }
    )
  }
  render () {
    return (
      <div>
        <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "Clock is ON" : "Clock is OFF"}
        </button>
        {this.state.isToggleOn &&
          <Clock />
        }
      </div>
    )
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props),
    this.state = {isLoggedIn: false},
    this.handleLoginClick = this.handleLoginClick.bind(this),
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
  }
  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }
  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button = null
    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn && <NumberList numbers={[1,2,3,4,5,6]}/>}
        {button}
      </div>
    )
  }
}

{/*functional comps*/}

function NumberList(props) {
  const numbers = props.numbers
  return (
    <ul>
      {numbers.map((number) =>
        <li key={number.toString()} value={number}>
          {number}
        </li>
      )}
    </ul>
  )
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  return (
    isLoggedIn ? <UserGreeting /> : <GuestGreeting />
  )
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

function formatDate (date) {
  return date.toLocaleDateString()
}

function Avatar (props) {
  return <img className="Avatar" src={props.avatarUrl} alt={props.name} />
}

function UserInfo (props) {
  return (
    <div className="UserInfo">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name}/>
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  )
}

function CommentText (props) {
  return <div className="Comment-text">{props.text}</div>
}

function CommentDate (props) {
  return <div className="Comment-date">{formatDate(props.date)}</div>
}

function Comment (props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <CommentText text={props.text} />
      <CommentDate date={props.date} />
    </div>
  )
}

const comment = {
  date: new Date(),
  text: 'I really hope you enjoy learning React - even on your Laptop!',
  author: {
    name: 'Hello Kitty Cat',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

ReactDOM.render(
  <div>
    <Comment date={comment.date} text={comment.text} author={comment.author}/>
    <Toggle />
    <LoginControl />
  </div>,
  document.getElementById("root")
)
