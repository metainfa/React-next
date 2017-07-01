import React from 'react'

export default class extends React.Component {
  static getInitialProps({ query: { id } }) {
    return { id }
  }

  render() {

    var ele = [];
    for (let i = 0; i < 4; i++) {
      ele.push(<p style={{background:'red'}}>{i}</p>)
    }


    return (
      <div>
        <h1>My {this.props.id} blog post</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {ele}

      </div>
    )
  }
}
