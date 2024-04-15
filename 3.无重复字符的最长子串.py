#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] 无重复字符的最长子串
#

# @lc code=start
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0:
            return 0
        if len(s) == 1:
            return 1
        p1 = 0
        p2 = 0
        maxStr = 0
        for i in range(1, len(s)):
            for j in range(p1, p2 + 1):
                if s[j] == s[i]:
                    maxStr = max(p2 - p1 + 1, maxStr)
                    p1 = j + 1
                    break
            p2 = i
        return max(p2-p1+1, maxStr)
        
# @lc code=end

