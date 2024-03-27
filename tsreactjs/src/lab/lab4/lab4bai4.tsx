import useFetch from "../../hooks/useFetch";
import React, { useEffect, useState, useMemo } from "react";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import Col from "react-bootstrap/Col";
import "./index.css"; // ko dùng install sass được thầy ơi :(((
import Form from "../../component/form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
let ArrPushPokemon: string[] = [];
let checkendgame = 40;
let timesToSubtract = 2;
let result = checkendgame;
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
        if (!target.classList.contains("black")) {
            // ngăn chặn click myself
            ArrPushPokemon = [];
            return;
        }
        // handle click
        let getidPokemon: string | number;
        if (target.dataset.id) {
            getidPokemon = target.dataset.id;

            ArrPushPokemon.push(getidPokemon);

            if (ArrPushPokemon.length <= 2) {
                if (ArrPushPokemon[0] == ArrPushPokemon[1]) {
                    // console.log("check arr: 1", ArrPushPokemon);

                    const elements = document.querySelectorAll(
                        `[data-id="${getidPokemon}"]`,
                    );
                    setTimeout(() => {
                        elements.forEach((element) => {
                            element.classList.add("green");
                        });
                    }, 100);
                    setTimeout(() => {
                        elements.forEach((element) => {
                            element.remove();
                        });
                    }, 500);
                    let checkgametotal = checkendgame - 2;

                    if (ArrPushPokemon.length == 2) {
                        ArrPushPokemon = [];
                        // console.log("xóa mảng", ArrPushPokemon);
                    }
                    // này check arr hết thì win
                    result -= 2;

                    if (result == 0) {
                        toast.success("Bạn Đã Win Game Chúc mừng bạn!");

                        setTimeout(() => {
                            window.location.reload();
                        }, 1000);
                    }
                } else {
                    // check 2 con khác nhau
                    console.log("false");
                    const activedouble = document.querySelectorAll(`.black`);

                    if (ArrPushPokemon.length == 2) {
                        setTimeout(() => {
                            activedouble.forEach((element) => {
                                element.classList.add("red");
                            });
                        }, 100);
                        setTimeout(() => {
                            activedouble.forEach((element) => {
                                element.classList.remove("red");
                                element.classList.remove("black");
                            });
                        }, 500);
                        ArrPushPokemon = [];
                        // console.log("xóa mảng", ArrPushPokemon);
                    }
                }
            } else {
                ArrPushPokemon = [];
                console.log("xóa mảng", ArrPushPokemon);
            }
        }
        // kiểm tra xong hết chưa
    }
    render(index: number) {
        return (
            <div
                key={index}
                className={this.active}
                onClick={(e) => this.clickthe(e)}
                data-id={this.responseData.id}
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
    const [html2, setHtml2] = useState<JSX.Element[]>([]);
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
        let checkPokemon: any = [];
        if (data?.results) {
            const fetchData = async () => {
                const shuffledArray = shuffle(data.results);
                const promises = shuffledArray.map(
                    async (item: pokemonResult, index: number) => {
                        const res = await fetch(item.url);
                        const responseData = await res.json();
                        // setarrpk(responseData);

                        const pokemon = new Pokemon(responseData, active);
                        return pokemon.render(index);
                    },
                );

                const resolvedPromises = await Promise.all(promises);
                setHtml(resolvedPromises);
            };
            const fetchData2 = async () => {
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
                setHtml2(resolvedPromises);
            };
            fetchData2();
            fetchData();
        }
    }, [data]);

    const startGame = useSelector((state: any) => {
        return state.startGame;
    });

    return (
        <>
            <Form />
            {startGame && (
                <Container className="containerLab1">
                    <div className="boxcontainer">
                        {html}
                        {html2}
                        <Col></Col>
                    </div>
                </Container>
            )}
            <ToastContainer />
        </>
    );
}

export default Lab4bai4;
