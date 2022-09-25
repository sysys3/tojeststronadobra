/*fetch('http://api.nbp.pl/api/cenyzlota/last/30/?format=json', {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    }
    body: JSON.stringify({
        name: '1'
    })
})  .then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR')) */
    //console.log(fetch('http://api.nbp.pl/api/cenyzlota/last/30/?format=json'))


async function kurs() {
    await fetch('http://api.nbp.pl/api/cenyzlota')
    .then(data => data.json())
    .then(data => document.getElementById("zlotoweczka").innerHTML = data[0].cena 
    + '</br><p>Data: <span id="data">' + data[0].data + '</span></p>')
} 

    