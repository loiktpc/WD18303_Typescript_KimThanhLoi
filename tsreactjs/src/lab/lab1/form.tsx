import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect, useRef } from "react";
function Lab1Form() {
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [username, setusename] = useState("");
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
        console.log(typeof inputValue.length);

        if (inputValue.length <= 2) {
            console.log("Phải Lớn Hơn 2 Kí Tự");
            setError("Phải Lớn Hơn 2 Kí Tự");
            return;
        }
        // valdiate kí tự đặc biệt
        const RegexDacbiet = /^[a-zA-Z0-9\s]*$/;
        if (RegexDacbiet.test(inputValue)) {
            setInputValue(inputValue);
            setError("");
        } else {
            setError("Không được sử dụng kí tự đặc biệt");
        }
        console.log("Giá trị đã nhập:", inputValue);
        setusename(inputValue);
        // sử lí đếm ngược
        startCountdown(600);
    };
    // handle đếm ngược
    const [remainingTime, setRemainingTime] = useState(0);
    const [isCounting, setIsCounting] = useState(false);

    useEffect(() => {
        let timer: any;
        if (isCounting && remainingTime > 0) {
            timer = setInterval(() => {
                setRemainingTime((prevTime) => {
                    console.log("checkprevTime", prevTime);

                    return prevTime - 1;
                });
                console.log("checkremainingTime", remainingTime);
            }, 1000);
            console.log("check time,", timer);
        } else if (remainingTime === 0) {
            console.log("check time2", timer);
            clearInterval(timer);
            setIsCounting(false);
        }
        return () => clearInterval(timer);
    }, [isCounting, remainingTime]);

    function startCountdown(seconds: number) {
        setRemainingTime(seconds);
        setIsCounting(true);
    }
    function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }

    // hủy trò chơi
    const handlecancelPlayer = () => {
        window.location.reload();
    };
    return (
        <div className="formlab1">
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="nameuser">Nhập họ và tên</Form.Label>
                <span>(khi nhập tên thành công trò chơi bắt đầu)</span>
                <div>
                    Người chơi: <strong>{username}</strong>{" "}
                </div>
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
                <div className="btnhandleBox">
                    {!isCounting && (
                        <Button type="submit" variant="primary">
                            bắt đầu trò chơi
                        </Button>
                    )}
                    <Button onClick={handlecancelPlayer} variant="warning">
                        Hủy Trò Chơi
                    </Button>{" "}
                    <Button variant="danger">Reset</Button>{" "}
                    {isCounting && (
                        <h2>Thời gian còn: {formatTime(remainingTime)}</h2>
                    )}
                </div>
            </Form>
        </div>
    );
}

export default Lab1Form;
