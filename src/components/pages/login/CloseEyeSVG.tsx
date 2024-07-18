import { Dispatch, SetStateAction } from "react";
type PropsType = {
  setShow: Dispatch<SetStateAction<boolean>>;
};
const CloseEyeSVG = ({ setShow }: PropsType) => {
  return (
    <svg
      onClick={() => setShow(true)}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill="none"
      className="absolute top-[50%] right-5 translate-y-[-50%]"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M18.5299 1.52985C18.6624 1.38767 18.7345 1.19963 18.7311 1.00532C18.7277 0.811023 18.6489 0.625638 18.5115 0.488225C18.3741 0.350812 18.1887 0.2721 17.9944 0.268672C17.8001 0.265243 17.6121 0.337366 17.4699 0.469847L1.46991 16.4698C1.39622 16.5385 1.33712 16.6213 1.29613 16.7133C1.25514 16.8053 1.23309 16.9046 1.23132 17.0053C1.22954 17.106 1.24807 17.2061 1.28579 17.2994C1.32351 17.3928 1.37965 17.4777 1.45087 17.5489C1.52209 17.6201 1.60692 17.6762 1.70031 17.714C1.7937 17.7517 1.89373 17.7702 1.99443 17.7684C2.09513 17.7667 2.19445 17.7446 2.28645 17.7036C2.37845 17.6626 2.46125 17.6035 2.52991 17.5298L5.37691 14.6828C6.74391 15.3268 8.31691 15.7498 9.99991 15.7498C12.6839 15.7498 15.0899 14.6728 16.8199 13.3448C17.6869 12.6798 18.4029 11.9378 18.9089 11.2088C19.4009 10.4998 19.7499 9.72285 19.7499 8.99985C19.7499 8.27685 19.3999 7.49985 18.9089 6.79085C18.4029 6.06185 17.6869 5.32085 16.8209 4.65485C16.5579 4.45385 16.2809 4.25785 15.9889 4.07185L18.5299 1.52985ZM14.8999 5.16085L13.1289 6.93185C13.6064 7.65298 13.8199 8.51698 13.7333 9.37751C13.6467 10.238 13.2654 11.0422 12.6538 11.6537C12.0423 12.2653 11.2381 12.6467 10.3776 12.7333C9.51705 12.8198 8.65304 12.6063 7.93191 12.1288L6.51491 13.5448C7.62006 14.003 8.80358 14.2424 9.99991 14.2498C12.2869 14.2498 14.3799 13.3268 15.9069 12.1548C16.6689 11.5698 17.2709 10.9368 17.6769 10.3538C18.0959 9.74985 18.2499 9.27685 18.2499 8.99985C18.2499 8.72285 18.0959 8.24985 17.6769 7.64585C17.2709 7.06285 16.6689 6.42985 15.9069 5.84485C15.5939 5.60485 15.2579 5.37485 14.8999 5.16085ZM9.02991 11.0308C9.44977 11.2314 9.92147 11.2968 10.3801 11.2181C10.8386 11.1394 11.2616 10.9205 11.5906 10.5915C11.9196 10.2625 12.1385 9.83958 12.2172 9.381C12.2959 8.92241 12.2304 8.45071 12.0299 8.03085L9.02991 11.0308Z"
        fill="black"
      />
      <path
        d="M10 2.25C11.032 2.25 12.024 2.41 12.951 2.681C12.9916 2.69311 13.0283 2.71562 13.0575 2.74629C13.0867 2.77697 13.1074 2.81474 13.1175 2.85588C13.1276 2.89701 13.1268 2.94007 13.1151 2.98078C13.1035 3.0215 13.0814 3.05846 13.051 3.088L12.227 3.913C12.1964 3.94335 12.1586 3.96543 12.1172 3.97715C12.0757 3.98887 12.0319 3.98985 11.99 3.98C11.3375 3.82845 10.6699 3.75129 10 3.75C7.713 3.75 5.62 4.673 4.093 5.845C3.331 6.43 2.729 7.063 2.323 7.646C1.904 8.25 1.75 8.723 1.75 9C1.75 9.277 1.904 9.75 2.323 10.354C2.677 10.864 3.181 11.411 3.811 11.931C3.927 12.026 3.938 12.201 3.831 12.308L3.123 13.017C3.07964 13.061 3.02132 13.087 2.95962 13.09C2.89793 13.093 2.83738 13.0726 2.79 13.033C2.14617 12.5021 1.57494 11.8888 1.091 11.209C0.6 10.5 0.25 9.723 0.25 9C0.25 8.277 0.6 7.5 1.091 6.791C1.597 6.062 2.313 5.321 3.179 4.655C4.91 3.327 7.316 2.25 10 2.25Z"
        fill="black"
      />
      <path
        d="M9.99998 5.25C10.118 5.25 10.236 5.255 10.351 5.266C10.548 5.285 10.619 5.52 10.48 5.66L9.26698 6.872C8.94397 6.98367 8.65057 7.16727 8.40891 7.40893C8.16725 7.65059 7.98365 7.944 7.87197 8.267L6.65998 9.48C6.51998 9.62 6.28497 9.548 6.26597 9.351C6.21711 8.8312 6.27732 8.30693 6.44275 7.81174C6.60819 7.31655 6.8752 6.86137 7.2267 6.47532C7.57819 6.08928 8.00643 5.78089 8.48398 5.56989C8.96153 5.35889 9.47788 5.24994 9.99998 5.25Z"
        fill="black"
      />
    </svg>
  );
};

export default CloseEyeSVG;