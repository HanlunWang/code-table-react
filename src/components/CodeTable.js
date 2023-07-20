import React from "react";
import AddOption from "./AddOption";
import Header from "./Header";
import Options from "./Options";

export default class CodeTable extends React.Component {
    state = {
        options: [],
    };

    handleDeleteOption = (key) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option.key !== key)
        }));
    };

    handleAddOption = (option) => {
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    };

    handleChangeQuantity = (key, quantity) => {
        this.setState((prevState) => ({
            options: prevState.options.map(option =>
                option.key == key ? { ...option, quantity: quantity } : option)
        }));
    };

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <AddOption handleAddOption={this.handleAddOption} />
                    <div className="widget">
                        <Options
                            data={this.state.options}
                            handleChangeQuantity={this.handleChangeQuantity}
                            handleDeleteOption={this.handleDeleteOption}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

CodeTable.defaultProps = {
    options: []
};