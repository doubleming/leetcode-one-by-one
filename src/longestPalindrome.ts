function _longestPalindrome(s: string): string {
    let maxS = ''
    function getPalindrome(p1: number, p2: number,s:string) {
        while(p1>= 0 && p2 < s.length) {
            if (s[p1] === s[p2]) {
                if (p2-p1 + 1 > maxS.length) {
                    maxS = s.slice(p1, p2 + 1)
                }
                p1--;
                p2++;
            } else {
                break
            }
        }
    }
    for (let i = 0; i < s.length; i++) {
        getPalindrome(i, i, s)
        getPalindrome(i, i + 1, s)
    }
    return maxS
};

const s = "cbbd"
console.log(longestPalindrome(s))