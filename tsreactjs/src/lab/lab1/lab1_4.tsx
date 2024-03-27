import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useFetch from "../../hooks/useFetch";
import "./lab1_4.css";
import img1 from "../img/1.png";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.png";
import img5 from "../img/5.jpg";
import img6 from "../img/6.png";
import img7 from "../img/7.png";
import img8 from "../img/8.png";
import img9 from "../img/11.png";
import img10 from "../img/10.png";
import Lab1Form from "../../component/form";
import React from "react";
import { useState } from "react";

// Chỉ định kiểu của props trong component con

const Lab1_4 = () => {
    let arrimg: [] | any = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
    ];
    const [isHighlighted, setIsHighlighted] = useState(false);

    const active = `imgpokemon shadow ${isHighlighted ? "black" : ""}`;

    return (
        <>
            <Lab1Form />
            <Container className="containerLab1">
                <Row>
                    {arrimg.map((item: any, id: number) => {
                        return (
                            <Col key={id}>
                                <img
                                    onClick={(e) => {
                                        // để chuyển đổi kiểu của e.target sang HTMLImageElement
                                        // sài trong TS mới ăn
                                        const target =
                                            e.target as HTMLImageElement;
                                        target.classList.add("black");
                                    }}
                                    alt=""
                                    className={active}
                                    src={item}
                                />
                            </Col>
                        );
                    })}
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
};

export default Lab1_4;
