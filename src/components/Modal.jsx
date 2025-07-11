export default function Modal({children, onClick, modalState}) {
    if(!modalState)return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
        <div className="bg-white p-6 rounded-xl shadow-xl">
            {children}
            <button onClick={onClick}>Close</button>
        </div>
    </div>
  );
}
