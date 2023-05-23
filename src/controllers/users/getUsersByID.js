const users = [
    {id: 1, name: 'Pablo'},
    {id: 2, name: 'Guillaume'},
    {id: 3, name: 'Joe'},
    {id: 4, name: 'Katy'},
]

function getUsersByID (request, response) {
    const {user_id} = request.params;

    return response
        .status(200)
        .json(users.find(function (user) {
            return user.id == user_id;
        }))
}
module.exports = getUsersByID;