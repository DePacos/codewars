// DESCRIPTION:
// You need to write regex that will validate a password to make sure it meets the following criteria:
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)



const REGEXP = /^(?![\d+_@.-<>${}[] ]+$)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{6,}$/;