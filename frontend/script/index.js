const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const PATH_NAME_HOME = 'frontend/pages/index.html'
const PATH_NAME_BOOK = 'frontend/pages/book.html'

const domain = 'http://localhost:8080'
const tbody = $('.table tbody')

const searchBtn = $('.search .search-btn')
const search = $('.search input')
const loading = $('#loading')


searchBtn.onclick = (e) => {
    const value = search.value
    if (!value) window.location.pathname = PATH_NAME_HOME

    displayLoading()
    fetch(`${domain}/?title=${value}`)
        .then(res => res.json())
        .then((books = []) => {
            if (!books.length) {
                tbody.innerHTML = `<h2>Empty</h2>`
                hideLoading()
                return
            }
            tbody.innerHTML = ''
            books.forEach((book) => {
                let tr = document.createElement('tr');

                const htmls = `
                    <td onclick="diterectPage(this)">${book.book}</td>
                    <td onclick="diterectPage(this)">${book.author}</td>
                    <td>${new Date().toISOString()}</td>
                `
                tr.innerHTML = htmls
                tr.setAttribute("data-set", book.authorLink)

                tbody.appendChild(tr)
            })

            hideLoading()
        })
}

async function diterectPage(td) {
    const dataSet = td.parentElement.getAttribute('data-set')

    const bookName = td.parentElement.children[0].innerText
    const author = td.parentElement.children[1].innerText

    const data = {
        bookName, author, authorLink: dataSet
    }

    await saveHistory(data)

    localStorage.setItem("authorLink", dataSet);
    localStorage.setItem("author", author);
    localStorage.setItem("bookName", bookName);

    window.location.pathname = PATH_NAME_BOOK
}



async function saveHistory(data) {
    await fetch(`${domain}/history`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

}


// <div class="lastUpdated">
//     <p>Last updated: @item.AuthorDetails.DataAndTime</p>
// </div>

window.onload = () => {
    fetch(`${domain}/history`)
        .then((res) => res.json())
        .then((histories) => {
            console.log(histories)

            if (!histories.length) tbody.innerHTML = `<h2>Empty</h2>`
            histories.forEach((history) => {
                let tr = document.createElement('tr');

                const htmls = `
                    <td onclick="diterectPage(this)">${history.bookName}</td>
                    <td onclick="diterectPage(this)">${history.author}</td>
                    <td>${new Date().toISOString()}</td>
                `
                tr.innerHTML = htmls
                tr.setAttribute("data-set", history.authorLink)

                tbody.appendChild(tr)
            })
        })
}


window.onclick = (event) => {
    console.log(event.target);
}


function displayLoading() {
    document.querySelector('#loading').classList.remove('hide')
    document.querySelector('.table').classList.add('hide')
}

function hideLoading() {
    document.querySelector('#loading').classList.add('hide')
    document.querySelector('.table').classList.remove('hide')
}