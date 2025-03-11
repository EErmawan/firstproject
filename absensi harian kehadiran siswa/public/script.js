document.getElementById('form-absensi').addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    const listAbsensi = document.getElementById('list-absensi');

    const entry = document.createElement('div');
    entry.classList.add('entry');

    entry.innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Kelas:</strong> ${kelas}</p>
        <p><strong>Status:</strong> ${status}</p>
        <hr>
    `;

    listAbsensi.appendChild(entry);

    // Clear the form
    document.getElementById('form-absensi').reset();
});