function ajax(url) {
    return fetch(url)
    .then( res => {
      return res.json();
    })
    .then( urlJson => {
      console.log(urlJson);
      return urlJson;
    //  記得要return render才有資料可以處理
    })
    .catch( err => {
        console.log('something wrong');
    })
  }

  const main = document.querySelector('main')


  function render(data) {    
    data.forEach( itemData => {
        let itemSection = document.createElement('div');
        let item = `
            <h1>${itemData.name}</h1>
            <p><i>${itemData.price}</i></p>
            <p>${itemData.description}</p>
        `;
        // console.log(item);
        itemSection.innerHTML = item;
        // console.log(itemSection);
        main.appendChild(itemSection);
        
    });
  }
  const url = "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
  ajax(url).then((data) => {
  render(data);
  });


// data.forEach( itemData => {
//     let item = {
//         name: itemData.name,
//         price: itemData.price,
//         des: itemData.description
//     }
//    
// });
// Bad solution