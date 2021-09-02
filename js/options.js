import run from './benchmarking.js';

const buttons=[...document.querySelectorAll('button[name]')];
buttons.forEach(button=>button.onclick=onClick);

function onClick(){
    buttons.forEach(button=>
        button.className=(button===this?'selected':''));
    root.className = this.name;
}
 
start.onclick = ()=>{
    buttons.forEach(button=>button.remove());
};