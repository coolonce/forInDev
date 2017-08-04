import React from 'react';
import dateformat from 'dateformat';
export default ({ user, update, index }) => {
  return (
    <div className="col-md-12 userData">
      <div className="col-md-3"> <img src={`${user.image}`} className="user-image" /></div>
      <div className="col-md-9">
        <h3>{user.first_name + ' ' + user.last_name} </h3>
        <p>{dateformat(user.birth_date, 'fullDate')}</p>
        <p>Заглушка. Надо сделать сохранение и изменение localstorage</p>
      </div>

      <div className="col-md-3 col-md-offset-9">
        <button  onClick={() => update({ active: index })} >Редактирование</button>
      </div>
      <hr />
    </div>

    /*
    <tr>
      <td><img src={`${user.image}`} className="user-image" /></td>
      <td>{user.first_name + ' ' + user.last_name}</td>
      <td>{user.birth_date}</td>
      <button  onClick={() => update({ active: index })} >Редактирование</button>
    </tr>*/
  );
};
