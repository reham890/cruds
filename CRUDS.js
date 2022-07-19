let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')

function gettotal(){
    if(price.value !=''){
        let result= +price.value + +taxes.value + +ads.value  -+discount.value
    }}

gettotal()







function clearinputs(){
title.value=""
price.value=""
taxes.value=""
ads.value=""
discount.value=""
title.innerHTML=""
count.value=""
category.value=""
}

