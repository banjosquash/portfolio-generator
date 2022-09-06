const profileDataArgs = process.argv.slice(2, process.argv.length);


const printProfileData = profileDataArrs => {
    for (let i = 0; i < profileDataArrs.length; i++){
        console.log(profileDataArrs[i]);
    }
    
};

printProfileData(profileDataArgs)