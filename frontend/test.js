
const data = {
    test: "a"
}

fetch('http://127.0.0.1:8080/history', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data)
})
    .then((res) => res.json())
    .then((data) => console.log(data))