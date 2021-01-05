function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.fillStyle = 'darkseagreen';
      ctx.fillRect(10, 10, 80, 80);
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.fillStyle = 'darksalmon';
      ctx.fillRect(30, 30, 80, 80);
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.fillStyle = 'white';
      ctx.font = '20px serif';
      ctx.fillText('Shoeshop', 10, 25);
      ctx.scale(-1, 1);
      ctx.fillText('Shoeshop', -110, 105);
    }
  }