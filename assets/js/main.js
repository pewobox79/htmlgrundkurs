console.log("hallo aus javascript");

const cardData =[
    {
        id:"088098",
        title: "card 1",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        img: "assets/img/sonnenuntergang.jpeg"
    },
    {
        id: "23653253425",
        title: "card 2",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        img: "assets/img/sonnenuntergang.jpeg"
    },
    {
        id: "2356435423",
        title: "card 3",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        img: "assets/img/sonnenuntergang.jpeg"
    },
    {
        id:"89709898",
        title: "card 4",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        img: "assets/img/sonnenuntergang.jpeg"
    },
    {
        id: "89709898",
        title: "card 4",
        description: "This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.",
        img: "assets/img/sonnenuntergang.jpeg"
    },

];


//das element für die karten ins JS holen

const cardsAnker = document.getElementById("cardElements");
console.log("elemnt", cardsAnker);


cardData.map((item)=>{

    const newCard =`<div class="col" id="${item.id}">
                        <div class="card">
                            <img src="${item.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">${item.description}</p>
                            </div>
                        </div>
                    </div>`


                    cardsAnker.innerHTML += newCard

})

