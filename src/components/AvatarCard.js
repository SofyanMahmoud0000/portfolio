import { fallbackImage, skeleton } from "../helpers/utils";
import LazyImage from "./LazyImage";
import PropTypes from 'prop-types';
import { useContext, useState, useEffect } from "react";
import { LoadingContext } from "../contexts/LoadingContext";
import config from "../config";
import Modal from 'react-modal';
import ModalImage from "react-modal-image";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};


Modal.setAppElement('#root');
const AvatarCard = (props) => {
    const [loading] = useContext(LoadingContext);
    const [badModal, setBadModal] = useState(false)


    const handleModalIsOpen = () => {
        setBadModal(true)
    }

    const handleModalIsClosed = () => {
        console.log("clicked")
        setBadModal(false)
    }

    useEffect(() => {
        console.log(badModal)
    }
        , [badModal])

    return (
        <div className="card shadow-lg compact bg-base-100">
            <div className="grid place-items-center py-8">
                {
                    (loading || !props.profile) ? (
                        <div className="avatar opacity-90">
                            <div className="mb-8 rounded-full w-32 h-32">
                                {
                                    skeleton({
                                        width: 'w-full',
                                        height: 'h-full',
                                        shape: '',
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <div className="avatar opacity-90">
                            <div onClick={handleModalIsOpen} className="mb-8 rounded-full w-32 h-32 ring ring-primary ring-offset-base-100 ring-offset-2 cursor-pointer">
                                {
                                    <LazyImage
                                        src={props.profile.avatar ? props.profile.avatar : fallbackImage}
                                        alt={props.profile.name}
                                        placeholder={
                                            skeleton({
                                                width: 'w-full',
                                                height: 'h-full',
                                                shape: '',
                                            })
                                        }
                                    />
                                }
                            </div>
                        </div>
                    )
                }
                <div className="text-center mx-auto px-8">
                    {
                        ((loading || !props.profile)) || (
                            <Modal
                                isOpen={badModal}
                                contentLabel="Example Modal"
                                onRequestClose={handleModalIsClosed}
                                style={customStyles}

                            >
                                <LazyImage
                                    src={props.profile.avatar ? props.profile.avatar : fallbackImage}
                                    alt={props.profile.name}
                                    placeholder={
                                        skeleton({
                                            width: 'w-full',
                                            height: 'h-full',
                                            shape: '',
                                        })
                                    }
                                />
                            </Modal>
                        )
                    }

                    <h5 className="font-bold text-2xl">
                        {
                            (loading || !props.profile) ? (
                                skeleton({ width: 'w-48', height: 'h-8' })
                            ) : <span className="opacity-70">{props.profile.name}</span>
                        }
                    </h5>
                    <div className="mt-3 text-base-content text-opacity-60">
                        {
                            (loading || !props.profile) ? (
                                skeleton({ width: 'w-48', height: 'h-5' })
                            ) : (config.work.length != 0) ? config.work : props.profile.bio

                        }
                    </div>

                    <div className="mt-3 text-base-content text-opacity-60">
                        {
                            (loading || !props.profile) ? (
                                skeleton({ width: 'w-48', height: 'h-5' })
                            ) : config.under_bio

                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

AvatarCard.propTypes = {
    profile: PropTypes.object
}

export default AvatarCard;