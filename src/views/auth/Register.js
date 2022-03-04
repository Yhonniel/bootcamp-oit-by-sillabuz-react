import React, {useState} from "react";
import service from "../../utils/service";
import keystore from "../../utils/keystore";
import ReactDOM from "react-dom";

export default function Register() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLasttName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    function register(event) {
        event.preventDefault()
        let data = JSON.stringify({
            "password": password,
            "password2": password,
            "email": email,
            "first_name": firstName,
            "last_name": lastName
        })
        fetch(service.auth.signIn(), {
            method: 'post',
            body: data,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        }).then((result) => {
            console.log("Response")
            if (result.status <= 299 && result.status >= 200) {
                result.json().then(result => {
                    localStorage.setItem(keystore.token, result.token);
                    window.location.replace("/profile");
                })
            } else {
                result.json().then(result => {
                    // print errors
                    console.log(result)
                })
                const element = (
                    <div className="alert alert-danger" role="alert">
                        Por favor validar los datos ingresados!
                    </div>
                );
                ReactDOM.render(element, document.getElementById("error"));
            }
        }).catch(error => {
            const element = (
                <div className="alert alert-danger" role="alert">
                    Por favor validar los datos ingresados!
                </div>
            );
            ReactDOM.render(element, document.getElementById("error"));
        })
    }


    return (
        <>
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                        <div
                            className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h6 className="text-blueGray-500 text-sm font-bold">
                                        Sign up with
                                    </h6>
                                </div>
                                <div className="btn-wrapper text-center">
                                    <button
                                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={require("assets/img/github.svg").default}
                                        />
                                        Github
                                    </button>
                                    <button
                                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                                        type="button"
                                    >
                                        <img
                                            alt="..."
                                            className="w-5 mr-1"
                                            src={require("assets/img/google.svg").default}
                                        />
                                        Google
                                    </button>
                                </div>
                                <hr className="mt-6 border-b-1 border-blueGray-300"/>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <div className="text-blueGray-400 text-center mb-3 font-bold">
                                    <small>Or sign up with credentials</small>
                                </div>
                                <form>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Name"
                                            onInput={(e) => setFirstName(e.target.value)}
                                            // onChange={(event) => {
                                            //     setFirstName(event.currentTarget.value);
                                            // }}
                                            // value={firstName}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Last Name"
                                            onInput={(e) => setLasttName(e.target.value)}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            onInput={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="grid-password"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Password"
                                            onInput={(e) => setPassword(e.target.value)}
                                        />
                                    </div>

                                    {/*              <div>*/}
                                    {/*                  <label className="inline-flex items-center cursor-pointer">*/}
                                    {/*                      <input*/}
                                    {/*                          id="customCheckLogin"*/}
                                    {/*                          type="checkbox"*/}
                                    {/*                          className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"*/}
                                    {/*                      />*/}
                                    {/*                      <span className="ml-2 text-sm font-semibold text-blueGray-600">*/}
                                    {/*                                   I agree with the{" "}*/}
                                    {/*                          <a*/}
                                    {/*                              href="#pablo"*/}
                                    {/*                              className="text-lightBlue-500"*/}
                                    {/*                              onClick={(e) => e.preventDefault()}*/}
                                    {/*                          >*/}
                                    {/*    Privacy Policy*/}
                                    {/*  </a>*/}
                                    {/*</span>*/}
                                    {/*                  </label>*/}
                                    {/*              </div>*/}

                                    <div className="relative w-full mb-3" id="error"/>

                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={register}
                                        >
                                            Create Account
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
