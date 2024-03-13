import useFetch from "../../hooks/useFetch";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";
import Lab1Form from "../lab1/form";

interface ApiResponse {
    // tạo lớp
    name: string;
    url: string;
}
function Lab2Bai3() {
    let { data }: any = useFetch("https://pokeapi.co/api/v2/pokemon/");
    const [html, setHtml] = useState<JSX.Element[]>([]); // html được mong đợi là một mảng các phần tử JSX.Element
    const [isHighlighted, setIsHighlighted] = useState("");
    // hoán đổi vị trí arr
    function shuffle(array: any) {
        // Lặp qua từng phần tử của mảng
        for (let i = array.length - 1; i > 0; i--) {
            // Chọn một vị trí ngẫu nhiên trong mảng
            const j = Math.floor(Math.random() * (i + 1));
            // Hoán đổi giá trị của phần tử tại vị trí i với phần tử tại vị trí j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const active = `imgpokemon shadow mb-3  ${isHighlighted ? "black" : ""}`;
    useEffect(() => {
        if (data?.results) {
            const fetchData = async () => {
                const shuffledArray = shuffle(data.results);
                const promises = shuffledArray.map(
                    async (item: ApiResponse, index: number) => {
                        const res = await fetch(item.url);
                        const responseData = await res.json();

                        return (
                            <Col key={index}>
                                <img
                                    onClick={(e) => {
                                        // để chuyển đổi kiểu của e.target sang HTMLImageElement
                                        // sài trong TS mới ăn
                                        const target =
                                            e.target as HTMLImageElement;
                                        if (
                                            target.classList.contains("black")
                                        ) {
                                            target.classList.remove("black");
                                        } else {
                                            target.classList.add("black");
                                        }
                                    }}
                                    alt=""
                                    className={active}
                                    src={responseData.sprites.front_default}
                                />
                            </Col>
                        );
                    },
                );

                const resolvedPromises = await Promise.all(promises);
                setHtml(resolvedPromises);
            };

            fetchData();
        }
    }, [data]);

    return (
        <>
            <Lab1Form />
            <Container className="containerLab1">
                <Row>
                    {html}
                    <Col></Col>
                </Row>
            </Container>
        </>
    );
}

export default Lab2Bai3;
