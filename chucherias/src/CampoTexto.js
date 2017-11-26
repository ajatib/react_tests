import React from 'react';

export class CampoTexto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            field: this.props.field
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        });
    }
    onChange = (event) => {
        const value = event.target.value;
        console.log(`campotexto::onChange ${value}`);
        this.setState(
            { value: value}
        );
        if(this.props.onValueChange) this.props.onValueChange(value);
    }
    onLabelClick = (event) => {
        console.log("on click label", this.state.field);
        // event.target.nextSibling.focus();
    }
    render() {
        let id = Math.random().toString(36).replace(/[^a-z]+/g, '');
        return (
            <div>
                <label htmlFor={id} onClick={ this.onLabelClick }>{ this.props.label }</label>
                <input id={id} value={ this.state.value } onChange={ this.onChange } type={ this.props.type }/>
            </div>
        )
    }
}