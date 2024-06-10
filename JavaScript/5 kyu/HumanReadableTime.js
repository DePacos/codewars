// DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.



function humanReadable (seconds) {

  let h = Math.floor(seconds / 3600)
  let m = Math.floor((seconds - h * 3600) / 60)
  let s = Math.floor((seconds - h * 3600) - m * 60)

  h < 10 ? h = 0 + String(h) : h
  m < 10 ? m = 0 + String(m) : m
  s < 10 ? s = 0 + String(s) : s

  return `${h}:${m}:${s}`

}