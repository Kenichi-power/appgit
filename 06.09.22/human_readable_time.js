function humanReadable(seconds) {
    let hours = parseInt(seconds/3600);
    let minutes = parseInt(seconds/60)%60;
    seconds = (seconds%60);
    if(hours<1){hours = 0}
    if(hours < 10){hours = '0' + hours}
    if(minutes < 10){minutes = '0' + minutes}
    if(seconds < 10){seconds = '0' + seconds}
    return  hours + ':'+ minutes + ':' + seconds;
    }