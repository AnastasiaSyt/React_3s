import React, { type FC } from 'react';
import { type ITag } from '../types/IImages';

interface TagProps {
  tag: ITag;
  key: number;
}

const Tag: FC<TagProps> = ({ tag, key }: TagProps) => {
  return (
    <div className="tag_background" key={key}>
      <p className="tag">{tag.title}</p>
    </div>
  );
};

export default Tag;
