import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { AnyAction, Dispatch } from 'redux';
import { fetchUsers } from "../state";
import { RootState } from '../state/rootReducer';

type UserContainerProps = {}

const UserContainer: React.FC<
  UserContainerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> = ({ usersState, fetchUsers }) => {

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
            {users.map((user: any) => <p>{user?.name}</p>)}
          </main>
        </div>
      )
}

const mapStateToProps = (state: RootState, ownProps: any) => {
  return {
    usersState: state.user
  }
}
const mapDispatchToProps = (dispatch: any, ownProps: any) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);