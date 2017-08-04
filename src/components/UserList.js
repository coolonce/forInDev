import React from 'react';
import UserData from './UserData';

export default ({ data, update }) => {
  if (!data) { return (<p>Loading...</p>); }

  const users = data.map((user, index) => {
    return (<UserData user={user} key={`user-${index}`} index={index} update={update} />);
  });

  return (
    <div className="row">
    {users}
    </div>
    /*
    <table className="user-list table table-striped">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>birthdate</th>

        </tr>
      </thead>

      <tbody>
        {users}
      </tbody>
    </table>
    */
  );
};
