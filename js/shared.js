

export let results = {};

export function resetResults() {
    results = {};
}

function addResult(label, start, domDone, rendered) {
    results[label] = results[label] ?? [];
    results[label].push({ start, domDone, rendered });
}

export function execute(label, changeDom) {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            const start = Date.now();
            changeDom();
            const domDone = Date.now();
            setTimeout(() => {
                addResult(label, start, domDone, Date.now());
                setTimeout(resolve,1000);
            });
        });
    });
}
 




