import React from "react";
import { ProfileStatus } from "../ProfileStatus";

export const ProfileInfo = (props) => {
  if (!props.profile) {
    return <div>Загрузка</div>;
  }

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVzcmgCdDTW0at0G3QFAyqX5-c6DzbB6pEA&usqp=CAU"
        alt="Профиль"
      />
      <div>
        <img src={props.profile.photos.large} />
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </div>
  );
};
