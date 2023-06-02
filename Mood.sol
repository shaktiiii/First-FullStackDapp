// This is just for the reference purpose of the Daap 
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MoodDiary {
    string mood; 

    function setMood(string memory _mood) public  
    {
        mood = _mood; 
    } 

    function getMood() public  view  returns (string memory )
    {
        return  mood; 
    }
}

// Here is the deployed address 
// 0x83b321005e9e193f3e490be0c95f223f8cf9d361 
// Here is the contracts ABI
// [
    //     {
    //         "inputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "_mood",
    //                 "type": "string"
    //             }
    //         ],
    //         "name": "setMood",
    //         "outputs": [],
    //         "stateMutability": "nonpayable",
    //         "type": "function"
    //     },
    //     {
    //         "inputs": [],
    //         "name": "getMood",
    //         "outputs": [
    //             {
    //                 "internalType": "string",
    //                 "name": "",
    //                 "type": "string"
    //             }
    //         ],
    //         "stateMutability": "view",
    //         "type": "function"
    //     }
    // ]