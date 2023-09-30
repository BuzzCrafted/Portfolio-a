      var tablinks = document.getElementsByClassName("tab-links");
      var tabcontents = document.getElementsByClassName("tab-contents");
      function opentab(tabname) {
        for (tablink of tablinks) {
          tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
      }

// form submission

  const scriptURL = 'https://script.google.com/macros/s/AKfycbx39RcoNZcpKHY1npVi-oUuKkqdvTgAKQAGsS77BgOpsf4rtPtw-mH96miWcGXKws7o/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message Sent Successfully !"
        setTimeout(function(){
          msg.innerHTML = ""
        }, 15000)
        form.reset()
      })

      .catch(error => console.error('Error!', error.message))
  })



