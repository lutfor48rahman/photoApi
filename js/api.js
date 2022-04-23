document.getElementById('search-button').addEventListener('click', function() {
    const takeInput = document.getElementById('input-filed');
    // console.log('clicked!D!');
    const inputValue = takeInput.value;
    // console.log(inputValue)

    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    fetch(url)
        .then(res => res.json())
        .then(data => display(data.categories));

});


const display = (photos) => {
    const mainDiv = document.getElementById('apiGalary');
    photos.forEach(photo => {
        console.log(photo);
        let div = document.createElement('div');
        div.innerHTML = `<img class="img-fluid border-success border border-3 rounded-3 " src="${photo.strCategoryThumb}">
            <div><p>Name: ${photo.strCategory}</p></div>`;
        mainDiv.appendChild(div);

    });
}