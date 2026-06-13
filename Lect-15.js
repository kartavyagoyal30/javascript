//zomato application

function placedOrder(Callback) {
  console.log("Payment is in progress");

  setTimeout(() => {
    console.log("Payment is received and order is placed");
    Callback();
  }, 3000);
}

function PreparingOrder(Callback) {
  console.log("Your food preperation started");

  setTimeout(() => {
    console.log("Your order is now prepared");
    Callback();
  }, 3000);
}

function pickUpOrder(Callback) {
  console.log("Delivery boy is on the way to pickup the order");

  setTimeout(() => {
    console.log("Your order has been picked up");
    Callback();
  }, 3000);
}

function deliverOrder() {
  console.log("Delivery boy is on the way to deliver the order");

  setTimeout(() => {
    console.log("Your order has been delivered");
  }, 3000);
}

// placedOrder(PreparingOrder);

placedOrder(() => {
  PreparingOrder(() => {
    pickUpOrder(()=>{
        deliverOrder();
    });
  });
});
