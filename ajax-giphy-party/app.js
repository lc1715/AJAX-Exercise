
const form = document.querySelector('#searchform')
const input = document.querySelector('#searchgiphy')
const div = document.querySelector('#postimages')
const removeBtn = document.querySelector('#removebtn')

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    let userInput = input.value;
    let url = await postGiphy(userInput)

    const img = document.createElement('img')
    img.src = url
    div.append(img)
    input.value = ''
})


async function postGiphy(searchTerm) {
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
    console.log(res)
    const numOfElements = res.data.data.length
    const indexNum = Math.floor(Math.random() * numOfElements) + 1;
    return (res.data.data[indexNum].images.original.url)
}


removeBtn.addEventListener('click', function (e) {
    div.remove()
})




