import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoaded: false,
            server: {
                active_player_count: 0,
                server_name: '[ES] Eidolon',
                online: false,
                maximum_player_count: 45
            }
        }
    }



    componentDidMount() {
        fetch("https://eidolon-midleware.herokuapp.com/servers")
            .then(res => res.json())
            .then(
                (result) => {
                    for (var server of result) {
                        if (server.module_name == "Eidolon") {

                            this.setState({
                                isLoaded: true,
                                server: server
                            });
                        }
                    }
                    this.setState({
                        isLoaded: true,
                    });
                },
                (error) => {
                    console.log(error);
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <table className={"margin-0-auto border-ext table-back " + (this.state.server.online ? "color-on" : "color-off")} cellspacing="0">
                    <thead className="center">
                        <tr>
                            <th className="center border-int-head" colSpan="4">
                                Estado del servidor
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                Estado
                            </th>
                            <th>
                                Nombre
                            </th>
                            <th>
                                Jugadores
                            </th>
                            <th>
                                IP
                            </th>
                        </tr>
                        <tr className="border">
                            <td className={ "border-int  border-int-left " + (this.state.server.online ? "green" : "red")}>
                                {this.state.server.online ? 'ON' : 'OFF'}
                            </td>
                            <td className="border-int">
                                {this.state.server.server_name}
                            </td>
                            <td className="border-int">
                                {this.state.server.active_player_count}/{this.state.server.maximum_player_count}
                            </td>
                            <td className="border-int border-int-right">
                                {this.state.server.server_address}
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
        } else {
            return <img className="max-height-150" src="https://res.cloudinary.com/eidolon-server/image/upload/v1622939913/gifs/load_xnxsmc.gif"></img>
        }
    }
}

export default Test;