/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
 let arrIdx = 0;
 let seqIdx = 0;
 while (arrIdx < t.length && seqIdx < s.length) {
 if (t[arrIdx] === s[seqIdx]) seqIdx++;
 arrIdx++;
 }
 return seqIdx === s.length;

}

