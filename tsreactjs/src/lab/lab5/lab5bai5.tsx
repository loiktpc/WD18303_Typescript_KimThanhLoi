import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./lab5.css";
function Lab5Bai5FormLogin() {
    return (
        <div className="containerLab5">
            <div className="boxForm">
                <h2 style={{ color: "green", margin: "10 0" }}>Login</h2>
                <form action="" method="post">
                    <label htmlFor="">UserName</label>
                    <br />
                    <Form.Control type="text" placeholder="Normal text" />
                    <Button className="btnSubmit" variant="info">
                        Start
                    </Button>{" "}
                </form>
            </div>
        </div>
    );
}

export default Lab5Bai5FormLogin;
