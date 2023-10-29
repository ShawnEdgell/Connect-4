import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

window.addEventListener('DOMContentLoaded', (event) => {
  if (window.matchMedia("(max-width: 767px)").matches) {
      let viewport = document.querySelector("#viewport");
      viewport.content = "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no";
  }
});

export default app