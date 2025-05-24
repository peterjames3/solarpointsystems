import  { useState, useEffect } from 'react';

function Modal({ isOpen, onClose, product }) {
  const [quantity, setQuantity] = useState(1);
  const [totalCost, setTotalCost] = useState(0);

  // Ensure product.price is properly parsed and calculate total cost
  useEffect(() => {
    if (product) {
      const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
      setTotalCost((quantity * price).toFixed(2));
    }
  }, [quantity, product]);

  const handleQuantityChange = (event) => {
    let value = parseInt(event.target.value, 10);
    if (isNaN(value) || value < 1) {
      value = 1;
    }
    setQuantity(value);
  };

  const handleCheckout = () => {
    console.log(`Checking out ${quantity} of ${product.name}, Total Cost: $${totalCost}`);
    // Placeholder for checkout logic
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full ">
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-1 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {product.name}
              </h3>
              <div className="mt-1">
                <img src={product.img} alt={product.name} className="w-full max-h-25 object-contain mx-auto" />
               {/*  <p className="text-sm text-gray-500">{product.desc}</p> */}
                <p className="text-sm font-semibold text-gray-900">Price: {product.price}</p>
                <div className="mt-2">
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
                  <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                  <p className="text-lg font-semibold text-gray-900 mt-1">Total: ${totalCost}</p>
                </div>
                <div className="mt-2 text-left space-y-2">
                  <div className="font-semibold">Steps for Payment:</div>
                  <ul className="list-decimal ml-4">
                    <li>Select "Pay bill, Enter Business Number use 7116569".</li>
                    <li>Select "Enter Account Number".</li>
                    <li>Enter Your Name.</li>
                    <li>Press "OK".</li>
                    <li>Call us on 0703704062 to confirm your delivery location.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
         {/*  <button type="button" onClick={handleCheckout} className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">
            Checkout
          </button> */}
          <button type="button" onClick={onClose} className="mt-3 w-full inline-flex justify-center  rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-blue-700 text-base font-medium text-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
