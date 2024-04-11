#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和
#

# @lc code=start
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        subMap = dict()
        for i, val in enumerate(nums):
            if subMap.get(val) is not None:
                return [subMap.get(val), i]
            subMap[target-val] = i
# @lc code=end

