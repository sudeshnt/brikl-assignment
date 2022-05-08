import type { NextPage } from 'next'
import { fabric } from 'fabric'
import { useEffect } from 'react';

const FabricPage: NextPage = () => {
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas")

    const text = new fabric.Textbox('Lorem ipsum dolor sit amet, consectetu', {
      width:300,
      cursorColor:"limegreen",
      top:150,
      left:300,
      angle: 15,
      fill: 'limegreen',
      fontSize: 25
    })
    canvas.add(text)

    const path = new fabric.Path('M0,0 70,130 100,-60 50,-10z', {
      fill: 'green',
      angle: 60,
      top:300,
      left:500
    });
    canvas.add(path)

    var ellipse = new fabric.Ellipse({
      left: 400,
      top: 0,
      rx: 100,
      ry: 60
    });
    
    ellipse.set('fill', new fabric.Gradient({
      //gradient options
      type: 'linear',
      gradientUnits: 'pixels', // or 'percentage'
      coords: { x1: 0, y1: 0, x2: 0, y2: 120 },
      colorStops:[
        { offset: 0, color: 'red' },
        { offset: 1, color: 'yellow'}
      ]
    }));
    canvas.add(ellipse)

    fabric.Image.fromURL('fabric/google.png', (img) => {
      img.set({
        left: 150,
        top: 50
      });
      img.scale(0.1)
      canvas.add(img);
    });

    var circle = new fabric.Circle({
      left: 100,
      top: 200,
      radius: 60,
      fill: 'Orchid'
    });
    canvas.add(circle);

    fabric.Image.fromURL('fabric/ladybug.png', (img) => {
      img.scaleToWidth(40);
      var patternSourceCanvas = new fabric.StaticCanvas('');
      patternSourceCanvas.setDimensions({
        width: 40,
        height: 40,
      });
      patternSourceCanvas.add(img);
      patternSourceCanvas.renderAll();
      var pattern = new fabric.Pattern({
        source: patternSourceCanvas.getElement() as any,
        repeat: 'repeat',
      });

      canvas.add(
        new fabric.Rect({
          left: 100,
          top: 400,
          width: 200,
          height: 200,
          angle: -10,
          fill: pattern
        })
      );
    });

  }, [])

  return (
    <div>
      <canvas id="canvas" width="1000" height="1000"></canvas>
    </div>
  )
}

export default FabricPage