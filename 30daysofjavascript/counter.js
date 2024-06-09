var createCounter = function(n) {
    firsttime = true
    
    return function() {
        if (firsttime) {
            firsttime = false  
            return n
        }

        n = n + 1
        return n
    };
};
