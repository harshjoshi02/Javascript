// iife = immediately invoked function expressions

(function chai() {
    // named iife
    console.log(`DB connected`);
}) ();

( (name) => {
    console.log(`DB connected ${name}`);
}) ("harsh")

