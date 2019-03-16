import React from 'react'
import BitCell from '../helpers/BitCell'

var inGame = false,
  cells = [],
  cellsExplored = [],
  settings = Settings(),
  nextInit = false,
  killTimer,
  growth_rate = 4

function Settings() {
  return {
    maxSize: 6,
    minSize: 2,
    maxSpeed: 2,
    speedExplosionX: 0,
    speedExplosionY: 0,
    firstExplosionDegree: 10,
    stepExplosion: 3,
    maxSizeExp: 14,
    maxColor: 255,
    minColor: 10,
    composite: 'lighter',
    limitParticles: 1999,
    channelsR: false,
    channelsG: true,
    channelsB: true,
  }
}

export default class BitExplosions extends React.Component {
  componentDidMount() {
    const c = this.refs.canvas
    const ctx = c.getContext('2d')
    const w = window.innerWidth
    const h = 760
    let amount = ((w * h) / 500) | 0

    function getPrerenderedBit(bit) {
      var prerenderedBit = document.createElement('canvas')
      prerenderedBit.width = 24
      prerenderedBit.height = 24
      var ctx = prerenderedBit.getContext('2d')
      ctx.font = '12px sans-serif'
      ctx.fillStyle = '#0a400a'
      ctx.fillText(bit, 0, 12)
      return prerenderedBit
    }
    
    var prerenderedBits = [
      getPrerenderedBit('0'),
      getPrerenderedBit('1'),
    ]

    function click(e) {
      if (!inGame) {
        init()
      } else {
        e = e.touches && e.touches.length ? e.touches[0] : e
        var cell = new BitCell(c, ctx, w, h, settings, cells, cellsExplored, prerenderedBits[Math.random() < 0.5 ? 1 : 0], settings.maxSize, e.layerX, e.layerY)
        cells.push(cell)
        cell.explode()
      }
    }

    c.addEventListener('click', click, false)
    c.addEventListener('touchstart', click, false)

    function anim() {
      if (nextInit) {
        nextInit = false
        return init()
      }

      if (inGame)
        window.requestAnimationFrame(anim)

      ctx.save()

      ctx.globalCompositeOperation = 'destination-out'
      //ctx.fillStyle = 'rgb(0, 0, 0)'
      ctx.fillStyle = 'rgba(0, 0, 0, .4)'
      //ctx.globalAlpha = .2
      ctx.fillRect(0, 0, w, h)
      //ctx.globalAlpha = 1
      ctx.globalCompositeOperation = settings.composite
      //ctx.globalCompositeOperation = 'source-over'

      ctx.fillStyle = "none"
      ctx.strokeStyle = '#fff'
      ctx.beginPath()

      var l = cells.length
      while (l--)
        cells[l].update()

      l = cellsExplored.length
      while (l--)
        cellsExplored[l].update()

      ctx.stroke()
      ctx.restore()

      if (!cells.length && !cellsExplored.length)
        gameOver()

      if (cells.length < amount) {
        for (var i = growth_rate; i >= 0; i--) {
          cells.push(new BitCell(c, ctx, w, h, settings, cells, cellsExplored, prerenderedBits[Math.random() < 0.5 ? 1 : 0]))
        }
      }
    }


    function gameOver() {
      inGame = killTimer-- > 0
      if (!inGame) {
        console.log('restarting')
        restart()
      }
    }

    function init() {
      amount = amount > settings.limitParticles ? settings.limitParticles : amount

      c.width = w
      c.height = h

      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, w, h)

      cells.splice(0)
      cellsExplored.splice(0)

      var n = amount
      while (n--) {
        cells.push(new BitCell(c, ctx, w, h, settings, cells, cellsExplored, prerenderedBits[Math.random() < 0.5 ? 1 : 0]))
      }

      inGame = true
      killTimer = 30

      anim()
    }

    function restart() {
      nextInit = true
      if (!inGame) {
        init()
      }
    }

    init()
  }
  render() {
    return (
      <canvas
        ref="canvas"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: 760,
          width: '100%',
          background: '#000',
          cursor: 'crosshair',
        }}
      />
    )
  }
}
