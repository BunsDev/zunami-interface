import './AllServicesPanel.scss';

interface AllServicesPanelProps {}

export const AllServicesPanel = (props: AllServicesPanelProps): JSX.Element => {
    return (
        <div id="all-services" className="all-services-panel">
            <div className="row">
                <div className="col">
                    <div className="title mt-4 mb-4">Zunami Protocol Menu</div>
                    <div className="d-flex gap-4 flex-wrap fast-menu">
                        <a href="/deposit">
                            <span>Deposit & Withdraw</span>
                            <img src="/fast-menu-1.png" alt="" />
                        </a>
                        <a href="/uzd" target="_blank" rel="noreferrer">
                            <span>UZD</span>
                            <img src="/fast-menu-2.png" alt="" />
                        </a>
                        <a href="https://snapshot.org/#/zunamidao.eth">
                            <span>DAO</span>
                            <img src="/fast-menu-3.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <div className="title">About Zunami Protocol</div>
                    <p className="mt-3 about">
                        Zunami is the DAO that works with stablecoins and solves the main issues of
                        current yield-farming protocols by streamlining interaction with DeFi,
                        making it easier and cheaper while increasing profitability by
                        differentiating and rebalancing users’ funds.
                    </p>
                    <div className="title mb-4">Audited by</div>
                    <div className="d-flex gap-4 audits">
                        <a
                            href="https://ackeeblockchain.com/blog/ackee-blockchain-audited-zunami-protocol/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <svg
                                width="197"
                                height="27"
                                viewBox="0 0 197 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 26.8472H85.9111V0H0V26.8472Z"
                                    fill="#0035F1"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M46.0691 21.2198L42.021 16.3358H40.4253V21.2198H37.7226V3.46332H40.4253V13.4163H42.021L46.0657 8.53234H49.5807L44.3269 14.876L49.5845 21.2198H46.0691ZM14.0249 10.7408C12.9307 10.7442 11.8826 11.1815 11.1104 11.9567C10.3382 12.732 9.90503 13.7818 9.90591 14.876C9.90503 15.9702 10.3382 17.0201 11.1104 17.7953C11.8826 18.5705 12.9307 19.0078 14.0249 19.0114C15.119 19.0078 16.167 18.5705 16.9392 17.7952C17.7112 17.02 18.1443 15.9702 18.1433 14.876C18.1443 13.7819 17.7112 12.732 16.9392 11.9568C16.167 11.1816 15.119 10.7443 14.0249 10.7408ZM14.0249 21.7249C12.2126 21.7192 10.4768 20.9949 9.19784 19.7109C7.91901 18.427 7.20163 16.6882 7.20313 14.876C7.20163 13.0639 7.91901 11.325 9.19784 10.0411C10.4768 8.7572 12.2126 8.03293 14.0249 8.02724C15.4578 8.0254 16.8542 8.47968 18.0118 9.32429L18.1433 9.41982V8.53234H20.8461V21.2198H18.1433V20.3322L18.0118 20.4272C16.8545 21.2725 15.458 21.7271 14.0249 21.7249ZM29.9766 21.7249C28.1646 21.719 26.4287 20.9947 25.1499 19.7108C23.8712 18.4268 23.1538 16.6882 23.1554 14.876C23.1538 13.064 23.8712 11.3252 25.1499 10.0413C26.4287 8.75737 28.1646 8.03303 29.9766 8.02724C31.1033 8.02628 32.2125 8.30556 33.2044 8.83994C34.1964 9.37438 35.0398 10.1471 35.6587 11.0885L33.2067 12.312C32.824 11.8209 32.3339 11.4241 31.774 11.1517C31.214 10.8793 30.5992 10.7388 29.9766 10.7408C28.8824 10.7443 27.8344 11.1816 27.0622 11.9568C26.2901 12.732 25.8569 13.7819 25.8576 14.876C25.8569 15.9702 26.2901 17.02 27.0622 17.7952C27.8344 18.5704 28.8824 19.0078 29.9766 19.0114C30.5993 19.0135 31.2141 18.8729 31.774 18.6005C32.334 18.3282 32.8241 17.9312 33.2067 17.44L35.6587 18.6636C35.0398 19.605 34.1964 20.3777 33.2044 20.9121C32.2125 21.4465 31.1033 21.7258 29.9766 21.7249ZM56.7963 10.7408C55.9791 10.7371 55.182 10.9938 54.5205 11.4737C53.859 11.9535 53.3676 12.6315 53.1174 13.4095L53.0805 13.5191H60.512L60.4747 13.4095C60.2246 12.6315 59.7332 11.9535 59.0718 11.4736C58.4105 10.9938 57.6134 10.7371 56.7963 10.7408ZM57.001 21.7249C55.1888 21.7192 53.4529 20.9949 52.174 19.7109C50.8952 18.427 50.1778 16.6882 50.1793 14.876C50.1793 11.0359 53.0858 8.02724 56.7963 8.02724C60.5067 8.02724 63.4128 11.0359 63.4128 14.876V16.2325H53.1082L53.1508 16.345C53.449 17.1258 53.9762 17.7982 54.6633 18.274C55.3504 18.7498 56.1653 19.0068 57.001 19.0114C57.5508 19.0142 58.0955 18.9052 58.6019 18.6912C59.1084 18.4773 59.5662 18.1626 59.9473 17.7663L62.3726 19.098C61.7385 19.9183 60.9243 20.5819 59.9929 21.0374C59.0615 21.4929 58.0378 21.7282 57.001 21.7249ZM72.0935 10.7408C71.2764 10.7371 70.4794 10.9938 69.8179 11.4737C69.1564 11.9535 68.6649 12.6315 68.4147 13.4095L68.3778 13.5191H75.8089L75.772 13.4095C75.5219 12.6315 75.0305 11.9535 74.3691 11.4737C73.7077 10.9939 72.9107 10.7372 72.0935 10.7408ZM72.2983 21.7249C70.4861 21.7192 68.7502 20.9949 67.4714 19.7109C66.1925 18.427 65.4751 16.6882 65.4766 14.876C65.4766 11.0359 68.3831 8.02725 72.0935 8.02725C75.8035 8.02725 78.7101 11.0359 78.7101 14.876V16.2325H68.4054L68.4482 16.3451C68.7462 17.1259 69.2734 17.7984 69.9605 18.2742C70.6476 18.75 71.4625 19.007 72.2983 19.0114C72.8481 19.0141 73.3928 18.9051 73.8992 18.6912C74.4057 18.4772 74.8634 18.1625 75.2447 17.7664L77.67 19.098C77.0358 19.9183 76.2216 20.5819 75.2902 21.0374C74.3588 21.4928 73.3352 21.728 72.2983 21.7249Z"
                                    fill="white"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M160.492 10.4662C159.486 10.4584 158.499 10.7251 157.647 11.235V6.97622H155.381V20.6015H157.647V15.3387C157.632 14.9793 157.695 14.6208 157.833 14.2862C157.971 13.9515 158.181 13.648 158.449 13.3951C158.716 13.1422 159.036 12.9454 159.388 12.8172C159.74 12.689 160.115 12.6324 160.492 12.6508C160.867 12.6324 161.244 12.6891 161.596 12.8176C161.948 12.9459 162.268 13.1431 162.536 13.3964C162.803 13.6497 163.013 13.9536 163.151 14.2887C163.288 14.6237 163.352 14.9825 163.336 15.3423V20.6015H165.602V15.3423C165.615 14.6834 165.487 14.0289 165.226 13.4189C164.965 12.8089 164.576 12.2562 164.084 11.7949C163.111 10.9247 161.823 10.4485 160.492 10.4662ZM148.976 12.5443C149.475 12.543 149.966 12.6511 150.413 12.8602C150.861 13.0693 151.252 13.3738 151.557 13.7502L153.514 12.8112C153.021 12.0901 152.349 11.4977 151.557 11.0878C150.764 10.6779 149.877 10.4633 148.976 10.4635C147.526 10.4712 146.137 11.0286 145.116 12.0133C144.094 12.998 143.523 14.3297 143.529 15.7161C143.523 17.1026 144.094 18.4344 145.116 19.4192C146.137 20.404 147.526 20.9614 148.976 20.9691C149.877 20.9692 150.764 20.7546 151.557 20.3446C152.349 19.9346 153.021 19.3422 153.514 18.621L151.557 17.6829C151.251 18.0591 150.861 18.3634 150.413 18.5723C149.966 18.7812 149.475 18.8892 148.976 18.888C148.1 18.8832 147.262 18.5467 146.646 17.9521C146.028 17.3574 145.683 16.5533 145.687 15.7162C145.684 14.879 146.028 14.0749 146.646 13.4803C147.262 12.8858 148.101 12.5492 148.976 12.5443ZM143.456 10.8701H140.649L137.418 14.6163H136.143V6.97622H133.985V20.6015H136.143V16.8553H137.418L140.651 20.6015H143.459L139.259 15.736L143.456 10.8701ZM195.481 11.7803C194.508 10.91 193.221 10.4337 191.888 10.4515C190.883 10.4435 189.895 10.7103 189.044 11.2205V10.8342H186.778V20.5861H189.044V15.3242C189.029 14.9647 189.092 14.6062 189.23 14.2715C189.368 13.9369 189.578 13.6333 189.846 13.3804C190.113 13.1274 190.433 12.9305 190.785 12.8023C191.136 12.6741 191.513 12.6174 191.888 12.6358C192.265 12.6174 192.64 12.6742 192.992 12.8027C193.344 12.931 193.665 13.1282 193.933 13.3815C194.2 13.6348 194.409 13.9387 194.547 14.2737C194.685 14.6088 194.748 14.9676 194.733 15.3272V20.5861H196.999V15.3272C197.012 14.6684 196.883 14.014 196.622 13.4041C196.361 12.7942 195.973 12.2416 195.481 11.7803ZM172.874 18.8977C171.997 18.8929 171.159 18.5562 170.543 17.9616C169.926 17.367 169.582 16.5629 169.584 15.7258C169.582 14.8888 169.926 14.0847 170.543 13.4902C171.159 12.8957 171.997 12.5592 172.874 12.5544C173.749 12.5591 174.588 12.8956 175.204 13.4901C175.822 14.0847 176.166 14.8887 176.163 15.7258C176.166 16.563 175.822 17.3671 175.204 17.9618C174.588 18.5564 173.749 18.8929 172.874 18.8977ZM176.163 11.5417L176.058 11.4683C175.135 10.8206 174.019 10.4719 172.874 10.4732C171.423 10.481 170.034 11.0385 169.013 12.0232C167.992 13.0079 167.421 14.3394 167.426 15.7258C167.421 17.1122 167.992 18.444 169.013 19.4287C170.034 20.4135 171.423 20.971 172.874 20.9789C174.019 20.9802 175.135 20.6315 176.058 19.9837L176.163 19.9104V20.5913H178.321V10.8608H176.163V11.5417ZM181.403 20.5861H183.581V10.8457H181.403V20.5861ZM182.493 7.07739C182.158 7.07889 181.838 7.20734 181.602 7.43448C181.367 7.66162 181.235 7.96885 181.237 8.28858C181.236 8.44688 181.268 8.60377 181.331 8.75033C181.393 8.89681 181.486 9.03007 181.602 9.1425C181.719 9.255 181.857 9.34431 182.01 9.4056C182.163 9.4668 182.327 9.49867 182.493 9.49937C182.827 9.49788 183.148 9.36953 183.383 9.14241C183.619 8.91538 183.75 8.60826 183.748 8.28858C183.75 7.96887 183.619 7.66169 183.383 7.43456C183.148 7.20744 182.827 7.07897 182.493 7.07739ZM105.688 20.6015H107.866V6.97622H105.688V20.6015ZM127.514 12.5443C128.011 12.5429 128.503 12.6509 128.951 12.86C129.398 13.0691 129.789 13.3737 130.093 13.7502L132.052 12.8112C131.559 12.0901 130.887 11.4978 130.094 11.0879C129.302 10.678 128.415 10.4634 127.514 10.4635C126.062 10.4713 124.674 11.0287 123.653 12.0134C122.632 12.9981 122.061 14.3297 122.065 15.7161C122.061 17.1026 122.632 18.4343 123.653 19.4191C124.674 20.4039 126.062 20.9614 127.514 20.9691C128.415 20.9692 129.302 20.7545 130.094 20.3445C130.887 19.9345 131.559 19.3421 132.052 18.621L130.093 17.6829C129.789 18.0591 129.397 18.3634 128.95 18.5723C128.502 18.7812 128.011 18.8892 127.514 18.888C126.637 18.8832 125.8 18.5467 125.182 17.952C124.566 17.3574 124.221 16.5533 124.224 15.7162C124.221 14.879 124.566 14.075 125.182 13.4804C125.8 12.8858 126.637 12.5492 127.514 12.5443ZM98.2633 18.8004C97.414 18.7958 96.6015 18.4695 96.0035 17.8931C95.4055 17.3168 95.0719 16.5373 95.0745 15.7258C95.0719 14.9144 95.4055 14.1351 96.0035 13.5588C96.6015 12.9825 97.414 12.6563 98.2633 12.6517C99.1117 12.6562 99.9251 12.9823 100.522 13.5586C101.12 14.135 101.455 14.9143 101.452 15.7258C101.455 16.5373 101.12 17.3169 100.523 17.8932C99.9251 18.4697 99.1117 18.7959 98.2633 18.8004ZM98.2633 10.467C97.1163 10.4666 95.9991 10.8155 95.0745 11.4631V6.9762H92.8086V20.6019H95.0745V19.9891C95.9991 20.6366 97.1163 20.9855 98.2633 20.9851C99.7159 20.9773 101.105 20.4192 102.128 19.4332C103.151 18.4473 103.722 17.114 103.718 15.7258C103.722 14.3378 103.151 13.0045 102.128 12.0186C101.105 11.0328 99.7159 10.4747 98.2633 10.467ZM115.164 18.8004C114.315 18.7958 113.502 18.4695 112.905 17.8931C112.307 17.3168 111.973 16.5373 111.976 15.7258C111.973 14.9144 112.307 14.1351 112.905 13.5588C113.502 12.9825 114.315 12.6563 115.164 12.6517C116.013 12.6562 116.826 12.9823 117.424 13.5586C118.022 14.135 118.356 14.9143 118.353 15.7258C118.356 16.5373 118.022 17.3169 117.424 17.8932C116.826 18.4697 116.013 18.7959 115.164 18.8004ZM115.164 10.467C113.712 10.4748 112.322 11.0329 111.299 12.0188C110.277 13.0047 109.705 14.3378 109.71 15.7258C109.705 17.1139 110.277 18.4472 111.299 19.4332C112.322 20.4191 113.712 20.9772 115.164 20.9851C116.617 20.9773 118.007 20.4193 119.03 19.4333C120.052 18.4474 120.624 17.114 120.619 15.7259C120.624 14.3378 120.052 13.0046 119.03 12.0187C118.007 11.0328 116.617 10.4747 115.164 10.467Z"
                                    fill="black"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://hashex.org/audits/zunami-protocol/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <svg
                                width="123"
                                height="20"
                                viewBox="0 0 123 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M25.7626 9.07114H36.4708V2.17954H39.5196V19.0441H36.4708V12.1525H25.7626V19.0441H22.7139V2.17863H25.7626V9.07114ZM55.7746 14.834C55.7746 15.2573 55.7004 15.7158 55.5521 16.2097C55.3981 16.7064 55.1513 17.1695 54.8249 17.5744C54.4966 17.9895 54.0625 18.3386 53.5226 18.6208C52.9917 18.903 52.3423 19.0441 51.5763 19.0441H46.0757C45.6533 19.0441 45.1966 18.9699 44.7037 18.8207C44.2101 18.6671 43.749 18.424 43.3435 18.1035C42.9107 17.7434 42.5556 17.2991 42.2998 16.7975C42.0176 16.2567 41.8774 15.6019 41.8774 14.834C41.8774 14.4099 41.9516 13.9513 42.0999 13.4575C42.2496 12.9616 42.4924 12.4987 42.8153 12.0937C43.1712 11.6543 43.6147 11.294 44.1176 11.0355C44.6567 10.7524 45.3096 10.6114 46.0757 10.6114H51.5763V13.5281H46.0757C45.6615 13.5281 45.3404 13.6574 45.1143 13.917C44.8873 14.1675 44.7742 14.4804 44.7742 14.8576C44.7742 15.2573 44.9027 15.5711 45.1613 15.7981C45.4263 16.0179 45.7401 16.1274 46.0992 16.1274H51.5763C51.9905 16.1274 52.3107 16.0016 52.5377 15.7511C52.7638 15.4997 52.8778 15.1868 52.8778 14.8105V10.5417C52.8778 10.1411 52.7529 9.82361 52.5024 9.58847C52.26 9.35332 51.9507 9.23575 51.5763 9.23575H44.8792V6.33078H51.5763C51.9987 6.33078 52.4518 6.40494 52.9365 6.55417C53.4334 6.70546 53.8956 6.95316 54.2968 7.28312C54.7191 7.61233 55.0709 8.04735 55.3522 8.58909C55.6344 9.12179 55.7746 9.77297 55.7746 10.5408V14.834ZM70.634 14.7517C70.6404 15.2333 70.5733 15.713 70.4351 16.1744C70.3021 16.5904 70.1258 16.9585 69.9069 17.2796C69.6944 17.5866 69.4375 17.8603 69.1445 18.0917C68.8551 18.3106 68.5503 18.4915 68.2301 18.6326C67.9172 18.7737 67.597 18.8795 67.2678 18.95C66.9477 19.0133 66.6429 19.0441 66.3535 19.0441H58.0962V15.9863H66.33C66.7442 15.9863 67.0571 15.8804 67.2678 15.6688C67.4795 15.4572 67.5844 15.1515 67.5844 14.7517C67.5455 13.936 67.1349 13.5281 66.3535 13.5281H61.6261C60.9532 13.5281 60.3826 13.4105 59.9141 13.1754C59.4746 12.9632 59.0834 12.663 58.7646 12.2936C58.4752 11.9408 58.2644 11.561 58.1315 11.1522C58.0125 10.7835 57.9491 10.3991 57.9434 10.0117C57.9434 9.32981 58.0646 8.75731 58.3069 8.29426C58.7331 7.43711 59.4986 6.79754 60.4178 6.53066C60.8483 6.3968 61.2508 6.33078 61.6261 6.33078H69.1201V9.38769H61.6496C61.4932 9.38769 61.3684 9.40759 61.2743 9.44738C61.1955 9.47377 61.1263 9.52285 61.0753 9.58847C61.0359 9.64401 61.0116 9.70883 61.0048 9.77658C60.997 9.83899 60.9931 9.90181 60.993 9.9647C60.995 10.0666 61.0191 10.1669 61.0636 10.2586C61.0952 10.3218 61.1438 10.375 61.2038 10.4124C61.2671 10.4431 61.3331 10.463 61.4027 10.4703H66.3526C67.134 10.4703 67.7996 10.6114 68.3459 10.8935C68.894 11.1757 69.3353 11.5329 69.6718 11.9644C70.0073 12.3876 70.2506 12.8507 70.3989 13.3517C70.5554 13.8537 70.634 14.3194 70.634 14.7517ZM86.8772 19.0441H83.8285V10.6114C83.8285 10.2116 83.7263 9.90953 83.5228 9.70604C83.3202 9.49441 83.0145 9.38859 82.6084 9.38859H77.1078V6.33078H82.6084C82.8978 6.33078 83.2026 6.36605 83.5228 6.4366C83.8439 6.49991 84.1604 6.6012 84.4724 6.74229C84.7935 6.88338 85.0983 7.06788 85.3877 7.29488C85.6771 7.51465 85.9312 7.78507 86.1501 8.10614C86.369 8.41997 86.5453 8.78445 86.6783 9.20047C86.8112 9.6165 86.8772 10.0868 86.8772 10.6114V19.0441ZM75.8769 19.0441H72.8272V0.955872H75.876L75.8769 19.0441ZM103.836 12.1525H94.2075V9.07114H103.836V12.1525ZM105.208 19.0441H94.2075C93.7379 19.0367 93.2718 18.9614 92.8237 18.8207C92.3163 18.6683 91.8425 18.4209 91.4273 18.0917C90.9869 17.7238 90.6241 17.2719 90.3601 16.7622C90.0798 16.2133 89.9387 15.5431 89.9387 14.7517V3.71975C89.9387 3.50812 89.9776 3.30824 90.0562 3.12013C90.1308 2.93762 90.2381 2.77027 90.3728 2.62632C90.513 2.48523 90.6776 2.37489 90.8648 2.29621C91.052 2.21843 91.2555 2.17863 91.4744 2.17863H105.208V5.23644H92.9874V14.7508C92.9874 15.1515 93.0933 15.4563 93.304 15.6688C93.5156 15.8804 93.824 15.9863 94.231 15.9863H105.208V19.0441ZM122.308 6.33078L116.83 12.3288L122.999 19.0441H118.801L114.743 14.6107L110.685 19.0441H106.475L112.632 12.3053L107.179 6.33078H111.353L114.72 10.0117L118.109 6.33078H122.308Z"
                                    fill="black"
                                />
                                <path
                                    d="M2.12084 6.05585H4.83588L5.77014 1.94983H8.8388L7.9163 6.05585H11.0727L11.9952 1.94983H15.0756L14.1414 6.05585H17.0454L16.3888 8.95448H13.4974L12.8282 11.9897H15.6192L14.9752 14.8883H12.1842L11.2509 19.0441H8.16954L9.10379 14.8883H5.9474L5.01224 19.0441H1.94448L2.86698 14.8883H0L0.694587 11.9897H3.50911L4.19104 8.95448H1.42716L2.12084 6.05585ZM6.59134 11.9897H9.74773L10.417 8.95448H7.2606L6.59134 11.9897Z"
                                    fill="#C2F051"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="title mt-4 mb-2">Zunami Listing</div>
                    <div className="official-links d-flex gap-3">
                        <a
                            href="https://www.coingecko.com/en/coins/zunami-usd"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>CoinGecko</span>
                        </a>
                        <a
                            href="https://defillama.com/protocol/zunami-protocol"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>DefiLlama</span>
                        </a>
                        <a
                            href="https://www.dapp.com/app/zunami-protocol"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>Dapp.com</span>
                        </a>
                        <a
                            href="https://dappradar.com/ethereum/defi/zunami-protocol"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span>DappRadar</span>
                        </a>
                    </div>
                    <div className="title mt-4 mb-2">Official website</div>
                    <div className="official-links d-flex gap-3">
                        <a href="https://zunami.io" rel="noreferrer">
                            <svg
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.01865 4.86032C6.86573 5.0221 6.73323 5.18918 6.57385 5.32465C6.32995 5.53198 5.97352 5.5052 5.73265 5.27919C5.55674 5.11413 5.35814 4.99427 5.1216 4.94147C4.6531 4.8369 4.24136 4.94691 3.89982 5.28424C3.34783 5.82943 2.80179 6.38065 2.25322 6.92931C2.06362 7.11894 1.87197 7.30656 1.68478 7.49854C1.33404 7.85825 1.21157 8.28661 1.34922 8.76938C1.4871 9.25295 1.81699 9.55726 2.30776 9.66661C2.7509 9.76535 3.14367 9.64587 3.47289 9.33429C3.66758 9.15003 3.8533 8.9563 4.04294 8.76671C4.33624 8.47348 4.62971 8.18041 4.92224 7.88639C4.94732 7.86118 4.96583 7.82943 4.99024 7.79693C5.52859 8.00281 6.07007 8.05604 6.64774 7.98198C6.61267 8.02364 6.59475 8.04841 6.57342 8.06976C5.85056 8.79302 5.12964 9.51823 4.40351 10.2382C3.85273 10.7843 3.18316 11.0308 2.41058 10.9919C1.25176 10.9336 0.234002 10.0259 0.0425677 8.88033C-0.102703 8.01099 0.122559 7.24634 0.738194 6.61578C1.48744 5.84837 2.2478 5.09155 3.01399 4.34101C3.59519 3.77167 4.30381 3.53435 5.11139 3.62978C5.91705 3.72498 6.55146 4.10927 6.98711 4.80342C6.99661 4.81855 7.00592 4.83382 7.01462 4.84942C7.01801 4.8555 7.01946 4.86265 7.01865 4.86032Z"
                                    fill="#C2C2C2"
                                />
                                <path
                                    d="M6.00329 3.19533C5.46159 2.9908 4.92395 2.93397 4.34585 3.01218C4.38557 2.96836 4.4074 2.94212 4.43142 2.91808C5.14163 2.20754 5.85352 1.49866 6.5619 0.786285C6.97108 0.374794 7.4588 0.117483 8.03153 0.0297428C9.30259 -0.164979 10.5341 0.613947 10.8856 1.85221C11.1524 2.79229 10.9551 3.6458 10.2805 4.35313C9.54042 5.12904 8.77245 5.87858 8.0089 6.63177C7.4367 7.19621 6.74172 7.44816 5.94027 7.36869C5.11157 7.28652 4.46004 6.90047 4.0114 6.18966C3.99997 6.17155 3.98927 6.15293 3.9793 6.13398C3.9762 6.12808 3.97664 6.12031 3.97656 6.11985C4.12107 5.97116 4.25441 5.81562 4.40663 5.68151C4.65094 5.46626 5.01705 5.4835 5.26596 5.7142C5.41531 5.85263 5.57897 5.96496 5.77388 6.0233C6.26575 6.17054 6.71414 6.0855 7.08282 5.72315C7.83499 4.98391 8.5799 4.23719 9.3206 3.48645C9.6698 3.13253 9.78169 2.70047 9.64198 2.22243C9.50087 1.73962 9.1709 1.43566 8.6793 1.32977C8.23169 1.23336 7.83474 1.35581 7.50842 1.67675C7.02924 2.14804 6.55661 2.62601 6.08172 3.10166C6.05407 3.12935 6.03116 3.16178 6.00329 3.19533Z"
                                    fill="#C2C2C2"
                                />
                            </svg>
                            <span>zunami.io</span>
                        </a>
                    </div>
                </div>
                <div className="col">
                    <div className="title mb-4">Zunami Media</div>
                    <div className="media-links d-flex gap-3 flex-wrap">
                        <a
                            href="https://zunamilab.gitbook.io/product-docs/"
                            rel="noreferrer"
                            target="blank"
                        >
                            <svg
                                width="38"
                                height="28"
                                viewBox="0 0 38 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17.1043 23.3358C17.6979 23.3358 18.2322 23.8204 18.2322 24.4867C18.2322 25.0925 17.7573 25.6376 17.1043 25.6376C16.5107 25.6376 15.9764 25.1531 15.9764 24.4867C15.9764 23.8204 16.5107 23.3358 17.1043 23.3358ZM34.557 16.3093C33.9633 16.3093 33.4291 15.8247 33.4291 15.1584C33.4291 14.5527 33.904 14.0075 34.557 14.0075C35.1506 14.0075 35.6848 14.4921 35.6848 15.1584C35.6848 15.7642 35.1506 16.3093 34.557 16.3093ZM34.557 11.6452C32.6573 11.6452 31.1139 13.2201 31.1139 15.1584C31.1139 15.5219 31.1733 15.8853 31.292 16.2488L19.9537 22.4272C19.3007 21.4581 18.2322 20.9129 17.1043 20.9129C15.7983 20.9129 14.6111 21.7004 14.0174 22.8513L3.80703 17.3996C2.7385 16.7939 1.90742 15.0373 2.02615 13.3412C2.08551 12.4932 2.38232 11.8269 2.79786 11.5846C3.09468 11.4029 3.39149 11.4634 3.80703 11.6452L3.86639 11.7057C6.59708 13.1595 15.4421 17.8842 15.7983 18.066C16.3919 18.3083 16.6888 18.4294 17.6979 17.9448L35.9817 8.25305C36.2785 8.1319 36.5753 7.88961 36.5753 7.46559C36.5753 6.92043 36.041 6.67814 36.041 6.67814C34.9725 6.19355 33.3697 5.4061 31.8263 4.67921C28.502 3.1043 24.7027 1.28709 23.0406 0.37849C21.6159 -0.408965 20.4286 0.257343 20.2505 0.37849L19.835 0.560211C12.2959 4.43692 2.32296 9.46451 1.72933 9.82796C0.720166 10.4337 0.0671755 11.7057 0.00781267 13.2806C-0.110913 15.7642 1.13571 18.3688 2.91659 19.2774L13.7206 24.9713C13.9581 26.6674 15.4421 28 17.1043 28C19.0039 28 20.488 26.4857 20.5473 24.5473L32.4199 18.0054C33.0135 18.49 33.7852 18.7323 34.557 18.7323C36.4566 18.7323 38 17.1573 38 15.219C38 13.2201 36.4566 11.6452 34.557 11.6452Z"
                                    fill="#4285FD"
                                />
                            </svg>
                            <div>
                                <div>Read the Docs</div>
                                <div className="muted">on GitBook</div>
                            </div>
                        </a>
                        <a href="https://discord.gg/BnC6kTWkUe" rel="noreferrer" target="blank">
                            <svg
                                width="32"
                                height="24"
                                viewBox="0 0 32 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M26.6491 1.98679C24.6108 1.05027 22.4485 0.389205 20.245 0.00358257C20.2036 -0.0101897 20.1623 0.0173548 20.1486 0.0586715C19.8593 0.595789 19.5839 1.13291 19.3498 1.69757C16.9672 1.33949 14.5433 1.33949 12.1469 1.69757C11.9128 1.13291 11.6373 0.595789 11.3343 0.0586715C11.3068 0.0173548 11.2655 0.00358257 11.2379 0.00358257C9.02059 0.389205 6.87212 1.05027 4.83382 1.98679C4.82005 2.00056 4.80628 2.00056 4.79251 2.0281C1.14286 7.24778 -0.50981 13.6106 0.137486 19.9458C0.137486 19.9733 0.151259 20.0009 0.178803 20.0147C2.5614 21.7775 5.21945 23.1134 8.04276 23.9948C8.08407 24.0086 8.12539 23.9948 8.15293 23.9535C8.75891 23.1272 9.29603 22.2458 9.76429 21.3368C9.79183 21.2817 9.76429 21.2266 9.72297 21.1991H9.7092C8.85532 20.8685 8.04276 20.4829 7.25774 20.0284C7.21642 20.0009 7.18888 19.932 7.21642 19.8907C7.21642 19.8769 7.23019 19.8632 7.24397 19.8632C7.40923 19.7392 7.5745 19.6153 7.72599 19.4775C7.75354 19.45 7.79486 19.45 7.8224 19.4638C12.8355 21.8188 18.6336 21.8188 23.6467 19.4638C23.6743 19.45 23.7156 19.45 23.7431 19.4775C23.8946 19.6015 24.0599 19.7392 24.2389 19.8632C24.2802 19.8907 24.294 19.9596 24.2527 20.0009C24.2389 20.0147 24.2389 20.0147 24.2251 20.0284C23.4401 20.4829 22.6138 20.8823 21.7737 21.1991C21.7186 21.2128 21.6911 21.2817 21.7186 21.323C21.7186 21.323 21.7186 21.323 21.7186 21.3368C22.1869 22.2458 22.724 23.1272 23.3299 23.9535C23.3575 23.9948 23.3988 24.0086 23.4401 23.9948C26.2772 23.1272 28.9353 21.7775 31.3179 20.0147C31.3454 20.0009 31.3592 19.9733 31.3592 19.9458C32.0202 13.6106 30.3676 7.23401 26.7041 2.0281C26.6766 2.01433 26.6628 2.00056 26.6491 1.98679ZM10.5218 16.3788C8.86909 16.2686 7.60204 14.8638 7.68468 13.1974C7.58827 11.5447 8.85532 10.1262 10.508 10.0298C12.1607 10.1124 13.4277 11.531 13.3451 13.1836C13.3451 13.1974 13.3451 13.1974 13.3451 13.2112C13.4415 14.8501 12.1744 16.2686 10.5218 16.3788ZM20.9749 16.365C19.3222 16.2548 18.0552 14.8501 18.1516 13.1974C18.0552 11.5447 19.3222 10.1262 20.9749 10.0298C22.6276 10.1124 23.8946 11.5172 23.812 13.1699C23.812 13.1836 23.812 13.1836 23.812 13.1974C23.9084 14.8501 22.6413 16.2686 20.9749 16.365C20.9887 16.365 20.9749 16.365 20.9749 16.365Z"
                                    fill="#5865F2"
                                />
                            </svg>
                            <div>
                                <div>International</div>
                                <div>community</div>
                            </div>
                        </a>
                        <a
                            href="https://zunamiprotocol.medium.com/"
                            rel="noreferrer"
                            target="blank"
                        >
                            <svg
                                width="36"
                                height="20"
                                viewBox="0 0 36 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.1577 0.000256993C15.8069 -0.0383054 20.4104 4.26783 20.4512 9.60229C20.4783 14.9496 15.9427 19.32 10.2935 19.3586C4.64431 19.3971 0.0407696 15.091 3.03235e-05 9.75654C3.03235e-05 9.73084 3.03235e-05 9.71798 3.03235e-05 9.69227C-0.0135494 4.35781 4.53567 0.0259653 10.1577 0.000256993ZM26.3719 0.565839C29.1694 0.565839 31.4508 4.6406 31.4508 9.66657C31.4508 14.6925 29.183 18.7673 26.3719 18.7673C23.5609 18.7673 21.2931 14.7054 21.2931 9.67942C21.2931 4.65345 23.5609 0.565839 26.3719 0.565839ZM34.2075 1.51705C35.1988 1.51705 36 5.18047 36 9.67942C36 14.1784 35.1988 17.8418 34.2075 17.8418C33.2161 17.8418 32.4285 14.1912 32.4285 9.67942C32.4285 5.16762 33.2297 1.51705 34.2075 1.51705Z"
                                    fill="black"
                                />
                            </svg>
                            <div>
                                <div>Zunami Blog</div>
                                <div className="muted">on Medium</div>
                            </div>
                        </a>
                        <a
                            href="https://twitter.com/zunamiprotocol?s=21"
                            rel="noreferrer"
                            target="blank"
                        >
                            <svg
                                width="30"
                                height="24"
                                viewBox="0 0 30 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M26.7625 5.97808C26.7767 6.23231 26.7767 6.50066 26.7767 6.75489C26.7767 14.7631 20.6205 24 9.37684 24C6.05647 24 2.80735 23.0537 0 21.2741C0.484518 21.3306 0.969036 21.3589 1.45355 21.3589C4.2039 21.3589 6.883 20.4408 9.04908 18.7601C6.42699 18.7177 4.13265 17.0229 3.33462 14.5512C4.24666 14.7207 5.20144 14.6924 6.09922 14.4523C3.24912 13.8874 1.19704 11.4016 1.19704 8.50624V8.43562C2.05208 8.9017 2.99261 9.17005 3.9759 9.1983C1.28255 7.41871 0.456017 3.87364 2.08058 1.10539C5.18719 4.89055 9.76161 7.19273 14.678 7.44695C13.9085 4.18437 15.9606 0.921777 19.2525 0.159094C21.3758 -0.335238 23.5989 0.342703 25.0952 1.91044C26.4632 1.64209 27.7743 1.14776 28.9713 0.441569C28.5153 1.83982 27.5605 3.04034 26.278 3.7889C27.4893 3.64766 28.6721 3.32282 29.7836 2.82848C28.9856 4.05725 27.9595 5.11653 26.7625 5.97808Z"
                                    fill="#1DA1F2"
                                />
                            </svg>
                            <div>
                                <div>Zunami</div>
                                <div>Twitter</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
