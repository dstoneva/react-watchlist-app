import React, { useContext } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import { GlobalContext } from "../components/context/GlobalContext";
import StarRating from "../components/Rating/StarRating";

const RatingModal = () => {
  const { modalProps, setModalProps, addMovieToWatched } = useContext(GlobalContext);
  const onClickHandler = () => {
    setModalProps({ ...modalProps, showModal: false });
    addMovieToWatched(modalProps.movie);
  };

  const ratingHandler = (rating) => {
    console.log("clicked");
    modalProps.movie.user_rating = rating;
    console.log(modalProps.movie.user_rating);
  };

  return (
    modalProps.showModal && (
      <Modal isOpen={modalProps.showModal} toggle={onClickHandler}>
        <ModalHeader>Rate the movie</ModalHeader>
        <ModalBody>How did you like "{modalProps.movie.title}"?</ModalBody>
        <div style={{ margin: "auto", fontSize: "2rem", marginBottom:"2rem" }}>
          <StarRating currentRating={modalProps.movie.user_rating} changeRating={ratingHandler}></StarRating>
        </div>
        <ModalFooter>
          <Button onClick={onClickHandler} color="success">Vote</Button>
        </ModalFooter>
      </Modal>
    )
  );
};

export default RatingModal;
