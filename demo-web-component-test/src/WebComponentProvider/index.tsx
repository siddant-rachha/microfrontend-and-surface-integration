import ReactDOM from "react-dom/client";
import {MFButton} from "../Button/MFButton";

class WebComponentProvider extends HTMLElement {
  root: ReactDOM.Root | null = null;

  constructor() {
    super();
  }

  connectedCallback() {
    if (!this.root) {
      this.mountReactComponent();
    }
  }

  disconnectedCallback() {
    this.unmountReactComponent();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.mountReactComponent();
    }
  }

  static get observedAttributes() {
    return ["text", "desc"]; // List your component props here
  }

  getProps() {
    return {
      text: this.getAttribute("text") || "",
      desc: this.getAttribute("desc") || "",
    };
  }

  mountReactComponent() {
    const props = this.getProps();
    if (!this.root) {
      this.root = ReactDOM.createRoot(this);
    }
    this.root.render(<MFButton {...props} />);
  }

  unmountReactComponent() {
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }
}

// Define the custom element
if(!customElements.get("demo-web-component-test")){
  customElements.define("demo-web-component-test", WebComponentProvider);
}
