import { useEffect, useState } from 'react';

const PostTransaction = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const storedOrderDetails = localStorage.getItem('orderDetails');
    if (storedOrderDetails) {
      setOrderDetails(JSON.parse(storedOrderDetails));

      // update the backend with the transaction details
      const { reciptid, paymentId, orderId } = JSON.parse(storedOrderDetails);
      if (reciptid && paymentId && orderId) {
        fetch("http://localhost:5000/updateorder", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            reciptid,
            paymentId,
            orderId
          })
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to update backend');
            }
          })
          .catch(error => console.error(error));
      }
    }
  }, []);

  const GoHome = () => {
    localStorage.removeItem('receiptId');
    localStorage.removeItem('orderDetails');
    localStorage.removeItem('cart');
    window.location.href = '/';
  };

  const PrintPage = () => {
    window.print();
  };

  return (
    <div>
      <h1>Transaction Details</h1>
      {orderDetails ? (
        <div>
          <p><strong>First Name:</strong> {orderDetails.firstname}</p>
          <p><strong>Last Name:</strong> {orderDetails.lastname}</p>
          <p><strong>Email:</strong> {orderDetails.email}</p>
          <p><strong>Phone:</strong> {orderDetails.phone}</p>
          <p><strong>Address:</strong> {orderDetails.address}</p>
          <p><strong>Special Delivery Instructions:</strong> {orderDetails.deliveryNotes}</p>
          <p><strong>City:</strong> {orderDetails.city}</p>
          <p><strong>State:</strong> {orderDetails.state}</p>
          <p><strong>Pincode:</strong> {orderDetails.pincode}</p>
          <p><strong>Country:</strong> {orderDetails.country}</p>
          <p><strong>Unique Payment ID:</strong> {orderDetails.paymentId}</p>
          <p><strong>Unique Order ID:</strong> {orderDetails.orderId}</p>
          <p><strong>Unique Recipt ID:</strong> {orderDetails.reciptid}</p>
        </div>
      ) : (
        <p>No transaction details found.</p>
      )}

      <button type="button" onClick={GoHome} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Home</button>
      <button type="button" onClick={PrintPage} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Print</button>
    </div>
  );
};

export default PostTransaction;
