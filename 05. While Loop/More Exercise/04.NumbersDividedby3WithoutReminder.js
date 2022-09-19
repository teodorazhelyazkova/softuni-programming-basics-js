function numbersDividedBy3WithoutReminder(input) {
  for (i = 1; i < 100; i++) {
      if(i % 3 === 0) {
          console.log(i);
      }
  }
}

numbersDividedBy3WithoutReminder();
