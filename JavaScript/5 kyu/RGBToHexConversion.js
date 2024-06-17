// DESCRIPTION:
//   The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
//
//   Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
//
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"



function rgb(r, g, b) {
  r < 1 ? r = '00' : r > 255 ? r = (255).toString(16) : r.toString(16).length == 1 ? r = '0' + r.toString(16) : r = r.toString(16)
  g < 1 ? g = '00' : g > 255 ? g = (255).toString(16) : g.toString(16).length == 1 ? g = '0' + g.toString(16) : g = g.toString(16)
  b < 1 ? b = '00' : b > 255 ? b = (255).toString(16) : b.toString(16).length == 1 ? b = '0' + b.toString(16) : b = b.toString(16)

  return r.toUpperCase() + g.toUpperCase() + b.toUpperCase()
}