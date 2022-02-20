import Card from "../UI/Card";
const UsersList = (props) => {
  return (
    <Card>
      <ul>
        {props.list.map((user) => (
          <li key={user.id}>
            {user.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-Rs {user.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.yr}-{user.month}-{user.day}
          </li>
        ))}
      </ul>
    </Card>
  );
};
export default UsersList;