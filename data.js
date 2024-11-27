const UserList = [
    {
        id: 1,
        name: "John Doe",
        username: "john_doe",
        age: 30,
        nationality: "AMERICA",
        friends: [
            {
                id: 2,
                name: "Jane Smith",
                username: "jane_smith",
                age: 28,
                nationality: "BRITAIN"
            },
            {
                id: 4,
                name: "Sarah Williams",
                username: "sarah_williams",
                age: 32,
                nationality: "CANADA"
            },
        ]
    },
    {
        id: 2,
        name: "Jane Smith",
        username: "jane_smith",
        age: 28,
        nationality: "BRITAIN",
        friends: []
    },
    {
        id: 3,
        name: "David Johnson",
        username: "david_johnson",
        age: 25,
        nationality: "AMERICA",
        friends: []
    },
    {
        id: 4,
        name: "Sarah Williams",
        username: "sarah_williams",
        age: 32,
        nationality: "CANADA",
        friends: []
    },
    {
        id: 5,
        name: "Michael Brown",
        username: "michael_brown",
        age: 35,
        nationality: "AMERICA",
        friends: []
    },
    {
        id: 6,
        name: "Emily Davis",
        username: "emily_davis",
        age: 27,
        nationality: "AMERICA",
        friends: []
    }
]

const MovieList = [
    {
        id: 1,
        name: "Inception",
        yearOfPublication: 2010,
        isInTheaters: true
    },
    {
        id: 2,
        name: "The Dark Knight",
        yearOfPublication: 2008,
        isInTheaters: true
    },
    {
        id: 3,
        name: "The Matrix",
        yearOfPublication: 1999,
        isInTheaters: true
    },
    {
        id: 4,
        name: "Star Wars: The Force Awakens",
        yearOfPublication: 2015,
        isInTheaters: true
    },
    {
        id: 5,
        name: "The Shawshank Redemption",
        yearOfPublication: 1994,
        isInTheaters: true
    },
    {
        id: 6,
        name: "The Godfather",
        yearOfPublication: 1972,
        isInTheaters: true
    }
]
module.exports = {UserList,MovieList}