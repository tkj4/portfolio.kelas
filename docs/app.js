const btn = document.querySelector('.hamburger')
const link = document.querySelector('.link')
const item = document.querySelectorAll('.item')
const line1 = document.querySelector('.line:nth-child(1)')
const line2 = document.querySelector('.line:nth-child(2)')
const line3 = document.querySelector('.line:nth-child(3)')
const line = document.querySelector('.line')



btn.addEventListener('click',function(){
    link.classList.toggle('active')
    line.classList.toggle('margin0')
    line1.classList.toggle('active1')
    line2.classList.toggle('active2')
    line3.classList.toggle('active3')
})

for (var click of item){
    click.addEventListener('click',function(){
        link.classList.remove('active')
        line.classList.remove('margin0')
        line1.classList.remove('active1')
        line2.classList.remove('active2')
        line3.classList.remove('active3')
    })
}
