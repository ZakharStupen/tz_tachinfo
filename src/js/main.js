(() => {
    
"use strict";


import "@babel/polyfill";


const data = document.getElementById('formNumber')

const btn = document.querySelector('.form__container__button')
btn.disabled = true
data.addEventListener('input', e => {
    e.preventDefault()  

    if(!data.value) {
        btn.disabled = true
    }
    else {
        btn.disabled = false
    }
})

btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    show()
})
  
        async function show() {
            let response = await fetch('http://localhost:5000', {
                method: 'POST',
                body: JSON.stringify(data.value),
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
               })
            let result = await response.json()
            console.log(JSON.parse(result))
            alert(JSON.parse(result))
        }

})()