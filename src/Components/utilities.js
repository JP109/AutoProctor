export const drawRect = (detections, ctx) => {
    detections.forEach(prediction => {
        //Get prediction results
        const[x,y,width,height] = prediction['bbox'];
        const text = prediction['class'];

        //set styling
        const color = 'green'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'

        //Draw rectangles and text (uncomment below to get text and bb on canvas)
        // ctx.beginPath()
        // ctx.fillText(text,x,y)
        // ctx.rect(x,y,width,height)
        // ctx.stroke()

    });
}