function printMessageWithoutCallback() {
  console.log("Pesan 1");
  setTimeout(function() {
    console.log("Pesan 2");
    setTimeout(function() {
      console.log("Pesan 3");
    }, 1000);
  }, 1000);
}

printMessageWithoutCallback();
