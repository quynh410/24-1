
function placeOrder() {
    let fullName = document.getElementById('fullName').value.toUpperCase();
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let address = document.getElementById('address').value;
    let orderDate = document.getElementById('orderDate').value;
    let thanhToan = document.getElementById('thanhToan').value;

    let isSameAsBuyer = document.getElementById('sameAsBuyer').checked;
    let sendMail = document.getElementById('sendMail').checked;

    let receiverFullName = isSameAsBuyer ? fullName : document.getElementById('receiverFullName').value.toUpperCase();
    let receiverEmail = isSameAsBuyer ? email : document.getElementById('receiverEmail').value;
    let receiverPhone = isSameAsBuyer ? phone : document.getElementById('receiverPhone').value;
    let receiverAddress = isSameAsBuyer ? address : document.getElementById('receiverAddress').value;
    let note = document.getElementById('note').value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let dateRegex = /^\d{2}-\d{2}-\d{4}$/;

    if (!emailRegex.test(email)) {
      alert('Email không đúng định dạng');
      return;
    }

    if (!dateRegex.test(orderDate)) {
      alert('Ngày đặt không đúng định dạng (dd-mm-yyyy)');
      return;
    }

    let successMessage = sendMail ? 'Đặt hàng thành công, email đã gửi tới cho quý khách' : 'Đặt hàng thành công';
    alert(successMessage);
  }

  function resetForm() {
    document.getElementById('orderForm').reset();
  }