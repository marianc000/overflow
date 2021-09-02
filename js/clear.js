export default function clear() {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            root.style.display = 'none';
            setTimeout(() => {
                setTimeout(resolve,1000);
            });
        });
    });
}



