
/**
 * 
 * @param arg: any
 * @returns 
 */
export const validateText = (arg: any) => {
    const inputValue = arg.target.value
    const textRegex = /^[a-zA-Z\s]+$/;

    if (!textRegex.test(inputValue)) {
        arg.target.value = inputValue.replace(/[^a-zA-Z\s]/, '');
    }
    
    return arg
}