

var data = [
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwioMwGvMQMRB0ozHlV2DscXJFAOj7Oc4Kfw&s',
        description: 'Watch' ,
        price: 'Rs:1500 ',
        rating: 4
    },


    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseDferhE4r8cXCYluNoZgfXSThN1rEH92gA&s',
        description: 'Cola next' ,
        price: 'Rs:59 ',
        rating: 10
    },


    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZGlPkVIjygwGPVhN0JB0jhKDOZ-_44RGTg4Y_yC5o4kixOnyDbWtDTQNt8bHAM_1ROI&usqp=CAU',
        description: 'Pakola' ,
        price: 'Rs:80 ',
        rating: 9
    },


    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xNquXj9DB3uzWVWy7XnNHoMJ3OtibrmZpA&s',
        description: 'Mezan oil' ,
        price: 'Rs:800 ',
        rating: 8
    },


    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb8lV48KY3I6Hf_RQ59jWhahtyufWixGyERw&s',
        description: 'Soap' ,
        price: 'Rs:40 ',
        rating: 9.5
    },


    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9m24S5I_jadZGdoqKECPazt2SktMMPA89BA&s',
        description: 'Rooh-afza' ,
        price: 'Rs:150 ',
        rating: 10
    },


    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp-zysPhvytTxCSQ5BIpNMjqAJb3ZGa5lOlA&s',
        description: 'Masala' ,
        price: 'Rs:90 ',
        rating: 8.9
    },


    {
        img: 'https://www.mega.pk/items_images/ts_25205.webp',
        description: 'Mobile' ,
        price: 'Rs:30000 ',
        rating: 6
    },


    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMeQK6bpAslW1tbNH3lrdhTThZPnQ6FYvuA&s',
        description: 'Bottles' ,
        price: 'Rs:750 ',
        rating: 4
    }
]
console.log(data)


var parent = document.getElementById('parent')
function showData(){
    for(var i = 0; i<data.length; i++){
        parent.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4")
        var cartDiv = document.createElement('div')
        cartDiv.classList.add('card', 'cart')
        var imgDiv = document.createElement('div')
        var myImg = document.createElement('img')
        myImg.classList.add('card-img-top')
        myImg.setAttribute('src', data[i].img )
        imgDiv.appendChild(myImg)
        var contentDiv = document.createElement('div')
        contentDiv.classList.add('card-body')
        var para = document.createElement('p')
        para.classList.add('card-text')
        var paraText = document.createTextNode(data[i].description)
        var h5 = document.createElement('h5')
        h5.classList.add('card-title')
        var h5Text = document.createTextNode(data[i].price)
        h5.appendChild(h5Text)
        para.appendChild(paraText)
        contentDiv.appendChild(para)
        contentDiv.appendChild(h5)
        cartDiv.appendChild(imgDiv)
        cartDiv.appendChild(contentDiv)

        parent.appendChild(cartDiv)
    }
}

showData()
