import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import toiture from "./assets/toiture.jpeg";
import charpente from "./assets/charpente.jpeg";

import memo from "./assets/memo.svg";
import tools from "./assets/tools.svg";
import employees from "./assets/employees.svg";
import worker from "./assets/worker.svg";

import Card from "./components/Card";
import Highlights from "./components/Highlights";

function App() {
  return (
    <>
      <Header></Header>
      <img id="toiture" src={toiture} alt="toiture" />
      <div className="highlighted">
        <Highlights
          icon={memo}
          label="Devis gratuit et rapide"
          alt="Devis gratuit"
        />
        <Highlights
          icon={tools}
          label="Matériaux et produits de qualité"
          alt="Matériaux et produits de qualité"
        />
        <Highlights
          icon={employees}
          label="Équipe réactive et expérimentée"
          alt="Équipe professionnelle"
        />
        <Highlights
          icon={worker}
          label="Intervention dans les meilleurs délais"
          alt="Intervention dans les meilleurs délais"
        />
      </div>
      <div className="expertise">
        <Card
          background={charpente}
          altBackground="prestation de charpente"
          title="CHARPENTE"
        />
        <Card
          background={charpente}
          altBackground="prestation de charpente"
          title="COUVERTURE"
        />
        <Card
          background={charpente}
          altBackground="prestation de charpente"
          title="DÉMOUSSAGE"
        />
        <Card
          background={charpente}
          altBackground="prestation de charpente"
          title="ISOLATION"
        />
      </div>
      <div className="expertise">
        <Card
          background={charpente}
          altBackground="prestation de charpente"
          title="ZINGUERIE"
        />
        <Card
          background={charpente}
          altBackground="prestation de charpente"
          title="VELUX"
        />
        <Card
          background={charpente}
          altBackground="prestation de charpente"
          title="Charpente"
        />
        <Card
          background={charpente}
          altBackground="prestation de charpente"
          title="Charpente"
        />
      </div>
    </>
  );
}

export default App;
