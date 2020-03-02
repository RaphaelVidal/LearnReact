import React from "react";
import "./styles.css";
import DadosPessoa from "./DadosPessoa";
export default function App() {
  return (
    <div className="App">
      <h1 className="border-bottom border-primary text-center">Exercício</h1>
      <DadosPessoa Nome="Maria" Sobrenome="Moraes" />
      <DadosPessoa Nome="Antonio" Sobrenome="Silva" />
      <DadosPessoa Nome="Paulo" Sobrenome="Souto" />
    </div>
  );
}
