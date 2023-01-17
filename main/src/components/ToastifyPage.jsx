import { ToastContainer, toast } from 'react-toastify'

export default function ToastifyPage() {
    const notify = () => toast("Added to cart")
    return (
        <div>
            <button onClick={notify}></button>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}