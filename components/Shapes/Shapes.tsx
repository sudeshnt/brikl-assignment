/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import styles from '../../styles/Home.module.css'

const Shapes = () => {

  const clearCanvas = (canvas : HTMLCanvasElement, context: CanvasRenderingContext2D) => {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
  }

  const renderCanvas1 = () => {
    const canvas1 =  document.querySelector('canvas#canvas-1') as HTMLCanvasElement;
    const ctx1 = canvas1.getContext('2d')!;
    clearCanvas(canvas1, ctx1)
    // Circle
    ctx1.beginPath();
    ctx1.fillStyle = 'LightGray';
    ctx1.strokeStyle = 'yellow';
    ctx1.lineWidth = 6;
    ctx1.arc(30, 30, 20, 0, Math.PI * 2, true)
    ctx1.fill();
    ctx1.stroke();
    // Rotated Square
    ctx1.beginPath();
    ctx1.fillStyle = 'Ivory';
    ctx1.strokeStyle = 'black';
    ctx1.lineWidth = 3;
    ctx1.translate(0, 0);
    ctx1.rotate(45 * Math.PI / 180);
    ctx1.fillRect(150, -50, 80, 80);
    ctx1.strokeRect(150, -50, 80, 80);
    ctx1.stroke();
  }

  const renderCanvas2 = () => {
    const canvas2 =  document.querySelector('canvas#canvas-2') as HTMLCanvasElement;
    const ctx2 = canvas2.getContext('2d')!;
    clearCanvas(canvas2, ctx2)
    // Circle
    ctx2.beginPath();
    ctx2.fillStyle = 'green';
    ctx2.strokeStyle = 'yellow';
    ctx2.lineWidth = 6;
    ctx2.arc(35, 35, 30, 0, Math.PI * 2, true)
    ctx2.fill();
    ctx2.stroke();
    // Square
    ctx2.beginPath();
    ctx2.fillStyle = 'yellow';
    ctx2.strokeStyle = 'black';
    ctx2.lineWidth = 4;
    ctx2.fillRect(125, 10, 120, 120);
    ctx2.strokeRect(125, 10, 120, 120);
    ctx2.stroke();
  }

  const renderCanvas3 = () => {
    const canvas3 =  document.querySelector('canvas#canvas-3') as HTMLCanvasElement;
    const ctx3 = canvas3.getContext('2d')!;
    clearCanvas(canvas3, ctx3)
    // Square 1
    ctx3.beginPath();
    ctx3.fillStyle = 'black';
    ctx3.fillRect(10, 10, 50, 50);
    ctx3.stroke();
    // Dot
    ctx3.arc(90, 100, 3, 0, Math.PI * 2, true)
    ctx3.fill();
    // Square
    ctx3.beginPath();
    ctx3.fillStyle = 'yellow';
    ctx3.strokeStyle = 'black';
    ctx3.lineWidth = 3;
    ctx3.fillRect(140, 30, 100, 100);
    ctx3.strokeRect(140, 30, 100, 100);
    ctx3.stroke();
  }

  useEffect(() => {
      renderCanvas1()
      renderCanvas2()
      renderCanvas3()
  }, [])

  return (
    <div className={styles.questionContainer}>
      <p className={styles.question}>
        2. Implement Canvas API to generate shapes
      </p>
      <canvas id="canvas-1" height='220'></canvas>
      <canvas id="canvas-2"></canvas>
      <canvas id="canvas-3"></canvas>
    </div>
  )
}

export default Shapes