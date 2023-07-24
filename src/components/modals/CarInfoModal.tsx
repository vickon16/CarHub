"use client";

import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { selectModals, carModalClose } from "@/store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import ModalContent from "./ModalContent";

const CarInfoModal = () => {
  const { carModal } = useSelector(selectModals);
  const dispatch = useDispatch();
  const [, { close }] = useDisclosure(false);

  const handleCloseModal = () => {
    close();
    dispatch(carModalClose());
  };

  return (
    <Modal
      opened={carModal.modalOpen}
      onClose={handleCloseModal}
      withCloseButton={false}
      transitionProps={{
        transition: "fade",
        duration: 300,
        timingFunction: "linear",
      }}
      padding={0}
      size={700}
      radius={15}
    >
      {carModal.modalContent ? (
        <ModalContent
          onClick={handleCloseModal}
          modalContentData={carModal.modalContent}
        />
      ) : (
        <p>No Content to display</p>
      )}
    </Modal>
  );
};

export default CarInfoModal;
