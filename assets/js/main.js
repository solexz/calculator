function createCalc() {
  return {
    display: document.querySelector(".display"),

    init() {
      this.btnClick();
      this.enterKey();
    },

    enterKey() {
      this.display.addEventListener("keypress", (e) => {
        if (e.keyCode === 13) {
          this.equal();
        }
      });
    },

    clearDisplay() {
      this.display.value = "";
    },

    delOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    equal() {
      let cont = this.display.value;
      try {
        cont = eval(cont);

        if (!cont) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(cont);
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },

    btnClick() {
      document.addEventListener("click", (e) => {
        const el = e.target;
        if (el.classList.contains("btn-num")) {
          this.btnShowDisplay(el.innerText);
        }

        if (el.classList.contains("btn-clear")) {
          this.clearDisplay();
        }

        if (el.classList.contains("btn-del")) {
          this.delOne();
        }

        if (el.classList.contains("btn-eq")) {
          this.equal();
        }
      });
    },
    btnShowDisplay(value) {
      this.display.value += value;
    },
  };
}

const calc = createCalc();
calc.init();
