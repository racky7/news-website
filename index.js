console.log("Index js file")

//0478c717f4be411a92b09fc4f2a3c2a5

//initialize the news api parameters
let source = 'bbc-news';
let country = 'in'
let category = 'technology'
let apiKey = '0478c717f4be411a92b09fc4f2a3c2a5';
//grab news container
let newsAccord = document.getElementById("newsAccord");

//create an ajax get request

const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles;
        // console.log(articles);
        let newsHTML = "";
        articles.forEach(element => {
        
            

            let news = `<div class="col" >
    <div class="card h-100">
  <img src="${element["urlToImage"]}" class="card-img-top" style="height:250px;" alt="">
  <div class="card-body">
    <h5 class="card-title"><a style="text-decoration:none;" target="_blank" href="${element["url"]}">${element["title"]}</a></h5>
    <p class="card-text"> ${element["description"]} </p>
  </div>
  <div class="card-footer">
    <small class="text-muted">Last updated : ${element["publishedAt"]}</small>
  </div>
    </div>
</div>`

            newsHTML += news;


        
            
        });

        newsAccord.innerHTML = newsHTML;

        
    } else {
        console.log("Some error occured!!")
    }

}

xhr.send();