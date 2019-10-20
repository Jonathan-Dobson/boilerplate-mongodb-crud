module.exports = function () {
    const user = this.toObject();
    delete user.password;
    return user;
};