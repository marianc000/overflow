import run from './benchmarking.js';

const buttons = [...document.querySelectorAll('button[name]')];
buttons.forEach(button => button.onclick = onClick);

function onClick() {
    requestAnimationFrame(() => {
        buttons.forEach(button =>
            button.className = (button === this ? 'selected' : ''));
        root.className = "tableHidden";
        requestAnimationFrame(() => {
            root.className = this.name;
            console.log(">" + this.name);
            setTimeout(() => console.log("done with " + this.name));
        });
    });
}

start.onclick = () => {
    controls.replaceChildren();
    run();
};