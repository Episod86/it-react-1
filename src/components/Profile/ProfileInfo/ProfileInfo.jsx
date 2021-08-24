import React from "react";
import { ProfileStatus } from "../ProfileStatus";
import { ProfileStatusWithHooKs } from "../ProfileStatus/ProfileStatusWithHooks";

export const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <div>Загрузка</div>;
  }

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVzcmgCdDTW0at0G3QFAyqX5-c6DzbB6pEA&usqp=CAU"
        alt="Профиль"
      />
      <div>
        <img src={profile.photos.large} />
      </div>
      <ProfileStatusWithHooKs status={status} updateStatus={updateStatus} />
    </div>
  );
};
