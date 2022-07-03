import {useState} from 'react';
import './NetworkSelector.scss';

export const NetworkSelector = (): JSX.Element => {
    const networks = [
        {
            title: 'Ethereum',
            value: 'ethereum',
        },
        {
            title: 'BSC',
            value: 'bsc',
        }
    ];

    const [activeNetwork, setActiveNetwork] = useState(networks[0]);

    return (
        <div className="NetworkSelector">
            <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.49847 0.628418L6.35645 1.11088V15.1099L6.49847 15.2516L12.9965 11.4105L6.49847 0.628418Z" fill="#343434"/>
                <path d="M6.49821 0.628418L0 11.4105L6.49821 15.2516V8.45687V0.628418Z" fill="#8C8C8C"/>
                <path d="M6.49801 16.4822L6.41797 16.5798V21.5664L6.49801 21.8001L13.0001 12.6431L6.49801 16.4822Z" fill="#3C3C3B"/>
                <path d="M6.49821 21.8001V16.4822L0 12.6431L6.49821 21.8001Z" fill="#8C8C8C"/>
                <path d="M6.49805 15.2522L12.9961 11.4112L6.49805 8.45752V15.2522Z" fill="#141414"/>
                <path d="M0 11.4112L6.49821 15.2522V8.45752L0 11.4112Z" fill="#393939"/>
            </svg>
            <span>{activeNetwork.title}</span>
            <svg className="NetworkSelector__Toggler" width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8 4L15 1" stroke="#404040" strokeWidth="1.1" strokeLinecap="round"/>
            </svg>
            <select value={activeNetwork.value} onChange={(e) => {
                setActiveNetwork(networks.filter(network => network.value === e.nativeEvent.target.value)[0]);
            }}>
                <option value="ethereum">Ethereum</option>
                <option value="bsc">BSC</option>
            </select>
        </div>
    );
};