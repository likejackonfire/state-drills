import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
          count: 0, 
        };
      }
    //   this is for using this life cycle method  
    //   to register an interval that adds one to the 
    // count in state every second
      componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')
          let newCount = this.state.count;
          this.setState({
            count: newCount +1
          })
        }, 1000)
      }

      componentWillUnmount () {
          console.log('componentWillUnmount')
          clearInterval(this.interval)
      }

      render () {
          let paragraph = <p>{this.state.count}</p>;
          if (this.state.count % 2 === 0) {
              paragraph = <p>tick</p>
          }
          if (this.state.count % 2 !== 0) {
              paragraph = <p>tock</p>
          }
        if (this.state.count >= 8) {
            paragraph = 'BOOM!!!!';
            clearInterval(this.interval);
          }
        return (
        <div>
           {paragraph} 
        </div>   
        )
    }
}



export default Bomb;