import React from "react";
import ReactDOM from "react-dom/client";
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import storybookLogo from '/storybook.svg'
import { $ } from "./select";
import './style.css'
import { Logo } from "./components/logo";
import {  Counter } from "./components/counter";

const app = $("#app");

ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <div>
      <h2> REACT VERSION</h2>
      <Logo

        link= "https://vitejs.dev"
        descricao= "Vite logo"
        imgSrc= {viteLogo}
        
      />
      
      <Logo

        link= "https://www.typescriptlang.org/"
         descricao= "TypeScript logo"
        imgSrc= {typescriptLogo}
        />

      <Logo

        link= "https://storybookjs.org/"
        descricao= "Storybook logo"
        imgSrc= {storybookLogo}
        />

      <h1>Vite + TypeScript + Storybook</h1>
      <Counter />
      <p className="read-the-docs">
        Click on the Vite, TypeScript and Storybook logos to learn more
      </p>
      <p>
        <a href="./sb">Click here to see our Storybook live!</a>
      </p>
    </div>
  </React.StrictMode>
);

