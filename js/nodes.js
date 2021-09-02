const COL_COUNT = 20, ROW_COUNT =100;

function generateData() {
    const rows = [];
    for (let r = 0; r < ROW_COUNT; r++) {
        const row = [];
        rows.push(row);
        for (let c = 0; c < COL_COUNT; c++)
            row.push(`columnNum${c}, rowNum${r}`);
    }
    return rows;
}

function row(vals) {
    const rowDiv = document.createElement("div");
    rowDiv.className = 'row';

    rowDiv.append(...vals.map(val => {
        const cell = document.createElement("div");
        cell.title = val;
        cell.append(val);
        return cell;
    }));
    return rowDiv;
}

 function table(data) {
    return data.map(vals => row(vals));
}
 
root.replaceChildren(...table(generateData()));
