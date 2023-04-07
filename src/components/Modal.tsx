import React, { type FC } from 'react';
import '../styles/Modal.css';
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
              <div className="modal_image">
                <img
                  src={cardData.urls.regular}
                  alt={cardData.alt_description}
                  className="modal_image_cur"
                />
              </div>
              <div className="modal_info">
                <div className="modal_top">
                  {cardData.description !== null && (
                    <p className="modal_title">{cardData.description}</p>
                  )}
                  {cardData.description === null && (
                    <p className="modal_title">{cardData.alt_description}</p>
                  )}
                  <div className="modal_author_info">
                    <div className="modal_author">
                      <img
                        className="modal_author_avatar"
                        src={cardData.user.profile_image.medium}
                        alt="user_photo"
                      />
                      <div className="modal_author_name">{cardData.user.name}</div>
                    </div>
                    <p className="modal_date">
                      {new Date(cardData.updated_at).toLocaleDateString()}
                    </p>
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
                  <p className="modal_likes">Likes: {cardData.likes}</p>
                  <p className="modal_colors">
                    Color:
                    <div className="modal_circle" style={{ backgroundColor: cardData.color }}></div>
                  </p>
                </div>
                <div className="modal_bottom">
                  <div className="modal_instagram">
                    <img src="../public/mdi_instagram.svg" className="modal_icon"></img>
                    <p>{cardData.user.social.instagram_username}</p>
                  </div>
                  <div className="modal_twitter">
                    <img src="../public/iconoir_twitter.svg" className="modal_icon"></img>
                    <p>{cardData.user.social.twitter_username}</p>
                  </div>
                  <div className="modal_license">
                    <img src="../public/carbon_security.svg" className="modal_icon"></img>
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
