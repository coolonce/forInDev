import React from 'react';

export default ({ term, data, update }) => {

  const dataSearch = e => {
    const value = e.target.value.toLowerCase();

    const filter = data.filter(user => {
      return user.name.toLowerCase().includes(value);
    });

    update({
      data: filter,
      active: 0,
      term: value
    });

  };

  return (
    <div className="searchbar col-md-8">
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Поиск пользователя по имени"
        onChange={dataSearch}
      />
    </div>
  );
};
