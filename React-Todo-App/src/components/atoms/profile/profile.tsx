import React from 'react';

interface ProfileProps {
  imageUrl: string;
  altText: string;
  width?: number;
  height?: number;
  profileRoute: string;
}

const Profile: React.FC<ProfileProps> = ({
  imageUrl,
  altText,
  width = 48,
  height = 48,
  profileRoute,
}) => {
  return (
    <a href={profileRoute}>
      <img
        src={imageUrl}
        alt={altText}
        width={width}
        height={height}
        style={{paddingBottom: '30px'}}
      />
    </a>
  );
};

export default Profile;
