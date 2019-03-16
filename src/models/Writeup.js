export default class Writeup {
  static PROBLEM_TYPE = Object.freeze({
    REV: 'rev',
    PWN: 'pwn',
    CRYPTO: 'crypto',
    WEB: 'web',
    FORENSIC: 'forensic',
    STEGO: 'stego',
    PROG: 'prog',
    RECON: 'recon',
    MISC: 'misc',
  })

  constructor(path) {
    this.path = path
    let _path = path.split('/')
    this.ctfName = _path[2]
    this.problemType = this.getProblemType(_path[3])
    this.problemName = _path[4]
    this.author = _path[5]
  }

  getProblemType(problemType) {
    switch (problemType.toLowerCase()) {
      case 're':
      case 'rev':
      case 'reverse':
      case 'reversing':
        return Writeup.PROBLEM_TYPE.REV
      
      case 'pwn':
      case 'exploit':
      case 'exploiting':
        return Writeup.PROBLEM_TYPE.PWN
      
      case 'crypto':
        return Writeup.PROBLEM_TYPE.CRYPTO
      
      case 'web':
        return Writeup.PROBLEM_TYPE.WEB
      
      case 'forensic':
      case 'forensics':
        return Writeup.PROBLEM_TYPE.FORENSIC
      
      case 'stego':
        return Writeup.PROBLEM_TYPE.STEGO

      case 'prog':
      case 'code':
      case 'coding':
        return Writeup.PROBLEM_TYPE.PROG

      case 'recon':
        return Writeup.PROBLEM_TYPE.RECON

      case 'misc':
      default:
        return Writeup.PROBLEM_TYPE.MISC
    }
  }

  getBG() {
    switch (this.problemType.toLowerCase()) {
      case Writeup.PROBLEM_TYPE.REV:
        return '#784c50'
      
      case Writeup.PROBLEM_TYPE.PWN:
        return '#336085'
      
      case Writeup.PROBLEM_TYPE.CRYPTO:
        return '#a09950'
      
      case Writeup.PROBLEM_TYPE.WEB:
        return '#6090b0'
      
      case Writeup.PROBLEM_TYPE.FORENSIC:
        return '#309070'
      
      case Writeup.PROBLEM_TYPE.STEGO:
        return '#70a050'

      case Writeup.PROBLEM_TYPE.PROG:
        return '#7b6699'

      case Writeup.PROBLEM_TYPE.RECON:
        return '#aa7050'

      case Writeup.PROBLEM_TYPE.MISC:
      default:
        return '#757575'
    }
  }
}
