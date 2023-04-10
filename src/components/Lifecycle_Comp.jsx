import React, { Component } from "react";
class Lifecycle_Comp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classRoom: "HN_JV230213"
        }
        console.log("Constructor - Khởi tạo component");
    }
    componentWillMount() {
        console.log("Component will Mount");
    }
    componentDidMount() {
        console.log("Component did Mount");
    }
    componentWillReceiveProps(newProps) {
        console.log("Component Will RecieveProps thực hiện - Props mới là: ", newProps);
    }
    shouldComponentUpdate() {
        console.log("Should Component Update được thực hiện");
        return true;
    }
    componentWillUpdate() {
        console.log("Component Will Update được thực hiện");
    }
    componentDidUpdate() {
        console.log("Component Did Update được thực hiện");
    }
    componentWillUnmount() {
        console.log("Component Will UnMount được thực hiện trước khi hủy component");
    }
    render() {
        console.log("Component render data");
        return (
            <>
                <h2>Lifecycle Component Demo</h2>
                <p>Company: {this.props.company} - Class: {this.state.classRoom}</p>
                <button onClick={() => this.setState({ classRoom: "RA/HN_JV230213" })}>Change State</button>
            </>
        );
    }

}
export default Lifecycle_Comp;