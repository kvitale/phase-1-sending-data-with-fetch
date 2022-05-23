
function submitData(name, email){
    const userObj = {
        name: name,
        email: email
    }
    fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(userObj => document.body.innerHTML = userObj.id)
    .catch((error) => document.body.innerHTML = error.message)
}

