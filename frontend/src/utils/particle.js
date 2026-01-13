// ============================================
// CANVAS: PARTICLE SYSTEM
// ============================================
class Particle {
  constructor(context) {
    this.context = context
    this.reset()
  }

  reset() {
    if(!this.context) return

    this.x = Math.random() * this.context.canvas.width
    this.y = Math.random() * this.context.canvas.height
    // this.y = this.context.canvas.height
    this.size = Math.random() * 5 + 1
    this.speedX = (Math.random() - 0.5) * 1.0
    // this.speedY = (Math.random() - 0.5) * 2.0
    this.speedY = (Math.random() - 1) * 1.0
    const colors = ['#fa6701', '#8B3A3A', 'rgba(255,255,255,0.2)']
    //this.color = colors[Math.floor(Math.random() * colors.length)]
    this.color = '#FFFFFF'
    this.life = Math.random() * 150 + (this.context.canvas.height)
    this.initialLife = this.life
  }

  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.life -= 1

    if (
      this.life <= 0 ||
        this.x < -5 ||
        this.x > this.context.canvas.width + 5 ||
        this.y < -5 ||
        this.y > this.context.canvas.height + 5
    ) {
      this.reset()
    }
  }

  draw() {
    this.context.fillStyle = this.color
    this.context.globalAlpha = Math.max(0, this.life / this.initialLife)
    this.context.beginPath()
    this.context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.context.fill()
  }
}

export default Particle