function addTache() {
    let tacheInput = document.getElementById('tacheInput');
    let tacheList = document.getElementById('tacheList');
    let tacheText = tacheInput.value;

    if (tacheText === '') {
        alert('Veuillez entrer une tâche.');
        return;
    }

    let li = document.createElement('li');
    li.textContent = tacheText;

    tacheList.appendChild(li);

    tacheInput.value = '';
}
