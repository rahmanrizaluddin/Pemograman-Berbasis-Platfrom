const mahasiswaNim = '1102021';
const updatedData = {
    nama: 'Rahman',
    gender: 'L',
    prodi: 'TI',
    alamat: 'JL. Kadudampit'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`,{
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedData),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    const nim = "123456"; // Gantilah dengan nilai yang sesuai
    const baru = {
        nama: 'Rahmanyow',
        gender: 'L',
        prodi: 'TI',
        alamat: 'JL. Kadudampit anjay'
    };
fetch(`http://localhost:3000/mahasiswa/${nim}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ baru }),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));