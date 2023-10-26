import React from 'react';
import "./styles/UserAvatar.css";

const UserAvatar = ({ name }) => {
  // Obtiene las iniciales del nombre
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className="user-avatar">
      {initials}
    </div>
  );
};

export default UserAvatar;
