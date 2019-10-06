import * as d3 from 'd3-collection'
export const parserData = (data) => {
  var dataKey = d3.nest()
  .key((d) => { return d.band })
    .key((d) => { return d.album })
    .entries(data);
  const albums = []
  let index = 0
  dataKey.forEach((band) => {
    band.values.forEach((album) => {
      //** add opened boolean */
      const albumParsed = {
        opened: false,
        id: index,
        songs: album.values,
        album: album.key,
        band: album.values[0].band
      }
      index++
      albums.push(albumParsed)
    })
  })
  return albums
}