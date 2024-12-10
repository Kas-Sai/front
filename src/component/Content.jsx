import React from "react";
import WoToday from "../woToday";
class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const style= {
            display:'none',
        }

        return (
            <div className="content">
                <div style = {style}>
                    <WoToday/>
                </div>
                
                {this.props.children ? this.props.children : "Content"}
            </div>
        )
    }
}

export default Content;