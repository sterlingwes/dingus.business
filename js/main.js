let canvas, c, w, h, u, points, offset, spacing, gradient, hoverGradient;

const verticalSpacing = 40;

const canvasBackdrop = document.getElementById("backdrop");
const content = document.getElementById("content");
const logo = document.getElementById("logo");

function init() {
  canvas = document.createElement("canvas");
  setupClickHandler(canvas);
  canvas.width = w = window.innerWidth;
  canvas.height = h = window.innerHeight;
  c = canvas.getContext("2d");
  c.translate(w / 2, h / 4);
  logo.style.top = `${Math.round(h / 4) - 65}px`;
  canvasBackdrop.textContent = "";
  canvasBackdrop.appendChild(canvas);
  spacing = w * 0.02;
  points = Array(30)
    .fill(0)
    .map((_) => Array(60).fill(0));
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[0].length; j++) {
      points[i][j] = {
        x: j * spacing,
        y: verticalSpacing,
        z: -i * 10,
      };
    }
  }
  offset = (points[0].length * spacing) / 2;
  gradient = c.createLinearGradient(0, -150, 0, 100);
  gradient.addColorStop(0, "gold");
  gradient.addColorStop(1, "rgb(200, 0, 100)");

  hoverGradient = c.createLinearGradient(0, -150, 0, 100);
  hoverGradient.addColorStop(0, "white");
  hoverGradient.addColorStop(1, "red");

  update();
}

function update(direction) {
  if (direction === -1) {
    for (let i = points.length - 1; i >= 0; i--) {
      let gone = false;
      for (let j = 0; j < points[0].length; j++) {
        points[i][j].z += 0.5;
        if (points[i][j].z > 10) {
          gone = true;
        }
      }
      if (gone) {
        let arr = points.shift();
        for (let k = 0; k < arr.length; k++) {
          arr[k].z = -(points.length - 1) * 10 - 10;
          arr[k].y = verticalSpacing;
        }
        points.push(arr);
      }
    }
    show();
    return;
  }

  for (let i = 0; i < points.length; i++) {
    let gone = false;
    for (let j = 0; j < points[0].length; j++) {
      points[i][j].z -= 0.5;
      if (points[i][j].z < -300) {
        gone = true;
      }
    }
    if (gone) {
      let arr = points.pop();
      for (let k = 0; k < arr.length; k++) {
        arr[k].z = 0;
        arr[k].y = verticalSpacing;
      }
      points.unshift(arr);
    }
  }
  show();
}

let sun = new Path2D();

function show({ mouseoverSun } = {}) {
  c.clearRect(-w / 2, -h / 4, w, h);

  // sun
  c.beginPath();
  sun.arc(0, 0, 100, 0, Math.PI * 2);
  c.closePath();
  c.shadowColor = mouseoverSun ? "magenta" : "orange";
  c.shadowBlur = 100;
  c.fillStyle = mouseoverSun ? hoverGradient : gradient;
  c.fill(sun);
  c.shadowBlur = 0;

  // logo triangles
  c.beginPath();
  const startA = [100, -60];
  c.moveTo(startA[0], startA[1]); // top right
  c.lineTo(-100, -90); // top left
  c.lineTo(-20, 100); // bottom
  c.lineTo(startA[0] + 1, startA[1] - 1);
  c.closePath();
  c.lineWidth = 3;
  c.fillStyle = "rgba(247,168,244,0.2)";
  c.strokeStyle = "rgba(247,168,244,1)";
  c.fill();
  c.stroke();
  c.lineWidth = 1;

  c.beginPath();
  const startB = [105, -75];
  c.moveTo(startB[0], startB[1]); // top right
  c.lineTo(-105, -75); // top left
  c.lineTo(-10, 120); // bottom
  c.lineTo(startB[0], startB[1]);
  c.closePath();
  c.lineWidth = 2;
  c.fillStyle = "rgba(0,0,0,0)";
  c.strokeStyle = "rgba(247,168,244,0.5)";
  c.fill();
  c.stroke();
  c.lineWidth = 1;

  c.beginPath();
  const startC = [110, -90];
  c.moveTo(startC[0], startC[1]); // top right
  c.lineTo(-110, -60); // top left
  c.lineTo(0, 140); // bottom
  c.lineTo(startC[0], startC[1]);
  c.closePath();
  c.lineWidth = 1;
  c.fillStyle = "rgba(0,0,0,0)";
  c.strokeStyle = "rgba(247,168,244,0.3)";
  c.fill();
  c.stroke();
  c.lineWidth = 1;
  // end logo triangles

  // horizon line
  c.beginPath();
  c.moveTo(-w, 38);
  c.lineTo(w, 38);
  c.closePath();
  c.shadowColor = "white";
  c.shadowBlur = 5;
  c.strokeStyle = "rgba(247,168,244,0.8)";
  c.fill();
  c.stroke();
  c.shadowOffsetY = 0;
  c.shadowBlur = 0;

  // grid
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = 0; j < points[0].length - 1; j++) {
      const size = 300 / (300 + points[i][j].z);
      const nextSize = 300 / (300 + points[i + 1][j].z);
      c.beginPath();
      c.moveTo((points[i][j].x - offset) * size, points[i][j].y * size);
      c.lineTo((points[i][j + 1].x - offset) * size, points[i][j + 1].y * size);
      c.lineTo(
        (points[i + 1][j + 1].x - offset) * nextSize,
        points[i + 1][j + 1].y * nextSize
      );
      c.lineTo(
        (points[i + 1][j].x - offset) * nextSize,
        points[i + 1][j].y * nextSize
      );
      c.closePath();
      const color = 100;
      c.fillStyle = `rgba(0, 0, 0, ${-points[i][j].z / 100})`;
      c.strokeStyle = `rgba(${250 - color}, 0, ${50 + color}, ${
        1 - color / 300
      })`;
      c.fill();
      c.stroke();
    }
  }
}

let hovering = false;

function setupClickHandler(canvas) {
  const ctx = canvas.getContext("2d");
  document.addEventListener("pointermove", (ev) => {
    const mouseInSun = ctx.isPointInPath(sun, ev.offsetX, ev.offsetY);
    if (!hovering && mouseInSun) {
      hovering = true;
      show({ mouseoverSun: true });
    } else if (hovering && !mouseInSun) {
      hovering = false;
      show({ mouseoverSun: false });
    }
  });

  document.addEventListener("click", (ev) => {
    const mouseInSun = ctx.isPointInPath(sun, ev.offsetX, ev.offsetY);
    if (mouseInSun) {
      show({ mouseoverSun: true });
      content.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => show({ mouseoverSun: false }), 500);
    }
  });
}

init();

window.addEventListener("resize", onResize);

content.addEventListener("scroll", onScroll);

function onResize() {
  init();
}

let lastScrollPos = content.scrollTop;

function onScroll(e) {
  let direction = 1;
  const scrollPos = e.target.scrollTop;
  if (scrollPos < lastScrollPos) {
    direction = -1;
  }
  requestAnimationFrame(() => update(direction));
  lastScrollPos = scrollPos;
}
