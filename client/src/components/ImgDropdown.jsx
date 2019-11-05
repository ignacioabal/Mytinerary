import React from 'react';




class ImgButton extends React.Component {
    render() {
        return (
            <div className={this.props.divClass}>
                <a href={this.props.href}>
                    <img src={this.props.img} className={this.props.className} alt={this.props.className}></img>
                </a>
            </div>
        );
    }
}

export default ImgButton;