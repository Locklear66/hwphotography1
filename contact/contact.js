function openMenu() {
   document.body.classList += " menu--open"
}

function closeMenu() {
   document.body.classList.remove('menu--open')
}

function contact(event) {
   event.preventDefault()
   emailjs
      .sendForm(
         'service_l0u8qrd',
         'template_1jsfv8z',
         event.target,
         'VtEkEzmiw7x1vGiMo'

      ).then(() => {
         console.log('this worked')
      })
      setTimeout(function(){
         location.reload();
       }, 2000);
}
