function printMessageWithCallback(callback) {
  console.log("Pesan 1");
  setTimeout(function() {
    console.log("Pesan 2");
    callback();
  }, 1000);
}

function printThirdMessage() {
  console.log("Pesan 3");
}

printMessageWithCallback(printThirdMessage);
