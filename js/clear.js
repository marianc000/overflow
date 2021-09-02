export default function clear() {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            root.className = "tableHidden";
            setTimeout(() => {
                setTimeout(resolve,1000);
            });
        });
    });
}



