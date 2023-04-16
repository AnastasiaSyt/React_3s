import React, { type FC } from 'react';
import { type ITag } from '../types/IImages';

interface TagProps {
  tag: ITag;
  key: number;
}

const Tag: FC<TagProps> = ({ tag }: TagProps) => {
  return (
    <div className="tag_background">
      <p className="tag" role="tag">
        {tag.title}
      </p>
    </div>
  );
};

export default Tag;
