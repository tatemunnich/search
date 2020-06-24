import React, {Component} from 'react'
import PropTypes from 'prop-types';

export class ResultItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textAlign: 'left',
            color: this.props.app.category === 99 ? 'red':'black'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>{this.props.app.name+': '+this.props.app.category}</p>
            </div>
        )
    }
}

ResultItem.propTypes = {
    app: PropTypes.object.isRequired
}

export default ResultItem
