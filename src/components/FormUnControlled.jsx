import React, { Component } from 'react';

class FormUnControlled extends Component {
    // B1: Tạo các tham chiếu đến DOM
    constructor(props) {
        super(props);
        // Tạo tham chiếu studentId đến DOM
        this.studentId = React.createRef();
        // Tạo tham chiếu studentName đến DOM
        this.studentName = React.createRef();
        // Tạo tham chiếu birthPlacec đến DOM
        this.birthPlace = React.createRef();
        //Khởi tạo state
        this.state = {
            studentId: ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        // B3: Lấy dữ liệu từ DOM để xử lý
        console.log("Student Id--->", this.studentId.current.value);
        console.log("Student Name-->", this.studentName.current.value);
        console.log("Birth Place-->", this.birthPlace.current.value);
        this.setState({
            studentId: this.studentId.current.value
        })
    }
    render() {

        return (
            <div>
                <h2>UnControlled Form Demo</h2>
                {/* B2: gắn các tham chiếu vào thành phần form */}
                <form>
                    <label htmlFor='studentId'>Student Id</label>
                    <input type={'text'} id='studentId' name='studentId' ref={this.studentId} /><br></br>
                    <label htmlFor='studentName'>Student Name</label>
                    <input type={'text'} id='studentName' name='studentName' ref={this.studentName} /><br></br>
                    <label htmlFor='birthPlace'>Birth Place</label>
                    <select id='birthPlace' name='birthPlace' ref={this.birthPlace}>
                        <option value={''}>Chọn nơi sinh</option>
                        <option value={'HN'}>Hà Nội</option>
                        <option value={'DN'}>Đà Nẵng</option>
                        <option value={'HCM'}>TP HCM</option>
                    </select><br></br>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
                <p>StudentId: {this.state.studentId}</p>
            </div>
        );
    }
}

export default FormUnControlled;