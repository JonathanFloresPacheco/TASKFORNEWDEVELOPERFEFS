document.getElementById('open-dialog').addEventListener('click', function() {
    document.getElementById('dialog').style.display = 'block';
});

document.getElementById('close-button').addEventListener('click', function() {
    document.getElementById('dialog').style.display = 'none';
    clearInputs();
    clearMessage();
});

document.getElementById('save-button').addEventListener('click', function() {
    const inputA = parseFloat(document.getElementById('value-a').value);
    const inputB = parseFloat(document.getElementById('value-b').value);
    const inputC = parseFloat(document.getElementById('value-c').value);

    let A = isNaN(inputA) ? null : inputA;
    let B = isNaN(inputB) ? null : inputB;
    let C = isNaN(inputC) ? null : inputC;

    let resultMessage = '';

    if (C === 0) {
        resultMessage = 'Division by zero is not allowed.';
        highlightInputs();
    } else {
        let result;
        if (A !== null && B !== null && C !== null) {
            result = (A + B) / C;
        } else {
            resultMessage = 'Please provide valid inputs.';
            highlightInputs();
        }

        if (result !== undefined) {
            if (isFinite(result)) {
                resultMessage = 'Result: ' + result;
            } else {
                resultMessage = 'Result is infinity.';
                highlightInputs();
            }
        }
    }

    document.getElementById('result-message').textContent = resultMessage;
});

function clearInputs() {
    document.getElementById('value-a').value = '';
    document.getElementById('value-b').value = '';
    document.getElementById('value-c').value = '';
}

function clearMessage() {
    document.getElementById('result-message').textContent = '';
}

function highlightInputs() {
    document.getElementById('value-a').classList.add('highlight');
    document.getElementById('value-b').classList.add('highlight');
    document.getElementById('value-c').classList.add('highlight');
}
