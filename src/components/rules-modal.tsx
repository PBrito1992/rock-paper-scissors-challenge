import { Modal, TModalRef } from "@/components/modal";
import rulesSvg from "/images/image-rules.svg";
import { useRef } from "react";

const RulesModal = () => {
  const modalRef = useRef<TModalRef>(null);

  return (
    <>
      <button
        className="border border-neutral-header text-white font-sans uppercase text-xs font-semibold w-28 py-2 rounded-md cursor-pointer hover:bg-white hover:text-black"
        onClick={() => modalRef.current?.openModal()}
      >
        Rules
      </button>
      <Modal ref={modalRef} title="Rules">
        <img src={rulesSvg} alt="" className="w-full lg:w-auto" />
      </Modal>
    </>
  );
};
export { RulesModal };
