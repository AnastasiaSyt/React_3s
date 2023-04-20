import React, { type FC } from 'react';
import { type ITag, type IImages } from '../types/IImages';
import Tag from './Tag';

interface ModalProps {
  cardData: IImages;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, cardData }) => {
  return (
    <>
      {isOpen && (
        <div className="modal_background">
          <div className="modal_window">
            <span className="modal_close" onClick={onClose}>
              &times;
            </span>
            <div className="modal_content">
              <div className="modal_image" role="modal_image">
                <img
                  src={cardData.urls.regular}
                  alt={cardData.alt_description}
                  className="modal_image_cur"
                />
              </div>
              <div className="modal_info">
                <div className="modal_top">
                  {cardData.description !== null && (
                    <div className="modal_title" role="modal_title">
                      {cardData.description}
                    </div>
                  )}
                  {cardData.description === null && (
                    <div className="modal_title">{cardData.alt_description}</div>
                  )}
                  <div className="modal_author_info">
                    <div className="modal_author" role="modal_author">
                      <img
                        className="modal_author_avatar"
                        src={cardData.user.profile_image.medium}
                        alt="user_photo"
                      />
                      <div className="modal_author_name">{cardData.user.name}</div>
                    </div>
                    <div className="modal_date" role="modal_date">
                      {new Date(cardData.updated_at).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="modal_tags">
                    {cardData.tags.map((item: ITag, index: number) => {
                      return <Tag tag={item} key={index}></Tag>;
                    })}
                  </div>
                </div>
                <a
                  href={cardData.links.download}
                  download
                  className="modal_download_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="modal_download button">Download photo</button>
                </a>
                <div className="modal_middle">
                  <div className="modal_likes">Likes: {cardData.likes}</div>
                  <div className="modal_colors">
                    Color:
                    <div className="modal_circle" style={{ backgroundColor: cardData.color }}></div>
                  </div>
                </div>
                <div className="modal_bottom">
                  {cardData.user.social?.instagram_username !== null && (
                    <div className="modal_instagram">
                      <img src="../mdi_instagram.svg" className="modal_icon"></img>
                      <div>{cardData.user.social?.instagram_username}</div>
                    </div>
                  )}
                  {cardData.user.social?.twitter_username !== null && (
                    <div className="modal_twitter">
                      <img src="../iconoir_twitter.svg" className="modal_icon"></img>
                      <div>{cardData.user.social?.twitter_username}</div>
                    </div>
                  )}
                  <div className="modal_license">
                    <img src="../carbon_security.svg" className="modal_icon"></img>
                    <p>Free to use under the Unsplash License</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
