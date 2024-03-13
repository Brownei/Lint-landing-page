import { create } from 'zustand';

type ModalType = {
  showModal: boolean;
  updateShowModal: (newShowModal: boolean) => void;
};

export const useModalStore = create<ModalType>((set) => ({
  showModal: false,
  updateShowModal: (newShowModal) => {
    console.log('Changing modal')
    set({showModal: newShowModal})
  }
}))