let scrollpos = window.scrollY

const header = document.querySelector("header")

const scrollChange = 5

const add_class_on_scroll = () => header.classList.add("header__scroll")
const remove_class_on_scroll = () => header.classList.remove("header__scroll")

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (scrollpos >= scrollChange) { add_class_on_scroll() }
  else { remove_class_on_scroll() }
})


const anchors = document.querySelectorAll('a[href^="#"]')

for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault()

    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "center"
    })
  })
}

function showSideMenu() {
  document.getElementById('side-menu').style.width = '100vw';
}
function hideSideMenu() {
  document.getElementById('side-menu').style.width = '0';
}