function lengthOfLongestSubstring(s: string): number {
    if (s.length === 0) 
        return 0
    if (s.length === 1) {
        return 1
    }
    let p1 = 0;
    let p2 = 0;
    let max = 0;
    for (let i = 1; i < s.length; i++) {
        for (let j = p1; j <= p2; j++) {
            if (s[i] === s[j]) {
                max = Math.max(p2 - p1 + 1, max);
                p1 = j + 1
                break
            }
        }
        p2 = i
    }
    return Math.max(p2 - p1 + 1, max);
};


function main() {
    const s2 = "au"
    const res1 = lengthOfLongestSubstring(s2)
    console.log(res1)
}

main()