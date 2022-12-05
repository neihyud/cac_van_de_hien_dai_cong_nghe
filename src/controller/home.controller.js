const { queryUserSearchBookName, queryAuthorDetail, getStream, queryAuthorBook } = require('../utils/query')

module.exports.searchBookName = async (req, res) => {
    const { title = '' } = req.query

    if (!title) {
        res.status(400).json("Title is empty")
        return
    }

    const query = queryUserSearchBookName(title)
    const stream = await getStream(query)

    const authors = []
    stream.on('data', data => {
        authors.push(data)
    })

    stream.on('end', () => {
        const newAuthors = []
        for (const author of authors) {
            const newAuthor = {}
            newAuthor.bookLink = author["s"].value
            newAuthor.book = author["bookName"].value
            newAuthor.authorLink = author["authorLink"].value
            newAuthor.author = author["author"].value

            newAuthors.push(newAuthor)
        }
        console.log(newAuthors);
        res.json(newAuthors)
    })

    stream.on('error', err => {
        console.error("error stream: ", err)
    })
}

// authorLink, bookLink, bookName, bookAbstract, comment, 
module.exports.authorBooks = async (req, res) => {
    const { author = '' } = req.query

    if (!author) {
        res.status(400).json("Author not found")
        return
    }

    const query = queryAuthorBook(author)
    const stream = await getStream(query)

    const authors = []

    stream.on('data', data => {
        authors.push(data)
    })

    stream.on('end', () => {
        const newAuthors = []
        for (const author of authors) {
            const newAuthor = {}
            newAuthor.authorLink = author["authorLink"].value
            newAuthor.bookLink = author["bookLink"].value
            newAuthor.bookName = author["bookName"].value
            newAuthor.bookAbstract = author["bookAbstract"].value
            newAuthor.numberOfPages = author["numberOfPages"].value
            newAuthor.comment = author["comment"].value

            newAuthors.push(newAuthor)
        }
        res.json(newAuthors)
    })

    stream.on('error', err => {
        console.error("error stream: ", err)
    })
}


module.exports.authorDetails = async (req, res) => {
    const { author = '' } = req.query

    if (!author) {
        res.status(400).json("Author not found")
        return
    }

    const query = queryAuthorDetail(author)
    console.log("queryAuthorDetail: ", query);
    const stream = await getStream(query)

    const authors = []

    stream.on('data', data => {
        console.log("data: ", data);
        authors.push(data)
    })

    stream.on('end', () => {
        console.log(authors);
        const newAuthors = []
        // for (const author of authors) {
        //     const newAuthor = {}
        //     newAuthor.bookLink = author["s"].value
        //     newAuthor.book = author["bookName"].value
        //     newAuthor.authorLink = author["authorLink"].value
        //     newAuthor.author = author["author"].value

        //     newAuthors.push(newAuthor)
        // }
        // console.log(newAuthors);
        // res.json(newAuthors)
        res.json(authors)
    })

    stream.on('error', err => {
        console.error("error stream: ", err)
    })
    res.render('/author')
}
