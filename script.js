function calculateDiscount() {
  let salesPrice = document.getElementById('bill').value
  let discount = document.getElementById('percentage').value

  let discountPrice = salesPrice * (discount / 100);
  let totalPrice = salesPrice - discountPrice

  document.getElementById('result-discount').innerHTML = 'Your Discount is N' + discountPrice
  document.getElementById('result-total').innerHTML = 'You Will Pay N' + totalPrice

  document.getElementById('bill').value = ""
  document.getElementById('percentage').value = ""
}
