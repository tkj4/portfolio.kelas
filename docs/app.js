const btn = document.querySelector('.hamburger')
const link = document.querySelector('.link')
const item = document.querySelectorAll('.item')
btn.addEventListener('click',function(){
    link.classList.toggle('active')
})

for (var click of item){
    click.addEventListener('click',function(){
        link.classList.remove('active')
    })
}