import React from 'react';
import {Link} from "react-router-dom";
import service from "../utils/service";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            genders: [],
            documents: []
        }

        this.getListGenders()
    }

    getListGenders = () => {
        fetch(service.commons.gender())
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                console.log(data)
                this.setState({genders: data})
            });

        fetch(service.commons.documenttype())
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                console.log(data)
                this.setState({documents: data})
            });
    }


    render() {
        return (
            <>
                <main>
                    <h2>Welcome to the homepage!</h2>
                    <p>You can do this, I believe in you.</p>
                </main>
                <nav>
                    <Link to="/about">About</Link>
                </nav>

                <div>

                    <p> Generos </p>
                    {
                        this.state.genders.map((item, i) => {
                            return (
                                <li>{item.long_name}</li>
                            )
                        })
                    }

                    <p> Tipos de documento </p>
                    {
                        this.state.documents.map((item, i) => {
                            return (
                                <li>{item.short_name}</li>
                            )
                        })
                    }

                </div>

            </>
        );
    }
}

export default Home;