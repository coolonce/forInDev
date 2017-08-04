import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

var options = [
  /*
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
  */
];

function logChange(val) {
  console.log("Selected: " + JSON.stringify(val));
}
export default ({ data, active, rank }) => {

  if (!data || !data[active]) { return <h3>Nothing found :(</h3>; }
  if (!rank ) { return <h3>Nothing found :(</h3>; }
  for (var key in rank) {
    console.log(rank[key]);
    options.push({value: rank[key].id, label: rank[key].name});
  }
  const user = data[active];


  return (
    <div className="col-md-12">
      <div className="col-md-4">
        <img src={`${user.image}`} />
      </div>
      <div className="col-md-8">
        <form role="form">
          <div className="form-group">
            <label htmlFor="lastname">Фамилия</label>
            <input type="text" id="lastname" placeholder={user.last_name}/ >
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Имя</label>
            <input type="text" id="firstname" placeholder={user.first_name} / >
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Дата рождения</label>
            <input type="date" id="birthdate" / >
          </div>
          <div className="form-group" >
            <label htmlFor="lastname">Звание</label>
            <Select
              name="form-field-name"
              value="one"
              options={options}
              onChange={logChange}
            />
          </div>
        </form>
      </div>
      <div className="col-md-12 ">
        <div className="highlight">
          <pre className="desc">
            <h5>Характеристика</h5>
            {user.description}
          </pre>
        </div>
      </div>

      <div className="col-md-6 col-md-offset-6">
        <button>Сохранить</button>
        <button>Удалить</button>
      </div>
    </div>


    /*
    <div className="thumbnail">
      <img src={`${user.image}`} />

      <div className="thumbnail-caption">
        <h3>{user.first_name + ' ' + user.last_name}</h3>
        <table className="user-info table table-responsive">
          <tbody>
            <tr>
              <td>Age:</td>
              <td>{user.birth_date}</td>
            </tr>
          </tbody>
        </table>

        <p><b>Favorite phrase:</b> {user.phrase}</p>
      </div>
    </div>*/
  );
};
