// import React from "react";
// import ReactDOM from "react-dom";
// import styles from "./Modal.module.css";

// const PortalComponent = ({ setIsOpen }) => {
//   return ReactDOM.createPortal(
//     <>
//       <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
//       <div className={styles.centered}>
//         <div className={styles.modal}>
//           <div className={styles.modalHeader}>
//             <h5 className={styles.heading}>Portal</h5>
//           </div>
//           <div className={styles.modalContent}>
//             This is a portal, not in the scope of the parent component but still
//             in the DOM tree 🤩🤯
//           </div>
//           <div className={styles.modalActions}>
//             <div className={styles.actionsContainer}>cd
//               <button
//                 className={styles.deleteBtn}
//                 onClick={() => setIsOpen(false)}
//               >
//                 Yay! 🎉🥳
//               </button>{" "}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>,
//     document.body
//   );
// };

// export default PortalComponent;