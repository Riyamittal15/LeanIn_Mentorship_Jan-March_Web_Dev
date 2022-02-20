export function filterItems(usersList,query){
    return usersList.filter((item) => item.yr.startsWith(query));
}