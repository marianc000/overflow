shift.onclick = () => {
    scroll(hidden);
    scroll(clip);
}

function scroll(el){
    el.scrollTop = el.scrollHeight;
    el.scrollLeft = el.scrollWidth;
}