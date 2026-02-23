// General form
/*
    - slice(start, end) => more modern and flexible
    - substring(start, end) => older method and less flexible
*/

// negative index
/*
    const str = "hello";
    str.slice(-2); // support negative index => "lo"
    str.substring(-2); // does not support negative index
*/

// reverse index 
/*
    const str = "Hello";
    str.slice(4, 1); // does not support reverse index
    str.substring(4, 1); // support reverse index => "ell"
*/
