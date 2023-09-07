function startmoni2() {
  document.getElementById('setdata').addEventListener('click',() => {

    localStorage.setItem('user', document.getElementById("username").value);
    localStorage.setItem('pass', document.getElementById("password").value);
    alert("保存しました。「時間割」から確認できます。")
  });

  document.querySelectorAll('#togle, #setdata').forEach(function(element) {
    element.addEventListener('click', function() {
      document.getElementById('form').classList.toggle("show");
    });
  });
  document.querySelectorAll('#togle2, #setdata').forEach(function(element) {
    element.addEventListener('click', function() {
      document.getElementById('form2').classList.toggle("show");
    });
  });
  document.querySelectorAll('#togle3, #setdata').forEach(function(element) {
    element.addEventListener('click', function() {
      document.getElementById('form3').classList.toggle("show");
    });
  });
}