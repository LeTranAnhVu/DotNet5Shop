export function handleCheckboxChange($checkboxes, values) {
  $checkboxes.change((event) => {
    if (event.target.checked) {
      values.add(event.target.value)
    } else {
      values.delete(event.target.value)
    }
  })
}