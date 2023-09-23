const Modal = ({children, modalOpen, setModalOpen}) => {
    return (
        <>
            {modalOpen && (
                <div className="bg-black/50 fixed inset-0">
                    <div className="flex justify-center items-center h-full">
                        <div className="flex flex-col items-end bg-slate-300 w-1/3 p-5 border shadow">
                            <button onClick={() => setModalOpen(false)} className="bg-red-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">    
                                &times;
                            </button>
                            {children}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal