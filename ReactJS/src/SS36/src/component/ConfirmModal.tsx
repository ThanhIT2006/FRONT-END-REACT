import React from "react";

interface ConfirmModalProps {
    isOpen: boolean;
    taskTitle: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
    isOpen,
    taskTitle,
    onConfirm,
    onCancel,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-lg font-semibold mb-3">Xác nhận</h2>
                <p className="mb-6">
                    Bạn có chắc chắn muốn xoá công việc{" "}
                    <span className="font-bold">&lt;{taskTitle}&gt;</span> không?
                </p>
                <div className="flex justify-end gap-3">
                    <button
                        className="px-4 py-2 bg-gray-300 rounded"
                        onClick={onCancel}
                    >
                        Hủy
                    </button>
                    <button
                        className="px-4 py-2 bg-red-500 text-white rounded"
                        onClick={onConfirm}
                    >
                        Xóa
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ConfirmModal;