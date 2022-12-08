const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const domain = 'http://localhost:8080'
const _bookName = $('header.bookDetailsHeader h1')
const _bookAbstract = $('#abstract')
const _author = $('.author-name')
const _tbody = $('tbody')

function displayLoading() {
    document.querySelector('#loading').classList.remove('hide')
    document.querySelector('.bookDetails').classList.add('hide')
}

function hideLoading() {
    document.querySelector('#loading').classList.add('hide')
    document.querySelector('.bookDetails').classList.remove('hide')
}

window.onload = () => {
    const authorLink = localStorage.getItem('authorLink')
    const author = localStorage.getItem('author')
    const bookName = localStorage.getItem('bookName')

    displayLoading()

    fetch(`${domain}/author?author=${authorLink}`)
        .then((res) => res.json())
        .then((data) => {
            hideLoading()
            _author.innerText = author || ''
            _bookName.innerText = bookName || ''

            _tbody.innerHTML = ''

            data.forEach((info, index) => {
                if (info.bookName === bookName) _bookAbstract.innerText = info.bookAbstract
                let tr = document.createElement('tr');
                const htmls = `
                    <tr>
                        <td>${info.bookName}</td>
                        <td>${info.numberOfPages || ''}</td>
                    </tr>
                `
                tr.onclick = () => {
                    _bookAbstract.innerText = info.bookAbstract
                    _bookName.innerText = info.bookName || ''
                    window.scrollTo(0, 0);
                }

                tr.innerHTML = htmls
                _tbody.appendChild(tr)
            })
        })



}


