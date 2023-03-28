// write your fcode here!
const url = fetch('http://localhost:3000/ducks')
.then(res => res.json())
.then(data => renderDucks(data))

const duckNav = document.querySelector('#duck-nav')
const mainName = document.querySelector('#duck-display-name')
const mainImg = document.querySelector('#duck-display-image')
const likeButton = document.querySelector('#duck-display-likes')
const formName = document.getElementsByTagName('input')[0]
const formUrl = document.getElementsByTagName('input')[1]
const submitBtn = document.getElementById("new-duck-form")

const renderDucks = (array) => {
    array.forEach(element => {
        const imgNav = document.createElement('img')
      
        imgNav.src = element.img_url;
        duckNav.append(imgNav)
        
        imgNav.addEventListener('click', (e) => {
           mainName.textContent = element.name
           mainImg.src = imgNav.src
           likeButton.textContent = element.likes
        })
    });
}

likeButton.addEventListener('click', (e) => {
   likeButton.textContent++
//     fetch('http://localhost:3000/ducks', {
//   method: "POST", // or 'PUT'
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(likeButton.textContent),
// })
//   .then((response) => response.json())
//   .then((data) => renderDucks(data));
 })
 
// const postADuck = () => {
//     let parse = {
//         name: formName ,
//         img_url:formUrl ,
//         likes: 0
//     }
    
//     fetch(URL, {
//         method: "POST",
//         headers: {
//           "content-type": "Application/json",
//         },
//         body: JSON.stringify(parse),
//       })
//         .then((res) => res.json())
//         .then((data) => renderMonsters([data]));
// }
  

 submitBtn.addEventListener('submit',(e) => {
    e.preventDefault()
    let parse = {
                name: formName.value ,
                img_url:formUrl.value,
                likes: 0
            }
    fetch(URL, {
                        method: "POST",
                        headers: {
                          "content-type": "Application/json",
                        },
                        body: JSON.stringify(parse),
                      })
                        .then((res) => res.json())
                        .then((data) => renderDucks([data]));
                
               
             
 })