export default class SubPub{
  _buffer = {}
  sub(channel, cb) {
    let cbs = this._buffer[channel] || []
    cbs.push(cb)
    this._buffer[channel] = cbs
  }

  pub(channel, updateChange){
    let cbs = this._buffer[channel]
    if(cbs && cbs.length > 0) {
      cbs.forEach(cb => cb(updateChange))
    }
  }
}