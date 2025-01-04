const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center m-4 justify-center z-50 h-full">
            <div className="bg-white p-6 rounded-lg">
                <p className="text-lg font-semibold mb-4">{message}</p>
                <div>
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 ms-2 bg-red-500 text-white rounded-lg"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
