function generate(start = 1, end = 40, numbers = 6) {
    const result = [];
    const sets = +document.getElementById("txt-sets").value;

    for (let i = 0; i < sets; i++) {
        const set = [];
        let lotoNumbers = Array.from({ length: end }, (_, i) => i + start);
        for (let i = 0; i < numbers; i++) {
            const randomIndex = Math.floor(Math.random() * lotoNumbers.length);
            const removed = lotoNumbers.splice(randomIndex, 1)[0];
            set.push(removed);
        }
        result.push(set.sort((a, b) => a - b));
    }
    display(result);
    }

function display(result) {
    let elements = "";
    for (let i = 0; i < result.length; i++) {
        elements += "<li>";
        for (let j = 0; j < result[i].length; j++) {
            elements += "<span>" + result[i][j] + "</span>";
        }
        elements += "</li>";
    }
    document.getElementById("result").innerHTML = elements;
}