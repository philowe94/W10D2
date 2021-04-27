import React from "react";
import Clock from "./clock";
import Tabs from "./tabs";
class Root extends React.Component {
    constructor() {
        super();

    }

    render() {
        let tabsdata = [
            {
                title: 'Tab 1', 
                content: 'Tab 1 content'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2 content'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3 content'
            }
        ]
        return (
            <div>
                <Clock />
                <Tabs data={tabsdata}/>
            </div>
        );
    }
}

export default Root;