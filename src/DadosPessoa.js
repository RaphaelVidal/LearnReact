import React from "react";

export default class DadosPessoa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exibir: this.props.Nome
    };

    this.AlteraExibicao = this.AlteraExibicao.bind(this);
  }

  AlteraExibicao() {
    this.setState({
      exibir: this.props.Sobrenome
    });
  }

  render() {
    return (
      <div>
        <p>
          <span className="h5">Nome:</span> {this.state.exibir}
          <div>
            <button
              className="btn btn-sm btn-primary"
              onClick={this.AlteraExibicao}
            >
              Alterar
            </button>
          </div>
        </p>
      </div>
    );
  }
}
