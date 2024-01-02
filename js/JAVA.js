var bookmarkName = document.getElementById('bookmarkName')
var siteUrl = document.getElementById('siteUrl')
var submitBtn = document.getElementById('submitBtn')

var itemsArray = []
if (localStorage.getItem('sites')) {
    itemsArray = JSON.parse(localStorage.getItem('sites'))
    showItems()
}

submitBtn.addEventListener('click', function () {

    getData()
    showItems()
    clearItems()
})

function getData() {
    var siteDetails = {
        name: bookmarkName.value,
        url: siteUrl.value
    }
    itemsArray.push(siteDetails)
    localStorage.setItem('sites', JSON.stringify(itemsArray))
}

function showItems() {
    cartona = ""
    for (i = 0; i < itemsArray.length; i++) {
        cartona += `
        <tr>
            <td>${i + 1}</td>
            <td>${itemsArray[i].name}</td>
            <td><a class="visitBtn" target="_blank" ><button index="${i}" class="btn btn-info "> Visit</button></a></td>
            <td><button id="deleteBtn" index="${i}" class="btn btn-warning deleteBtn"> Delete</button></td>
          </tr>`

    }
    document.getElementById('demo').innerHTML = cartona
    deleteItem()
    visitFun()
}


function clearItems() {
    bookmarkName.value = ''
    siteUrl.value = ''
}

function deleteItem() {

    var deleteBtn = Array.from(document.querySelectorAll('.deleteBtn'))

    for (i = 0; i < itemsArray.length; i++) {

        deleteBtn[i].addEventListener('click', function (e) {
            itemsArray.splice(e.target.getAttribute('index'), 1)
            localStorage.setItem('sites', JSON.stringify(itemsArray))
            showItems()

        })

    }

}


function visitFun(){

    
var visitBtn = Array.from(document.querySelectorAll('.visitBtn'))

for (i = 0; i < itemsArray.length; i++) {

    
    visitBtn[i].addEventListener('click', function (e) {
        var x = itemsArray[e.target.getAttribute('index')].url
        
        visitBtn[e.target.getAttribute('index')].setAttribute('href', ('http://'+x))

    })

}
}