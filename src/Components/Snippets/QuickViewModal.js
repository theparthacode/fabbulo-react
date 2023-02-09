import { createPortal } from "react-dom";
import styled from "styled-components";
import cross from "../../Assets/cross.svg";

export default function QuickViewModal({ modalStatus, children, onClose }) {
  if (!modalStatus) return null;
  return createPortal(
    <>
      <ProductModal>
        <div className="modalContainer">
          <div className="scrollCont">
            <button className="closeBtn" onClick={onClose}><img src={cross} alt="" width="30px" /></button>
            {children}
          </div>
        </div>
      </ProductModal>
    </>,
    document.getElementById('modal-root')
  )
}
const ProductModal = styled.section`
    position: fixed;
    left: 0;
    right:0;
    top: 0;
    bottom: 0;
    z-index:9999;
    background:rgba(255,255,255,0.1);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    animation: modalAnim 200ms alternate;
    .modalContainer{
      width: 100%;
      max-width: 1000px;
      float:left;
      height: 100%;
      max-height: 500px;
      background: #fff;
      position: relative;
      border-radius: 20px;
      box-shadow: 0px 0px 40px rgba(0,0,0,0.2);
      overflow: hidden;
      padding: 15px 5px;
    }
    .scrollCont{
      overflow: auto;
      height: 100%;
      padding: 12px 20px;
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        height: 90%;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: #ababab;
        border-radius: 10px;
      }
    }
    .closeBtn{
      background: transparent;position: absolute;right: 15px;top: 15px;cursor: pointer;transform: scale(1);transition: 100ms ease;
      &:hover{transform: scale(0.92);}
    }
    @keyframes modalAnim {
      from {opacity:0;visibility:hidden;}
      to {opacity:1;visibility:visible;}
    }
    .productPrice{
        font-size: 22px;
        font-weight: 500;
        color: #161616;
        display: flex;
    }
    .actual_price{
        text-decoration: line-through;
        color: #9d9d9d;
        margin-left: 10px;
    }
    .discount{color: #fff;font-size: 13px;font-weight: bold;align-self: center;border-radius: 20px;padding: 3px 8px;margin-left: 10px;background: linear-gradient(-90deg,rgb(142,45,226),rgb(74,0,224) 100%);}
`
