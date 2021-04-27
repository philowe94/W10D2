import React from 'react';

class Clock extends React.Component{
    constructor() {
        super();
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({time: new Date()})
    }

    componentDidMount() {
        this.intid = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intid);
    }

    render() {
        let hours = this.state.time.getHours()
        let minutes = this.state.time.getMinutes()
        let seconds = this.state.time.getSeconds()
        let datestring = this.state.time.toDateString()

        return (
            <div className="clock">
                <p><span>Time: </span> <span>{hours}:{minutes}:{seconds}</span></p>
                <p><span>Date: </span> <span>{datestring} </span></p>
            </div>
        );
    }


}

export default Clock;