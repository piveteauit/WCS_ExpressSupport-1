function getAllUsers (request, response) {
    return response
        .status(200)
        .json([
            {id: 1, name: 'Pablo'},
            {id: 2, name: 'Guillaume'}
        ])
}
module.exports = getAllUsers;