import React from "react";
import ReactDOM from "react-dom/client";
import CodeTable from "./components/CodeTable";
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<CodeTable />);