export function handleNumberInputChange($input, output) {
  $input.change(event => {
    if (typeof output === 'object') {
      output.value = event.target.value
    } else {
      output = event.target.value
    }
  })
}
