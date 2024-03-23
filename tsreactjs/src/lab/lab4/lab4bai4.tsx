import useFetch from "../../hooks/useFetch";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import Col from "react-bootstrap/Col";
import "./index.css"; // ko dùng sass được thầy ơi :(((
import Lab1Form from "../lab1/form";

interface pokemonType {
    id: number;
    sprites: {
        front_default: string;
    };
}

interface pokemonResult {
    name: string;
    url: string;
}
abstract class BasePokemon {
    abstract clickthe(e: React.MouseEvent<HTMLElement>): void;
}
class Pokemon extends BasePokemon {
    constructor(
        private responseData: pokemonType,
        private active: string,
    ) {
        super();
    }
    clickthe(e: React.MouseEvent<HTMLElement>) {
        const target = e.currentTarget as HTMLElement;
        e.stopPropagation();
        if (target.classList.contains("black")) {
            target.classList.remove("black");
        } else {
            target.classList.add("black");
        }
    }
    render(index: number) {
        return (
            <div
                key={index}
                className={this.active}
                onClick={(e) => this.clickthe(e)}
            >
                <p className="id">{this.responseData.id} </p>
                <img alt="" src={this.responseData.sprites.front_default} />
            </div>
        );
    }
}
function Lab4bai4() {
    let { data }: any = useFetch("https://pokeapi.co/api/v2/pokemon/");
    const [html, setHtml] = useState<JSX.Element[]>([]); // html được mong đợi là một mảng các phần tử JSX.Element
    const [isHighlighted, setIsHighlighted] = useState("");
    // hoán đổi
    const shuffle = (array: any) => {
        // Lặp qua từng phần tử của mảng
        for (let i = array.length - 1; i > 0; i--) {
            // Chọn một vị trí ngẫu nhiên trong mảng
            const j = Math.floor(Math.random() * (i + 1));
            // Hoán đổi giá trị của phần tử tại vị trí i với phần tử tại vị trí j
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const active = `imgpokemon shadow mb-3 box  ${isHighlighted ? "black" : ""}`;
    useEffect(() => {
        if (data?.results) {
            const fetchData = async () => {
                const shuffledArray = shuffle(data.results);
                const promises = shuffledArray.map(
                    async (item: pokemonResult, index: number) => {
                        const res = await fetch(item.url);
                        const responseData = await res.json();
                        const pokemon = new Pokemon(responseData, active);
                        return pokemon.render(index);
                    },
                );

                const resolvedPromises = await Promise.all(promises);
                setHtml(resolvedPromises);
            };

            fetchData();
        }
    }, [data]);

    const startGame = useSelector((state: any) => {
        return state.startGame;
    });

    return (
        <>
            <Lab1Form />
            {startGame && (
                <Container className="containerLab1">
                    <div className="boxcontainer">
                        {html}
                        <Col></Col>
                    </div>
                </Container>
            )}
        </>
    );
}

export default Lab4bai4;
