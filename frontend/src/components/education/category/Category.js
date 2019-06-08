import React, {Component} from "react";
import down from "../../../assets/icons/baseline-keyboard_arrow_down-24px.svg";
import LinkCard from "../../common/linkCard/LinkCard";


export default class Category extends Component {
    
    state = {visible: true}

    render () {
        let {title, entries} = this.props
        let {visible} = this.state
        return (
            <div className="box-categories">
                <div>
                    <img src={down} alt="down" className="img-down" />
                    <p className="text-categoria">{title}</p>                               
                </div>
                {visible && entries.map(entrie => 
                    <LinkCard title={entrie.title} url={entrie.url}/>
                )}
             </div>
        )
    }
}
