


window.ethereum.enable(); // this helps us to connect with the metamask wallet 

    // This is a different way to connect with the testnet if it does not recognize the network 
    // const network = {
    //     name: 'sepolia',
    //     chainId: 11155111,
    //     url: 'https://eth-sepolia.g.alchemy.com/v2/aDaiAjy-T4aunOKsavifuvEZ5YARsGi-'
    // }
    // const provider = new ethers.providers.JsonRpcProvider(network);

    const provider = new ethers.providers.Web3Provider(
        web3.currentProvider, 
        "sepolia"
    );


    const MoodContractAddress = "0x83b321005e9e193f3e490be0c95f223f8cf9d361"
    const MoodContractABI = 
    [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_mood",
                    "type": "string"
                }
            ],
            "name": "setMood",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMood",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
    let MoodContract;
    let signer; //to interact with the transactions

    // metamask (1,2,3) 
    provider.listAccounts().then(function (accounts){
        signer = provider.getSigner(accounts[0]);
        // The line below does noting but semplifies the contracts abi and make it eariser for us to call the functions givn in our deployed smart contract.
        MoodContract = new ethers.Contract (
            MoodContractAddress,
            MoodContractABI,
            signer
        );
    });

    // this is a javascript function 
    async function getMood(){
        const getMood = MoodContract.getMood() // the function getMood() is beign fetched from the contract ABI.
        const Mood = await getMood;
        document.getElementById("showMood").innerText = `Your Mood: ${Mood}`;
        console.log(Mood);
    }

    async function setMood(){
        let mood = document.getElementById("mood").value; 
        const setMood = MoodContract.setMood(mood);
        await setMood;

    }