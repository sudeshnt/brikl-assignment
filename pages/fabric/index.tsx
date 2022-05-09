/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next'
const { fabric } = require('fabric-pure-browser');

import { useEffect, useState } from 'react';

const FabricPage: NextPage = () => {

  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null)

  const drawText = () => {
    const text = new fabric.Textbox('Lorem ipsum dolor sit amet, consectetu', {
      width:300,
      cursorColor:"limegreen",
      top:200,
      left:300,
      angle: 15,
      fill: 'limegreen',
      fontSize: 25
    })
    canvas?.add(text)
  }

  const drawPath = () => {
    const path = new fabric.Path('M0,0 70,130 100,-60 50,-10z', {
      fill: 'green',
      angle: 60,
      top:350,
      left:500
    })
    canvas?.add(path)
  }

  const drawEllipse = () => {
    var ellipse = new fabric.Ellipse({
      left: 400,
      top: 50,
      rx: 100,
      ry: 60
    })
    // add gradient
    ellipse.set('fill', new fabric.Gradient({
      type: 'linear',
      gradientUnits: 'pixels', // or 'percentage'
      coords: { x1: 0, y1: 0, x2: 0, y2: 120 },
      colorStops:[
        { offset: 0, color: 'red' },
        { offset: 1, color: 'yellow'}
      ]
    }))
    canvas?.add(ellipse)
  }

  const drawLogo = () => {
    fabric.Image.fromURL('fabric/google.png', (img: any) => {
      img.set({
        left: 150,
        top: 100
      })
      img.scale(0.1)
      canvas?.add(img)
    })
  }

  const drawRepeatedBackground = () => {
    fabric.Image.fromURL('fabric/ladybug.png', (img: any) => {
      img.scaleToWidth(40);
      var patternSourceCanvas = new fabric.StaticCanvas('')
      patternSourceCanvas.setDimensions({
        width: 40,
        height: 40,
      })
      patternSourceCanvas.add(img);
      patternSourceCanvas.renderAll();
      var pattern = new fabric.Pattern({
        source: patternSourceCanvas.getElement() as any,
        repeat: 'repeat',
      })
      canvas?.add(
        new fabric.Rect({
          left: 100,
          top: 400,
          width: 200,
          height: 200,
          angle: -10,
          fill: pattern
        })
      )
    })
  }
  
  const drawCircle = () => {
    var circle = new fabric.Circle({
      left: 100,
      top: 200,
      radius: 60,
      fill: 'Orchid'
    })
    canvas?.add(circle)
  }

  useEffect(() => {
    if (canvas) {
      drawText()
      drawPath()
      drawEllipse()
      drawLogo()
      drawCircle()
      drawRepeatedBackground()
    }
  }, [canvas])

  useEffect(() => {
    setCanvas(new fabric.Canvas("canvas"))
  }, [])

  return (
    <div>
      <canvas id="canvas" width="1000" height="1000"></canvas>
    </div>
  )
}

export default FabricPage