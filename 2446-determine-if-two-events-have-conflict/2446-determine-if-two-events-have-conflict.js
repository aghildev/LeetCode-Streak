/**
 * @param {string[]} event1
 * @param {string[]} event2
 * @return {boolean}
 */
var haveConflict = function(event1, event2) {
        
    const START = 0, END = 1;
        
        // Event 1's ending time is enclosed by event 2
        let bounded_by_evt_2 = (event2[START] <= event1[END] && event1[END] <= event2[END]);
        
        // Event 2's ending time is enclosed by event 1
        let bounded_by_evt_1 = (event1[START] <= event2[END] && event2[END] <= event1[END]);
        
        return bounded_by_evt_1 || bounded_by_evt_2 ;        
        
};