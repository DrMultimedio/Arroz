function EmpezarReloj(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          display.textContent = "Ve al siguiente paso";
        }
    }, 1000);
}
$( document ).ready(function() {
  $(function(){
      $('#boton_fuerte').click(function() {
          EmpezarReloj(60,document.querySelector('#fuegofuerte'))
      });
      $('#boton_flojo').click(function() {
          EmpezarReloj(360,document.querySelector('#fuegoflojo'))
      });
      $('#boton_reposar').click(function() {
          EmpezarReloj(600,document.querySelector('#reposar'))
      });
  });
});
