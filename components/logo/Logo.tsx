import Link from "next/link";

const Logo = ({size = 1}) => {
  return (
      <Link href={"/"} className="logo flex gap-1 mt-2" style={{ transform: `scale(${size})` }}>
          <div className="flex flex-col justify-between">
              <div className="flex justify-between">
                  <svg
                      width="31"
                      height="32"
                      viewBox="0 0 31 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                          d="M29.2515 0.220001L19.6374 19.168H30.7056V31.448H0.561578L10.0995 12.436H0.185028V0.220001H29.2515Z"
                          fill="currentColor"
                      />
                  </svg>

                  <svg
                      width="33"
                      height="34"
                      viewBox="0 0 33 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                      <path
                          d="M32.7047 18.728H7.31562C7.06151 17.9281 6.92654 17.0951 6.91503 16.256C6.91225 15.2071 7.09953 14.1663 7.46784 13.184H21.0356C20.619 10.8693 19.3131 9.71067 17.1179 9.708C16.4139 9.69948 15.7187 9.86526 15.0944 10.1905C14.4702 10.5158 13.9364 10.9904 13.5407 11.572C12.6194 12.8147 12.16 14.4067 12.1627 16.348C12.1627 18.376 12.6033 20.012 13.4926 21.268C13.8689 21.8507 14.3871 22.3285 14.9988 22.6566C15.6104 22.9847 16.2955 23.1524 16.9897 23.144C18.1648 23.144 19.2944 22.56 20.3787 21.392L27.0604 29.392C24.128 31.775 20.4621 33.0748 16.6813 33.072C12.0372 33.072 8.13815 31.5173 4.98421 28.408C1.83027 25.2987 0.25464 21.4467 0.257311 16.852C0.212465 14.6939 0.614104 12.5498 1.4371 10.5538C2.2601 8.55786 3.48674 6.75294 5.04029 5.252C8.22895 2.1 12.1453 0.524002 16.7894 0.524002C21.3294 0.524002 25.1403 2.064 28.2221 5.144C31.304 8.224 32.8462 12.0187 32.8489 16.528C32.8369 17 32.7928 17.728 32.7047 18.728Z"
                          fill="currentColor"
                      />
                  </svg>
              </div>

              <svg width="68" height="11.100006" viewBox="0 0 64.5222 11.1" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                  <defs/>
                  <path id="Vector"
                        d="M1.22 0.51L1.22 10.59L0 10.59L0 0.51L1.22 0.51ZM0.68 10.59L0.68 9.37L3.03 9.37C3.56 9.37 4.09 9.28 4.59 9.1C5.03 8.93 5.44 8.67 5.79 8.34C6.13 8 6.4 7.59 6.56 7.14C6.93 6.12 6.93 4.99 6.56 3.97C6.39 3.52 6.13 3.11 5.79 2.77C5.45 2.43 5.04 2.17 4.59 2.01C4.09 1.83 3.56 1.73 3.03 1.74L0.67 1.74L0.67 0.52L3.02 0.52C3.93 0.5 4.83 0.71 5.63 1.15C6.38 1.56 7 2.17 7.42 2.91C7.85 3.73 8.07 4.63 8.07 5.55C8.07 6.47 7.85 7.38 7.42 8.2C7 8.94 6.38 9.55 5.63 9.96C4.83 10.39 3.93 10.61 3.02 10.59L0.68 10.59Z"
                        fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"/>
                  <path id="Vector"
                        d="M14.08 0.51L14.08 10.59L12.84 10.59L12.84 0.51L14.08 0.51ZM13.53 0.51L18.63 0.51L18.63 1.66L13.53 1.66L13.53 0.51ZM13.53 4.54L18.34 4.54L18.34 5.7L13.53 5.7L13.53 4.54ZM13.53 9.44L18.63 9.44L18.63 10.59L13.53 10.59L13.53 9.44Z"
                        fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"/>
                  <path id="Vector"
                        d="M24.95 8.61C25.19 8.9 25.48 9.14 25.81 9.33C26.14 9.5 26.51 9.59 26.89 9.58C27.36 9.61 27.83 9.45 28.19 9.14C28.35 8.99 28.47 8.82 28.56 8.62C28.64 8.42 28.68 8.21 28.68 8C28.7 7.61 28.59 7.23 28.36 6.92C28.14 6.64 27.85 6.42 27.53 6.26C27.18 6.09 26.83 5.94 26.46 5.81C26.21 5.73 25.93 5.61 25.62 5.48C25.31 5.33 25.02 5.15 24.75 4.94C24.47 4.72 24.23 4.45 24.06 4.14C23.87 3.78 23.78 3.38 23.79 2.97C23.79 2.5 23.92 2.03 24.17 1.63C24.43 1.23 24.78 0.91 25.21 0.7C25.68 0.47 26.2 0.35 26.72 0.36C27.22 0.35 27.71 0.46 28.16 0.68C28.55 0.87 28.91 1.14 29.2 1.48C29.48 1.78 29.71 2.12 29.88 2.49L28.83 3.1C28.7 2.83 28.54 2.59 28.35 2.36C28.16 2.12 27.92 1.92 27.65 1.77C27.34 1.61 27 1.53 26.65 1.54C26.43 1.52 26.21 1.55 26.01 1.62C25.8 1.68 25.61 1.79 25.45 1.94C25.21 2.17 25.08 2.49 25.08 2.82C25.06 3.09 25.13 3.36 25.26 3.6C25.45 3.87 25.69 4.1 25.98 4.26C26.43 4.51 26.9 4.71 27.38 4.87C27.67 4.98 27.95 5.1 28.23 5.24C28.53 5.4 28.81 5.6 29.06 5.83C29.32 6.07 29.53 6.36 29.69 6.68C29.86 7.05 29.94 7.46 29.93 7.88C29.94 8.29 29.85 8.7 29.68 9.08C29.52 9.42 29.28 9.73 28.99 9.98C28.69 10.23 28.35 10.43 27.99 10.56C27.56 10.71 27.1 10.78 26.63 10.75C26.17 10.73 25.72 10.61 25.31 10.41C24.85 10.17 24.43 9.86 24.08 9.47C23.75 9.09 23.47 8.66 23.26 8.2L24.24 7.54C24.44 7.92 24.68 8.27 24.95 8.61Z"
                        fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"/>
                  <path id="Vector" d="M36.03 0.51L36.03 10.59L34.81 10.59L34.81 0.51L36.03 0.51Z" fill="currentColor"
                        fill-opacity="1.000000" fill-rule="nonzero"/>
                  <path id="Vector"
                        d="M46.09 5.48L50.78 5.48C50.78 6.16 50.68 6.83 50.46 7.48C50.26 8.09 49.94 8.66 49.52 9.16C49.11 9.65 48.59 10.04 48 10.32C47.36 10.61 46.65 10.75 45.95 10.74C45.25 10.75 44.56 10.62 43.92 10.36C43.3 10.11 42.75 9.74 42.28 9.27C41.82 8.81 41.45 8.25 41.21 7.63C40.7 6.3 40.7 4.82 41.21 3.48C41.45 2.87 41.82 2.31 42.28 1.84C42.75 1.37 43.3 1 43.92 0.76C44.56 0.49 45.25 0.35 45.95 0.36C46.53 0.35 47.11 0.43 47.67 0.6C48.18 0.76 48.66 1 49.08 1.32C49.51 1.65 49.87 2.06 50.14 2.52L49.28 3.32C48.96 2.79 48.51 2.35 47.95 2.06C47.33 1.75 46.65 1.59 45.95 1.61C45.28 1.6 44.62 1.77 44.04 2.1C43.45 2.44 42.97 2.92 42.64 3.5C42.3 4.14 42.13 4.85 42.13 5.57C42.13 6.28 42.3 6.99 42.64 7.63C42.97 8.21 43.45 8.7 44.03 9.03C44.62 9.37 45.28 9.54 45.95 9.53C46.41 9.53 46.87 9.46 47.3 9.31C47.68 9.17 48.03 8.95 48.33 8.68C48.62 8.41 48.86 8.1 49.04 7.76C49.23 7.41 49.36 7.03 49.44 6.65L46.09 6.65L46.09 5.48Z"
                        fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"/>
                  <path id="Vector"
                        d="M64.52 0.51L64.52 11.1L56.87 3.1L56.87 10.6L55.64 10.6L55.64 0L63.29 8L63.29 0.51L64.52 0.51Z"
                        fill="currentColor" fill-opacity="1.000000" fill-rule="nonzero"/>
              </svg>
          </div>
          <svg
              width="18"
              height="53"
              viewBox="0 0 18 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
          >
              <path
                  d="M17.7368 0.908002V13.436C17.0657 13.0199 16.2988 12.783 15.5096 12.748C13.3731 12.748 12.3049 14.376 12.3049 17.632V52.464H0.571777V15.4C0.571777 10.888 1.80558 7.288 4.27318 4.6C6.74079 1.912 10.0336 0.570667 14.1516 0.576001C15.3533 0.597923 16.5516 0.708895 17.7368 0.908002Z"
                  fill="currentColor"
              />
          </svg>
          <div
              className="circle w-8 h-8 bg-foreground -translate-y-2.5 rounded-full transition-all duration-300"></div>
      </Link>
  );
};

export default Logo;
