import {
  useState,
  useImperativeHandle,
  PropsWithChildren,
  forwardRef,
  Fragment,
} from "react";
import { Transition, Dialog } from "@headlessui/react";
import closeIcon from "/images/icon-close.svg";

type TModal = PropsWithChildren<{
  title: string;
}>;

export type TModalRef = {
  openModal: () => void;
  closeModal: () => void;
};

const Modal = forwardRef<TModalRef, TModal>(({ title, children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(
    ref,
    () => ({
      openModal: () => setIsOpen(true),
      closeModal: () => setIsOpen(false),
    }),
    []
  );

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto flex min-h-full items-center justify-center lg:p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="flex flex-col items-center gap-10 lg:gap-0 w-full lg:max-w-md h-full lg:h-auto transform overflow-hidden lg:rounded-2xl bg-white py-20 lg:py-6 p-6 text-left align-middle shadow-xl transition-all">
              <header className="w-full flex items-center justify-center lg:justify-between mb-8">
                <Dialog.Title className="text-neutral-dark text-4xl lg:text-xl font-bold uppercase">
                  {title}
                </Dialog.Title>
                <img
                  src={closeIcon}
                  alt=""
                  className="hidden lg:block"
                  onClick={() => setIsOpen(false)}
                />
              </header>
              <Dialog.Description className="w-full flex-1 flex flex-col lg:flex-row justify-between lg:justify-center items-center">
                {children}
                <img
                  src={closeIcon}
                  alt=""
                  className="lg:hidden"
                  onClick={() => setIsOpen(false)}
                />
              </Dialog.Description>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
});

Modal.displayName = "Modal";
export { Modal };
