import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function Lab1Form() {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();

      
        if (!inputValue) {
            console.log("ko đc bỏ trống");
            setError("Không được Để Trống");
            return;
        }
        console.log(typeof inputValue.length );
        
        if (inputValue.length <= 2) {
            console.log("Phải Lớn Hơn 2 Kí Tự");
            setError("Phải Lớn Hơn 2 Kí Tự");
            return;
        }
        // valdiate kí tự đặc biệt
        const RegexDacbiet = /^[a-zA-Z0-9\s]*$/
        if (RegexDacbiet.test(inputValue)) {
            setInputValue(inputValue);
            setError("");
        } else {
            setError("Không được sử dụng kí tự đặc biệt");
        }
        console.log("Giá trị đã nhập:", inputValue);
    };
    return (
        <div className="formlab1">
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="nameuser">Nhập họ và tên</Form.Label>
                <Form.Control
                    type="text"
                    id="nameuser"
                    aria-describedby="nameuser"
                    value={inputValue}
                    onChange={handleInputChange}
                    isInvalid={!!error} // Đánh dấu  input là không hợp lệ nếu có lỗi
                />
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>

                <Button type="submit" variant="primary">
                    Xác Nhận
                </Button>
                <Button variant="warning">Hủy</Button>{' '}
                <Button variant="danger">Reset</Button>{' '}
            </Form>
        </div>
    );
}

export default Lab1Form;
