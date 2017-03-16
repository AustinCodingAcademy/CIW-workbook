function fizzbuzz() {

    for (i = 1, i <= 100; i++)

    {

        if (i % 5 === 0 && i % 3 === 0) {
            document.write('Fizzbuzz');
        } else if (i % 3 === 0) {
            document.write('Fizz');
        } else if (i % 5 === 0) {
            document.write('Buzz')
        } else {
            document.write(i);
        }
    }
}
