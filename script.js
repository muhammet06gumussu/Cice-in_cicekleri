const replayBtn = document.getElementById("replay");
const flowers = document.querySelectorAll(".chrysanthemum");

function createFlower(el) {
  const center = document.createElement("div");
  center.className = "center";
  el.appendChild(center);

  // 24 petal
  for (let i = 0; i < 24; i++) {
    const p = document.createElement("div");
    p.className = "petal";
    p.style.setProperty("--i", i);

    const inner = document.createElement("div");
    inner.className = "petal-inner";

    p.appendChild(inner);
    el.appendChild(p);
  }

  // sap + düzgün yapraklar
  const stem = document.createElement("div");
  stem.className = "stem";
  el.appendChild(stem);

  const leafL = document.createElement("div");
  leafL.className = "leaf leaf-left";
  el.appendChild(leafL);

  const leafR = document.createElement("div");
  leafR.className = "leaf leaf-right";
  el.appendChild(leafR);
}

flowers.forEach(f => createFlower(f));

function bloomAll() {
  flowers.forEach(f => {
    f.classList.remove("bloom");
    void f.offsetWidth;
    f.classList.add("bloom");
  });
}

window.addEventListener("load", bloomAll);
replayBtn.addEventListener("click", bloomAll);

flowers.forEach(f => {
  f.addEventListener("click", () => f.classList.toggle("spin"));
});
