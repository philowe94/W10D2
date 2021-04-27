import React from "react";


class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.changeSelected = this.changeSelected.bind(this);

    }

    componentDidMount() {

    }

    changeSelected(e) {
        let index = e.target.getAttribute("index");
        console.log('Key is:')
        console.log(index);
        this.setState({index: index})
    }

    // componentDidMount() {
    //     document.querySelector(".tabs").addEventListener("click", (e) => {
    //         console.log(e);
    //     });
    // }


    render() {
        let data = this.props.data;
        let idx = this.state.index;
        let currenttab = data[idx];
        console.log("hello");
        return (
            <div onClick={this.changeSelected} className="tabs">
                <ul>
                    {this.props.data.map( (el, i) => {
                        return (
                            <h1 key={i.toString()} index={i}>{el.title}</h1>
                        );
                    })}
                </ul>
                <article>
                    <p>
                        {data[idx].content}
                    </p>
                </article>
            </div>
        );
    }
}

export default Tabs;