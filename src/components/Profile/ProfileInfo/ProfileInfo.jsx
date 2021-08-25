import React from "react";

import { ProfileStatus } from "../ProfileStatus/ProfileStatus";

import userPhoto from "../../../image/photoUser.png";

// import style from "./ProfileStatus.module.css";

export const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
}) => {
  if (!profile) {
    return <div>Загрузка</div>;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div>
        <img src={profile.photos.large || userPhoto} />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      </div>
      <ProfileStatus status={status} updateStatus={updateStatus} />
    </div>
  );
};
