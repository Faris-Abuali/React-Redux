import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchUsers } from "../state";
import { selectUsersByQuery } from '../state/cake/selectors';
import { RootState } from '../state/rootReducer';
import { UserObject } from '../state/user/userReducer';

type UserContainerProps = {
  query?: string;
}

const UserContainer: React.FC<
  UserContainerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> = ({ usersState, fetchUsers, filteredUsers }) => {

  useEffect(() => {
    fetchUsers();
  }, []);

  const { loading, users, error } = usersState;

  return loading
    ? (<h2>Loading users...</h2>)
    : error ? (<h2>{error}</h2>)
      : (
        <div>
          <h2>Users List</h2>
          <main>
            {users.map((user: any) => <p key={user.name}>{user?.name}</p>)}
          </main>
          <br />
          <h2>Filtered Users List</h2>
          <ul>
            {filteredUsers.map((user: UserObject) => <li key={user.name}>{user?.name}</li>)}
          </ul>
        </div>
      )
}

const mapStateToProps = (state: RootState, ownProps: any) => {
  console.log("mapStateToProps...");
  return {
    usersState: state.user,
    filteredUsers: selectUsersByQuery(state, ownProps.query)
  }
}
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);