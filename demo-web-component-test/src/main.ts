import React from "react";
import ReactDOM from "react-dom/client";
import "./WebComponentProvider";

// Ensures React is globally available for the web component
(window as any).React = React;
(window as any).ReactDOM = ReactDOM;
