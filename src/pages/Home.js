import React from 'react';
import {Link} from "react-router-dom";
import service from "../utils/service";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.getListGenders()
    }

    getListGenders = () => {
            fetch(service.commons.gender())
                .then((result) => {
                    return result.json();
                })
                .then( (data) => {
                    console.log(data);
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


            </>
        );
    }
}

export default Home;