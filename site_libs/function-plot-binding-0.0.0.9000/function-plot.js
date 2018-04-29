HTMLWidgets.widget({

  name: 'function-plot',

  type: 'output',

  factory: function(el, width, height) {

    // TODO: define shared variables for this instance

    return {

      renderValue: function(x) {

        var plot = functionPlot({
          target: '#' + el.id,
          title: x.title,
          width: x.width,
          height: x.height,
          disableZoom: x.disableZoom,
          xAxis: x.xAxis,
          yAxis: x.yAxis,
          annotations: x.annotations,
          grid: x.grid,
          data: x.data
        });
        
        plot;
      },

      resize: function(width, height) {

      }

    };
  }
});
