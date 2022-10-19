import React from "react";
const Spinner = () => {
  return (
    <svg role='status' className='inline mr-3 w-4 h-4 text-white animate-spin' viewBox='0 0 100 101' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
        fill='#E5E7EB'
      />

      <path
        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
        fill='currentColor'
      />
    </svg>
  );
};

const FullPageSpinner = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <svg className='animate-bounce' width='344' height='52' viewBox='0 0 344 52' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18.2998 18.368C18.2998 15.4691 20.6498 13.1191 23.5486 13.1191H144.998V23.6168H23.5486C20.6498 23.6168 18.2998 21.2668 18.2998 18.368Z'
          fill='#121F4C'
        />
        <path
          d='M47.8657 32.8025C47.8657 29.9037 50.2157 27.5537 53.1146 27.5537H145.001V38.0514H53.1146C50.2157 38.0514 47.8657 35.7014 47.8657 32.8025Z'
          fill='#94F236'
        />
        <path
          d='M66.1655 45.9305C66.1655 43.0316 68.5155 40.6816 71.4144 40.6816H145V51.1793H71.4144C68.5155 51.1793 66.1655 48.8293 66.1655 45.9305Z'
          fill='#94F236'
        />
        <path d='M0 5.24884C0 2.34998 2.34998 0 5.24884 0H144.999V10.4977H5.24884C2.34998 10.4977 0 8.14769 0 5.24884Z' fill='#94F236' />
        <path
          d='M168.442 40V8.275H182.977C186.367 8.275 188.977 9.01 190.807 10.48C192.667 11.95 193.597 13.96 193.597 16.51C193.597 18.19 193.177 19.645 192.337 20.875C191.497 22.075 190.327 22.975 188.827 23.575C190.627 24.085 192.007 24.985 192.967 26.275C193.957 27.565 194.452 29.155 194.452 31.045C194.452 33.865 193.462 36.07 191.482 37.66C189.532 39.22 186.862 40 183.472 40H168.442ZM175.102 21.325H181.762C185.182 21.325 186.892 20.005 186.892 17.365C186.892 14.755 185.182 13.45 181.762 13.45H175.102V21.325ZM175.102 34.825H182.527C184.327 34.825 185.647 34.48 186.487 33.79C187.327 33.1 187.747 32.05 187.747 30.64C187.747 29.26 187.327 28.225 186.487 27.535C185.647 26.845 184.327 26.5 182.527 26.5H175.102V34.825ZM198.876 13.63V7.285H206.211V13.63H198.876ZM199.146 40V17.905H205.941V40H199.146ZM210.647 40V35.635L221.267 22.99H210.647V17.905H228.602V22.27L217.982 34.96H229.097V40H210.647ZM232.808 48.1V17.905H239.468V21.19C240.068 20.05 240.983 19.15 242.213 18.49C243.473 17.8 244.883 17.455 246.443 17.455C248.363 17.455 250.043 17.92 251.483 18.85C252.953 19.78 254.093 21.1 254.903 22.81C255.713 24.52 256.118 26.56 256.118 28.93C256.118 31.3 255.713 33.355 254.903 35.095C254.093 36.805 252.953 38.14 251.483 39.1C250.043 40.03 248.363 40.495 246.443 40.495C244.973 40.495 243.623 40.18 242.393 39.55C241.193 38.92 240.263 38.08 239.603 37.03V48.1H232.808ZM244.418 35.41C245.858 35.41 247.028 34.885 247.928 33.835C248.828 32.785 249.278 31.15 249.278 28.93C249.278 26.74 248.828 25.135 247.928 24.115C247.028 23.065 245.858 22.54 244.418 22.54C242.948 22.54 241.763 23.065 240.863 24.115C239.963 25.135 239.513 26.74 239.513 28.93C239.513 31.15 239.963 32.785 240.863 33.835C241.763 34.885 242.948 35.41 244.418 35.41ZM270.894 40.495C268.524 40.495 266.454 40.03 264.684 39.1C262.944 38.14 261.594 36.805 260.634 35.095C259.674 33.355 259.194 31.3 259.194 28.93C259.194 26.59 259.674 24.565 260.634 22.855C261.594 21.115 262.944 19.78 264.684 18.85C266.454 17.92 268.524 17.455 270.894 17.455C273.264 17.455 275.319 17.92 277.059 18.85C278.829 19.78 280.194 21.115 281.154 22.855C282.144 24.565 282.639 26.59 282.639 28.93C282.639 31.3 282.144 33.355 281.154 35.095C280.194 36.805 278.829 38.14 277.059 39.1C275.319 40.03 273.264 40.495 270.894 40.495ZM270.894 35.41C272.334 35.41 273.504 34.885 274.404 33.835C275.334 32.785 275.799 31.15 275.799 28.93C275.799 26.74 275.334 25.135 274.404 24.115C273.504 23.065 272.334 22.54 270.894 22.54C269.454 22.54 268.284 23.065 267.384 24.115C266.484 25.135 266.034 26.74 266.034 28.93C266.034 31.15 266.484 32.785 267.384 33.835C268.284 34.885 269.454 35.41 270.894 35.41ZM297.398 40.495C291.188 40.495 288.083 37.48 288.083 31.45V22.99H283.898V17.905H288.083V11.425H294.878V17.905H301.403V22.99H294.878V31.18C294.878 32.44 295.163 33.385 295.733 34.015C296.333 34.645 297.278 34.96 298.568 34.96C298.958 34.96 299.363 34.915 299.783 34.825C300.233 34.735 300.713 34.615 301.223 34.465L302.213 39.415C301.583 39.745 300.833 40 299.963 40.18C299.093 40.39 298.238 40.495 297.398 40.495ZM313.966 40.495C307.756 40.495 304.651 37.48 304.651 31.45V22.99H300.466V17.905H304.651V11.425H311.446V17.905H317.971V22.99H311.446V31.18C311.446 32.44 311.731 33.385 312.301 34.015C312.901 34.645 313.846 34.96 315.136 34.96C315.526 34.96 315.931 34.915 316.351 34.825C316.801 34.735 317.281 34.615 317.791 34.465L318.781 39.415C318.151 39.745 317.401 40 316.531 40.18C315.661 40.39 314.806 40.495 313.966 40.495ZM328.784 40.495C327.134 40.495 325.679 40.18 324.419 39.55C323.159 38.92 322.154 38.065 321.404 36.985C320.684 35.905 320.324 34.69 320.324 33.34C320.324 31.75 320.744 30.475 321.584 29.515C322.424 28.555 323.789 27.88 325.679 27.49C327.569 27.07 330.074 26.86 333.194 26.86H334.814V26.095C334.814 24.775 334.514 23.845 333.914 23.305C333.314 22.735 332.294 22.45 330.854 22.45C329.654 22.45 328.379 22.645 327.029 23.035C325.709 23.395 324.389 23.95 323.069 24.7L321.224 20.155C322.004 19.645 322.949 19.18 324.059 18.76C325.199 18.34 326.384 18.025 327.614 17.815C328.844 17.575 330.014 17.455 331.124 17.455C334.544 17.455 337.094 18.235 338.774 19.795C340.454 21.325 341.294 23.71 341.294 26.95V40H334.949V36.67C334.499 37.84 333.734 38.77 332.654 39.46C331.604 40.15 330.314 40.495 328.784 40.495ZM330.314 35.95C331.574 35.95 332.639 35.515 333.509 34.645C334.379 33.775 334.814 32.65 334.814 31.27V30.37H333.239C330.929 30.37 329.294 30.58 328.334 31C327.374 31.39 326.894 32.08 326.894 33.07C326.894 33.91 327.179 34.6 327.749 35.14C328.349 35.68 329.204 35.95 330.314 35.95Z'
          fill='#121F4C'
        />
      </svg>
    </div>
  );
};

const FullPageErrorFallback = ({ error }) => {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <div className='px-4 lg:py-12'>
        <div className='lg:gap-4 lg:flex'>
          <div className='flex flex-col items-center justify-center md:py-24 lg:py-32'>
            <h1 className='font-bold text-cuddle-purple-500 text-9xl'>Something went wrong</h1>
            <p className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
              <span className='text-red-500'>Oops!</span>
            </p>
            <p className='mb-8 text-center text-gray-500 md:text-lg'>Sorry an error occured, please go click on home.</p>
            <a href='#' onClick={url} className='px-6 py-2 text-sm font-semibold text-white bg-cuddle-purple-500'>
              Go home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const ErrorMessage = ({ errors = [], ...props }) => {
  console.log([typeof errors, errors]);
  return (
    <>
      {errors.length > 0 && (
        <div role='alert' className='font-GtWalsheimPro text-red-500' {...props}>
          <pre className=' whitespace-normal -mb-5 mt-4'>
            {typeof errors === "object" ? (
              errors.map((error) => (
                <li className='list-none' key={error}>
                  {error}
                </li>
              ))
            ) : (
              <li className='list-none' key={errors}>
                {errors}
              </li>
            )}
          </pre>
        </div>
      )}
    </>
  );
};

export { Spinner, FullPageSpinner, FullPageErrorFallback, ErrorMessage };