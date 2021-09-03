

export let results = {};

export function resetResults() {
    results = {};
}

function addResult(label, start, domDone, rendered) {
    results[label] = results[label] ?? [];
    results[label].push({ start, domDone, rendered });
}

export function execute(label, changeStyle) {
    return new Promise(resolve => {
        requestAnimationFrame(() => {
            const start = Date.now();
            changeStyle();
            const styleChanged = Date.now();
            setTimeout(() => {
                addResult(label, start, styleChanged, Date.now());
                setTimeout(resolve,100);
            });
        });
    });
}
 




