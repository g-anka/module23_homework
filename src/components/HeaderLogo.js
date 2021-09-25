import React from "react";
import "../styles/HeaderLogo.css";
import {Link} from "react-router-dom";

function HeaderLogo() {
    return (
        <Link className={ "header__logo" } to="/">
            <svg width="115" height="28" viewBox="0 0 115 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.992 22.24C6.44 22.24 5.12 22.016 4.032 21.568C2.944 21.12 2.12 20.528 1.56 19.792C1 19.056 0.704 18.256 0.672 17.392C0.672 17.248 0.72 17.128 0.816 17.032C0.928 16.936 1.056 16.888 1.2 16.888H4.392C4.584 16.888 4.736 16.92 4.848 16.984C4.976 17.048 5.112 17.16 5.256 17.32C5.464 17.704 5.784 18.024 6.216 18.28C6.664 18.52 7.256 18.64 7.992 18.64C8.856 18.64 9.52 18.512 9.984 18.256C10.448 17.984 10.68 17.616 10.68 17.152C10.68 16.816 10.56 16.544 10.32 16.336C10.08 16.112 9.696 15.92 9.168 15.76C8.64 15.584 7.88 15.392 6.888 15.184C4.952 14.8 3.504 14.216 2.544 13.432C1.584 12.648 1.104 11.528 1.104 10.072C1.104 9.08 1.376 8.2 1.92 7.432C2.48 6.648 3.264 6.04 4.272 5.608C5.296 5.176 6.48 4.96 7.824 4.96C9.232 4.96 10.448 5.208 11.472 5.704C12.512 6.184 13.304 6.792 13.848 7.528C14.408 8.248 14.704 8.96 14.736 9.664C14.736 9.808 14.688 9.936 14.592 10.048C14.496 10.144 14.376 10.192 14.232 10.192H10.872C10.52 10.192 10.248 10.048 10.056 9.76C9.96 9.424 9.712 9.144 9.312 8.92C8.912 8.68 8.416 8.56 7.824 8.56C7.152 8.56 6.632 8.68 6.264 8.92C5.896 9.16 5.712 9.512 5.712 9.976C5.712 10.44 5.952 10.808 6.432 11.08C6.912 11.336 7.808 11.6 9.12 11.872C10.624 12.144 11.816 12.488 12.696 12.904C13.592 13.304 14.248 13.832 14.664 14.488C15.096 15.128 15.312 15.944 15.312 16.936C15.312 18.024 15 18.968 14.376 19.768C13.752 20.568 12.888 21.184 11.784 21.616C10.68 22.032 9.416 22.24 7.992 22.24ZM17.9764 22C17.8004 22 17.6484 21.944 17.5204 21.832C17.4084 21.72 17.3524 21.576 17.3524 21.4V5.56C17.3524 5.384 17.4084 5.24 17.5204 5.128C17.6484 5.016 17.8004 4.96 17.9764 4.96H20.9044C21.0804 4.96 21.2244 5.016 21.3364 5.128C21.4484 5.24 21.5044 5.384 21.5044 5.56V13.576L24.6964 9.928C24.7284 9.896 24.7844 9.84 24.8644 9.76C24.9604 9.68 25.0564 9.624 25.1524 9.592C25.2484 9.544 25.3684 9.52 25.5124 9.52H28.8964C29.0404 9.52 29.1604 9.576 29.2564 9.688C29.3684 9.784 29.4244 9.912 29.4244 10.072C29.4244 10.216 29.3684 10.344 29.2564 10.456L25.0324 15.112L29.8564 21.088C29.9684 21.232 30.0244 21.352 30.0244 21.448C30.0244 21.608 29.9684 21.744 29.8564 21.856C29.7604 21.952 29.6324 22 29.4724 22H25.9924C25.7844 22 25.6244 21.968 25.5124 21.904C25.4164 21.84 25.2964 21.736 25.1524 21.592L21.5044 17.08V21.4C21.5044 21.56 21.4484 21.704 21.3364 21.832C21.2244 21.944 21.0804 22 20.9044 22H17.9764ZM32.1321 7.792C31.9561 7.792 31.8121 7.736 31.7001 7.624C31.5881 7.496 31.5321 7.344 31.5321 7.168V4.936C31.5321 4.76 31.5881 4.616 31.7001 4.504C31.8281 4.376 31.9721 4.312 32.1321 4.312H35.1321C35.3081 4.312 35.4521 4.376 35.5641 4.504C35.6921 4.616 35.7561 4.76 35.7561 4.936V7.168C35.7561 7.344 35.6921 7.496 35.5641 7.624C35.4521 7.736 35.3081 7.792 35.1321 7.792H32.1321ZM32.1321 22C31.9721 22 31.8281 21.944 31.7001 21.832C31.5881 21.704 31.5321 21.56 31.5321 21.4V10.12C31.5321 9.944 31.5881 9.8 31.7001 9.688C31.8281 9.576 31.9721 9.52 32.1321 9.52H35.1321C35.3081 9.52 35.4521 9.576 35.5641 9.688C35.6921 9.8 35.7561 9.944 35.7561 10.12V21.4C35.7561 21.576 35.6921 21.72 35.5641 21.832C35.4521 21.944 35.3081 22 35.1321 22H32.1321ZM39.117 22C38.941 22 38.789 21.944 38.661 21.832C38.549 21.72 38.493 21.576 38.493 21.4V5.56C38.493 5.384 38.549 5.24 38.661 5.128C38.789 5.016 38.941 4.96 39.117 4.96H42.117C42.293 4.96 42.437 5.016 42.549 5.128C42.661 5.24 42.717 5.384 42.717 5.56V21.4C42.717 21.56 42.661 21.704 42.549 21.832C42.437 21.944 42.293 22 42.117 22H39.117ZM46.0779 22C45.9019 22 45.7499 21.944 45.6219 21.832C45.5099 21.72 45.4539 21.576 45.4539 21.4V5.56C45.4539 5.384 45.5099 5.24 45.6219 5.128C45.7499 5.016 45.9019 4.96 46.0779 4.96H49.0779C49.2539 4.96 49.3979 5.016 49.5099 5.128C49.6219 5.24 49.6779 5.384 49.6779 5.56V21.4C49.6779 21.56 49.6219 21.704 49.5099 21.832C49.3979 21.944 49.2539 22 49.0779 22H46.0779ZM53.2789 22C53.1189 22 52.9749 21.944 52.8469 21.832C52.7349 21.704 52.6789 21.56 52.6789 21.4V5.824C52.6789 5.648 52.7349 5.504 52.8469 5.392C52.9589 5.264 53.1029 5.2 53.2789 5.2H59.5909C61.9589 5.2 63.7989 5.768 65.1109 6.904C66.4229 8.024 67.1109 9.64 67.1749 11.752C67.1909 12.216 67.1989 12.832 67.1989 13.6C67.1989 14.368 67.1909 14.976 67.1749 15.424C67.0149 19.808 64.5269 22 59.7109 22H53.2789ZM59.5909 18.4C60.5989 18.4 61.3429 18.16 61.8229 17.68C62.3029 17.2 62.5589 16.432 62.5909 15.376C62.6229 14.912 62.6389 14.312 62.6389 13.576C62.6389 12.84 62.6229 12.248 62.5909 11.8C62.5589 10.776 62.2789 10.024 61.7509 9.544C61.2389 9.048 60.4789 8.8 59.4709 8.8H57.1909V18.4H59.5909ZM70.2649 22C70.1049 22 69.9609 21.944 69.8329 21.832C69.7209 21.704 69.6649 21.56 69.6649 21.4V10.144C69.6649 9.968 69.7209 9.824 69.8329 9.712C69.9449 9.584 70.0889 9.52 70.2649 9.52H73.1929C73.3689 9.52 73.5129 9.584 73.6249 9.712C73.7529 9.824 73.8169 9.968 73.8169 10.144V11.056C74.2649 10.56 74.7849 10.184 75.3769 9.928C75.9849 9.656 76.6569 9.52 77.3929 9.52H78.4729C78.6489 9.52 78.7929 9.576 78.9049 9.688C79.0169 9.8 79.0729 9.944 79.0729 10.12V12.736C79.0729 12.896 79.0169 13.04 78.9049 13.168C78.7929 13.28 78.6489 13.336 78.4729 13.336H76.0489C75.4089 13.336 74.9129 13.512 74.5609 13.864C74.2249 14.216 74.0569 14.712 74.0569 15.352V21.4C74.0569 21.576 73.9929 21.72 73.8649 21.832C73.7529 21.944 73.6089 22 73.4329 22H70.2649ZM81.3274 7.792C81.1514 7.792 81.0074 7.736 80.8954 7.624C80.7834 7.496 80.7274 7.344 80.7274 7.168V4.936C80.7274 4.76 80.7834 4.616 80.8954 4.504C81.0234 4.376 81.1674 4.312 81.3274 4.312H84.3274C84.5034 4.312 84.6474 4.376 84.7594 4.504C84.8874 4.616 84.9514 4.76 84.9514 4.936V7.168C84.9514 7.344 84.8874 7.496 84.7594 7.624C84.6474 7.736 84.5034 7.792 84.3274 7.792H81.3274ZM81.3274 22C81.1674 22 81.0234 21.944 80.8954 21.832C80.7834 21.704 80.7274 21.56 80.7274 21.4V10.12C80.7274 9.944 80.7834 9.8 80.8954 9.688C81.0234 9.576 81.1674 9.52 81.3274 9.52H84.3274C84.5034 9.52 84.6474 9.576 84.7594 9.688C84.8874 9.8 84.9514 9.944 84.9514 10.12V21.4C84.9514 21.576 84.8874 21.72 84.7594 21.832C84.6474 21.944 84.5034 22 84.3274 22H81.3274ZM92.1523 22C91.9283 22 91.7523 21.952 91.6243 21.856C91.5123 21.744 91.4163 21.592 91.3363 21.4L86.7763 10.264C86.7603 10.216 86.7523 10.152 86.7523 10.072C86.7523 9.912 86.8003 9.784 86.8963 9.688C87.0083 9.576 87.1443 9.52 87.3043 9.52H90.1603C90.4963 9.52 90.7363 9.688 90.8803 10.024L93.4963 17.2L96.1363 10.024C96.1843 9.896 96.2643 9.784 96.3763 9.688C96.4883 9.576 96.6403 9.52 96.8323 9.52H99.7123C99.8563 9.52 99.9843 9.576 100.096 9.688C100.208 9.784 100.264 9.912 100.264 10.072L100.216 10.264L95.6803 21.4C95.6003 21.592 95.4963 21.744 95.3683 21.856C95.2403 21.952 95.0643 22 94.8403 22H92.1523ZM107.443 22.24C105.491 22.24 103.955 21.72 102.835 20.68C101.715 19.624 101.139 18.096 101.107 16.096V15.352C101.171 13.448 101.763 11.96 102.883 10.888C104.003 9.816 105.515 9.28 107.419 9.28C108.795 9.28 109.955 9.56 110.899 10.12C111.859 10.664 112.571 11.424 113.035 12.4C113.515 13.36 113.755 14.456 113.755 15.688V16.288C113.755 16.464 113.691 16.616 113.563 16.744C113.451 16.856 113.307 16.912 113.131 16.912H105.523V17.056C105.539 17.776 105.707 18.36 106.027 18.808C106.347 19.24 106.803 19.456 107.395 19.456C107.779 19.456 108.083 19.384 108.307 19.24C108.547 19.08 108.771 18.88 108.979 18.64C109.123 18.48 109.235 18.384 109.315 18.352C109.411 18.304 109.555 18.28 109.747 18.28H112.891C113.035 18.28 113.155 18.328 113.251 18.424C113.363 18.504 113.419 18.608 113.419 18.736C113.419 19.152 113.179 19.64 112.699 20.2C112.235 20.76 111.547 21.24 110.635 21.64C109.739 22.04 108.675 22.24 107.443 22.24ZM109.339 14.464V14.416C109.339 13.648 109.171 13.056 108.835 12.64C108.499 12.208 108.027 11.992 107.419 11.992C106.811 11.992 106.339 12.208 106.003 12.64C105.683 13.056 105.523 13.648 105.523 14.416V14.464H109.339Z" fill="#1B1B1B"/>
                <rect x="42" y="9" width="4" height="3" fill="#1B1B1B"/>
                <rect x="42" y="16" width="4" height="3" fill="#1B1B1B"/>
            </svg>
        </Link>
    )
}

export default HeaderLogo;