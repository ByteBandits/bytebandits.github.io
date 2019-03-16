/**
 * @param {BitCell} a
 * @param {BitCell} b
 */
function checkExplosion(a, b) {
  if (b.exploded)
    return

  var distX = a.x - b.x,
    distY = a.y - b.y,
    dist = Math.sqrt((distX * distX) + (distY * distY)) - (b.size / 2)
  dist <= a.explosionSize &&
    b.explode()
}

/**
 * Generate a neon ball
 * @param {Number} w width
 * @param {Number} h height
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @param {Number} a alpha
 * @returns {HTMLCanvasElement}
 */
function generateFireBall(w, h, a, r, g, b) {

  r = parseInt(r)
  r = isNaN(r) || r > 255 ? 255 : r
  g = parseInt(g)
  g = isNaN(g) || g > 255 ? 255 : g
  b = parseInt(b);
  b = isNaN(b) || b > 255 ? 255 : b

  var tempCanvas = document.createElement("canvas")

  tempCanvas.width = w
  tempCanvas.height = h

  var imgCtx = tempCanvas.getContext("2d")
  var gradient = imgCtx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2)

  //TODO fix for implement other colors
  function applyMask(value, mask) {
    value = Math.abs((value * mask / 255) | 0)
    return value < 256 ? value : 255
  }

  gradient.addColorStop(0, 'rgba(' + [applyMask(r, 255), applyMask(g, 255), applyMask(b, 255), a] + ')')
  gradient.addColorStop(0.3, 'rgba(' + [applyMask(r, 254), applyMask(g, 239), applyMask(b, 29), a] + ')')
  gradient.addColorStop(0.4, 'rgba(' + [applyMask(r, 254), applyMask(g, 88), applyMask(b, 29), a] + ')')
  gradient.addColorStop(0.6, 'rgba(' + [applyMask(r, 239), applyMask(g, 27), applyMask(b, 51), a * .05] + ')')
  gradient.addColorStop(0.88, 'rgba(' + [applyMask(r, 153), applyMask(g, 10), applyMask(b, 27), a * .05] + ')')
  gradient.addColorStop(0.92, 'rgba(' + [applyMask(r, 254), applyMask(g, 39), applyMask(b, 17), a * .1] + ')')
  gradient.addColorStop(0.98, 'rgba(' + [applyMask(r, 254), applyMask(g, 254), applyMask(b, 183), a * .2] + ')')
  gradient.addColorStop(1, 'rgba(' + [applyMask(r, 254), applyMask(g, 39), applyMask(b, 17), 0] + ')')

  imgCtx.fillStyle = gradient
  imgCtx.fillRect(0, 0, w, h)

  return tempCanvas
}

function rand(max, min) {
  min = min || 0
  return (Math.random() * (max - min)) + min
}

export default class BitCell {
  constructor(c, ctx, w, h, settings, cells, cellsExplored, img, size, x, y) {
    this.ctx = ctx
    this.w = w
    this.h = h
    this.settings = settings
    this.cells = cells
    this.cellsExplored = cellsExplored
    this.img = img
    this.expImg = generateFireBall(64, 64, 0.2, 255, c.g, c.b)

    var m = settings.maxSize > settings.minSize ? settings.maxSize : settings.minSize,
      mm = m === settings.maxSize ? settings.minSize : settings.maxSize

    this.size = size || Math.random() * (m - mm) + mm
    this.initSize = this.size
    this.x = x || Math.random() * w
    this.y = y || Math.random() * h
    this.vx = Math.random() * settings.maxSpeed * 2 - settings.maxSpeed
    this.vy = Math.random() * settings.maxSpeed * 2 - settings.maxSpeed
    this.exploded = false
    this.explosionSize = settings.maxSizeExp / 5
    this.expV = settings.stepExplosion
  }

  update() {

    var s = this.size * 2,
      s2 = s / 2

    if (!this.exploded) {
      this.ctx.moveTo(this.x, this.y)
    }

    this.x += this.vx * rand(rand(5))
    this.y += this.vy * rand(rand(5))

    if (this.x < 0 || this.x > this.w) {
      this.vx *= -1
      this.x = this.x > 0 ? this.w : 0
    }
    if (this.y < 0 || this.y > this.h) {
      this.vy *= -1
      this.y = this.y > 0 ? this.h : 0
    }

    if (!this.exploded) {
      this.ctx.drawImage(this.img, this.x - s2, this.y - s2)
      return
    }

    this.explosionSize += this.expV / this.explosionSize * 10

    if (this.size > 0) {
      this.size -= 0.05
    }

    if (this.explosionSize > this.settings.maxSizeExp * 2) {
      this.expV *= -1
      this.vx *= 0
      this.vy *= 0
    } else if (this.explosionSize < 0) {
      this.cellsExplored.splice(this.cellsExplored.indexOf(this), 1)
      return
    }

    s = this.explosionSize *
      (this.now && this.now-- ? 2 : 1 * ((this.settings.firstExplosionDegree - (this.now || 0))) || 1)

    if (this.now === undefined) {
      this.cells.splice(this.cells.indexOf(this), 1)
      this.cellsExplored.push(this)
    }

    this.now = this.now || this.settings.firstExplosionDegree
    s2 = s / 2

    this.ctx.drawImage(this.expImg, this.x - s2, this.y - s2, s, s)

    var l = this.cells.length
    while (l--)
      checkExplosion(this, this.cells[l])
  }

  explode() {
    this.exploded = true
    this.vx *= this.settings.speedExplosionX
    this.vy *= this.settings.speedExplosionY
  }
}
