import { useLogout } from "../../pages/helpers/api-hooks/usePost";
import { toggleLogoutModal } from "../../react-redux/reducers/modal";
import { useDispatch } from "react-redux";
const LogoutModal = () => {
  const {logout} = useLogout();
  const dispatch = useDispatch();
  const dismiss = () => dispatch(toggleLogoutModal({ data: false }));

  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="container overflow-y-auto overflow-x-hidden fixed 
      top-0 right-0 left-0 z-50 min-w-full md:inset-0 h-modal md:h-full 
      backdrop-blur-sm backdrop-brightness-50"
    >
      <div className="flex relative p-4 w-full justify-center pt-28 pb-72">
        <div className="relative sm:w-full w-[30%] bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent 
            hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto 
            inline-flex items-center"
            data-modal-toggle="popup-modal"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              onClick={dismiss}
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div className="p-6 text-center">
            <svg
              className="mx-auto mb-4 w-14 h-14 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              Are you sure you want to Logout?
            </h3>

            {/* Actions */}
            <div
              className="flex sm:flex-col-reverse flex-row-reverse justify-around mt-10 
            sm:items-center cursor-pointer "
            >
               <div className="flex w-[100px] justify-center items-center text-white bg-red-500 rounded-full p-2 hover:bg-[#8aff8a]" onClick={logout}>
                  Logout
               </div>

               <div className="flex w-[100px] justify-center items-center text-white bg-green-500 rounded-full p-2 hover:bg-[#8aff8a]" onClick={dismiss}>
                  Cancel
               </div>

               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
