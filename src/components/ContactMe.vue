<template>
  <div class="contactme">
    <div id="title">Contact Me</div>
    <section>
  <div class="container">
    <form action="https://formspree.io/f/mknpkzww" method="POST" id="my-form">

      <div class="form-group">
        <label for="firstName"> First Name</label>
        <input type="text" id="firstName" name="firstName">
      </div>

      <div class="form-group">
        <label for="latsName">Last Name</label>
        <input type="text" id="lastName" name="lastName">
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email">
      </div>

      <div class="form-group">
        <label for="massage">Massage</label>
        <textarea name="massage" id="massage" cols="30" rows="10"></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
  <div id="status"></div>
</section>
  </div>
</template>

<script>
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

</script>

<style scoped>
.contactme{
  margin-top:100px;
  position: absolute;
  width: 100%;
  height: 89vh; 
}

#title {
  position: relative;
  text-align: center;
  color: white;
  font-size: 400%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  color: #fca311;
}

section {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.container {
  width: 90%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 20px #fca311;
  background-color: #1f1f1fe0;
  border-radius: 8px;
  margin-bottom: 20px;
}
.form-group {
  width: 100%;
  margin-top: 20px;
  font-size: 20px;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 5px;
  font-size: 18px;
  border: 1px solid #fca311;
  margin-top: 5px;
  background-color: #1f1f1f;
  border-radius: 10px;
}

textarea {
  resize: vertical;
}
button[type="submit"] {
  width: 100%;
  border: 3px solid #fca311;
  outline: none;
  padding: 20px;
  font-size: 24px;
  border-radius: 10px ;
  color: #1f1f1f;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  background-color: #1f1f1f;
  color: #fca311;
  transition: 0.3s ease background-color;
}
button[type="submit"]:hover {
  color: #1f1f1f;
  background-color: #fca311;
}
#status {
  width: 90%;
  max-width: 500px;
  text-align: center;
  padding: 10px;
  margin: 0 auto;
  border-radius: 8px;
}
#status.success {
  background-color: rgb(211, 250, 153);
  animation: status 4s ease forwards;
}
#status.error {
  background-color: rgb(250, 129, 92);
  color: white;
  animation: status 4s ease forwards;
}
@keyframes status {
  0% {
    opacity: 1;
    pointer-events: all;
  }
  90% {
    opacity: 1;
    pointer-events: all;
  }
  100% {
    opacity: 0;
    pointer-events: none;
  }
}

</style>