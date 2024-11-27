const {UserList, MovieList} = require("../data")
const lodash = require("lodash")
const resolvers = {
    Query: {
        users: ()=> {
            return UserList;
        },
        user: (_, args)=> {
            const id = args.id;
            console.log(id, UserList);
            const user = lodash.find(UserList, {id: Number(id)});
            return user;
        },
        movies: () => {
            return MovieList
        },
        movie: (_, args) => {
            const name = args.name;
            const movie = lodash.find(MovieList, {name});
            return movie;
        }
    },
    User: {
        favoriteMovies: () => {
            return lodash.filter(MovieList, (movie) => movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010)
        }
    },
    Mutation: {
        createUser: (_, args) =>{
            const user = args.input;
            const lastId = UserList[UserList.length - 1];
            user.id = lastId.id + 1;
            UserList.push(user);
            return user;
        }
    }


}

module.exports = resolvers