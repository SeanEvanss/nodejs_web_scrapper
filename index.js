const PORT = 8000
const axios = require('axios')
const Cheerio = require('cheerio')
const express = require('express')


const app = express()
const url = 'https://www.reddit.com/'
axios(url)
    .then(response => {
        const html = response.data
            //console.log(html)
        const $ = Cheerio.load(html)
        const arr = []

        $('a', html).each(function() {
            //console.log("found one")
            const url = $(this).attr('href')
            arr.push({
                url
            })

        })
        console.log(arr)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on port ${PORT}`))