
    var tablinks = document.getElementsByClassName('tab-links')
    var tabcontents = document.getElementsByClassName('tab-contents')
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link")
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbz2F5Rkev0_JpsbmvdZBuRvZ_xA374vSDbLnvRDmTt3X0LTeJdQvW2y2v7cWyzunii8MA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('msg')
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent succesfully"
            setTimeout(function(){
                msg.innerHTML = ''
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

    var sidemenu = document.getElementById('sidemenu');

    function openmenu(){
        sidemenu.style.right = "0"
    }
    function closemenu(){
        sidemenu.style.right = "-200px"
    }
        let intro = document.querySelector('.intro');
    let logo = document.querySelector('.logo-header');
    let logoSpan = document.querySelectorAll('.logo');

    window.addEventListener('DOMContentLoaded', ()=>{
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.add('active')
                }, (idx + 1) * 400)
            })
        })
        setTimeout(()=>{
                logoSpan.forEach((span, idx)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1)* 50)
                })
            },2000);

            setTimeout(()=>{
                intro.style.top = '-100vh';
                
            }, 2300)
    })

    let fsbtn = document.getElementById("fsbtn")
    let counter = document.getElementById("counter")

    btn.addEventListener("click", myFunc)

    function myFunc() {
        
        setTimeout(()=>{
                logoSpan.forEach((span, idx)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1)* 50)
                })
            },2000);

            setTimeout(()=>{
                intro.style.top = '-100vh';
                
            }, 2300)
    }

    // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
