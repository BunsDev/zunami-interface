import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Col } from 'react-bootstrap';
import './SideBar.scss';
import { getBalanceNumber } from '../../utils/formatbalance';
// import { InfoBlock } from '../InfoBlock/InfoBlock';
import useFetch from 'react-fetch-hook';
import { BigNumber } from 'bignumber.js';
// import { FastDepositForm } from '../FastDepositForm/FastDepositForm';
import { WalletStatus } from '../WalletStatus/WalletStatus';
import useLpPrice from '../../hooks/useLpPrice';
import useBalanceOf from '../../hooks/useBalanceOf';
import useCrossChainBalances from '../../hooks/useCrossChainBalances';
import { useWallet } from 'use-wallet';
import useUzdBalance from '../../hooks/useUzdBalance';
import { isBSC, isETH, isPLG } from '../../utils/zunami';
import {
    zunamiInfoUrl,
    getHistoricalApyUrl,
    getTotalIncomeUrl,
    getActiveStratsUrl,
} from '../../api/api';
import { log } from '../../utils/logger';
import usePendingOperations from '../../hooks/usePendingOperations';
import { Pendings } from '../Pendings/Pendings';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

export interface ZunamiInfo {
    tvl: BigNumber;
    apy: number;
    apr: number;
}

export interface ZunamiInfoFetch {
    data: any;
    isLoading: boolean;
    error: any;
}

interface SideBarProps {
    isMainPage: boolean;
}

const performanceFee = 15;

export const SideBar = (props: SideBarProps): JSX.Element => {
    const {
        isLoading: isZunLoading,
        data: zunData,
        error: zunError,
    } = useFetch(zunamiInfoUrl) as ZunamiInfoFetch;

    const zunamiInfo = zunData as ZunamiInfo;

    const { account, connect, ethereum, chainId } = useWallet();
    const lpPrice = useLpPrice();
    const balance = useBalanceOf();
    const balances = useCrossChainBalances(lpPrice);
    const uzdBalance = useUzdBalance();
    let activeBalance = balances[0];

    if (isBSC(chainId)) {
        activeBalance = balances[1];
    }

    if (isPLG(chainId)) {
        activeBalance = balances[2];
    }

    const userMaxWithdraw =
        lpPrice.toNumber() > 0 && balance.toNumber() !== -1
            ? lpPrice.multipliedBy(activeBalance.value)
            : new BigNumber(-1);

    const [totalIncome, setTotalIncome] = useState('n/a');

    useEffect(() => {
        let activeBalance = balances[0].value;

        if (isBSC(chainId)) {
            activeBalance = balances[1].value;
        }

        if (isPLG(chainId)) {
            activeBalance = balances[2].value;
        }

        if (!account || activeBalance.toNumber() === -1 || !chainId) {
            return;
        }

        const getTotalIncome = async () => {
            let response = null;

            let totalIncomeBalance = activeBalance;

            // if user has minted UZD
            if (uzdBalance.toNumber()) {
                totalIncomeBalance = totalIncomeBalance.plus(uzdBalance.dividedBy(lpPrice));
            }

            if (totalIncomeBalance.toNumber() === 0) {
                setTotalIncome('$0');
                return;
            }

            try {
                const totalIncomeUrl = getTotalIncomeUrl(
                    account,
                    totalIncomeBalance.toString(),
                    chainId
                );

                response = await fetch(totalIncomeUrl);

                const data = await response.json();
                setTotalIncome(`$${data.totalIncome}`);

                log(`Total income. Requesting (${totalIncomeUrl})`);
                log(`Total income. Value set to: ${data.totalIncome}`);
            } catch (error: any) {
                log(`❗️ Error fetching total income: ${error.message}`);
            }
        };

        getTotalIncome();
    }, [account, balances, chainId, lpPrice, uzdBalance]);

    const poolBestAprDaily = zunamiInfo ? zunamiInfo.apr / 100 / 365 : 0;
    const poolBestAprMonthly = zunamiInfo ? (zunamiInfo.apr / 100 / 365) * 30 : 0;
    const poolBestApyYearly = zunamiInfo ? (zunamiInfo.apy / 100 / 365) * 30 * 12 : 0;
    const dailyProfit =
        userMaxWithdraw.toNumber() === -1
            ? 0
            : getBalanceNumber(userMaxWithdraw).toNumber() * poolBestAprDaily;
    const monthlyProfit =
        userMaxWithdraw.toNumber() === -1
            ? 0
            : getBalanceNumber(userMaxWithdraw).toNumber() * poolBestAprMonthly;
    const yearlyProfit =
        userMaxWithdraw.toNumber() === -1
            ? 0
            : getBalanceNumber(userMaxWithdraw).toNumber() * poolBestApyYearly;

    const pendingOperations = usePendingOperations();

    const pendingWithdraw =
        lpPrice.toNumber() > 0 && pendingOperations.withdraw.toNumber() !== -1
            ? lpPrice.multipliedBy(pendingOperations.withdraw)
            : new BigNumber(0);

    const [open, setOpen] = useState(false);
    const [gasPrice, setGasPrice] = useState('');

    useEffect(() => {
        fetch(
            'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=UPPVCS8VTCCNT3T83BZ8H6YRE9WVDY6W2P'
        )
            .then((response) => response.json())
            .then((data) => {
                setGasPrice(Number(data.result.ProposeGasPrice));
            });
    }, []);

    return (
        <Col id="sidebar-col" className={'SidebarColumn'}>
            <div className="Sidebar">
                <div className="Sidebar__Header d-flex align-items-center">
                    <svg
                        width="92"
                        height="19"
                        viewBox="0 0 92 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M88.7757 1.08348L89.583 0.276139C89.6706 0.188593 89.7745 0.119147 89.8889 0.0717671C90.0033 0.0243875 90.1259 0 90.2497 0C90.3735 0 90.4961 0.0243875 90.6104 0.0717671C90.7248 0.119147 90.8288 0.188593 90.9163 0.276139L91.7236 1.08348C91.8112 1.17103 91.8806 1.27496 91.928 1.38935C91.9754 1.50373 91.9998 1.62633 91.9998 1.75013C91.9998 1.87394 91.9754 1.99654 91.928 2.11092C91.8806 2.22531 91.8112 2.32924 91.7236 2.41678L90.9163 3.22413C90.8288 3.31168 90.7248 3.38112 90.6104 3.4285C90.4961 3.47588 90.3735 3.50027 90.2497 3.50027C90.1259 3.50027 90.0033 3.47588 89.8889 3.4285C89.7745 3.38112 89.6706 3.31168 89.583 3.22413L88.7757 2.41678C88.5988 2.23998 88.4995 2.00018 88.4995 1.75013C88.4995 1.50009 88.5988 1.26029 88.7757 1.08348ZM88.736 18.5383V4.91466H91.7633V18.5383H88.736Z"
                            fill="black"
                        />
                        <path
                            d="M80.6344 4.54053C78.7191 4.54053 77.0007 5.47648 75.8222 6.9608C75.2204 6.20527 74.4558 5.59527 73.5855 5.17622C72.7152 4.75717 71.7615 4.53988 70.7956 4.54053C70.3021 4.54025 69.8107 4.60325 69.3333 4.72799C68.9011 4.84357 68.5004 5.05494 68.161 5.34644C67.8216 5.63793 67.5521 6.00207 67.3726 6.41186V4.91649H65.9493V4.91879H64.3623V18.5424H67.3896V11.7306C67.3896 9.22296 68.9143 7.18962 70.7956 7.18962C72.6765 7.18962 74.2015 8.88407 74.2015 10.9741V18.5424H77.2288V11.7306C77.2288 9.22296 78.7535 7.18962 80.6344 7.18962C82.5156 7.18962 84.0403 8.88407 84.0403 10.9741V18.5424H87.0676V10.9741C87.0677 10.1292 86.9014 9.29263 86.5781 8.51205C86.2549 7.73147 85.781 7.02222 85.1836 6.42479C84.5862 5.82736 83.877 5.35347 83.0964 5.03016C82.3159 4.70686 81.4793 4.54048 80.6344 4.54053Z"
                            fill="black"
                        />
                        <path
                            d="M60.8615 4.91882V4.91652H59.4383V6.69103C59.1184 6.05875 58.5877 5.55812 57.9378 5.27571C56.8068 4.78726 55.5874 4.53701 54.3554 4.54056C49.8625 4.54056 46.2197 7.75936 46.2197 11.7307C46.2197 15.7013 49.0996 18.9207 52.653 18.9207C56.206 18.9207 58.9229 16.0408 58.9229 12.4871H55.8952C55.8952 13.4496 55.7586 14.3749 55.226 15.0428C54.9181 15.429 54.5265 15.7402 54.0808 15.9531C53.6351 16.166 53.1469 16.2749 52.653 16.2717C50.7717 16.2717 49.247 14.2383 49.247 11.7307C49.247 9.22299 51.5349 7.18965 54.3554 7.18965C57.177 7.18965 59.4645 9.223 59.4645 11.7307V18.5425H62.4918V4.91882H60.8615Z"
                            fill="black"
                        />
                        <path
                            d="M38.7299 4.54072C37.4722 4.53249 36.2268 4.78911 35.0748 5.29389C34.4326 5.58045 33.9118 6.08399 33.6038 6.71621V4.91668H32.1805V4.91898H30.5625V18.5426H33.5898V11.7308C33.5898 9.22315 35.8777 7.18981 38.6982 7.18981C40.5791 7.18981 42.1038 8.88426 42.1038 10.9743V18.5426H45.1311V10.9937C45.1339 9.29032 44.462 7.65519 43.2625 6.44591C42.0629 5.23663 40.4332 4.55163 38.7299 4.54072Z"
                            fill="black"
                        />
                        <path
                            d="M25.6551 4.91858V11.7304C25.6551 14.2381 23.3672 16.2714 20.547 16.2714C18.6658 16.2714 17.1411 14.5769 17.1411 12.4869V4.91858H14.1138V12.4676C14.1111 14.1709 14.783 15.8059 15.9826 17.0152C17.1821 18.2244 18.8117 18.9095 20.515 18.9205C21.7727 18.9287 23.0181 18.6721 24.1701 18.1673C24.8127 17.8802 25.3338 17.3762 25.6422 16.7435V18.5422H28.6824V4.91858H25.6551Z"
                            fill="black"
                        />
                        <path
                            d="M0 6.388V7.59712H8.23805L0 15.7879V18.5261H12.5131V15.7879H11.7606V15.7876H4.54665L4.99689 15.2698C5.02644 15.2387 5.05562 15.2073 5.08388 15.175L5.89789 14.2447L12.5131 7.47065V4.92065H0V6.388Z"
                            fill="black"
                        />
                    </svg>

                    <span className="ms-4 badge badge-pill badge-light d-none d-lg-flex align-items-center">
                        <span className="me-2">TVL</span>
                        <span className="text-primary me-2 vela-sans">
                            {`${
                                zunamiInfo && !zunError
                                    ? `$${Number(getBalanceNumber(zunamiInfo.tvl)).toLocaleString(
                                          'en',
                                          {
                                              maximumFractionDigits: 0,
                                          }
                                      )}`
                                    : 'n/a'
                            }`}
                        </span>
                        <svg
                            width="18"
                            height="14"
                            viewBox="0 0 18 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.96 10.105C1.704 11.5504 1.21333 12.3706 1 12.6H17V2.18967C16.7867 2.36174 16.328 2.72309 16.2 2.79192C16.04 2.87796 14.12 2.87796 13.64 2.79192C13.16 2.70589 13.0981 1.43471 12.84 1.15724C12.68 0.985213 12.1594 0.950992 11.88 1.0712C11.08 1.41539 11.56 2.96404 11.24 3.2221C10.9889 3.42459 10.44 3.48018 9.8 3.39414C9.16 3.30811 8.52 3.56629 8.2 3.82433C7.87994 4.08241 7.56 5.71719 7.08 6.1473C6.84709 6.356 6.44 6.23333 5.96 6.31937C5.48 6.40541 5.64 6.83566 5.16 7.00773C4.68 7.1798 3.08 6.74962 2.6 7.09369C2.31196 7.30016 2.28 8.2982 1.96 10.105Z"
                                fill="url(#paint0_linear_101_697)"
                                fillOpacity="0.16"
                            />
                            <path
                                d="M1 12.6C1.21333 12.3706 1.704 11.5504 1.96 10.105C2.28 8.2982 2.31196 7.30016 2.6 7.09369C3.08 6.74962 4.68 7.1798 5.16 7.00773C5.64 6.83566 5.48 6.40541 5.96 6.31937C6.44 6.23333 6.84709 6.356 7.08 6.1473C7.56 5.71719 7.87994 4.08241 8.2 3.82433C8.52 3.56629 9.16 3.30811 9.8 3.39414C10.44 3.48018 10.9889 3.42459 11.24 3.2221C11.56 2.96404 11.08 1.41539 11.88 1.0712C12.1594 0.950992 12.68 0.985213 12.84 1.15724C13.0981 1.43471 13.16 2.70589 13.64 2.79192C14.12 2.87796 16.04 2.87796 16.2 2.79192C16.328 2.72309 16.7867 2.36174 17 2.18967"
                                stroke="#FF7A00"
                                strokeWidth="1.1"
                                strokeLinecap="round"
                            />
                            <defs>
                                <linearGradient
                                    id="paint0_linear_101_697"
                                    x1="9"
                                    y1="1"
                                    x2="9"
                                    y2="12.6"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#F9A312" />
                                    <stop offset="1" stopColor="#F84C01" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                </div>
                <div className="Sidebar__Content">
                    <div
                        className="d-flex align-items-center d-lg-none mt-4"
                        style={{ gap: '5px' }}
                    >
                        <span className="badge badge-pill badge-light d-flex align-items-center">
                            <span className="me-2">TVL</span>
                            <span className="text-primary me-2 vela-sans">
                                {`${
                                    zunamiInfo && !zunError
                                        ? `$${Number(
                                              getBalanceNumber(zunamiInfo.tvl)
                                          ).toLocaleString('en', {
                                              maximumFractionDigits: 0,
                                          })}`
                                        : 'n/a'
                                }`}
                            </span>
                        </span>
                        <button className="btn btn-light btn-sm d-flex align-items-center">
                            <svg
                                className="me-2"
                                width="4"
                                height="4"
                                viewBox="0 0 4 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="2" cy="2" r="2" fill="#84B900" />
                            </svg>
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 392.69 348.59"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g data-name="Слой 1">
                                    <path
                                        fill="#000000"
                                        d="m164.96 54.505h-55.693c-27.802 0-50.421 22.21-50.421 49.509v46.257c0 27.3 22.619 49.51 50.42 49.51h55.694c27.802 0 50.421-22.21 50.421-49.51v-46.257c0-27.3-22.62-49.51-50.42-49.51zm31.07 49.509v46.257c0 16.796-13.938 30.462-31.07 30.462h-55.693c-17.132 0-31.07-13.666-31.07-30.462v-46.257c0-16.796 13.938-30.461 31.07-30.461h55.693c17.132 0 31.07 13.665 31.07 30.46z"
                                    />
                                    <path
                                        fill="#000000"
                                        d="M392.674 285.498V145.331c-.005-18.889-5.275-35.307-15.662-48.798-10.352-13.444-25.957-24.187-46.384-31.931-4.967-1.89-10.575.556-12.5 5.446a9.331 9.331 0 0 0 .15 7.245c1.043 2.355 2.958 4.161 5.394 5.084 16.926 6.417 29.169 14.644 37.43 25.153 8.218 10.454 12.216 22.833 12.221 37.845l.006 140.408c.176 5.785-2.185 11.396-6.478 15.39-3.966 3.686-9.054 5.57-13.964 5.169-9.765-.798-17.597-10.424-17.1-21.088v-73.116c-.023-8.626-2.063-30.666-20.457-48.987-14.38-14.32-31.433-18.755-41.111-20.12V78.062C274.219 35.019 238.548 0 194.702 0H79.516C35.67 0 0 35.019 0 78.063v192.47c0 43.042 35.67 78.06 79.516 78.06h115.186c43.846 0 79.517-35.018 79.517-78.06V162.334c7.752 1.473 18.259 5.157 27.345 14.207 13.743 13.688 14.857 30.73 14.872 35.622l.01 72.649c-.981 20.689 14.649 38.862 34.836 40.512.935.078 1.911.118 2.904.118 9.51 0 18.727-3.703 25.956-10.425 8.301-7.721 12.87-18.496 12.532-29.519ZM254.866 270.57c-.02 32.519-27.01 58.975-60.164 58.975H79.516c-33.175 0-60.164-26.473-60.164-59.012V78.063c0-32.542 26.989-59.015 60.164-59.015h115.186c33.175 0 60.164 26.473 60.164 59.014v192.471h1.5l-1.5.037Z"
                                    />
                                </g>
                            </svg>
                            <span className="ms-2">{gasPrice}</span>
                        </button>
                        {/* <button className="btn btn-light btn-sm d-flex align-items-center">
                            <svg
                                width="14"
                                height="15"
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.65152 12.4473C2.81022 12.4456 1.96894 12.4439 1.12764 12.4421C0.805142 12.4413 0.522557 12.3431 0.294388 12.105C0.19546 12.002 0.118449 11.8799 0.0680223 11.7463C0.0175954 11.6126 -0.00520567 11.4701 0.000996377 11.3274C0.00719843 11.1847 0.0422888 11.0447 0.10412 10.9159C0.165952 10.7871 0.253251 10.6722 0.360747 10.5782C1.08955 9.94138 1.57314 9.15957 1.74838 8.2023C1.79375 7.9455 1.81843 7.68547 1.82216 7.42472C1.83309 6.87356 1.82463 6.32203 1.82569 5.77065C1.82965 3.70536 3.24363 1.97388 5.27006 1.56225C5.84039 1.44934 6.42808 1.45758 6.99502 1.58646C7.01162 1.59277 7.02753 1.60078 7.04248 1.61036C6.5291 2.89516 6.55776 4.16246 7.23885 5.37742C7.91758 6.58816 8.97429 7.28298 10.3382 7.52579C10.3612 7.71689 10.3783 7.90971 10.4085 8.10043C10.557 9.03564 10.9891 9.81915 11.685 10.458C11.8686 10.6265 12.0417 10.7985 12.1207 11.0451C12.3445 11.7432 11.8298 12.4368 11.0751 12.4412C10.248 12.446 9.42083 12.4423 8.5937 12.4425C8.56999 12.4425 8.54627 12.4447 8.52256 12.4458L3.65152 12.4473Z"
                                    fill="black"
                                />
                                <path
                                    d="M10.9529 6.34896C9.27019 6.3486 7.90484 4.98309 7.9087 3.30445C7.91187 2.49697 8.23519 1.72371 8.80773 1.1543C9.38028 0.584891 10.1553 0.265825 10.9628 0.267094C11.7678 0.270269 12.5389 0.591686 13.1079 1.16123C13.6769 1.73077 13.9975 2.50221 13.9998 3.30725C13.9998 3.70711 13.9209 4.10303 13.7676 4.47238C13.6144 4.84172 13.3899 5.17724 13.1069 5.45974C12.8239 5.74224 12.488 5.96618 12.1184 6.11876C11.7488 6.27134 11.3527 6.34957 10.9529 6.34896Z"
                                    fill="#FF8B02"
                                />
                                <path
                                    d="M3.65186 12.447L8.5229 12.4456C8.49244 13.6395 7.71194 14.582 6.55325 14.824C5.28063 15.0898 3.98918 14.2492 3.71224 12.9687C3.67541 12.7984 3.67118 12.6211 3.65186 12.447Z"
                                    fill="black"
                                />
                            </svg>
                        </button> */}
                        <ThemeSwitcher />
                        <div
                            className="nav-menu"
                            onClick={() => {
                                // setOpen(!open);
                                document.getElementById('MobileSidebar').classList.toggle('active');
                                document.body.classList.toggle('overflow');
                            }}
                        >
                            {open && (
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1 19.3848L19.3848 0.99999"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M1 1L19.3848 19.3848"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            )}
                            {!open && (
                                <svg
                                    width="35"
                                    height="10"
                                    viewBox="0 0 35 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M13.2793 9L34.0002 9"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M1 1H34"
                                        stroke="#000000"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            )}
                        </div>
                    </div>
                    <WalletStatus />
                    {props.children}
                </div>
            </div>
        </Col>
    );
};
