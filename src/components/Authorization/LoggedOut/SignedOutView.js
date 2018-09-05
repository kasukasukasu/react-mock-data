// tässä uloskirjautumissivun näkymä
import React from "react";
import "./SignedOutView.css";

const SignedOutView = ({ onSubmit }) => {
    return (
        <div>
            <h1 className="containerSignedOut text-center my-auto"> Kiitos palvelumme käyttämisestä, olet nyt kirjautunut ulos!</h1>
        </div>
    );
};

export default SignedOutView;