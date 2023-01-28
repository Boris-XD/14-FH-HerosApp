
export const loginUser = ( user ) => {
    localStorage.setItem('user', JSON.stringify(user));
}