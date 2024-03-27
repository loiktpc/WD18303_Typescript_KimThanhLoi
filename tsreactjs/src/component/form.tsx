import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { startPlay, cancelPlay } from "../redux/actions/startGame";
import { useSelector, useDispatch } from "react-redux";

function Lab1Form() {
    // Trích xuất giá trị của phần state counter từ Redux store
    // const counter = useSelector((state:any) => state.counter);

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState("");
    const [username, setusename] = useState("");

    const handleInputChange = (event: any) => {
        setInputValue(event.target.value);
    };
    const validatekitudacbiet = (value: any) => {
        var specialChars = '!@#$%^&*(),.?":{}|<>';
        for (var i = 0; i < value.length; i++) {
            if (specialChars.includes(value[i])) {
                return true; // Nếu có ký tự đặc biệt, trả về true
            }
        }
        return false; // Nếu không có ký tự đặc biệt, trả về false
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
        if (validatekitudacbiet(inputValue)) {
            console.log("'" + inputValue + "' là một ký tự đặc biệt.");
            setError("Không được sử dụng kí tự đặc biệt");
            return;
        } else {
            console.log(
                "'" + inputValue + "' không phải là một ký tự đặc biệt.",
            );
            setError("");
            setInputValue(inputValue);
        }
        console.log("Giá trị đã nhập:", inputValue);
        // bắt đầu game
        dispatch(startPlay());
        console.log(dispatch(startPlay()));

        setusename(inputValue);
        // sử lí đếm ngược
        startCountdown(600);
    };
    // handle đếm ngược
    const [remainingTime, setRemainingTime] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    // console.log("check isCounting", isCounting);
    useEffect(() => {
        let timer: any;
        if (isCounting && remainingTime > 0) {
            timer = setInterval(() => {
                setRemainingTime((prevTime) => {
                    // console.log("checkprevTime", prevTime);
                    // trừ sau chạy mỗi giây
                    return prevTime - 1;
                });
                // console.log("checkremainingTime", remainingTime);
            }, 1000);
            // console.log("check time,", timer);
        } else if (remainingTime === 0) {
            // console.log("check time2", timer);
            clearInterval(timer);
            setIsCounting(false);
        }
        return () => clearInterval(timer); // ko clear thì sẽ component đc mount vẫn tiếp tục chạy
    }, [isCounting, remainingTime]);

    function startCountdown(seconds: number) {
        setRemainingTime(seconds);
        setIsCounting(true);
    }
    function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60); // 10p
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    }

    // hủy trò chơi
    const handlecancelPlayer = () => {
        window.location.reload();
    };
    // reset play
    const btnreset = () => {
        startCountdown(600);
    };
    return (
        <div className="formlab1">
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="nameuser">Nhập họ và tên</Form.Label>
                <br />
                <span>(khi nhập tên thành công trò chơi bắt đầu)</span>
                {isCounting && (
                    <h3>
                        Người chơi: <strong>{username}</strong>{" "}
                    </h3>
                )}

                <div className="boxinput">
                    {!isCounting && (
                        <Form.Control
                            type="text"
                            id="nameuser"
                            aria-describedby="nameuser"
                            value={inputValue}
                            onChange={handleInputChange}
                            className="nameuser"
                            isInvalid={!!error} // Đánh dấu  input là không hợp lệ nếu có lỗi
                        />
                    )}
                    <Form.Control.Feedback type="invalid">
                        {error}
                    </Form.Control.Feedback>
                </div>

                <div className="btnhandleBox">
                    {!isCounting && (
                        <Button type="submit" variant="primary">
                            bắt đầu trò chơi
                        </Button>
                    )}
                    {isCounting && (
                        <Button onClick={handlecancelPlayer} variant="warning">
                            Hủy Trò Chơi
                        </Button>
                    )}

                    {isCounting && (
                        <Button onClick={btnreset} variant="danger">
                            Reset
                        </Button>
                    )}
                    {isCounting && (
                        <h2>Thời gian còn: {formatTime(remainingTime)}</h2>
                    )}
                </div>
            </Form>{" "}
        </div>
    );
}

export default Lab1Form;
