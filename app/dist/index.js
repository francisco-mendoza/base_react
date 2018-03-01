import React from "react";
import ReactDom from "react-dom";

class Layout extends React.Component {
    render() {
        return(
            <h1>Hola Mundo</h1>
        );
    }
}

const app = Document.getElementById('app');

ReactDOM.render(<Layout/>, app);
