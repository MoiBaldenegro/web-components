class BillieEilish extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const font = this.getAttribute("font");
    const mayus = this.getAttribute("mayus");
    const activeMayus =
      mayus !== null && mayus === "active" ? `text-transform: uppercase;` : "";
    const fQuery = font !== null ? `font-family: ${font};` : "";

    this.innerHTML = `
            <style>
                :host {
                padding: 1rem;
                }
                .container {
                ${fQuery}
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: rgba(200, 100, 50, 0.4);
                padding: 2rem;
                border-radius: 1rem;
                box-shadow: 0 0 50px rgba(0, 0, 0, 0.5) inset;
                position: relative;


                img {
                    width: 100%;
                    height: auto;
                    border-radius: 1rem;
                    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);


                }
                h1 {
                  ${activeMayus}
                    font-size: 2rem;
                    border-radius: 0.5rem;
                    background-color: rgba(180, 220, 0, 0.8);
                    padding: 1rem 2rem;
                    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);

                }
                p {
                    font-size: 1.5rem;
                    text-wrap: pretty;
                    display: block;
                    color: white;
                    color: black;
                }
                span {
                    font-size: 0.6rem;
                    position: absolute;
                    bottom: 16px;
                    right: 16px;
                    opacity: 0.5;

              }
                
                
            </style>
            <div class="container">
            <img src="https://aws-modapedia.vogue.es/prod/designs/v1/assets/640x427/1465.jpg" alt="Billie Eilish">
            <h1>Billie Eilish</h1>
            <p>Billie Eilish is an American singer, songwriter, and actress. She is the younger sister of singer-songwriter and record producer Finneas O'Connell.</p>
            <span>Moibaldenegro ©2022 </span>

            </div>

        `;
  }
}

window.customElements.define("billie-eilish", BillieEilish);
