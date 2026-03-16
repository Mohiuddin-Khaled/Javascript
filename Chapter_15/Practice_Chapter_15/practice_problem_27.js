// lexical scope
// scope chain

// displaySchoolName() function inside schoolDetails() function 

function schoolDetails() {
    const schoolName = 'PKFSC';
    function displaySchoolName() {
        console.log(schoolName);
    };
    // inner function 
    displaySchoolName();
};
// outer function 
schoolDetails();